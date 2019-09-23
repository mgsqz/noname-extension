game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"凤凰",content:function (config, pack) {

},precontent:function () {

},help:{},config:{},package:{
    character:{
        character:{
            firephoenix:["female","wei",3,["fh_yongsheng","fh_gongshen","fh_shenshou","fh_qianxun","yeyan","qiangwu","shenxian","fh_yanyujian"],["des:phoenix"]],
        },
        translate:{
            firephoenix:"凤凰",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            "fh_gongshen":{
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                unique:true,
                content:function () {
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i] != player) {
                            game.players[i].forcemin = true;
                        }
                    }
                },
            },
            "fh_shenshou":{
                trigger:{
                    player:"turnOverBefore",
                },
                priority:20,
                forced:true,
                filter:function (event, player) {
        return ! player.isTurnedOver();
    },
                content:function () {
        trigger.cancel();
        game.log(player, '取消了翻面');
    },
            },
            "fh_qianxun":{
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(player!=target && card.name!='tao') return false;
        },
                    targetInRange:function (card,player,target,now){
            var type=get.type(card);
            if(type=='trick'||type=='delay') return true;
        },
                    canBeDiscarded:function (card){
            if(get.is.altered('xinqicai')&&get.position(card)=='e') return false;
        },
                    cardDiscardable:function (card){
            if(get.is.altered('xinqicai')&&get.position(card)=='e') return false;
        },
                    globalFrom:function (from,to,current){
            if(true) return current-5;
        },
                    globalTo:function (from,to,current){
            if(true) return current+5;
        },
                },
            },
            "fh_xinsheng":{
                unique:true,
                trigger:{
                    global:"damageEnd",
                },
                frequent:true,
                filter:function (event,player){
                    return player.storage.huashen&&player.storage.huashen.list&&
                        player.storage.huashen.list.length>0;
                },
                content:function (){
                    for(var i=0;i<trigger.num;i++){
                        lib.skill.fh_huashen.get(player);
                    }
                },
                ai:{
                    "maixie_hp":true,
                },
            },
            "fh_qianhuan":{
                trigger:{
                    player:"phaseBegin",
                    global:"gameDrawBegin",
                },
                forced:false,
                unique:true,
                priority:-333,
                init:function (player){
        player.storage.SE_fenpei=[];
        player.storage.fenpei={
            list:[],
            owned:{},
            player:player,
        }
    },
                content:function (){
        "step 0"                            
        if(get.config('double_character')||lib.config.mode=='guozhan'){
            event.num=6;
        }
        else{
            event.num=6;
        }
        var players=[];                            
        var slist=player.storage.fenpei.owned;
        for(var i in lib.character){
            players.push(i);
        }            
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            players.remove([game.players[i].name]);
            players.remove([game.players[i].name1]);
            players.remove([game.players[i].name2]);
        }                                            
        players.remove(player.name);
        var list=players.randomGets(3);
        event.list=list;
        var list=[];
        for(var i=0;i<player.storage.SE_fenpei.length;i++){
            list.push(player.storage.SE_fenpei[i]);
        }
        if(list.length){
            for(var i=0;i<list.length;i++){    
                player.removeSkill(list[i]);
            }
            event.list.push(player.name);
        }    
        player.storage.SE_fenpei=[];
        "step 1"
        for(var i=0;i<event.list.length;i++){    
            var skills=lib.character[event.list[i]][3].slice(0);
            for(var j=0;j<skills.length;j++){
                if(!lib.translate[skills[j]+'_info']){
                    skills.splice(j--,1);
                }
                var info=lib.skill[skills[j]];
                if(false){
                    skills.splice(j--,1);
                }    
                if(player.skills.contains(skills[j])) skills.splice(j--,1);
            }
            player.storage.fenpei.owned[event.list[i]]=skills;
        }                                
        var list=[];
        for(var i=0;i<event.list.length;i++){
            var skills=lib.character[event.list[i]][3];
            for(var j=0;j<skills.length;j++){
                var info=lib.skill[skills[j]];
                if(!lib.translate[skills[j]+'_info']) continue;    
                if(false) continue;        
                if(player.skills.contains(skills[j])) continue;
                list.push(skills[j]);
            }
        }                            
        if(!list.length){
            var list=[];
            for(var i=0;i<player.storage.SE_fenpei.length;i++){
                list.push(player.storage.SE_fenpei[i]);
            }
            if(list.length){
                lib.character[player.name][3]=list;
            }    
            event.finish();
        }
        else{
            if(event.isMine()){
                var slist=player.storage.fenpei.owned;
                event.dialog=ui.create.dialog('选择获得技能',[event.list,'character'],true);
                event.control=ui.create.control();
                event.clickControl=function(link){
                    if(!player.skills.contains(link)){
                        var currentname=event.dialog.querySelector('.selected.button').link;
                        event.num--;
                        player.addSkill(link);
                        player.popup(link);
                        player.storage.SE_fenpei=player.storage.SE_fenpei.concat(link);                                
                    }
                    ui.auto.show();
                    event.dialog.close();
                    event.control.close();
                    game.resume();                                        
                };
                event.control.custom=event.clickControl;
                ui.auto.hide();
                game.pause();
                for(var i=0;i<event.dialog.buttons.length;i++){
                    event.dialog.buttons[i].classList.add('selectable');
                }
                event.custom.replace.button=function(button){
                    if(button.classList.contains('selected')){
                        button.classList.remove('selected');
                        event.control.style.opacity=0;
                    }
                    else{
                        for(var i=0;i<event.dialog.buttons.length;i++){
                            event.dialog.buttons[i].classList.remove('selected');
                        }
                        button.classList.add('selected');
                        event.control.replace(slist[button.link]);
                        if(getComputedStyle(event.control).opacity==0){
                            event.control.style.transition='opacity 0.5s';
                            ui.refresh(event.control);
                            event.control.style.opacity=1;
                            event.control.style.transition='';
                            ui.refresh(event.control);
                        }
                        else{
                            event.control.style.opacity=1;
                        }                                            
                    }
                    event.control.custom=event.clickControl;
                }
                event.custom.replace.window=function(){
                    for(var i=0;i<event.dialog.buttons.length;i++){
                        if(event.dialog.buttons[i].classList.contains('selected')){
                            event.control.style.opacity=0;    
                            event.dialog.buttons[i].classList.remove('selected');
                            event.control.custom=event.clickControl;
                            return;
                        }
                    }
                }
            }
            else{
                var skills=[];
                for(var i in lib.character){ 
                    for(var j=0;j<lib.character[i][3].length;j++){ 
                        if(player.skills.contains(lib.character[i][3][j])) continue;
                        var info=lib.skill[lib.character[i][3][j]];        
                        if(info&&!info.unique&&!info.forbid){
                            skills.add(lib.character[i][3][j]); 
                        }    
                    } 
                }
                for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].name||!lib.character[game.players[i].name]) continue;
                    var skills2=lib.character[game.players[i].name][3];
                    for(var j=0;j<skills2.length;j++){
                        if(skills.contains(skills2[j])){
                            skills.remove(skills2[j]);
                        }
                    }
                }                                    
                var skills3=skills.randomGets(event.num);
                event.num=0;
                for(var i=0;i<skills3.length;i++){ 
                    player.addSkill(skills3[i]);
                    player.storage.SE_fenpei=player.storage.SE_fenpei.concat(skills3[i]);
                }
            }
        }
        "step 2"                        
        if(event.num) event.goto(1);
        "step 3"
        var list=[];
        for(var i=0;i<player.storage.SE_fenpei.length;i++){
            list.push(player.storage.SE_fenpei[i]);
        }
        if(list.length){
            lib.character[player.name][3]=list;
        }                                
    },
                ai:{
                    threaten:4,
                },
                group:["fh_qianhuan2"],
            },
            "fh_qianhuan2":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                priority:100,
                unique:true,
                popup:false,
                silent:true,
                filter:function (event,player){
            return false;
    },
                content:function (){
        "step 0"
        if(lib.config.mode=='guozhan'&&get.config('guozhan_mode')!='mingjiang') player.showCharacter(2);
        player.uninit();
        player.style.transform='';
        player.node.avatar.style.transform='';
        player.node.avatar2.style.transform='';
        player.classList.remove('fullskin2');
        player.node.avatar2.setBackground='';
        player.node.avatar2.hide();
        "step 1"
        player.init('firephoenix');
    },
            },
            "fh_huashen":{
                unique:true,
                init:function (player){
        player.storage.huashen={
            list:[],
            shown:[],
            owned:{},
            player:player,
        }
    },
                get:function (player,num){
        if(typeof num!='number') num=1;
        var list=[];
        while(num--){
            var name=player.storage.huashen.list.randomRemove();
            var skills=lib.character[name][3].slice(0);
            for(var i=0;i<skills.length;i++){
                var info=lib.skill[skills[i]];
                if(false){
                    skills.splice(i--,1);
                }
            }
            player.storage.huashen.owned[name]=skills;
            // player.popup(name);
            game.log(player,'获得了一个化身');
            list.push(name);
        }
        if(player.isUnderControl(true)){
            var cards=[];
            for(var i=0;i<list.length;i++){
                var cardname='huashen_card_'+list[i];
                lib.card[cardname]={
                    fullimage:true,
                    image:'character:'+list[i]
                }
                lib.translate[cardname]=lib.translate[list[i]];
                cards.push(game.createCard(cardname,'',''));
            }
            player.$draw(cards);
        }
    },
                group:["fh_huashen1","fh_huashen2"],
                intro:{
                    content:function (storage,player){
            var str='';
            var slist=storage.owned;
            var list=[];
            for(var i in slist){
                list.push(i);
            }
            if(list.length){
                str+=get.translation(list[0]);
                for(var i=1;i<list.length;i++){
                    str+='、'+get.translation(list[i]);
                }
            }
            var skill=player.additionalSkills.huashen[0];
            if(skill){
                str+='<p>当前技能：'+get.translation(skill);
            }
            return str;
        },
                    mark:function (dialog,content,player){
            var slist=content.owned;
            var list=[];
            for(var i in slist){
                list.push(i);
            }
            if(list.length){
                dialog.addSmall([list,'character']);
            }
            if(!player.isUnderControl(true)){
                for(var i=0;i<dialog.buttons.length;i++){
                    if(!content.shown.contains(dialog.buttons[i].link)){
                        dialog.buttons[i].node.group.remove();
                        dialog.buttons[i].node.hp.remove();
                        dialog.buttons[i].node.intro.remove();
                        dialog.buttons[i].node.name.innerHTML='未<br>知';
                        dialog.buttons[i].node.name.dataset.nature='';
                        dialog.buttons[i].style.background='';
                        dialog.buttons[i]._nointro=true;
                        dialog.buttons[i].classList.add('menubg');
                    }
                }
            }
            if(player.additionalSkills.huashen){
                var skill=player.additionalSkills.huashen[0];
                if(skill){
                    dialog.add('<div><div class="skill">【'+get.translation(skill)+
                    '】</div><div>'+lib.translate[skill+'_info']+'</div></div>');
                }
            }
        },
                },
                setup:function (player,gain){
        for(var i in lib.character){
            if(lib.filter.characterDisabled2(i)) continue;
            var add=false;
            for(var j=0;j<lib.character[i][3].length;j++){
                var info=lib.skill[lib.character[i][3][j]];
                if(!info){
                    continue;
                }
                if(true){
                    add=true;break;
                }
            }
            if(add){
                player.storage.huashen.list.push(i);
            }
        }
        for(var i=0;i<game.players.length;i++){
            player.storage.huashen.list.remove([game.players[i].name]);
            player.storage.huashen.list.remove([game.players[i].name1]);
            player.storage.huashen.list.remove([game.players[i].name2]);
        }
        player.storage.huasheninited=true;
        if(gain){
            player.markSkill('huashen');
            lib.skill.fh_huashen.get(player,2);
            _status.event.trigger('huashenStart');
        }
    },
            },
            "fh_huashen1":{
                trigger:{
                    global:"gameStart",
                    player:["enterGame","damageBefore"],
                },
                forced:true,
                popup:false,
                priority:10,
                filter:function (event,player){
        return !player.storage.huasheninited;
    },
                content:function (){
        lib.skill.fh_huashen.setup(player,trigger.name!='damage');
    },
            },
            "fh_huashen2":{
                trigger:{
                    player:["phaseBeginStart","phaseAfter","huashenStart"],
                },
                filter:function (event,player,name){
        if(name=='phaseBeginStart'&&game.phaseNumber==1) return false;
        return true;
    },
                forced:true,
                content:function (){
        'step 0'
        if(get.is.empty(player.storage.huashen.owned)){
            if(!player.storage.huasheninited){
                lib.skill.fh_huashen.setup(player,false);
            }
            event.finish();
            return;
        }
        event.trigger('playercontrol');
        'step 1'
        var slist=player.storage.huashen.owned;
        var list=[];
        for(var i in slist){
            list.push(i);
        }
        event.switchToAuto=function(){
            var currentbutton=event.dialog.querySelector('.selected.button');
            if(!currentbutton){
                currentbutton=event.dialog.buttons[0];
                currentbutton.classList.add('selected');
            }
            event.clickControl(player.storage.huashen.owned[currentbutton.link].randomGet());
        }

        event.clickControl=function(link,type){
            if(link!='cancel2'){
                var currentname;
                if(type=='ai'){
                    currentname=event.currentname;
                }
                else{
                    currentname=event.dialog.querySelector('.selected.button').link;
                }
                player.storage.huashen.shown.add(currentname);
                var mark=player.marks.huashen;
                if(trigger.name=='game'||trigger.name=='enterGame'){
                    mark.hide();
                    // mark.style.transform='scale(0.8)';
                    mark.style.transition='all 0.3s';
                    setTimeout(function(){
                        mark.style.transition='all 0s';
                        ui.refresh(mark);
                        mark.setBackground(currentname,'character');
                        if(mark.firstChild){
                            mark.firstChild.remove();
                        }
                        setTimeout(function(){
                            mark.style.transition='';
                            mark.show();
                            // mark.style.transform='';
                        },50);
                    },500);
                }
                else{
                    if(mark.firstChild){
                        mark.firstChild.remove();
                    }
                    mark.setBackground(currentname,'character');
                }
                if(!player.additionalSkills.huashen||!player.additionalSkills.huashen.contains(link)){
                    player.addAdditionalSkill('huashen',link);
                    //player.logSkill('huashen2');
                    player.flashAvatar('huashen',currentname);
                    game.log(player,'获得技能','【'+get.translation(link)+'】');
                    player.popup(link);

                    if(event.dialog&&event.dialog.buttons){
                        for(var i=0;i<event.dialog.buttons.length;i++){
                            if(event.dialog.buttons[i].classList.contains('selected')){
                                var name=event.dialog.buttons[i].link;
                                player.sex=lib.character[name][0];
                                player.group=lib.character[name][1];
                                break;
                            }
                        }
                    }
                }
            }
            if(type!='ai'){
                event.dialog.close();
                event.control.close();
                game.resume();
            }
        };
        if(event.isMine()){
            event.dialog=ui.create.dialog('选择获得一项技能',[list,'character']);
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('pointerdiv');
            }
            if(trigger.name=='game'){
                event.control=ui.create.control();
            }
            else{
                event.control=ui.create.control(['cancel2']);
            }
            event.control.custom=event.clickControl;
            event.control.replaceTransition=false;
            // ui.auto.hide();
            game.pause();
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            event.custom.replace.button=function(button){
                if(button.classList.contains('selected')){
                    button.classList.remove('selected');
                    if(trigger.name=='game'){
                        event.control.style.opacity=0;
                    }
                    else{
                        event.control.replace(['cancel2']);
                    }
                }
                else{
                    for(var i=0;i<event.dialog.buttons.length;i++){
                        event.dialog.buttons[i].classList.remove('selected');
                    }
                    button.classList.add('selected');
                    event.control.replace(slist[button.link]);
                    if(trigger.name=='game'&&getComputedStyle(event.control).opacity==0){
                        event.control.style.transition='opacity 0.5s';
                        ui.refresh(event.control);
                        event.control.style.opacity=1;
                        event.control.style.transition='';
                        ui.refresh(event.control);
                    }
                    else{
                        event.control.style.opacity=1;
                    }
                }
                event.control.custom=event.clickControl;
            }
            event.custom.replace.window=function(){
                for(var i=0;i<event.dialog.buttons.length;i++){
                    if(event.dialog.buttons[i].classList.contains('selected')){
                        event.dialog.buttons[i].classList.remove('selected');
                        if(trigger.name=='game'){
                            event.control.style.opacity=0;
                        }
                        else{
                            event.control.replace(['cancel2']);
                        }
                        event.control.custom=event.clickControl;
                        return;
                    }
                }
            }
        }
        else{
            var skills=[];
            var map={};
            for(var i=0;i<list.length;i++){
                var sub=player.storage.huashen.owned[list[i]];
                skills.addArray(sub);
                for(var j=0;j<sub.length;j++){
                    map[sub[j]]=list[i];
                }
            }
            var add=player.additionalSkills.huashen;
            if(typeof add=='string'){
                add=[add];
            }
            if(Array.isArray(add)){
                for(var i=0;i<add.length;i++){
                    skills.remove(add[i]);
                }
            }
            var cond='out';
            if(event.triggername=='phaseBegin'){
                cond='in';
            }
            skills.randomSort();
            skills.sort(function(a,b){
                return get.skillRank(b,cond)-get.skillRank(a,cond);
            });
            var choice=skills[0];
            if(choice){
                event.currentname=map[choice];
                event.clickControl(choice,'ai');
            }
        }
    },
            },
            "fh_zhiyan":{
                trigger:{
                    global:"phaseBegin",
                },
                content:function () {
        "step 0"
        player.chooseTarget('请选择目标', true).ai = function(target) {
            return get.attitude(player, target);
        }
        "step 1"
        var list = [];
        var skills = result.targets[0].getSkills(false,false,true);
        for (var i = 0; i < skills.length; i++) {
            if (lib.skill[skills[i]].fixed) continue;
            list.push(skills[i]);
        }
        event.target=result.targets[0];
        if(list.length>0){
            player.chooseControl(list).set('prompt','请选择要失效的技能').set('ai',function(){return list.randomGet()});
        }
        else if(event.target.maxHp>1){
            event.target.maxHp--;
            event.finish();
        }
        else{
            event.finish();
        }
        'step 2'
        event.target.popup(result.control);
        event.target.disableSkill(event.target.name, result.control);
        game.log(event.target,'失去技能', '【' + get.translation(result.control) + '】');
        //var arr = Object.keys(event.target);
        //game.log(arr);
        //game.log(event.target.name + '__' + result.control);
    },
            },
            "fh_huiguang":{
                trigger:{
                    global:"phaseEnd",
                },
                content:function () {
        "step 0"
        player.chooseTarget('请选择目标', true).ai = function(target) {
            return get.attitude(player, target);
        }
        "step 1"
        event.target=result.targets[0];
        event.target.popup('恢复技能');
        event.target.enableSkill(event.target.name);
        game.log(event.target,'恢复技能');
    },
            },
            "fh_yongsheng":{
                trigger:{
                    player:"damageBefore",
                },
                forced:false,
                content:function (){
                    trigger.cancel();
                },
            },
            "fh_zhitian":{
                trigger:{
                    player:"phaseBegin",
                },
                content:function () {
        "step 0"
        if (true) {
            var skills = [];
            for (var i in lib.character) {
                for (var j = 0; j < lib.character[i][3].length; j++) {
                    var info = lib.skill[lib.character[i][3][j]];
                    if (true) {
                        skills.add(lib.character[i][3][j]);
                    }
                }
            }
            var link = skills.randomGet();
            event.link = link;
        }
        "step 1"
        var link = event.link;
        player.chooseTarget('知天：给一名角色技能【' + get.translation(link) + '】：'+lib.translate[link + '_info'], true).ai = function(target) {
            return get.attitude(player, target);
        }
        "step 2"
        var link = event.link;
        if (result.bool) {
            player.line(result.targets[0], 'green');
            result.targets[0].addSkill(link);
            result.targets[0].mark(link, {
                name: get.translation(link),
                content: lib.translate[link + '_info']
            });
            game.log(result.targets[0], '获得技能', '【' + get.translation(link) + '】');
        }
    },
            },
            "fh_yanyujian":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
    player.addSkill('fh_cixiong');
    player.addSkill('qinggang_skill');
    player.addSkill('fh_zhangba');
    player.addSkill('zhuge_skill');
    },
            },
            "fh_zhangba":{
                enable:["chooseToUse","chooseToRespond"],
                filterCard:true,
                selectCard:1,
                position:"h",
                viewAs:{
                    name:"sha",
                },
                filter:function (event, player) {
        return player.countCards('h') >= 1;
    },
                audio:"ext:凤凰:true",
                prompt:"将一张手牌当杀使用或打出",
                check:function (card) {
        if (card.name == 'sha') return 0;
        return 6 - get.useful(card)
    },
                ai:{
                    respondSha:true,
                    skillTagFilter:function (player) {
            return player.countCards('h') >= 1;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
                        if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
                        return 3;
                    },
                    result:{
                        target:function (player,target){
                            if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                                if(get.attitude(player,target)>0){
                                    return -6;
                                }
                                else{
                                    return -3;
                                }
                            }
                            return -1.5;
                        },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                            if(card.nature=='poison') return;
                            return 1;
                        },
                        natureDamage:function (card){
                            if(card.nature) return 1;
                        },
                        fireDamage:function (card,nature){
                            if(card.nature=='fire') return 1;
                        },
                        thunderDamage:function (card,nature){
                            if(card.nature=='thunder') return 1;
                        },
                        poisonDamage:function (card,nature){
                            if(card.nature=='poison') return 1;
                        },
                    },
                },
            },
            "fh_cixiong":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:7,
                audio:"ext:凤凰:true",
                logTarget:"target",
                filter:function (event, player) {
        return true;
    },
                content:function () {
        "step 0"
        trigger.target.chooseToDiscard('弃置一张手牌，或令' + get.translation(player) + '摸一张牌').set('ai',function(card) {
            var trigger = _status.event.getTrigger();
            return - get.attitude(trigger.target, trigger.player) - get.value(card);
        });
        "step 1"
        if (result.bool == false) player.draw();
    },
            },
        },
        translate:{
            "fh_gongshen":"工神",
            "fh_gongshen_info":"锁定技，除你之外的角色没有装备区。",
            "fh_shenshou":"神兽",
            "fh_shenshou_info":"锁定技，你不能被翻面",
            "fh_qianxun":"千薰",
            "fh_qianxun_info":"锁定技，延时锦囊对你无效，顺拆对你无效，你的锦囊无视距离，你的装备不可弃置。",
            "fh_xinsheng":"重生",
            "fh_xinsheng_info":"当场上有人受到伤害时，获得一个化身。",
            "fh_qianhuan":"千幻",
            "fh_qianhuan_info":"游戏开始和你的每个回合开始时,随机展示三张未上场的武将牌,你声明并获得其中的6个技能直到下个回合开始.你的每个回合开始时,先展示三张未上场的武将牌,然后再展示你上回合所选择过的至多6个技能.你从里面获得共计6个技能.若该局游戏为双将模式(国战模式下须先亮出武将牌),则你移除另一名武将,",
            "fh_qianhuan2":"千幻2",
            "fh_qianhuan2_info":"",
            "fh_huashen":"凤凰化身",
            "fh_huashen_info":"",
            "fh_huashen1":"化身1",
            "fh_huashen1_info":"",
            "fh_huashen2":"化身2",
            "fh_huashen2_info":"",
            "fh_zhiyan":"炙焱",
            "fh_zhiyan_info":"回合开始时删除目标一个技能，如无技能减少体力上限一点，直至为1点时不在触发。",
            "fh_huiguang":"回光",
            "fh_huiguang_info":"回合开始时恢复目标一个技能。",
            "fh_yongsheng":"永生",
            "fh_yongsheng_info":"造成伤害前，你可以免疫之。",
            "fh_zhitian":"知天",
            "fh_zhitian_info":"回合开始时，你须将获得的技能交给一名角色，并令其随机获得未加入本局游戏的武将的一个技能。",
            "fh_yanyujian":"焱羽剑",
            "fh_yanyujian_info":"连弩&青钢&丈八&雌雄",
            "fh_zhangba":"丈八",
            "fh_zhangba_info":"丈八蛇矛效果改为一张",
            "fh_cixiong":"雌雄",
            "fh_cixiong_info":"对发动雌雄双剑效果的对象都视为异性",
        },
    },
    intro:"",
    author:"yuan",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["firephoenix.jpg"],"card":[],"skill":[]}}})