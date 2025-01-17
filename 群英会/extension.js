game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"群英会",editable:false,content:function (config,pack){
  
  // ---------------------------------------Update------------------------------------------//   
    Xu_update=[
       '<li>修复bug',
       '<li>修改《火影忍者》武将【药师兜】、【大和】',
    'players://["xwj_xhuoying_dou","xwj_xhuoying_dahe"]',
    ];
    Xu_version='更新日期：2019.09.17';

game.Xu_update=function(){
var ul=document.createElement('ul');
ul.style.textAlign='left';
var players=null,cards=null;
for(var i=0;i<Xu_update.length;i++){
if(Xu_update[i].indexOf('players://')==0){
try{
players=JSON.parse(Xu_update[i].slice(10));
}
catch(e){
players=null;
}
}
else if(Xu_update[i].indexOf('cards://')==0){
try{
cards=JSON.parse(Xu_update[i].slice(8));
}
catch(e){
cards=null;
}
}
else{
var li=document.createElement('li');
li.innerHTML=Xu_update[i];
ul.appendChild(li);
};
};
var dialog=ui.create.dialog('更新内容【群英会】<br>'+Xu_version,'hidden');
dialog.content.appendChild(ul);
if(players){
dialog.addSmall([players,'character']);
};
if(cards){
for(var i=0;i<cards.length;i++){
cards[i]=[get.translation(get.type(cards[i])),'',cards[i]]
};
dialog.addSmall([cards,'vcard']);
};
dialog.open();
var hidden=false;
if(!ui.auto.classList.contains('hidden')){
ui.auto.hide();
hidden=true;
};
game.pause();
var control=ui.create.control('确定',function(){
dialog.close();
control.close();
if(hidden) ui.auto.show();
game.resume();
});
};
lib.skill._Xu_update={
trigger:{
global:"gameStart"
},
priority:Infinity,
forced:true,
content:function(){
if(lib.config.Xu_version!=Xu_version){
game.Xu_update();
game.saveConfig('Xu_version',Xu_version);
};
},
};
// ---------------------------------------Skin------------------------------------------//
/*
lib.element.player[extensionExtraSkin[0]]=function(){
if (lib.character[this.name][4].contains('xwjskin')){
this.changeXwjskin();
}
};
lib.element.player[extensionExtraSkin[1]]=function(){
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[0]){
var list=[0,1,2];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/群英会/'+extensionExtraCharacterSkin[0]+'.jpg');  
 }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/群英会/'+extensionExtraCharacterSkin[1]+'.jpg');   
}
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/群英会/'+extensionExtraCharacterSkin[2]+'.jpg');  
}
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[3]){
var list=[0,1];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/群英会/'+extensionExtraCharacterSkin[3]+'.jpg'); 
  }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/群英会/'+extensionExtraCharacterSkin[4]+'.jpg');  
 }
}

};
*/
			// ---------------------------------------Audio------------------------------------------//
			game.playSu = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '群英会', fn);
			}
		};
		
// ---------------------------------------Die Audio------------------------------------------//
		lib.skill._zhengwangpeiyin={
				    trigger:{global:'dieBegin',},
							//direct:true,
							priority:2,
							forced:true,
         unique:true,
         frequent:true,
         /*filter:function (event,player){
                  return !event.player.isAlive();
          },*/
					   content:function(){					
					   	    game.playAudio('..','extension','群英会',trigger.player.name);
							  /*  if(trigger.player.name=='xwj_xhuoying_itachi'){
								   game.playSu('xwj_xhuoying_itachi');					            
						        }*/						 						          					        
 					  	},
			   			}			
// ---------------------------------------New function------------------------------------------//	
				lib.element.player.replaceFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				this.clearSkills();
				this.init(this.name1,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			}
			lib.element.player.addFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				var name=this.name;
				this.uninit();
				this.init(name,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			} 
		
			eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('p=5(c,6,4){e(4){0.4.o()};7.q(\'s\');7.r(5(){0.4.9.n(\'g\');d(5(){0.4.9.m(\'g\')},6*l)});7.z(6);0.2.3.f=\'\';0.2.3.8=\'\';0.2.3.k=\'\';0.2.j(c);d(5(){e(i.h.x){0.2.3.f=\'b(a)\';0.2.3.8=\'b(a)\';0.2.3.k=\'w(1.v)\'};0.4.u();0.2.j(\'A/2/\'+i.h.y+\'.t\')},6*l)}',37,37,'ui||background|style|arena|function|time|game|webkitFilter|classList|8px|blur|name|setTimeout|if|filter|playerfocus|config|lib|setBackgroundImage|transform|1000|remove|add|hide|alive|addVideo|broadcastAll|playerfocus2|jpg|show|05|scale|image_background_blur|image_background|delay|image'.split('|'),0,{}))

	// ---------------------------------------jilian mingxiang------------------------------------------//			
	lib.skill._jilian_out={
      trigger:{global:'dieBegin'},
      forced:true,
      priority:Infinity,
      filter:function(event,player){
      for(var x=0;x<game.players.length;x++){
      var playerx=game.players[x];
      if(playerx.classList.contains('out')) return true;
      return false;
      }   
      },
      content:function (){    
      for(var x=0;x<game.players.length;x++){
      var playerx=game.players[x];
      if(playerx.classList.contains('out')&&playerx.hasSkill('xwj_xqunying_mingxiang')){
          //playerx.in();
         playerx.classList.remove('out');  
         playerx.gainMaxHp();
         playerx.update();                                               
         ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3';                      
         game.delay();    
       		game.countPlayer(function(current){
						if(current!=playerx){
							playerx.line(current,'green');
							current.loseHp();
						}
					});                                             
         playerx.insertPhase();     
      }
      }   
    },
  }			
	// ---------------------------------------wuxianyuedu------------------------------------------//			
		if(config.wuxianyuedu){		
		     lib.skill._jieshihuanhun={
        trigger:{global:'dieEnd'},
        filter:function(event,player){  
    var jieshi=game.findPlayer(function(current){
            return current.name=='xwj_xhuoying_huiye';
        });
            return !jieshi;
        },
        forced:true,
        content:function(){        
 var huanhun=game.dead[0];
 game.delay();
//huanhun.$fullscreenpop('借尸还魂','fire');
huanhun.init('xwj_xhuoying_huiye');
huanhun.revive();
huanhun.maxHp=3;
huanhun.hp=3;
huanhun.draw(3)._triggered=null;
huanhun.update();
huanhun.$fullscreenpop('无限月读','thunder');
game.delay(20);
game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_wxyd_background.jpg");
ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3'; 
game.delay();
//lib.skill._wuxianyuedu={trigger:{global:'gameStart'},forced:true,content:function(){},};
huanhun.insertPhase();
        },  
    }
     }
  // ---------------------------------------xwansha------------------------------------------//   
			if(config.xwansha){		
		     lib.skill._xwj_wansha={
        trigger:{
        global:"gameStart",      
        },
        forced:true,
        priority:20190124,
     content:function (){
     game.countPlayer(function(current){
     current.addSkill('wansha');
     });
     },
     }
     }     
  
		// ---------------------------------------xjisha------------------------------------------//
			if(config.xjisha){		
/*		//old:
    lib.skill._jwj_jisha={
        trigger:{
        global:"dieAfter",
        },
        forced:true,
        priority:2019,
     content:function (){
     if(game.dead.length==1) trigger.source.$fullscreenpop('一血★卧龙出山','fire');
     if(game.dead.length==2) trigger.source.$fullscreenpop('双杀☆一战成名','fire');
     if(game.dead.length==3) trigger.source.$fullscreenpop('三杀★举世皆惊','fire');
     if(game.dead.length==4) trigger.source.$fullscreenpop('四杀☆天下无敌','fire');
     if(game.dead.length==5) trigger.source.$fullscreenpop('五杀★诛天灭地','fire');
     if(game.dead.length==6) trigger.source.$fullscreenpop('六杀☆癫狂杀戮','fire');
     if(game.dead.length==7) trigger.source.$fullscreenpop('七杀★万军取首','fire');
         },
         }
         */        
         //new:
        lib.skill._xwj_jisha={
        trigger:{
        global:"gameStart",      
        source:"dieBegin",
        },
        forced:true,
        priority:2019,
     content:function (){
     game.countPlayer(function(current){
     current.addSkill('xwj_jisha');
     if(current==player){
     if(trigger.name=='die'){
     if(current.storage.xwj_jisha==1) { current.$fullscreenpop('一血•卧龙出山','fire'); game.playSu('xwj_jisha1'); }
     if(current.storage.xwj_jisha==2) { current.$fullscreenpop('双杀♦一战成名','water'); game.playSu('xwj_jisha2'); }
     if(current.storage.xwj_jisha==3) { current.$fullscreenpop('三杀☆举世皆惊','thunder'); game.playSu('xwj_jisha3'); }
     if(current.storage.xwj_jisha==4) { current.$fullscreenpop('四杀★天下无敌','fire'); game.playSu('xwj_jisha4'); }
     if(current.storage.xwj_jisha==5) { current.$fullscreenpop('五杀☼诛天灭地','thunder'); game.playSu('xwj_jisha5'); }
     if(current.storage.xwj_jisha==6) { current.$fullscreenpop('六杀✪癫狂杀戮','water'); game.playSu('xwj_jisha6'); }
     if(current.storage.xwj_jisha==7) { current.$fullscreenpop('无双☯万军取首','fire'); game.playSu('xwj_jisha7'); }
//	 if(current.storage.xwj_jisha==8) { current.$fullscreenpop('八杀☯赶尽杀绝','fire'); game.playSu('xwj_jisha8'); }
//	 if(current.storage.xwj_jisha==9) { current.$fullscreenpop('九杀☯神哭鬼嚎','fire'); game.playSu('xwj_jisha9'); }
//	 if(current.storage.xwj_jisha==10) { current.$fullscreenpop('十杀☯震古烁今','fire'); game.playSu('xwj_jisha10'); }
         }
         }
         });
         },
         }
					 	     
		  lib.skill.xwj_jisha={
                		trigger:{source:"dieBegin"},
                		forced:true,                        
                  locked:true,     
                  unique:true,            
                  priority:Infinity,
                  init:function (player){
                  player.storage.xwj_jisha=0;
                  player.unmarkSkill('xwj_jisha');
                  player.syncStorage('xwj_jisha');
                  },
                 content:function (){
                  player.storage.xwj_jisha++;
                  player.markSkill('xwj_jisha');
                  player.syncStorage('xwj_jisha');
                  player.update();
                  },
            					marktext:"杀",
                 	intro:{
          		 					content:function (storage){
         				 				return '你已击杀'+storage+'名角色';
          	 						},
            						},
                  }	                  	
																																									
						lib.skill._xxmiaoshouhuichun={
						 trigger:{global:'xmiaoshou'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('妙手回春','water');
							game.playSu('xxmiaoshouhuichun');
							},
						}
						
						lib.skill._xxyishugaochao={
			 			trigger:{global:'xyishu'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('医术高超','water');
							game.playSu('xxyishugaochao');
							},
						}
						
						lib.skill._recovertrigger={
							trigger:{global:'recoverEnd'},
							filter:function(event,player){
								if(_status.currentPhase!=player){
									return event.player!=event.source&&event.source==player;
								}
								return true;
							},
							direct:true,
							content:function(){
								if(_status.currentPhase!=player){
									_status.event.trigger('xmiaoshou');
								}
								else {
									if(player.storage.xxyishugaochao==undefined){
										player.storage.xxyishugaochao = trigger.num;
									}
									else {
										player.storage.xxyishugaochao+=trigger.num;
									}
									if(player.storage.xxyishugaochao>=3){
										player.storage.xxyishugaochao-=3;
										_status.event.trigger('xyishu');
									}
								}
							},
							group:'_recovertrigger_Delete',
							subSkill:{
								Delete:{
									trigger:{player:'phaseEnd'},
									direct:true,
									content:function(){
										delete player.storage.xxyishugaochao;
									},
								}
							}
						}
												
  	   	lib.translate.xwj_jisha="击杀";
	  			lib.translate._xwj_jisha="击杀";
						lib.translate._xxmiaoshouhuichun='妙手回春';
						lib.translate._xxyishugaochao='医术高超';		
						}  
 	// ---------------------------------------chooseTime------------------------------------------//									
					if(config._chooseTime){																
							lib.skill._chooseTime={
							trigger:{global:'gameDrawBefore'},
							direct:true,
							content:function(){
								player.forceCountChoose={chooseToUse:15,default:15};
							},
						}
						}		
		// ---------------------------------------background------------------------------------------//									
		 			/*	if(config._Background){																
							lib.skill._Background={
							trigger:{global:'gameDrawBefore'},
							direct:true,
							priority:20,
							content:function(){
							game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_background.jpg");
   				},
						}
						}				
						*/		
		 /*			if(config._BackgroundMusic){								 				
							lib.skill._BackgroundMusic={
				    trigger:{global:'gameStart'},
							direct:true,
							priority:10,
					   content:function(){
					   ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3';},}}			*/
		  	//lib.extensionMenu['extension_'+'群英会'].edit={name:'编辑此扩展',clear:true,};  
	     		lib.extensionMenu['extension_'+'群英会'].delete={name:'删除此扩展',clear:true,};																																																																																							
 /*			if(config._BackgroundMusic){ if(config._BackgroundMusic=='1'){	game.playBackgroundMusic();	} //此注释内的没任何作用
						else{
						if(config._BackgroundMusic=='2'){					 
						game.playBackgroundMusic=function (){};
  				game.playSu('wms_backgroundmusic'); 
  				//game.playBackgroundMusic();
			}
			else{			  
			game.playBackgroundMusic=function (){}; 
			 game.playSu('wms_backgroundmusic');  	
			 //game.playBackgroundMusic();
 			}				
						}				
						} */
																																																																																																																				
// ---------------------------------------武将分栏------------------------------------------//		
	
	if(config.xqunying){
		for(var i in lib.characterPack['xqunying']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.xwugeng){
		for(var i in lib.characterPack['xwugeng']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
    
	if(config.xhuoying){
		for(var i in lib.characterPack['xhuoying']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.xqinshi){
		for(var i in lib.characterPack['xqinshi']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};	
	if(config.xsanguo){
		for(var i in lib.characterPack[ 'xsanguo']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
    if(config.xu){
		for(var i in lib.characterPack['xu']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
},precontent:function (xwj){

//动画：
/*		game.qyhGif=function(str,width,height,isAnimation){
var str1='';
if (isAnimation) {
str1=lib.assetURL+'extension/群英会/'+str;
return str1;
}
else {
str1='<img src='+lib.assetURL+'extension/群英会/'+str+' width='+width+'   height='+height+'>';
return str1;
}
}
*/

     if(xwj.enable){
		game.import('character',function(){
				//skin：
				/*	extensionExtraSkin=['onclick','changeXwjskin','name'];
			extensionExtraCharacterSkin=['xwj_xhuoying_mingren','xwj_xhuoying_mingren1','xwj_xhuoying_mingren2','xwj_xhuoying_shuimen','xwj_xhuoying_shuimen1'];	
			*/				
		game.import('character',function(){
			var xqunying={
				name:'xqunying',
				connect:true,
				characterSort:{
	 		xqunying:{
				"xqunying_zhanguo":["xwj_xqunying_baiqi","xwj_xqunying_qinshiwang"],
				"xqunying_longzhu":["xwj_xqunying_frieza","xwj_xqunying_jilian"],
			},
		},
				character:{
					 "xwj_xqunying_baiqi":["male","xqin",4,["xwj_xqunying_shashen"],[]],
       "xwj_xqunying_qinshiwang":["male","xqin",3,["xwj_xqunying_shaohe","xwj_xqunying_tongji","xwj_xqunying_wangxiao"],[]],
       "xwj_xqunying_frieza":["male","shen",2,["xwj_xqunying_jusha","xwj_xqunying_diwang","xwj_xqunying_bianshen"],[]],
	      "xwj_xqunying_jilian":["male","shen",4,["xwj_xqunying_mingxiang"],["forbidai"]],
                
},
characterIntro:{
	"xwj_xqunying_baiqi":"白起（？—公元前257年），芈姓，白氏，名起，郿邑（今陕西眉县常兴镇白家村）人。战国时期杰出的军事家、“兵家”代表人物。楚平王之孙白公胜后代。熟知兵法，善于用兵，交好秦宣太后和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，名列武庙十哲",
	"xwj_xqunying_qinshiwang":"秦始皇嬴政（公元前259年—公元前210年），嬴姓，赵氏，又名赵正（政），或称祖龙  。秦庄襄王和赵姬之子。  中国历史上著名的政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。 秦始皇出生于赵国都城邯郸（今邯郸），后回到秦国。前247年，13岁时即王位。   前238年，22岁的嬴政在故都雍城举行成人加冕仪式，并平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始“亲理朝政”。  重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，39岁时完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝，并奠定中国本土的疆域,秦始皇认为自己的功劳胜过之前的三皇五帝，采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，  是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事。地方上废除分封制，代以郡县制，同时书同文，车同轨，统一度量衡。对外北击匈奴，南征百越，修筑万里长城，修筑灵渠，沟通水系。但是到了后期，求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基，前210年，秦始皇东巡途中驾崩于邢台沙丘。 秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”",
					"xwj_xqunying_frieza":"弗利萨（Frieza，フリーザ），日本漫画家鸟山明作品《龙珠》中的那美克星篇的主要反派角色，战斗力十分强大，大头目级人物。他使用眼睛来判断事物，并且可以在真空环境下生存。自称是最强的宇宙帝王，收服了大量的手下，占领资源丰富的星球，并借助了外星科技制造宇宙飞船用于军事侵略，挑选的部队都是精英战士。由于害怕超级赛亚人的出现，毁灭了贝吉塔行星，几乎令所有赛亚人灭绝。后来弗利萨偷听了贝吉塔跟那巴的对话得知那美克星有龙珠可以实现愿望，便出发去那美克星夺取龙珠企图实现长生不老的愿望。但是在那美克星后不久，手下逐个被贝吉塔及孙悟空等人杀死，亲自出手时展示三段变身的能力让所有人感到绝望，由于杀死了克林令悟空极度愤怒觉醒变成超级赛亚人，经过一番激战终于被悟空打败。",		
					"xwj_xqunying_jilian":"吉连，是日本动漫《龙珠超》中登场的角色。维护宇宙和平的英雄团队“骄傲战队”的10名主力成员之一。是个沉默寡言的战士，其实力据说已经达到了破坏神的领域。",	
     		
												},
characterTitle:{
					//"xwj_xu_Sukincen":"Sukincen",
								},
								
skill:{
     "xwj_xqunying_mingxiang":{
                audio:"ext:群英会:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                forced:true,
                unique:true,           
                content:function (){        
    var chat=['有威胁的对手都被我清除了，剩下的要靠你们了！','我要进入冥想了，不要来打扰我！'].randomGet();
            player.say(chat);  
          player.classList.add('out');                          
    },
                ai:{
                    threaten:0.8,
                },
            },
          "xwj_xqunying_jusha":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:6,
                filter:function (event,player){
        return event.target.countCards('h')>0;
    },
                direct:true,
                content:function (){
                'step 0'
                trigger.target.showHandcards();
                'step 1'    
        if(trigger.target.countCards('h',{suit:get.suit(trigger.card)})){
            player.logSkill('xwj_xqunying_jusha');
            trigger.directHit=true;            
        }
     },
                ai:{
                    expose:0.4,
                },
            },
              "xwj_xqunying_diwang":{
                audio:"ext:群英会:2",
                trigger:{
                    target:"useCardToBefore",
                },
                frequent:true,
                filter:function (event,player){ 
        return get.type(event.card,'trick')=='trick'; 
    },
                content:function (){
      player.draw();       
    },            
            },
             "xwj_xqunying_xiaohan":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                priority:6,
                filter:function (event,player){
        return event.target.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"      
        player.choosePlayerCard(trigger.target,get.prompt('xwj_xqunying_xiaohan'),'h').set('ai',function(button){
                  return 10-get.value(button.link);
           });
        "step 1"
        if(result.bool){
            player.logSkill('xwj_xqunying_xiaohan',trigger.target);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(trigger.target)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.color(event.card)!=get.color(trigger.card)){
            trigger.directHit=true;            
        }
        else{
        trigger.target.discard(event.card);
        }
    },
                ai:{
                    order:5,
                },
            },
             "xwj_xqunying_jiaohua":{
                audio:"ext:群英会:2",
                trigger:{
                    target:"shaBegin",
                },
                usable:1,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
        "step 0"
      trigger.cancel();
        "step 1"
       trigger.parent.xwj_xqunying_jiaohuaed=true;
       trigger.player.getStat().card.sha--;
         "step 2"
   //    player.useCard({name: 'sha'}, trigger.player, false);
          player.chooseToUse({name:'sha'},trigger.player,'是否对'+get.translation(trigger.player)+'使用一张杀？').logSkill='xwj_xqunying_jiaohua';    
    },
                ai:{
                    threaten:0.8,
                    order:8,
                },
            },
           "xwj_xqunying_weijian":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damage",
                },
                priority:10,
                filter:function (event, player) {
        return event.source&&event.source.isAlive()&&player.isAlive();
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                content:function () {
        "step 0"
        player.$fullscreenpop('给我消灭他', 'thunder'); 
        var chat=['基纽特种部队何在？'].randomGet();
            player.say(chat); 
        "step 1"
        if (event.current == undefined) event.current = player.next;
        if (trigger.source.isDead() || event.current == player) {
            event.finish();
        } else {
        event.current.line(trigger.source,'green');
            event.current.useCard({
                name: 'sha'
            }, trigger.source, false);
        }
        "step 2"
        event.current = event.current.next;
        event.goto(1);      
    },
                ai:{
                    expose:0.6,
                    order:8,
                },
            },
 
              "xwj_xqunying_yiqu":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){        
 
        if(game.players.length>=game.dead.length){        

        player.draw(game.players.length);

        }

        else{

        player.draw(game.dead.length);
        }

    },
                ai:{
                    threaten:0.5,
                    order:5,
                },
            },
           
                 "xwj_xqunying_kunxi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                content:function (){
               'step 0'    
               	player.chooseTarget(get.prompt('xwj_xqunying_kunxi'),[1,player.countCards('e')],function(card,player,target){
						return target!=player;
					},function(target){
						return -get.attitude(player,target);
					});                 
        'step 1'
        if(result.bool){
          player.gain(player.getCards('e'),'gain2');            
       		player.logSkill('xwj_xqunying_kunxi',result.targets);
			  			event.targets=result.targets;                                                              
            }       
         else{
                 event.finish();
         }
            'step 2'
         				if(event.targets.length){
						var target=event.targets.shift();
						player.line(target,'green');
					//	event.current=target;						
						player.useCard({name:'sha'},target,false);  
						event.redo();
					}
					else{
						event.finish();
					}   		
    },
                ai:{
                    order:7,
                    expose:0.2,
                },
            },
               "xwj_xqunying_wanti":{    
                audio:"ext:群英会:2",   
                group:["xwj_xqunying_wanti1","xwj_xqunying_wanti2"],
            },
          "xwj_xqunying_wanti1":{
                trigger:{
                    player:"damageBegin",
                },
                audio:"ext:群英会:2",
                forced:true,
                filter:function (event,player){
        return !player.getEquip(2);
    },
                content:function (){        
            trigger.num--;            
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
            },
            "xwj_xqunying_wanti2":{                
                trigger:{
                    source:"damageBegin",
                },
                audio:"ext:群英会:2",
                forced:true,
                filter:function (event,player){
        return !player.getEquip(1);
    },                       
                content:function (){        
                trigger.num++;
    },               
 },
            "xwj_xqunying_bianshen":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                forced:true,
                priority:2,
                derivation:['xwj_xqunying_xiaohan','xwj_xqunying_jiaohua','xwj_xqunying_weijian','xwj_xqunying_yiqu','xwj_xqunying_kunxi','xwj_xqunying_wanti'],
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
        'step 0'
        player.gainMaxHp();
        player.update();
        'step 1'
         if(player.maxHp==4){
         player.recover();
         player.removeSkill('xwj_xqunying_jusha');
         player.removeSkill('xwj_xqunying_diwang');
         player.addSkill('xwj_xqunying_xiaohan');
         player.addSkill('xwj_xqunying_jiaohua');
         player.node.avatar.setBackgroundImage('extension/群英会/xwj_xqunying_frieza1.jpg');                 
         player.update();
        }      
         if(player.maxHp==6){   
         player.recover();    
         player.removeSkill('xwj_xqunying_xiaohan');
         player.removeSkill('xwj_xqunying_jiaohua');
         player.addSkill('xwj_xqunying_weijian');
         player.addSkill('xwj_xqunying_yiqu');
         player.node.avatar.setBackgroundImage('extension/群英会/xwj_xqunying_frieza2.jpg');                 
         player.update();
        }      
        if(player.maxHp==8){    
         player.recover();   
         player.removeSkill('xwj_xqunying_weijian');
         player.removeSkill('xwj_xqunying_yiqu');
         player.addSkill('xwj_xqunying_kunxi');
         player.addSkill('xwj_xqunying_wanti');
         player.node.avatar.setBackgroundImage('extension/群英会/xwj_xqunying_frieza3.jpg');    
         player.awakenSkill('xwj_xqunying_bianshen');           
         player.update();
        }                       
        },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
                  
        "xwj_xqunying_shaohe":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.group!=event.player.group;
        },
                content:function (){
        trigger.num++;
    },
            },
            "xwj_xqunying_tongji":{         
				audio:"ext:群英会:2",
				trigger:{player:'phaseEnd'},
				forced:true,
				content:function(){
					   var num=game.countPlayer(function(current){
            return current.group=='xqin';
        });        
					player.draw(num);
				}			
            },
            "xwj_xqunying_wangxiao":{
            audio:"ext:群英会:2",
                unique:true,
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                priority:3,
                filter:function (event,player){
        return event.num>1;
    },
                content:function (){
        "step 0"                
         trigger.player.group="xqin";
game.log(trigger.player,'的势力变为秦');
if(get.mode()=='guozhan'){
    trigger.player.identity="xqin";
    trigger.player._group="xqin";
    trigger.player.node.identity.firstChild.innerHTML=get.translation("xqin");
    trigger.player.node.identity.dataset.color=trigger.player.identity;        
    if(trigger.player.name) lib.character[trigger.player.name][1]="xqin";
    if(trigger.player.name1) lib.character[trigger.player.name1][1]="xqin";
    if(trigger.player.name2) lib.character[trigger.player.name2][1]="xqin";                
}
else{
    if(trigger.player.name) lib.character[trigger.player.name][1]="xqin";
    if(trigger.player.name1) lib.character[trigger.player.name1][1]="xqin";
    if(trigger.player.name2) lib.character[trigger.player.name2][1]="xqin";            
}

        "step 1"
        switch(trigger.player.group){
            case 'xqin':trigger.player.node.name.dataset.nature='watermm';break;
        }                          
    },
            },
            "xwj_xqunying_shashen":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                filter:function (event,player){
             return event.card&&(event.card.name=='sha'||event.card.name=='juedou');
    },
                content:function (){ 
          if(player.hp>trigger.player.hp){
          trigger.player.loseHp();
          }
          if(player.hp==trigger.player.hp){
          trigger.player.turnOver();
          }
          if(player.hp<trigger.player.hp){
          trigger.player.discard(trigger.player.getCards('h'));
          }
    },
                ai:{
                    basic:{
                        result:{
                            player:1,
                        },
                        expose:0.8,
                    },
                },
            },
        
                     
},

 translate:{  
            "xwj_xqunying_jilian":"吉连",
            "xwj_xqunying_mingxiang":"冥想",
            "xwj_xqunying_mingxiang_info":"<font color=#f00>锁定技</font> （限身份模式）游戏开始或你进入游戏时，你进入冥想状态：你没有任何阶段，不能成为卡牌、技能的目标且不占据位置。当场上有角色阵亡时，你增加一点体力上限返回战场参战：令场上所有其他角色失去一点体力且当前角色回合结束后，你额外执行一个回合",
            "xwj_xqunying_frieza":"弗利萨",
            "xwj_xqunying_weijian":"围歼",
            "xwj_xqunying_weijian_info":"当你受到伤害后，你可令从你下家开始除你外的场上所有角色依次视为对伤害来源使用一张【杀】",
            "xwj_xqunying_xiaohan":"骁悍",
            "xwj_xqunying_xiaohan_info":"当你使用【杀】指定目标后，你可以展示目标角色一张手牌。若该牌与此【杀】颜色不相同，此【杀】不可被响应，否则其弃置之",
            "xwj_xqunying_jusha":"殂杀",
            "xwj_xqunying_jusha_info":"<font color=#f00>锁定技</font> 当你使用【杀】指定目标后，目标角色须展示其手牌，若其中有与此【杀】相同花色的手牌，此【杀】不可被响应",
            "xwj_xqunying_jiaohua":"狡猾",
            "xwj_xqunying_jiaohua_info":"当你每回合首次成为【杀】的目标后，你可以令此【杀】不计入使用次数，然后你可对该【杀】使用者使用一张【杀】",
            "xwj_xqunying_kunxi":"困袭",
            "xwj_xqunying_kunxi_info":"结束阶段，你可以视为对一至X名其他角色使用一张【杀】（X为你装备区的牌数），然后你将装备区的所有牌收入手牌",
            "xwj_xqunying_diwang":"帝王",
            "xwj_xqunying_diwang_info":"当你成为锦囊牌的目标后，你可以摸一张牌",
            "xwj_xqunying_bianshen":"变身",
            "xwj_xqunying_bianshen_info":"</font><font color=#f00>锁定技</font> 每当你受到伤害后，你增加一点体力上限，根据此时体力上限值而变身：<li>等于4，你失去技能【殂杀】、【帝王】，获得技能【骁悍】、【狡猾】；<li>等于6，你失去技能【骁悍】、【狡猾】，获得技能【围歼】、【异躯】；<li>等于8，你失去技能【围歼】、【异躯】，获得技能【困袭】、【完体】。<li>每次变身你回复一点体力，变完三次身后你失去此技能",
            "xwj_xqunying_wanti":"完体",
            "xwj_xqunying_wanti_info":"<li></font><font color=#f00>锁定技</font> 当你受到伤害时，若你的装备区没有防具牌，此伤害－1；当你造成伤害时，若你的装备区没有武器牌，此伤害＋1",
            "xwj_xqunying_yiqu":"异躯",
            "xwj_xqunying_yiqu_info":"<font color=#f00>锁定技</font> 当你受到伤害后，若场上角色数不少于阵亡角色数，你摸X张牌（X为存活角色数）；否则你摸Y张牌（Y为已阵亡的角色数）。",    
            "xqin":"秦",
            "xwj_xqunying_qinshiwang":"嬴政",
            "xwj_xqunying_shaohe":"扫合",
            "xwj_xqunying_shaohe_info":"<font color=#f00>锁定技</font> 当你对目标角色造成伤害时，若其势力与你不一致，则此伤害值+1",
            "xwj_xqunying_tongji":"统集",
            "xwj_xqunying_tongji_info":"<font color=#f00>锁定技</font> 结束阶段，你摸X张牌（X为【秦】势力的角色数）",
            "xwj_xqunying_wangxiao":"往崤",
            "xwj_xqunying_wangxiao_info":"<font color=#f00>锁定技</font> 当一名角色受到伤害时，若此伤害值大于1，则其势力改为【秦】",
            "xwj_xqunying_baiqi":"白起",
        			"xwj_xqunying_shashen":"杀神",
            "xwj_xqunying_shashen_info":"当你使用【杀】或【决斗】造成伤害后，若你体力值高/等/低于受伤的角色，你可令其失去1点体力/翻面/弃置所有手牌",
            "xqunying_zhanguo":"战国",
			        "xqunying_longzhu":"龙珠",			
         },
};
if(lib.device||lib.node){
				for(var i in xqunying.character){xqunying.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xqunying.character){xqunying.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xqunying;
		});
		lib.config.all.characters.push('xqunying');		
		if(!lib.config.characters.contains('xqunying')) lib.config.characters.remove('xqunying');
		lib.translate['xqunying_character_config']='<span class=browntext>群英会</span>';
	
	game.import('character',function(){
			var xwugeng={
				name:'xwugeng',
				connect:true,
				characterSort:{
	 		xwugeng:{
				"xwugeng_shenzu":["xwj_xwugeng_tian","xwj_xwugeng_zhengshan","xwj_xwugeng_shixing","xwj_xwugeng_xuanfeng","xwj_xwugeng_tianwu","xwj_xwugeng_tiankui","xwj_xwugeng_bailian"],
				"xwugeng_renlei":["xwj_xwugeng_ziyu","xwj_xwugeng_wugeng","xwj_xwugeng_baicai","xwj_xwugeng_fuxi"],
			},
		},
				character:{
					"xwj_xwugeng_tian":["male","shen",4,["xwj_xwugeng_xuemao","xwj_xwugeng_baiqian"],[]],
					"xwj_xwugeng_zhengshan":["male","shen",3,["xwj_xwugeng_zhuanlun","xwj_xwugeng_chenjie","xwj_xwugeng_kongjing","xwj_xwugeng_zhuzhan"],[]],           
      "xwj_xwugeng_shixing":["male","shen",3,["xwj_xwugeng_fuhuo","xwj_xwugeng_fuchou"],[]],
					"xwj_xwugeng_xuanfeng":["male","shen",4,["xwj_xwugeng_shensu","xwj_xwugeng_baofeng","xwj_xwugeng_zhengkong"],[]],
					"xwj_xwugeng_tianwu":["male","shen",3,["xwj_xwugeng_pili","xwj_xwugeng_zhengnu"],[]],
					"xwj_xwugeng_tiankui":["male","shen",4,["xwj_xwugeng_suiyue","xwj_xwugeng_shenqu"],[]],
		    "xwj_xwugeng_ziyu":["male","qun",4,["xwj_xwugeng_qijian","xwj_xwugeng_qiyi","xwj_xwugeng_zhutian"],[]],
       "xwj_xwugeng_wugeng":["male","qun",2,["xwj_xwugeng_zhouwen","xwj_xwugeng_tianqi"],[]],
       "xwj_xwugeng_baicai":["female","qun",3,["xwj_xwugeng_qinhe","xwj_xwugeng_dunkong"],[]],
  	    "xwj_xwugeng_bailian":["male","shen",3,["xwj_xwugeng_xuelian","xwj_xwugeng_siling"],[]],
   	 		"xwj_xwugeng_fuxi":["male","qun",4,["xwj_xwugeng_dongshi","xwj_xwugeng_cizhou"],[]],

},

characterIntro:{
     	"xwj_xwugeng_tian":"<br><li>攻击★★★★★<br><li>防御★★★★★<br><li>辅助★★★☆☆<br><li>控场★★★☆☆<br><li>爆发★★☆☆☆<br>天，龙族，本名“黑龙”，香港漫画《封神纪》及中国大陆改编3D动画《武庚纪》中登场的男性角色。神族之主，亦称“天帝”。在神族中地位特殊，而且寿命远远超过其余神众。 平时生活在龙的体内，拥有无色界神力。无色界神力是神力中最罕见的一个种类，用于压抑声音、气味、力气、光、攻击、防御等，让对手的全部能力大幅降低、黯然无色。是上古与冥族交战取得世界支配权的远古神族，被不死鸟称为是“黑龙之主”，与白龙、黄龙、赤龙、飞龙同为远古神族五大古龙之一。",
					"xwj_xwugeng_zhengshan":"<br><li>攻击★★★★☆<br><li>防御★★★★☆<br><li>辅助★★★★☆<br><li>控场★★☆☆☆<br><li>爆发★★☆☆☆<br>真禅圣王，港漫《封神纪》五圣王之一，主长生界神力，绝招：生死轮回限、大千世界、空镜映月等，神技——因果转轮。",
					"xwj_xwugeng_shixing":"<br><li>攻击★★★★★<br><li>防御★★★☆☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★★<br>十刑，《封神纪》（动画《武庚纪》）中的人物，天之子，阎部大神，号称“猎神之神”，主修罗界神力，后得到不死鸟的帮助使用元始界神力。被大剑士子羽用诛天剑杀死后再次复活，但这次复活也恢复了神志和记忆，从而踏上向神族复仇之路",
					"xwj_xwugeng_xuanfeng":"<br><li>攻击★★★☆☆<br><li>防御★★★☆☆<br><li>辅助★★★★☆<br><li>控场★★★★☆<br><li>爆发★★☆☆☆<br>玄风圣王，港漫《封神纪》五圣王之一，主万象界神力之风象，能瞬间引发超强风暴，曾一招将十刑吹到千里之外，也用此招从古龙手里救走心月葵。绝招：暴风、银翼破空、无形剑，神技——真空。",
					"xwj_xwugeng_tianwu":"<br><li>攻击★★★★★<br><li>防御★★★★☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★★<br>天武圣王，港漫《封神纪》五圣王之一，主万象界神力。曾任“阎部大神”，性格刚烈，作战时十分勇猛，为人讲义气，对神眼十分忠诚。其为攻击型战士，破坏力极强，每一击都能引起地动山摇，曾一招“天地震怒”引起了地震和海啸。神技：真武大霹雳（大范围爆炸，剧烈震碎，把任何实物震碎。）、怒拳、神怒霹雳、大地之力·天地震怒（说白了就是地震，对地面的对手造成伤害，对空中无效。）、大地之怒（附带连环爆炸效果的拳击，可造成强烈地震）",
					"xwj_xwugeng_tiankui":"<br><li>攻击★★★★★<br><li>防御★★★★☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★☆<br>天魁，香港漫画《封神纪》及中国改编3D动画《武庚纪》中的原创男性角色。天间六部斗部的最强大神，全身暗红，拥有金刚界神力。十刑的老师，有着“最强之将”之称，远古神族赤龙氏后裔，曾经阻止纣的父亲谋反并轻描淡写地屠杀了百多名武士。后在与拥有不死鸟力量的十刑的战斗中战败而亡。",
		
						},
				
				perfectPair:{
			"xwj_xwugeng_tian":['xwj_xwugeng_shixing'],
					},
								
skill:{		
"xwj_xwugeng_siling":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },                                  
                priority:8,
                 filter:function (event,player){
                return game.findPlayer(function(current){
        return current.hasSkill('xwj_xwugeng_xuelian2')&&current.storage.xwj_xwugeng_xuelian2>0;
        });
     },                             
                content:function (){   
                 'step 0'
                 trigger.cancel();
                   'step 1'
                   var target=game.findPlayer(function(current){
        return current.storage.xwj_xwugeng_xuelian2>0
        });
                  target.storage.xwj_xwugeng_xuelian2--;
                  target.update();
                  if(target.storage.xwj_xwugeng_xuelian2<=0){
                  player.line(target,'green');    
                  player.restoreSkill('xwj_xwugeng_xuelian');                               
                  //player.addSkill('xwj_xwugeng_xuelian');
                  target.removeSkill('xwj_xwugeng_xuelian2');        
                  target.unmarkSkill('xwj_xwugeng_xuelian2');
                  target.update();
                  }
            },
             ai:{
                   order:8,
                   threaten:2.4,
                },
            },
 "xwj_xwugeng_xuelian1":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },      
                forced:true,
                popup:false,
                priority:89,
                unique:true,
                   filter:function (event,player){
                 //  return event.player.hasSkill('xwj_xwugeng_xuelian4');
        return player.storage.xwj_xwugeng_xuelian3&&player.storage.xwj_xwugeng_xuelian3.isIn();
    },                             
                content:function (){    
               //trigger.player.draw(player.storage.xwj_xwugeng_xuelian2);
                  var target=player.storage.xwj_xwugeng_xuelian3;                                                        
                  target.draw(Math.floor(player.storage.xwj_xwugeng_xuelian2/2));
                  player.storage.xwj_xwugeng_xuelian2--;
                  if(player.storage.xwj_xwugeng_xuelian2<=0){
                  player.line(target,'green');     
                  target.restoreSkill('xwj_xwugeng_xuelian');               
                  //target.addSkill('xwj_xwugeng_xuelian');
                  player.removeSkill('xwj_xwugeng_xuelian2');
                  player.unmarkSkill('xwj_xwugeng_xuelian2');
                  player.update();
                  }            
    },                              
            },
               
            "xwj_xwugeng_xuelian3":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"dieBegin",
                },
                silent:true,
                onremove:true,
                unique:true,
                filter:function (event,player){
        return player.storage.xwj_xwugeng_xuelian3&&player.storage.xwj_xwugeng_xuelian3.isIn();
    },
                content:function (){   
         'step 0'
        game.delayx();
        'step 1'
        var target=player.storage.xwj_xwugeng_xuelian3;      
        player.line(target,'green');   
        player.removeSkill('xwj_xwugeng_xuelian2');   
        target.restoreSkill('xwj_xwugeng_xuelian');                  
      //  target.addSkill('xwj_xwugeng_xuelian');
        target.update();
    },
                forced:true,
                popup:false,
            },
            
              "xwj_xwugeng_xuelian2":{
                audio:"ext:群英会:2",            
                trigger:{
                    player:"phaseEnd",
                },
                priority:9,
                direct:true,     
                unique:true,
                      init:function (player){
        player.storage.xwj_xwugeng_xuelian2=0;
    },
                intro:{
                    name:"血莲",
                    content:"剩下#个血莲标记",
                },    
                marktext:"莲",
                   filter:function (event,player){
             return player.hasSkill('xwj_xwugeng_xuelian2')&&player.storage.xwj_xwugeng_xuelian2>0;
    },   
                content:function (){         
			        player.logSkill('xwj_xwugeng_xuelian2');        
            if(!player.countCards('e')){   
                 player.damage();                           
                    }
            else{
                 player.discard(player.getCards('e').randomGet());                                         
            }
    },
                ai:{
                    expose:0.5,
                },
            },
									
            "xwj_xwugeng_xuelian":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"damageEnd",
                },  
                  check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },        
                filter:function (event,player){
             return event.source&&!event.source.hasSkill('xwj_xwugeng_xuelian2');
    },
                content:function (){ 
             player.$fullscreenpop('九空血莲池','water');
             player.line(trigger.source);   
             trigger.source.addSkill('xwj_xwugeng_xuelian1');                                         
             trigger.source.addSkill('xwj_xwugeng_xuelian2');               
             trigger.source.addSkill('xwj_xwugeng_xuelian3'); 
             trigger.source.storage.xwj_xwugeng_xuelian3=player;                        
             trigger.source.markSkill('xwj_xwugeng_xuelian2');
             trigger.source.storage.xwj_xwugeng_xuelian2+=9;
             trigger.source.update();
             //player.addSkill('xwj_xwugeng_xuelian4'); 
             player.awakenSkill('xwj_xwugeng_xuelian');
             //player.removeSkill('xwj_xwugeng_xuelian');
    },
                ai:{
                    basic:{
                        result:{
                            player:1,
                        },
                        expose:0.8,
                    },
                },
            },
			 "xwj_xwugeng_cizhou":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"dyingAfter",
                },
                unique:true,
               	derivation:['xwj_xwugeng_zhouwen'],
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){
             return event.player.isAlive();
    },
                content:function (){
        player.$fullscreenpop('混沌之火','fire');
        trigger.player.addSkill('xwj_xwugeng_zhouwen');
        player.awakenSkill('xwj_xwugeng_cizhou');
    },
            },
            "xwj_xwugeng_dongshi":{
                forced:true,
                locked:true,
                group:["xwj_xwugeng_dongshi1","xwj_xwugeng_dongshi2"],
            },
            "xwj_xwugeng_dongshi1":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                priority:100,
                direct:true,
                filter:function (event,player){
             return event.target.countCards('h');
    },
                content:function (){
        "step 0"        
         player.chooseCardButton(trigger.target,trigger.target.getCards('h')).set('filterButton',function(button){
            return get.number(button.link)%2==1;
        });                                                                   
        "step 1"         
        var chat=['空识界神力！','你的动作全都被我识破了'].randomGet();
            player.say(chat);        
        if(result.bool){              
        player.logSkill('xwj_xwugeng_dongshi1');                  
        event.card=result.links[0];                       
        player.gain(event.card,trigger.target);
        trigger.target.$give(event.card,player);               
        }                                                
                                 
    },
                ai:{
                    order:10,
                    expose:0.4,
                },
            },
            "xwj_xwugeng_dongshi2":{
                audio:"ext:群英会:1",
                trigger:{
                    target:"shaBegin",
                },
                priority:100,
                direct:true,
                filter:function (event,player){
             return event.player.countCards('h');
    },
                content:function (){
        "step 0"        
         player.chooseCardButton(trigger.player,trigger.player.getCards('h')).set('filterButton',function(button){
            return get.number(button.link)%2==0;
        });                                                                   
        "step 1"         
        var chat=['我运用空识界神力让我看到了神权的没落','你的动作都被我看穿了'].randomGet();
            player.say(chat);        
        if(result.bool){              
        player.logSkill('xwj_xwugeng_dongshi2');         
        event.card=result.links[0];                       
        player.gain(event.card,trigger.player);
        trigger.player.$give(event.card,player);               
        }                                                
                                 
    },
                ai:{
                    order:10,
                    expose:0.4,
                },
            },
            "xwj_xwugeng_anxie":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){                
        return player.isAlive();
    },
                content:function (){     
                'step 0'     
            player.addSkill('xwj_xwugeng_anxie2'); 
            if(!player.storage.xwj_xwugeng_anxie){
                player.storage.xwj_xwugeng_anxie=[];
            }
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
                if(player.storage.xwj_xwugeng_anxie&&player.storage.xwj_xwugeng_anxie.contains(button.link[2])) return false;
                return true;
            }).set('ai',function(button){
                var rand=_status.event.rand*2;
                switch(button.link[2]){
                    case 'lebu':return 3+rand[3];
                    case 'shunshou':return 3+rand[6];
                    case 'nanman':return 2+rand[7];
                    case 'wanjian':return 2+rand[8];
                    default:return rand[9];
                }
            }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());        
        'step 1'
        if(result.bool){
            player.logSkill('xwj_xwugeng_anxie');
            player.storage.xwj_xwugeng_anxie.add(result.links[0][2]);
        }
    },
            },
            "xwj_xwugeng_anxie2":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(target.storage.xwj_xwugeng_anxie.contains(card.name)) return false;
        },
                },
            },
            "xwj_xwugeng_dunkong":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        return player.countCards("h");
    },
                content:function (){
         "step 0"
        event.list = [];
        for(var i=0;i<player.num("h");i++){
            if(event.list.contains(get.suit(player.getCards('h')[i])))continue;
            event.list.push(get.suit(player.getCards('h')[i]));
            game.print(event.list);
        }
     //   player.showHandcards();
        "step 1"
        player.chooseControl(event.list,function(event,player){
            return event.list.randomGet();
        }).prompt="遁空：请选择一种花色并弃置该花色的所有手牌";
        "step 2"        
      //  player.storage.xwj_xwugeng_dunkong = result.control;
          player.discard(player.getCards("h",function(card){
                    return get.suit(card) == result.control;
                }));
            "step 3"
            trigger.num--;     
    },
            },
            "xwj_xwugeng_qinhe":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){                
        return event.player!=player&&player.countCards('h')>0;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){     
            player.logSkill('xwj_xwugeng_qinhe',trigger.player);
            var card=player.getCards('h').randomGet();
            player.showCards(card);
            player.storage.xwj_xwugeng_qinhe=get.suit(card);
            game.addVideo('storage',player,['xwj_xwugeng_qinhe',player.storage.xwj_xwugeng_qinhe]);
            player.markSkill('xwj_xwugeng_qinhe');        
    },
                intro:{
                    content:function (suit){
            return get.translation(suit);
        },
                },               
                group:["xwj_xwugeng_qinhe2","xwj_xwugeng_qinhe3"],
                ai:{
                expose:0.8,
                    order:11,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xwugeng_qinhe2":{
                trigger:{
                    global:"useCard",
                },
                frequent:true,
                filter:function (event,player){
                if(event.player!=_status.currentPhase) return false;
        // return (get.type(event.card,'trick')==player.storage.xwj_xwugeng_qinhe&&event.cards[0]&&event.cards[0]==event.card);
        return get.suit(event.card)==player.storage.xwj_xwugeng_qinhe;
    },
                content:function (){
        game.playSu(['xwj_xwugeng_qinhe1','xwj_xwugeng_qinhe2'].randomGet());                      
        trigger.player.draw();
        player.draw();
    },
                ai:{
                    threaten:0.4,
                },
            },
            "xwj_xwugeng_qinhe3":{
                trigger:{
                    global:"phaseUseEnd",
                },
                silent:true,
                forced:true,
                popup:false,
                content:function (){
        delete player.storage.xwj_xwugeng_qinhe;
        player.storage.xwj_xwugeng_qinhe=false;
        trigger.player.unmarkSkill('xwj_xwugeng_qinhe');
    },             
            },
         
        "xwj_xwugeng_zhouwen":{    
                audio:"ext:群英会:2",   
                group:["xwj_xwugeng_zhouwen1","xwj_xwugeng_zhouwen2"],
            },
           "xwj_xwugeng_zhouwen1":{                
                trigger:{
                    player:"damageBegin",
                },
                audio:"ext:群英会:2",
                forced:true,              
                filter:function (event,player){
        return !player.getEquip(2);
    },                       
                content:function (){        
            trigger.num--;            
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
 },
   "xwj_xwugeng_zhouwen2":{                
                trigger:{
                    source:"damageBegin",
                },
                audio:"ext:群英会:2",
                forced:true,
                filter:function (event,player){
        return event.player.hp>player.hp;
    },                       
                content:function (){        
                //var num2=trigger.player.hp-player.hp;
           // trigger.num+=num2;        
               trigger.num++;
    },               
 },
            "xwj_xwugeng_fanji":{
            audio:"ext:群英会:2",
            	derivation:['xwj_xwugeng_mingpao','xwj_xwugeng_lianqi','xwj_xwugeng_wuse','xwj_xwugeng_xuwu'],
                group:["xwj_xwugeng_fanji1","xwj_xwugeng_fanji2"],
            },
            "xwj_xwugeng_fanji1":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                content:function (){
        player.removeSkill(player.storage.xwj_xwugeng_fanji);
        switch(Math.floor(Math.random()*2)){
            case 0:if(lib.skill.xwj_xwugeng_mingpao){player.addSkill('xwj_xwugeng_mingpao'); player.storage.xwj_xwugeng_fanji='xwj_xwugeng_mingpao';player.popup('xwj_xwugeng_mingpao');}break;
            case 1:if(lib.skill.xwj_xwugeng_lianqi){player.addSkill('xwj_xwugeng_lianqi'); player.storage.xwj_xwugeng_fanji='xwj_xwugeng_lianqi';player.popup('xwj_xwugeng_lianqi');}break;         
          }
    },
            },
            "xwj_xwugeng_fanji2":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                popup:false,
                content:function (){
        player.removeSkill(player.storage.xwj_xwugeng_fanji);
        switch(Math.floor(Math.random()*2)){
            case 0:if(lib.skill.xwj_xwugeng_wuse){player.addSkill('xwj_xwugeng_wuse'); player.storage.xwj_xwugeng_fanji='xwj_xwugeng_wuse';player.popup('xwj_xwugeng_wuse');}break;
            case 1:if(lib.skill.xwj_xwugeng_xuwu){player.addSkill('xwj_xwugeng_xuwu'); player.storage.xwj_xwugeng_fanji='xwj_xwugeng_xuwu';player.popup('xwj_xwugeng_xuwu');}break;           
         }
    },
            },
            "xwj_xwugeng_anyu":{
                audio:"ext:群英会:1",               
                direct:true,                
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
             return player.isAlive();
    },
                content:function (){
    "step 0"
     player.chooseTarget('选择【暗狱】的目标',lib.translate.xwj_xwugeng_anyu_info,true,function(card,player,target){
             return target!=player&&!target.isTurnedOver();
     }).set('ai',function(target){     
             return -get.attitude(player,target);            
     });        
     "step 1"
     if(result.bool){
             player.logSkill('xwj_xwugeng_anyu');
             player.line(result.targets[0]);
             result.targets[0].turnOver();          
             result.targets[0].addTempSkill('xwj_xwugeng_anyu3',{player:'damageAfter'});           
             result.targets[0].addTempSkill('xwj_xwugeng_anyu2',{player:'damageAfter'});                                                  
     }
    else {       
            event.finish(); 
    }                     
    },
                ai:{
                    basic:{
                        result:{
                            player:1,
                        },
                        expose:0.8,
                    },
                },
            },
            "xwj_xwugeng_anyu2":{      
                 mark:true,
                 mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },              
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            "xwj_xwugeng_anyu3":{
                init:function (player,skill){
        var skills=player.getSkills(true,false);
        for(var i=0;i<skills.length;i++){
           if(get.skills[i]){
                skills.splice(i--,1);                                 
           } 
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                mark:true,
                locked:true,
                intro:{
                    content:function (storage,player,skill){
            var list=[];
            for(var i in player.disabledSkills){
                if(player.disabledSkills[i].contains(skill)){
                    list.push(i)
                }
            }
            if(list.length){
                var str='失效技能：';
                for(var i=0;i<list.length;i++){
                    if(lib.translate[list[i]+'_info']){
                        str+=get.translation(list[i])+'、';
                    }
                }
                return str.slice(0,str.length-1);
            }
        },
                },
            },
            "xwj_xwugeng_mingpao":{
             mark:true,             
             marktext:"炮",
                intro:{
                    content:"你使用的【杀】可指定任意名目标",
                },
                mod:{
                    selectTarget:function (card,player,range){
            if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
        },
                },
            },
            "xwj_xwugeng_lianqi":{
             mark:true,
             marktext:"气",
                intro:{
                    content:"你使用的【杀】没距离与次数限制",
                },
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
            },
            "xwj_xwugeng_wuse":{
             mark:true,
             marktext:"色",
                intro:{
                    content:"你不能成为【杀】的目标",
                },
                mod:{
                    targetEnabled:function (card,player,target,now){           
            if(card.name=='sha') return false;                      
        },
                },
            },
            "xwj_xwugeng_xuwu":{
             mark:true,
             marktext:"虚",
                intro:{
                    content:"你不能成为锦囊牌的目标",
                },
                mod:{
                    targetEnabled:function (card,player,target,now){            
            if(get.type(card)=='trick'||get.type(card)=='delay') return false;                      
        },
                },
            },
            "xwj_xwugeng_tianqi":{
            audio:"ext:群英会:2",
                trigger:{
                    player:"dying",
                },
                forced:true,
                unique:true,
                derivation:['xwj_xwugeng_anyu','xwj_xwugeng_fanji','xwj_xwugeng_mingpao','xwj_xwugeng_lianqi','xwj_xwugeng_wuse','xwj_xwugeng_xuwu'],                
                filter:function (event,player){                   

          return player.hp<=0;

      },
                content:function (){                                                   
                "step 0"                                 
                     ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3'; 
                     player.$fullscreenpop('无色界神力','fire'); 
                     game.delay();
        game.countPlayer(function(current){
            if(current!=player){           
                player.line(current,'green');
                current.addTempSkill('xwj_xwugeng_anyu3',{player:'damageAfter'});                                
                current.addTempSkill('xwj_xwugeng_anyu2',{player:'phaseBegin'});                                       
            }
        });             

       "step 1"             
    player.gainMaxHp();
    player.update();
    player.recover(Infinity);  
                     
    //game.playSu(['xwj_xsanguo_xushen1','xwj_xsanguo_xushen2'].randomGet());  

    player.removeSkill('xwj_xwugeng_zhouwen'); 

    player.addSkill('xwj_xwugeng_fanji'); 

    player.addSkill('xwj_xwugeng_anyu'); 
    player.addTempSkill('xwj_xwugeng_wuse',{player:'phaseBegin'});
    player.popup('xwj_xwugeng_wuse');
    player.awakenSkill('xwj_xwugeng_tianqi');

    player.update();
    },
            },
	  "xwj_xwugeng_zhutian":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:-12,
                filter:function (event,player){      
                if(!player.countCards('h',{name:'sha'})) return false;
        return player.isAlive();
    },
                content:function (){    
                player.addTempSkill('xwj_xwugeng_zhutian2','shaAfter');   
                player.chooseToUse({name:'sha'},'诛天：是否使用一张杀？').logSkill='xwj_xwugeng_zhutian';
         //player.chooseToUse({name:'sha'},trigger.source,'诛天：是否对'+get.translation(trigger.source)+'使用一张杀？').logSkill='xwj_xwugeng_zhutian';
            var chat=['这是我内心最珍贵的东西，你不该触碰它','我有我的追求，任何压迫都不能使我屈服'].randomGet();
            player.say(chat);       
    },
            },
               "xwj_xwugeng_zhutian2":{
                audio:"ext:群英会:2",
                	trigger:{source:'damageBegin'},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					if(event.player.hp==event.player.maxHp) return att<0;
					if(event.player.hp==event.player.maxHp-1||(event.player.maxHp<=3||event.player.hasSkillTag('maixie'))) return att<0;
					return att>0;
				},
				logTarget:'player',
                filter:function (event,player){      
        return event.card&&event.card.name=='sha';
    },
                content:function (){   
             	trigger.cancel();
             	   var chat=['这是一把专门杀神的剑，名叫【诛天】','这把剑能焚烧神族的神元'].randomGet();
              player.say(chat);       
			       			trigger.player.loseMaxHp(true);
               trigger.player.damage('fire');
    },
            },
            "xwj_xwugeng_qiyi":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"damageBegin",
                },
                priority:120,
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){        

        return event.player.isAlive()&&!event.player.countCards('e',{subtype:'equip1'})&&!event.player.isDisabled(1);
    },
                content:function (){    
                  

                  event.card=get.cardPile(function(card){

                            return get.subtype(card)=='equip1';

                        });

                        if(event.card){

                           var chat=['我愿用我的一生为人类谋求自由','这就是我从幻岛学到的练气术'].randomGet();
                            player.say(chat);       
                            trigger.player.equip(event.card,true).set('delay',true);                    

                        }        

    },
                ai:{
                    order:1,
                    expose:0.2,
                },
            },
            "xwj_xwugeng_qijian":{
            audio:"ext:群英会:2",                              
                usable:1,
                enable:"phaseUse",                
                filter:function (event,player){
                return game.hasPlayer(function(current){
            return current.countCards('e',{subtype:'equip1'});
        });
        //return player.isAlive();
    },
                //filterTarget:true,
                filterTarget:function (card,player,target){      
                      return target!=player;
                },
                content:function (){
        "step 0"           
          player.$fullscreenpop('剑气流星','fire');  
        event.targets=game.filterPlayer();          
        for(var i=0;i<event.targets.length;i++){        
            if(!event.targets[i].countCards('e',{subtype:'equip1'})){
                event.targets.splice(i--,1);
            }
        }
        "step 1"
        if(event.targets.length){
            event.current=event.targets.shift();
            if(event.current.countCards('e',{subtype:'equip1'})&&target.isAlive()){        
           // player.discardPlayerCard(event.current,{subtype:'equip1'},'e',true,'请弃置其一张装备区的武器牌');
           player.discardPlayerCard(event.current,1,'e',true).set('filterButton',function(button){              
                return get.subtype(button.link)=='equip1';
            }).set('ai',function(button){
                return 1;
            });                      
            }
        }
        else{
            event.finish();
        }
        "step 2"   
        if(result.bool){
           var chat=['我的剑藏在虚空之中','我已经有很多年不再佩带剑了'].randomGet();
           player.say(chat);       
        event.current.useCard({name:'sha'},target,false);                       
        event.goto(1);
        }
        else event.finish();
    },
                ai:{
                   result:{
            target:function (player,target){
                if(!target.isEmpty(2)) return -0.2;
                if(target.hp<=2) return -3.5;
                return -2;
            },
					 },
                    order:1,
                    expose:0.4,
                },
            },
		"xwj_xwugeng_shenqu":{
			audio:"ext:群英会:2",
    forced:true,
 //   locked:true,
  //  noLose:true,   
  //  noDeprive:true,
//    noRemove:true,
  //  noDisable:true,
    trigger:{
        player:"damageBefore",
    },
    filter:function (event,player){		        
        return player.isAlive();
    },
    content:function (){                
        var chat=['神力浩瀚无边，而神技则将神力发挥到极致','你唯一能打败我的方法只有比我更快，但你能快到抓住划过天边的流星吗？'].randomGet();
            player.say(chat);     
			var chat=['我已将元始界神力催到极致，却仍穿不透他的身体','他的金刚霸气太强了，我已拼尽全力，却还伤不了他'].randomGet();
            trigger.source.say(chat);     
            if(trigger.num>1){             
    trigger.num=1;
    event.finish();
    }
    if(trigger.source.hp>player.hp){
    trigger.cancel();
    event.finish();  
    }
},
    ai:{
        notrick:true,
        nosha:true,       
        effect:{
            target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
        },
    },
		},							
		
 "xwj_xwugeng_suiyue":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                priority:15,
                filter:function (event, player,target){
                 return !player.isMaxHp();
    },
    filterTarget:function (card,player,target){ 
               return player.canUse({name:'sha'},target,false)&&target!=player&&!target.hasSkill('xwj_xwugeng_zhouwen')&&!target.hasSkill('xwj_xhuoying_renzong')&&!target.hasSkill('xwj_xhuoying_yehua')&&!target.hasSkill('xiangle')&&!target.hasSkill('sgk_kuangyan')&&!target.hasSkill('dawu2')&&!target.hasSkill('fenyong')&&!target.hasSkill('new_xiangle')&&!target.hasSkill('zhichi')&&!target.hasSkill('Revision_zhichi')&&!target.hasSkill('sgk_weiwo')&&!target.hasSkill('new_tengjia')&&!target.hasSkill('xwj_xhuoying_chunshu')&&!target.hasSkill('xwj_xhuoying_huomeng2')&&!target.hasSkill('xwj_xhuoying_wuyin')&&!target.hasSkill('xwj_xhuoying_wuchen')&&!target.hasSkill('xwj_xhuoying_juefang')&&!target.hasSkill('xwj_xhuoying_rexuzuo')&&!target.hasSkill('xwj_xhuoying_xinxuzuo')&&!target.hasSkill('xwj_xhuoying_xuzuo')&&!target.hasSkill('xwj_xwugeng_jingang')&&!target.hasSkill('bingjia')&&!target.hasSkill('bingjia2')&&target.hp>=player.hp;
    },
    check:function (event,player){
    if(player.hp<=1) return 0;
    return get.attitude(_status.event.player,target)<0;
    },
                prepare:function (cards, player, targets) {
        player.line(targets);
    },
                content:function (){
        "step 0"
        player.loseHp();       
        var chat=['祭司那边需要我的帮助，我必须速战速决','凡人，你很有本领，那就接我最强一招吧'].randomGet();
            player.say(chat); 
        "step 1"
         player.$fullscreenpop('神技•天斗碎岳','fire'); 
        // player.addSkill('unequip');
         //   var target=result.targets[0];
      //      player.storage.xwj_xwugeng_suiyue=target;    
      "step 2"
  //    var target=player.storage.xwj_xwugeng_suiyue;      					
	  player.addTempSkill('unequip','shaAfter');			
      player.useCard({name:'sha'},target,false);                 
        if(player.hp<target.hp){      
            event.redo();
        }
        else{
        //  target.storage.xwj_xwugeng_suiyue=false;
          //player.removeSkill('unequip');
            event.finish();
            }
    },
                ai:{
              //  unequip:true,
                    order:2,
                    result:{
                    target:function (player,target){
                return get.damageEffect(target,player);
            },
                        player:function (player){
                if(player.hp<2) return 0;
                return 0.8;
            },
                    },              
                    expose:0.8,
                },
            },
            
			"xwj_xwugeng_zhengnu":{   
 		audio:"ext:群英会:2", 
    trigger:{
        player:"damageEnd",
    },   
    priority:-2018,
    filter:function (event,player){
        return player.isAlive();
    },
    check:function (event,player){
        var active=0;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            if(!game.players[i].isOut()){
                if(ai.get.attitude(player,game.players[i])>0){
                    active++;
                }
                else if(ai.get.attitude(player,game.players[i])<=0){
                    active++;
                }
            }
        }
        if(active>0) return 1;
        if(Math.random()<0.4) return 1;
        return 0.8;
    },
    content:function (){
        "step 0"
        trigger.finish();
        trigger.untrigger();    
        event.current=player.next;        
          var chat=['敢出手伤我神族大祭司，想必已做好灭亡的觉悟了','十刑竟能战胜天魁？有点意思！'].randomGet();
            player.say(chat);    
        "step 1"
        event.current.chooseControl('随机弃牌','令其摸牌').set('ai',function(){         
            if(ai.get.attitude(event.current,player)>0) return '令其摸牌';
            if(ai.get.attitude(event.current,player)<=0&&event.current.countCards('he')>2) return '随机弃牌';
            return '令其摸牌';
        }).set('prompt','天地震怒：请选择一项');    
        "step 2"
        if(result.control=='随机弃牌'){
            event.current.discard(event.current.getCards('he').randomGet());             
        }
        else{
            event.current.line(player,'green');
            player.draw();
        }
        if(event.current.next!=player){
            event.current=event.current.next;
            game.delay(0.5);
            event.goto(1);
        }                    
    },
    ai:{
    order:4,
    maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(target.hp<=1) return;
								if(!target.hasFriend()) return;
								var hastarget=false;
								var turnfriend=false;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
										hastarget=true;
									}
									if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
										hastarget=true;
										turnfriend=true;
									}
								}
								if(get.attitude(player,target)>0&&!hastarget) return;
								if(turnfriend||target.hp==target.maxHp) return [0.5,1];
								if(target.hp>1) return [1,0.5];
							}
						}
					}
					},
},
	
	"xwj_xwugeng_pili":{               
                audio:"ext:群英会:2",                                
                enable:"phaseUse",	           		
	           			round:2,
                complexCard:true,
                filterCard:function (card,player){
        if(ui.selected.cards.length){
            return get.suit(card)==get.suit(ui.selected.cards[0]);
        }
        var cards=player.get('h');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.suit(card)==get.suit(cards[i])) return true;
            }
        }
        return true;
    },
               selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    }, 
    check:function (event,player,target){
        return get.attitude(player,target)<0;
    },
                filterTarget:function (card,player,target){
        return target!=player&&get.distance(player,target,'attack')<=1;
    },
                filter:function (event,player){
        return player.hp<=game.players.length;
    },
                intro:{
                    content:"limited",
                },
                check:function (card){
        return 8-ai.get.value(card);
    },
                prepare:function (cards,player,targets){
        player.line(targets);
    },
                init:function (player){               
        for(var i=0;i<player.node.marks.childNodes.length;i++){
            if(player.node.marks.childNodes[i].name=='xwj_xwugeng_pili'){
                player.node.marks.childNodes[i].setBackground(player.name,'character');
                player.node.marks.childNodes[i].innerHTML='';
            }
        }                    
    },
                multitarget:true,
                multiline:true,
                selectCard:[1,Infinity],
                content:function (){
        "step 0"
        player.$fullscreenpop('真武大霹雳','fire');     
        game.delay(1); 
        event.targets=targets.slice(0);
        event.num=event.targets.length;
        event.targets.sort(lib.sort.seat);    
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            target.damage(event.num);
            event.redo();
        }
    },
               ai:{            
                  order:8,                                          
                    expose:0.9,               
                    threaten:0.5,                                                                                       
                    result:{
                    player:1,
                        target:function (player,target){
               return get.damageEffect(target,player);
                }
                 /* for(var i=0;i<game.players.length;i++){
                    if(lib.config.mode=='identity'){
                        if(game.players[i].ai.shown<=0.2) return 0;
                    }
                    else if(lib.config.mode=='guozhan'){
                        if(game.players[i].identity=='unknown') return 0;
                    }
                }                                
                var num=0;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].isDamaged()&&ai.get.attitude(player,game.players[i])<0){
                        num++;
                    }
                }    
                if(num<2) return 0;
                var eff=get.damageEffect(target,player,target);
                return eff; */
            }
                    },                                         
            },	
	
 "xwj_xwugeng_shensu":{
 unique:true,
                mod:{
        globalFrom:function (from,to,distance){
            return distance-from.hp;
        },
        globalTo:function (from,to,current){
           return current+(to.maxHp-to.hp);
        },
    },
            },
	
	 "xwj_xwugeng_baofeng3":{
                mod:{
                mark:true,
                intro:{
                    content:"防",
                },
                    globalTo:function (from,to,current){
           return current+(to.maxHp-to.hp);
        },
                },
            },
            "xwj_xwugeng_baofeng4":{        
            mark:true, 
            intro:{
                    content:"攻",
                },
                mod:{
                    globalFrom:function (from,to,distance){
            return distance+from.hp;
        },
                },
            },
            
            /*"xwj_xwugeng_baofeng2":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"dying",
                },
                priority:8,
                unique:true,
                skillAnimation:true,
                animationColor:"water",                    
                filter:function (event,player){
        return event.player.hp<=0&&event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:"player",
                content:function (){
         player.logSkill('xwj_xwugeng_baofeng2',trigger.player);                             
         trigger.player.addSkill('xwj_xwugeng_baofeng3');
         trigger.player.markSkill('xwj_xwugeng_baofeng3');
         trigger.player.recover(1-trigger.player.hp);        	 
    },
            },
            
            "xwj_xwugeng_baofeng1":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
          player.chooseTarget(get.prompt('xwj_xwugeng_baofeng1'),function(card,player,target){
            return player!=target;
        }).ai=function(target){            
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)<0) return 0;       
            else{               
                return 1+target.countCards('h');
            }
        }
        "step 1"
        if(result.bool){
           var chat=['银翼破空','哟～一下子吹飞了，都看不见了，'].randomGet();
            player.say(chat);    
            player.logSkill('xwj_xwugeng_baofeng1',result.targets);             
            result.targets[0].addSkill('xwj_xwugeng_baofeng4');           
            result.targets[0].markSkill('xwj_xwugeng_baofeng4'); 
            player.useCard({name:'sha'},result.targets[0],false); 
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(target.hp<=1) return;
                    if(!target.hasFriend()) return;
                    var hastarget=false;
                    var turnfriend=false;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                            hastarget=true;
                        }
                        if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                            hastarget=true;
                            turnfriend=true;
                        }
                    }
                    if(get.attitude(player,target)>0&&!hastarget) return;
                    if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                    if(target.hp>1) return [1,0.5];
                }
            },
                    },
                },
            },
            */
            
         
     "xwj_xwugeng_baofeng":{               
    audio:"ext:群英会:2",
    trigger:{
        player:"damage",
    },
    filter:function (event,player){
           return player.isAlive();                                          
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseControl('远逐','救护','cancel2',function(){
            var player=_status.event.player;
            if(player.hp>1){
                return '远逐';
            }
            if(player.hp<2){
                return '救护';
            }           
            return 'cancel2';
        });
        "step 1"
        if(result.control=='远逐'){          
            var chat=['银翼破空','干嘛要那么认真呢？'].randomGet();
            player.say(chat);   
            trigger.source.addSkill('xwj_xwugeng_baofeng4');
            trigger.source.markSkill('xwj_xwugeng_baofeng4');
            player.useCard({name:'sha'},trigger.source,false); 
            player.logSkill('xwj_xwugeng_baofeng');
            event.finish();
        }
        else if(result.control=='救护'){
            event.goto(2);               
        }
        "step 2"              
          player.chooseTarget('选择【救护】的目标',lib.translate.xwj_xwugeng_baofeng_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);            
        });
        "step 3"
        if(result.bool){
           var chat=['若你们退回地狱界，我们仍然可以相安无事','不用感谢我'].randomGet();
            player.say(chat);    
            player.logSkill('xwj_xwugeng_baofeng',result.targets);             
            result.targets[0].addSkill('xwj_xwugeng_baofeng3');         
            result.targets[0].draw();
            result.targets[0].markSkill('xwj_xwugeng_baofeng3');            
        }                      
    },
    ai:{
                   maixie:true,				
                   order:7,
                },

      },      
            
            "xwj_xwugeng_zhengkong2":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
           //     noLose:true,
             //   noGain:true,
              //  noDeprive:true,
            //    locked:true,
            //    noRemove:true,
              //  noDisable:true,
                unique:true,
                forced:true,
                marktext:"空",
                mark:true,               
                filter:function (event,player){
           return player.isAlive();                                          
    },
                content:function (){    
     setTimeout(function(){
     var chat=['吊颈都要竭口气吧？','连呼吸都觉得痛……'].randomGet();
            player.say(chat);    
     player.die();    
     },81000)     
     },
                direct:true,
                notarget:true,
                ai:{
                    expose:0.5,
                    maixie:true,
                    maixie_hp:true,	
                },
            },
           
            "xwj_xwugeng_zhengkong":{
                audio:"ext:群英会:2",
                trigger:{player:['loseHpAfter','damageAfter']},
                filter:function (event,player){        
        if(event.name=='damage') return event.num>1;
        return true;
    }, 
                direct:true,
                unique:true,
               // skillAnimation:true,
              //  animationColor:"thunder",             
                content:function (){
        "step 0"
       player.chooseTarget('选择发动神技【真空】的目标',lib.translate.xwj_xwugeng_zhengkong_info,true,function(card,player,target){
            return target!=player&&target.identity!='zhu'&&!target.hasSkill('xwj_xwugeng_zhengkong2');
        }).set('ai',function(target){
            return -get.attitude(trigger.player,target);            
        });
        "step 1"
        if(result.bool){
            player.$fullscreenpop('神技•真空','thunder');
            player.logSkill('xwj_xwugeng_zhengkong',result.targets);
           // result.targets[0].addSkill('xwj_xwugeng_zhengkong2');          
             setTimeout(function(){
     var chat=['吊颈都要竭口气吧？','连呼吸都觉得痛……'].randomGet();
            result.targets[0].say(chat);    
     result.targets[0].die();    
     },60000)     
        }
    },
                ai:{
                   damage:true,    
                   order:7,
                   maixie:true,
					maixie_hp:true,					
                },
            },				
	"xwj_xwugeng_xuemao":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return (ui.cardPile.childElementCount+ui.discardPile.childElementCount)>=1;
    },
	
                content:function (){
        "step 0"
        event.cards=get.cards(1);
        player.showCards(event.cards);
        "step 1"      
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i])=='trick'||get.type(event.cards[i])=='delay'){
                event.cards[i].discard();
                event.cards.splice(i--,1);
                player.draw(2);	            
                event.finish();
            }
           if(get.type(event.cards[i])=='equip'){
                player.recover();
	             	game.delay(0.5);            
                player.equip(event.cards[i],true).set('delay',true);                                    
                event.finish();
            }
           if(get.type(event.cards[i])=='basic'){                       
            player.gain(event.cards[i],'gain2');                                                                          
                event.goto(2);  
            }           
        }                              
        "step 2"
        player.chooseTarget(get.prompt('xwj_xwugeng_xuemao'),function(card,player,target){
            if(player==target) return false;
            return player.canUse({name:'sha'},target,false);
        }).set('ai',function(target){
            return -ai.get.attitude(_status.event.player,target);
        });   
        "step 3"
        if(result.bool){
        player.logSkill('xwj_xwugeng_xuemao',result.targets);          
        event.targets=result.targets
        if(result.targets.length>=1){                       
            player.useCard({name:'sha'},event.targets[0],false);               
        }
        else{
            event.finish();         
        } 
        game.delay(0.5);    
        }                
    },
    
                ai:{
                order:2,
                    threaten:0.5,
					result:{
                        player:1,
                    },
                },           
            },		

	 "xwj_xwugeng_baiqian":{
                forced:true,
                unique:true,
                noLose:true,           
                noDeprive:true,
                locked:true,
                noRemove:true,
                noDisable:true,                         
                group:["xwj_xwugeng_baiqian1","xwj_xwugeng_baiqian2","xwj_xwugeng_baiqian3"],
            },
            "xwj_xwugeng_baiqian5":{
                mark:true,
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            "xwj_xwugeng_baiqian1":{
                audio:"ext:群英会:1",
                trigger:{global:'gameStart',player:'enterGame'},
                forced:true,
                unique:true,
                locked:true,
              //  noLose:true,
             //   noDeprive:true,
             //   noRemove:true,
               // noDisable:true,
                priority:Infinity,           
         /*       init:function(player){
        console.log(player);
           player.turnOver = function (all) {
           player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.skip = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.disableSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.init = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
      	player.reinit = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };		
      	player.remove = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
      	player.removeSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
       player.addTempSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.goMad = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.clearSkills = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
},         */

                content:function (){
					"step 0" 				
					player.$fullscreenpop('无色界神力','thunder'); 
 	   	game.delay(5);
	   		"step 1"
        game.countPlayer(function(current){
            if(current!=player){           
                player.line(current,'green');                
                current.addTempSkill('xwj_xwugeng_baiqian4',{player:'damageAfter'});                                       
            }
        });
   		"step 2"   		
      game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_tian_background.jpg");
      game.log(player,'将场地切换为无色之境');
	     ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3'; 
	     player.node.name.innerHTML='黑<br>龙';
	     player.update();
    },
            },
            "xwj_xwugeng_baiqian3":{
                forced:true,
                locked:true,
                unique:true,
              //  noLose:true,             
           //     noDeprive:true,
           //     noRemove:true,
         //       noDisable:true,
             /*    init:function(player){
        console.log(player);
           player.turnOver = function (all) {
           player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.skip = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.disableSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.init = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
      	player.reinit = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
      	player.remove = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
      	player.removeSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
       player.addTempSkill = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.goMad = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
        player.clearSkills = function (all) {
            player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
        };
},               */
                mod:{             	
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
					},							
                    targetEnabled:function (card,player,target,now){
            if(target.countCards('h')!=target.hp){        
                if((card.name=='sha')||get.type(card)=='trick'||get.type(card)=='delay') return false;               
            }
        },
                },
            },
            "xwj_xwugeng_baiqian4":{           
                init:function (player,skill){
        var skills=player.getSkills(true,false);
        for(var i=0;i<skills.length;i++){
           if(get.skills[i]){
                skills.splice(i--,1);                                 
           } 
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                mark:true,
                locked:true,
                intro:{
                    content:function (storage,player,skill){
            var list=[];
            for(var i in player.disabledSkills){
                if(player.disabledSkills[i].contains(skill)){
                    list.push(i)
                }
            }
            if(list.length){
                var str='失效技能：';
                for(var i=0;i<list.length;i++){
                    if(lib.translate[list[i]+'_info']){
                        str+=get.translation(list[i])+'、';
                    }
                }
                return str.slice(0,str.length-1);
            }
        },
                },
            },
            "xwj_xwugeng_baiqian2":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,              
                filterTarget:function (card,player,target){
        return target!=player&&get.distance(player,target,'attack')<=1;
    },                
                content:function (){
        var chat=['猴子，你为何反我？','不死鸟吗？六百年前，我就亲手撕掉了它的双翼'].randomGet();
        player.say(chat);         
        target.addTempSkill('xwj_xwugeng_baiqian4',{player:'phaseEnd'});     
        target.addTempSkill('xwj_xwugeng_baiqian5',{player:'phaseBegin'}); 
    },
                ai:{
                    order:13,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
	
 "xwj_xwugeng_yinguo":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageEnd",
                },
               // mark:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                init:function (player){
        player.storage.xwj_xwugeng_yinguo=0;
    },
                forced:true,
             content:function (){          
         var chat=['日后再说，管他什么报应','不入虎穴，焉得虎子？'].randomGet();
            player.say(chat);         
        player.markSkill('xwj_xwugeng_yinguo');                                                         
        player.storage.xwj_xwugeng_yinguo+=trigger.num;                     
        player.update();  
    },
                intro:{
                    content:"已获得了#个因果标记",
                },
            },
            "xwj_xwugeng_zhuanlun":{
                audio:"ext:群英会:2",
                trigger:{global:'gameStart',player:'enterGame'},
                forced:true,
                unique:true,
                priority:2018,
				derivation:['xwj_xwugeng_yinguo'],
                content:function (){
                "step 0"
         var chat=['世间没不可渡之人','你们必须受到管束'].randomGet();
            player.say(chat);            
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('xwj_xwugeng_yinguo')){
                player.line(current,'green');
                current.addSkill('xwj_xwugeng_yinguo');
            }
        });
        "step 1"
        player.removeSkill('xwj_xwugeng_zhuanlun');
    },
            },
            "xwj_xwugeng_kongjing":{
                audio:"ext:群英会:2",
                trigger:{
                    target:"useCardToBefore",
                },
                popup:false,
                direct:true,
                filter:function (event,player){
        if(event.addedTargets) return false;
        // return event.card&&get.color(event.card)=='red'&&event.player!=player;
        return event.targets.length==1&&event.player!=player&&player.countCards('h')>=1;
    },
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(get.prompt('xwj_xwugeng_kongjing',trigger.player),1);
        next.ai=function(card){
            if(get.effect(player,trigger.card)<0){
                if(card.name=='liuxinghuoyu') return 8-get.value(card);
                return 8-get.value(card);
            }
            return 0;
        };
        next.prompt2='反弹'+get.translation(trigger.player)+'的'+get.translation(trigger.card);
        next.logSkill=['xwj_xwugeng_kongjing',trigger.player];
        "step 1"
        if(result.bool){
             var chat=['空镜映月，你们对我的暴戾行为都会回到你的身上','没有人能够伤到我'].randomGet();
            player.say(chat);                
            // player.discard(result.cards);
            trigger.target=trigger.player;
            trigger.player=player;
            trigger.untrigger();
            trigger.trigger('useCardToBefore');
        }
        // "step 2"
        // if(result.bool){
        //     trigger.target=result.targets[0];
        //     trigger.untrigger;
        //     trigger.trigger('shaBefore');
        //     game.delay();
        // }
    },
                ai:{
                order:3,
                    threaten:function (player,target){
            if(target.countCards('h')<=2){
                return 2;
            }
            return 2/(target.countCards('h')-1);
        },
                },
            },
			
			"xwj_xwugeng_jingang":{
			audio:"ext:群英会:2",
    forced:true,
  //  locked:true,
 //   noLose:true,   
 //   noDeprive:true,
  //   noRemove:true,
   // noDisable:true,
    trigger:{
        player:"damageBefore",
    },
    filter:function (event,player){		
        if(player.getEquip(2)) return false;
        return true;
    },
    content:function (){                
        var chat=['金刚不坏之身，岂是尔等杂碎能破？','金刚真身，刀枪不入'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
    ai:{
        notrick:true,
        nosha:true,
        noe2:true,
        effect:{
            target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
        },
    },
		},							
			
    "xwj_xwugeng_chenjie":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                unique:true,
                //mark:true,
    filter:function (event,player){                                                  
          return player.isAlive();                                                                                          
    },
    prepare:function (cards,player){
        player.line(game.players);
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].storage.xwj_xwugeng_yinguo>0){
                game.players[i].animate('target');
            }
        }
    },
	derivation:['xwj_xwugeng_chenzhui','xwj_xwugeng_jingang'],
        content:function (){   
        /*
        	 event.targets=game.filterPlayer(function(current){
            return current.storage.xwj_xwugeng_yinguo>0;
        });
        event.targets.damage();
         */
      for(var i=0;i<game.players.length;i++){                                                       
                if(game.players[i].storage.xwj_xwugeng_yinguo<=0){
                event.finish();
               }                                       
           else{                                                                         
                if(game.players[i].storage.xwj_xwugeng_yinguo>=1){                                                                                    
              game.players[i].damage();                            
              game.players[i].storage.xwj_xwugeng_yinguo--; 
			   if(game.players[i].storage.xwj_xwugeng_yinguo<1){
				  game.players[i].unmarkSkill('xwj_xwugeng_yinguo');
				  }
			  }
		  }		  
		  
			          game.delay(0.5);
              player.removeSkill('xwj_xwugeng_kongjing');
              player.removeSkill('xwj_xwugeng_zhuzhan');			  
              player.removeSkill('xwj_xwugeng_chenjie');
              player.addSkill('xwj_xwugeng_chenzhui');
			  player.addSkill('xwj_xwugeng_jingang');
			 player.node.name.innerHTML='恶<br>禅';
 			game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xwugeng_eshan.jpg'); 		
	    player.update();
     var chat=['如是因，如是果，你们这一生对他人所做的伤害，都会一次过回到自己身上','让我代天惩罚你们……神技•因果转轮！'].randomGet();
            player.say(chat);         
            }                               
    },
    ai:{
        order:2,
        result:{
            player:function (player){
                var num=0;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=player){
                        if(game.players[i].ai.shown==0) return 0;
                        num+=ai.get.damageEffect(game.players[i],player,player)>0?1:-1;
                    }
                }
                return num;
            }
        }
    },
            },
			
			    "xwj_xwugeng_chenzhui":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                unique:true,
                mark:true,
                filterTarget:function (card,player,target){
        return target.hasSkill('xwj_xwugeng_yinguo')&&target.storage.xwj_xwugeng_yinguo>0;
    },
	check:function (event,player,target){
        return get.attitude(player,target)<0;
    },
	derivation:['xwj_xwugeng_chenjie','xwj_xwugeng_kongjing','xwj_xwugeng_zhuzhan'],
content:function (){
	'step 0'
	var chat=['大胆狂徒，为什么不听我的教诲？','通通都是些愚昧不堪的蠢蛋'].randomGet();
            player.say(chat); 
            target.damage(target.storage.xwj_xwugeng_yinguo);
            target.storage.xwj_xwugeng_yinguo=0;
            target.unmarkSkill('xwj_xwugeng_yinguo');
	        		player.removeSkill('xwj_xwugeng_jingang');
            player.removeSkill('xwj_xwugeng_chenzhui');
            player.addSkill('xwj_xwugeng_chenjie');
            player.addSkill('xwj_xwugeng_kongjing');
            player.addSkill('xwj_xwugeng_zhuzhan');
          	game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xwugeng_zhengshan.jpg');      
           player.node.name.innerHTML='真<br>禅<br>圣<br>王';
	          player.update();
       	'step 1'
        var evt=_status.event.getParent('phase');
        if(evt){
            game.resetSkills();
            _status.event=evt;
            _status.event.finish();
            _status.event.untrigger(true);
        }
},
    ai:{                    
                     expose:1,
                    order:8,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },		
            "xwj_xwugeng_zhuzhan":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"dying",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                priority:10,
                filter:function (event,player){
        return event.player.hp<=0;
    },
                content:function (){
        "step 0"
        event.cards=get.cards(1);
        player.showCards(event.cards);
        "step 1" 
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.color(event.cards[i])=='red'){
                num++;
                event.cards[i].discard();
                event.cards.splice(i--,1);
            }
        }
        if(num){
            trigger.player.recover(num);
            var chat=['在我的神力加护下，所有神族战士都能发挥出自己最大的实力','长生界神力——神技•生死轮回限'].randomGet();
            player.say(chat);              
        }
     "step 2"
        if(event.cards.length){
            player.gain(event.cards,'gain2');                        
            game.delay(0.5);           
            var chat=['抱歉，我失败了','这些蛮族出手太狠了'].randomGet();
            player.say(chat);              
        }
    },
                ai:{
                order:4,
                save:true,
                    threaten:0.5,
                },
            },
           
            "xwj_xwugeng_fuhuo":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"dieBegin",
                },				
           //				noLose:true,
            //    noGain:true,
              //  noDeprive:true,
             //   locked:true,
              //  noRemove:true,
            //    noDisable:true,				
                unique:true,
                forced:true,
                filter:function (event,player){
           return player.hp<=0;                                          
    },
                content:function (){    
     var chat=['想要杀死我？你还得加把劲……不好，被包围了','好小子，你成功地让我死了一次，哈哈……'].randomGet();
            player.say(chat);         
     setTimeout(function(){
    player.gainMaxHp();  
    player.update();
    ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3'; 
   	game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_shixing_background.jpg");
    game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xwugeng_xinshixing.jpg'); 	     
    player.revive(player.maxHp-player.hp);
    player.recover(Infinity);
    player.update();
},49000)  
     player.logSkill('xwj_xwugeng_fuhuo');    
     },
                direct:true,
                notarget:true,
                ai:{
                    expose:0.5,
                    maixie:true,
                },
            },

            "xwj_xwugeng_fuchou":{
                audio:"ext:群英会:3",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){        
    var chat=['这一天终究还是来了','就算是死，我也要回来索命'].randomGet();
        player.say(chat); 
        player.addTempSkill('xwj_xwugeng_fuchou2',{player:'phaseEnd'});        
        var num2=player.maxHp-player.hp;                   
        trigger.num+=num2;                   
    },
    
    mod:{
                    globalFrom:function (from,to,distance){
            return distance-(from.maxHp-from.hp);
        },
                },
                
                ai:{
                    threaten:1.5,
                },
            },
            "xwj_xwugeng_fuchou2":{
                audio:"ext:群英会:3",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){                                 
        var num2=player.maxHp-player.hp;
        var num3=Math.floor(num2/2);                 
        trigger.num+=num3;       
         var chat=['神眼，你的死期到了！你对我的折磨与伤害，我要以十倍还给你','今天，我正是为了向神族复仇而来'].randomGet();
            player.say(chat);            
     
    },
            },
           },

 translate:{
	 "xwj_xwugeng_bailian":"白莲圣王",
            "xwj_xwugeng_xuelian":"血莲",
            "xwj_xwugeng_xuelian2":"血莲",
            "xwj_xwugeng_xuelian_info":"<span class=yellowtext>限定技</span> 当你受到伤害后，若伤害来源未获得“血莲”标记，你令其获得九个“血莲”标记，其回合结束时，你摸等同其“血莲”标记个数的一半（向下取整）张牌，然后其须弃置一个“血莲”标记，并随机弃置一张装备区的牌，否则受到一点伤害。若其“血莲”标记不大于0或已阵亡，你重置本技能",
             "xwj_xwugeng_siling":"死灵",
             "xwj_xwugeng_siling_info":"当你受到伤害时，若场上有角色有“血莲”标记，你可取消此伤害，然后该角色的“血莲”标记数量减一",
	         	 "xwj_xwugeng_fuxi":"伏羲",
            "xwj_xwugeng_cizhou":"赐咒",
            "xwj_xwugeng_cizhou_info":"<span class=yellowtext>限定技</span> 当一名角色脱离濒死状态时，你可令其获得技能【咒文】",
            "xwj_xwugeng_dongshi":"洞识",
            "xwj_xwugeng_dongshi_info":"当你使用【杀】／成为【杀】的目标时，你可以观看目标角色／来源的手牌，然后你可以获得其中一张奇数点数／偶数点数的手牌",
            "xwj_xwugeng_dongshi1":"洞识",
            "xwj_xwugeng_dongshi1_info":"undefined",
            "xwj_xwugeng_dongshi2":"洞识",
            "xwj_xwugeng_dongshi2_info":"undefined",
        "xwj_xwugeng_anxie":"暗蝎",
            "xwj_xwugeng_anxie_info":"结束阶段，你可声明一种锦囊牌的牌名，本局游戏你不能成为此牌的目标。",
            "xwj_xwugeng_baicai":"白菜",
            "xwj_xwugeng_qinhe":"亲和",
            "xwj_xwugeng_qinhe_info":"其他角色出牌阶段开始时，你可以随机展示你的一张手牌。若如此做，每当该角色于此阶段内使用与此牌花色相同的牌时，其与你可各摸一张牌。",
            "xwj_xwugeng_anxie2":"暗蝎",
            "xwj_xwugeng_anxie2_info":"你不能成为这锦囊牌的目标",
            "xwj_xwugeng_qinhe2":"亲和",
            "xwj_xwugeng_qinhe2_info":"亲和",
            "xwj_xwugeng_qinhe3":"亲和",
            "xwj_xwugeng_qinhe3_info":"亲和",
            "xwj_xwugeng_dunkong":"遁空",
            "xwj_xwugeng_dunkong_info":"当你受到伤害时，若你有手牌，你可选择一种花色并弃置该花色的所有手牌，然后伤害值减一",     
           "xwj_xwugeng_wugeng":"武庚",
           "xwj_xwugeng_zhouwen":"咒文",
           "xwj_xwugeng_zhouwen_info":"<li></font><font color=#f00>锁定技</font> 当你受到伤害时，若你的装备区没有防具牌，此伤害减一<li></font><font color=#f00>锁定技</font> 当你造成伤害时，若目标角色体力值比你的高，此伤害值+1",
            "xwj_xwugeng_fanji":"繁技",
            "xwj_xwugeng_fanji_info":"</font><font color=#f00>锁定技</font> 回合内，你随机获得技能【冥炮】或【炼气】；回合外，你随机获得技能【无色】或【虚无】",
            "xwj_xwugeng_tianqi":"天启",
            "xwj_xwugeng_tianqi_info":"<span class=greentext>觉醒技</span> 当你进入濒死状态时，你令所有其他角色失去所有技能直到其受到伤害且不能使用或打出牌直到其回合开始，然后你须失去技能【咒文】，获得技能【暗狱】、【繁技】，增加一点体力上限并回复体力至体力上限，且直到你的下个回合开始，你不能成为【杀】的目标",
            "xwj_xwugeng_fanji1":"繁技",
            "xwj_xwugeng_fanji1_info":"</font><font color=#f00>锁定技</font> 回合内，你随机获得技能【冥炮】或【炼气】",
            "xwj_xwugeng_fanji2":"繁技",
            "xwj_xwugeng_fanji2_info":"</font><font color=#f00>锁定技</font> 回合外，你随机获得技能【无色】或【虚无】",
            "xwj_xwugeng_anyu":"暗狱",
            "xwj_xwugeng_anyu_info":"当你受到伤害时，你可令一名武将牌正面朝上的其他角色将其武将牌翻面，然后直到其受到伤害后，其所有技能失效且不能使用或打出牌",
            "xwj_xwugeng_anyu2":"暗",
            "xwj_xwugeng_anyu2_info":"</font><font color=#f00>锁定技</font> 你不能使用或打出卡牌",
            "xwj_xwugeng_anyu3":"狱",
            "xwj_xwugeng_anyu3_info":"</font><font color=#f00>锁定技</font> 你失去了所有的技能",
            "xwj_xwugeng_mingpao":"冥炮",
            "xwj_xwugeng_mingpao_info":"</font><font color=#f00>锁定技</font> 你使用的【杀】可指定任意名目标",
            "xwj_xwugeng_lianqi":"炼气",
            "xwj_xwugeng_lianqi_info":"</font><font color=#f00>锁定技</font> 你使用的【杀】没距离与次数限制",
            "xwj_xwugeng_wuse":"无色",
            "xwj_xwugeng_wuse_info":"</font><font color=#f00>锁定技</font> 你不能成为【杀】的目标",
            "xwj_xwugeng_xuwu":"虚无",
            "xwj_xwugeng_xuwu_info":"</font><font color=#f00>锁定技</font> 你不能成为锦囊牌的目标",      
   "xwj_xwugeng_ziyu":"子羽",
          		"xwj_xwugeng_zhutian":"诛天",         
            "xwj_xwugeng_zhutian_info":"当你受到伤害后，你可以使用一张【杀】。若此【杀】造成伤害，你可防止之，改为令目标角色先失去一点体力上限，再受到一点火焰伤害【克制十刑】",        
            "xwj_xwugeng_zhutian2":"诛天",
            "xwj_xwugeng_zhutian2_info":"此【杀】即将造成伤害，你可防止之，改为令目标角色先失去一点体力上限，再受到一点火焰伤害",        
            "xwj_xwugeng_qiyi":"起义",
            "xwj_xwugeng_qiyi_info":"当一名角色受到伤害时，若其装备区中没有武器牌，你可令其随机使用一张武器牌",
            "xwj_xwugeng_qijian":"气剑",
            "xwj_xwugeng_qijian_info":"【剑气流星】出牌阶段限一次，你可以指定任意一名其他角色，然后你可依次弃置场上所有装备区有武器牌的角色的武器牌，并视为其对你指定的角色使用一张【杀】",
  "xwj_xwugeng_tiankui":"天魁",
  "xwj_xwugeng_shenqu":"神躯", 
  "xwj_xwugeng_shenqu_info":"<font color=#F0F>金刚界神力</font><font color=#f00>锁定技</font> 当你受到伤害时，若此伤害值大于1，则改为1；若伤害来源的体力值大于你的体力值，则取消此伤害",
  "xwj_xwugeng_suiyue":"碎岳",
  "xwj_xwugeng_suiyue_info":"<font color=#F0F>神技•天斗碎岳</font>出牌阶段限一次，若你的体力值不为全场最高之一，你可选择一名技能合理的体力值不小于你的其他角色，然后你失去一点体力，视为对其连续使用无视防具的【杀】，直到其体力值比你的小为止",
	 "xwj_xwugeng_tianwu":"天武圣王",
	 "xwj_xwugeng_pili":"霹雳",
	 "xwj_xwugeng_zhengnu":"震怒",
	 "xwj_xwugeng_zhengnu_info":"<font color=#F0F>万象界神力•天地震怒</font> 当你受到伤害后，你可令所有其他角色选择一项：①随机弃牌：该角色随机地弃置一张牌；②令其摸牌：你摸一张牌",
	 "xwj_xwugeng_pili_info":"<font color=#F0F>神技•真武大霹雳</font> 每两轮限一次，若你的体力值不大于当前存活的角色数，你可弃置X张相同颜色的手牌，并对X名攻击范围内的其他角色各造成X点伤害（X为你以此法弃置的手牌数）", 
         	 "xwj_xwugeng_xuanfeng":"玄风圣王",
		         "xwj_xwugeng_shensu":"神速",
           "xwj_xwugeng_shensu_info":"<font color=#f00>锁定技</font> 你的进攻距离＋X（X为你的体力值），你的防御距离+Y（Y为你损失的体力值）",           
	          "xwj_xwugeng_baofeng3":"防",
            "xwj_xwugeng_baofeng3_info":"防御距离+Y（Y为你损失的体力值）",
            "xwj_xwugeng_baofeng4":"攻",
            "xwj_xwugeng_baofeng4_info":"进攻距离-X（X为你的体力值）",
            "xwj_xwugeng_baofeng2":"暴风",
            "xwj_xwugeng_baofeng2_info":"每两轮限一次机会，当一名其他角色进入濒死状态时，你可选择令其体力回复至1，并且其防御距离永久+Y（Y为其损失的体力值）",
            "xwj_xwugeng_baofeng1":"暴风",
            "xwj_xwugeng_baofeng1_info":"当你受到伤害后，你可令一名其他角色的进攻距离-X（X为其体力值），并视为对其使用一张【杀】",
            "xwj_xwugeng_zhengkong2":"真空",
            "xwj_xwugeng_zhengkong2_info":"<font color=#f00>锁定技</font> 你的回合结束起计时，九九八十一秒后，你因窒息而死亡",
            "xwj_xwugeng_baofeng":"暴风",
            "xwj_xwugeng_baofeng_info":"当你受到伤害后，你可选择一项：<br><li><font color=#F0F>远逐</font> <font color=#F0F>银翼破空</font>令伤害来源的进攻距离－X（X为其体力值），<font color=#F0F>无形剑</font>并视为你对其使用一张【杀】<br><li><font color=#F0F>救护</font> 你选择一名其他角色，令其摸一张牌，且防御距离＋Y（Y为其损失的体力值）",
            "xwj_xwugeng_zhengkong":"真空",
            "xwj_xwugeng_zhengkong_info":"<font color=#F0F>神技•真空</font> 当你流失体力或一次受到大于一点的伤害后，你可选择令一名其他非主公角色进入倒计时，一分钟后，其因窒息而死亡。<font color=#F0F>与十刑互相克制</font> ",
	           "xwj_xwugeng_tian":"天",
          	 "xwj_xwugeng_xuemao":"血矛",
          	 "xwj_xwugeng_xuemao2":"",
          	 "xwj_xwugeng_xuemao_info":"出牌阶段限一次，你可以展示牌堆顶的一张牌，若该牌为：装备牌，你回复一点体力并使用之；锦囊牌，你弃置此展示的牌后再摸两张牌；基本牌，你获得此牌，视为对任意一名其他角色使用一张不计距离、不计入次数限制的【杀】",	 
          	 "xwj_xwugeng_xuemao2_info":"",
          	 "xwj_xwugeng_baiqian":"白墙",
            "xwj_xwugeng_baiqian_info":"<font color=#F0F>无色界神力</font><br><li> <font color=#f00>锁定技</font> 游戏开始阶段或你进入游戏时，你令所有其他角色的所有技能失效，直到其受到伤害为止<br><li>出牌阶段限一次，你可以选择攻击范围内的一名其他角色，令其所有技能失效（直到其回合结束）；且不能使用或打出牌（直到其回合开始）<br><li><font color=#f00>锁定技</font> ①你使用的【杀】可指定任意名角色; ②当你的手牌数与体力值不相等时，你不能成为【杀】或锦囊牌的目标",
            "xwj_xwugeng_baiqian5":"墙",
            "xwj_xwugeng_baiqian5_info":"不能使用或打出牌",
            "xwj_xwugeng_baiqian1":"白墙",
            "xwj_xwugeng_baiqian1_info":"<font color=#f00>锁定技</font> 游戏开始阶段或你进入游戏时，你令所有其他角色的所有技能失效，直到其受到伤害为止",
            "xwj_xwugeng_baiqian3":"白墙",
            "xwj_xwugeng_baiqian3_info":"你使用的【杀】可指定任意名角色；当你的手牌数与体力值不相等时，你不能成为【杀】或锦囊牌的目标",
            "xwj_xwugeng_baiqian4":"墙",
            "xwj_xwugeng_baiqian4_info":"所有技能失效",
            "xwj_xwugeng_baiqian2":"白墙",
            "xwj_xwugeng_baiqian2_info":"出牌阶段限一次，你可以选择攻击范围内的一名其他角色，令其所有技能失效（直到其回合结束）；且不能使用或打出牌（直到其回合开始为止）",
            "xwj_xwugeng_zhengshan":"真禅圣王",
		         "xwj_xwugeng_eshan":"恶禅",
            "xwj_xwugeng_yinguo":"因果",
            "xwj_xwugeng_yinguo_info":"<font color=#f00>锁定技</font> 你使用的杀造成一次伤害后，你获得等同伤害值数量的“因果”标记",
            "xwj_xwugeng_zhuanlun":"转轮",
            "xwj_xwugeng_zhuanlun_info":"<font color=#f00>锁定技</font> <span class=yellowtext>限定技</span> 游戏开始所有角色摸牌或你进入游戏后，你令所有其他角色获得技能“因果”",
            "xwj_xwugeng_kongjing":"空镜",
            "xwj_xwugeng_kongjing_info":"<font color=#F0F>空镜映月</font>每当你成为其他角色的某张卡牌的惟一目标时，你可以弃置一张手牌，将使用者与目标对调",
            "xwj_xwugeng_chenjie":"惩戒",
            "xwj_xwugeng_chenjie_info":"<font color=#F0F>因果转轮</font>出牌阶段限一次，你可令场上所有拥有“因果”标记的角色受到一点来源为你的伤害，若如此做，这些角色弃掉一个“因果”标记，若此时你已装备防具，你须受到一点伤害，然后你变身为“恶禅”状态，失去技能<font color=#F0F>惩戒</font>、<font color=#F0F>空镜</font>、<font color=#F0F>助战</font>，获得技能<font color=#F0F>惩罪</font>、<font color=#F0F>金身</font>",
            "xwj_xwugeng_chenzhui":"惩罪",
     		    "xwj_xwugeng_chenzhui_info":"<font color=#F0F>罪业转轮</font>出牌阶段限一次，你可令场上任意一名拥有“因果”标记的角色受到X点伤害，若如此做，其“因果”标记数量清零（X为该角色的“因果”标记个数），然后你变身为“真禅圣王”，失去技能<font color=#F0F>惩罪</font>、<font color=#F0F>金身</font>获得技能<font color=#F0F>惩戒</font>、<font color=#F0F>空镜</font>、<font color=#F0F>助战</font> 结算后立即结束当前回合",          
        			"xwj_xwugeng_zhuzhan":"助战",
            "xwj_xwugeng_zhuzhan_info":"<font color=#F0F>长生界神力•生死轮回限</font>当一名角色处于濒死状态时，你可以亮出牌堆顶的一张牌，若该牌为红色牌，则该角色回复一点体力，然后将这张红色牌置入弃牌堆；若该牌为黑色牌，你获得之",
            "xwj_xwugeng_jingang":"金身",
        			"xwj_xwugeng_jingang_info":"<font color=#F0F>金刚不灭之身</font><font color=#f00>锁定技</font> 当你没装备防具时，你防止受到一切伤害",
		        	"xwj_xwugeng_shixing":"十刑",
            "xwj_xwugeng_fuhuo":"复活",
            "xwj_xwugeng_fuhuo_info":"<font color=#F0F>亡者之印</font> <font color=#f00>锁定技</font> 当你阵亡七七四十九秒后，你自动复活，增加一点体力上限并回复体力至体力上限",
            "xwj_xwugeng_fuchou":"复仇",
            "xwj_xwugeng_fuchou_info":"<li><font color=#F0F>修罗界神力</font><font color=#f00>锁定技</font> 你的进攻距离+X，摸牌阶段摸牌时，你额外摸X张牌（X为你损失的体力值）；<br><li><font color=#F0F>元始界神力</font>你使用的【杀】额外造成Y点的伤害（Y为你的损失的体力值的一半向下取整）",
            "xwj_xwugeng_fuchou2":"复仇",
            "xwj_xwugeng_fuchou2_info":"<font color=#f00>锁定技</font> 你使用的【杀】额外造成Y点伤害（Y为你的损失的体力值的一半向下取整）",             	
        			"xwugeng_shenzu":"神族",
			        "xwugeng_renlei":"人类",			               
        },
};
			if(lib.device||lib.node){
				for(var i in xwugeng.character){xwugeng.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xwugeng.character){xwugeng.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xwugeng;
		});
		lib.config.all.characters.push('xwugeng');
		if(!lib.config.characters.contains('xwugeng')) lib.config.characters.remove('xwugeng');
		lib.translate['xwugeng_character_config']='<span style="color:#00FFFF">武庚纪</span>';

game.import('character',function(){
			var xhuoying={
				name:'xhuoying',
				connect:true,
				characterSort:{
	 		xhuoying:{
				"xhuoying_muye":["xwj_xhuoying_zhujian","xwj_xhuoying_gangshou","xwj_xhuoying_zhilaiye","xwj_xhuoying_zhishui","xwj_xhuoying_ningchi","xwj_xhuoying_kai","xwj_xhuoying_kakasi","xwj_xhuoying_chutian","xwj_xhuoying_mingren","xwj_xhuoying_shuimen","xwj_xhuoying_duan","xwj_xhuoying_liluoke","xwj_xhuoying_luwan","xwj_xhuoying_xiaoying","xwj_xhuoying_dingchi","xwj_xhuoying_jinye","xwj_xhuoying_tuanzang","xwj_xhuoying_yuanfeirizhan","xwj_xhuoying_dahe","xwj_xhuoying_asima","xwj_xhuoying_feijian","xwj_xhuoying_zuojin","xwj_xhuoying_tiantian","xwj_xhuoying_quanzhongya","xwj_xhuoying_zhinai","xwj_xhuoying_jiuxinnai"],
				"xhuoying_xiao":["xwj_xhuoying_shuiyue","xwj_xhuoying_itachi","xwj_xhuoying_feiduan","xwj_xhuoying_ban","xwj_xhuoying_daitu","xwj_xhuoying_zhuozhu","xwj_xhuoying_changmen","xwj_xhuoying_guijiao","xwj_xhuoying_xiezi","xwj_xhuoying_jiaodu","xwj_xhuoying_jue","xwj_xhuoying_huiye","xwj_xhuoying_didala","xwj_xhuoying_xiaonan","xwj_xhuoying_zhongwu","xwj_xhuoying_xianglin"],
				"xhuoying_zhongren":["xwj_xhuoying_bai","xwj_xhuoying_dashewan","xwj_xhuoying_dayemu","xwj_xhuoying_dou","xwj_xhuoying_woailuo","xwj_xhuoying_wuren","xwj_xhuoying_sanlei","xwj_xhuoying_zaibuzhan","xwj_xhuoying_daluyi","xwj_xhuoying_huanyue","xwj_xhuoying_junmalv","xwj_xhuoying_qilabi","xwj_xhuoying_leiying","xwj_xhuoying_zhaomeimeng","xwj_xhuoying_shouju","xwj_xhuoying_kanjiulang"],
				"xhuoying_xianren":["xwj_xhuoying_liudaoxianren"],								
			},
		},
				character:{
			      	 "xwj_xhuoying_shuiyue":["male","xxiao",3,["xwj_xhuoying_xundao","xwj_xhuoying_daoji","xwj_xhuoying_yehua"],[]],
	           "xwj_xhuoying_itachi":["male","xxiao",3,["xwj_xhuoying_yuedu","xwj_xhuoying_retianzhao","xwj_xhuoying_xuzuo"],[]],
	           "xwj_xhuoying_zhujian":["male","xhuo",3,["xwj_xhuoying_mudun","xwj_xhuoying_qianshou","xwj_xhuoying_xianti"],[]],
            "xwj_xhuoying_gangshou":["female","xhuo",4,["xwj_xhuoying_reguaili","xwj_xhuoying_baihao"],[]],
            "xwj_xhuoying_dashewan":["male","xren",3,["xwj_xhuoying_changsheng","xwj_xhuoying_wanshe"],[]],
            "xwj_xhuoying_zhilaiye":["male","xhuo",4,["xwj_xhuoying_citan","xwj_xhuoying_renfa","xwj_xhuoying_xianren"],[]],
            "xwj_xhuoying_zhishui":["male","xhuo",4,["xwj_xhuoying_shunsheng","xwj_xhuoying_reshouhu"],["forbidai"]],
            "xwj_xhuoying_ningchi":["male","xhuo",3,["xwj_xhuoying_xinbaiyan","xwj_xhuoying_guazhang","xwj_xhuoying_huitian"],[]],
            "xwj_xhuoying_feiduan":["male","xxiao",3,["xwj_xhuoying_rebusi","xwj_xhuoying_zhoushu"],[]],
            "xwj_xhuoying_ban":["male","xxiao",2,["xwj_xhuoying_zhenxing","xwj_xhuoying_xinxuzuo","xwj_xhuoying_yiyuan"],[]],
            "xwj_xhuoying_dayemu":["male","xren",3,["xwj_xhuoying_chendun","xwj_xhuoying_tiancheng","xwj_xhuoying_feixian"],[]],
            "xwj_xhuoying_kai":["male","xhuo",5,["xwj_xhuoying_bamen","xwj_xhuoying_resizhan"],[]],
            "xwj_xhuoying_dou":["male","xren",3,["xwj_xhuoying_yizhi"],[]],
            "xwj_xhuoying_kakasi":["male","xhuo",3,["xwj_xhuoying_leique","xwj_xhuoying_fuzhi"],[]],
            "xwj_xhuoying_chutian":["female","xhuo",3,["xwj_xhuoying_baiyan","xwj_xhuoying_rouquan"],[]],
            "xwj_xhuoying_daitu":["male","xxiao",3,["xwj_xhuoying_xishou","xwj_xhuoying_reshenwei","xwj_xhuoying_xianyan"],[]],
            "xwj_xhuoying_zhuozhu":["male","xxiao",3,["xwj_xhuoying_yandun","xwj_xhuoying_qianniao","xwj_xhuoying_rexuzuo"],[]],
            "xwj_xhuoying_woailuo":["male","xren",3,["xwj_xhuoying_shazang","xwj_xhuoying_juefang"],[]],
            "xwj_xhuoying_mingren":["male","xhuo",3,["xwj_xhuoying_fenshen","xwj_xhuoying_xianshu"],[]],
            "xwj_xhuoying_shuimen":["male","xhuo",3,["xwj_xhuoying_luoxuan","xwj_xhuoying_shanguang","xwj_xhuoying_refengyin"],[]],
            "xwj_xhuoying_changmen":["male","xxiao",3,["xwj_xhuoying_tianzheng","xwj_xhuoying_tianyin","xwj_xhuoying_baoxing","xwj_xhuoying_lunhui"],[]],
            "xwj_xhuoying_wuren":["male","xren",3,["xwj_xhuoying_rechendun","xwj_xhuoying_xfenlie","xwj_xhuoying_wuchen"],[]],
            "xwj_xhuoying_duan":["male","xhuo",3,["xwj_xhuoying_linghua","xwj_xhuoying_aiyuan"],["forbidai"]],
            "xwj_xhuoying_guijiao":["male","xxiao",3,["xwj_xhuoying_jiaoji","xwj_xhuoying_jiaodan","xwj_xhuoying_shuilao"],[]],
            "xwj_xhuoying_liluoke":["male","xhuo",3,["xwj_xhuoying_relianhua","xwj_xhuoying_rexuanfeng"],[]],
            "xwj_xhuoying_sanlei":["male","xren",1,["xwj_xhuoying_tuci","xwj_xhuoying_leidun"],[]],
            "xwj_xhuoying_luwan":["male","xhuo",4,["xwj_xhuoying_zhimou","xwj_xhuoying_yingmo"],[]],
            "xwj_xhuoying_xiezi":["male","xxiao",3,["xwj_xhuoying_baiji","xwj_xhuoying_shayu","xwj_xhuoying_kuilei"],[]],
            "xwj_xhuoying_xiaoying":["female","xhuo",3,["xwj_xhuoying_baoli","xwj_xhuoying_yiliao"],[]],
            "xwj_xhuoying_zaibuzhan":["male","xren",3,["xwj_xhuoying_ansha","xwj_xhuoying_reshuilao","xwj_xhuoying_wuyin"],[]],
            "xwj_xhuoying_dingchi":["male","xhuo",3,["xwj_xhuoying_beihua","xwj_xhuoying_huadie"],[]],
            "xwj_xhuoying_jinye":["female","xhuo",3,["xwj_xhuoying_zhuanxin","xwj_xhuoying_reyiliao"],[]],
            "xwj_xhuoying_jiaodu":["male","xxiao",3,["xwj_xhuoying_yuanyu","xwj_xhuoying_zhongquan"],[]],
            "xwj_xhuoying_kanjiulang":["male","xren",3,["xwj_xhuoying_newkuilei","xwj_xhuoying_chengyi"],[]],
            "xwj_xhuoying_tuanzang":["male","xhuo",3,["xwj_xhuoying_huomeng","xwj_xhuoying_duoyang","xwj_xhuoying_kongbo","xwj_xhuoying_sixiang"],[]],
            "xwj_xhuoying_jue":["male","xxiao",3,["xwj_xhuoying_baozi","xwj_xhuoying_yiwu","xwj_xhuoying_yinmou"],[]],
            "xwj_xhuoying_huiye":["female","xxiao",3,["xwj_xhuoying_tianyu","xwj_xhuoying_huigu","xwj_xhuoying_juneng"],[]],
            "xwj_xhuoying_didala":["male","xxiao",3,["xwj_xhuoying_baodun","xwj_xhuoying_zibao","xwj_xhuoying_feiniao"],[]],
            "xwj_xhuoying_daluyi":["male","xren",4,["xwj_xhuoying_landun","xwj_xhuoying_bizhu"],[]],
            "xwj_xhuoying_huanyue":["male","xren",3,["xwj_xhuoying_chunshu","xwj_xhuoying_zhengbao"],[]],
            "xwj_xhuoying_junmalv":["male","xren",3,["xwj_xhuoying_gu","xwj_xhuoying_zhouyin"],[]],
            "xwj_xhuoying_qilabi":["male","xren",4,["xwj_xhuoying_shuochang","xwj_xhuoying_leidao"],[]],
            "xwj_xhuoying_yuanfeirizhan":["male","xhuo",3,["xwj_xhuoying_huizhan","xwj_xhuoying_yuanmo","xwj_xhuoying_xfengyin"],[]],
            "xwj_xhuoying_xiaonan":["female","xxiao",3,["xwj_xhuoying_jizhu","xwj_xhuoying_zhishu"],[]],
            "xwj_xhuoying_zhongwu":["male","xxiao",3,["xwj_xhuoying_xianhua","xwj_xhuoying_kuangbao"],[]],
            "xwj_xhuoying_dahe":["male","xhuo",3,["xwj_xhuoying_xmudun","xwj_xhuoying_duizhang","xwj_xhuoying_daiban"],[]],
            "xwj_xhuoying_asima":["male","xhuo",4,["xwj_xhuoying_fengdun","xwj_xhuoying_shouyu","xwj_xhuoying_jinshao"],[]],
            "xwj_xhuoying_leiying":["male","xren",4,["xwj_xhuoying_duanbi","xwj_xhuoying_leishu","xwj_xhuoying_zhongbao"],[]],
            "xwj_xhuoying_zhaomeimeng":["female","xren",3,["xwj_xhuoying_feidun","xwj_xhuoying_rongdun"],[]],
            "xwj_xhuoying_feijian":["male","xhuo",3,["xwj_xhuoying_jinshu","xwj_xhuoying_baofu","xwj_xhuoying_shuidun"],[]],
            "xwj_xhuoying_liudaoxianren":["male",["xhuo","xren","xxiao"].randomGet(),Infinity,["xwj_xhuoying_renzong","xwj_xhuoying_liudao"],[]],
            "xwj_xhuoying_zuojin":["male","xhuo",3,["xwj_xhuoying_weishou","xwj_xhuoying_wodi"],[]],
            "xwj_xhuoying_tiantian":["female","xhuo",3,["xwj_xhuoying_jiju","xwj_xhuoying_anqi"],[]],
            "xwj_xhuoying_shouju":["female","xren",3,["xwj_xhuoying_lianyou","xwj_xhuoying_fengwang"],[]],
		        	"xwj_xhuoying_quanzhongya":["male","xhuo",3,["xwj_xhuoying_tongya","xwj_xhuoying_nishou"],[]],
            //"xwj_xhuoying_chiwan":["male","xhuo",4,["xwj_xhuoying_renquan"],[]],
	        		"xwj_xhuoying_xianglin":["female","xxiao",3,["xwj_xhuoying_ganzhi","xwj_xhuoying_liaoshang"],[]],
            "xwj_xhuoying_zhinai":["male","xhuo",4,["xwj_xhuoying_chongyu"],[]],
            "xwj_xhuoying_jiuxinnai":["female","xhuo",4,["xwj_xhuoying_fenglian","xwj_xhuoying_hongjiao"],[]],
            "xwj_xhuoying_bai":["male","xren",3,["xwj_xhuoying_bingdun","xwj_xhuoying_chengshang"],[]],

                },
							
			characterIntro:{	
	    			"xwj_xhuoying_shuiyue":"鬼灯水月，日本漫画《火影忍者》及其衍生作品中的男性角色，水之国·雾隐村第三批“忍刀七人众”之一，断刀•斩首大刀的第三任使用者。身为鬼灯一族，能使用水遁的秘术，拥有将身体任意部分液态化的能力，但因此很害怕雷遁忍术，若中了雷遁后，身体会麻痹，不能动弹。为了集齐忍刀七人众的刀而加入佐助的“鹰”小队。和哥哥鬼灯满月一样是用刀的天才，据说七把忍刀都会用。",
	      		"xwj_xhuoying_shouju":"手鞠，日本漫画《火影忍者》及其衍生作品中的女性角色。风之国砂隐村的女忍者，第四代风影罗砂的长女，第五代风影我爱罗和勘九郎的姐姐。性格爽朗，擅长使用三星扇进行大范围的远程风遁忍术攻击。最后嫁给木叶的奈良鹿丸并育有一子奈良鹿戴。",
	        "xwj_xhuoying_quanzhongya":"犬冢牙，日本漫画《火影忍者》及其衍生作品中的角色，火之国木叶隐村的中忍，犬冢一族的族长犬冢爪之子。擅长与忍犬赤丸合作，最常使用的忍术是“牙通牙”，性格好强，冲动有自信，喜欢充当别人的领袖。与忍犬赤丸形影不离，犹如兄弟一样。有着历害的野外生存的技能，其实这和他每天都和赤丸一起“散步”是很有关系的。",
	        "xwj_xhuoying_chiwan":"赤丸是日本动漫《火影忍者》中的一只忍犬，是犬冢牙的得力助手，经常和牙呆在一起。当牙作战时，赤丸可以起到很好的辅助作用。曾经把鸣人的裤子连同臀部咬烂，牙齿十分锋利。赤丸是犬冢牙永不分离的伙伴，亦为忍术道具，具有灵敏的嗅觉，能感受敌人的查克拉力量及危险性。因为吃下兵粮丸后身体会变成赤红色，故名赤丸。 它能化成犬冢牙的分身，然后合作使出忍术--‘牙通牙’，化成两股龙卷风攻击敌人。及后更能与犬冢牙进行人兽混合变身，化成双头一身的双头狼，并使出超必杀技--“牙狼牙”，形成具有极大破坏力、可将敌人切开的龙卷风。小时候不会说话，只有犬冢牙听得懂赤丸的叫声所表达的意思。",
		       "xwj_xhuoying_itachi":"宇智波鼬，木叶村宇智波一族的天才忍者，7岁忍校毕业，13岁当上暗部队长，忍术高超，擅长手里剑。宇智波一族少数开了万花筒写轮眼的人，左眼月读，能瞬间让对手陷入鼬控制的幻术之中，包括时间、空间、质量皆由鼬控制，让其受到极重的精神攻击，属精神攻击类幻术。右眼天照，聚焦即发出能烧毁一切的黑色火焰，烧毁目标前永不熄灭。双眼须佐能乎，拥有极强的攻击与防御力。少年鼬是名双重间谍，为了村子，在宇智波一族叛变木叶前选择灭族，后逃离加入并暗中调查晓组织。后与其弟佐助决战而死，佐助因此开了万花筒写轮眼。第4次忍界大战被兜用秽土转生术复活，然后与鸣人相遇发动最强幻术“别天神”，摆脱控制，与兜一战，发动禁术“伊邪那美”，让兜陷入循环的幻术中。",
	        "xwj_xhuoying_zhujian":"千手柱间，初代目火影，战乱时代中千手一族的首领，木叶村的建立者之一，二代火影千手扉间的兄长，六道仙人大筒木羽衣次子阿修罗上一代转世者 。擅长使用“木遁”，能瞬间使出仙术，其身体能量和回复力极其惊人，具有操控尾兽的能力；平定乱世，平均分配尾兽给五大国，并在终结之谷之战中一举击败宇智波斑，是宇智波斑唯一敬畏的忍者。因此凡见过其风采的人皆称其是“如同六道仙人一般的神话”，被忍界誉为“忍者之神”。在第四次忍界大战中一度被大蛇丸以秽土转生的形式复活，与同被复活的历代火影一起前往战场支援忍者联军。",
            "xwj_xhuoying_gangshou":"千手纲手，日本动漫《火影忍者》中的女性人物，火之国木叶隐村的第五代火影，初代火影千手柱间及其妻子漩涡水户的孙女，与自来也、大蛇丸并称传说中的“三忍”，最重要的人是恋人加藤断与弟弟绳树。擅长体术和医疗忍术，尤其是禁术创造再生•百豪之术，能迅速让伤口再生，从而达到疗伤效果，但风险就是术者会因此缩短寿命。 受自来也的请求，回村就任第五代火影。在后来的佩恩袭击等事件中保护着村子。在后来的第四次忍界大战中担任忍者联军总参谋，发挥着重大作用。",
            "xwj_xhuoying_dashewan":"大蛇丸，日本动漫《火影忍者》中的人物。火之国木叶村的叛忍，木叶村的“三忍”之一，与自来也、纲手同为第三代火影猿飞日斩的弟子。具有独身攻陷一个小国的强大实力，和近乎不老不死的恢复力，被认为比蛇还难缠。擅长研究忍术且渴望得到写轮眼，闻名于忍界。野心勃勃，由于目睹了太多人的死亡、知道生命是脆弱的而误入歧途，他认为人体中蕴含着一生都无法使用的力量，因此他想获得长生不老从而学习世间所有忍术，掌握世间的真理。其野心被多次阻断，在佐助与鼬一战中被鼬的十拳剑封印。后在第四次忍界大战中，从御手洗红豆和药师兜的身上看见了药师兜的失败，有所醒悟。之后被佐助复活，与历代火影和鹰小队前往战场支援忍者联军。",
            "xwj_xhuoying_zhilaiye":"自来也，日本漫画《火影忍者》及其衍生作品中的虚拟角色。火之国木叶隐村的“三忍”之一，三代火影猿飞日斩的弟子，四代目火影波风水门、长门、弥彦、小南、七代目火影漩涡鸣人的师父。他指导鸣人修行，在鸣人成长的道路上有着重要的作用。后在雨忍村刺探情报，死于“晓”首领佩恩之手。",
            "xwj_xhuoying_zhishui":"宇智波止水，日本动漫《火影忍者》中的人物。木叶村宇智波一族的天才忍者，年幼时和宇智波鼬齐名，两人有着不相上下的瞳术天赋，实力超常，擅长幻术和瞬身术，以“瞬身止水”之名威震天下。拥有最强幻术——别天神，被誉为“最强幻术忍者”、“宇智波最强”等。别天神可以在不被察觉的情况下直接入侵对方的大脑，并永久、彻底的改变对方的思想、意志和控制其行为。止水性格开朗温和，即使是战斗，也经常是用点到为止，很少伤人。止水的信条是守护木叶守护和平，甘愿在幕后做一名默默无名的忍者。在宇智波一族密谋发动政变的前夕，止水计划用别天神阻止宇智波的政变。但在计划实施前被志村团藏偷袭，失去右眼。为了避免别人为了抢夺他的眼睛而引发争斗，他将左眼挖出托付给鼬，佯装自毁双眼，投南贺河自尽。宇智波鼬由此开启了万花筒写轮眼。",
            "xwj_xhuoying_ningchi":"日向宁次,日本漫画《火影忍者》及其衍生作品中的角色，日向一族分家天才,火之国木叶隐村的上忍，由迈特·凯所领导的第三班的成员，队友是李洛克和天天。木叶名门日向一族分家的成员，日向日差之子，日向雏田的堂兄。被称为日向一族的天才，虽然被宗家限定了其血继限界白眼的能力，但是他凭借自己的天赋继承了宗家才可以使用的八卦掌等体术。在中忍考试输给鸣人后对命运的看法有所改观，不再认为命运是无法改变的。第四次忍界大战中，宁次为了保护鸣人和雏田，以自己的身体抵挡十尾的扦插之术而壮烈牺牲。",
            "xwj_xhuoying_feiduan":"飞段，晓组织成员，邪教教徒，拥有不死之躯。飞段信仰邪神教，是邪神教的忠实教徒。他和角都合称“不死二人组”，被鬼鲛戏称为“僵尸二人组\"。飞段体术灵活，且拥有不死之身的能力，只需尝到对手的血，就能够通过诅咒使对手和自己承担同等的伤害！曾经和角都联手击败二尾人柱力二位由木人，杀死守护忍十二士之一的地陆和猿飞阿斯玛，最终被奈良鹿丸用计谋活埋于鹿林的深洞里。",
            "xwj_xhuoying_ban":"宇智波斑，宇智波一族前任首领，宇智波佐助前一任的六道仙人长子因陀罗转世者。宇智波一族最强的男人，擅长使用“须佐能乎”以及可以和尾兽匹敌的“完成体须佐能乎”，被世人将其和千手柱间合称为“传说中的忍者”。 曾和千手柱间合作建立了第一个忍村，并将其命名为“木叶”。在黑绝的蛊惑下与千手柱间在终结之谷交战，败在柱间手下，普遍被世人认为已死亡，事实上在右眼植入了伊邪那岐，存活了下来并获得了柱间细胞。利用柱间细胞在死前开启轮回眼，通灵出外道魔像和上一次无限月读开启后产生的白绝，将轮回眼移植于长门身上。第三次忍界大战时期，在神无毗桥之战中救下宇智波带土，计划复活后进行月之眼计划。 第四次忍界大战时期被药师兜用秽土转生之术召唤。后利用带土施展外道·轮回天生之术成功复活，在吸收了再次复活的十尾后成为了十尾人柱力，发动无限月读后遭到黑绝背叛。大筒木辉夜被封印后由于体内尾兽被剥离即将死去，奄奄一息的他在和柱间敞开心扉后微笑地走向了人生真正的终点。",
            "xwj_xhuoying_dayemu":"大野木，外号“两天秤”，三代目土影。虽然是一个矮小的老头，却拥有无比恐怖强大的忍术，比血界限界更高层次的血界淘汰——尘遁•原界剥离之术，此术发动简单迅速，但威力巨大得令人咋舌，能瞬间将一切物质分离成分子状态，无法复原，任何人一旦中招，瞬间灰飞烟灭。超轻岩之术令他能减轻物体重量甚至自身重量，在空中自由飞行，超重岩之术又能增加破坏力和接触到的物体包括人的压力，令其不能动弹或碎裂，两天秤称号由此而来。。。",
            "xwj_xhuoying_kai":"迈特凯，木叶的苍蓝猛兽，擅长体术，绝招“八门遁甲”，曾开七门秒杀干杮鬼蛟，第四次忍界大战打开第八门死门，重创六道宇智波斑，濒死之际被鸣人用阴阳遁术救活",
            "xwj_xhuoying_dou":"兜，《火影忍者》中的人物，颇具战斗智商。前期作为间谍卧底在木叶村，擅长医疗忍术。幼年时因受伤而失忆，被孤儿院院长药师野乃宇收留，但后来因为团藏要挟野乃宇，于是自愿的为野乃宇以及孤儿院去投靠团藏作为一个忍者活跃于木叶，从小就当间谍而游历各国，但团藏却安排兜与野乃宇自相残杀，自从误杀野乃宇后，兜就认为自己失去了生存意义，与此同时，大蛇丸找到了兜，邀请兜加入音隐村，自此之后便当了大蛇丸的得力助手。大蛇丸被十拳剑封印后，兜为了寻找真实的自己而去模仿大蛇丸的生存道路，移植获得了大蛇丸及其部下的能力，还靠自己在龙地洞修炼了仙人模式，并扬言利用他人来伪装自己，探索世界的真理。第四次忍界大战中，用秽土转生术复活了很多已死去的忍者，包括历代影、晓组织成员以及宇智波斑等高手，与忍者联军互怼。后在与佐助和鼬的战斗中陷入伊邪那美循环的幻术中。最后重拾自我，并前往战场救助佐助。战后被允许在木叶开设孤儿院，回到自己最向往的曾经的生活。",
            "xwj_xhuoying_kakasi":"旗木卡卡西，木叶第一技师，佐助鸣人春野樱的老师，六代目火影，左眼的写轮眼来自队友宇智波带土“临死前”的赠予，据称卡卡西以此复制了上千种忍术，更熟练掌握了神威，另绝招雷切，能刺穿一切物体，曾切断过闪电，因此而得名。",
            "xwj_xhuoying_chutian":"日向雏田，日向一族宗家女忍者，鸣人的妻子，拥有一双远距离无死角透视之眼，能看穿人体经络穴位并施以攻击，取人芳心于千里之外，易如反掌。同时习得八卦掌，集攻击防御于一身。曾在佩恩袭击木叶村时舍命救鸣人，身受重创，鸣人由此爆走，一度失控，差点被九尾占据，幸得四代火影的查克拉苏醒挽救。",
            "xwj_xhuoying_daitu":"宇智波带土，《火影忍者》中中期的反派角色，面具男的真实身份。火之国木叶村的宇智波一族成员，四代火影的弟子，卡卡西的队友，擅长时空间忍术“神威”、宇智波禁术、阴阳遁术等。其送给卡卡西的左眼能远距离扭曲空间转移物体，自身右眼能转移自身，实现吸收物体、身体虚化。神无毗桥之战重伤濒死，将左眼和守护暗恋的女孩野原琳的愿望一同托付给于挚友旗木卡卡西。后在一族原首领宇智波斑的阴谋下，带土目睹了野原琳死亡后痛不欲生，写轮眼直接从双勾玉开启至万花筒写轮眼，否认世界，从此走上黑暗之路，成为“晓”的实际操纵者，曾在鸣人出生当天，放出九尾，袭击木叶村，并害死四代火影夫妇，后协助宇智波鼬的灭族行动，并和药师兜发动了第四次忍界大战，更成为世间第二位十尾人柱力。 在第四次忍界大战中与漩涡鸣人的战斗中被逐渐感化，想起并渴望重拾曾经保护同伴的梦想。后帮助第七班的成员与大筒木辉夜进行了异空间对决，在替鸣人和卡卡西挡下了辉夜的共杀灰骨后牺牲，但剩下的查克拉仍在最后的时刻帮助卡卡西发动完全体须佐能乎，帮助第七班他们战胜了大筒木辉夜。最终在将最后的写轮眼托付给卡卡西后，没有遗憾地和小琳前往了另一个世界。",
            "xwj_xhuoying_zhuozhu":"宇智波佐助，《火影忍者》男二号。火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世。 年幼时目睹宇智波一族被哥哥宇智波鼬所灭，从而走上复仇之路。在终结谷与漩涡鸣人大战一场后叛离村子并追随大蛇丸。三年后，佐助吸收了大蛇丸的力量并成功向鼬复仇，但在此之后却被宇智波带土告知了灭族的真相，万花筒写轮眼开眼，进而决定摧毁木叶。曾先后与迪达拉、八尾奇拉比对战，大闹五影会议后又与雷影、团藏对战，实力得到提升。后来，佐助与秽土转生的鼬重逢，合力打败兜，想法再次发生了变化，为了进一步了解忍者、家族、哥哥的过去，佐助与秽土转生的历代火影进行了对话，在听完其回答后决定继承鼬的意志守护木叶，并期望成为火影改变现有的忍者世界体制。 第四次忍界大战结束后，佐助因对于维护世界和平的道路选择和鸣人不同，而在终结之谷与鸣人进行了宿命之战，结果两人各断一条手臂。最终佐助被鸣人感动，认同了鸣人的道路，并重新成为木叶的一员。 此后佐助独自一人游历世界，继承鼬的意志，甘做一个无名忍者，在身后默默守护木叶及忍者世界。",
            "xwj_xhuoying_woailuo":"我爱罗，《火影忍者》系列中的人物。风之国·砂隐村的第五代风影。擅长控制沙，沙子形成绝对防御和绝招沙暴大（送）葬，拥有攻防一体的实力。小时候由于体内封印着一尾守鹤而被村人恐惧，又因为至亲之人的背叛而一度变得冷酷无情、喜好杀戮，但在和漩涡鸣人一战后，由于鸣人的影响而逐渐摆脱心魔。之后我爱罗成为第五代风影，领导并守护着砂隐村，但一度被“晓”抽去了一尾守鹤，失去生命，最后被千代牺牲生命复活。第四次忍界大战中，我爱罗担任忍界联军联队长与第四部队统领，并得知绝对防御是来自母亲守护他的意志使然和父亲的真相，一度哽咽。曾联手其他四影对战宇智波斑，但均被打败。战争落幕后，我爱罗仍持续担任风影的职位，还和鸣人及木叶村等维持着友好的关系。",
            "xwj_xhuoying_mingren":"漩涡鸣人，《火影忍者》系列的主角。火之国木叶忍村的忍者，四代目火影波风水门和漩涡玖辛奈之子，六道仙人次子阿修罗转世。刚出生时父母为保护村子而牺牲，并将强大的尾兽“九尾”封印于鸣人体内。成为孤儿的鸣人在孤独中长大，但在唯一认同他的老师海野伊鲁卡以及三代目火影鼓励下逐渐决心要成为火影，让所有人都认同他的存在。成为忍者后，同旗木卡卡西、宇智波佐助和春野樱组成第七班进行各种任务。 为实现理想，和守护伙伴们的羁绊，鸣人不断修炼，作为木叶“三忍”之一自来也的弟子，学会了父亲的忍术螺旋丸，后将之升级，加入风遁属性，练成威力强大的风遁手里剑，曾以此秒杀晓组织的高手角都；又练就仙术打败佩恩六道，拯救木叶；后又在众人帮助下练成“九尾模式”，移动速度惊人，尤如“金色闪光”再世，后先后与秽土转生的众高手、六道宇智波带土、六道宇智波斑、大筒木辉夜战斗，最后与包括九尾在内的伙伴们一同终结了战争，与佐助决斗，最终感化了佐助，为纷争不断的忍者世界带来和平，并实现自己成为火影和忍界英雄的梦想",
            "xwj_xhuoying_shuimen":"波风水门，四代目火影，鸣人的父亲，木叶村的英雄，天才忍者，外号“黄色闪光”，年纪轻轻便当上火影。自创忍术螺旋丸，凝聚查克拉无需结印即可发动。改良二代火影的“飞雷神”之术，只需在目标地留下术式，便能在术式之间瞬间移动或转移物体，速度极快，千里之外取人首级只在须臾之间，瞬间又遁迹千里之外，来无影去无踪，敌皆闻风丧胆，遇见可放弃任务，只管逃跑，曾在忍界大战以一己之力秒杀对方五十名上忍，名声由此大震。鸣人出生当晚，被宇智波带土掳走妻子，放出九尾狐，后发动禁术“尸鬼封尽”、“八卦封印”将九尾封印进鸣人体内后死去。第四次忍界大战中被大蛇丸切开“死神”腹部，释放出灵魂，然后用秽土转生术复活，后参与对抗宇智波带土和宇智波斑的战斗，发动短暂的仙人模式和九尾模式，帮助鸣人。。。",
            "xwj_xhuoying_changmen":"漩涡长门，漩涡一族后裔，忍界大战时的孤儿，后被自来也收为徒弟，早期与弥彦等人创立晓组织，六道佩恩的实际操控者，实力恐怖。先后杀了自来也、卡卡西等人，以一己之力毁了木叶，与鸣人一战，终被鸣人说服，发动轮回天生之术令死去的木叶忍者复活后死去。后来又被兜用秽土转生之术复活，最终被宇智波鼬的十拳剑封印",
            "xwj_xhuoying_wuren":"无，日本动漫《火影忍者》中的人物。土之国岩隐村的第二代土影，以阴谋和政治而闻名的“智将”，拥有令人无法感知查克拉的恐怖隐身能力——无尘迷塞，和超越于血继限界的血继淘汰——尘遁，并将其传授给徒弟第三代土影大野木，生前与二代水影同归于尽。死后被药师兜秽土转生，被迫参加第四次忍界大战，最终宇智波鼬解开了秽土转生，灵魂升天。",
            "xwj_xhuoying_duan":"加藤断，日本动漫《火影忍者》中的人物，纲手最初的恋人，梦想是要当火影。忍界大战上前线的前一天，断告诉纲手自己的愿望是成为在火影，纲手将祖传的项链送给断。不料在战争中，断身受重伤，即使是三忍之一的纲手也无力回天，最终身亡。纲手因此患上了恐血症，偏激地认为只有笨蛋才会想去当火影。直到后来鸣人出现才让纲手放下了过去的心理阴影。加藤断有一个恐怖的忍术——灵化之术，是能将自己灵化成活的灵魂，无视距离穿梭并杀害敌人的忍术，可以控制对方身体和进入他人精神世界。此术非常适合间谍活动，断凭借此术击败、杀死过很多忍者，并在五影和秽土斑的对战中用此术进入纲手的意识控制其已丧失意识的身体，成功救下恋人纲手，并给予纲手查克拉后灵魂升天。",
            "xwj_xhuoying_guijiao":"干杮鬼鲛，日本动漫《火影忍者》中的人物。晓组织成员之一，代号南（南斗），原本是雾隐村的忍者，也是“忍刀七人众”的一员，有着跟鲨鱼相像的面孔、肤色及尖锐的牙齿。擅长使用水遁及手上的异状大刀“鲛肌”（能吸取查克拉的大刀）进行攻击。由于体内拥有惊人的查克拉量，被称为“无尾之尾兽”。最终被迈特凯击败，自杀而亡。",
            "xwj_xhuoying_liluoke":"李洛克，日本动漫《火影忍者》中的人物，也是《李洛克的青春全力忍传》的男主角。火之国木叶忍者村的忍者，自号“木叶美丽的苍蓝野兽”。小李是个“笨鸟先飞”型的热血少年，单纯而又热血，一心想成为一名优秀的忍者，并一直为此努力奋斗。他不会忍术和幻术，也没有与生俱来的特殊技能，但他有坚韧不拔的精神，面对困难从不畏惧。他起早贪黑，付出了比别人多几十倍的努力，纵然一次次失败，却始终坚信只要足够努力，照样可以成为优秀的忍者。",
            "xwj_xhuoying_sanlei":"三代雷影，日本动漫《火影忍者》中的人物。雷之国云隐村的第三代雷影，四代目雷影之父，本名不详，称呼与第1、2、4代雷影一样为艾（A）。能够使用被称为“最强之矛”的地狱突刺·四本贯手和“最强之盾”的雷电护盾（曾经以一人之力单挑万名忍者并且大战三天三夜而死），甚至拥有着能与尾兽肉搏的强大能力（曾数次与八尾进行肉搏战并且不分胜负）。 第四次忍界大战中被药师兜秽土转生，与同样被秽土转生的二代目土影无、二代目水影鬼灯幻月和四代目风影罗砂前往战场大战我爱罗的第四部队，曾以一人之力压制住部分忍者联军，后被鸣人发现弱点后将其击败，并由联军封印。",
            "xwj_xhuoying_luwan":"奈良鹿丸，日本动漫《火影忍者》中的人物。火之国木叶隐村的忍者，拥有出众的应敌策略，头脑冷静、随机应变，IQ超过200。曾谋划击败飞段，重挫角都。绝招是“影子模仿术”，比起或热血或摆酷的家伙们，他的性格虽然消极了点，但是想要平静的生活，擅长使用奈良一族秘传忍术。与父亲奈良鹿久一样深受历代火影信任。第四次忍界大战完结后，先后担任六代目火影·旗木卡卡西与七代目火影·漩涡鸣人的助手。",
            "xwj_xhuoying_xiezi":"赤砂之蝎，日本动漫《火影忍者》中的人物。“晓”成员之一，代号玉（玉女）。被誉为天才傀儡师，人称“赤砂之蝎”。风之国砂隐村顾问千代之孙，幼年时其父母在执行任务时被“木叶白牙\"所杀，内心无比孤独，后来在千代的教导下习得傀儡术，曾经制作名为“父”与“母”的两具傀儡以抚慰自己内心的孤独。从小因为内心的孤独寂寞，而对傀儡有着超乎寻常的爱，是一个天才傀儡师，在自己青年的时期里就已经染指了人傀儡，把自己唯一的好友做成了傀儡。后来甚至将自己也做成了傀儡，后与春野樱和千代婆婆战斗被杀死。在秽土转生的时候，受到了勘九郎的话语感化，找到了自己内心深处真正的艺术，被唤醒了热爱傀儡的心，也找到了自己作为人类的一丝意义，明白了作为傀儡师的意义，把父母的两具傀儡托付给勘九郎，灵魂得以解脱。",
            "xwj_xhuoying_xiaoying":"春野樱，日本动漫《火影忍者》中的女主角。新一代医疗忍者，五代目火影纲手的弟子，与漩涡鸣人、宇智波佐助隶属于旗木卡卡西领导的第七班。原本个性柔弱任性，在木叶忍者学校以忍术理论知识见长。在佐助离开木叶村后，拜第五代火影纲手为师，学成优秀的体术怪力和医疗忍术。第四次忍界大战中作为忍者联军第三部队以及医疗后勤部队的一员。具有良好的查克拉控制能力与清晰的脑力，擅长体术怪力与医疗忍术以及解除幻术。经过自己艰苦卓绝的努力奋斗，最终成长为一个贯彻自己座右铭“勇气”的优秀忍者。忍界大战结束若干年后，长大成人的樱已经成为木叶高层干部，并与佐助结婚，两人育有一女——宇智波佐良娜。",
            "xwj_xhuoying_feijian":"千手扉间，日本动漫《火影忍者》中的人物，火之国木叶村的第二代火影，是初代火影手手柱间的弟弟、木叶村的建立者之一，对村子的兴旺发达做出了杰出的贡献。扉间擅长水遁系忍术，能在干旱无水的地方发动大规模的水遁。同时善于研究开发忍术，开发了飞雷神之术、影分身之术及禁术秽土转生，声名显赫。在第一次忍界大战中和第二代雷影被金角银角暗算而阵亡。在第四次忍界大战中被大蛇丸秽土转生，前往战场支援忍者联军，将接受六道仙人馈赠的宇智波佐助送往战场，之后无限月读开启，扉间和其他三位被转生的火影并没有受到影响，并与他们一起赶赴战场。大筒木辉夜被封印以后，由六道仙人解除秽土转生，灵魂与其他先代影们一同回归净土。",
            "xwj_xhuoying_zaibuzhan":"桃地再不斩，日本热血漫画《火影忍者》中的人物。水之国雾隐村“忍刀七人众”之一，使用的武器是断刀“斩首大刀”。充满野心、铁血，但并不是无情无义的人。精通水遁忍术和暗杀术，因策划暗杀水影失败而逃离村子，成为叛忍，收留了白。在与卡卡西班一战中重伤，被鸣人感化后倒戈，与雇主同归于尽而死亡。",
            "xwj_xhuoying_dingchi":"秋道丁次，日本漫画家岸本齐史作品《火影忍者》中的人物。火之国木叶村的中忍，他是猿飞阿斯玛的第十班中一名忠诚热心的队员，是鹿丸最要好的朋友之一，他用自己的行动证明了自己是队伍中的一个值得信赖的伙伴。常用忍术是肉弹战车、针刺肉弹战车、倍化术、局部倍化术、超级倍化术等家族秘术。",
            "xwj_xhuoying_jinye":"山中井野，日本动漫《火影忍者》中的女性角色。木叶忍者村的中忍，阿斯玛所领导的第十班的成员，队友是奈良鹿丸和秋道丁次，继承了山中一族的独特秘术心转身之术，能让自身精神占据对方身体，控制对方内心。同时基于强烈的上进心，学成医疗忍术。 第四次忍界大战中作为忍者联军第五部队（战斗特别部队）的一员。忍界大战结束若干年后，与佐井结婚并生有一子山中井阵。",
            "xwj_xhuoying_jiaodu":"角都，日本动漫《火影忍者》中的人物。原泷忍者村精英成员，“晓”成员之一。飞段的搭档，拥有秘术“地怨虞”，能通过利用查克拉操控体内释放的黑色触手，从而夺取他人经络或心脏。包括自己的心脏，体内最多能够储存五个心脏，通过更换心脏来延长寿命，被称为“与天地同寿之人”。每个心脏都能变为用地怨虞形成的黑体怪物，其怪物能使用原心脏主人的术。其中有一颗心脏被卡卡西的雷切摧毁，一颗心脏被飞段摧毁，两颗心脏被鸣人的风遁.螺旋手里剑摧毁，最后一颗心脏被旗木卡卡西的雷切摧毁。第四次忍界大战中，被药师兜秽土转生复活，经过战斗后被忍者联军合力压制，最终宇智波鼬解开了秽土转生，角都灵魂升天。",
            "xwj_xhuoying_kanjiulang":"勘九郎，日本忍者题材漫画《火影忍者》中的男性角色。风之国·砂隐村第四代风影罗砂之子，手鞠的弟弟，我爱罗的哥哥。他是一名傀儡师，特征是身穿黑色连身装以及涂绘在脸上的紫色状纹，且每次现身总有新的傀儡术。 既爱好策略，也有冲动的一面。原本与手鞠一样对强大而残暴的弟弟有所畏惧，后来随着我爱罗性情的改变，勘九郎也努力和弟弟搞好关系，兄弟之情渐渐显示出来。在五影会谈中，勘九郎和手鞠一起担任我爱罗的护卫。第四次忍界大战中，勘九郎作为奇袭部队的队长。最终话的新五影会谈中，担任我爱罗的护卫。",
            "xwj_xhuoying_tuanzang":"志村团藏，日本动漫《火影忍者》中的人物。火之国木叶村的忍者，木叶暗部的地下组织\"根\"的领导者，是第二代火影千手扉间的弟子和第三代火影猿飞日斩的竞争对手。十分不信任宇智波一族，是下令对宇智波一族实施灭族政策的木叶高层之一。同时也是一个老谋深算的家伙，不惜一切手段都要当上火影，目的是干出一番大事业，用强硬的手段守护木叶，并像千手柱间那样统一忍者世界。最终在与宇智波佐助的战斗中被佐助击败，为了死守止水之眼，用里四象封印术自尽而亡。是为木叶繁荣奉献一生的反英雄式人物。",
            "xwj_xhuoying_jue":"绝，分为白绝和黑绝，日本漫画《火影忍者》及其衍生作品的虚拟角色，晓成员之一，代号玄（玄武），晓中的侦查员。白绝原本是人类，表面是由宇智波斑用初代细胞创造出来的人造人，实际上与此毫无关联，是上古时代沉浸于无限月读的人类堕落后的产物。白绝本体与黑绝融合成为晓组织的“绝”，但白绝还有众多分身，一般战斗力不高，只能用于侦查，但也有像飞那种战斗力极高的存在。黑白绝分裂后，白绝本体受“宇智波斑”（宇智波带土）的命令看守移植鼬写轮眼的佐助，但是佐助开启永恒万花筒写轮眼后，为了试验瞳力，用天照将白绝本体杀死。带土曾培育出十万白绝用于第四次忍界大战，但所有分身最终死亡，其余的绝在无限月读解开之后也全部死亡。 黑绝是传说女神辉夜姬的意志产物，为了复活母亲大筒木辉夜，煽动宇智波斑与千手柱间决战，协助斑利用含在嘴中的柱间细胞开启轮回眼，修改了六道仙人南贺神社留下的信息，将拯救宇智波一族的方法引向无限月读。斑却以为黑绝是自己的意志。黑绝在第四次忍界大战中利用药师兜、宇智波带土、宇智波斑，成功完成了复活辉夜姬的使命，但最终连同辉夜姬一同被原木叶第七班封印。",
            "xwj_xhuoying_huiye":"大筒木辉夜，日本动漫《火影忍者》中的人物，本作最终BOSS。神树化身，十尾的真面目，忍界创世之神，查克拉之祖，同时拥有白眼、轮回眼、写轮眼三大瞳术。擅长使用“血继网罗”和能瞬间改变周围环境的“天之御中”。 随着时间的流逝，她的血缘又分化为宇智波、千手、漩涡、日向等家族。她的长子是忍界始祖“六道仙人”大筒木羽衣，次子是大筒木羽村。六道仙人两兄弟一同封印自己的母亲和十尾，但他们都不知道的是，她在被封印之前用意志创造了黑绝，并计划利用黑绝复活自己。 在第四次忍界大战中，黑绝成功利用宇智波斑的身体将辉夜复活。但最终辉夜还是被第七班和宇智波带土联手击败，并连同黑绝一起被再次封印。",
            "xwj_xhuoying_didala":"迪达拉，日本动漫《火影忍者》中的男性角色。“晓”成员之一，代号青（青龙）。土之国·岩隐村第三代土影大野木的徒弟，黑土的师兄。少年时期为了证明自己的艺术，而接受了众多的恐怖袭击任务，因败于宇智波鼬而加入“晓”组织。最终在与宇智波佐助的对决中自爆身亡。后来被药师兜用秽土转生复活，期间固执不已，与自己的师傅和师妹相见。最后在秽土转生解除后，灵魂升天。",
            "xwj_xhuoying_daluyi":"达鲁伊，日本动漫《火影忍者》中的男性角色。雷之国·云隐村的上忍，四代目雷影的护卫。三代目雷影黑色雷遁的唯一继承者，拥有血继限界“岚遁”[1]。对四代目雷影极忠心，曾被四代目雷影说为是自己的“第二只右手”。在忍界大战中担任第一部队队长（中距离联合军分队），作战英勇。忍界大战结束后若干年，达鲁伊成为五代目雷影。",
            "xwj_xhuoying_huanyue":"鬼灯幻月，日本动漫《火影忍者》中的角色。水之国雾隐村的二代目水影，生前与二代目土影无同归于尽。第四次忍界大战中被药师兜秽土转生，被我爱罗击败后封印。绝招：无限水蒸汽爆炸的“蒸危爆威”、通灵蜃发动大面积幻术、从手指射出能射穿硬物的高强度水珠——“水铁炮之术”",
            "xwj_xhuoying_junmalv":"君麻吕，日本动漫《火影忍者》中的人物。辉夜一族（又译竹取一族）血继限界“尸骨脉”的持有者，被大蛇丸看中，一心为大蛇丸效命，对大蛇丸忠心耿耿，是音忍五人众中最强的一人。 体术高超，具有超强的实力，但后因患了重病，在与我爱罗的交战中病发而亡。第四次忍者大战被药师兜以秽土转生形式复活，后被宇智波鼬解除秽土转生，灵魂升天。",
            "xwj_xhuoying_qilabi":"奇拉比，日本动漫《火影忍者》中的人物角色，四代目雷影的搭档与义弟，同时也是八尾人柱力。可以完全控制八尾，实力极其强悍，喜爱说唱，喜欢玩耍，教会了九尾人柱力漩涡鸣人如何控制尾兽的方法，同时在第四次忍界大战中和鸣人一起并肩作战。",
            "xwj_xhuoying_yuanfeirizhan":"猿飞日斩，日本动漫《火影忍者》中的角色。火之国木叶忍者村的三代目火影，亦是初代火影和二代目火影的亲传弟子，培育出了威震忍界的“三忍”。精通五种查克拉属性的忍术，享有“忍术教授”的称号。同时也是木叶在任时间最久的火影，期间开创了木叶隐村的全盛时期。在大蛇丸毁灭木叶行动中因使用尸鬼封尽而牺牲，在第四次忍界大战中与其他三位火影被大蛇丸使用秽土转生之术复活并加入战斗。之后宇智波斑开启无限月读，但日斩和其他三位火影却并没有受到影响并继续战斗，之后由六道仙人解除秽土转生，灵魂回归净土。",
            "xwj_xhuoying_xiaonan":"小南，日本动漫《火影忍者》中的人物。“晓”组织的创立者之一，而且是其中唯一一个女性成员，代号“白”（白虎），被称为“天使”。她是第二次忍界大战时雨隐村的孤儿，曾经和弥彦、长门一起接受过自来也的忍术指导。后来和长门一起被漩涡鸣人的真诚所感动，重拾保护世界和平的信心。曾设计六千亿张起爆符诛杀宇智波带土，但失败。最终为了保护长门的遗体的轮回眼而被自称为“宇智波斑”的“面具男”（宇智波带土）杀死。",
            "xwj_xhuoying_zhongwu":"重吾，日本漫画《火影忍者》中的人物，鹰小队成员之一，能够听懂动物的语言。具有双重人格，平时比较老实，暴躁时会有强烈的杀人倾向，是个被村里人成为“天秤”的男人   。 他是咒印的来源者，天生拥有能吸取自然能量的能力（即仙人化），一旦停留在自然能量超强的地方就会仙人化，但会因为无法控制而暴走。重吾的仙人化后来被大蛇丸研究，复制成咒印化。",
            "xwj_xhuoying_dahe":"大和，日本动漫《火影忍者》中角色，原名天藏。火影直属暗部精英，从第三代火影时期起就被誉为暗部中的顶尖优秀忍者。幼年时期体内因被植入初代火影千手柱间细胞而继承了初代的木遁血继限界。风影夺还战之后，以“大和”作为任务代号，代替受伤的前辈旗木卡卡西带领第七班执行任务，在各项任务中发挥着重要作用。",
            "xwj_xhuoying_asima":"阿斯玛，日本动漫《火影忍者》中的人物，是一个性格随和的正派角色。猿飞阿斯玛在火之国木叶忍者村，拥有罕见的风属性查克拉，是近战中首屈一指的上忍。 同时他也是第三代火影猿飞日斩的儿子，猿飞木叶丸的叔叔，第十班（奈良鹿丸、山中井野、秋道丁次）的老师，上忍夕日红的情侣。后来在与“晓”的战斗中被飞段杀死，临终前将意志托付给第十班。夕日红后于第四次忍界大战前夕生下阿斯玛的遗腹女猿飞未来。 第四次忍界大战中，阿斯玛被药师兜以秽土转生形式复活，后被其弟子第十班合力击败并封印，最后随秽土转生的解除而灵魂回归净土。",
            "xwj_xhuoying_leiying":"夜月艾，日本动漫《火影忍者》中雷之国云隐村的四代目雷影，夜月一族，八尾人柱力奇拉比的义兄[1]。 性格暴躁冲动，身体健壮并以速度著称，全身在“雷遁护体”的保护下，速度和防御力都堪称强劲，在第四次忍界大战中担任忍者联军的统帅，后来在第四部队战场中与其余四影大战宇智波斑，结果被斑击败，恢复伤势后前往十尾战场支援前线，与其余联军合力击败十尾。",
            "xwj_xhuoying_zhaomeimeng":"照美冥，日本漫画《火影忍者》及其衍生作品中的女性角色。水之国雾隐村的第五代水影，结束了雾隐在四代目水影执政以来“血雾之村”的恐怖时期，实行和平开放的政策，因而使雾忍者村复兴。实力强大，能够在无水之地中运用自身查克拉、使出足以压制宇智波斑“火遁·豪火灭失”的超强水遁。拥有水、火、土三种查克拉属性（其实还有雷）血继限界“溶遁”和“沸遁”，是唯一一位拥有两种血继限界的忍者。（不包括拥有六道之力的斑，鸣人，佐助等人，六道之力包含所有属性，理论上六道之力拥有者能使用所有血继限界，血继淘汰甚至血继网罗的忍术。）",
		         "xwj_xhuoying_liudaoxianren":"原名大筒木羽衣，日本漫画《火影忍者》及其衍生作品中的角色，大筒木辉夜的长子，继承了辉夜之力中的“轮回眼”。与弟弟大筒木羽村一起封印十尾（也就是自己的母亲，） 并在临终前把十尾分离出了九个尾兽。是第一位十尾人柱力，也是第一个解开查克拉真谛的人，以维护和平为目标，维持安宁与秩序。宇智波一族与千手一族的祖先，“忍宗”的开山祖师。其死后的查克拉仍然漂流在世间，默默守护着忍者世界。在第四次忍界大战中，六道仙人在得到漩涡鸣人和宇智波佐助的答案后将六道之力（六道仙人模式、轮回眼）和阴阳之力（六道·地爆天星）馈赠给他们，希望他们能再次封印母亲。辉夜复活之后六道仙人出现在四影面前。鸣人等人打倒封印辉夜后，六道仙人与历代五影使用通灵术将鸣人等人和尾兽们带回了原来的世界。",
            "xwj_xhuoying_zuojin":"佐井，日本漫画《火影忍者》及其衍生作品中的男性角色，隶属于由团藏管辖的木叶暗部特殊部队“根”的忍者。没有感情，从小就被作为专门的杀人工具进行严格的培训长大，不会做除了任务以外的任何事。擅长绘画，一般画的是水墨画。加入卡卡西班后最初和春野樱及漩涡鸣人关系很差，但后来在鸣人的感染下回忆起和“哥哥”信在一起的时光，觉得这是最美好的，于是他决定违背命令，帮助鸣人把佐助带回木叶。第四次忍界大战结束数年后与山中井野结婚，婚后入赘山中一族，并育有一子山中井阵。",
            "xwj_xhuoying_tiantian":"天天，日本漫画《火影忍者》及其衍生作品中的角色，火之国木叶隐村的中忍，是由迈特·凯所领导的第三班的成员，队友是日向宁次和李洛克，擅长使用体术与操控“忍具”攻击，随身携带的卷轴也可以通灵出各种各样忍具进行攻击，绝招中隐含“龙”。",
            "xwj_xhuoying_xianglin":"香燐，日本漫画《火影忍者》系列及其衍生作品中的女性角色。漩涡一族的族人，拥有强大的查克拉和出色的感知能力，而且伤者只要咬她的皮肤就会恢复查克拉和伤势。曾经是大蛇丸的部下，后成为宇智波佐助“鹰”小队的一员。",
            "xwj_xhuoying_zhinai":"油女志乃，日本漫画《火影忍者》及其衍生作品中的男性角色，火之国木叶隐村的上忍，与鸣人他们是忍者学校同期毕业的学员，与犬冢牙、日向雏田同为夕日红的学生。性格冷静，啰嗦，但实力极强。他用身体作为虫子的巢穴，操纵虫子战斗。最终话里成为忍者学校的指导老师。",
            "xwj_xhuoying_jiuxinnai":"漩涡玖辛奈，日本漫画《火影忍者》及其衍生作品中的女性角色，主角漩涡鸣人的母亲、四代目火影波风水门的妻子，外号“血红辣椒”，具有好强、活泼可爱的性格，擅长封印术，并拥有与生俱来的能够压制尾兽的强大而又特别的查克拉，以及身为漩涡一族特有的强悍生命力。原本是涡之国涡潮隐之村漩涡一族的族人，后因体质特殊而被带到火之国木叶隐村，成为了第二位九尾人柱力。最终在九尾袭击木叶一战中与水门为保护村子而牺牲，她把自己幻想的未来、永不放弃的心以及勇往直前的精神都寄托给儿子——漩涡鸣人",
		         "xwj_xhuoying_bai":"白，日本漫画《火影忍者》及其衍生作品中的男性角色，雪一族的后裔，桃地再不斩的随从，拥有母亲遗传的冰遁血继限界。他是有着类似女性的容貌和黑色长发的美少年。本性很善良，但如果是为了再不斩的话，可以化身为毫不留情战斗的“工具”，白认为人在想要保护重要东西的时候，就会变得很坚强。终因替桃地再不斩挡下卡卡西的雷切而被贯穿心脏而死亡。",
						},	
				
			perfectPair:{
			"xwj_xhuoying_shuimen":['xwj_xhuoying_jiuxinnai'],
			"xwj_xhuoying_xiaoying":['xwj_xhuoying_zhuozhu'],
			"xwj_xhuoying_zhujian":['xwj_xhuoyin_ban'],
			"xwj_xhuoying_dashewan":['xwj_xhuoyin_dou'],
			"xwj_xhuoying_gangshou":['xwj_xhuoying_zhilaiye'],
			"xwj_xhuoying_feiduan":['xwj_xhuoying_jiaodu'],
			"xwj_xhuoying_chutian":['xwj_xhuoying_mingren'],
			"xwj_xhuoying_kakasi":['xwj_xhuoying_kai'],
			"xwj_xhuoying_woailuo":['xwj_xhuoying_kanjiulang'],
			"xwj_xhuoying_guijiao":['xwj_xhuoying_itachi'],
			"xwj_xhuoying_wuren":['xwj_xhuoying_dayemu'],
			"xwj_xhuoying_changmen":['xwj_xhuoying_xiaonan'],
			"xwj_xhuoying_liluoke":['xwj_xhuoying_ningchi'],
			"xwj_xhuoying_luwan":['xwj_xhuoying_asima'],
			"xwj_xhuoying_xiezi":['xwj_xhuoying_didala'],
			"xwj_xhuoying_tuanzang":['xwj_xhuoying_yuanfeirizhan'],
			"xwj_xhuoying_leiying":['xwj_xhuoying_qilabi'],
			"xwj_xhuoying_junmalv":['xwj_xhuoying_zhongwu'],
			"xwj_xhuoying_shuimen":['xwj_xhuoying_feijian'],
			"xwj_xhuoying_zuojin":['xwj_xhuoying_jinye'],
			"xwj_xhuoying_kanjiulang":['xwj_xhuoying_shouju'],
			"xwj_xhuoying_zaibuzhan":['xwj_xhuoying_bai'],
			
					},
				
skill:{
  
         "xwj_xhuoying_bingdun":{    
                audio:"ext:群英会:2",    
                enable:"phaseUse",              
                usable:1,
    filter:function (event,player){
        return !player.isTurnedOver();
    },
    filterTarget:function (card,player,target){
        return player!=target;
    },
    group:"xwj_xhuoying_bingdun2",
    selectTarget:[1,2],  
     mod:{    
                    globalTo:function (from,to,current){
            if(to.isTurnedOver()) return current+Infinity;
        },
         globalFrom:function (from,to){
            if(to.isTurnedOver()){
                return -Infinity;
            }
        },
                },
    content:function (){
		var chat=['在我的血继限界里，没有人的速度能快得过我','秘术——魔镜冰晶'].randomGet();
            player.say(chat); 
			player.$fullscreenpop('秘术•魔镜冰晶','thunder');
        target.turnOver();
        player.turnOver(true);
    },
                ai:{
                    threaten:1,
                     result:{
            target:function (player,target){
                if(!target.isTurnedOver()) return -3.5;
                if(target.isTurnedOver()&&get.attitude(player,target)>0) return 4.5;
                return -0.1;
            },
					 },
                    order:4,
                    expose:0.4,
                },
            },
             "xwj_xhuoying_bingdun2":{
                trigger:{
                    player:"useCard",
                },              
               // silent:true,
               // popup:false,
                priority:201909,
                filter:function (event,player){
         if(get.type(event.card)=='delay') return false;
         if(get.type(event.card)=='equip') return false;
         if(event.targets.contains(player)) return false;        
      //   if(!event.targets) return false;                  
         if(event.targets.length>1) return false;                                      
                             return game.hasPlayer(function(current){
                                return current.isTurnedOver()&&!event.targets.contains(current);
                          });
                },
                content:function (){     
                'step 0'         
        event.targets=game.filterPlayer(function(current){
            return current.isTurnedOver()&&current!=player;
        });
        event.targets.sort(lib.sort.seat);
        'step 1'
        game.playSu(['xwj_xhuoying_bingdun1','xwj_xhuoying_bingdun2'].randomGet());			
            player.say('别想能在我的术里逃出去'); 
           trigger.targets.addArray(event.targets);   
           player.line(trigger.targets,'green');           
                },
            },
            
       "xwj_xhuoying_chengshang2":{
    trigger:{
        player:"damageEnd",
    },
    forced:true,
   // popup:false,
    filter:function (event,player){
        return event.card&&event.card.name=='sha'&&player.isAlive();
    },
    content:function (){
    game.playSu(['xwj_xhuoying_chengshang1','xwj_xhuoying_chengshang2'].randomGet());	
        player.turnOver();		
    },
},
                 "xwj_xhuoying_chengshang":{
     audio:"ext:群英会:2",
				priority:15,      
     trigger:{
         global:"shaBegin",
      },     
      check:function (event,player){
        if(player.hp<=1) return 0;
        return get.attitude(player,event.target)>1;
    },
			//	popup:false,
 			prompt:function (event,player,target){
                        return '是否代替'+get.translation(event.target)+'成为目标';
                    },
				filter:function(event,player){
					return player!=event.player&&player!=event.target&&player.isTurnedOver();
				},
                content:function (){                                      
		    			trigger.player.line(player,'green');
      			trigger.targets.remove(trigger.target);
				  		trigger.targets.push(player);	
								trigger.target = player;					
								player.addTempSkill('xwj_xhuoying_chengshang2','shaAfter');	
var chat=['人只有要守护的东西，才会变得更强大','必要时，我愿意成为再不斩大人的工具，帮他完成他的梦想'].randomGet();
            player.say(chat); 								
    },
       },      
               
   "xwj_xhuoying_xundao":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,              
                filter:function (event,player){
               return player.isAlive();
    },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.countCards('e')&&current!=player&&get.attitude(player,current)<=0){
                return true;
            } 
        });
        return num>=2;
    },
                content:function (){
        "step 0"
           var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.num=0;     
        var controls=[]; 
               for(var i=0;i<game.players.length;i++){                                                 
           if(game.players[i]!=player){                              
    					if(game.players[i].getEquip(1)&&!controls.contains('武器栏')) controls.push('武器栏');        
         	if(game.players[i].getEquip(2)&&!controls.contains('防具栏')) controls.push('防具栏');    
        		if(game.players[i].getEquip(3)&&!controls.contains('防御马')) controls.push('防御马');        
       			if(game.players[i].getEquip(4)&&!controls.contains('进攻马')) controls.push('进攻马');        
       			if(game.players[i].getEquip(5)&&!controls.contains('宝物栏')) controls.push('宝物栏');      
       			if(!controls.contains('cancel2')) controls.push('cancel2');     
       			}    
       			}  			      
          var str='请选择一个装备栏';            
          player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                        return Math.floor(Math.random()*controls.length);
                    };                                
        "step 1"        
        if(result.control){             
            if (result.control=='武器栏') {           
            if(num<event.targets.length){
            if(event.targets[num].getEquip(1)){
            player.line(event.targets[num],'green');
            event.targets[num].$give(event.targets[num].getEquip(1),player);
            player.gain(event.targets[num].getEquip(1),event.targets[num]);
            }
            event.num++;
            event.redo();
            }                            
            }          
              if (result.control=='防具栏') {           
            if(num<event.targets.length){
            if(event.targets[num].getEquip(2)){
            player.line(event.targets[num],'green');
            event.targets[num].$give(event.targets[num].getEquip(2),player);
            player.gain(event.targets[num].getEquip(2),event.targets[num]);
            }
            event.num++;
            event.redo();
            }                            
            }            
              if (result.control=='防御马') {         
            if(num<event.targets.length){
            if(event.targets[num].getEquip(3)){
            player.line(event.targets[num],'green');
            event.targets[num].$give(event.targets[num].getEquip(3),player);
            player.gain(event.targets[num].getEquip(3),event.targets[num]);
            }
            event.num++;
            event.redo();
            }                            
            }            
              if (result.control=='进攻马') {     
            if(num<event.targets.length){
            if(event.targets[num].getEquip(4)){
            player.line(event.targets[num],'green');
            event.targets[num].$give(event.targets[num].getEquip(4),player);
            player.gain(event.targets[num].getEquip(4),event.targets[num]);
            }
            event.num++;
            event.redo();
            }                            
            }           
              if (result.control=='宝物栏') {        
            if(num<event.targets.length){
            if(event.targets[num].getEquip(5)){
            player.line(event.targets[num],'green');
            event.targets[num].$give(event.targets[num].getEquip(5),player);
            player.gain(event.targets[num].getEquip(5),event.targets[num]);
            }
            event.num++;
            event.redo();
            }                            
            }
             if (result.control=='cancel2') {    
                 event.finish();
             }
    }
    else{
         event.finish();
    }   
    "step 2"
    	game.playSu(['xwj_xhuoying_xundao1','xwj_xhuoying_xundao2'].randomGet());	
    var chat=['没收你们的作案工具','这把斩首大刀，从今天起，就是属于我的了','我就是为了搜集七把忍刀才决定加入鹰小队的'].randomGet();

            player.say(chat); 

    },
                ai:{
                     threaten:0.8,
                     order:3,                                     
                },
            },
            "xwj_xhuoying_yehua1":{             
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.nature=='thunder';
    },                       
                content:function (){   
               var chat=['香燐，出手真重','我……干嘛要逞强呀？……'].randomGet();

            player.say(chat); 
   
                	game.playSu(['xwj_xhuoying_yehua1','xwj_xhuoying_yehua2'].randomGet());			                               
            trigger.num++;                          
            player.chooseToDiscard(1,true,'he');                   
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
 },
   "xwj_xhuoying_yehua2":{                
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.nature!='thunder';
    },                       
                content:function (){   
               var chat=['这点小伤奈何不了我的，省点力气吧','实际上，男人才是水做的！'].randomGet();

            player.say(chat); 
     
           	game.playSu('xwj_xhuoying_yehua21');			                      
            trigger.num--;            
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
 },
                    "xwj_xhuoying_yehua":{            
                        trigger:{
                            target:"shaBegin",
                        },                        
                        priority:12,
                        forced:true,
                        group:["xwj_xhuoying_yehua1","xwj_xhuoying_yehua2"],
                        filter:function (event,player){        
              return event.card&&event.card.nature=='thunder';          
           },
                        content:function (){  
                        var chat=['我……身体麻痹，动不了了','既生水月，何生雷遁？'].randomGet();

            player.say(chat); 
       	game.playSu('xwj_xhuoying_yehua');	               
        trigger.directHit=true;        
    },
                        ai:{
                            threaten:1,
                        },                       
                    },                
                                     
             	"xwj_xhuoying_daoji2":{						
						priority:2019,
						usable:1,
						trigger:{player:'loseEnd'},
						filter:function(event,player){
							if(event.player!=player) return false;
					   for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e'&&get.position(event.cards[i])=='d') return true;
        }
        return false;
						},
						forced:true,				
						content:function(){
							"step 0"
							game.playSu(['xwj_xhuoying_daoji1','xwj_xhuoying_daoji2'].randomGet());		
							if(trigger.delay==false) game.delay();
							"step 1"
							var cards=[];
							for(var i=0;i<trigger.cards.length;i++){
								if(get.type(trigger.cards[i])=='equip'&&trigger.cards[i].original=='e'&&get.position(trigger.cards[i])=='d'){
									cards.push(trigger.cards[i]);
								}
							}
							if(cards.length){
							var chat=['吾通晓使刀，世人皆知','想夺我兵器？可没那么容易！'].randomGet();

            player.say(chat); 

								player.gain(cards,'log');
								player.$gain2(cards);
							}
						},
					},
					
            "xwj_xhuoying_daoji":{
                audio:"ext:群英会:2",
                trigger:{
                    target:"shaBegin",                   
                },
                priority:2019,
                group:"xwj_xhuoying_daoji2",
                filter:function (event,player){

        return player.countCards('h',{type:'equip'})>0;

    },
                content:function (){

               'step 0'

               player.chooseCard('h',true,'选择使用一张装备牌',{type:'equip'}).ai=function(card){
    return 8-get.value(card);
          };                
        "step 1"
      if(result.bool){ 
        var card=result.cards[0];
         var chat=['兵来将挡，火来水淹','真是一把好刀'].randomGet();

            player.say(chat); 

            player.useCard(card,player);               
                            
                     
            game.delay(0.5);           
          

            }             

    },
                ai:{
                    order:7,
                    expose:0.2,
                },
            },
             "xwj_xhuoying_hongjiao":{
              audio:"ext:群英会:2",
         				trigger:{player:'damage'},
				filter:function(event,player){
					return event.num>0&&event.source&&event.source.isAlive();
				},
				check:function(event,player){
					return get.attitude(player,event.source)<=0;
				},
			//	logTarget:'source',
				content:function(){					
				   var chat=['敢惹我？让你尝尝我的厉害','我长红色的头发又关你什么事？'].randomGet();
            player.say(chat); 
						trigger.source.damage(trigger.num,'fire');
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						}
					}
				},
            },
            "xwj_xhuoying_fenglian":{
             audio:"ext:群英会:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player){
        return game.findPlayer(function(current){
            return !current.isLinked();
        });
    },
                content:function (){
        "step 0"
        var num=game.countPlayer(function(current){
            return !current.isLinked();
        });
        player.chooseTarget(get.prompt('xwj_xhuoying_fenglian'),[1,Math.min(num,player.countCards('h'))],function(card,player,target){
            return !target.isLinked();
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
           var chat=['九尾，你就乖乖地呆着吧','漩涡一族最擅长的就是封印术','这是查克拉链，你动不了了'].randomGet();
            player.say(chat); 
            player.logSkill('xwj_xhuoying_fenglian',result.targets);
            event.targets=result.targets;
            event.num=0;
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.num<event.targets.length){
            event.targets[event.num].link();
            event.targets[event.num].addTempSkill('xwj_xhuoying_fenglian2',{player:'phaseBegin'});
            event.num++;
            event.redo();
        }
    },
                ai:{
                    expose:0.5,
                },
            },
            
            "xwj_xhuoying_fenglian2":{
				mark:true,
				mod:{
					cardEnabled:function(){
						return false;
					},
					cardUsable:function(){
						return false;
					},
					cardRespondable:function(){
						return false;
					},
					cardSavable:function(){
						return false;
					}
				},
				intro:{
					content:'不能使用或打出卡牌'
				}
			},
			
	"xwj_xhuoying_liaoshang":{
                audio:"ext:群英会:1",
                direct:true,
                priority:8,
                trigger:{
                    global:"damageAfter",
                },
                filter:function (event,player){
        return event.nature=='fire'||event.nature=='thunder';
    },
                content:function (){   
                'step 0'
          player.chooseBool('是否对'+get.translation(trigger.source)+'发动【疗伤】？').set('ai',function(){              
                       if(get.attitude(_status.event.player,trigger.source)>0) return true;       
                       return false;  
           });
       'step 1'
        if(result.bool){
        game.delay();
        var chat=['佐助君，你受伤了，请咬我一口吧','让我助你一战'].randomGet();
            player.say(chat);  
            player.logSkill('xwj_xhuoying_liaoshang');   
            if(trigger.source.isDamaged()){
            trigger.source.recover(trigger.num);
            }
            else{
                trigger.source.draw(trigger.num);
            }         
        }
        else{
            event.finish();
        }                               
    },
                ai:{
                    expose:0.5,
                    order:2,
                },
            },			
			"xwj_xhuoying_chongyu":{
                trigger:{
                    global:"discardAfter",
                },
                priority:8,
                direct:true,
                audio:"ext:群英会:2",
                filter:function (event,player){
        if(event.player==player) return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='spade'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                frequent:"check",
                check:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='spade'&&get.position(event.cards[i])=='d'){
                if(event.cards[i].name=='du') return false;
            }
        }
        return true;
    },
                init:function (player){
        player.storage.xwj_xhuoying_chongyu=[];
    },
                intro:{
                    content:"cards",
                },
                content:function (){
           "step 0"
                            if(trigger.delay==false) game.delay();
                            "step 1"
                            var cards=[];
                            for(var i=0;i<trigger.cards.length;i++){
                                if(get.suit(trigger.cards[i])=='spade'&&get.position(trigger.cards[i])=='d'){
                                    cards.push(trigger.cards[i]);
                                }
                            }
                            if(cards.length){
								 var chat=['让你见识下木叶油女一族的秘术','不瞒你说，我全身都爬满了虫子'].randomGet();
            player.say(chat);
                             player.logSkill('xwj_xhuoying_chongyu');
            player.storage.xwj_xhuoying_chongyu=player.storage.xwj_xhuoying_chongyu.concat(cards);
            player.syncStorage('xwj_xhuoying_chongyu');
            player.markSkill('xwj_xhuoying_chongyu');
            }
            },
                ai:{
                    threaten:0.4,
                },
                group:"xwj_xhuoying_chongyu2",
            },
            "xwj_xhuoying_chongyu2":{
				audio:"ext:群英会:2",
                trigger:{
                    global:"recoverBegin",
                },
                priority:6,
                check:function (event,player){
                    return get.attitude(player,event.player)<=0;
                },
                filter:function (event,player){
        return event.player!=player&&player.storage.xwj_xhuoying_chongyu.length>0;
    },
                direct:true,
                content:function (){
        "step 0"       
        player.chooseCardButton(get.prompt('xwj_xhuoying_chongyu',trigger.player),player.storage.xwj_xhuoying_chongyu).set('ai',function(button){       
            if(get.attitude(_status.event.player,trigger.player)<=0) return true;       
                       return false; 
        });
        "step 1"
        if(result.bool){
        var chat=['秘术•虫玉','被我的虫子盯上你的查克拉后，你是逃不掉的'].randomGet();
            player.say(chat);  
            player.logSkill('xwj_xhuoying_chongyu',trigger.player);
            player.$throw(result.links);
            player.storage.xwj_xhuoying_chongyu.remove(result.links[0]);
            result.links[0].discard();
            player.syncStorage('xwj_xhuoying_chongyu');
            trigger.cancel();
             if(player.isDamaged()){
            player.recover();
            }
            else{
                player.draw();
            }         
            if(!player.storage.xwj_xhuoying_chongyu.length){
                player.unmarkSkill('xwj_xhuoying_chongyu');
            }
            else{
                player.markSkill('xwj_xhuoying_chongyu');
            }
        }
    },
                ai:{
                    expose:0.5,
                },
            },					
            "xwj_xhuoying_ganzhi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                priority:2018,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
                var chat=['佐助的查克拉好冰冷，这……还是佐助吗？','怎么回事？团藏的查克拉变动了'].randomGet();
            player.say(chat);  
                player.logSkill('xwj_xhuoying_ganzhi');
      for(var i=0;i<game.players.length;i++){
            if(game.players[i].countCards('h','tao')>0||game.players[i].countCards('h',{type:'equip'})>0){
                 player.draw();      
            }
            }     
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
               "xwj_xhuoying_nishou":{
	               audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                unique:true,
                filter:function (event,player){
                return player.hp<=2;
                },
            content:function (){   
			'step 0'
                 player.logSkill('xwj_xhuoying_nishou');
                 var chat=['忍法•牙狼牙之术','赤丸，一起上！'].randomGet();
            player.say(chat);  
lib.character.xwj_xhuoying_chiwan=["male","xhuo",4,["xwj_xhuoying_renquan"],[]];
player.callSubPlayer(player.addSubPlayer({
name:'xwj_xhuoying_chiwan',
maxHp:5,
hp:3,
skills:lib.character.xwj_xhuoying_chiwan[3],
hs:get.cards(4),
}));       
'step 1'
setTimeout(function(){
player.node.avatar.setBackgroundImage('extension/群英会/xwj_xhuoying_chiwan.jpg'); 
},500);
	player.awakenSkill('xwj_xhuoying_nishou');		
                /* player.storage.xwj_xhuoying_nishou=player.addSubPlayer({
                 name:'xwj_xhuoying_chiwan',
                 maxHp:5,
                 hp:3,                
                 skills:lib.character.xwj_xhuoying_chiwan[3],
                 hs:get.cards(4),
                 });
             player.callSubPlayer(player.storage.xwj_xhuoying_nishou);   
             */
             },
             },
            "xwj_xhuoying_renquan":{
                mod:{
                    cardEnabled:function (card,player){
            if(_status.event.skill!='xwj_xhuoying_renquan'&&card.name!='juedou'&&(get.type(card)=='trick'||get.type(card)=='delay')) return false;
        },
                    cardUsable:function (card,player){
            if(_status.event.skill!='xwj_xhuoying_renquan'&&card.name!='juedou'&&(get.type(card)=='trick'||get.type(card)=='delay')) return false;
        },
                    cardRespondable:function (card,player){
            if(_status.event.skill!='xwj_xhuoying_renquan'&&card.name!='juedou'&&(get.type(card)=='trick'||get.type(card)=='delay')) return false;
        },
                    cardSavable:function (card,player){
            if(_status.event.skill!='xwj_xhuoying_renquan'&&card.name!='juedou'&&(get.type(card)=='trick'||get.type(card)=='delay')) return false;
        },
                    targetInRange:function (card){
            if(get.type(card)=='trick'||get.type(card)=='delay'||_status.event.skill=='xwj_xhuoying_renquan') return true;
        },
                },
                audio:"ext:群英会:1",
                enable:"chooseToUse",
                filter:function (event,player){
                return player.countCards('h',{type:'trick'})>0||player.countCards('h',{type:'delay'})>0;
    },
                filterCard:{
                    type:["trick","delay"],
                },
                viewAs:{
                    name:"juedou",
                },
                check:function (){return 1},
                ai:{
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "xwj_xhuoying_tongya":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){ 
               return target!=player&&target.countCards('he')>0&&player.countCards('he')>0;
    },
                //check:function (event,player){
       // return ai.get.attitude(player,target)<=0;
 //   },
                content:function (){
        "step 0"
         player.chooseToDiscard([1,player.countCards('he')],true,'he','请弃置任意张牌').ai=function(card){
                return 6-get.value(card);
            }; 
            "step 1" 
        if(result.bool){  
        player.logSkill('xwj_xhuoying_tongya');
         var chat=['牙通牙','赤丸，咬他！'].randomGet();
            player.say(chat);    
         event.num=result.cards.length; 
           target.chooseToDiscard(event.num,true,'he','弃置等量的牌').set('ai',function(card){             
            return 6-get.value(card);
        });          
        }
        else{
            event.finish();
        }            
          "step 2"
          event.num1=result.cards.length; 
          player.draw(event.num-event.num1); 
          player.useCard({name:'juedou'},target,false);                    
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
			"xwj_xhuoying_fengwang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"turnOverEnd",
                },
                direct:true,
				priority:2019,
				filter:function(event,player){				
					//return !player.isTurnedOver();
					return player.isAlive();
				},
                content:function (){
    "step 0"
     player.chooseTarget('选择【风网】的目标',lib.translate.xwj_xhuoying_fengwang_info,true,function(card,player,target){
             return target!=player&&target.countCards('he')>0;
     }).set('ai',function(target){     
             return -get.attitude(player,target);            
     });        
     "step 1"
     if(result.bool){
		 player.logSkill('xwj_xhuoying_fengwang');
             player.line(result.targets[0]);
             player.discardPlayerCard(result.targets[0],'he',1,true);
     }
    else {       
            event.finish(); 
    }                     
    },
                ai:{                 
                        result:{
                            player:1,
                        },
                        expose:0.8,
                        order:4,
                },
            },
	"xwj_xhuoying_lianyou":{   
 		audio:"ext:群英会:2", 
    trigger:{
				player:"phaseEnd",
				},
				priority:18,
    filter:function (event,player){
        return player.isAlive();
    },
    check:function (event,player){
        var active=0;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            if(!game.players[i].isOut()){
                if(ai.get.attitude(player,game.players[i])>0){
                    active--;
                }
                else if(ai.get.attitude(player,game.players[i])<0){
                    active++;
                }
            }
        }
        if(active>0) return 1;
        if(Math.random()<0.4) return 1;
        return 0.5;
    },
    content:function (){
        "step 0"      
        event.current=player.next;        
          var chat=['老娘来了，刚才谁在放肆？','知道危险还不滚到一边去？'].randomGet();
            player.say(chat);    
        "step 1"
        event.current.chooseControl('弃牌','让牌').set('ai',function(){         
            if(ai.get.attitude(event.current,player)>0) return '让牌';
            if(ai.get.attitude(event.current,player)<0) return '弃牌';
            return '让牌';
        }).set('prompt','镰鼬：请选择一项');    
        "step 2"
        if(result.control=='弃牌'){          
             event.current.chooseToDiscard(1,'he',true);
        }
        else{
            player.line(event.current,'green');
            player.gainPlayerCard(event.current,'he',true); 
        }
        "step 3"
        if(event.current.next!=player){
            event.current=event.current.next;
            game.delay(0.5);
            event.goto(1);
        }         
        else event.goto(4);    
        "step 4"
        player.turnOver();       
    },
    ai:{    
       threaten:1.4,
                    order:9,
                    result:{
                        player:function (player){
                   return 3;  
            },
                    },     
					},
},

"xwj_xhuoying_anqi":{
				audio:"ext:群英会:2",
				trigger:{
				player:'loseEnd',
				},
				frequent:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='e') return true;
					}
					return false;
				},
				content:function(){
				  'step 0'
			game.delay(1.5);
			player.logSkill('xwj_xhuoying_anqi');
			player.chooseTarget('选择发动【暗器】的目标',lib.translate.xwj_xhuoying_anqi_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'
        if(result.bool){
           var chat=['明枪易躲，暗箭难防','巾帼不让须眉'].randomGet();
            player.say(chat);  			
            var target=result.targets[0];
            player.line(target,'green');                     
			player.useCard({name:'sha'},target,false); 
			player.draw();
	    } 			
				},
				ai:{
					expose:2,
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						}
					}
				}
			},

"xwj_xhuoying_jiju": {
 audio:"ext:群英会:2",
 priority: 0,
							trigger: {
								global: "useCardToBegin",
							},
							check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
							filter: function(event, player) {
								return event.player != player && event.card && (get.equipNum(event.card) == 1|| get.equipNum(event.card) == 4);
							},
							content: function() {
								"step 0"
								  var chat=['我的是我的，你的还是我的','这真是一件好装备啊'].randomGet();
            player.say(chat);  
								trigger.untrigger();
								trigger.player = player;
								trigger.target = player;
								"step 1"
								trigger.trigger('useCardToBegin');
							},
							//此技能来自弹丸杀							
						ai:{
					expose:0.2,					
						}
						},


	"xwj_xhuoying_weishou2":{
                mark:true,
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },	
			
            "xwj_xhuoying_weishou":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
         'step 0'
          player.chooseTarget('选择发动【伪兽】的目标',lib.translate.xwj_xhuoying_weishou_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'
        if(result.bool){
           var chat=['封印术·虎视眈弹，这次不能动弹了吧','安息吧，你们这些亡魂'].randomGet();
            player.say(chat);  
            var target=result.targets[0];
            player.line(target,'green');                     
			        target.addTempSkill('xwj_xhuoying_weishou2',{player:'phaseUseBegin'}); 
            player.useCard({name:'sha'},target,false);         
	        		game.delay(1.5);
            event.card=get.cardPile(function(card){
                return get.type(card)=='equip';
            });
            if(event.card){
                target.equip(event.card,true).set('delay',true);          
            }
            else{
                event.finish();
            }                      
        }             
    },
                ai:{
                    order:7,					
                    maixie:true,			
                 	maixie_hp:true,           								
                    expose:0.5,
                },
        },		
			
			"xwj_xhuoying_wodi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                content:function (){
               'step 0'
                player.chooseTarget('选择发动【卧底报信】的目标',lib.translate.xwj_xhuoying_wodi_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);            
        });
        'step 1'
        if(result.bool){
         var chat=['忍法·超兽伪画','团藏大人放心！收集到情报，我会第一时间交给“根”',' 书上说，微笑能增加人与人之间的交流'].randomGet();
            player.say(chat); 
            var target=result.targets[0];
            player.line(target,'green');     
            target.draw();                    
            player.draw();
            player.recover();
            game.delay(0.5);           
            player.gain(player.getCards('e'),'gain2');        
            }             
    },
                ai:{
                    order:7,
					expose:0.2,
                },
        },									
			
	"xwj_xhuoying_liudao":{
                forced:true,
            //    locked:true,                
             //   noLose:true,
             //   noGain:true,
             //   noDeprive:true,
          //      noRemove:true,
              //  noDisable:true,             
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(!target.isMaxHp()){        
                if(card.name=='sha') return false;               
            }
           if(target.isMaxHp()){         
                if(get.type(card)=='trick'||get.type(card)=='delay') return false;               
            }
        },        
                },
            },
"xwj_xhuoying_renzong":{
audio:"ext:群英会:2",
  	trigger:{
                    global:"dying",
                },
  forced:true,
//  noLose:true, 
//  noGain:true, 
//  noDeprive:true, 
//  locked:true, 
//  noRemove:true, 
//  noDisable:true, 
  priority:-2018, 
  unique:true,
  skillAnimation:true,
  animationColor:"water",
     filter:function (event,player){
      return event.player.hp<=0&&event.player!=player;
       },       
         logTarget:"player", 			
         	derivation:['xwj_xhuoying_tianyan','xwj_xhuoying_xianti'], 
         	content:function (){ 
         	'step 0'          	                 
         player.logSkill('xwj_xhuoying_renzong',trigger.player);     
         player.chooseControl('xwj_xhuoying_tianyan','xwj_xhuoying_xianti').set('prompt','令'+get.translation(trigger.player)+'获得一项技能'); 
         	goon=true;
         	 if(!goon){ 
         	 event.finish(); 
         	} 	         	          	 	
         		'step 1' 		 
         	   var chat=['忍宗对查克拉的定义是连接个体的力量，而非只增强个体的力量','忍界大战，尸横遍野，生灵涂炭。我现在赐予你新的力量，让你替我去拯救世界，但愿我没看错人……','我有两个儿子，一个与生俱来继承了我的瞳术，一个继承了我的生命力'].randomGet();
            player.say(chat);  
        	trigger.player.addSkillLog(result.control);
         trigger.player.storage.xwj_xhuoying_renzong2=player; 
         trigger.player.addSkill('xwj_xhuoying_renzong2');    
         trigger.player.recover(1-trigger.player.hp);
         trigger.player.draw(2);              
         	  		 'step 2'      
          		player.maxHp=6;
         		 player.hp=6;		 
         		 game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xhuoying_yuyi.jpg'); 
		      		 ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3'; 
         		 player.awakenSkill('xwj_xhuoying_renzong');           
         		 player.update();    
         		 	 },                  		 	                		 	 
         		 	  },
    "xwj_xhuoying_renzong2":{
                audio:"ext:群英会:2",
                mark:"character",
                intro:{
                    content:"当你造成或受到伤害后，$随机获得一张基本牌",
                },
                nopop:true,
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
            //   noLose:true, 
//  noGain:true, 
//  noDeprive:true, 
//  locked:true, 
//  noRemove:true, 
//  noDisable:true, 
  unique:true,
                filter:function (event,player){
        return player.storage.xwj_xhuoying_renzong2&&player.storage.xwj_xhuoying_renzong2.isIn()&&event.num>0;
    },
                content:function (){
        'step 0'
        game.delayx();
        'step 1'
        var target=player.storage.xwj_xhuoying_renzong2;      
        player.line(target,'green');
	      	target.gain(get.cardPile(function(card){
            return get.type(card,'basic')=='basic';
        }),'gain2');       
        game.delay(0.5);
    },
                onremove:true,              
            },
	
	"xwj_xhuoying_tianyan":{
 audio:"ext:群英会:1",
    trigger:{
        player:"phaseBegin",
    },
    priority:2018,
    direct:true,
    createDialog:function (player,target,onlylist){
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !lib.skill[skills[j]].unique&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            game.resume();
        };
        for(i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                if(translation[0]=='新'&&translation.length==3){
                    translation=translation.slice(1,3);
                }
                else{
                    translation=translation.slice(0,2);
                }
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },
    content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('xwj_xhuoying_tianyan'),function(card,player,target){
            var names=[];
            if(target.name&&!target.isUnseen(0)) names.add(target.name);
            if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
            if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
            var pss=player.getSkills();
            for(var i=0;i<names.length;i++){
                var info=lib.character[names[i]];
                if(info){
                    var skills=info[3];
                    for(var j=0;j<skills.length;j++){
                        if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                            !lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                            return true;
                        }
                    }
                }
                return false;
            }
        }).set('ai',function(target){
            if(get.attitude(_status.event.player,target)>0) return Math.random();
            return 0;
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('xwj_xhuoying_tianyan',event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        event.skillai=function(list){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            event.dialog=lib.skill.xwj_xhuoying_tianyan.createDialog(player,target);
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai(lib.skill.xwj_xhuoying_tianyan.createDialog(player,target,true));
        }
        'step 3'
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        player.addTempSkill(result);
        player.popup(result);
        game.log(player,'获得了','【'+get.translation(result)+'】');
    },
},
		
	"xwj_xhuoying_zhoushu":{
              	unique:true,
                audio:"ext:群英会:2",
                trigger:{
                    source:"damage",
                },
                filter:function (event,player){         
        return game.players.length>1;  
        return (event.source!=undefined);        
    },
    check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
                init:function (player){
        player.storage.xwj_xhuoying_zhoushu=false;
    },
                intro:{
                    content:"limited",
                },            
                content:function (){
         'step 0'
        game.delay();
        player.storage.xwj_xhuoying_zhoushu=true;        
        player.$skill('死司凭血','fire','red','avatar');        
        //player.chooseTarget('选择【死司凭血】的目标',lib.translate.xwj_xhuoying_zhoushu_info,true,function(card,player,target){
            //return target!=player&&!target.hasSkill('xwj_xhuoying_zhoushu2');
        //}).set('ai',function(target){
            //return -get.attitude(_status.event.player,target);            
        //});
        player.line(trigger.player,'green');
        game.log(trigger.player,'成为了','【死司凭血】','的目标');
        player.storage.xwj_xhuoying_zhoushu2=trigger.player;
        'step 1'    
        game.delay();           
        var chat=['你已经被我诅咒了','好新鲜的血液'].randomGet();
            player.say(chat);        
        //if(result.bool){           
            //var target=result.targets[0];
            //player.line(target,'green');
            //game.log(target,'成为了','【死司凭血】','的目标');
            //player.storage.xwj_xhuoying_zhoushu2=target;
            player.addSkill('xwj_xhuoying_zhoushu2');             
            player.removeSkill('xwj_xhuoying_zhoushu');
            setTimeout(function(){
  game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xhuoying_xieshen.jpg'); 
            player.node.avatar.show('extension/群英会/xwj_xhuoying_xieshen.jpg');
},100);
        //}                             
    },   
            },
            "xwj_xhuoying_zhoushu3":{
               unique:true,  
                trigger:{
                    global:"dieAfter",
                },
                silent:true,
                filter:function (event,player){
        return event.player==player.storage.xwj_xhuoying_zhoushu2;
    },
                content:function (){        
        player.removeSkill('xwj_xhuoying_zhoushu2');      
        if(!player.hasSkill('xwj_xhuoying_zhoushu')){      
        player.addSkill('xwj_xhuoying_zhoushu');
        game.log(player,'刷新了技能','【咒术】');          
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xhuoying_feiduan.jpg');              
        player.update();
      }                  
    },
                forced:true,
                popup:false,
            },
            "xwj_xhuoying_zhoushu2":{
                unique:true,
                mark:"character",
                intro:{
                    content:"当你受到伤害后，$受到等量的伤害",
                },
                nopop:true,
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.xwj_xhuoying_zhoushu2&&player.storage.xwj_xhuoying_zhoushu2.isIn()&&event.num>0;
    },
                content:function (){
        'step 0'
        game.delay(0.5);
        var chat=['这痛楚如何？哈哈……','来啊！互相伤害啊！'].randomGet();
            player.say(chat);                 
        'step 1'
        var target=player.storage.xwj_xhuoying_zhoushu2;
        player.line(target,'green');
        target.logSkill('xwj_xhuoying_zhoushu');
        target[trigger.name](trigger.num);
        game.delay(0.5);
    },
                group:"xwj_xhuoying_zhoushu3",
                onremove:true,
            },
"xwj_xhuoying_qianshou":{            
                audio:"ext:群英会:2",
                trigger:{
                    global:"useCard",
                },
                priority:5,
                filter:function (event,player){
        if(get.type(event.card)!='trick') return false;       
        if(get.info(event.card).multitarget) return false;
        if(event.targets.length<2) return false;       
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xwj_xhuoying_qianshou'),
            [1,trigger.targets.length],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            if(game.phaseNumber>game.players.length*2&&trigger.targets.length>=game.players.length-1){
                return -get.effect(target,trigger.card,trigger.player,_status.event.player);
            }
            return -1;
        });
        "step 1"       
        var chat=['斑，住手！我们是朋友！','千手神通'].randomGet();
            player.say(chat);                      
        if(result.bool){         
            player.logSkill('xwj_xhuoying_qianshou',result.targets);         
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay(0.5);
        }
    },
                ai:{
                    order:8,
                },
            },
            "xwj_xhuoying_xianti":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,          
                filter:function (event,player){
     return player.countCards('h')<player.maxHp;        
    },
                content:function (){
                player.draw(player.maxHp-player.countCards('h'));
                player.recover();        
    },
                ai:{
                    threaten:1.5,
                },
            },

xwj_xhuoying_guazhang:{
				audio:"ext:群英会:2",
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event,player){
					if(event.xwj_xhuoying_guazhanged) return false;
					if(!event.cards||event.cards.length!=1) return false;
					if(!player.isPhaseUsing()) return false;
					if(!player.storage.xwj_xhuoying_guazhang) return false;
					return get.suit(player.storage.xwj_xhuoying_guazhang)==get.suit(event.cards[0]);
				},
				content:function(){
				player.say('八卦•六十四掌');  
					player.draw();
				},
				intro:{
					content:'card'
				},
				group:['xwj_xhuoying_guazhang2','xwj_xhuoying_guazhang3']
			},
			xwj_xhuoying_guazhang3:{
				trigger:{player:'useCard'},
				priority:-1,
				silent:true,
				filter:function(event,player){
					if(!event.cards||event.cards.length!=1) return false;
					if(_status.currentPhase!=player) return false;
					return true;
				},
				content:function(){
					player.storage.xwj_xhuoying_guazhang=trigger.cards[0];
					trigger.xwj_xhuoying_guazhanged=true;
				}
			},
			xwj_xhuoying_guazhang2:{
				trigger:{player:'phaseAfter'},
				silent:true,
				content:function(){
					player.storage.xwj_xhuoying_guazhang=null;
				}
			},

/* 
//与第一张花色相同：
"xwj_xhuoying_guazhang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(!event.cards||event.cards.length!=1) return false;
        if(_status.currentPhase!=player) return false;       
        if(!player.storage.xwj_xhuoying_guazhang) return false;
        return get.suit(event.card)==player.storage.xwj_xhuoying_guazhang;
      //  return player.storage.xwj_xhuoying_guazhang==get.suit(event.cards[0]);
    },
                content:function (){                
            player.say('八卦•六十四掌');                                                                
        player.draw();
    },                      
            		group:['xwj_xhuoying_guazhang2','xwj_xhuoying_guazhang3']
			},
			"xwj_xhuoying_guazhang2":{
				trigger:{player:'useCard'},
				priority:2017,
				silent:true,
				usable:1,
				filter:function(event,player){
					if(!event.cards||event.cards.length!=1) return false;
					if(_status.currentPhase!=player) return false;
					return true;
				},
				content:function(){
					var card=trigger.cards[0];						
						player.storage.xwj_xhuoying_guazhang=get.suit(card);
						game.addVideo('storage',player,['player.storage.xwj_xhuoying_guazhang',player.storage.xwj_xhuoying_guazhang]);
						
				//	player.storage.xwj_xhuoying_guazhang=trigger.cards[0];
				},
			},
			"xwj_xhuoying_guazhang3":{
				trigger:{player:'phaseEnd'},
				silent:true,
				content:function(){
					player.storage.xwj_xhuoying_guazhang=null;
				},
			},
			*/
            "xwj_xhuoying_reguaili":{
                audio:"ext:群英会:1",
                unique:true,
                enable:"phaseUse",
                round:2,
                filter:function (event,player){
        return !player.storage.xwj_xhuoying_reguaili;
    },
                skillAnimation:"legend",
                animationColor:"metal",
                content:function (){
        'step 0'
        var shas=player.getCards('h','sha');
        var num;
        if(player.hp>=4&&shas.length>=3){
            num=3;
        }
        else if(player.hp>=3&&shas.length>=2){
            num=2;
        }
        else{
            num=1
        }             
        player.chooseControl('一','二','三','四','五','六',function(){
            return get.cnNumber(_status.event.goon,true);
        }).set('prompt','失去任意点体力').set('goon',num);
        'step 1'                                
        var num;
        switch(result.control){
            case '一':num=1;break;
            case '二':num=2;break;
            case '三':num=3;break;
            case '四':num=4;break;
            case '五':num=5;break;
            case '六':num=6;break;
        }        
         var chat=['女汉子没人疼，练就一身肌肉和力量','扎心了，流掉那么多血'].randomGet();
         player.say(chat);  
        player.storage.xwj_xhuoying_reguaili2=num;
        player.loseHp(num);
        player.draw(num);
        player.addTempSkill('xwj_xhuoying_reguaili2');        
        player.addTempSkill('xwj_xhuoying_reguaili3');    
        player.update();
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player){
                if(player.hp==1) return 0;
                var shas=player.getCards('h','sha');
                if(!shas.length) return 0;
                var card=shas[0];
                if(!lib.filter.cardEnabled(card,player)) return 0;
                if(lib.filter.cardUsable(card,player)) return 0;
                var mindist;
                if(player.hp>=4&&shas.length>=3){
                    mindist=4;
                }
                else if(player.hp>=3&&shas.length>=2){
                    mindist=3;
                }
                else{
                    mindist=2;
                }
                if(game.hasPlayer(function(current){
                    return (current.hp<=mindist-1&&
                        get.distance(player,current,'attack')<=mindist&&
                        player.canUse(card,current,false)&&
                        get.effect(current,card,player,player)>0);
                })){
                    return 1;
                }
                return 0;
            },
                    },
                },
                group:["xwj_xhuoying_reguaili_roundcount"],
            },
            "xwj_xhuoying_reguaili2":{
                audio:"ext:群英会:1",
                onremove:true,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){       
          var chat=['不是说我吹牛逼，无论人畜虾蟹，都捱不了我的一拳','去死吧，死基佬！'].randomGet();
            player.say(chat);  
        trigger.num++;
        player.update();
    },
                mod:{
                    cardUsable:function (card,player,num){
            if(typeof player.storage.xwj_xhuoying_reguaili2=='number'&&card.name=='sha'){
                return num+player.storage.xwj_xhuoying_reguaili2;
            }
        },
                    globalFrom:function (from,to,distance){
            if(typeof from.storage.xwj_xhuoying_reguaili2=='number'){
                return distance-from.storage.xwj_xhuoying_reguaili2;
            }
        },
                },
            },
                          
            "xwj_xhuoying_mudun":{
                group:["xwj_xhuoying_mudun_use","xwj_xhuoying_mudun_respond"],
                filter:function (event,player){
        return false;
    },
                viewAs:{
                    name:"wuxie",
                },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    save:true,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.5,
                },
                subSkill:{
                    use:{
                        enable:"chooseToUse",
                        			onChooseToUse:function(event){
					if(!game.online){
						var cards=[];
						if(ui.cardPile.childNodes.length<2){
							var discardcards=get.cards(2);
							for(var i=0;i<discardcards.length;i++){
								discardcards[i].discard();
							}
						}
						for(var i=0;i<2;i++){
							cards.push(ui.cardPile.childNodes[i]);
						}
						event.set('xwj_xhuoying_muduncards',cards);
					}
				},
                        chooseButton:{
                            dialog:function (event,player){
                    player.storage.xwj_xhuoying_mudun = [
                        ui.cardPile.childNodes[0],
                        ui.cardPile.childNodes[1],                                       
                    ];
                    return ui.create.dialog('木遁',player.storage.xwj_xhuoying_mudun,'hidden');
                },             


				/* var cards=[];
            if(ui.cardPile.childNodes.length<2){
                var discardcards=get.cards(2);
                for(var i=0;i<discardcards.length;i++){
                    discardcards[i].discard();
                }
            }
            for(var i=0;i<2;i++){
                cards.push(ui.cardPile.childNodes[i]);
			}*/
				
				
                            filter:function (button,player){
                    var evt=_status.event.getParent();
                    if(evt&&evt.filterCard){
                        return evt.filterCard(button.link,player,evt)&&ui.cardPile.childNodes.length>=2;
                    }
                    return true;
                },
                            check:function (button){
                    var player = _status.currentPhase;
                    return game.hasPlayer(function(current){
                        return player.canUse(button.link,current,false)&&get.effect(current,button.link,player,player)>0;
                    })?get.order(button.link):0;
                },
                            backup:function (links,player){
                    return {
                    	filter:function (event,player){
        return ui.cardPile.childNodes.length>=2;
    },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:links[0],
                          precontent:function(){
                               game.playSu(['xwj_xhuoying_mudun_respond1','xwj_xhuoying_mudun_respond2'].randomGet());           
                            },
                        onuse:function(result,player){
                            delete player.storage.xwj_xhuoying_mudun;
                        },                     
                    }
                },
                            prompt:function (links,player){
                    return '选择'+get.translation(links)+'的目标';
                },
                        },
                        ai:{
                            order:4,
                            result:{
                                player:function (player){                        
                            return 1;
                        for(var i=0;i<2;i++){
                            var card = ui.cardPile.childNodes[i];
                            if(game.hasPlayer(function(current){
                                var evt=_status.event.getParent();
                                if(evt&&evt.filterCard){
                                    return evt.filterCard(button.link,player,evt)&&game.hasPlayer(function(current){
                                        return player.canUse(button.link,current,false)&&get.effect(current,card,player,player)>0;
                                    });
                                }
                                return game.hasPlayer(function(current){
                                    return get.effect(current,card,player,player)>0;
                                });
                            }))
                            return 1;
                        }
                        return 0;
                    },
                            },
                            useful:-1,
                            value:-1,
                        },
                        sub:true,
                    },
                    respond:{
                        audio:"ext:群英会:2",
                        trigger:{
                            player:"chooseToRespondBegin",
                        },										
                        filter:function (event,player){
                if(event.responded) return false;
                return ui.cardPile.childNodes.length>=2;//新增条件，待测试，原为return true;
            },
                        content:function (){
                "step 0"
            var cards=[];
        if(ui.cardPile.childNodes.length<2){
            var discardcards=get.cards(2);
            for(var i=0;i<discardcards.length;i++){
                discardcards[i].discard();
            }
        }
        for(var i=0;i<2;i++){
            cards.push(ui.cardPile.childNodes[i]);
        }
                player.chooseCardButton('木遁：选择一张卡牌打出',cards).set('filterButton',function(button){
                    return _status.event.getTrigger().filterCard(button.link);
                });
                "step 1"
                if(result.bool){                                    
                    trigger.untrigger();
                    trigger.responded=true;
                    result.links[0].remove();
                    trigger.result={bool:true,card:result.links[0]}
                }
            },
                        ai:{
                            effect:{
                                target:function (card,player,target,effect){
                        if(get.tag(card,'respondShan')) return 0.7;
                        if(get.tag(card,'respondSha')) return 0.7;
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "xwj_xhuoying_baihao":{
                audio:"ext:群英会:2",
                trigger:{
                    player:["phaseUseEnd","dying"],
                },
                direct:true,
             //   frequent:true,          
                filter:function (event,player){                           
           return player.hp<player.maxHp||player.hp<=0;           
    },
                content:function (){   
                 'step 0'
                 var chat=['阴封印•创造再生——百豪之术'].randomGet();
            player.say(chat);  
                player.chooseControl('百豪','cancel2').set('ai',function(){         
            if(player.countCards('h')-player.hp>3||player.hp<=player.maxHp-3||player.hp<=0) return '百豪';
            if(player.hp>2) return 'cancel2';
            return 'cancel2';
        }).set('prompt','百豪：请选择是否发动');    
        "step 1"
        if(result.control=='百豪'){
        player.logSkill('xwj_xhuoying_baihao');
            player.recover(Infinity);
             player.loseMaxHp();    
        }
        else{
          event.cancel();
        }      
    },           
                ai:{
                    order:2,
                    //result:{
                        //player:function (player){
                //if(player.hp<=player.maxHp-3||player.hp<=0) return 0.5;
              //  return 0;
           // },
                    //},
                },
            },
            "xwj_xhuoying_xianren":{
                audio:"ext:群英会:2",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('xwj_xhuoying_xianshu')&&player.storage.xwj_xhuoying_renfa2&&player.storage.xwj_xhuoying_renfa2.length>=3;
    },
	derivation:['xwj_xhuoying_rexianshu'],
                content:function (){
        "step 0"        
        player.$skill('仙人模式','fire','red','avatar');       
        player.chooseDrawRecover(2,true,function(event,player){
            if(player.hp==1&&player.isDamaged()) return 'recover_hp';
            return 'draw_card';
        });
        "step 1"                
         var chat=['今天的对手拥有轮回眼，所以不得不劳烦两位仙人出手相助','我是在妙木山修炼成仙的蛤蟆仙，自来也是也！'].randomGet();
            player.say(chat);                  
        player.loseMaxHp();
        player.addSkill('xwj_xhuoying_rexianshu');
        player.awakenSkill('xwj_xhuoying_xianren');
    },
            },
            "xwj_xhuoying_renfa":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                audio:"ext:群英会:2",
                init:function (player){
        player.storage.xwj_xhuoying_renfa=[];
        player.storage.xwj_xhuoying_renfa2=[];
    },
                filter:function (event,player){
        return player.countCards('h')>=0;
    },
                intro:{
                    content:"cards",
                    mark:function (dialog,content,player){
            if(content&&content.length){
                dialog.addAuto(content);
                if(player.isUnderControl(true)){
                    var str='';
                    for(var i=0;i<player.storage.xwj_xhuoying_renfa2.length;i++){
                        str+=get.translation(player.storage.xwj_xhuoying_renfa2[i]);
                        if(i<player.storage.xwj_xhuoying_renfa2.length-1){
                            str+='、';
                        }
                    }
                    dialog.add('<div class="text center">'+str+'</div>')
                }
            }
        },
                },
                content:function (){
        'step 0'          
        player.draw(trigger.num);
        var chat=['这个盘，我接了','被小鬼称为小鬼，看来真被瞧不起了'].randomGet();
            player.say(chat);                  
        var list1=[],list2=[],list3=[];
        for(var i=0;i<lib.inpile.length;i++){
            var type=get.type(lib.inpile[i]);
            if(type=='basic'){
                list1.push(['基本','',lib.inpile[i]]);
            }
            else if(type=='trick'){
                list2.push(['锦囊','',lib.inpile[i]]);
            }
            else if(type=='delay'){
                list3.push(['锦囊','',lib.inpile[i]]);
            }
        }
        player.chooseButton([get.prompt('xwj_xhuoying_renfa'),[list1.concat(list2).concat(list3),'vcard']]).set('filterButton',function(button){
            var player=_status.event.player;
            if(player.storage.xwj_xhuoying_renfa2&&player.storage.xwj_xhuoying_renfa2.contains(button.link[2])) return false;
            return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'sha':return 5+rand[1];
                case 'tao':return 4+rand[2];
                case 'lebu':return 3+rand[3];
                case 'shan':return 4.5+rand[4];
                case 'wuzhong':return 4+rand[5];
                case 'shunshou':return 3+rand[6];
                case 'nanman':return 2+rand[7];
                case 'wanjian':return 2+rand[8];
                default:return rand[9];
            }
        }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),
        Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
        'step 1'
        if(result.bool){
            player.storage.xwj_xhuoying_renfa2.push(result.links[0][2]);
            player.logSkill('xwj_xhuoying_renfa');
            player.chooseCard('h','选择一张手牌记录一招“忍法”',true);
            if(player.isOnline2()){
                player.send(function(storage){
                    game.me.storage.xwj_xhuoying_renfa2=storage;
                },player.storage.xwj_xhuoying_renfa2);
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var card=result.cards[0];
            player.lose(card,ui.special);
            player.storage.xwj_xhuoying_renfa.push(card);
            player.syncStorage('xwj_xhuoying_renfa');
            player.markSkill('xwj_xhuoying_renfa');
            player.$give(card,player);
            player.addSkill('xwj_xhuoying_renfa3');
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+player.storage.xwj_xhuoying_renfa2.length;
        },
                },
                group:["xwj_xhuoying_renfa2"],
            },
            "xwj_xhuoying_renfa2":{
                trigger:{
                    global:["useCard","respondEnd"],
                },
                priority:15,
                audio:"ext:群英会:2",
                filter:function (event,player){
        if(_status.currentPhase==player) return false;
        if(event.name=='respond'){
            if(event.getParent(2).name!='sha') return false;
        }
        return player.storage.xwj_xhuoying_renfa2&&player.storage.xwj_xhuoying_renfa2.contains(event.card.name);
    },
                direct:true,
                content:function (){
        "step 0"                   
        var effect=0;
        if(trigger.card.name=='wuxie'||trigger.name=='respond'){
            if(get.attitude(player,trigger.player)<-1){
                effect=-1;
            }
        }
        else if(trigger.targets&&trigger.targets.length){
            for(var i=0;i<trigger.targets.length;i++){
                effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
            }
        }
        var str='忍法：是否令'+get.translation(trigger.player);
        if(trigger.targets&&trigger.targets.length){
            str+='对'+get.translation(trigger.targets);
        }
        str+='的'+get.translation(trigger.card)+'失效？'
        var next=player.chooseBool(str,function(){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            if(_status.event.effect<0){
                if(trigger.card.name=='sha'){
                    var target=trigger.targets[0];
                    if(target==player){
                        return !player.countCards('h','shan');
                    }
                    else{
                        return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
                    }
                }
                else{
                    return true;
                }
            }
            return false;
        });
        next.set('effect',effect);
        "step 1"
        if(result.bool){
            player.logSkill('xwj_xhuoying_renfa');
            var index=player.storage.xwj_xhuoying_renfa2.indexOf(trigger.card.name);
            if(index!=-1){
                var card=player.storage.xwj_xhuoying_renfa[index];
                ui.discardPile.appendChild(card);
                player.$throw(card);
                player.storage.xwj_xhuoying_renfa.splice(index,1);
                player.storage.xwj_xhuoying_renfa2.splice(index,1);
                if(player.storage.xwj_xhuoying_renfa.length==0){
                    player.unmarkSkill('xwj_xhuoying_renfa');
                }
                else{
                    player.syncStorage('xwj_xhuoying_renfa');
                    player.markSkill('xwj_xhuoying_renfa');
                    if(player.isOnline2()){
                        player.send(function(storage){
                            game.me.storage.xwj_xhuoying_renfa2=storage;
                        },player.storage.xwj_xhuoying_renfa2);
                    }
                }
            }
            game.delay(2);
            if(trigger.name=='respond'){
                if(trigger.parent.result){
                    trigger.parent.result.bool=false;
                }
            }
            else{
                trigger.cancel();
            }
        }
        else{
            event.finish();
        }
        "step 2"                
         var chat=['实力破一波阴谋','雕虫小技也敢在我面前耍？'].randomGet();
            player.say(chat);        
        game.broadcastAll(ui.clear);
    },
                ai:{
                    threaten:1.8,
                    expose:0.3,
                },
            },
            "xwj_xhuoying_citan":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseUseBegin",
                },                
                locked:true,
                delay:0,
                content:function (){
        "step 0"        
       var chat=['我就看看不说话','潜入成功，幸好没人发现老夫','美女，我是来取材的','大丈夫为人坦荡，看下内裤算什么？'].randomGet();
            player.say(chat);    
        var dialog=ui.create.dialog('刺探');
        for(var i=0;i<game.players.length;i++){
             if(game.players[i]==player) continue;
             if(game.players[i].countCards('h')){
                dialog.add(get.translation(game.players[i])+'的'+'手牌');
                var hs=game.players[i].get('h');
                dialog.add(hs);                                     
             }
        }
        event.dialog=dialog;
        if(player==game.me){
            if(event.isMine()){
                game.pause();
                ui.create.confirm('o');
                    game.countChoose();
                    event.choosing=true;
            }
            else{
                event.finish();
                    event.result='viewed';
                setTimeout(function(){
                    event.dialog.close();
                },2*lib.config.duration);
                game.delayx(2);
            }
        }
        else{
            event.finish();
        }        
        "step 1"
            event.result='viewed';
        _status.imchoosing=false;
            event.choosing=false;
        if(event.dialog) event.dialog.close();                        
    },
            },
            "xwj_xhuoying_changsheng":{
                audio:"ext:群英会:2",
                enable:"chooseToUse",
                priority:10,
                filter:function (event,player){
        if(event.type!='dying') return false;
        if(player!=event.dying) return false;
        if(player.maxHp<1) return false;      
        return true;
    },             
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                content:function (){
        'step 0' 
        player.draw();
        player.$skill('借尸转生','fire','red','avatar');
        'step 1'
        player.chooseToCompare(target);          
          var chat=['人若死了，就什么都没了，只要活着，总会发现有趣的东西','人，真是脆弱的生命！','太完美了，果然，我还是想得到你的身体'].randomGet();
            player.say(chat);          
        'step 2'
        if(!result.bool){
            player.recover(Infinity);
            //player.draw();
            player.loseMaxHp();            
            player.turnOver();            
            event.finish();
        }
        else{
            event.num=target.hp-player.hp;      
        }
        'step 3'      
        player.changeHp(event.num);
        if(player.maxHp<5){
        player.gainMaxHp();
        }           
     //   if(get.is.altered('xwj_xhuoying_changsheng')){
          //  event.finish();
       // }
        'step 4'
        event.target.changeHp(-event.num);
        'step 5'
        if(event.target.hp<=0){
            event.target.dying({source:player});
        }
      
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.maxHp<1) return false;
            if(player.hp>0) return false;
         
        },
                    save:true,
                    result:{                    
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
                        player:1,
                    },
                    threaten:0.2,
                },
            },
            "xwj_xhuoying_rechendun":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                //alter:true,
                filterTarget:function (card,player,target){
                 if(target.countDisabled()>=5) return false;
              //    if(target.storage.lose_pos_equip.length>=5) return false;        
        return player!=target&&target.countCards('h')>0 ;
    },
	check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){               
        'step 0'
        player.chooseToCompare(target);        
        var chat=['尘遁•原界剥离之术','你已老了，大野木'].randomGet();
            player.say(chat);        
        'step 1'
        if(result.bool){  
            var list=['equip1','equip2','equip3','equip4','equip5'];
            for(var i=0;i<list.length;i++){
               if(target.isDisabled(list[i])){
               list.remove(list[i--]);
               }
            }
           target.disableEquip(list.randomGet());
       // target.disableEquip(['equip1','equip2','equip3','equip4','equip5'].randomGet());

        }
        else{
            target.damage();      
            event.finish();
        }    
        
       /* 'step 2'
    			var list=['武器栏','防具栏','防御马','攻击马','宝物栏'];
    		//	var list=[];
    	//   if(!target.storage.rechendun1) list.push('武器栏');
    //			if(!target.storage.rechendun2) list.push('防具栏');
    		//	if(!target.storage.rechendun3) list.push('防御马');
    //			if(!target.storage.rechendun4) list.push('攻击马');
    //			if(!target.storage.rechendun5) list.push('宝物栏');
    			
    	 	var list1=['equip1','equip2','equip3','equip4','equip5'];
							for(var i=0;i<target.storage.lose_pos_equip.length;i++){
								list1.remove(target.storage.lose_pos_equip[i]);
							};
							player.chooseControl(list).set('ai',function(event){
								if(list1.contains('equip1')) return '武器栏';
								if(list1.contains('equip2')&&target.get('e','2')!=undefined) return '防具栏';
								if(list1.contains('equip3')) return '防御马';
								if(list1.contains('equip4')) return '攻击马';
								if(list1.contains('equip5')) return '宝物栏';
							}).set('prompt','请选择需要废除的栏位');
							'step 3'
							if(result.control=='武器栏'){							
								target.lose_pos_equip('equip1');
							// target.storage.rechendun1=true;
							};
							if(result.control=='防具栏'){
								target.lose_pos_equip('equip2');					
								//target.storage.rechendun2=true;								
							};
							if(result.control=='防御马'){								
								target.lose_pos_equip('equip3');					
						 	//target.storage.rechendun3=true;	
							};
							if(result.control=='攻击马'){															
								target.lose_pos_equip('equip4');
								//target.storage.rechendun4=true;
							};
							if(result.control=='宝物栏'){							
								target.lose_pos_equip('equip5');
								//target.storage.rechendun5=true;
							};
							*/
    },
                ai:{
                    threaten:1.3,
             result:{
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
        },
                    order:9,
                },
            },
            "xwj_xhuoying_wuchen":{
                audio:"ext:群英会:2",
                forced:true,
              //  noLose:true,
              //  noGain:true,
             //   noDeprive:true,
              //  locked:true,
             //   noRemove:true,
              //  noDisable:true,				                               
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){   
        return player.countCards('h')<1;
    },
                content:function (){                
        var chat=['做人要低调，无声无息，方能闷声发大财','快让感知型忍者感知我，否则你死定了'].randomGet();
            player.say(chat);         
          player.node.name.innerHTML='';
	          player.update();          
    trigger.cancel();
    event.finish();
},
                ai:{
                    notrick:true,
                    nosha:true,
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "xwj_xhuoying_rexianshu":{
                audio:"ext:群英会:2",
                forced:true,
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')>0) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw(player.hp);
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            "xwj_xhuoying_shunsheng":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        var chat=['老虎不发威，当老子是病猫是吧？——瞬身之术','我的瞬身之术没有实体，但同时又可以说所有的都是实体'].randomGet();
            player.say(chat);    
        var list=game.filterPlayer(function(target){
                        return target!=player&&!target.isMad();
                    });
                    if(list.length){
                        var target=list.randomGet();
                        game.swapSeat(player,target);                           
                    }
    },
            },
            "xwj_xhuoying_renfa3":{
                enable:"phaseUse",
                usable:1,
                lose:false,
                delay:false,
                selectCard:[1,Infinity],
                filterCard:true,
                filter:function (event,player){
        return player.storage.xwj_xhuoying_renfa.length>0;
    },
                prompt:"用任意数量的手牌与等量的“忍”交换",
                content:function (){
        "step 0"
        player.lose(cards,ui.special)._triggered=null;
        player.storage.xwj_xhuoying_renfa=player.storage.xwj_xhuoying_renfa.concat(cards);
        player.chooseCardButton(player.storage.xwj_xhuoying_renfa,'选择'+cards.length+'张牌作为手牌',cards.length,true).ai=function(button){
            return get.value(button.link);
        }
        if(player==game.me&&_status.auto){
            game.delay(0.5);
        }
        "step 1"
        player.gain(result.links)._triggered=null;
        for(var i=0;i<result.links.length;i++){
            player.storage.xwj_xhuoying_renfa.remove(result.links[i]);
        }
        game.addVideo('storage',player,['xwj_xhuoying_renfa',get.cardsInfo(player.storage.xwj_xhuoying_renfa),'cards']);
    },
                ai:{
                    order:5,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_reshouhu":{
                //mode:["identity"],
                audio:"ext:群英会:2",
                enable:"phaseUse",
                unique:true,
                changeControl:true,
                init:function (player){
        player.storage.xwj_xhuoying_reshouhu=false;
    },
                intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{color:'red'})&&player.identity!='zhu'&&target.identity!='zhu';
    },
                //filterCard:{
                    //color:"red",
                //},
                //check:function (card){
        //return 4-get.value(card);
    //},
                content:function (){ 
        'step 0'				
        var chat=['在黑暗中维护和平的无名忍者，才称得上忍者','替我保护村子，还有宇智波的名号'].randomGet();
            player.say(chat);          
        player.storage.xwj_xhuoying_reshouhu=true;
        player.$skill('别天神','fire','red','avatar');
		//var target=result.targets[0];
		var cards=player.getCards('h',function(card){
                return player.countCards('h');       
            });                                       
			player.$give(cards,target);
            target.gain(cards,player);
			player.logSkill('xwj_xhuoying_reshouhu',target);
        game.delay(0.5);	
        'step 1'		
        game.swapControl(target);       
       // game.swapControl(player,target);     
        if(get.mode()=='identity'){       
        var myid=player.identity;                              
                target.identity=myid;
                target.setIdentity();      
                }    
        player.awakenSkill('xwj_xhuoying_reshouhu');
        player.die();
    },
                ai:{
                    order:5,                     
                     threaten:0.8,                                                                                                 
                    result:{
                    target:function (player,target){
                return get.damageEffect(target,player);
            }, 
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_linghua":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,              
                unique:true,
                changeControl:true,
                changePlayer:true,           
                intro:{
                    content:"limited",
                },           
                filter:function (event,player){
        return player.countCards('h',{type:'basic'})>0;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filterCard:{
                    type:"basic",
                },
                check:function (card){
        return 7-get.value(card);
    },
    	derivation:['xwj_xhuoying_huihun'],
                content:function (){   
        'step 0'
        var chat=['灵化之术！！！','借你的身体用一阵子'].randomGet();
            player.say(chat);    
        player.$fullscreenpop('灵化之术','water');  
        target.damage();               
        target.addSkill('xwj_xhuoying_huihun');   
        target.storage.xwj_xhuoying_huihun=player;                                                  
        player.removeSkill('xwj_xhuoying_linghua');                
        game.swapPlayer(target);
        //game.swapPlayer(player,target);   
        'step 1'
        var evt=_status.event.getParent('phase');
        if(evt){
            game.resetSkills();
            _status.event=evt;
            _status.event.finish();
            _status.event.untrigger(true);
        }
    },
       mod:{
                    globalTo:function (from,to,distance){
            return distance+to.hp;
        },
                },
                ai:{
                    order:5,
                    result:{                   
                    target:function (player,target){
                return get.damageEffect(target,player);
            },                  
                    },
                },
            },
            
                "xwj_xhuoying_huihun":{
                audio:"ext:群英会:2",
                unique:true,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                silent:true,
                onremove:true,
                changePlayer:true,
                changeControl:true,
                filter:function (event,player){
        return player.storage.xwj_xhuoying_huihun&&player.storage.xwj_xhuoying_huihun.isIn();
    },
                content:function (){          
        var chat=['灵化之术————归位！！！','终于回来了，刚才真危险啊！'].randomGet();
               player.say(chat);        
        var target=player.storage.xwj_xhuoying_huihun;       
       //var target=game.findPlayer(function(current){
     //   return current.name=='xwj_xhuoying_duan';
     //    });
        //player.line(target,'green');                  
        target.addSkill('xwj_xhuoying_linghua');                     
        game.swapPlayer(target);                    
        player.removeSkill('xwj_xhuoying_huihun');     
    },             
            },
            
            "xwj_xhuoying_aiyuan":{
                audio:"ext:群英会:2",
                trigger:{
                    global:["loseHpEnd","loseMaxHpEnd"],
                },
                direct:true,
                filter:function (event,player){
        return _status.currentPhase==event.player;
    },
                content:function (){
        'step 0'
        if(player==trigger.player){
            player.chooseControl('你摸两张','其摸两张','cancel2',function(){
                return '其摸两张';
            }).set('prompt',get.prompt('xwj_xhuoying_aiyuan'));
            event.single=true;
        }
        else{
            player.chooseTarget(get.prompt('xwj_xhuoying_aiyuan'),function(card,player,target){
                return target==_status.event.player||target==_status.event.target;
            }).set('target',trigger.player).set('ai',function(target){
                var player=_status.event.player;
                if(player==target) return 1;
                return get.attitude(player,target)-1.5;
            });
        }
        'step 1'
        if(event.single){
            if(result.control!='cancel2'){
                player.logSkill('xwj_xhuoying_aiyuan',player);
                if(result.control=='你摸两张'){
                    player.draw(2);
                }
                else{
                    player.draw(2);
                    player.storage.xwj_xhuoying_aiyuan=player;
                }
            }
        }
        else if(result.bool){
            var target=result.targets[0];
            player.logSkill('xwj_xhuoying_aiyuan',target);
            if(target==player){
                target.draw(2);
            }
            else{
                target.draw(2);
                if(target.storage.xwj_xhuoying_aiyuan){
                    target.storage.xwj_xhuoying_aiyuan.add(player);
                }
                else{
                    target.storage.xwj_xhuoying_aiyuan=[player];
                }
            }
        }
    },
                ai:{
                    expose:0.1,
                },
            },
        
            "xwj_xhuoying_jiaoji":{
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                filter:function (event,player){
        return player!=event.player&&event.num>0;
    },
                direct:true,
                audio:"ext:群英会:2",
                content:function (){
        'step 0'
        event.num=trigger.num;
        'step 1'               
        player.chooseDrawRecover(get.prompt('xwj_xhuoying_jiaoji')).set('logSkill','xwj_xhuoying_jiaoji');                  
        'step 2'          
        var chat=['我的大屌……噢，不好意思，刚才不小心瞎说大实话了……是我的大刀早已饥渴难耐了','我的鲛肌能削掉查克拉，并且吃掉'].randomGet();
            player.say(chat);   
        player.storage.xwj_xhuoying_jiaoji;    
        if(result.control!='cancel2'){
            event.num--;            
        }
    },
            },
            "xwj_xhuoying_shuilao":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
        if(get.attitude(player,event.player)<-2){
            var cards=player.getCards('h');
            if(cards.length>player.hp) return true;
            for(var i=0;i<cards.length;i++){
                var useful=get.useful(cards[i]);
                if(useful<5) return true;
                if(cards[i].number>9&&useful<7) return true;
            }
        }
        return false;
    },
                logTarget:"player",
                filter:function (event,player){
        return player.hp<=player.countCards('e')&&event.player!=player&&
            player.countCards('h')>0&&event.player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(trigger.player);
        "step 1"
        if(result.bool){            
            var chat=['给我老实呆着吧，水遁•水牢之术','同为雾忍村忍者，却要残杀同伴，我究竟算什么人？目的是什么？唯一的切身体会只有虚假'].randomGet();
            player.say(chat);              
            trigger.player.addTempSkill('zishou2');
        }
    },
     ai:{
                    order:6,
    result:{
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
        },
        },
            },
            "xwj_xhuoying_relianhua":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){        
    var chat=['我要贯彻我的忍道：只要努力，即使不会忍术也能打败天才！','这招本来是为了打败宁次而准备的，今天破例让你见识见识'].randomGet();
        player.say(chat);      
        if(game.roundNumber<=5){        
        trigger.num+=Math.ceil(game.roundNumber/2);
        }
        else{
        trigger.num+=Math.floor(game.roundNumber/3);
        }
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
                },
            },
            "xwj_xhuoying_rexuanfeng":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },    
                content:function (){        
    var chat=['凯老师，请你认同我吧！','在木叶村的下忍中，目前我是最强的'].randomGet();
        player.say(chat);       
        if(player.isMaxHandcard()){   
        trigger.num++;
        }
    },
            },
            "xwj_xhuoying_jiaodan":{
                audio:"ext:群英会:3",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.hasSkill('xwj_xhuoying_jiaodan2')==false;
    },
                filterCard:function (){
        if(ui.selected.targets.length) return false;
        return true;
    },
                position:"he",
                selectCard:[1,Infinity],
                complexSelect:true,
                complexCard:true,
                filterTarget:function (card,player,target){
        return target!=player&&ui.selected.cards.length==target.hp;
    },
                check:function (card){
        switch(ui.selected.cards.length){
            case 0:return 7-get.value(card);
            case 1:return 6-get.value(card);
            case 2:return 3-get.value(card);
            default:return 0;
        }
    },
                content:function (){
        "step 0"        
        var chat=['不吹不黑，忍刀七人众里，我最牛逼','吃我一招，水遁•水鲛弹之术','对手越强大，我就会变得更强大，不会疲倦也不会倒下'].randomGet();
            player.say(chat);      
        player.addSkill('xwj_xhuoying_jiaodan3');
        target.damage();
        "step 1"
        if(!player.hasSkill('xwj_xhuoying_jiaodan3')){
            player.addSkill('xwj_xhuoying_jiaodan2');
            player.draw();
        }
        else{
            player.removeSkill('xwj_xhuoying_jiaodan3');
        }
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "xwj_xhuoying_jiaodan2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                audio:"ext:群英会:2",
                content:function (){
        player.removeSkill('xwj_xhuoying_jiaodan2');
    },
            },
            "xwj_xhuoying_jiaodan3":{
                audio:"ext:群英会:1",
                trigger:{
                    global:"dying",
                },
                priority:15,
                silent:true,
                filter:function (event,player){
        return event.reason&&event.reason.getParent().name=='xwj_xhuoying_jiaodan';
    },
                content:function (){
        player.removeSkill('xwj_xhuoying_jiaodan3');
    },
                forced:true,
                popup:false,
            },
            "xwj_xhuoying_leidun":{
                audio:"ext:群英会:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:'enterGame',
                },
                forced:true,
                unique:true,
                content:function (){        
    var chat=['这里是哪里？我怎么会在这？','老子当年曾肉搏单挑八尾尾兽，也曾以一敌万'].randomGet();
            player.say(chat);  
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;  
            var num=game.players[i].maxHp;
            var num2=Math.floor(num/2);            
            player.maxHp+=num2;            
        }
        player.hp=player.maxHp;
        player.update();
    },
                ai:{
                    threaten:0.8,
                },
            },
            "xwj_xhuoying_yingmo":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){      
    var chat=['影子模仿术，成功得手','真麻烦！'].randomGet();
        player.say(chat);  
        var skill=trigger.player.skills.randomGet()
        player.addTempSkill(skill,{player:'phaseUseBegin'});
    },
            },
            "xwj_xhuoying_zhimou":{
                group:["xwj_xhuoying_zhimou1","xwj_xhuoying_zhimou2","xwj_xhuoying_zhimou3","xwj_xhuoying_zhimou4","xwj_xhuoying_zhimou5","xwj_xhuoying_zhimou6","xwj_xhuoying_zhimou7"],
            },
            "xwj_xhuoying_zhimou1":{
                audio:"ext:群英会:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '仁慈：将'+get.cnNumber(Math.max(1,1))+'张红桃牌当作无中生有使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"wuzhong",
                    suit:"heart",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":5,"name":"qilin","cardid":"1155988392","_transform":"translateX(112px)","clone":{"name":"qilin","suit":"heart","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":4721},"timeout":4686,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "xwj_xhuoying_zhimou2":{
                audio:"ext:群英会:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '勇敢：将'+get.cnNumber(Math.max(1,1))+'张方片当作决斗使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"juedou",
                    suit:"diamond",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":3,"name":"shan","cardid":"7565680288","clone":{"name":"shan","suit":"diamond","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true},"original":"h","_transform":"translateX(112px)","timeout":6421}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                ai:{
                    basic:{
                        order:5,
                        useful:1,
                        value:4.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)<0&&get.attitude(target,player)<0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "xwj_xhuoying_zhimou3":{
                audio:"ext:群英会:1",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '破解：将'+get.cnNumber(Math.max(1,1))+'张黑桃牌当作无懈可击使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 7-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"wuxie",
                    suit:"spade",
                    number:2,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":2,"name":"tengjia","nature":"fire","cardid":"6175659371","_transform":"translateX(336px)","clone":{"name":"tengjia","suit":"spade","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3999},"timeout":3960,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'spade'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "xwj_xhuoying_zhimou4":{
                audio:"ext:群英会:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '冷静：将'+get.cnNumber(Math.max(1,1))+'张梅花牌当作过河拆桥打出';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"guohe",
                    suit:"club",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":5,"name":"dilu","cardid":"3346191394","_transform":"translateX(112px)","clone":{"name":"dilu","suit":"club","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":5755},"timeout":5725,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'club'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 2;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "xwj_xhuoying_zhimou5":{
                audio:"ext:群英会:1",
                enable:["chooseToUse","chooseToRespond"],
                filterCard:function (card){
        return get.type(card)=='basic';
    },
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":7,"name":"tao","cardid":"5476407286","clone":{"name":"tao","suit":"heart","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":504},"timeout":470,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{type:'basic'})) return false;
    },
                filter:function (event,player){
        return player.countCards('h',{type:'basic'})>=1;
    },
                prompt:"报仇：将一张基本牌当杀使用或打出",
                ai:{
                    threaten:1.5,
                    respondSha:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
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
            "xwj_xhuoying_zhimou6":{
                audio:"ext:群英会:1",
                enable:"chooseToRespond",
                filterCard:function (card){
        return get.type(card)=='equip';
    },
                viewAs:{
                    name:"shan",
                    suit:"diamond",
                    number:1,
                },
                position:"he",
                viewAsFilter:function (player){
        if(!player.countCards('he',{type:'equip'})) return false;
    },
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>=1;
    },
                prompt:"闪避：将一张装备牌当闪打出",
                ai:{
                    threaten:1.5,
                    respondShan:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "xwj_xhuoying_zhimou7":{
                audio:"ext:群英会:1",
                enable:"chooseToUse",
                usable:1,
                filterCard:function (card){
        return get.type(card)=='trick';
    },
                filter:function (event,player){
        return player.countCards('h',{type:'trick'})>=1;
    },
                viewAs:{
                    name:"shunshou",
                    suit:"heart",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":3,"name":"wugu","cardid":"6609619362","clone":{"name":"wugu","suit":"heart","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3700},"timeout":3672,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{type:'trick'})) return false;
    },
                prompt:"影缚：将一张锦囊牌当顺手牵羊使用",
                check:function (card){     
        return 4-get.value(card);
    },
                ai:{
                    threaten:1.5,
                    order:8,
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                    basic:{
                        order:7.5,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)<=0) return (target.countCards('he')>0)?-1.5:1.5;
                var js=target.getCards('j');
                if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='shunshou') return 3;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                        return -1.5;
                    }
                    return 3;
                }
                return -1.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                    return 0;
                }
                if(get.attitude(player,target)>1){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='shunshou') return 1;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
                            return 0;
                        }
                        return 1;
                    }
                    return 0;
                }
                return 1;
            },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
           

            "xwj_xhuoying_wanshe":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"chooseCardBegin",
                },
                check:function (event,player){
        return player.hasCard(function(card){
            var val=get.value(card);
            return val<=4&&card.number>=10;
        });
    },
                filter:function (event,player){
        return event.type=='compare'&&!event.directresult;
    },
                content:function (){                
          var chat=['万蛇，助我一臂之力','养蛇千日，用在一时'].randomGet();
            player.say(chat);           
        var cards=get.cards();
        ui.discardPile.appendChild(cards[0]);
        cards[0].vanishtag.add('xwj_xhuoying_wanshe');
        trigger.directresult=cards;
        trigger.untrigger();
    },
                group:"xwj_xhuoying_wanshe_number",
                subSkill:{
                    number:{
                        trigger:{
                            player:"compare",
                            target:"compare",
                        },
                        filter:function (event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.color(event.card1)=='black';//&&event.card1.vanishtag.contains('xwj_xhuoying_wanshe');
                }
                else{
                    return get.color(event.card2)=='black';//&&event.card2.vanishtag.contains('xwj_xhuoying_wanshe');
                }
            },
                        silent:true,
                        content:function (){                
  var chat=['太给力了'].randomGet();
            player.say(chat);   
               game.log(player,'拼点牌点数视为','#y13');
                if(player==trigger.player){
                    trigger.num1=13;
                }
                else{
                    trigger.num2=13;
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "xwj_xhuoying_kuilei":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                filter:function (event,player){
        return event.player.isDead();
    },
                content:function (){                  
          var chat=['永恒的，才是艺术','下一个艺术品，就是你了'].randomGet();
            player.say(chat);                   
        trigger.player.storage.xwj_xhuoying_kuilei=true;
        player.logSkill('xwj_xhuoying_kuilei');
        var skills=[];
        for(var i=0;i<game.dead.length;i++){
            var skill=game.dead[i].get('s',false,false).randomGet();
            skills.push(skill);
        }
        player.addAdditionalSkill('xwj_xhuoying_kuilei',skills);
    },
            },
            "xwj_xhuoying_baiji":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                frequent:true,
                content:function (){        
         var chat=['我曾用这个术，毁灭一个国家！','赤秘技•百机操演'].randomGet();
            player.say(chat);         
            player.gain(get.cardPile(function(card){
            return get.type(card,'equip')=='equip';
        }),'gain2');
    },
                ai:{
                    order:6,
                    maixie:true,
                    threaten:1.3,
                },
            },       
 "xwj_xhuoying_shuidun":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"damageBefore",
                },
                filter:function (event,player){
        return event.nature=='fire';
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){                             
        var chat=['大禹也治不了我的水遁。让你见识一下木叶村第一水逼的厉害','我不是针对谁，我是说……在座的各位，都是垃圾！'].randomGet();
            player.say(chat);      
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'fireDamage')) return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_yiliao":{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:群英会:2",
                filter:function (event,player){
        return event.player.hp<=0&&event.player.countCards('he')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        if(trigger.player.isUnderControl(true,player)){
            check=player.hasCard(function(card){
                return get.type(card)=='equip';
            });
        }
        else{
            check=(get.attitude(player,trigger.player)>0);
        }
        player.choosePlayerCard(trigger.player,get.prompt('xwj_xhuoying_yiliao',trigger.player),'he').set('ai',function(button){
            if(!_status.event.check) return 0;
            if(_status.event.target.isUnderControl(true,_status.event.player)){
                if(get.type(button.link)=='equip'){
                    return 10-get.value(button.link);
                }
                return 0;
            }
            else{
                return Math.random();
            }
        }).set('check',check).set('filterButton',function(button){
            if(_status.event.player==_status.event.target){
                return lib.filter.cardDiscardable(button.link,_status.event.player);
            }
            return true;
        });
        "step 1"        
         var chat=['趁你病，要你病','你不能死，有我在，我绝不会让你轻易死的','你的梦想就要实现了，要给我坚持住！'].randomGet();
            player.say(chat);    
        if(result.bool){
            player.logSkill('xwj_xhuoying_yiliao',trigger.player);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(player)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.type(event.card)=='equip'){
            trigger.player.recover(1-trigger.player.hp);
            trigger.player.discard(event.card);                 
        }
        else{
            player.gain(event.card);
        }
    },
                ai:{
                save:true,
                    threaten:1.4,
                    order:9,
                    result:{
                        player:function (player){
    if(player.hp<1) return 10;
  
            },
                    },
                },
            },
            "xwj_xhuoying_jinshu":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
               derivation:['xwj_xhuoying_fenshen','xwj_xhuoying_shanguang','xwj_xhuoying_zhuansheng'],               
                content:function (){
    var chat=['影分身术、飞雷神、秽土转生，这些禁术都是我搞出来的玩意好嘛！','我二代火影博学多才，岂是徒有虚名？'].randomGet();
            player.say(chat);          
        player.removeSkill(player.storage.xwj_xhuoying_jinshu);
        player.logSkill('xwj_xhuoying_jinshu');
        switch(Math.floor(Math.random()*3)){
            case 0:if(lib.skill.xwj_xhuoying_fenshen){player.addSkill('xwj_xhuoying_fenshen'); player.storage.xwj_xhuoying_jinshu='xwj_xhuoying_fenshen';player.popup('xwj_xhuoying_fenshen');}break;
            case 1:if(lib.skill.xwj_xhuoying_shanguang){player.addSkill('xwj_xhuoying_shanguang'); player.storage.xwj_xhuoying_jinshu='xwj_xhuoying_shanguang';player.popup('xwj_xhuoying_shanguang');}break;
            case 2:if(lib.skill.xwj_xhuoying_zhuansheng){player.addSkill('xwj_xhuoying_zhuansheng'); player.storage.xwj_xhuoying_jinshu='xwj_xhuoying_zhuansheng';player.popup('xwj_xhuoying_zhuansheng');}break;                       
        }
    },
            },
            "xwj_xhuoying_baoli":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"                
        if(result.bool){  
          var chat=['我是纲手的弟子，力量与脾气一样大','鸣人、佐助都玩拼点，怎能少了我？'].randomGet();
           player.say(chat);   
           player.addTempSkill('xwj_xhuoying_baoli2',{player:'phaseBefore'});
           player.addTempSkill('xwj_xhuoying_baoli3',{player:'phaseBefore'});            
        }       
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },              
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
                    },
                    threaten:1.3,
                },
            },
            "xwj_xhuoying_baoli2":{
                audio:"ext:群英会:1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
    },
                forced:true,
                content:function (){       
         var chat=['颤抖吧！这是来自少女的力量','女汉子，当自强'].randomGet();
            player.say(chat);   
        trigger.num++;
    },
            },
            "xwj_xhuoying_baoli3":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
    return event.target.countCards('he')>0;
    },
                check:function (event,player){
    return ai.get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
  player.discardPlayerCard(trigger.target,1,'he',true);
    },
                ai:{
                    threaten:1.5,
                },
            },
            "xwj_xhuoying_baofu1":{
                audio:"ext:群英会:2",
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        var chat=['放个炮仗庆贺一下','互乘起爆符！'].randomGet();
            player.say(chat);  
        target.damage("fire");
    },
                ai:{
                    order:4,
                    result:{
                        target:-1,
                    },
                },
            },
            "xwj_xhuoying_baofu2":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"damageAfter",
                },
                direct:true,
                filter:function (event,player){
        return event.nature=='fire'&&player.countCards('he',{suit:'diamond'})>0;
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function(card){
                return get.suit(card)=='diamond';
            },
            filterTarget:function(card,player,target){
                return get.distance(trigger.player,target)<=1;
            },
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                return get.damageEffect(target,player,player,'fire');
            },
            position:'he',
            prompt:'互乘起爆符之术：弃置一张方片牌对目标或与其距离为1以内的目标造成等量火焰伤害'
        });
        "step 1"       
         var chat=['炸死你哋呢班扑街烂坦','这个禁术，我也是第一次亲自近距离使用'].randomGet();
            player.say(chat);   
         if(result.bool){
            player.logSkill('xwj_xhuoying_baofu2',result.targets[0],'fire');
            player.discard(result.cards[0]);
            result.targets[0].damage('fire',trigger.num);
        }
    },
            },
            "xwj_xhuoying_baofu":{
                group:["xwj_xhuoying_baofu1","xwj_xhuoying_baofu2"],
            },
            "xwj_xhuoying_wuyin":{
                audio:"ext:群英会:2",
                forced:true,
             //  	noLose:true,
              //  noGain:true,
             //   noDeprive:true,
               // locked:true,
             //   noRemove:true,
            //    noDisable:true,				
                marktext:"雾",
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        return player.isTurnedOver();
    },    
                content:function (){                
        var chat=['隐身于雾中，杀人于无形','在这片大雾里，无影无踪，没人能发现我'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
                ai:{
                    order:5,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "xwj_xhuoying_ansha":{
                audio:"ext:群英会:2",
                usable:1,
                srlose:true,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he')>0;
    },
                content:function (){
        'step 0'    
        target.chooseToDiscard('he',true);           
        var chat=['早就看你不顺眼了','来啊，来打我呀，不服气是吧？','和我一起沉睡吧'].randomGet();
            player.say(chat);   
        player.turnOver();
        target.turnOver();  
        target.addTempSkill('fengyin');
          'step 1'
        player.chooseCardTarget({
            prompt:get.prompt('xwj_xhuoying_ansha'),
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                return get.effect(target,{name:'sha'},player);
            },
            filterTarget:function(card,player,target){
                return lib.filter.targetEnabled({name:'sha'},player,target);
            },
        });  
        'step 2'
        if(result.bool){                  
        player.logSkill('xwj_xhuoying_ansha');
        player.discard(result.cards);          
        player.useCard({name:'sha'},result.targets,false);              
         var chat=['作为一名忍者，暗杀是一种手段，也是一种生存方式','我叫桃地再不斩，以无声杀人术闻名于忍界'].randomGet();
            player.say(chat); 
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:9,     
                    threaten:1.5,  
                    expose:0.8,                                             
                    result:{
                     /*   player:function (player){
                if(ui.selected.cards.length>0){
                    if(player.isTurnedOver()) return 3;
                    if(!player.isTurnedOver()) return -4
                }
                if(ui.selected.cards.length==0){
                    if(player.isTurnedOver()) return 4;
                    if(!player.isTurnedOver()) return -3;
                }
            },*/
                       target:function (player,target){
                if(!target.isTurnedOver()) return -3.5;
                if(target.isTurnedOver()&&get.attitude(player,target)>0) return 4.5;
                return -0.1;
            },
                    },
                },
            },
            "xwj_xhuoying_reshuilao":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
        if(get.attitude(player,event.player)<-2){
            var cards=player.getCards('h');
            if(cards.length>player.hp) return true;
            for(var i=0;i<cards.length;i++){
                var useful=get.useful(cards[i]);
                if(useful<5) return true;
                if(cards[i].number>9&&useful<7) return true;
            }
        }
        return false;
    },
                logTarget:"player",
                filter:function (event,player){
        return player.isTurnedOver()&&event.player!=player&&
            player.countCards('h')>0&&event.player.countCards('h')>0;;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(trigger.player);
        "step 1"
        if(result.bool){           
            var chat=['呼～终于恢复自由身，差点闷死自己','给我老实呆着吧，水遁•水牢之术','既然那么想进牢里，那就别想出来了'].randomGet();
            player.say(chat); 
            player.turnOver();
            trigger.player.addTempSkill('zishou2');
        }
    },
     ai:{
                    order:6,
    result:{
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
        },
        },
            },
            "xwj_xhuoying_huadie":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.isMaxHandcard(true);
    },
                content:function (){        
    var chat=['多少遍了？不要再说我肥','不要抢走我的薯片'].randomGet();
        player.say(chat);           
        trigger.num++;
    },
            },
            "xwj_xhuoying_beihua":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:3,
                filter:function (event,player){
        return player.isAlive();
    },
                check:function (event,player){
        if(player.hp>0){            
        return true;
        }
    },
                init:function (player){
        player.storage.xwj_xhuoying_beihua=0;
    },
                content:function (){
        "step 0"
        player.storage.xwj_xhuoying_beihua++;
        event.cards=get.cards(player.storage.xwj_xhuoying_beihua);
        player.showCards(event.cards);
        "step 1"
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club'){
                num++;              
               
            }
        }
        if(num){
            player.recover(num);
        }
        "step 2"
var chat=['猥琐发育一发','这叫强壮不是胖！再说胖子就揍死你'].randomGet();
            player.say(chat); 
        if(event.cards.length){
            player.gain(event.cards);
            player.$gain2(event.cards);
            game.delay(0.5);
        }
    },
                ai:{
                    order:6,
                    result:{
                        player:function (player){
                if(player.countCards('h')<2*player.getHandcardLimit()){
                    return 1;
                }
                return 0;
            },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            return num-player.storage.xwj_xhuoying_beihua;
        },
                },
                group:["xwj_xhuoying_beihua2"],
            },
            "xwj_xhuoying_beihua2":{
                trigger:{
                    player:"phaseAfter",
                },
                silent:true,
                content:function (){
        player.storage.xwj_xhuoying_beihua=0;
    },
                forced:true,
                popup:false,
            },
            "xwj_xhuoying_zhuanxin":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                changeControl:true,
                skillAnimation:true,
                animationStr:"心转心之术",
                animationColor:"fire",
                 filter:function (event,player){
        return player.countCards('h',{suit:'heart'})>0;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filterCard:{
                    suit:"heart",
                },
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){          
        var chat=['心转心之术','剩下的就让我来替你完成吧'].randomGet();
            player.say(chat);               
        player.swapHandcards(target);        
       
    },
                ai:{
                   result:{
                        target:function (player,target){
                        if(player.countCards('h')>target.countCards('h')) return 0;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
                   /* order:5,                                     
                    result:{
                    target:function (player,target){
                       var att=get.attitude(player,target);          
                if(player.countCards('h')>target.countCards('h')) return 0;        
                if(get.damageEffect(target,player)) return 8;                     
                return get.damageEffect(target,player);
            },
                        player:function (player,target){
                var att=get.attitude(player,target);          
                if(player.countCards('h')>target.countCards('h')) return 0;                 
                return get.damageEffect(target,player);
            },
                    },*/
                },
            },
            "xwj_xhuoying_reyiliao":{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:群英会:2",
                filter:function (event,player){
        return event.player.hp<=0&&event.player.countCards('he')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        if(trigger.player.isUnderControl(true,player)){
            check=player.hasCard(function(card){
                return get.type(card)=='equip';
            });
        }
        else{
            check=(get.attitude(player,trigger.player)>0);
        }
        player.choosePlayerCard(trigger.player,get.prompt('xwj_xhuoying_reyiliao',trigger.player),'he').set('ai',function(button){
            if(!_status.event.check) return 0;
            if(_status.event.target.isUnderControl(true,_status.event.player)){
                if(get.type(button.link)=='equip'){
                    return 10-get.value(button.link);
                }
                return 0;
            }
            else{
                return Math.random();
            }
        }).set('check',check).set('filterButton',function(button){
            if(_status.event.player==_status.event.target){
                return lib.filter.cardDiscardable(button.link,_status.event.player);
            }
            return true;
        });
        "step 1"        
         var chat=['趁你病，要你病','你不能死，有我在，我绝不会让你轻易死的'].randomGet();
            player.say(chat);    
        if(result.bool){
            player.logSkill('xwj_xhuoying_reyiliao',trigger.player);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(player)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.type(event.card)=='equip'){
            trigger.player.recover(1-trigger.player.hp);
            trigger.player.discard(event.card);                 
        }
        else{
            player.gain(event.card);
        }
    },
                ai:{
                save:true,
                    threaten:1.4,
                    order:9,
                    result:{
                        player:function (player){
    if(player.hp<1) return 10;
  
            },
                    },
                },
            },

 "xwj_xhuoying_yuanyu":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                filter:function (event,player){
        return player.isAlive();
    },
	derivation:['xwj_xhuoying_yuanyuwind','xwj_xhuoying_yuanyufire','xwj_xhuoying_yuanyuwater','xwj_xhuoying_yuanyusoil','xwj_xhuoying_yuanyuthunder'],
                content:function (){ 
            'step 0'				
          var chat=['我跟初代火影PK过，能活到现在，就靠这个术','你的这个心脏，从现在起，就是属于我的了'].randomGet();
            player.say(chat);                   
        trigger.player.storage.xwj_xhuoying_yuanyu=true;
        player.logSkill('xwj_xhuoying_yuanyu');
var skill=trigger.player.skills.randomGet();
if(skill!='xwj_jisha'){
        player.addSkill(skill);
            player.mark(skill,{
            name:get.translation(skill),
            content:lib.translate[skill+'_info']
        });
       game.log(player,'获得技能','【'+get.translation(skill)+'】');            
        }
        	'step 1'
        if(player.maxHp<5){
        player.gainMaxHp();
        }
        player.recover();  
		player.update();
		'step 2'
		if(trigger.player.group=='wei'&&!player.hasSkill('xwj_xhuoying_yuanyuwind')){
			player.addSkill('xwj_xhuoying_yuanyuwind');
		}
		if(trigger.player.group=='shu'&&!player.hasSkill('xwj_xhuoying_yuanyufire')){
			player.addSkill('xwj_xhuoying_yuanyufire');
		}
		if(trigger.player.group=='wu'&&!player.hasSkill('xwj_xhuoying_yuanyuwater')){
			player.addSkill('xwj_xhuoying_yuanyuwater');
		}
		if(trigger.player.group=='qun'&&!player.hasSkill('xwj_xhuoying_yuanyusoil')){
			player.addSkill('xwj_xhuoying_yuanyusoil');
		}
		if(trigger.player.group!='wei'&&trigger.player.group!='shu'&&trigger.player.group!='wu'&&trigger.player.group!='qun'&&!player.hasSkill('xwj_xhuoying_yuanyuthunder')){
			player.addSkill('xwj_xhuoying_yuanyuthunder');
		}
		player.update();
    },
            },
			
			"xwj_xhuoying_yuanyuwind":{               
                enable:"phaseUse",                                            
                mark:true,
                unique:true,
                 intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                filter:function (event,player){
        return player.isAlive();
    },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
            }
            if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
            }
        });
        return num>=2;
    },
                content:function (){
        "step 0"
		player.$fullscreenpop('风遁•压害','thunder');
		game.playSu(['xwj_xhuoying_zhongquan1','xwj_xhuoying_zhongquan2'].randomGet());			
        var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.num=0;       
        player.line(targets,'green');
        "step 1"    
        event.current=player.next;
        if(num<event.targets.length){
            if(event.targets[num].countCards('hej')){
                player.discardPlayerCard(event.targets[num],'hej',true);
            }
            event.num++;
            event.redo();
        }
        "step 2"  	
    player.unmarkSkill('xwj_xhuoying_yuanyuwind');   
    player.removeSkill('xwj_xhuoying_yuanyuwind');     
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_yuanyusoil":{                             
                mark:true,
                unique:true,
                trigger:{
                    player:"damageBefore",
                },
                 intro:{
                    content:"limited",
                },
                filter:function (event,player){   
        return player.isAlive();
    },
                content:function (){                             
    player.$fullscreenpop('土遁•土矛','fire');  
	game.playSu(['xwj_xhuoying_yuanyu1','xwj_xhuoying_yuanyu2'].randomGet());
    trigger.cancel();
    player.recover();  
    player.unmarkSkill('xwj_xhuoying_yuanyusoil');
    player.removeSkill('xwj_xhuoying_yuanyusoil');
    event.finish();
},
                ai:{
                     threaten:1.3,               
                },
            },
            "xwj_xhuoying_yuanyuwater":{
                trigger:{
                    player:"recoverBegin",
                },
                unique:true,
                mark:true,                          
                 intro:{
                    content:"limited",
                },
                content:function (){
        trigger.num+=(player.maxHp-player.hp);
        player.draw();
		player.$fullscreenpop('水遁•水幕帐','water');
		game.playSu(['xwj_xhuoying_yuanyu1','xwj_xhuoying_yuanyu2'].randomGet());
        player.unmarkSkill('xwj_xhuoying_yuanyuwater');
        player.removeSkill('xwj_xhuoying_yuanyuwater');
    },
                ai:{
                    threaten:1.3,
                },
            },
            "xwj_xhuoying_yuanyuthunder":{              
                enable:"phaseUse",
                unique:true,
                mark:true,
                 intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.$fullscreenpop('雷遁•伪暗','thunder');
        target.damage("thunder");
        target.turnOver(true);
		game.playSu(['xwj_xhuoying_zhongquan1','xwj_xhuoying_zhongquan2'].randomGet());
        player.unmarkSkill('xwj_xhuoying_yuanyuthunder');
        player.removeSkill('xwj_xhuoying_yuanyuthunder');
    },
                ai:{
                    order:4,
                    result:{
                        target:-1,
                    },
                },
            },
            "xwj_xhuoying_yuanyufire":{                
                enable:"phaseUse",
                unique:true,
                logTarget:"target",
                selectTarget:[1,5],
                mark:true,
                line:"fire",
                 intro:{
                    content:"limited",
                },
                filter:function (event,player){
        return !player.storage.xwj_xhuoying_yuanyufire;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },               
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },                
                content:function (){
            player.line(target);
            	player.$fullscreenpop('火遁•头刻苦','fire');
            target.damage('fire');  		         		    
	        		game.playSu(['xwj_xhuoying_zhongquan1','xwj_xhuoying_zhongquan2'].randomGet());    
            player.unmarkSkill('xwj_xhuoying_yuanyufire');
            player.removeSkill('xwj_xhuoying_yuanyufire');
    },
                ai:{
                     order:4,
                    result:{
                        target:-1,                    
                    },
                },                            
            },
			
            "xwj_xhuoying_zhongquan":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
        return !player.isMaxHp();
    },
                content:function (){        
    var chat=['吃我一拳，看是你的骨头硬还是我的拳头硬','点解？点解？点解要逼我出手？'].randomGet();
        player.say(chat);   
        if(!player.isMaxHp()){                
        player.addTempSkill('unequip','shaAfter');
        trigger.num++;
        }
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },

            "xwj_xhuoying_newkuilei":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"loseEnd",
                },           
                priority:-5,   
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e')return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('hj')&&get.attitude(player,current)<=0;
        });
        check=(num>=1);
        player.chooseTarget(get.prompt('xwj_xhuoying_newkuilei'),[1],function(card,player,target){
            return target.countCards('hj')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){            
            player.logSkill('xwj_xhuoying_newkuilei',result.targets);
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
            trigger.untrigger();
            trigger.finish();        
        }
        else{
            event.finish();
        }
         'step 2'    
         if(result.bool){
             if(event.targets.length){
             player.gainPlayerCard(event.targets.shift(),'hj',true);
             var chat=['中远距离作战，傀儡师最擅长了','玩装备？得看看玩傀儡师的操作'].randomGet();
             player.say(chat);                 
             }
         }
        else{
            event.finish();
        }         
    },
                ai:{
                    threaten:1,
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
            "xwj_xhuoying_huomeng":{
                              trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                audio:"ext:群英会:2",
                filter:function (event,player){
        return player.countCards('e')>0;
    },
               // position:"e",
             //   filterCard:{
                   // type:"equip",
              //  },
             //   selectCard:1,
              /*  check:function (card){                     
        var player=_status.currentPhase;
        if(player.countCards('e',{subtype:get.subtype(card)})>0){
            return 7-get.equipValue(card);
        }
        return 6-get.equipValue(card);
    },*/
                content:function (){   
                'step 0'
         /*  player.chooseToDiscard(1,true,'e','请弃置一张装备区的牌').ai=function(card){
                return 7.6-get.equipValue(card);
            };   */
          //另一种写法：
      player.chooseCardButton('惑梦',player.getCards('e')).ai=function(button){
                return 7.5-get.value(button.link);
            }
     
							'step 1'					
							if(result.bool){
							player.logSkill('xwj_xhuoying_huomeng');
							event.card=result.links[[0]];
							player.discard(event.card);
        player.addTempSkill('xwj_xhuoying_huomeng2',{player:'phaseBegin'});
        player.markSkill('xwj_xhuoying_huomeng2',{player:'phaseBegin'});
        var chat=['你们慢慢玩，我先去睡一会儿','接下来，就用眼睛来场真正的较量吧'].randomGet();
            player.say(chat); 
            }
            else event.finish();
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_huomeng2":{
                audio:"ext:群英会:1",
                mark:true,
                forced:true,
                intro:{
                    content:"<font color=#f00>锁定技</font> 你防止受到属性伤害",
                },
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){   
        if(!event.nature) return true;
        return false;
    },
                content:function (){                
        var chat=['我这个伊邪那歧，能让你怀疑人生','只要有足够的写轮眼，我能免疫一切伤害'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
                ai:{
                    effect:{
                        target:function (card,player,target,current){               
                if(!get.tag(card,'natureDamage')) return [0,0];
            },
                    },
                },
            },
            "xwj_xhuoying_duoyang":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageEnd",
                },
                frequent:true,
                filter:function (event,player){
        return player.isAlive();
    },
                direct:true,
                content:function (){
        "step 0"
        var next;
        if(trigger.player.hasCard(function(card){
            return !player.getEquip(card);
        },'e')){
            next=player.chooseControl('夺取写轮眼','draw_card','cancel2',function(event,player){
                var source=_status.event.source;
                var att=get.attitude(player,source);
                if(source.hasSkillTag('noe')){
                    if(att>0){
                        return '夺取写轮眼';
                    }
                }
                else{
                    if(att<=0){
                        return '夺取写轮眼';
                    }
                }
                return 'draw_card';
            }).set('source',trigger.player);
        }
        else{
            next=player.chooseControl('draw_card','cancel2',function(){
                return 'draw_card';
            });
        }
        next.set('prompt',get.prompt('xwj_xhuoying_duoyang',trigger.player));
        "step 1"
        if(result.control=='夺取写轮眼'){
            player.logSkill('xwj_xhuoying_duoyang',trigger.player);
            var chat=['你的眼睛，我收下了','要和平，就得有人为此作出牺牲'].randomGet();
            player.say(chat);             
            player.choosePlayerCard(trigger.player,'e','获得一张装备区的牌').set('filterButton',function(button){
                return !_status.event.player.getEquip(button.link);
            });
        }
        else{
            if(result.control=='draw_card'){
                player.logSkill('xwj_xhuoying_duoyang');
                player.draw();
            }
            event.finish();
        }
        "step 2"
        if(result&&result.links&&result.links.length){
            game.delay(2);
            trigger.player.$give(result.links[0],player);
            player.gain(result.links[0]);
            player.addExpose(0.2);
        }
    },
            },
            "xwj_xhuoying_kongbo":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                priority:15,
                forced:true,
                filter:function (event,player){
        return player.countCards('e')>0&&event.player!=player;
    },
                content:function (){        
    var chat=['爷我是根的头目，装备精良','风遁•真空波'].randomGet();
        player.say(chat);  
        if(player.countCards('e')>0){
        player.addTempSkill('unequip','shaAfter'); 
        }
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            "xwj_xhuoying_sixiang":{
                audio:"ext:群英会:2",
                unique:true,
                trigger:{
                    player:"dieBegin",
                },
                filter:function (event,player){
        return event.source&&event.source.isIn()&&get.distance(player,event.source)<=1;
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                content:function (){
    var chat=['为了忍界，为了木叶，我不会让你们活着离开','就算是死都要拉个人来陪葬'].randomGet();
        player.say(chat); 
        player.$skill('四象封印','fire','red','avatar');
        trigger.source.clearSkills();
        if(trigger.source.maxHp>4) trigger.source.maxHp=4;               
    },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
          
            if(target.hp==1) return 0.2;
            return 1.5;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
                    },
                },
            },
            "xwj_xhuoying_chengyi":{
                audio:"ext:群英会:2",
                unique:true,
                gainable:true,
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
        if(event.player==player) return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i])=='equip'&&get.suit(event.cards[i])!='club'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.suit(trigger.cards[i])!='club'&&get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(cards.length){
            player.gain(cards,'log');
            player.$gain2(cards);
        }
    },
            },
            "xwj_xhuoying_yuedu2":{
                mark:true,
                unique:true,
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            "xwj_xhuoying_yuedu3":{
                mark:"character",
                onremove:true,
                unique:true,
                intro:{
                    content:"到$的距离视为1",
                },
                mod:{
                    globalFrom:function (from,to){
            if(to==from.storage.xwj_xhuoying_yuedu3){
                return -Infinity;
            }
        },
                },
            },
            "xwj_xhuoying_baozi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,         
                filter:function (event,player){
        if(event.responded) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')>0;
        });
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xwj_xhuoying_baozi'),function(card,player,target){
            if(target==player) return false;
            var nh=target.countCards('h');
            if(nh==0) return false;        
            return true;
        }).ai=function(target){
            return 1-get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('xwj_xhuoying_baozi',target);
            event.target=target;
            var cards=target.getCards('h');
            player.chooseCardButton('选择'+get.translation(target)+'的一张卡手牌打出',cards).filterButton=function(button){
                return trigger.filterCard(button.link);
            }
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            var chat=['这个孢子之术，竟没人发现','我虽为晓的侦察兵，但就隐藏、侦察能力而言，没人能胜我'].randomGet();
            player.say(chat);  
            game.log(player,'使用了',event.target,'的手牌');
            event.target.$throw(result.links);
            event.target.lose(result.links);
            trigger.untrigger();
            trigger.animate=false;
            trigger.responded=true;
            result.buttons[0].link.remove();
            trigger.result={bool:true,card:result.buttons[0].link}
        }
        else{
            event.finish();
        }
        
    },
                ai:{
                    effect:{
                        target:function (card){
                if(get.tag(card,'respondShan')) return 0.4;
                if(get.tag(card,'respondSha')) return 0.4;
            },
                    },
                },
            },
            "xwj_xhuoying_leishu":{
                audio:"ext:群英会:2",
                mod:{
                    cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;
            return Infinity;
        },
                    targetInRange:function (card,player,target){
            if(card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
            },
            "xwj_xhuoying_duanbi":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                skillAnimation:true,
                prompt:"失去一点体力并摸两张牌",
                content:function (){              
        "step 0"   
        var chat=['暴躁老哥我先自断一臂为敬','我发起火🔥来连自己都怕'].randomGet();
            player.say(chat);          
        player.loseHp(1);         
        "step 1"
        player.draw(2);
        "step 2"  
            player.addTempSkill('xwj_xhuoying_duanbi2','phaseEnd');                   
    },
                ai:{
                    order:9,
                    result:{
                        player:function (player){
    if(player.hp>3) return 2.5;
   if(player.countCards('h')>=player.hp) return 0;            
   if(player.hp>2&&player.countCards('he',{name:'zhuge'})) return 1.5;         
   if(player.hp>1&&player.countCards('h',{name:'tao'})) return 3;
                if(player.hp<3) return 0;
                return 0.5;
            },
                    },
                },
            },
            "xwj_xhuoying_duanbi2":{
                audio:"ext:群英会:1",
                trigger:{
                    source:"damageBegin",
                },
                priority:15,
                filter:function (event,player){
        return event.card&&(event.card.name=='juedou')&&event.notLink();
    },
                forced:true,
                content:function (){       
         var chat=['我这一身的肌肉💪就是力量','凡中过我一拳，没有不死的'].randomGet();
            player.say(chat);  
        player.addTempSkill('unequip','shaAfter');
        trigger.num++;
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            "xwj_xhuoying_yiwu":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                unique:true,
                skillAnimation:true,
                animationStr:"易物变化",
                animationColor:"fire",
                filterTarget:function (card,player,target){
        return player.countCards('h',{name:'wuxie'})>0;
    },
                filterCard:{
                    name:"wuxie",
                },
                content:function (){          
        var chat=['忍界的变化术，无人比得上我','连感知型的忍者也分辨不出我的变化'].randomGet();
            player.say(chat);               
        var name1=targets[0].name;
        var name2=player.name;
        player.reinit(name2,name1,false);
        player.draw(2);     
       player.update();
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);          
                if(player.countCards('h')>target.countCards('h')) return 0;                 
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_juneng":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"recoverEnd",
                },
                forced:true,
                usable:1,
                filter:function (event,player){    
        return game.hasPlayer(function(current){
            return current!=player&&player.hp<player.maxHp;
        });
    },
                content:function (){       
      var chat=['我是查克拉之祖，第一个拥有查克拉的人','把查克拉还给我'].randomGet();
        player.say(chat);   
    player.recover();
    },
                ai:{
                    threaten:0.5,
                    expose:0.2,
                    order:9,
                },
                group:"xwj_xhuoying_juneng2",
            },
            "xwj_xhuoying_yinmou":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                unique:true,
                skillAnimation:true,
                animationStr:"精神附体",
                animationColor:"fire",
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{name:'shandian'})>0;
    },
                check:function (event,player,target){
        return get.attitude(player,target)>0;
    },
                filterCard:{
                    name:"shandian",
                },
                init:function (player){
        player.storage.xwj_xhuoying_yinmou=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){          
        var chat=['我所有的努力，都是为了复活母亲','抱歉！我并不是你的意志，而是母亲辉夜姬的意志'].randomGet();
            player.say(chat);         
        player.storage.xwj_xhuoying_yinmou=true;         
        var name1=targets[0].name;
        var name2='xwj_xhuoying_huiye';
        targets[0].reinit(name1,name2,false);
        targets[0].recover();
        player.recover();        
        player.awakenSkill('xwj_xhuoying_yinmou');
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);          
                if(player.hp<2) return 0;               
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return att-att2;
                return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_zhongbao":{
                audio:"ext:群英会:2",            
                trigger:{
                    player:"useCard",
                },                               
                filter:function (event,player){                       
        if(_status.currentPhase!=player) return false;
        return player.countUsed(event.card)>1&&player.countUsed(event.card)<4;
    },
                forced:true,
                content:function (){
        var chat=['雷我爆弹！……好吧，名字是有点雷人','忍界目前我的体能最强，凯除外'].randomGet();
            player.say(chat);        
            player.draw();
            },
            },
                     
            "xwj_xhuoying_juneng2":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                usable:1,
                filter:function (event,player){    
        return game.hasPlayer(function(current){
            return current!=player;
        });
    },
                content:function (){
       var chat=['终有一天你们会明白，这个世界光说爱是不行的，得有力量','我曾经把查克拉赠予给你们，你们却要反叛我？'].randomGet();
        player.say(chat);  
    player.draw();
    },
                ai:{
                    threaten:0.3,
                    expose:0.2,
                    order:9,
                },
            },
            "xwj_xhuoying_tianyu":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,                
                mark:true,
                filter:function (event,player){
        return game.players.length>2;
    },
            content:function (){   
    var chat=['改天换地，斗转星移','天之御中'].randomGet();
        player.say(chat); 
    player.$skill('天之御中','fire','red','avatar');
        var list=[];
        for(var i=0;i<game.players.length;i++){
            if(player.isAlive()) list.push(game.players[i]);
        };
        var players=[];
        for(var i=0;i<game.players.length;i++){
            if(player.isAlive()){
                game.players[i].storage.xwj_xhuoying_tianyu=list.randomGet();
                players.push(game.players[i]);
            };
        };
        for(var i=0;i<players.length;i++){
            if(player.isAlive()){
                game.swapSeat(players[i],players[i].storage.xwj_xhuoying_tianyu);
                delete players[i].storage.xwj_xhuoying_tianyu;
            };
        };
    },
                ai:{
                    order:2,
                    result:{
                       // player:1,
                        player:function (player){
                if(ai.get.attitude(player,player.next)<=0) return 10;
                return 0;
                    },
                    },
                },
            },
            "xwj_xhuoying_baodun":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                content:function (){
        "step 0"
        var chat=['喝！……不要哑火啊！','艺术，就是爆炸'].randomGet();
        player.say(chat);   
        player.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            };
        });
        "step 1"
        game.log(player,'选择了'+get.translation(result.control));
        event.choice=result.control;
        player.popup(event.choice);
        event.card=target.getCards('h').randomGet();
        target.showCards(event.card);
        game.delay(0.5);
        "step 2"
        if(get.suit(event.card)+'2'!=event.choice){
            target.damage('fire');
               player.discardPlayerCard(target,"he",true);
        };
        if(get.suit(event.card)+'2'==event.choice){
            target.$give(event.card,player);
            player.gain(event.card,target);
        };
    },
                ai:{
                     threaten:0.8,
                    order:8,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            "xwj_xhuoying_zibao":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                unique:true,
                marktext:"爆",
                init:function (player){
        player.storage.xwj_xhuoying_zibao=false;
    },
                filter:function (event,player){
        return !player.storage.xwj_xhuoying_zibao;
    },
                content:function (){
        'step 0'
var chat=['只有瞬间的绚丽，才是艺术','这个艺术，终会得到世人的赞美'].randomGet();
        player.say(chat); 
        player.$skill('献身艺术','fire','red','avatar');
        player.awakenSkill('xwj_xhuoying_zibao');
        player.unmarkSkill('xwj_xhuoying_zibao');
        player.storage.xwj_xhuoying_zibao=true;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player) game.players[i].damage('fire');
        };   
        'step 1' 
        player.unmark('xwj_xhuoying_zibao');
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&get.distance(player,game.players[i])<=1) game.players[i].damage('fire');
        };          
        player.die();
    },
                intro:{
                    content:"limited",
                },
                ai:{
                    order:2,
                    result:{
                        player:function (player){
                if(player.hp<2) return 0.5;
                return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_huigu":{
                audio:"ext:群英会:3",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0&&get.distance(player,target,'attack')<=1;
    },
                content:function (){
        var chat=['这一次，不会再射不中','你们会像他那样一块块地烂掉'].randomGet();
        player.say(chat);         
        target.showCards(target.get('h'));
        target.addTempSkill('xwj_xhuoying_lunxue','phaseAfter');         
        player.discardPlayerCard(target,"he",true);   
    },
                ai:{
                    order:13,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            "xwj_xhuoying_feiniao":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
            },
            "xwj_xhuoying_lunxue":{
                mark:true,
                unique:true,
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },

 "xwj_xhuoying_shayu":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he')>0;
    },
                content:function (){               
     "step 0"       
        player.chooseControl('弃牌','摸牌','cancel2',function(){          
            if(player.countCards('h')>3){
                return '弃牌';
            }            
            if(player.countCards('h')<=3){
                return '摸牌';
            }
            return 'cancel2';
        });
        "step 1"                
        if(result.control=='弃牌'){
 var chat=['傀儡师本来就适合远距离作战','我竟然与一个老太婆和一个小女孩纠缠那么久，真是的'].randomGet();
            player.say(chat); 
        event.goto(2);
        }
        else if(result.control=='摸牌'){
 var chat=['让你见识下三代风影的砂铁时雨之术','三代风影曾号称最强风影，也是我最得意的傀儡'].randomGet();
            player.say(chat);   
             var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e') num+=1;
        }
        player.draw(num);
            event.finish();
        }         
        "step 2"
          if(player.isAlive()){
            player.chooseTarget('是否弃置一名角色的一张牌？',function(card,player,target){
                return player!=target&&target.countCards('he')>0;
            }).set('ai',function(target){
                var player=_status.event.player;
                if(get.attitude(player,target)<0){
                    return Math.max(0.5,get.effect(target,{name:'sha'},player,player));
                }
                return 0;
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            player.line(result.targets,'green');
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,'he',true).ai=get.buttonValue;
        }        
    },
                ai:{
                    order:7,
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
            "xwj_xhuoying_feixian":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
            },
            "xwj_xhuoying_xfenlie":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                selectCard:-1,
                position:"h",
                filterCard:true,
                prompt:"弃置所有手牌（没手牌则不须弃）并摸两张牌",
                filter:function (event,player){
        return player.countCards('h')>=0;
    },
                check:function (card){return 7-get.value(card)},
                content:function (){   
        
          var chat=['你们可要小心了','我能将身体一分为二，这不是分身术，而是分裂'].randomGet();
        player.say(chat);        
        player.draw(2);
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_reguaili3":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"dieAfter",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                filter:function (event,player){
        return event.player.isDead();
    },
                content:function (){                  
          var chat=['早就提醒过你，不要惹老娘','今日之祸，皆是你咎由自取'].randomGet();
            player.say(chat);                                 
        player.gainMaxHp();           
    },
            },
            "xwj_xhuoying_bizhu":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"loseHpEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.target)>=0;
    },
                content:function (){
        "step 0"
        player.draw();       
        trigger.player.draw();      
    },
                ai:{
                    threaten:0.5,
                },
            },
            "xwj_xhuoying_landun":{
                audio:"ext:群英会:3",
                enable:"phaseUse",
                usable:1,
                prompt:function (){
        return get.prompt('xwj_xhuoying_landun');
    },
                content:function (){
        'step 0'
        player.judge();
var chat=['我有那么谦虚？看来也不错','岚遁……'].randomGet();
        player.say(chat); 
        'step 1'
        switch(get.suit(result.card)){
            case 'spade':
                player.addTempSkill('xwj_xhuoying_landun1');
                break;
            case 'heart':
                player.addTempSkill('xwj_xhuoying_landun2');
                break;
            case 'club':
                player.addTempSkill('xwj_xhuoying_landun3');
                break;
            case 'diamond':
                player.addTempSkill('xwj_xhuoying_landun4');
                break;
        }     
        'step 2'
        player.addTempSkill('xwj_xhuoying_landun5');
        player.addTempSkill('xwj_xhuoying_landun6');       
    },
                ai:{
                    result:{
                        player:1,
                    },
                    order:11,
                },
            },
            "xwj_xhuoying_landun3":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
    return event.target.countCards('he')>0;
    },
                check:function (event,player){
    return ai.get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
        
     var chat=['不管你镀金还是镀银，都得剥落','告诫你：不要以貌取人'].randomGet();
        player.say(chat);   
        
    player.discardPlayerCard(trigger.target,1,'he',true);
    },
                ai:{
                    threaten:1.5,
                },
            },
            "xwj_xhuoying_landun1":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function (){        
    var chat=['不管你镀金还是镀银，都得剥落','告诫你：不要以貌取人'].randomGet();
        player.say(chat);           
        trigger.num++;
    },
            },
            "xwj_xhuoying_landun2":{
                mod:{
                    selectTarget:function (card,player,range){
          if(card.name=='sha'&&range[1]!=-1) range[1]++;
          },
                },
            },
            "xwj_xhuoying_landun4":{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "xwj_xhuoying_landun5":{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                },
            },
            "xwj_xhuoying_landun6":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                content:function (){  
    var chat=['真没劲','抱歉抱歉……'].randomGet();
        player.say(chat); 
          trigger.directHit=true;         
    },
            },
            "xwj_xhuoying_chunshu":{
                audio:"ext:群英会:2",
                frequent:true,
                trigger:{
                    player:"phaseEnd",
                },
                prompt:function (){
        return get.prompt('xwj_xhuoying_chunshu');
    },
                content:function (){
        'step 0'
        player.judge();
var chat=['我都说了，要打倒我，就要先找到蜃的实体','海市蜃楼，风景这边独好……'].randomGet();
        player.say(chat); 
        'step 1'
        switch(get.color(result.card)){
            case 'black':
                player.addTempSkill('xwj_xhuoying_chunshu1',{player:'phaseUseBegin'});                
                player.addTempSkill('xwj_xhuoying_chunshu3',{player:'phaseUseBegin'});               
                player.markSkill('xwj_xhuoying_chunshu1',{player:'phaseUseBegin'});                
                break;
            case 'red':
                player.addTempSkill('xwj_xhuoying_chunshu2',{player:'phaseUseBegin'});                                
                player.addTempSkill('xwj_xhuoying_chunshu3',{player:'phaseUseBegin'});               
                player.markSkill('xwj_xhuoying_chunshu2',{player:'phaseUseBegin'});
                break;           
        }             
    },
                ai:{
                    result:{
                        player:1,
                    },
                    order:11,
                },
            },
            "xwj_xhuoying_chunshu1":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"damageBefore",
                },
                intro:{
                    content:"<font color=#f00>锁定技</font> 你防止受到锦囊牌的伤害",
                },
                forced:true,
                priority:15,
                check:function (event,player){
        if(player==event.player) return true;
        return false;
    },
                filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                content:function (){
       trigger.cancel();       
    },
            },
            "xwj_xhuoying_chunshu2":{
                marktext:"杀",
                intro:{
                    content:"<font color=#f00>锁定技</font> 你不能成为【杀】的目标",
                },
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(card.name=='sha') return false;
        },
                },
            },
            "xwj_xhuoying_zhengbao":{
                audio:"ext:群英会:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"蒸危暴威",
                animationColor:"fire",
                init:function (player){
        player.storage.xwj_xhuoying_zhengbao=false;
    },
                filter:function (event,player){
        if(player.storage.xwj_xhuoying_zhengbao) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }           
    },
	derivation:['xwj_xhuoying_lianbao','xwj_xhuoying_shuipao','zbfs'],
                content:function (){
        'step 0'       
        player.discard(player.getCards('j'));
        player.draw(2);        
        player.maxHp+=4-player.maxHp;
        player.recover(3-player.hp);             
        player.awakenSkill('xwj_xhuoying_zhengbao');
        player.storage.xwj_xhuoying_zhengbao=true;       
        'step 1'
        player.link(false);
        player.turnOver(false);    
        'step 2'                     
        player.useCard(game.createCard('zbfs','diamond',4),player);      
        player.addSkill('xwj_xhuoying_lianbao');
        player.addSkill('xwj_xhuoying_shuipao');       
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(player.storage.xwj_xhuoying_zhengbao) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.xwj_xhuoying_zhengbao) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            "xwj_xhuoying_chunshu3":{
                audio:"ext:群英会:1",
                mark:true,
                forced:true,
                intro:{
                    content:"<font color=#f00>锁定技</font> 你防止受到属性伤害",
                },
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){   
        if(event.nature) return true;
        return false;
    },
                content:function (){                
        var chat=['一切如梦幻泡影','我起码是五影之一，你们可要努力封印我啊'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
                ai:{
                    effect:{
                        target:function (card,player,target,current){               
                if(get.tag(card,'natureDamage')) return [0,0];
            },
                    },
                },
            },
            "xwj_xhuoying_shuipao":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                filterCard:function (){
        if(ui.selected.targets.length) return false;
        return true;
    },
                position:"e",
                selectCard:1,
                filterTarget:function (card,player,target){
        return target!=player&&ui.selected.cards.length==1;
    },
                check:function (card){
        switch(ui.selected.cards.length){
            case 0:return 7-get.value(card);
            case 1:return 6-get.value(card);
            case 2:return 3-get.value(card);
            default:return 0;
        }
    },
                content:function (){          
        var chat=['快逃跑，我控制不住自己了','可恶！被人控制的感觉真令人不爽'].randomGet();
            player.say(chat);         
        target.damage();     
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "xwj_xhuoying_lianbao":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        if(player.hp<0) return false;
        return !game.hasPlayer(function(current){
            return current.hasJudge('zbfs');
        });
    },
                content:function (){
 var chat=['这个术能无限爆炸','下一波爆炸已准备好了'].randomGet();
            player.say(chat);    
      
        player.useCard(game.createCard('zbfs','diamond',4),player);  
    },
                ai:{
                    order:7,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_tuci":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                audio:"ext:群英会:2",
                content:function (){                                 
        var num2=player.maxHp-player.hp;
        var num3=Math.ceil(num2/4);                 
        trigger.num+=num3;       
         var chat=['三本贯手……你哋呢班粉肠，点解係都要激嬲我？','明年今日就是你的忌日'].randomGet();
            player.say(chat);            
      
    },
            },

 "xwj_xhuoying_gu":{
                audio:"ext:群英会:2",                
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                filterCard:true,
                selectCard:-1,
                reverseOrder:true,
                filter:function (event, player) {
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        "step 0"  
 var chat=['尸骨脉～十指穿弹','尸骨脉～柳之舞','尸骨脉～椿之舞','尸骨脉～唐松之舞','尸骨脉～铁线花之舞','尸骨脉～八重葎之舞','尸骨脉～早蕨之舞'].randomGet();
            player.say(chat);   
        var next=target.chooseToRespond({name:'shan'},2);
        next.set('ai',function(card){
            var evt=_status.event.getParent();
            if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
            if(evt.player.hasSkillTag('notricksource')) return 0;
            if(evt.target.hasSkillTag('notrick')) return 0;
            if(evt.target.hasSkillTag('noShan')){
                return -1;
            }
            return 11-get.value(card);
        });
        next.autochoose=lib.filter.autoRespondShan;
        "step 1"       
        if(result.bool==false){
            target.damage('thunder');  
            
        }                                  
    },
                ai:{
                    order:1,
                    result:{
                        player:0.5,
                    },
                },
            },
            "xwj_xhuoying_zhouyin":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"phaseBegin",
                },
                logTarget:"player",
                filter:function (event,player){
        return player.countCards('h')<event.player.countCards('h');
    },
                content:function (){
        var chat=['了不起的压力','看来得爆发咒印的第二形态了'].randomGet();
            player.say(chat); 
        player.draw();
    },
            },
            "xwj_xhuoying_shuochang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseUseBegin",
                },
             //   frequent:true,
                direct:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){       
                'step 0'
                  player.chooseBool('是否发动【说唱】？').set('ai',function(){               
                        if(player.countCards('h')) return true;                             
          });
       'step 1'
        if(result.bool){
        player.logSkill('xwj_xhuoying_shuochang');
        player.addSkill('xwj_xhuoying_shuochang_use');
        player.addSkill('xwj_xhuoying_shuochang_cancel');
        ui.auto.hide();
        }
        else{
        event.finish();
        }
    },
      ai:{    
       threaten:0.8,
                    order:9,                
					},
                subSkill:{
                    use:{
                        mod:{
                            cardUsable:function (card,player,num){
            return num=1;
            },
                            targetInRange:function (){
                    return true;
                },
                        },
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){                           
                return player.isAlive();
            },
                        content:function (){
                var chat=['今天写出很棒的韵诗~那就陪你玩玩吧！','八嘎亚路，阔摩呀路～oh~yeah~come on~'].randomGet();
            player.say(chat); 
            game.playSu(['xwj_xhuoying_shuochang1','xwj_xhuoying_shuochang2'].randomGet());  
                player.draw();     
            },
                        sub:true,
                    },
                    cancel:{
                        trigger:{
                            player:"phaseUseEnd",
                        },
                        silent:true,
                        content:function (){           
                ui.auto.show();
                player.removeSkill('xwj_xhuoying_shuochang_use');
                player.removeSkill('xwj_xhuoying_shuochang_cancel');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "xwj_xhuoying_xianhua":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"phaseDiscardBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){  
         var chat=['快走开……我控制不住自己了','咒印之术的来源者正是我'].randomGet();
            player.say(chat);   
        if(trigger.player.countCards('h')>trigger.player.getHandcardLimit()){
        player.draw();
        }
        else{
            player.recover();
        }
    },
            },
            "xwj_xhuoying_leidao":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"shaAfter",
                },           
                direct:true, 
                priority:-10,
            //    check:function (event,player){
     //   return get.attitude(player,event.player)>0;
  //  },
                filter:function (event,player){
        return event.target.isAlive()&&player!=event.player&&event.card&&event.card.name=='sha'&&event.notLink()&&event.cards[0]&&event.cards[0]==event.card;
    },
                content:function (){         
              'step 0'
          player.chooseBool('是否对'+get.translation(trigger.target)+'发动【雷刀】？').set('ai',function(){               
                        if(get.attitude(_status.event.player,trigger.target)<0) return true;       
                        return false;
          });
       'step 1'
        if(result.bool){
      game.delay();
      player.useCard({name:'sha'},trigger.target,false);       
        var chat=['能与大哥配合使用雷犁热刀的只有我','明明就很弱……'].randomGet();
        player.say(chat); 
        player.logSkill('xwj_xhuoying_leidao');         
        }
        else{
        event.finish();
        }                                                             
 },
                ai:{
                    expose:2.4,
                },
            },
            "xwj_xhuoying_huizhan":{
                audio:"ext:群英会:2",             
                round:2,
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:-1,
                filter:function (event, player) {
        return player.countCards('h')>0;
    },
                prepare:function (cards, player, targets) {
        player.line(targets);
    },
                discard:true,
                filterTarget:function (card, player, target) {
        return target != player;
    },
                content:function () {
        "step 0"
        player.$fullscreenpop('驱敌寇，保木叶', 'fire'); 
        var chat=['众忍听令，把九尾妖狐驱逐出村子外','保护好村子！'].randomGet();
            player.say(chat); 
        "step 1"
        if (event.current == undefined) event.current = player.next;
        if (targets[0].hp <= 1 || targets[0].isDead() || event.current == player) {
            event.finish();
        } else {
            event.current.useCard({
                name: 'sha'
            }, targets, false);
        }
        "step 2"
        event.current = event.current.next;
        event.goto(1);
      
    },
                ai:{
                    expose:0.6,
                    order:1,
                    result:{
                        player:function (player, target) {
                if (target.hp <= 1) return -10;
                var num = -ai.get.attitude(player, target);
                var dhp = target.hp - 1;
                var ncn = player.countCards('h');
                if (num > 0) {
                    if (ncn < dhp) {
                        num += dhp - ncn;
                    } else {
                        num -= ncn - dhp;
                    }
                }
                return num;
            },
                    },
                },                
            },
            "xwj_xhuoying_xfengyin":{
                audio:"ext:群英会:2",
                unique:true,
                mark:true,
                direct:true,
                priority:5,
                marktext:"印",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                init:function (player){
        player.storage.xwj_xhuoying_xfengyin=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){
               'step 0'            
       player.chooseControl('尸鬼封尽','cancel2').set('ai',function(){         
              if(player.countCards('h','tao')>0||player.countCards('h','jiu')>0) return '尸鬼封尽';
              if(player.hp<=1) return '尸鬼封尽';
            return 'cancel2';
        }).set('prompt','封印：请选择是否发动禁术——尸鬼封尽');    
          'step 1'         
        if(result.control=='尸鬼封尽'){
        event.goto(2);
        }
        else{
        event.finish();
        }
        'step 2'         
         player.chooseTarget('请选择一名目标，令其技能失效',get.prompt('xwj_xhuoying_xfengyin'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 3'           
          if(result.bool){       
          player.storage.xwj_xhuoying_xfengyin=true; 
          player.unmarkSkill('xwj_xhuoying_xfengyin');                  
            player.$skill('尸鬼封尽','fire','red','avatar'); 
            var chat=['只要有树叶飞舞的地方，火就会燃烧，火的影子会照耀着村子','忍者最强的力量不是在学会所有忍术之后得到，而是在保护自己最珍贵的东西时才会显露出来'].randomGet();
            player.say(chat);                 
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('xwj_xhuoying_xfengyin',result.targets);            
                result.targets[i].clearSkills();    
                if(result.targets[i].maxHp>4) result.targets[i].maxHp=4;      
                result.targets[i].update();
                player.hp=player.maxHp;                  
                player.loseHp(player.hp);
                player.awakenSkill('xwj_xhuoying_xfengyin');                                                         
           }
          }
          else{
          event.finish();
          }
    },
                ai:{
                    threaten:0.3,
                    expose:0.6,                  
                    order:2,
                },                                                          
            },
            "xwj_xhuoying_yuanmo":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                priority:8,
                frequent:true,        
                filter:function (event,player){
            return player.countCards('h')<player.hp;
    },
                content:function (){  
            player.draw(player.hp-player.countCards('h'));
            var chat=['猿魔，助我一臂之力','没办法呀，老人家了还要战斗'].randomGet();
            player.say(chat);         
    },
                ai:{
                    threaten:1.5,
                },
            },


 "xwj_xhuoying_yan":{
                audio:"ext:群英会:1",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.isAlive();        
    },
                marktext:"炎",
                forced:true,
                content:function (){                  
       'step 0' 
       player.judge();
        'step 1'
      if(result.suit=='spade'){  
         var chat=['终于出现了，这就是传说中的不会熄灭的黑炎？','若非亲眼所见，真的难以置信，太强大了'].randomGet();
            player.say(chat); 
       player.damage('fire','nosource');              
       }      
    },
                intro:{
                    content:"<font color=#f00>锁定技</font> 开始阶段，若你有“黑炎”标记，你须进行判定，若判定结果为黑桃，你受到一点无来源的火焰伤害",
                },
            },
            "xwj_xhuoying_retianzhao2":{
                audio:"ext:群英会:1",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player,target){
        return event.nature=='fire';
    },
                content:function () {  
        var chat=['我的天照黑炎能烧毁我所看到的一切，烧毁之前绝不熄灭','没想到我连天照都用上了'].randomGet();
            player.say(chat); 
            trigger.player.addSkill('xwj_xhuoying_yan');
            trigger.player.markSkill('xwj_xhuoying_yan');                  
    },
            },
            "xwj_xhuoying_retianzhao1":{
                enable:"phaseUse",
                audio:"ext:群英会:1",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0;
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"fire",
                    suit:"diamond",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":6,"name":"sha","cardid":"3823876327","_transform":"translateX(0px)","clone":{"name":"sha","suit":"diamond","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":975},"timeout":950,"original":"h"}],
                },
                prompt:"发动天照，你使用的普通杀可视为火杀",
                ai:{
                    result:{
                        target:function (player,target){
              //  if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)<=0){
                        return 6;
                    }
                    else{
                        return 3;
                    }
              //  }
               // return 1.5;
            },
                    },
                    expose:0.5,
                    threaten:1.5,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
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
            "xwj_xhuoying_retianzhao":{
				derivation:['xwj_xhuoying_yan'],
                group:["xwj_xhuoying_retianzhao1","xwj_xhuoying_retianzhao2"],
            },
            "xwj_xhuoying_baoxing":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                skillAnimation:true,
                animationColor:"metal",
                animationStr:"地爆天星",
                selectTarget:-1,
                filterCard:true,
                selectCard:-1,
                filter:function (card,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                reverseOrder:true,
                content:function (){
        "step 0"
        var chat=['地爆天星','人只有感受到了痛苦，才会珍惜和平'].randomGet();
            player.say(chat);  
        var next=target.chooseToRespond({name:'sha'});
        next.set('ai',function(card){
            var evt=_status.event.getParent();
            if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
            if(evt.player.hasSkillTag('notricksource')) return 0;
            if(evt.target.hasSkillTag('notrick')) return 0;
            return 11-get.value(card);
        });
        next.autochoose=lib.filter.autoRespondSha;
        "step 1"
        if(result.bool==false){
            target.damage();
        }
    },
                ai:{
                    order:2,
                    result:{
                        player:0.2,
                    },
                },
            },
           

 "xwj_xhuoying_tiancheng":{            
                trigger:{
                    player:"compare",
                    target:"compare",
                },
                filter:function (event,player){
        return !event.iwhile;
    },
                direct:true,
                content:function (){          
        'step 0'
        player.chooseControl('超重岩之术','超轻岩之术','cancel2').set('prompt',get.prompt('xwj_xhuoying_tiancheng')).set('ai',function(){
            if(_status.event.small) return 1;
            else return 0;
        }).set('small',trigger.small);
        'step 1'
        var num=game.countPlayer();
        if(result.index!=2){
            player.logSkill('xwj_xhuoying_tiancheng');
            if(result.index==0){
                game.log(player,'超重岩之术');
                if(player==trigger.player){
                game.playSu('xwj_xhuoying_tiancheng1');
                    trigger.num1+=num;
                }
                else{
                game.playSu('xwj_xhuoying_tiancheng1');
                    trigger.num2+=num;
                }
            }
            else{
                game.log(player,'超轻岩之术');
                if(player==trigger.player){
                game.playSu('xwj_xhuoying_tiancheng2');
                    trigger.num1-=num;
                }
                else{
                game.playSu('xwj_xhuoying_tiancheng2');
                    trigger.num2-=num;
                }
            }
        }
    },
            },
            "xwj_xhuoying_jizhu":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.countCards('e')>0||player.hp<player.maxHp;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function (){
        "step 0"
      var chat=['是神的指令杀了你','你是黑暗，在没有光明的世界中花儿只能枯萎'].randomGet();
            player.say(chat);  
        player.logSkill('xwj_xhuoying_jizhu');
        "step 1"
        if(!event.num) event.num=player.countCards('e')+player.maxHp-player.hp;
        player.chooseTarget('请选择计诛的目标',function(card,player,target){
            if(player==target) return false;
            return target.countCards('hej');
        }).ai=function(target){
            return -ai.get.attitude(_status.event.player,target);
        };
        "step 2"
        if(result.bool){
            event.target=result.targets[0];
            player.discardPlayerCard(result.targets[0],'hej',true);
        }
        else{
            event.finish();
        }
        "step 3"
        event.num--;
        if(event.num) event.goto(1);
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_zhishu":{
                audio:"ext:群英会:2",
                trigger:{
                    global:["turnOverAfter","judgeAfter"],
                },
                frequent:true,
                filter:function (event,player){
        return event.player!=player;
    },
                direct:true,
                content:function (){
        "step 0"
        var next;
        if(trigger.player.hasCard(function(card){
            return !player.getEquip(card);
        },'e')){
            next=player.chooseControl('式纸之舞','draw_card','cancel2',function(event,player){
                var source=_status.event.source;
                var att=get.attitude(player,source);
                if(source.hasSkillTag('noe')){
                    if(att>0){
                        return '式纸之舞';
                    }
                }
                else{
                    if(att<=0){
                        return '式纸之舞';
                    }
                }
                return 'draw_card';
            }).set('source',trigger.player);
        }
        else{
            next=player.chooseControl('draw_card','cancel2',function(){
                return 'draw_card';
            });
        }
        next.set('prompt',get.prompt('xwj_xhuoying_zhishu',trigger.player));
        "step 1"
        if(result.control=='式纸之舞'){
            player.logSkill('xwj_xhuoying_zhishu',trigger.player);
            var chat=['我要成为支撑弥彦和长门这两座桥梁的支柱','下一次，我希望你能开出永不凋谢的希望之花送给我'].randomGet();
            player.say(chat);             
            player.choosePlayerCard(trigger.player,'e','获得一张装备区的牌').set('filterButton',function(button){
                return !_status.event.player.getEquip(button.link);
            });
        }
        else{
            if(result.control=='draw_card'){
                player.logSkill('xwj_xhuoying_zhishu');
                player.draw();
            }
            event.finish();
        }
        "step 2"
        if(result&&result.links&&result.links.length){
            game.delay(2);
            trigger.player.$give(result.links[0],player);
            player.gain(result.links[0]);
            player.equip(result.links[0]);
            player.addExpose(0.2);
        }
    },
            },
            "xwj_xhuoying_kuangbao":{
                audio:"ext:群英会:2",
                direct:true,
                trigger:{
                    global:"damageAfter",
                },
                filter:function (event,player){
        return event.nature=='fire'||event.nature=='thunder';
    },
               // check:function (event,player){
    //    return get.attitude(player,event.player)<0;
 //   },
                content:function (){   
                'step 0'
          player.chooseBool('是否对'+get.translation(trigger.player)+'发动【狂暴】？').set('ai',function(){              
                       if(get.attitude(_status.event.player,trigger.player)<0) return true;       
                       return false;  
           });
       'step 1'
        if(result.bool){
        game.delay(1);
        var chat=['杀……哈哈……把你们通通杀光','君麻吕，佐助，你们都是我信赖的朋友'].randomGet();
            player.say(chat);                  
            trigger.player.damage(trigger.num);
        player.logSkill('xwj_xhuoying_kuangbao');      
        }
        else{
            event.finish();
        }                               
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },
            "xwj_xhuoying_xmudun":{
                group:["xwj_xhuoying_xmudun_use","xwj_xhuoying_xmudun_respond"],
                filter:function (event,player){
        return false;
    },
                viewAs:{
                    name:"wuxie",
                },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    save:true,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.5,
                },
                subSkill:{
                    use:{
                        enable:"chooseToUse",
                         enable:"chooseToUse",
                        			onChooseToUse:function(event){
					if(!game.online){
						var cards=[];
						if(ui.cardPile.childNodes.length<1){
							var discardcards=get.cards(1);
							for(var i=0;i<discardcards.length;i++){
								discardcards[i].discard();
							}
						}
						for(var i=0;i<1;i++){
							cards.push(ui.cardPile.childNodes[i]);
						}
						event.set('xwj_xhuoying_xmuduncards',cards);
					}
				},
                        chooseButton:{
                            dialog:function (event,player){
                    player.storage.xwj_xhuoying_xmudun = [
                        ui.cardPile.childNodes[0],                                        
                    ];
                    return ui.create.dialog('木遁',player.storage.xwj_xhuoying_xmudun,'hidden');
                },
				filter:function (event,player){
        return ui.cardPile.childElementCount>=1;
    },
                            filter:function (button,player){
                    var evt=_status.event.getParent();
                    if(evt&&evt.filterCard){
                        return evt.filterCard(button.link,player,evt);
                    }
                    return true;
                },
                            check:function (button){
                    var player = _status.currentPhase;
                    return game.hasPlayer(function(current){
                        return player.canUse(button.link,current,false)&&get.effect(current,button.link,player,player)>0;
                    })?get.order(button.link):0;
                },
                            backup:function (links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:links[0],
                        onuse:function(result,player){
                            delete player.storage.xwj_xhuoying_xmudun;
                        },
                          precontent:function(){
                               game.playSu(['xwj_xhuoying_xmudun_respond1','xwj_xhuoying_xmudun_respond2'].randomGet());           
                            },
                    }
                },
                            prompt:function (links,player){
                    return '选择'+get.translation(links)+'的目标';
                },
                        },
                        ai:{
                            order:4,
                            result:{
                                player:function (player){                        
                            return 1;
                        for(var i=0;i<1;i++){
                            var card = ui.cardPile.childNodes[i];
                            if(game.hasPlayer(function(current){
                                var evt=_status.event.getParent();
                                if(evt&&evt.filterCard){
                                    return evt.filterCard(button.link,player,evt)&&game.hasPlayer(function(current){
                                        return player.canUse(button.link,current,false)&&get.effect(current,card,player,player)>0;
                                    });
                                }
                                return game.hasPlayer(function(current){
                                    return get.effect(current,card,player,player)>0;
                                });
                            }))
                            return 1;
                        }
                        return 0;
                    },
                            },
                            useful:-1,
                            value:-1,
                        },
                        sub:true,
                    },
                    respond:{
                        audio:"ext:群英会:2",
                        trigger:{
                            player:"chooseToRespondBegin",
                        },
                        filter:function (event,player){
                if(event.responded) return false;
                return (ui.cardPile.childElementCount+ui.discardPile.childElementCount)>=1;//新增条件，待测试,原为return true;
            },
			
                        content:function (){
                "step 0"
                /*   var cards=[];
        if(ui.cardPile.childNodes.length<1){
            var discardcards=get.cards(1);
            for(var i=0;i<discardcards.length;i++){
                discardcards[i].discard();
            }
        }
        for(var i=0;i<1;i++){
            cards.push(ui.cardPile.childNodes[i]);
        }*/
                var cards=[];
                if(ui.cardPile.childNodes.length<1){
                    var discardcards=get.cards(1);
                    for(var i=0;i<discardcards.length;i++){
                        ui.discardPile.appendChild(discardcards[i]);
                    }
                }
                for(var i=0;i<1;i++){
                    cards.push(ui.cardPile.childNodes[i]);
                }
                player.chooseCardButton('木遁：选择一张卡牌打出',cards).set('filterButton',function(button){
                    return _status.event.getTrigger().filterCard(button.link);
                });
                "step 1"
                if(result.bool){                                    
                    trigger.untrigger();
                    trigger.responded=true;
                    result.links[0].remove();
                    trigger.result={bool:true,card:result.links[0]}
                }
            },
                        ai:{
                            effect:{
                                target:function (card,player,target,effect){
                        if(get.tag(card,'respondShan')) return 0.7;
                        if(get.tag(card,'respondSha')) return 0.7;
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "xwj_xhuoying_daiban":{
                mode:["identity"],
                unique:true,
                group:["xwj_xhuoying_daiban_live","xwj_xhuoying_daiban_die"],
                subSkill:{
                    live:{
                        mode:["identity"],
                        unique:true,
                        trigger:{
                            global:["gameStart","zhuUpdate"],
                        },
                        forced:true,
                        filter:function (event,player){
                var mode=get.mode();
                return (mode=='identity'||(mode=='versus'&&_status.mode=='four'));
            },
                        content:function (){
                'step 0'
                var list=[];
                var zhu=get.zhu(player);
                if(zhu&&zhu!=player&&zhu.skills){
                    for(var i=0;i<zhu.skills.length;i++){
                        if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
                    list.push(zhu.skills[i]);
                }
            }
        }
        player.addAdditionalSkill('xwj_xhuoying_daiban',list);
        player.storage.zhuSkill_xwj_xhuoying_daiban=list;
                'step 1'
                for(var j=0;j<game.zhu.getSkills().length;j++){
                    if(lib.skill[game.zhu.getSkills()[j]].zhuSkill==true){
                        //player.addSkill(game.zhu.getSkills()[j]);
                        //player.storage['zhuSkill_'+game.zhu.getSkills()[j]]=true;
                        game.zhu.addSkill('xwj_xhuoying_daiban_1');
                    };
                };
            },
                        sub:true,
                    },
                    die:{
                        mode:["identity"],
                        unique:true,
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        content:function (){
                game.zhu.removeSkill('xwj_xhuoying_daiban_1');
            },
                        sub:true,
                    },
                },
            },
            "xwj_xhuoying_daiban_1":{
                init:function (player,skill){
        var skills=player.getSkills(true,false);
        for(var i=0;i<skills.length;i++){
            if(!lib.skill[skills[i]].zhuSkill==true) skills.splice(i--,1);
        };
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                locked:true,
                unique:true,
                mark:true,
                intro:{
                    content:function (storage,player,skill){
            return '主公技失效';
        },
                },
            },
            "xwj_xhuoying_duizhang":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"compare",
                },
                forced:true,
                filter:function (event,player){
        return !event.iwhile;
    },
                content:function (){   
      var chat=['卡卡西前辈，你怎么看？','各位，摆好阵势，保持队型……我先摸一张牌！'].randomGet();
        player.say(chat); 
        player.draw();
    },
            },
            "xwj_xhuoying_shouyu":{
                audio:"ext:群英会:2",
                group:["xwj_xhuoying_shouyu_effect1","xwj_xhuoying_shouyu_effect2"],
                subSkill:{
                    "effect1":{
						audio:"ext:群英会:2",
                        trigger:{
                            global:"damageBegin",
                        },
                        priority:15,
                        filter:function (event,player){
                return event.card&&event.card.name=='sha'&&event.notLink()&&event.player!=player&&player.countCards('h',{type:"basic"});
            },
                        direct:true,
                        content:function (){
                "step 0"
                player.chooseToDiscard("是否对"+get.translation(trigger.player)+"发动守玉?<p>弃置一张基本牌,将伤害转移给你</p>",{type:"basic"}).ai=function(card){
                    if(get.damageEffect(trigger.player,trigger.source,player)<0){
                        if(player.hp>trigger.player.hp)return 8 - get.value(card);
                        return 0;
                    }
                    return 0;
                };
                "step 1"
                if(result.bool){
  var chat=['玉之义……代表着村里的小孩子们，他们是村子的未来与希望','这一次，就让我来挡住狂风暴雨吧！'].randomGet();
        player.say(chat);
                    player.logSkill("xwj_xhuoying_shouyu",trigger.player);
                    trigger.player = player;
                }
                else {
                    event.finish();
                }
            },
                        sub:true,
                    },
                    "effect2":{
						audio:"ext:群英会:1",
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.isDamaged();
            },
                        content:function (){
        var chat=['这痛感，实在是太美妙了','我还能坚持下去！'].randomGet();
        player.say(chat);
                player.draw(player.maxHp-player.hp);
            },
                        ai:{
                            effect:{
                                target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            var num = player.maxHp - player.hp + 1;
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-num];
                            if(!target.hasFriend()) return;
                            if(target.hp<=get.tag(card,'damage'))return;
                            return [1,num];
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
                ai:{
                    cardValue:function (card){
            if(get.type(card)=='basic'){
                return 3;
            }
            return 0;
        },
                },
            },
            "xwj_xhuoying_fengdun":{
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return player.countCards('h')>player.hp;
    },
                forced:true,
                audio:"ext:群英会:2",
                content:function (){                                                     
        trigger.directHit=true;       
         var chat=['这就是风属性查克拉的威力','将查克拉凝聚于刀上，将无坚不摧'].randomGet();
            player.say(chat);                     
    },
            },
            "xwj_xhuoying_jinshao":{
                audio:"ext:群英会:1",
                skillAnimation:"epic",
                animationColor:"fire",
                enable:"phaseUse",
                filter:function (event,player){
        return !player.storage.xwj_xhuoying_jinshao;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                unique:true,
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                selectTarget:[1,Infinity],
                mark:true,
                line:"fire",
                content:function (){
        "step 0"
        var chat=['这招是作为一名烟民在抽烟时创造的招式','尽情地给我爆燃吧！'].randomGet();
        player.say(chat);
        player.storage.xwj_xhuoying_jinshao=true;
        player.awakenSkill('xwj_xhuoying_jinshao');       
        var res=get.damageEffect(target,player,target,'fire');
        var num=Math.max(1,2*target.countCards('e'));
        target.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+'张牌或受到两点火焰伤害').set('ai',function(card){
            var res=_status.event.res;
            var num=_status.event.num;
            var player=_status.event.player;
            if(res>=0) return -1;
            if(num>2&&player.hp>1) return -1;
            if(num>1&&player.hp>2) return -1;
            if(get.position(card)=='e'){
                return 10-get.value(card);
            }
            return 6-get.value(card);
        }).set('res',res).set('num',num);
        "step 1"
        if(!result.bool){
            target.damage(2,'fire');
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                var num=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(player!=players[i]&&get.damageEffect(players[i],player,players[i],'fire')<0){
                        var att=get.attitude(player,players[i]);
                        if(att>0){
                            num-=Math.max(1,players[i].countCards('e'));
                        }
                        else if(att<0){
                            num+=Math.max(1,players[i].countCards('e'));
                        }
                    }
                }
                if(players.length<5){
                    return num-1;
                }
                else{
                    return num-2;
                }
            },
                    },
                },
                init:function (player){
        player.storage.xwj_xhuoying_jinshao=false;
    },
                intro:{
                    content:"limited",
                },
            },
            "xwj_xhuoying_rongdun":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"equipBegin",
                },
                usable:1,
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event, player) {
        return event.player!=player;
    },
                content:function () {     
        trigger.cancel();   
        player.draw();
        var chat=['现在终于密室独处了，你已无路可退','我有两个血继限界，这只是其中一个'].randomGet();
            player.say(chat);             
    },
                priority:0,
                ai:{
                    expose:0.8,
                },
            },
            "xwj_xhuoying_feidun":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('he');
    },
                content:function (){
        'step 0'
        if(player.countCards('h')){
            player.chooseCardButton('沸遁',target.getCards('he')).ai=function(button){
                return get.value(button.link)-5;
            }
        }
        else{
            player.viewHandcards(target);
            event.finish();
        }
        'step 1'
        if(result.bool){
            event.card=result.links[[0]];
            player.chooseCard('h',true,'用一张手牌替换'+get.translation(event.card)).ai=function(card){
                return -get.value(card);
            };
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var chat=['这么帅气的男生，是该给一个蚀骨溶心的吻','不要在我面前提婚期……'].randomGet();
            player.say(chat);  
            player.gain(event.card,target);
            target.gain(result.cards,player);
            player.$giveAuto(result.cards,target);
            target.$giveAuto(event.card,player);
            game.log(player,'与',target,'交换了一张牌');
            target.damage('fire');
        }
    },
                ai:{
                    threaten:1.3,
                    result:{
                        target:function (player,target){
                return -target.countCards('he');
            },
                    },
                    order:10,
                    expose:0.2,
                },
            },
 "xwj_xhuoying_lunhui":{
                audio:"ext:群英会:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                    // direct:true,
                notarget:true,
                selectCard:2,
                filterCard:function (card) {
        if (card.name == 'tao' ) return true;
        return false;
    },
                position:"h",
                discard:false,
                prompt:"请选择两张桃令全场已阵亡角色复活",
                init:function (player){
        player.storage.xwj_xhuoying_lunhui=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
           return game.dead.length>0;
    },
                content:function (){                
        "step 0"         
        var chat=['外道•轮回天生之术','逝去的亡灵啊……归来吧！'].randomGet();
        player.say(chat);
        player.turnOver(); 
        player.storage.xwj_xhuoying_lunhui=true; 
        player.$skill('轮回天生','fire','red','avatar');
        player.unmarkSkill('xwj_xhuoying_lunhui');
        player.awakenSkill('xwj_xhuoying_lunhui');
        "step 1"
    			game.broadcastAll(function(player) {
									var list = [];
									for (var i = 0; i < game.dead.length; i++) {
										list.push(game.dead[i]);
										player.line(game.dead[i], 'green');
									}																
									for (var i = 0; i < list.length; i++) {
										list[i].revive();				
								 	list[i].draw(2);		
									}
								}, player);
        /*
          "step 0"  
        //    event.current=player.next;                
                 var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }                 player.chooseButton(ui.create.dialog('令所有已阵亡的角色复活',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 }); 
                "step 1"                            
                 if(result.bool){
                     for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                     var dead=game.dead[i];
                     player.logSkill('xwj_xhuoying_lunhui',dead);
                     dead.revive(dead.maxHp);
                     dead.draw(dead.maxHp);
                     player.turnOver();                     
                     player.awakenSkill('xwj_xhuoying_lunhui');
                  }
     */
     },           
                ai:{
                    expose:0.5,
                    result:{
                           player:1,                    
                    },
                },
            },
            "xwj_xhuoying_tianyin":{
                audio:"ext:群英会:2",
                skillAnimation:true,
                animationStr:"万象天引",
                animationColor:"fire",
                usable:1,
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        if(player.isTurnedOver()) return true;
        var num=0;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].countCards('he')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])<=0){
                num++;
            }
            if(game.players[i].countCards('j')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])>0){
                num++;
            }
            if(num>=2) return true;
        }
        return false;
    },
                content:function (){
    "step 0"
    var targets=game.players.slice(0);
    targets.remove(player);
    targets.sort(lib.sort.seat);
    event.targets=targets;
    event.num=0;
    "step 1"  
     var chat=['万象天引','对面的帅哥美女，看过来'].randomGet();
            player.say(chat);    
    if(num<event.targets.length){
        var h=event.targets[num].get('h');
        if(h.length){
            var card=h.randomGet();
            player.gain(card,event.targets[num]);
            if(get.position(card)=='h'){
                event.targets[num].$give(1,player);
            }
         /*   else{
                event.targets[num].$give(card,player);
            }*/
        }
        event.num++;
        event.redo();
    }
    "step 2"
    player.turnOver();
      },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 1.5;
            return 1;
        },                                     
                },
            },
            "xwj_xhuoying_yuedu":{
                audio:"ext:群英会:3",
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);        
        var chat=['在月读的世界里，时间、空间、质量都由我所控','你已经中了我的幻术','原谅我，佐助，光明我取走了'].randomGet();
        player.say(chat);        
        "step 1"
        if(result.bool){  
            //alive('extension/群英会/xwj_yuedu.gif',4.8,true);          
            //game.delay(2);  
            target.turnOver();
            player.storage.xwj_xhuoying_yuedu3=target;
            player.addTempSkill('xwj_xhuoying_yuedu3','phaseAfter');         
            target.addTempSkill('fengyin','phaseAfter');      
            target.addTempSkill('xwj_xhuoying_yuedu2','phaseAfter');           
            event.finish();
        }
    },
                ai:{
                     result:{
                        target:function (player,target){
                        if(target.isTurnedOver()) return 0;
                return -target.countCards('h');
            },
                    },
                    order:9,
                },
            },
            "xwj_xhuoying_xuzuo":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){        
        var chat=['当双眼开了万花筒写轮眼，这个术便寄存其中','让你见识我最后的杀手锏吧','真正的战斗现在才开始'].randomGet();
        player.say(chat);    
        trigger.untrigger();
        trigger.finish();
    },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
                srlose:true,               
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            "xwj_xhuoying_tianzheng":{
                audio:"ext:群英会:2",
                group:["xwj_xhuoying_tianzheng_more","xwj_xhuoying_tianzheng_less"],
                subSkill:{
                    more:{
                        audio:["xwj_xhuoying_tianzheng",2],
                        trigger:{
                            source:"damageBegin",
                        },
                        direct:true,
                        filter:function (event,player){
                if(!player.countCards('h',{color:'red'})) return false;
                return event.player.hp>=player.hp&&player!=event.player;
            },
                        content:function (){
                'step 0'
                var goon=(ai.get.attitude(player,trigger.player)<0);
                var next=player.chooseToDiscard(get.prompt('天征：是否弃置一张红色手牌令伤害＋1？',trigger.player),{color:'red'});
                next.set('ai',function(card){
                    if(_status.event.goon){
                        return 8-ai.get.value(card);
                    }
                    return 0;
                });
                next.set('goon',goon);
                next.logSkill=['xwj_xhuoying_tianzheng',trigger.player];
                'step 1'            
                 var chat=['神罗天征，弹死你哋呢班扑街','让世界感受痛苦吧！'].randomGet();
            player.say(chat);
                if(result.bool){
                    trigger.num++;
                }
            },
                        sub:true,
                    },
                    less:{
                        audio:["xwj_xhuoying_tianzheng",2],
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
                if(!player.countCards('h',{color:'black'})) return false;
                return event.source&&event.source.hp>=player.hp&&player!=event.source;
            },
                        direct:true,
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard('天征：是否弃置一张黑色手牌令伤害-1？',{color:'black'});
                next.set('ai',function(card){
                    var player=_status.event.player;
                    if(player.hp==1||_status.event.getTrigger().num>1){
                        return 9-ai.get.value(card);
                    }
                    if(player.hp==2){
                        return 8-ai.get.value(card);
                    }
                    return 7-ai.get.value(card);
                });
                next.logSkill='xwj_xhuoying_tianzheng';
                "step 1"                             
                 var chat=['神罗天征'].randomGet();
            player.say(chat);        
                if(result.bool){
                    game.delay(0.5);
                    trigger.num--;
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                },
            },
            "xwj_xhuoying_baiyan":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.color(button.link)=='red';
        });                                                                   
        "step 1"         
        var chat=['别问我为何见到鸣人就脸红只钟情于他，因为我的白眼能透视看到鸣人过人的长处','鸣人君，多谢你！','给我look一下'].randomGet();
            player.say(chat);        
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            "xwj_xhuoying_zhangshu":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original&&event.cards[i].original!='j') return true;
        }
        return false;
    },
                content:function (){
        player.draw();
    },
            },
            "xwj_xhuoying_shanguang":{             
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    globalFrom:function (from,to,distance){
            return distance-Infinity;
        },
                },
            },
         //新螺旋：   
            			xwj_xhuoying_luoxuan:{
			    enable:"phaseUse",
                usable:1,
                audio:"ext:群英会:2",
                filter:function (card,player){
        return player.countCards('he',{type:'equip'})>0;
    },
				chooseButton:{
					dialog:function(){
						var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
						for(var i=0;i<list.length;i++){
							list[i]=['锦囊','',list[i]];
						}
						return ui.create.dialog(get.translation('xwj_xhuoying_luoxuan'),[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var recover=0,lose=1,players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
								return (button.link[2]=='juedou')?2:-1;
							}
							if(!players[i].isOut()){
								if(players[i].hp<players[i].maxHp){
									if(get.attitude(player,players[i])>0){
										if(players[i].hp<2){
											lose--;
											recover+=0.5;
										}
										lose--;
										recover++;
									}
									else if(get.attitude(player,players[i])<0){
										if(players[i].hp<2){
											lose++;
											recover-=0.5;
										}
										lose++;
										recover--;
									}
								}
								else{
									if(get.attitude(player,players[i])>0){
										lose--;
									}
									else if(get.attitude(player,players[i])<0){
										lose++;
									}
								}
							}
						}
						if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
						if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
						return (button.link[2]=='wuzhong')?1:-1;
					},
					backup:function(links,player){
						return {
							  filterCard:{
                  type:"equip",
                },      
         position:'he',           
							selectCard:1,
							audio:"ext:群英会:2",
							popname:true,
							viewAs:{name:links[0][2]},
							 precontent:function(){
							   var chat=['这招是我自创的忍术——螺旋丸','只恨这忍术未完成，未加入属性，否则你们必死无疑'].randomGet();
            player.say(chat);      
             game.playSu(['xwj_xhuoying_luoxuan1','xwj_xhuoying_luoxuan2'].randomGet());
          }
						}
					},
					prompt:function(links,player){
						return '将一张装备牌当作'+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards('h');
							
							for(var i=0;i<cards.length;i++){
								num+=Math.max(0,get.value(cards[i],player,'raw'));
							}
							num/=cards.length;
							num*=Math.min(cards.length,player.hp);
							return 12-num;
						}
					},
					threaten:1.6,
				}
			},
			
			   	"xwj_xhuoying_mrluoxuan":{
			    enable:"phaseUse",
                usable:1,
                audio:"ext:群英会:2",
                filter:function (card,player){
        return player.countCards('he',{type:'equip'})>0;
    },
				chooseButton:{
					dialog:function(){
						var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
						for(var i=0;i<list.length;i++){
							list[i]=['锦囊','',list[i]];
						}
						return ui.create.dialog(get.translation('xwj_xhuoying_mrluoxuan'),[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var recover=0,lose=1,players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
								return (button.link[2]=='juedou')?2:-1;
							}
							if(!players[i].isOut()){
								if(players[i].hp<players[i].maxHp){
									if(get.attitude(player,players[i])>0){
										if(players[i].hp<2){
											lose--;
											recover+=0.5;
										}
										lose--;
										recover++;
									}
									else if(get.attitude(player,players[i])<0){
										if(players[i].hp<2){
											lose++;
											recover-=0.5;
										}
										lose++;
										recover--;
									}
								}
								else{
									if(get.attitude(player,players[i])>0){
										lose--;
									}
									else if(get.attitude(player,players[i])<0){
										lose++;
									}
								}
							}
						}
						if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
						if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
						return (button.link[2]=='wuzhong')?1:-1;
					},
					backup:function(links,player){
						return {
							  filterCard:{
                  type:"equip",
                },      
         position:'he',           
							selectCard:1,
							//audio:"ext:群英会:2",
							popname:true,
							viewAs:{name:links[0][2]},
							 precontent:function(){
							   var chat=['螺旋丸','只要给我三天时间，我就能学会这招'].randomGet();
            player.say(chat);      
             game.playSu(['xwj_xhuoying_mrluoxuan1','xwj_xhuoying_mrluoxuan2'].randomGet());
          }
						}
					},
					prompt:function(links,player){
						return '将一张装备牌当作'+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards('h');
							
							for(var i=0;i<cards.length;i++){
								num+=Math.max(0,get.value(cards[i],player,'raw'));
							}
							num/=cards.length;
							num*=Math.min(cards.length,player.hp);
							return 12-num;
						}
					},
					threaten:1.6,
				}
			},
			
            "xwj_xhuoying_yandun":{
                audio:"ext:群英会:3",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
	derivation:['xwj_xhuoying_yan'],
                content:function (){
        "step 0"
        player.chooseToCompare(target);
		var chat=['赢的当火影，输的……娶小樱','我要血洗木叶村！'].randomGet();
            player.say(chat);
        "step 1"
        if(result.bool){     
var chat=['木叶的高层，拿命来！','这就是……万花筒写轮眼的能力？'].randomGet();
            player.say(chat);		
           player.viewHandcards(target);                  
           event.target.damage("fire"); 
           event.target.addSkill('xwj_xhuoying_yan');
           event.target.markSkill('xwj_xhuoying_yan');              
        }
        else{
            player.draw();
			var chat=['啊……我的眼睛流血了','全身的骨头都在疼，鼬究竟忍受着怎样的痛楚？'].randomGet();
            player.say(chat);
            event.target.removeSkill('xwj_xhuoying_yan');
            event.target.unmarkSkill('xwj_xhuoying_yan');            
        }
    },
                ai:{
           result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
                },
            },
            "xwj_xhuoying_rexuzuo":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                srlose:true,               
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            "xwj_xhuoying_qianniao":{
                enable:"phaseUse",
                audio:"ext:群英会:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0;
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                    suit:"spade",
                    number:8,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":8,"name":"sha","cardid":"4316281357","_transform":"translateX(0px)","clone":{"name":"sha","suit":"spade","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2579},"timeout":2531,"original":"h"}],
                },
                prompt:"发动千鸟，你使用的杀可附带雷属性",
                ai:{
                    expose:0.5,
                    threaten:1.5,
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
            "xwj_xhuoying_xianshu":{
                audio:"ext:群英会:2",
                forced:true,
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')>0) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw(player.hp);
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            "xwj_xhuoying_shazang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"shaBegin",
                },
                priority:2017,
                filter:function (event,player){
        return player.hp==1||player.countCards('h')==1;
    },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
        player.addTempSkill('unequip','shaAfter');
        trigger.directHit=true;       
    },
                mod:{
                    globalFrom:function (from,to,distance){
            if(from.hp==1||from.countCards('h')==1)return distance-Infinity;
        },
                    selectTarget:function (card,player,range){ 
                    var type=get.type(card);
                    if(type!='delay'){
            if(player.hp==1||player.countCards('h')==1){            
if(range[1]!=-1) range[1]+=Infinity;
}
}
},
                },
                ai:{
                    maixie:true,
                    expose:0.5,
                    threaten:1.5,
                },
            },
            "xwj_xhuoying_juefang":{
                audio:"ext:群英会:2",
                group:["xwj_xhuoying_juefang_less","xwj_xhuoying_juefang_more"],
                subSkill:{
                    less:{
                        audio:"ext:群英会:1",
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.card.name=='sha';
    },
                        content:function (){
        "step 0"
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('绝防：弃置一张基本牌，否则此牌对'+get.translation(player)+'无效',function(card){
            return get.type(card)=='basic';
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        "step 1"
        if(result.bool==false){
            trigger.finish();
            trigger.untrigger();
        }
    },
                        sub:true,
                    },
                    more:{
                        audio:"ext:群英会:1",
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        priority:15,
                        check:function (event,player){
        if(player==event.player) return true;
        return false;
    },
                        filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                        content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                        sub:true,
                    },
                    ai:{
                        order:10,
                        maixie:true,
                        notrick:true,
                        effect:{
                            target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    if(_status.event.name=='xwj_xhuoying_juefang') return;                                                                                
                    var bs=player.getCards('h',{type:'basic'});
                    if(bs.length<2) return 0;
                    
                    if(bs.length<=3&&player.countCards('h','sha')<=1){
                        for(var i=0;i<bs.length;i++){
                            if(bs[i].name!='sha'&&get.value(bs[i])<7){
                                return [1,0,1,-0.5];
                            }
                        }
                        return 0;
                    }
                    return [1,0,1,-0.5];
                }
            },
                        },
                        sub:true,
                    },
                },
            },
            
            "yttl_jingang":{
                 audio:"ext:金庸群侠传:2",
             
            },
            
            "xwj_xhuoying_reshenwei":{
                audio:"ext:群英会:2",
                 enable:["chooseToUse","chooseToRespond"],              
                filterCard:function (){return false},                          
                selectCard:-1,
                viewAsFilter:function (player){return player.isTurnedOver();},
                viewAs:{
                    name:"wuxie",
                },             
                onuse:function (result,player){
                player.turnOver();             
                },
                prompt:"若你的武将牌背面朝上，你可以选择翻面，然后视为你使用一张【无懈可击】",
                check:function (){return 1},
                ai:{
                    threaten:0.8,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
                group:["xwj_xhuoying_reshenwei_move","xwj_xhuoying_reshenwei_damage"],
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,                        
                        filter:function (event,player){
                return !player.isTurnedOver()&&player.canMoveCard();
            },
                        content:function (){
                "step 0"
                player.chooseToDiscard('he',get.prompt('xwj_xhuoying_reshenwei'),'弃置一张牌并移动场上的一张牌（神威左眼远距扭曲空间）',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',player.canMoveCard(true)).set('logSkill','xwj_xhuoying_reshenwei');
                "step 1"
                if(result.bool){
                game.playSu(['xwj_xhuoying_reshenwei1','xwj_xhuoying_reshenwei2'].randomGet());  
                    player.moveCard(true);
                }
                else{
                    event.finish();
                }
            },
                        sub:true,
                    },
                       damage:{
                        trigger:{
                            player:"damageBegin",
                        },                                               
                        filter:function (event,player){
                return !player.isTurnedOver();
            },
                        content:function (){     
            game.playSu(['xwj_xhuoying_reshenwei1','xwj_xhuoying_reshenwei2'].randomGet());                    
             player.turnOver();
             trigger.cancel();           
            },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            
            "xwj_xhuoying_xishou":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
    check:function (event,player){
        if(player.countCards('h')>3) return 0;
        return 1;
    },
    check:function(card){
							return 5-get.value(card);
						},
                content:function (){
 'step 0' 
    player.chooseTarget('请选择一名目标并弃置你所有的手牌，然后获得其所有牌',get.prompt('xwj_xhuoying_xishou'),function(card,player,target){
        return target!=player&&target.countCards('he')>0;
    }).set("ai",function(target){
            return get.damageEffect(target,player,player);
        
    });
    'step 1'
      if(result.bool){    
        player.discard(player.getCards('h'));  
        for(var i=0;i<result.targets.length;i++){
           player.logSkill('xwj_xhuoying_xishou',result.targets);            
           player.gainPlayerCard(Infinity,result.targets[i],'he',true);
           player.turnOver();
        }
      }
    else{
        event.finish();
    }
   
      },
                ai:{
                    order:3,
                    result:{
                        player:function (player){
                if(player.classList.contains('turnedover')) return 10;
                return 0;
            },
                        target:function (player,target){
                if(target.countCards('h')>target.hp) return target.hp-target.countCards('h');
                return 0
            },
                    },
                    threaten:0.5,
                    effect:{
                        target:function (card){
                if(card.name=='guiyoujie') return [0,2];
            },
                    },
                },
            },
            
                 "xwj_xhuoying_kkxshenwei":{
                audio:"ext:群英会:2",
                 enable:["chooseToUse","chooseToRespond"],              
                filterCard:function (){return false},                          
                selectCard:-1,
                viewAsFilter:function (player){return player.isTurnedOver();},
                viewAs:{
                    name:"wuxie",
                },             
                onuse:function (result,player){
                player.turnOver();             
                },
                prompt:"若你的武将牌背面朝上，你可以选择翻面，然后视为你使用一张【无懈可击】",
                check:function (){return 1},
                ai:{
                    threaten:0.8,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
                group:["xwj_xhuoying_kkxshenwei_move","xwj_xhuoying_kkxshenwei_damage"],
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,                        
                        filter:function (event,player){
                return !player.isTurnedOver()&&player.canMoveCard();
            },
                        content:function (){
                "step 0"
                player.chooseToDiscard('he',get.prompt('xwj_xhuoying_kkxshenwei'),'弃置一张牌并移动场上的一张牌（神威左眼远距扭曲空间）',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',player.canMoveCard(true)).set('logSkill','xwj_xhuoying_kkxshenwei');
                "step 1"
                if(result.bool){
                game.playSu(['xwj_xhuoying_kkxshenwei1','xwj_xhuoying_kkxshenwei2'].randomGet());  
                    player.moveCard(true);
                }
                else{
                    event.finish();
                }
            },
                        sub:true,
                    },
                       damage:{
                        trigger:{
                            player:"damageBegin",
                        },                                               
                        filter:function (event,player){
                return !player.isTurnedOver();
            },
                        content:function (){     
            game.playSu(['xwj_xhuoying_kkxshenwei1','xwj_xhuoying_kkxshenwei2'].randomGet());                    
             player.turnOver();
             trigger.cancel();           
            },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            
            "xwj_xhuoying_refengyin":{
                audio:"ext:群英会:2",
                unique:true,
                mark:true,
                direct:true,
                marktext:"印",
                trigger:{
                    player:"phaseUseBegin",
                },								
				filter:function (event,player){
        return player.isAlive();
    },
                init:function (player){
        player.storage.xwj_xhuoying_refengyin=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){
               'step 0'            
       player.chooseControl('尸鬼封尽','cancel2').set('ai',function(){         
              if(player.countCards('h','tao')>0||player.countCards('h','jiu')>0) return '尸鬼封尽';
              if(player.hp<=1) return '尸鬼封尽';
            return 'cancel2';
        }).set('prompt','封印：请选择是否发动禁术——尸鬼封尽');    
          'step 1'         
        if(result.control=='尸鬼封尽'){
        event.goto(2);
        }
        else{
        event.finish();
        }
        'step 2'         
         player.chooseTarget('请选择一名目标，令其技能失效',get.prompt('xwj_xhuoying_refengyin'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 3'           
          if(result.bool){     
           alive('extension/群英会/xwj_refengyin.gif',12,true);          
           game.delay(2);  
          player.storage.xwj_xhuoying_refengyin=true; 
          player.unmarkSkill('xwj_xhuoying_refengyin');                             
           //  player.$skill('尸鬼封尽','fire','red','avatar'); 
                // var chat=['尸鬼封尽','守护村子，背负着影的名号，这是我该做的事'].randomGet();
        //    player.say(chat);                  
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('xwj_xhuoying_refengyin',result.targets);            
                result.targets[i].clearSkills();     
                if(result.targets[i].maxHp>4) result.targets[i].maxHp=4;      
                result.targets[i].update();
                player.hp=player.maxHp;                                   
                player.loseHp(player.hp);
                player.awakenSkill('xwj_xhuoying_refengyin');                                                         
           }
          }
          else{
          event.finish();
          }
    },
                ai:{
                    threaten:0.3,
                    expose:0.6,                  
                    order:2,
                }, 					
            },
            "xwj_xhuoying_leique":{
                enable:"phaseUse",
                audio:"ext:群英会:2",
                group:"xwj_xhuoying_leique2",
                derivation:'xwj_xhuoying_kkxshenwei',
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"9650431325","_transform":"translateX(112px)","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1128},"timeout":1075,"original":"h"}],
                    suit:"club",
                },
                prompt:"发动雷切，你使用的杀无视防具，并附带雷属性",
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
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
            
             "xwj_xhuoying_leique2":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,                 
                unique:true,               
                filter:function (event,player){
        return !player.hasSkill('xwj_xhuoying_kkxshenwei');
    },	
                content:function (){    
          player.$fullscreenpop('卡卡西-开眼','thunder');              
          var chat=['再等一等，这个术马上就行','琳……对不起'].randomGet();
            player.say(chat);                       
        player.addSkill('xwj_xhuoying_kkxshenwei');     
		player.update();
    },
            },
            "xwj_xhuoying_yizhi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:20,
                unique:true,
                init:function (player){
        player.storage.xwj_xhuoying_yizhi=0;
    },
                intro:{
                    name:"移植",
                    content:"已移植了#种能力",
                },
                derivation:['xwj_xhuoying_xianfa','xwj_xhuoying_zhuansheng'],
                content:function (){      
                'step 0'                   
                           var skills=[]; 
                                  for(var i in lib.character){ 
                                           for(var j=0;j<lib.character[i][3].length;j++){
                                           var info=lib.skill[lib.character[i][3][j]];
                                                          if(info&&(info.gainable||!info.unique)){
                                                                         skills.add(lib.character[i][3][j]); 
                                                                                     }
                                                                               } 
                                                                                }
                                                       var link=skills.randomGet();                    
        player.addSkill(link);                    
        player.mark(link,{
            name:get.translation(link),
            content:lib.translate[link+'_info']
        });
        game.log(player,'获得技能','【'+get.translation(link)+'】');       
        'step 1'
        if(!player.hasSkill('xwj_xhuoying_xianfa')||!player.hasSkill('xwj_xhuoying_zhuansheng')){
        player.storage.xwj_xhuoying_yizhi++;
        player.markSkill('xwj_xhuoying_yizhi');
        player.update();
        if(player.storage.xwj_xhuoying_yizhi>=3){
            player.$fullscreenpop('蜕皮成仙','thunder');
            player.unmarkSkill('xwj_xhuoying_yizhi');
            player.addSkill('xwj_xhuoying_xianfa');
            player.addSkill('xwj_xhuoying_zhuansheng');
        }
        }
        else event.finish();
    },
                ai:{
                    threaten:0.8,
                },
            },
            "xwj_xhuoying_xianfa":{
                audio:"ext:群英会:2",
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')>0) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw();
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            "xwj_xhuoying_zhuansheng":{
               // mode:["identity"],
                audio:"ext:群英会:2",              
                usable:1,
                enable:"phaseUse",
                filter:function (event,player){
           return game.dead.length>0&&player.countCards('h','tao')>0;                                          
    },
                content:function (){                
        "step 0"   
        var chat=['秽土转生之术','这个术非常完美，没有风险'].randomGet();
            player.say(chat);         
        event.current=player.next;                
                 var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }                 player.chooseButton(ui.create.dialog('选择一名已阵亡的角色令其复活',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 }); 
                "step 1"    
                    player.$fullscreenpop('秽土转生','fire');                        
                 //player.$skill('秽土转生','fire','red','avatar');
                 if(result.bool){
                     for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                     var dead=game.dead[i];          
                     if(get.mode()=='identity'){     
                     var myid=player.identity;
            if(player.identity=='zhu'){myid='zhong'};                          
                dead.identity=myid;
                dead.setIdentity();          
                }              
                     player.logSkill('xwj_xhuoying_zhuansheng',dead);
                     dead.revive(2);
                     dead.draw(2);                   
                     player.loseMaxHp();   
                 }                                                                    
     },
                direct:true,
                notarget:true,
                selectCard:1,
                filterCard:function (card) {
        if (card.name == 'tao' ) return true;
        return false;
    },
                position:"h",
                discard:false,
                prompt:"请选择一张桃",
                ai:{
                    expose:0.5,
                },
            },
            "xwj_xhuoying_fenshen":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
               	derivation:'xwj_xhuoying_mrluoxuan',
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
               // selectTarget:[1,Infinity],
                 selectTarget:function (){
        return [1,_status.event.player.storage.xwj_xhuoying_fenshen];
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },     
                multitarget:true,
                multiline:true,
                content:function (){
        player.chooseToCompare(targets).callback=lib.skill.xwj_xhuoying_fenshen.callback;
    },
                init:function (player){
        player.storage.xwj_xhuoying_fenshen=0;
    },
                intro:{
                    name:"分身",
                    content:"已发动了#次失败分身",
                },
                chat:["万年吊车尾","木叶的灾星","别浪费查克拉了","黄头小儿","雏田是你的，佐助是我的","九尾狐狸","口遁对我没用","你是不可能当上火影的","我从未见过有如此厚顔无耻之人！"],
                callback:function (){
'step 0'
event.num1=event.card1.number;
event.num2=event.card2.number;
'step 1'              
if(event.num1>event.num2){      
    target.discard(target.getCards('he').randomGet());       
}
else{            
    player.draw();
    target.chat(lib.skill.xwj_xhuoying_fenshen.chat[player.storage.xwj_xhuoying_fenshen]);
    game.delay(0.5);
    player.storage.xwj_xhuoying_fenshen++;
    player.markSkill('xwj_xhuoying_fenshen');
    player.update();
    if(player.storage.xwj_xhuoying_fenshen>=6){
        player.addSkill('xwj_xhuoying_mrluoxuan');
    }            
    if(player.storage.xwj_xhuoying_fenshen>=9){
        player.die();
    }                 
}
    },
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-from.storage.xwj_xhuoying_fenshen;
        },
                },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                var num=game.countPlayer(function(current){
                    return get.attitude(player,current)<0&&current!=player&&current.countCards('h');
                });
                if(num>3) num=3;                
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    if(get.value(hs[i])<=6){
                        switch(hs[i].number){
                            case 13:return -1;
                            case 12:if(player.storage.xwj_xhuoying_fenshen+num<=8) return -1;break;
                            case 11:if(player.storage.xwj_xhuoying_fenshen+num<=7) return -1;break;
                            default:if(hs[i].number>5&&player.storage.xwj_xhuoying_fenshen+num<=8) return -1;
                        }
                    }
                }
                return 0;
            },
                    },
                },
            },
            "xwj_xhuoying_xianyan":{
                audio:"ext:群英会:2",
               // srlose:true,
                trigger:{
                    player:"dieBegin",
                },
                direct:true,
                unique:true,
                content:function (){
        "step 0"
player.$skill('助君成王','fire','red','avatar');
        player.chooseTarget(get.prompt('xwj_xhuoying_xianyan'),function(card,player,target){
            return player!=target;
        }).ai=function(target){          
            return get.attitude(player,target);
        };
        "step 1"                      
        if(result.bool){
         var chat=['琳就交给你照顾了','这只眼睛会帮你看清未来'].randomGet();
            player.say(chat);
			var cards=player.getCards('h',function(card){
                return player.countCards('h');       
            });               
            var target=result.targets[0];            
			player.$give(cards,target);
            target.gain(cards,player);
			player.logSkill('xwj_xhuoying_xianyan',target);
            var n=[1,2].randomGet();
            if(n==1){
            target.addSkill("xwj_xhuoying_reshenwei");
            target.recover();
                    };
            if(n==2){
            target.addSkill("xwj_xhuoying_xishou");            
            target.recover();
                    };
        }
        else event.finish();
    },
                ai:{
                    expose:0.5,
                },
            },
									
            "xwj_xhuoying_bamen":{
                audio:"ext:群英会:2",
                trigger:{
                    player:["phaseUseBegin","changeHp","changeMaxHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["mashu","paoxiao","fuqi","anjian"],
                content:function (){
        player.removeAdditionalSkill('xwj_xhuoying_bamen');
        var list=[];         
        if(player.hp<=4){
            list.push('mashu');
            player.markSkill('mashu');
        }  
        if(player.hp<=3||player.maxHp<=1){
            list.push('paoxiao');
            player.markSkill('paoxiao');
        }
        if(player.hp<=2||player.maxHp<=1){
            list.push('fuqi');
            player.markSkill('fuqi');
        }
        if(player.hp<=1||player.maxHp<=1){
            list.push('anjian');
            player.markSkill('anjian');
        }
        if(list.length){
            player.addAdditionalSkill('xwj_xhuoying_bamen',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            "xwj_xhuoying_fuzhi":{
                audio:"ext:群英会:2",
                priority:2017, 
                trigger:{
                    player:["enterGame","phaseBefore","phaseEnd"],
                    global:"gameDrawAfter",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                direct:true,                              
                content:function (){
        "step 0"      
       player.chooseTarget(get.prompt('xwj_xhuoying_fuzhi'),function(card,player,target){
            return player!=target;
        }).ai=function(target){                                    
                    var name=target.name.indexOf('unknown')==0?target.name2:target.name; 
                    var info=lib.character[name];
                    if(info){
                        var skills=info[3];
                        for(var j=0;j<skills.length;j++){
                            if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique){
                          //  if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
                                return true;
                            }
                        }
                    }
                    return false;                                                        
            };            
        "step 1"
        if(result.bool){            
            var chat=['依葫芦画瓢，写轮眼－－复制','你会的忍术我也会，就问你怕未？'].randomGet();
            player.say(chat);                                    
            player.unmark(player.storage.xwj_xhuoying_fuzhi+'_charactermark');
            player.logSkill('xwj_xhuoying_fuzhi',result.targets);
            var name=result.targets[0].name;
            if(name.indexOf('unknown')==0){
                name=result.targets[0].name2;
            }
            var list=[];
            var skills=lib.character[name][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique){
               // if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
                    list.push(skills[j]);
                }
            }
            player.addAdditionalSkill('xwj_xhuoying_fuzhi',list);
            player.markCharacter(name,null,true,true);
            game.addVideo('markCharacter',player,{
                name:'写轮眼•复制',
                content:'',
                id:'xwj_xhuoying_fuzhi',
                target:name
            });
            player.storage.xwj_xhuoying_fuzhi=name;
        }
    },
                ai:{
                    order:5,
                },
            },
            "xwj_xhuoying_resizhan":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"phaseUseBefore",
                },
                unique:true,
                mark:true,
                direct:true,
                init:function (player){
        player.storage.xwj_xhuoying_resizhan=false;
    },
                intro:{
                    content:"limited",
                },
                check:function (){return 0.3;},
                content:function (){
        'step 0'            
       player.chooseControl('死战','cancel2').set('ai',function(){         
            if(player.hp<=2) return '死战';
            return 'cancel2';
        }).set('prompt','死战：请选择是否发动');    
          'step 1'         
        if(result.control=='死战'){
        player.storage.xwj_xhuoying_resizhan=true;   
        player.$fullscreenpop('八门遁甲','fire');
    // player.$skill('八门遁甲','fire','red','avatar');
        player.unmark();    
        player.logSkill('xwj_xhuoying_resizhan');       
       // event.cards=get.cards(8);                                                              
     //   player.gain(event.cards);
        player.draw(8);
        player.loseMaxHp(player.maxHp-1);
        player.update();
        player.awakenSkill('xwj_xhuoying_resizhan');       
        game.delay(2);      
        var chat=['燃烧吧，青春！','我会化为养分，来年春天定会长出新芽'].randomGet();
        player.say(chat);    
        }
        else{
          event.cancel();
        }                     
      },
                ai:{
                    order:2,
           //         result:{
             //           player:function (player){
       //         if(player.hp<3) return 0.5;
	//			if(player.hp>2) return 0;                
     //       },
   //                 },
                    expose:0.8,
                },
            },
            "xwj_xhuoying_chendun":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
	check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){               
        'step 0'
        player.chooseToCompare(target);        
        var chat=['尘遁•原界剥离之术','我虽然跟你无怨无仇，但整个忍界的人都想杀你'].randomGet();
            player.say(chat);        
        'step 1'
        if(result.bool){  
            target.loseMaxHp();
            target.draw();                                                   
        }
        else{
            target.damage();      
        }
    },
                ai:{
                    threaten:2.3,
                   result:{
            target:function (player,target){
                return get.damageEffect(target,player,target);
            },
        },
                    order:9,
                },
            },
            "xwj_xhuoying_lunmu":{
                audio:"ext:群英会:2",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        return (event.source&&event.target.countCards('he')&&event.num>0);
        if(event.target.countCards('he')==0) return false;                 
      },
                content:function (){
               
        player.gainPlayerCard([1,trigger.num],get.prompt('xwj_xhuoying_lunmu',trigger.player),trigger.player,get.buttonValue,'he').set('logSkill',['xwj_xhuoying_lunmu',trigger.player]);
    },
                ai:{
                expose:0.8,
                order:0.8,
                     result:{
                        player:function (player,target){
                return get.damageEffect(player,target);
            },
                    },
                },
            },
            "xwj_xhuoying_rebusi":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"dieBefore",
                },
                changeHp:true,
                forced:true,              
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.xwj_xhuoying_rebusi==undefined) player.storage.xwj_xhuoying_rebusi=[];
        player.storage.xwj_xhuoying_rebusi.push(event.card);
        player.syncStorage('xwj_xhuoying_rebusi');
        player.showCards(player.storage.xwj_xhuoying_rebusi,'不死之身')
        player.markSkill('xwj_xhuoying_rebusi');
        "step 1"
        for(var i=0;i<player.storage.xwj_xhuoying_rebusi.length-1;i++){
            if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.xwj_xhuoying_rebusi[i])) return;
        }
        trigger.cancel();       
        if(player.hp<=0){
            player.hp=2;
            player.draw();
            player.update();           
            }    
    },       
                mod:{
                    maxHandcard:function (player,num){
            if(player.storage.xwj_xhuoying_rebusi&&player.storage.xwj_xhuoying_rebusi.length) return num-player.hp+player.storage.xwj_xhuoying_rebusi.length;
        },
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    ui.discardPile.appendChild(storage[i]);
                }
                delete player.storage.xwj_xhuoying_rebusi;
            }
        },
                },
            },
                                   
            "xwj_xhuoying_zhenxing":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                selectCard:2,               
                usable:1,
                filter:function (card,player){
        return player.countCards('h','sha')>1;
    },
                filterCard:{
                    name:"sha",
                },
                viewAs:{
                    name:"wanjian",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":11,"name":"sha","cardid":"6788264292","clone":{"name":"sha","suit":"heart","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"cardid":"24684222150","_transitionEnded":true,"timeout":16135},"original":"h","timeout":8930},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":13,"name":"sha","cardid":"7368636302","clone":{"name":"sha","suit":"diamond","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"fixed":true,"_transitionEnded":true,"timeout":17132},"original":"h"}],
                },
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            
            "xwj_xhuoying_yiyuan":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"dying",
                },
                unique:true,
                direct:true,
                init:function (player){
        player.storage.xwj_xhuoying_yiyuan=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){   
        return game.hasPlayer(function(current){
            return current.maxHp>player.maxHp;          
        });
    },
                filterCard:true,
                selectCard:-1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
	derivation:['xwj_xhuoying_lunmu'],
                content:function (){
        'step 0'
        player.draw();
        player.storage.xwj_xhuoying_yiyuan=true;  
        //player.$skill('须佐能乎','fire','red','avatar');
        player.$fullscreenpop('完全体•须佐能乎','fire');
        game.delay(0.8);
		     player.chooseTarget(get.prompt('xwj_xhuoying_yiyuan'),function(card,player,target){
            return target.maxHp>player.maxHp;
        }).set('ai',function(target){
            return (get.attitude(_status.event.player,target)-2)*target.maxHp;
        });
        'step 1'       
       var chat=['那是一个只有和平，只有胜利，只有爱的世界','我已将我的力量给了你，将来再还这个恩情','拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
            player.say(chat);        
        if(result.bool){ 
            var cards=player.getCards('h',function(card){
                return player.countCards('h');       
            });   
            var target=result.targets[0];            
            player.logSkill('xwj_xhuoying_yiyuan',target);
            player.$give(cards,target);
            target.gain(cards,player);
            player.gainMaxHp(target.maxHp-player.maxHp,true);
            player.recover(target.maxHp-player.hp);
	        		game.delay(0.5);
	        	 ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3';       
	        		game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/群英会/xwj_xhuoying_liudaoban.jpg');       
	        	 game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_wxyd_background.jpg");     
            player.addSkill('xwj_xhuoying_lunmu');
            player.update();
            player.awakenSkill('xwj_xhuoying_yiyuan');
        }
    },
                ai:{
                    order:5,
                    maixie:true,
                },
            },
            "xwj_xhuoying_xinxuzuo":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();                
       var chat=['哪个大人会对小孩动怒？','拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
            player.say(chat);        
    },
                mod:{
                    selectTarget:function (card,player,range){
if(card.name=='sha'&&range[1]!=-1) range[1]++;
},
                },
                srlose:true,          
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            "xwj_xhuoying_xinbaiyan":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.color(button.link)=='black';
        });                                                                   
        "step 1"           
        var chat=['一切都逃不过我的双眼'].randomGet();
            player.say(chat);
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            "xwj_xhuoying_rouquan":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){        
        if(player==_status.currentPhase) return false;        
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='h') num+=1;
        }
        player.draw(num);
    },
                ai:{
                    noh:true,                 
                    //effect:{
                        //target:function (card,player,target,current){
                ///if(get.type(card)=='equip') return 0;
                //return [1,3];
            //},
                    //},
                },
            },
            "xwj_xhuoying_huitian":{
                audio:"ext:群英会:2",
                trigger:{
                    global:["shaBegin","juedouBegin"],
                },
                filter:function (event,player){
        return get.distance(player,event.target)<=1;
    },
                
                content:function (){                  
       var chat=['扑街，滚远点','看我的秘术——回天！'].randomGet();
            player.say(chat);                
        player.draw();
    },
                ai:{
                    threaten:1.1,
                },
            },
},
         
translate:{
            "xwj_xhuoying_bai":"白",
            "xwj_xhuoying_bingdun":"冰遁",
            "xwj_xhuoying_bingdun_info":"<li>出牌阶段限一次，若你的武将牌正面朝上，你可以令至多两名其他角色翻面，然后你翻面<li>你与已翻面的角色的距离为1，若你的武将牌背面朝上，你的防御距离为无限<li>你对其他角色使用唯一目标的牌时，可令此牌额外指定所有其他已翻面的角色",         
            "xwj_xhuoying_bingdun2":"冰遁",
            "xwj_xhuoying_bingdun2_info":"你对其他角色使用唯一目标的牌时，可令此牌额外指定所有其他已翻面的角色",
            "xwj_xhuoying_chengshang":"承伤",
            "xwj_xhuoying_chengshang_info":"当一名其他角色成为【杀】的目标后，若来源不为你且你的武将牌背面朝上，你可令目标改为你。若此【杀】造成伤害，你翻面",   
            "xwj_xhuoying_chengshang2":"承伤",
            "xwj_xhuoying_chengshang2_info":"若此【杀】造成伤害，你翻面",     
            "xwj_xhuoying_shuiyue":"鬼灯水月",
            "xwj_xhuoying_xundao":"寻刀",
            "xwj_xhuoying_xundao_info":"准备阶段，你可以选择一个装备栏名，然后获得所有其他角色该装备栏里的装备牌",
            "xwj_xhuoying_yehua":"液化",
            "xwj_xhuoying_yehua_info":"</font><font color=#f00>锁定技</font> 你无法闪避【雷杀】；每当你受到伤害时，若为雷属性伤害，你须弃置一张牌且此伤害值+1；若为非雷属性伤害，此伤害值－1",
            "xwj_xhuoying_daoji":"刀技",
            "xwj_xhuoying_daoji_info":"<li>当你成为【杀】的目标时，你可使用一张装备牌；<li>每名角色的回合限一次，当你失去装备区的牌进入弃牌堆时，你获得之（即互换手牌区与装备区的装备）",
	           "xwj_xhuoying_xianglin":"香燐",
            "xwj_xhuoying_zhinai":"油女志乃",
            "xwj_xhuoying_liaoshang":"疗伤",
            "xwj_xhuoying_liaoshang_info":"当一名角色受到火属性或雷属性伤害后，你可令伤害来源回复等量的体力，若伤害来源未受伤，改为摸等量的牌<font color=#F0F>配合佐助与重吾</font> ",
            "xwj_xhuoying_chongyu":"虫玉",
            "xwj_xhuoying_chongyu_info":"当其他角色的黑桃牌因弃牌进入弃牌堆时，若你武将牌上的“虫”数量不大于你的体力值，改为置于你的武将牌上，称为“虫”（<font color=#F0F>唤虫</font>）。当一名其他角色回复体力时，你可以移去一张“虫”，改为你回复一点体力，若你未受伤，则改为你摸一张牌（<font color=#F0F>吸食查克拉</font>）",
            "xwj_xhuoying_chongyu2":"虫玉",
            "xwj_xhuoying_chongyu2_info":"",
            "xwj_xhuoying_ganzhi":"感知",
            "xwj_xhuoying_ganzhi_info":"结束阶段，每有一名角色手牌中有【桃】或装备牌（<font color=#F0F>感知团藏</font>），你便摸一张牌",       
        			"xwj_xhuoying_quanzhongya":"犬冢牙",
            "xwj_xhuoying_chiwan":"赤丸",
            "xwj_xhuoying_nishou":"拟兽",
            "xwj_xhuoying_nishou_info":"<span class=yellowtext>限定技</span> 当你受到伤害后，若你的体力值不大于2，你可以选择“召唤”随从忍兽“赤丸”（起始5体力上限3体力，起始手牌为4）替你作战，直到其死亡，才会切换你回到战场",
            "xwj_xhuoying_renquan":"忍犬",
            "xwj_xhuoying_renquan_info":"</font><font color=#f00>锁定技</font> 你的锦囊牌均视为【决斗】",
            "xwj_xhuoying_tongya":"通牙",
            "xwj_xhuoying_tongya_info":"出牌阶段限一次，若你有牌，你可以选择一名有牌的其他角色并弃置任意张牌，然后该角色须弃置等量张牌（不足则全弃且你补摸两者差值张牌），若如此做，视为你对其使用一张【决斗】（<font color=#F0F>配合油女志乃</font>）",       
            "xwj_xhuoying_tiantian":"天天",
            "xwj_xhuoying_jiju":"集具",
            "xwj_xhuoying_jiju_info":"当其他角色使用武器牌或进攻马时，你可令视为你使用之",
	        		"xwj_xhuoying_anqi":"暗器",
            "xwj_xhuoying_anqi_info":"当你失去一张装备区的牌时，你可视为对任意一名其他角色使用一张无距离【杀】，然后你摸一张牌",
            "xwj_xhuoying_zuojin":"佐井",
	     		   "xwj_xhuoying_weishou":"伪兽",
		     	   "xwj_xhuoying_wodi":"卧底",
			        "xwj_xhuoying_wodi_info":"结束阶段，若你的装备区有牌（有情报），你可令一名其他角色与你各摸一张牌，然后你回复一点体力，若如此做，你须将装备区的牌收进手牌区",
			        "xwj_xhuoying_weishou2":"虎眈",
			        "xwj_xhuoying_weishou2_info":"不能使用或打出牌",
		     	   "xwj_xhuoying_weishou_info":"当你受到伤害后，你可以选择一名其他角色，令其直到下个出牌阶段开始，不能使用或打出牌（<font color=#F0F>封印术•虎视眈弹</font>）然后你视为对其使用一张【杀】，结算后其随机使用一张装备牌（<font color=#F0F>配合团藏</font>）",
            "xwj_xhuoying_zhujian":"千手柱间",
            "xwj_xhuoying_qianshou":"千手",
            "xwj_xhuoying_qianshou_info":"<font color=#F0F>千手神通</font> 当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。（能阻止我的，只有千手柱间。——宇智波斑）",
            "xwj_xhuoying_xianti":"仙体",
            "xwj_xhuoying_xianti_info":"<font color=#f00>锁定技</font> 结束阶段，你可以将手牌数补至体力上限，然后回复一点体力",	
        			"xwj_xhuoying_liudaoxianren":"六道仙人",
	        		"xwj_xhuoying_renzong":"忍宗",
            "xwj_xhuoying_renzong_info":"<font color=#f00>锁定技</font> 当一名其他角色进入濒死状态，你选择技能【天眼】或【仙体】令其永久获得之，其回复体力至1并摸两张牌，然后你失去技能【忍宗】，体力上限和体力值改为6。当该被授予【忍宗】的角色造成或受到一次伤害后，你随机获得一张基本牌",
            "xwj_xhuoying_renzong2":"忍宗",
            "xwj_xhuoying_renzong2_info":"<font color=#f00>锁定技</font> 当你造成或受到一次伤害后，你随机获得一张基本牌",
				    		"xwj_xhuoying_tianyan":"天眼",
            "xwj_xhuoying_tianyan_info":"回合开始阶段，你可以选择一名其他角色，然后获得其一项技能，直到回合结束",	
		        	"xwj_xhuoying_liudao":"六道",
        			"xwj_xhuoying_liudao_info":"<font color=#f00>锁定技</font> <font color=#F0F>阴遁</font>当你的体力不为全场最高之一，你不能成为【杀】的目标；<font color=#F0F>阳遁</font>若你的体力值为全场最高之一，则你不能成为锦囊牌的目标",
            "xwj_xhuoying_itachi":"宇智波鼬",
            "xwj_xhuoying_yuedu":"月读",
            "xwj_xhuoying_yuedu_info":"出牌阶段限一次，你可选择一名角色进行拼点，若你赢，则该角色翻面，并且直到回合结束，你与该角色距离为1，其非锁定技失效，不能使用或打出牌。",
            "xwj_xhuoying_xuzuo":"须佐",
            "xwj_xhuoying_xuzuo_info":"<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 你的防御距离+1，当你有手牌时，防止受到属性伤害，无手牌时，防止受到非属性伤害。",
            "xwj_xhuoying_gangshou":"千手纲手",
            "xwj_xhuoying_dashewan":"大蛇丸",
            "xwj_xhuoying_zhilaiye":"自来也",
            "xwj_xhuoying_zhishui":"止水",
            "xwj_xhuoying_ningchi":"日向宁次",
            "xwj_xhuoying_xinbaiyan":"白眼",
            "xwj_xhuoying_xinbaiyan_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张黑色手牌",           
            "xwj_xhuoying_huitian":"回天",
            "xwj_xhuoying_huitian_info":"每当你距离1以内的角色成为杀或决斗的目标后，你可以摸一张牌。",
            "xwj_xhuoying_guazhang":"卦掌",
            "xwj_xhuoying_guazhang_info":"<font color=#F0F>八卦掌</font> 每当你于出牌阶段内使用的牌与此阶段你使用的上一张牌的花色相同时，你可以摸一张牌",
            "xwj_xhuoying_feiduan":"飞段",
            "xwj_xhuoying_rebusi":"邪徒",
            "xwj_xhuoying_rebusi_info":"<font color=#F0F>不死之身</font> <font color=#f00>锁定技</font> 在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的点数与你武将牌上已有的牌点数均不同，则你回复体力至2并摸一张牌，若出现重复点数则你死亡。只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等",
            "xwj_xhuoying_zhoushu":"咒术",
            "xwj_xhuoying_zhoushu_info":"<font color=#F0F>死司凭血</font> 当你对任意一名其他角色造成伤害后，你可施展咒术诅咒该角色，然后技能【咒术】进入冷却状态，直到该被诅咒的角色死亡后方可再次发动。当你受到伤害后，同时该被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡为止",
            "xwj_xhuoying_zhoushu3":"咒术",
            "xwj_xhuoying_zhoushu3_info":"",
            "xwj_xhuoying_zhoushu2":"咒术",
            "xwj_xhuoying_zhoushu2_info":"当你受到伤害后，同时被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡",
            "xwj_xhuoying_ban":"宇智波斑",
           "xwj_xhuoying_lunmu":"轮墓",
            "xwj_xhuoying_lunmu_info":"<font color=#F0F>轮墓边狱</font> 你每造成1点伤害后，可以立即获得受到伤害的角色的一张牌。",
            "xwj_xhuoying_zhenxing":"震星",
            "xwj_xhuoying_zhenxing_info":"<font color=#F0F>天碍震星</font> 出牌阶段限一次，你可以将两张【杀】当作【万箭齐发】使用",
            "xwj_xhuoying_yiyuan":"遗志",
            "xwj_xhuoying_yiyuan_info":"<font color=#F0F>完全体须佐能乎</font> <span class=yellowtext>限定技</span>  <span class=greentext>觉醒技</span> 濒死阶段，你摸一张牌，然后将所有手牌交给一名体力上限大于你的其他角色，调整你的体力上限至与该角色相同，然后回复体力至体力上限，并获得技能“轮墓”",
            "xwj_xhuoying_xinxuzuo":"须佐",
            "xwj_xhuoying_xinxuzuo_info":"<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 出牌阶段你使用的【杀】可指定的目标上限+1（双头须佐能乎）。当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            "xwj_xhuoying_dayemu":"大野木",
            "xwj_xhuoying_chendun":"尘遁",
            "xwj_xhuoying_chendun_info":"出牌阶段限一次，你可与一名角色进行拼点，若你赢，目标角色失去一点体力上限，并摸一张牌；若你没赢，目标角色受到一点伤害",
            "xwj_xhuoying_kai":"迈特凯",
            "xwj_xhuoying_bamen":"八门",
            "xwj_xhuoying_bamen_info":"<font color=#F0F>八门遁甲</font> <font color=#f00>锁定技</font> 出牌阶段开始时，若你的体力值为4或更少，你视为拥有技能“马术”（朝孔雀）；若你的体力值为3或更少，你视为拥有技能“咆哮”（昼虎）；若你的体力值为2或更少；你视为拥有技能“伏骑”（夕象）；若你的体力值为1，你视为拥有技能“暗箭”（夜凯）",
            "xwj_xhuoying_resizhan":"死战",
            "xwj_xhuoying_resizhan_info":"<font color=#F0F>八门遁甲</font> <span class=yellowtext>限定技</span> 出牌阶段开始前，你可以摸8张牌，然后你的体力上限调整至1",
            "xwj_xhuoying_dou":"药师兜",
            "xwj_xhuoying_yizhi":"移植",
            "xwj_xhuoying_yizhi_info":"<font color=#f00>锁定技</font> 每当受到伤害时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技、限定技除外）。若你发动【移植】至少三次，你获得技能【仙法】、【转生】",
            "xwj_xhuoying_xianfa":"仙法",
            "xwj_xhuoying_xianfa_info":"<font color=#f00>锁定技</font> 当你失去最后的手牌时，你可以摸一张牌，然后回复一点体力。",
            "xwj_xhuoying_zhuansheng":"转生",
            "xwj_xhuoying_zhuansheng_info":"<font color=#F0F>秽土转生</font> 出牌阶段限一次，你可弃置一张【桃】并选择一名已阵亡角色，令其复活，其体力回复至2，摸两张的牌，并且若为身份局，其身份阵营与你一致（若你为主公则视阵营为忠臣），然后你失去一点体力上限",
            "xwj_xhuoying_kakasi":"旗木卡卡西",
            "xwj_xhuoying_fuzhi":"复制",
            "xwj_xhuoying_fuzhi_info":"游戏开始所有角色摸牌后或你进入游戏时、你的准备阶段开始前和结束阶段，你可以选择一名存活角色，获得其所有能获得的技能，直到下一次更改为止",
            "xwj_xhuoying_leique":"雷切",
            "xwj_xhuoying_leique_info":"<li>出牌阶段，你可以将一张普通【杀】当雷【杀】使用，你使用的雷【杀】可无视目标角色的防具。<li>当你杀死一名角色后，你获得技能【神威】",
            "xwj_xhuoying_chutian":"日向雏田",
            "xwj_xhuoying_baiyan":"白眼",
            "xwj_xhuoying_baiyan_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红色手牌",
            "xwj_xhuoying_zhangshu":"掌术",
            "xwj_xhuoying_zhangshu_info":"你的回合外，每当你使用、打出、失去或被弃置一张牌时，你立即摸一张牌。",
            "xwj_xhuoying_rouquan":"柔拳",
            "xwj_xhuoying_rouquan_info":"回合外每当你因使用、打出或被弃置等方式失去一张手牌时，你立即摸一张牌（类似鸣人的仙术）",
            "xwj_xhuoying_kkxshenwei":"神威",
            "xwj_xhuoying_kkxshenwei_info":"<li>当你即将受到伤害时，若你的武将牌正面朝上，你可翻面并取消此伤害（右眼虚化）<li>若你的武将牌背面朝上，你可以选择翻面，视为使用了一张【无懈可击】（右眼虚化）<li>当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌（左眼远距离扭曲空间转移物体）",           
            "xwj_xhuoying_daitu":"宇智波带土",
            "xwj_xhuoying_reshenwei":"神威",
            "xwj_xhuoying_reshenwei_info":"<li>当你即将受到伤害时，若你的武将牌正面朝上，你可翻面并取消此伤害（右眼虚化）<li>若你的武将牌背面朝上，你可以选择翻面，视为使用了一张【无懈可击】（右眼虚化）<li>当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌（左眼远距离扭曲空间转移物体）",
            "xwj_xhuoying_xishou":"吸收",
            "xwj_xhuoying_xishou_info":"回合结束阶段，你可指定一名其他角色，然后弃置你所有的手牌并将你的武将牌翻面，若如此做，你获得其所有的牌。",
            "xwj_xhuoying_xianyan":"献眼",
            "xwj_xhuoying_xianyan_info":"当你死亡时，你可将所有手牌交给一名其他角色，然后该角色随机获得你的除此技能外的另一项其他技能，并回复一点体力。",
            "xwj_xhuoying_xieshen":"飞段",
            "xwj_xhuoying_zhuozhu":"宇智波佐助",
            "xwj_xhuoying_yandun":"炎遁",
            "xwj_xhuoying_yandun_info":"出牌阶段限一次，你可与一名有手牌的角色进行拼点，若你赢，你观看其手牌并对目标角色造成一点火焰伤害，并令其获得“黑炎”标记。若你没赢，你可以摸一张牌，你令其失去“黑炎”标记（佐助能控制天照之炎的形态变化） ",
            "xwj_xhuoying_rexuzuo":"须佐",
            "xwj_xhuoying_rexuzuo_info":"<font color=#f00>锁定技</font> 你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            "xwj_xhuoying_qianniao":"千鸟",
            "xwj_xhuoying_qianniao_info":"出牌阶段，你使用的普通杀可附带雷属性",
            "xwj_xhuoying_woailuo":"我爱罗",
            "xwj_xhuoying_shazang":"沙葬",
            "xwj_xhuoying_shazang_info":"<font color=#F0F>沙瀑大葬</font> （一尾守鹤）当你使用的牌为最后一张手牌或你的体力为1时：<li>你使用的【杀】可无视对方防具且不可闪避<li>你使用的牌可无视距离，且（非延时性锦囊牌除外）可指定任意名目标",
            "xwj_xhuoying_juefang":"绝防",
            "xwj_xhuoying_juefang_info":"<font color=#f00>锁定技</font> 当其他玩家使用【杀】指定你为目标时，需额外弃掉一张基本牌，否则该牌对你无效。你防止受到锦囊牌造成的伤害",
            "xwj_xhuoying_mingren":"漩涡鸣人",
            "xwj_xhuoying_xianshu":"仙术",
            "xwj_xhuoying_xianshu_info":"<font color=#f00>锁定技</font> 当你失去最后的手牌时，你可以摸牌补至你当前体力的张数，然后回复一点体力。",
            "xwj_xhuoying_fenshen":"分身",
            "xwj_xhuoying_fenshen_info":"<font color=#F0F>影分身之术</font> 出牌阶段限一次，你可以用一张手牌与一至X名角色同时拼点，然后依次结算拼点结果，若你赢，没赢的角色随机弃置一张牌；若你拼点没赢，你摸一张牌，并获得一个“分身”标记。你的进攻距离+X（X为你的“分身”标记数，若你有：①至少6个分身标记，你获得技能【螺旋】；②至少9个分身标记，你立即死亡）",
            "xwj_xhuoying_shuimen":"波风水门",
            "xwj_xhuoying_shanguang":"闪光",
            "xwj_xhuoying_shanguang_info":"<font color=#F0F>飞雷神</font> <font color=#f00>锁定技</font> 你的防御距离始终+1，你的进攻距离无限",
            "xwj_xhuoying_luoxuan":"螺旋",
            "xwj_xhuoying_luoxuan_info":"<font color=#F0F>螺旋丸</font> 出牌阶段限一次，你可以将任意一张装备牌当做任意一张普通锦囊牌使用",
            "xwj_xhuoying_mrluoxuan":"螺旋",
            "xwj_xhuoying_mrluoxuan_info":"<font color=#F0F>螺旋丸</font> 出牌阶段限一次，你可以将任意一张装备牌当做任意一张普通锦囊牌使用",
             "xwj_xhuoying_refengyin":"封印",
            "xwj_xhuoying_refengyin_info":"<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 出牌阶段开始时，你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态",
            "xwj_xhuoying_changmen":"漩涡长门",
            "xwj_xhuoying_lunhui":"轮回",
            "xwj_xhuoying_lunhui_info":"<font color=#F0F>轮回天生</font> <span class=yellowtext>限定技</span> 出牌阶段，你可弃置两张【桃】并将你的武将牌翻面，令场上所有已阵亡的角色复活，其体力回复至1，并摸2张的牌",
            "xwj_xhuoying_tianyin":"天引",
            "xwj_xhuoying_tianyin_info":"<font color=#F0F>万象天引</font> 回合结束阶段限一次，你可以随机获得每名其他角色的一张手牌，然后你将你的武将牌翻面",
            "xwj_xhuoying_tianzheng":"天征",
            "xwj_xhuoying_tianzheng_info":"<font color=#F0F>神罗天征</font> 当你即将受到伤害，若伤害来源体力比你高，你可弃置一张黑色手牌令伤害-1，当你即将造成伤害，若对方体力值比你高，你可弃置一张红色手牌令此伤害+1",
            "xwj_xhuoying_wuren":"无",
            "xwj_xhuoying_duan":"加藤断",
            "xwj_xhuoying_guijiao":"鬼鲛",
            "xwj_xhuoying_liluoke":"李洛克",
            "xwj_xhuoying_sanlei":"三代雷影",
            "xwj_xhuoying_luwan":"奈良鹿丸",
            "xwj_xhuoying_xiezi":"赤砂之蝎",
            "xwj_xhuoying_xiaoying":"春野樱",
            "xwj_xhuoying_feijian":"千手扉间",
            "xwj_xhuoying_zaibuzhan":"再不斩",
            "xwj_xhuoying_dingchi":"秋道丁次",
            "xwj_xhuoying_jinye":"山中井野",
            "xwj_xhuoying_jiaodu":"角都",
            "xwj_xhuoying_yuanyu":"怨虞",
            "xwj_xhuoying_kanjiulang":"勘九郞",
            "xwj_xhuoying_tuanzang":"志村团藏",
            "xwj_xhuoying_jue":"绝",
            "xwj_xhuoying_huiye":"大筒木辉夜",
            "xwj_xhuoying_didala":"迪达拉",
            "xwj_xhuoying_daluyi":"达鲁伊",
            "xren":"<span class=greentext>忍</span>",
            "xhuo":"<font color=#f00>火</font>",
            "xxiao":"<span class=yellowtext>晓</span>",   
            "xwj_xhuoying_huanyue":"鬼灯幻月",
            "xwj_xhuoying_junmalv":"君麻吕",
            "xwj_xhuoying_qilabi":"奇拉比",
            "xwj_xhuoying_yuanfeirizhan":"猿飞日斩",            
            "xwj_xhuoying_xiaonan":"小南",
            "xwj_xhuoying_zhongwu":"重吾",
            "xwj_xhuoying_dahe":"大和",
            "xwj_xhuoying_asima":"阿斯玛",
            "xwj_xhuoying_leiying":"夜月艾",
            "xwj_xhuoying_zhaomeimeng":"照美冥",
            "xwj_xhuoying_reguaili":"怪力",
            "xwj_xhuoying_reguaili_info":"每两轮限一次，你可以失去任意点体力并摸X张牌，然后直到回合结束，你使用的【杀】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】（X为你以此法失去的体力值），若你在发动此技能后，每杀死一名其他角色，你增加一点体力上限",
            "xwj_xhuoying_reguaili2":"爆发",
            "xwj_xhuoying_reguaili2_info":"你使用的【杀】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】",
            "xwj_xhuoying_mudun":"木遁",
            "xwj_xhuoying_mudun_info":"当你需要使用或打出牌时，你可以观看牌堆顶的两张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之（初代火影的木遁能瞬间凭空创造出一片森林）",
            "xwj_xhuoying_baihao":"百豪",
            "xwj_xhuoying_baihao_info":"<font color=#F0F>阴封印•百豪之术</font> 出牌阶段结束或濒死状态时，若你已受伤，你可选择回复体力至体力上限，然后失去一点体力上限（创造再生•百豪之术是能提高自愈能力但会减少寿命的禁术）",
            "xwj_xhuoying_xianren":"仙人",
            "xwj_xhuoying_xianren_info":"<font color=#F0F>蛤蟆仙人</font> <span class=greentext>觉醒技</span> 准备阶段开始时，若你的“忍”的数量不小于3，你减1点体力上限，选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“仙术”",
            "xwj_xhuoying_renfa":"忍法",
            "xwj_xhuoying_renfa_info":"你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"，你的手牌上限+X（X为“忍”的数量）",
            "xwj_xhuoying_renfa2":"忍法",
            "xwj_xhuoying_renfa2_info":"你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"",
            "xwj_xhuoying_citan":"刺探",
            "xwj_xhuoying_citan_info":"（偷窥美女、潜入雨忍村）出牌阶段开始时，你可以潜入偷窥其他角色的手牌",
            "xwj_xhuoying_changsheng":"永生",
            "xwj_xhuoying_changsheng_info":"濒死阶段，你可摸一张牌，你可以与一名有手牌的其他角色拼点，若你赢，你与该角色交换体力值（伤害来源转为你）并且你增加一点体力上限（不得超过5）；若你拼点没赢，你回复体力至体力上限，然后你失去一点体力上限并翻面（一个像蛇一样难缠的家伙）",
            "xwj_xhuoying_rechendun":"尘遁",
           // "xwj_xhuoying_rechendun_info_alter":"出牌阶段限一次，你可与一名角色进行拼点，若你赢，目标角色随机废除一个装备栏；若你没赢，目标角色受到一点伤害",
            "xwj_xhuoying_rechendun_info":"出牌阶段限一次，你可与一名装备栏数大于零的角色进行拼点，若你赢，目标角色随机废除一个装备栏；若你没赢，目标角色受到一点伤害",
            "xwj_xhuoying_wuchen":"无尘",
            "xwj_xhuoying_wuchen_info":"<font color=#F0F>无尘迷塞</font> <font color=#f00>锁定技</font> 当你没有手牌时，你防止受到任何伤害",
            "xwj_xhuoying_rexianshu":"仙术",
            "xwj_xhuoying_rexianshu_info":"<font color=#f00>锁定技</font> 当你失去最后的手牌时，你可以摸牌补至你当前体力的张数，然后回复一点体力。",
            "xwj_xhuoying_shunsheng":"瞬身",
            "xwj_xhuoying_shunsheng_info":"<font color=#F0F>瞬身止水</font><font color=#f00>锁定技</font> 回合结束后， 你和一名随机角色交换位置",
            "xwj_xhuoying_renfa3":"忍法",
            "xwj_xhuoying_renfa3_info":"出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。",
            "xwj_xhuoying_reshouhu":"守护",
            "xwj_xhuoying_reshouhu_info":"<font color=#F0F>别天神</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以把所有手牌交给一名存活的非主公角色，若为身份局，其身份与你一致（你不为主公），并且其之后的一切行动受你控制，然后你（止水）自杀身亡（无伤害来源）",
            "xwj_xhuoying_linghua":"灵化",
            "xwj_xhuoying_linghua_info":"<font color=#F0F>灵化之术</font> 你的防御距离+X（X为你的体力值）。出牌阶段，你可弃置一张基本牌，选择一名存活角色，令其与你交换角色（仅游戏玩家交换，直到该角色的回合结束阶段你才能“回魂”）。然后你失去此技能（直到你“回魂”重新获得【灵化】），并对目标造成一点伤害，结算完后当前回合立即结束",
            "xwj_xhuoying_aiyuan":"爱愿",
            "xwj_xhuoying_aiyuan_info":"当一名角色流失体力或失去体力上限时，你可以选择一项：1、你摸两张牌；2、令该角色摸两张牌（配合纲手的技能） ",
            "xwj_xhuoying_huihun":"回魂",
            "xwj_xhuoying_huihun_info":"<font color=#f00>锁定技</font> 回合结束阶段，你与【加藤断】交换角色魂魄（其须存活），然后你失去此技能，其获得技能【灵化】",
            "xwj_xhuoying_jiaoji":"鲛肌",
            "xwj_xhuoying_jiaoji_info":"<font color=#F0F>无尾尾兽</font> 每名角色的回合限一次，当一名其他角色受到一次伤害，你可以选择回复1点体力或摸一张牌",
            "xwj_xhuoying_shuilao":"水牢",
            "xwj_xhuoying_shuilao_info":"<font color=#F0F>水牢之术</font> 一名其他角色的准备阶段，若你的体力值不大于你的装备区的牌数，你可以与该角色拼点，若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标（类似队友鼬的月读封锁对方行动）",
            "xwj_xhuoying_relianhua":"莲华",
            "xwj_xhuoying_relianhua_info":"<font color=#f00>锁定技</font> 摸牌阶段摸牌时，若游戏轮数：①不大于5，你额外摸X张牌（X为游戏轮数的一半向上取整）；②大于5，你额外摸Y张牌（Y为游戏轮数的三分之一向下取整）。你的手牌上限等于体力上限。",
            "xwj_xhuoying_rexuanfeng":"旋风",
            "xwj_xhuoying_rexuanfeng_info":"<font color=#F0F>木叶旋风</font> <font color=#f00>锁定技</font> 若你的手牌数是全场唯一最多的，你使用的【杀】造成的伤害+1",
            "xwj_xhuoying_jiaodan":"鲛弹",
            "xwj_xhuoying_jiaodan_info":"<font color=#F0F>水遁•水鲛弹之术</font> 出牌阶段限一次，你可以弃置X张牌对一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你摸一张牌且本回合不能再发动鲛弹",
            "xwj_xhuoying_jiaodan2":"鲛弹",
            "xwj_xhuoying_jiaodan2_info":"",
            "xwj_xhuoying_jiaodan3":"鲛弹",
            "xwj_xhuoying_jiaodan3_info":"",
            "xwj_xhuoying_leidun":"雷盾",
            "xwj_xhuoying_leidun_info":"<font color=#F0F>最强之盾</font> <font color=#f00>锁定技</font> 游戏开始或你进入游戏时，你的体力上限改为X（X为其他角色的体力上限之和的一半（向下取整））",
            "xwj_xhuoying_yingmo":"影模",
            "xwj_xhuoying_yingmo_info":"<font color=#F0F>影子模仿术</font> 当你造成一次伤害，可随机获得此受伤害角色的一项技能，直到你下个出牌阶段开始才解除",
            "xwj_xhuoying_zhimou":"智谋",
            "xwj_xhuoying_zhimou_info":"你可将一张牌按以下规则使用或打出：破解：黑桃当【无懈可击】；仁慈：红桃当【无中生有】；冷静：梅花当【过河拆桥】；勇敢：方片当【决斗】；影缚：你可将你的任意一张锦囊牌当【顺手牵羊】使用；闪避：你可将你的任意一张装备牌当【闪】打出；报仇：你可将你的任意一张基本牌当【杀】使用或打出。除“破解”、“闪避”外，其他项每回合各限一次。",
            "xwj_xhuoying_zhimou1":"仁慈",
            "xwj_xhuoying_zhimou1_info":"",
            "xwj_xhuoying_zhimou2":"勇敢",
            "xwj_xhuoying_zhimou2_info":"",
            "xwj_xhuoying_zhimou3":"破解",
            "xwj_xhuoying_zhimou3_info":"",
            "xwj_xhuoying_zhimou4":"冷静",
            "xwj_xhuoying_zhimou4_info":"",
            "xwj_xhuoying_zhimou5":"报仇",
            "xwj_xhuoying_zhimou5_info":"你可将你的任意一张基本牌当【杀】使用或打出",
            "xwj_xhuoying_zhimou6":"闪避",
            "xwj_xhuoying_zhimou6_info":"你可将你的任意一张装备牌当【闪】打出",
            "xwj_xhuoying_zhimou7":"影缚",
            "xwj_xhuoying_zhimou7_info":"你可将你的任意一张锦囊牌当【顺手牵羊】使用。",
            "xwj_xhuoying_wanshe":"召唤",
            "xwj_xhuoying_wanshe_info":"<font color=#F0F>通灵万蛇</font> 你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌颜色为黑色，则点数视为K",
            "xwj_xhuoying_kuilei":"傀儡",
            "xwj_xhuoying_kuilei_info":"<font color=#F0F>傀儡术</font> 当其他角色阵亡后，你获得阵亡角色的随机一个技能，每当有角色阵亡可随机变动获得的技能",
            "xwj_xhuoying_baiji":"百机",
            "xwj_xhuoying_baiji_info":"<font color=#F0F>赤秘技•百机操演</font> 每当你造成或受到一次伤害，你可随机获得一张装备牌",
            "xwj_xhuoying_shuidun":"水遁",
            "xwj_xhuoying_shuidun_info":"当一名角色受到火属性伤害时，你可防止此伤害（类似柱间的千手防御技）",
            "xwj_xhuoying_yiliao":"医疗",
            "xwj_xhuoying_yiliao_info":"当有角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之。",
            "xwj_xhuoying_jinshu":"禁术",
            "xwj_xhuoying_jinshu_info":"<font color=#F0F>禁术宗师</font> <font color=#f00>锁定技</font> 回合开始阶段，你随机获得技能【分身】（鸣人）、【闪光】（波风水门）、【转生】（药师兜）中的一个，直到下一次回合开始。",
            "xwj_xhuoying_baoli":"爆力",
            "xwj_xhuoying_baoli_info":"出牌阶段限一次，你可与一名角色拼点，若你赢，你获得以下技能效果：1、直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1；2、你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
            "xwj_xhuoying_baoli2":"爆力",
            "xwj_xhuoying_baoli2_info":"直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
            "xwj_xhuoying_baoli3":"爆力",
            "xwj_xhuoying_baoli3_info":"当你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
            "xwj_xhuoying_baofu1":"爆符",
            "xwj_xhuoying_baofu1_info":"出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。",
            "xwj_xhuoying_baofu2":"爆符",
            "xwj_xhuoying_baofu2_info":"<font color=#F0F>互乘起爆符</font> 当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1以内的一名角色造成等量的火焰伤害。（单张起爆符即可无限连续通灵出起爆符集中于一点无限连续爆炸）",
            "xwj_xhuoying_baofu":"爆符",
            "xwj_xhuoying_baofu_info":"<font color=#F0F>互乘起爆符</font> 出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。每当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1的一名角色造成等量的火焰伤害。（单张起爆符即可无限连续通灵出起爆符集中于一点无限连续爆炸）",
            "xwj_xhuoying_wuyin":"雾隐",
            "xwj_xhuoying_wuyin_info":"<font color=#F0F>雾隐之术</font> <font color=#f00>锁定技</font> 当你的武将牌背面朝上时，你防止受到任何伤害",
            "xwj_xhuoying_ansha":"暗杀",
            "xwj_xhuoying_ansha_info":"出牌阶段限一次，你可以选择一名有牌的其他角色，令其弃置一张牌，若如此做，你与其依次将武将牌翻面，直到该回合结束，其非锁定技失效。（水龙弹之术）然后你可以弃置一张手牌视为对任意一名角色使用一张不计入次数限制的无距离限制的【杀】",
            "xwj_xhuoying_reshuilao":"水牢",
            "xwj_xhuoying_reshuilao_info":"<font color=#F0F>水牢之术</font> 一名其他角色的准备阶段，若你的武将牌背面朝上，你可以与该角色拼点，若你赢，你将你的武将牌翻面，该角色本回合使用的牌不能指定除该角色外的角色为目标",
            "xwj_xhuoying_huadie":"化蝶",
            "xwj_xhuoying_huadie_info":"<font color=#f00>锁定技</font> 若你的手牌数是全场唯一最多的，你造成的伤害+1",
            "xwj_xhuoying_beihua":"倍化",
            "xwj_xhuoying_beihua_info":"<font color=#F0F>三色药丸 倍化之术</font> 出牌阶段限3次，你可以展示牌堆顶的X张牌，其中每有一张梅花牌，你回复1点体力（梅花引蝶）然后你将这些牌收入手牌，并且弃牌阶段你的手牌上限－X（X为你发动倍化的次数）",
            "xwj_xhuoying_beihua2":"倍化",
            "xwj_xhuoying_beihua2_info":"",
            "xwj_xhuoying_zhuanxin":"转心",
            "xwj_xhuoying_zhuanxin_info":"<font color=#F0F>心转心之术</font> 出牌阶段限一次，你可以弃置一张红桃手牌，选择一名存活的其他角色，令其与你交换手牌",
            "xwj_xhuoying_reyiliao":"医疗",
            "xwj_xhuoying_reyiliao_info":"当有角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之。",
            "xwj_xhuoying_yuanyu_info":"<font color=#F0F>地怨虞</font> 你每杀死一名角色时，可随机获得其一项技能，并增加一点体力上限（不得超过5）和回复一点体力。然后你根据该角色的势力获得相应的限定技：<li>魏国：风遁-出牌阶段，你可弃置所有其他角色区域内的一张牌<li>蜀国：火遁-出牌阶段，你可选择至多五名其他角色，对其各造成一点火属性伤害<li>吴国：水遁-当你回复体力时，你可将体力回复至体力上限，并摸一张牌<li>群雄：土遁-当你即将受到任何伤害时，你可防止之，并回复一点体力<li>其它:雷遁-出牌阶段，你可选择一名其他角色，对其造成一点雷属性伤害并令其武将牌背面朝上",            
			"xwj_xhuoying_yuanyuwind":"风遁",
            "xwj_xhuoying_yuanyuwind_info":"<span class=yellowtext>限定技</span> 出牌阶段，你可弃置所有其他角色区域内的一张牌",
            "xwj_xhuoying_yuanyusoil":"土遁",
            "xwj_xhuoying_yuanyusoil_info":"<span class=yellowtext>限定技</span> 当你即将受到任何伤害时，你可防止之，并回复一点体力",
            "xwj_xhuoying_yuanyuwater":"水遁",
            "xwj_xhuoying_yuanyuwater_info":"<span class=yellowtext>限定技</span> 当你回复体力时，你可将体力回复至体力上限，并摸一张牌",
            "xwj_xhuoying_yuanyufire":"火遁",
            "xwj_xhuoying_yuanyufire_info":"<span class=yellowtext>限定技</span> 出牌阶段，你可选择至多五名其他角色，对其各造成一点火属性伤害",
			"xwj_xhuoying_yuanyuthunder":"雷遁",
            "xwj_xhuoying_yuanyuthunder_info":"<span class=yellowtext>限定技</span> 出牌阶段，你可选择一名其他角色，对其造成一点雷属性伤害并令其武将牌背面朝上",			
			"xwj_xhuoying_zhongquan":"硬拳",
            "xwj_xhuoying_zhongquan_info":"<font color=#f00>锁定技</font> 若你的体力不是全场最高（含之一），你无视对方的防具，并且造成的伤害+1",
            "xwj_xhuoying_newkuilei":"傀儡",
            "xwj_xhuoying_newkuilei_info":"<font color=#F0F>傀儡术</font> 每当你失去一张装备区的牌，你可以获得1名其他角色的一张手牌或判定区的牌",
            "xwj_xhuoying_huomeng":"惑梦",
            "xwj_xhuoying_huomeng_info":"<font color=#F0F>伊邪那歧</font> 结束阶段，你可以弃置一张装备区的牌，对自己施加终极幻术，然后进入伊邪那歧梦境：直到下回合开始，你防止受到非属性伤害（佐助可破之）",
            "xwj_xhuoying_huomeng2":"梦境",
            "xwj_xhuoying_huomeng2_info":"（伊邪那歧）<font color=#f00>锁定技</font> 你防止受到非属性伤害",
            "xwj_xhuoying_duoyang":"夺眼",
            "xwj_xhuoying_duoyang_info":"每当你造成伤害后，你可以选择一项：1、获得受到伤害的角色装备区里的一张牌（你的装备区相应位置不能有此类装备牌）；2、摸一张牌",
            "xwj_xhuoying_kongbo":"空波",
            "xwj_xhuoying_kongbo_info":"<font color=#F0F>风遁•真空波</font> <font color=#f00>锁定技</font> 若你的装备区有牌，你无视对方的防具",
            "xwj_xhuoying_sixiang":"四象",
            "xwj_xhuoying_sixiang_info":"<font color=#F0F>四象封印</font> 当你死亡时，若伤害来源与你距离为1，你可令其失去当前的所有技能（若其体力上限大于4则调整为4），直到游戏结束",
            "xwj_xhuoying_chengyi":"承艺",
            "xwj_xhuoying_chengyi_info":"（继承赤砂之竭的傀儡）当其他角色的牌因弃置而进入弃牌堆时，若其中含有非梅花花色的装备牌，你可以获得所有这些非梅花的牌。",
            "xwj_xhuoying_yuedu2":"幻术",
            "xwj_xhuoying_yuedu2_info":"直到回合结束，该角色不能使用或打出手牌",
            "xwj_xhuoying_yuedu3":"月读",
            "xwj_xhuoying_yuedu3_info":"与其距离为1",
            "xwj_xhuoying_baozi":"孢子",
            "xwj_xhuoying_baozi_info":"<font color=#F0F>孢子之术</font> 回合外，当你需要打出一张卡牌【杀】或者【闪】时，你可以观看任意一名其他角色的手牌并将其视为你的手牌打出（白绝有柱间细胞，故类似千手柱间的技能木遁，兼有侦察能力）",
            "xwj_xhuoying_leishu":"雷速",
            "xwj_xhuoying_leishu_info":"<font color=#f00>锁定技</font> 你使用的任何卡牌无数量限制，可选择距离不大于此牌点数的目标",
            "xwj_xhuoying_duanbi":"断臂",
            "xwj_xhuoying_duanbi_info":"<font color=#F0F>雷犁热刀</font> 出牌阶段，你可以流失一点体力并摸两张牌，若如此做，你获得以下效果：1、无视对方的防具，2、你使用的【决斗】造成的伤害+1",
            "xwj_xhuoying_duanbi2":"断臂",
            "xwj_xhuoying_duanbi2_info":"（雷犁热刀）你无视对方防具，并且你使用的【决斗】造成的伤害+1",
            "xwj_xhuoying_yiwu":"易物",
            "xwj_xhuoying_yiwu_info":"<font color=#F0F>易物变化</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以弃置一张【无懈可击】，选择一名存活的其他角色，令你的武将牌与技能均同化与目标角色一致，若如此做，你摸两张牌并先失去发动此技能前的角色“绝”的所有技能",
            "xwj_xhuoying_juneng":"聚能",
            "xwj_xhuoying_juneng_info":"（查克拉之祖）<font color=#f00>锁定技</font> 每名角色的回合限一次：当一名角色受到伤害，你摸一张牌；当一名角色回复一点体力，若你已受伤，你回复一点体力",
            "xwj_xhuoying_yinmou":"阴谋",
            "xwj_xhuoying_yinmou_info":"<span class=yellowtext>限定技</span> 出牌阶段，你可以弃置一张【闪电】，选择一名存活的其他角色，令其将武将牌更换为大筒木辉夜，然后你与其各回复一点体力（黑绝阴阳遁•精神附体•同化，谋划复活母亲辉夜）",
            "xwj_xhuoying_zhongbao":"重瀑",
            "xwj_xhuoying_zhongbao_info":"<font color=#F0F>雷我暴弹</font> <font color=#f00>锁定技</font> 当你于回合内重复使用同名卡牌时，你摸一张牌（每种牌至多以此法摸两张）",
            "xwj_xhuoying_juneng2":"聚能",
            "xwj_xhuoying_juneng2_info":"（回收查克拉）<font color=#f00>锁定技</font> 每名角色的回合限一次，当一名角色受到伤害，你摸一张牌",
            "xwj_xhuoying_tianyu":"天御",
            "xwj_xhuoying_tianyu_info":"<font color=#F0F>天之御中</font> 出牌阶段限一次，若存活人数大于2，你可以令所有其他角色与随机角色交换位置",
            "xwj_xhuoying_baodun":"爆遁",
            "xwj_xhuoying_baodun_info":"出牌阶段限一次，你可以选择一名有手牌的其他角色，然后声名一种花色，并展示该角色随机一张手牌，若两者花色一致，你获得该手牌；若花色不一致，其受到一点火焰伤害，并且你可弃置其一张牌",
            "xwj_xhuoying_zibao":"自爆",
            "xwj_xhuoying_zibao_info":"<span class=yellowtext>限定技</span> 出牌阶段，你可令所有其他角色受到一点火焰伤害，若如此做，与你距离为1的角色额外受到一点火焰伤害，然后你死亡。",
            "xwj_xhuoying_huigu":"灰骨",
            "xwj_xhuoying_huigu_info":"<font color=#F0F>共杀灰骨</font> 出牌阶段限一次，你可以令攻击范围内的一名有手牌的其他角色展示一下其手牌，该角色陷入瞳术中：直到回合结束，其不能使用或打出牌。然后你须弃置其一张牌",
            "xwj_xhuoying_feiniao":"飞鸟",
            "xwj_xhuoying_feiniao_info":"<font color=#f00>锁定技</font> 你的防御距离+1",
            "xwj_xhuoying_lunxue":"轮写",
            "xwj_xhuoying_lunxue_info":"不能使用或打出牌",
            "xwj_xhuoying_shayu":"砂雨",
            "xwj_xhuoying_shayu_info":"<font color=#F0F>砂铁时雨</font> 当你失去一张装备区的牌后，你可以选择一项：1、摸一张牌；2、弃置一名其他角色的一张牌",
            "xwj_xhuoying_feixian":"飞翔",
            "xwj_xhuoying_feixian_info":"<font color=#f00>锁定技</font> 你的防御距离+1",
            "xwj_xhuoying_xfenlie":"分裂",
            "xwj_xhuoying_xfenlie_info":"（分裂、通灵）出牌阶段限一次，你可以弃置所有手牌（没手牌则不须弃）并摸两张牌",
            "xwj_xhuoying_reguaili3":"爆发",
            "xwj_xhuoying_reguaili3_info":"你每杀死一名角色后，你增加一点体力上限",
            "xwj_xhuoying_bizhu":"臂助",
            "xwj_xhuoying_bizhu_info":"每当一名角色流失体力后，你与其可以各摸一张牌。",
            "xwj_xhuoying_landun":"岚遁",
            "xwj_xhuoying_landun_info":"<font color=#F0F>杀的集大成者</font>出牌阶段限一次，你可以进行一次判定，若判定结果为：黑桃，你使用的【杀】造成的伤害+1；红桃，你使用的【杀】可以额外指定一名角色成为目标；梅花，你使用【杀】后可弃置对方一张牌；方片，你使用【杀】的上限次数+1。然后你本回合使用的【杀】无距离限制且无法闪避",
            "xwj_xhuoying_landun3":"岚遁",
            "xwj_xhuoying_landun3_info":"你使用【杀】后可弃置对方一张牌",
            "xwj_xhuoying_landun1":"岚遁",
            "xwj_xhuoying_landun1_info":"使用的【杀】造成的伤害+1",
            "xwj_xhuoying_landun2":"岚遁",
            "xwj_xhuoying_landun2_info":"你使用的【杀】可额外指定一名角色",
            "xwj_xhuoying_landun4":"岚遁",
            "xwj_xhuoying_landun4_info":"你使用的【杀】次数上限+1",
            "xwj_xhuoying_landun5":"岚遁",
            "xwj_xhuoying_landun5_info":"你使用的【杀】无距离限制",
            "xwj_xhuoying_landun6":"岚遁",
            "xwj_xhuoying_landun6_info":"你使用的【杀】无法闪避",
            "xwj_xhuoying_chunshu":"蜃术",
            "xwj_xhuoying_chunshu_info":"<font color=#F0F>海市蜃楼</font>结束阶段，你可以进行一次判定，若判定结果为：黑色，你防止受到锦囊牌的伤害；红色：你不能成为【杀】的目标，且均防止受到属性伤害，直到下个出牌阶段开始为止",
            "xwj_xhuoying_chunshu1":"锦囊",
            "xwj_xhuoying_chunshu1_info":"<font color=#f00>锁定技</font> 你防止受到锦囊牌的伤害",
            "xwj_xhuoying_chunshu2":"禁杀",
            "xwj_xhuoying_chunshu2_info":"<font color=#f00>锁定技</font> 你不能成为【杀】的目标",
            "xwj_xhuoying_zhengbao":"蒸爆",
            "xwj_xhuoying_zhengbao_info":"<font color=#F0F>蒸危暴威</font><span class=yellowtext>限定技</span> <span class=greentext>觉醒技</span> 当你处于濒死状态时，你丢弃你所有判定区的牌，并重置你的武将牌，摸两张牌，体力上限改为4点并回复体力至3点（<font color=#F0F>令二代土影感到头痛的术，故调上限克尘遁</font>），然后你使用一张“蒸危暴威”卡牌，获得技能“循爆”、“水炮”",
            "xwj_xhuoying_chunshu3":"属性",
            "xwj_xhuoying_chunshu3_info":"<font color=#f00>锁定技</font> 你防止受到属性伤害",
            "xwj_xhuoying_shuipao":"水炮",
            "xwj_xhuoying_shuipao_info":"<font color=#F0F>水铁炮之术</font> 出牌阶段限一次，你可以弃置一张装备区的牌，对一名其他角色造成1点伤害",
            "xwj_xhuoying_lianbao":"循爆",
            "xwj_xhuoying_lianbao_info":"回合开始时，如果场上角色的判定区内没有【蒸危暴威】，你可以使用一张【蒸危暴威】",
            "xwj_xhuoying_tuci":"突刺",
            "xwj_xhuoying_tuci_info":"<font color=#F0F>地狱突刺</font><font color=#f00>锁定技</font> 你使用的杀造成的伤害+X（X为你损失的体力值的25%进位取整）",
            "xwj_xhuoying_gu":"骨舞",
            "xwj_xhuoying_gu_info":"<font color=#F0F>尸骨脉</font> 出牌阶段限一次，你可将所有手牌发动以下效果：所有其他角色须打出两张【闪】响应，否则其受到一点雷属性伤害",
            "xwj_xhuoying_zhouyin":"咒印",
            "xwj_xhuoying_zhouyin_info":"<font color=#F0F>地之咒印</font> 当其他角色准备阶段开始时，若其手牌数大于你的手牌数，你可以摸一张牌",
            "xwj_xhuoying_shuochang":"说唱",
            "xwj_xhuoying_shuochang_info":"出牌阶段开始时，你可以令你此阶段内每种牌名的牌限使用一次。若如此做，你使用的牌没距离限制，且每当你于此阶段内使用牌时，你摸一张牌",
            "xwj_xhuoying_xianhua":"仙化",
            "xwj_xhuoying_xianhua_info":"<font color=#f00>锁定技</font> 其他角色在弃牌阶段若有弃牌，你摸一张牌，否则你回复一点体力<font color=#F0F>类似咒印且配合君麻吕</font> ",
            "xwj_xhuoying_leidao":"雷刀",
            "xwj_xhuoying_leidao_info":"<font color=#F0F>绝牛•雷犁热刀</font> 当其他角色使用一张非转化的【杀】指定目标且结算后，你可对其视为再使用一张【杀】<font color=#F0F>配合四代雷影</font>",
            "xwj_xhuoying_huizhan":"挥战",
            "xwj_xhuoying_huizhan_info":"每两轮的出牌阶段限一次，你可以弃置所有手牌，指定一个目标，从你下家开始场上所有角色依次视为对其使用一张【杀】，直到你或其体力值不大于1为止",
            "xwj_xhuoying_xfengyin":"封印",
            "xwj_xhuoying_xfengyin_info":"<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 回合结束阶段你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态。",
            "xwj_xhuoying_yuanmo":"猿魔",
            "xwj_xhuoying_yuanmo_info":"<font color=#F0F>召唤猿魔</font> <font color=#f00>锁定技</font> 结束阶段，你可以将手牌数补至当前体力的张数<font color=#F0F>猿飞日斩是千手柱间弟子，故技能类似仙体</font> ",
            "xwj_xhuoying_yan":"黑炎",
            "xwj_xhuoying_yan_info":"<font color=#f00>锁定技</font> 开始阶段，若你有此“黑炎”标记，你须进行判定，若判定结果为黑桃，你受到一点无来源的火焰伤害（直到该角色阵亡，否则黑炎不会消失）",
            "xwj_xhuoying_retianzhao2":"天照",
            "xwj_xhuoying_retianzhao2_info":"<font color=#f00>锁定技</font> 当你造成火焰伤害时，你令该受伤害的角色获得“黑炎”标记",
            "xwj_xhuoying_retianzhao1":"天照",
            "xwj_xhuoying_retianzhao1_info":"出牌阶段，你可将普通杀当火杀使用",
            "xwj_xhuoying_retianzhao":"天照",
            "xwj_xhuoying_retianzhao_info":"出牌阶段，你可将普通杀当火杀使用。<font color=#f00>锁定技</font> 当你造成火焰伤害时，你令该受伤害的角色获得“黑炎”标记",
            "xwj_xhuoying_baoxing":"爆星",
            "xwj_xhuoying_baoxing_info":"<font color=#F0F>地爆天星</font> 出牌阶段限一次，你可以将所有的手牌发动【地爆天星】：此为无视防具的【南蛮入侵】，所有角色必须弃置打出一张【杀】，否则受到一点伤害",
            "xwj_xhuoying_tiancheng":"天秤",
            "xwj_xhuoying_tiancheng_info":"当你亮出拼点牌后，你可令此牌点数+X（超重岩之术）或点数－X（超轻岩之术）。（X为存活角色数）",
            "xwj_xhuoying_jizhu":"计诛",
            "xwj_xhuoying_jizhu_info":"<font color=#F0F>克制宇智波带土</font> 当你受到伤害后，你可以依次弃置任意角色区域内的共计X张牌。（X为你的装备区的牌数与损失的体力值之和） ",
            "xwj_xhuoying_zhishu":"纸术",
            "xwj_xhuoying_zhishu_info":"<font color=#F0F>式纸之舞</font> 当一名其他角色翻面或判定牌生效后，你可以选择一项：1、将该角色装备区里的一张牌移动至你装备区里的相应位置（不可替换）；2、摸一张牌。<font color=#F0F>克制宇智波带土，配合漩涡长门</font> ",
            "xwj_xhuoying_kuangbao":"狂暴",
            "xwj_xhuoying_kuangbao_info":"<font color=#F0F>空气炮</font> 当一名角色受到火属性或雷属性伤害后，你可令其受到等量的无属性伤害<font color=#F0F>配合佐助与君麻吕</font> ",
            "xwj_xhuoying_xmudun":"木遁",
            "xwj_xhuoying_xmudun_info":"当你需要使用或打出牌时，你可以观看牌堆顶的一张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之",
            "xwj_xhuoying_daiban":"代班",
            "xwj_xhuoying_daiban_info":"<font color=#f00>锁定技</font> 身份模式下，当你存活时，你先获得当前主公的主公技，然后主公的主公技失效",
            "xwj_xhuoying_daiban_1":"代班",
            "xwj_xhuoying_daiban_1_info":"当前的主公的主公技失效",
            "xwj_xhuoying_duizhang":"领队",
            "xwj_xhuoying_duizhang_info":"<font color=#f00>锁定技</font> 当场上有角色拼点后，你摸一张牌",
            "xwj_xhuoying_shouyu":"守玉",
            "xwj_xhuoying_shouyu_info":"当其他角色因成为【杀】的目标而受到伤害时，你可以弃置一张基本牌，将此伤害转移给你；<font color=#f00>锁定技</font> 当你受到一次伤害后，你可以摸x张牌(x为你已损失的体力值)",
            "xwj_xhuoying_fengdun":"风遁",
            "xwj_xhuoying_fengdun_info":"<font color=#f00>锁定技</font> 当你的手牌数大于你的体力值，你使用的【杀】无法闪避",
            "xwj_xhuoying_jinshao":"烬烧",
            "xwj_xhuoying_jinshao_info":"<font color=#F0F>灰烬烧</font> 限定技。出牌阶段，你可令任意名其他角色依次选择一项：弃置2X张牌；或受到两点火焰伤害。(X为该角色装备区里牌的数量且至少为1)",
            "xwj_xhuoying_rongdun":"溶遁",
            "xwj_xhuoying_rongdun_info":"<font color=#F0F>溶怪之术</font> 每名角色的回合限一次，当其他角色使用装备牌时，你可取消之，然后你摸一张牌",
            "xwj_xhuoying_feidun":"沸遁",
            "xwj_xhuoying_feidun_info":"<font color=#F0F>沸遁•巧雾之术</font> 出牌阶段限一次，你可以观看一名其他角色的牌，然后你可以用一张手牌替换其中的一张牌，若如此做，该角色受到一点火焰伤害",
            "zbfs":"蒸危暴威",
            "zbfs_info":"延时性锦囊牌，若判定结果为方片，则目标角色受到X点无来源的火焰伤害并随机弃置X张牌（X为此锦囊判定结果为方片的次数）。判定完成后，将此牌移动到下家的判定区里。",
            "xwj_xhuoying_shouju":"手鞠",
        			"xwj_xhuoying_fengwang":"风网",
        			"xwj_xhuoying_fengwang_info":"每当你翻面时，你可以弃置一名其他角色的一张牌",
            "xwj_xhuoying_lianyou":"镰鼬",
            "xwj_xhuoying_lianyou_info":"结束阶段时，你可令所有有牌的角色选择：弃置一张牌或令你获得其一张牌（<font color=#F0F>配合勘九郞</font>），然后你将武将牌背面朝上",
            "xwj_xhuoying_jiuxinnai":"玖辛奈",
            "xwj_xhuoying_fenglian":"封链",
             "xwj_xhuoying_fenglian2":"链",
            "xwj_xhuoying_fenglian_info":"回合开始阶段，你可选择一至X名角色（X为你的手牌数），令其横置武将牌，且直到其回合开始，其不能使用或打出牌",
            "xwj_xhuoying_hongjiao":"红椒",
            "xwj_xhuoying_hongjiao_info":"<font color=#F0F>血红辣椒</font> 当你受到伤害时，你可立即令伤害来源受到等量的火焰伤害", 
			"xhuoying_muye":"木叶村",
			"xhuoying_xiao":"晓组织",
		    "xhuoying_zhongren":"众忍村",
			"xhuoying_xianren":"六道仙人",
                                                                                                                                
},
          };
if(lib.device||lib.node){
				for(var i in xhuoying.character){xhuoying.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xhuoying.character){xhuoying.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xhuoying;
		});
		lib.config.all.characters.push('xhuoying');
		if(!lib.config.characters.contains('xhuoying')) lib.config.characters.remove('xhuoying');
		lib.translate['xhuoying_character_config']='<font color=#f00>火影忍者</font>';
		game.import('character',function(){
			var xqinshi={
				name:'xqinshi',
				connect:true,
				character:{
		 		 "xwj_xqinshi_genie":["male","qun",3,["xwj_xqinshi_zongjian","xwj_xqinshi_jiansheng"],[]],
       "xwj_xqinshi_weizhuang":["male","qun",4,["xwj_xqinshi_hengjian","xwj_xqinshi_jusha"],[]],                         
       "xwj_xqinshi_xiaoyaozi":["male","qun",4,["xwj_xqinshi_renzhong","xwj_xqinshi_diedun"],[]],
       "xwj_xqinshi_mozi":["male","wu",3,["xwj_xqinshi_jingxie","xwj_xqinshi_feigong","xwj_xqinshi_jianai"],[]],
},        

characterIntro:{
					"xwj_xqinshi_genie":"国产第一动漫《秦时明月》中的角色，纵横家，剑法超绝，号称天下第一剑之剑圣。",
					"xwj_xqinshi_weizhuang":"国产第一动漫《秦时明月》中的角色，纵横家，剑圣盖聂的师弟，流沙组织首领。为人冷酷，武功极高。",
					"xwj_xqinshi_xiaoyaozi":"中国3D武侠动画《秦时明月》系列中的原创男性角色。 道家人宗掌门人，行踪飘忽，神龙见首不见尾，率领人宗弟子们与墨家等一同反秦。佩剑是剑谱十大名剑中排名第六的道家镇门之剑“雪霁”。",
					"xwj_xqinshi_mozi":"墨子，墨家的创始人，首任巨子，主张“非攻”、“兼爱”、“节用”，曾与公输家族的鲁班较量，化解了一场战争。未在《秦时明月》中正式出现，其事迹仅出于他人口述",
				},   
				
				characterTitle:{
					"xwj_xqinshi_genie":"纵横家-剑圣",
					"xwj_xqinshi_weizhuang":"纵横家-流沙头目",
					"xwj_xqinshi_xiaoyaozi":"道家-人宗掌门",
					"xwj_xqinshi_mozi":"墨家巨子",
									},
				
				perfectPair:{
			"xwj_xqinshi_genie":['xwj_xqinshi_weizhuang'],
					},
                               
skill:{
 
        		"xwj_xqinshi_jianai":{
     audio:"ext:群英会:2",  		
				trigger:{global:'dying'},				
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return event.player.hp<=0&&player.countCards('e')>0;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					'step 0'				
					player.discard(player.getCards('e'));
					'step 1'
					trigger.player.recover(1-trigger.player.hp);		
					'step 2'
					player.chooseBool('是否交给切换装备区？').set('ai',function(){                    
            if(player.storage.xwj_xqinshi_jingxie>0) return true;     
            });
       'step 3'
           if(result.bool){ 
         if(player.storage.xwj_xqinshi_jingxie){
            var list=player.storage.xwj_xqinshi_jingxie;
        }
        player.storage.xwj_xqinshi_jingxie=player.getCards('e');
        player.lose(player.getCards('e'),ui.special)._triggered=null;   
        game.playSu('xwj_xqinshi_jingxie');
        if(list&&list.length){
            player.directequip(list);
        }    
        }    
        else{             
            event.finish();  
        }  
				},
			},
                 "xwj_xqinshi_feigong":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                direct:true,
                priority:6,		
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
                content:function (){
        "step 0"
        if(!trigger.source.countCards('e')){
                trigger.num--;
                event.finish();
                }
                else{
                   trigger.source.chooseBool('是否交给'+get.translation(player)+'一张装备区的牌？').set('ai',function(){                    
            if(trigger.source.countCards('e')>0&&get.attitude(player,trigger.source)<=0) return true;     
            });
            }
"step 1"
if(result.bool){
player.logSkill('xwj_xqinshi_feigong');
     trigger.source.chooseCard('e',true,'交给'+get.translation(player)+'一张装备区的牌，否则此伤害-1').ai=function(card){
          return 6-get.value(card);
     };          
}
else{
    trigger.num--;     
    event.finish();
}                 
        "step 2"
      if(result.bool){ 
        var card=result.cards[0];
        trigger.source.$give(card,player);
        player.gain(card,trigger.source);    
        event.card=card;    
        }    
        else{
            trigger.num--;      
            event.finish();  
        }  
         "step 3"
        		player.chooseBool('是否立即使用此装备牌？').set('ai',function(){                    
            if(player.isDamaged()||!player.countCards('e')) return true;     
            });
      "step 4"
           if(result.bool){ 
        player.useCard(event.card,player);
        }
        else{
             event.finish();
        }
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
            },
                              
            "xwj_xqinshi_jingxie":{           
                trigger:{
                    target:"useCardToBefore",
                },
                intro:{
                    content:"cards",
                },
                group:"xwj_xqinshi_jingxie2",
                mark:true,        
                marktext:"械",       
                filter:function (event,player){    
        if(!player.storage.xwj_xqinshi_jingxie&&player.countCards('e')<=0) return false;   
        if(!['basic','trick'].contains(get.type(event.card))) return false;
        if(get.tag(event.card,'damage')) return true;       
        return false;
    },
         priority:100,
                content:function (){
        if(player.storage.xwj_xqinshi_jingxie){
            var list=player.storage.xwj_xqinshi_jingxie;
        }
        player.storage.xwj_xqinshi_jingxie=player.getCards('e');
        player.lose(player.getCards('e'),ui.special)._triggered=null;   
        game.playSu('xwj_xqinshi_jingxie');
        if(list&&list.length){
            player.directequip(list);
        }
    },
            },
            "xwj_xqinshi_jingxie2":{          
                enable:"phaseUse",
                usable:1,
                intro:{
                    content:"cards",
                },
                mark:true,          
                marktext:"械",     
               filter:function (event,player){
        if(player.storage.xwj_xqinshi_jingxie<=0&&player.countCards('e')<=0) return false;   
        return player.isAlive();
    },               
                content:function (){
        if(player.storage.xwj_xqinshi_jingxie){
            var list=player.storage.xwj_xqinshi_jingxie;
        }
        player.storage.xwj_xqinshi_jingxie=player.getCards('e');
        player.lose(player.getCards('e'),ui.special)._triggered=null;   
        game.playSu('xwj_xqinshi_jingxie');
        if(list&&list.length){
            player.directequip(list);
        }
    },
      ai:{
                    order:2,
                    result:{
                       // player:1,
                        player:function (player){
                if(player.countCards('e')<=0) return 10;
                return 0;
                    },
                    },
                },
            },    
        
  "xwj_xqinshi_hengjian":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                skillAnimation:true,
                filterCard:{
                    name:"sha",
                },
                filter:function (event,player){
        return player.countCards('h','sha')>1;
    },
                selectCard:2,
                check:function (card){
        var num=0;
        var player=_status.event.player;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
            get.effect(players[i],{name:'sha'},player)>0){
                num++;
                if(num>1) return 8-get.value(card);
            }
        }
        return 0;
    },
                viewAs:{
                    name:"sha",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":4,"name":"sha","nature":"thunder","cardid":"2771745310","clone":{"name":"sha","suit":"spade","number":4,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1375},"timeout":1313,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":8,"name":"sha","cardid":"6226101294","clone":{"name":"sha","suit":"spade","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1376},"timeout":1314,"original":"h"}],
                },
                selectTarget:[1,Infinity],
                filterTarget:function (card,player,target){
        return lib.filter.targetEnabled({name:'sha'},player,target);
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.1;
        },
                    effect:{
                        player:function (card,player){
                if(_status.currentPhase!=player) return;
                if(card.name=='sha'&&player.countCards('h','sha')<2&&!player.needsToDiscard()){
                    var num=0;
                    var player=_status.event.player;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
                        get.attitude(player,players[i])<0){
                            num++;
                            if(num>1) return 'zeroplayertarget';
                        }
                    }
                }
            },
                    },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
                group:"luanjian2",
            },
            
            "xwj_xqinshi_jusha2":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                discard:false,
                line:true,
                prepare:"give",
                filter:function (event,player){       
        if(player.countCards('h','sha')+player.countCards('h','jiu')==0) return 0;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasSkill('xwj_xqinshi_jusha',player);
        });
    },
                filterCard:function (card){
        return (card.name=='sha'||card.name=='jiu')
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.hasSkill('xwj_xqinshi_jusha',player);
    },
                usable:1,
                forceaudio:true,
                content:function (){
        target.gain(cards,player);
    },
                ai:{
                    expose:0.3,
                    order:4,
                    result:{
                        target:2,
                    },
                },
            },
            "xwj_xqinshi_jusha":{
                audio:"ext:群英会:2",
                unique:true,
                global:"xwj_xqinshi_jusha2",
            },
            "xwj_xqinshi_jiansheng":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageBegin",
                },
                priority:10,
                frequent:true,
                filter:function (event,player){
        return event.num>0;
    },
                content:function (){        
                if(player.countCards('h')<=0){
                   player.draw(game.countGroup());  
                   }
                   else{                 
          player.draw(player.countCards('h'));       
          }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*3];
                    if(target.hp==3) return [1,get.tag(card,'damage')*2];
                    if(target.hp==2) return [1,get.tag(card,'damage')*1];
                }
            },
                    },
                },
            },
            "xwj_xqinshi_zongjian":{
                mod:{
                    targetInRange:function (card){
            if(card.name=='sha') return true;
        },
                },
                audio:"ext:群英会:3",
                trigger:{
                    player:"shaBegin",
                },
                logTarget:"target",
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function (event,player){
        if(event.target.countCards('h')<player.countCards('h')) return true;
        if(event.target.hp>player.hp) return true;
        return false;
    },
                content:function (){
        if(trigger.target.countCards('h')<player.countCards('h')) trigger.directHit=true;
        if(trigger.target.hp>player.hp) player.addTempSkill('xwj_xqinshi_zongjian2','shaAfter');
    },
                ai:{
                    threaten:0.5,
                },
            },
            "xwj_xqinshi_zongjian2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                audio:"ext:群英会:3",
                content:function (){
        trigger.num++;
    },
            },
           
            "xwj_xqinshi_diedun":{
                mod:{
                    globalTo:function (from,to,current){
            if(to.hp<2||to.countCards('h')<to.hp) return current+Infinity;
        },
                },
                ai:{
                    maixie:true,
                    threaten:1.5,
                },
            },
            "xwj_xqinshi_renzhong":{
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,                
                skillAnimation:true,
                animationStr:"万物回春",
                animationColor:"water",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                filter:function (event,player){
        return player.isAlive();
    },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
            }
            if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
            }
        });
        return num>=2;
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.num=0;       
        player.line(targets,'green');
        "step 1"    
        event.current=player.next;
        if(num<event.targets.length){
            if(event.targets[num].countCards('hej')){
                player.gainPlayerCard(event.targets[num],'hej',true);
            }
            event.num++;
            event.redo();
        }
        "step 2"    
        var chat=['人宗入世，为的是泽济苍生','万物回春'].randomGet();
        player.say(chat); 
        var maxh=true;       
        if(maxh){
            player.chooseCard('选择一张手牌交给'+get.translation(event.current),true).ai=function(card){
                if(get.attitude(player,event.current)>0)
                    return get.value(card);
                return -get.value(card);
            }
        }                       
        "step 3"
        if(result.bool){
            event.current.gain(result.cards[0]);
            player.$give(1,event.current);
            if(event.current.next!=player&&event.current.next.isAlive()){
                event.current=event.current.next;
            }
            else{
                event.finish();
            }
            event.goto(2);
        }
     
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },
    

},

 translate:{
            "xwj_xqinshi_mozi":"墨子",
            "xwj_xqinshi_feigong":"非攻",
            "xwj_xqinshi_feigong_info":"每当你受到【杀】造成的伤害时，你可以令伤害来源交给你一张其装备区的牌，否则此伤害-1。若其以此法交给你一张装备牌，你可立即使用之",        
         		"xwj_xqinshi_jianai":"兼爱",
		        	"xwj_xqinshi_jianai_info":"当一名角色进入濒死状态，你可以弃置当前装备区的所有牌，令其回复体力至1，然后你可切换一次装备区",
            "xwj_xqinshi_jingxie":"精械",
            "xwj_xqinshi_jingxie_info":"你同时拥有两个独立的装备区，出牌阶段（限一次）或你成为伤害性卡牌的目标时，你可以切换至另一个装备区",
            "xwj_xqinshi_jingxie2":"精械",
            "xwj_xqinshi_jingxie2_info":"出牌阶段，你可以切换装备区",        
            "xwj_xqinshi_weizhuang":"卫庄",
            "xwj_xqinshi_hengjian":"横剑",
            "xwj_xqinshi_hengjian_info":"<font color=#F0F>横贯八方</font> 出牌阶段，你可以将两张杀当杀使用，此杀无视距离，可以指定任意名目标",
            "xwj_xqinshi_jusha2":"聚散流沙",
            "xwj_xqinshi_jusha2_info":"其他角色可在他们各自的回合里给你一张【杀】或【酒】",
            "xwj_xqinshi_jusha":"流沙",
            "xwj_xqinshi_jusha_info":"聚散流沙，生死无踪。其他角色可在他们各自的回合里交给你一张【杀】或【酒】",
            "xwj_xqinshi_genie":"盖聂",
            "xwj_xqinshi_jiansheng":"剑圣",
            "xwj_xqinshi_jiansheng_info":"每当你受到一点伤害时，若你没有手牌，你可以摸等同于现存势力数张牌；若你有手牌，你可以摸X张牌（X为此时你的手牌数）",
            "xwj_xqinshi_zongjian":"纵剑",
            "xwj_xqinshi_zongjian_info":"<font color=#F0F>百步飞剑</font> 你使用的【杀】无距离限制；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于你的体力值，此【杀】伤害+1",
            "xwj_xqinshi_zongjian2":"百步飞剑",
            "xwj_xqinshi_zongjian2_info":"目标角色的体力值大于等于你的体力值，你可令此【杀】伤害+1",
            "xwj_xqinshi_xiaoyaozi":"逍遥子",
            "xwj_xqinshi_diedun":"蝶遁",
            "xwj_xqinshi_diedun_info":"<font color=#F0F>梦蝶之遁</font> 当你的体力值小于2或手牌数小于体力值时，其他角色计算与你的距离为无限远",
            "xwj_xqinshi_renzhong":"人宗",
            "xwj_xqinshi_renzhong_info":"<font color=#F0F>万物回春</font> 出牌阶段限一次，你可以获得所有其他角色区域内的一张牌，然后你须为所有存活的角色每人逐个派发一张手牌",
            },
};

if(lib.device||lib.node){
				for(var i in xqinshi.character){xqinshi.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xqinshi.character){xqinshi.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xqinshi;
		});
		lib.config.all.characters.push('xqinshi');
		if(!lib.config.characters.contains('xqinshi')) lib.config.characters.remove('xqinshi');
		lib.translate['xqinshi_character_config']='<span class=greentext>秦时明月</span>';			

	var xsanguo={
				name:'xsanguo',
				connect:true,
				character:{
 "xwj_xsanguo_zhihuaxiong":["male","qun",4,["xwj_xsanguo_wenjiu","xwj_xsanguo_badao"],[]],
// "xwj_xsanguo_yujin":["male","wei",4,["xwj_xsanguo_zhenjun"],[]], 
 "xwj_xsanguo_zhangfei":["male","shu",4,["paoxiao","xwj_xsanguo_tishen","xwj_xsanguo_tannan"],[]], 
 "xwj_xsanguo_jiangwei":["male","shu",4,["xwj_xsanguo_tiaoxin","xwj_xsanguo_guanxing"],[]], 
 "xwj_xsanguo_wangyun":["male","qun",4,["xwj_xsanguo_huanji","xwj_xsanguo_jugong","xwj_xsanguo_chengmou"],[]],
 "xwj_xsanguo_menghuo":["male","qun",1,["xwj_xsanguo_xiongqi","xwj_xsanguo_xiangfu","xwj_xsanguo_manwang"],[]],
 "xwj_xsanguo_nanhua":["male","qun",3,["xwj_xsanguo_xiandao","xwj_xsanguo_xiuzheng","xwj_xsanguo_chuanshu"],[]],
// "xwj_xsanguo_oldyuji":['male','qun',3,['xwj_xsanguo_oldguhuo'],[]],
// "xwj_xsanguo_xinyuji":['male','qun',3,['xwj_xsanguo_guhuo'],[]], 
 //"xwj_xsanguo_baosanniang":["female","shu",3,["xwj_xsanguo_wuniang","xwj_xsanguo_xushen"],[]],     
// "xwj_xsanguo_zhaotongzhaoguang":["male","shu",4,["xwj_xsanguo_yizan","xwj_xsanguo_longyuan"],[]],        
"xwj_xsanguo_simahui":["male","qun",4,["xwj_xsanguo_shouye","xwj_xsanguo_jiehuo"],[]], 
// "xwj_xsanguo_shenzhaoyun":["male","shen",2,["xwj_xsanguo_juejing","xwj_xsanguo_longhun"],["des:神赵云"]],
 //   "xwj_xsanguo_xunyou":["male","wei",3,["qice","zhiyu","xwj_xsanguo_houlve"],[]],
     "xwj_xsanguo_caomao":["male","wei",3,["xwj_xsanguo_qianzhi","xwj_xsanguo_yanghui","xwj_xsanguo_juli"],[]],
         
        },
characterIntro:{
	     "xwj_xsanguo_xinyuji":"自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
	     "xwj_xsanguo_oldyuji":"自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
					"xwj_xsanguo_yujin":"代码来源于贴吧和QQ群的大佬之手，此扩展代为收集。",
					"xwj_xsanguo_menghuo":"七擒七纵之孟获。",
       "xwj_xsanguo_zhangfei":"糅合太阳神三国杀智包的张飞。",
					"xwj_xsanguo_zhihuaxiong":"太阳神三国杀智包的华雄。",
					"xwj_xsanguo_simahui":"太阳神三国杀智包的司马徽，略有改动。",
					"xwj_xsanguo_wangyun":"貂蝉的义父，详看百度百科。",
					"xwj_xsanguo_jiangwei":"诸葛亮弟子",
					"xwj_xsanguo_zhaotongzhaoguang":"赵云的儿子",
					"xwj_xsanguo_nanhua":"南华老仙，古典小说《三国演义》中张角的师傅，在《三国演义》中将三卷天书【太平要术】传给张角，让他普救世人。张角得此书，晓夜攻习，能呼风唤雨，号为 “天公将军”，开启三国乱世。南华老仙与迷之仙人左慈，太平道人于吉，被称为汉末三仙",
				},

characterTitle:{
					"xwj_xsanguo_jiangwei":"龙的衣钵",
					"xwj_xsanguo_wangyun":"司徒",
					"xwj_xsanguo_nanhua":"虚包-南华真人",
					"xwj_xsanguo_oldyuji":"可乐加冰24",
					"xwj_xsanguo_xinyuji":"可乐加冰24",
									},

skill:{	
  
            "xwj_xsanguo_qianzhi":{
            audio:["mingjian",2],
                trigger:{
                    player:"phaseBegin",
                },             
                filter:function (event,player){
        return player.isDamaged();
    },
                content:function (){
        'step 0'
        event.cards=get.cards(player.maxHp-player.hp);
        event.chosen=[];
        event.num=player.maxHp-player.hp;
        'step 1'
        var js=player.getCards('j');
        var pos;
        var choice=-1;
        var getval=function(card,pos){
            if(js[pos]){
                return (get.judge(js[pos]))(card);
            }
            else{
                return get.value(card);
            }
        };
        for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
            var max=getval(event.cards[pos],pos);
            for(var j=pos+1;j<event.cards.length;j++){
                var current=getval(event.cards[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('潜志：选择要移动的牌（还能移动'+event.num+'张）',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 2'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards.remove(event.card);
            var buttons=event.cards.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(4);
        }
        'step 3'
        if(typeof result.index=='number'){
            if(result.index>event.cards.length){
                ui.cardPile.appendChild(event.card);
            }
            else{
                event.cards.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
        'step 4'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
        }
        var js=player.getCards('j');
        if(js.length==1){
            if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                player.addTempSkill('guanxing_fail');
            }
        }
    },
                ai:{
                    guanxing:true,
                    order:8,
                },
            },
            "xwj_xsanguo_yanghui":{
                audio:["huituo",2],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                priority:2,
                filter:function (event,player){

        return player.isAlive();

    },
                content:function (){

    player.gainMaxHp();

    player.update();

    },
                ai:{
                    order:6,
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "xwj_xsanguo_juli":{
                audio:["xingshuai",2],
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return player.isDamaged()&&player.isMinHp();
    },
              /*  
                init:function (player){
        player.storage.xwj_xsanguo_juli=false;
    },
                intro:{
                    content:"技能未发动",
                },*/
                content:function (){
                    "step 0"
                    event.goto(1);
                    // player.storage.xwj_xsanguo_juli=true;                   
            "step 1"            
                    player.chooseTarget(get.prompt('xwj_xsanguo_juli'),[1,Infinity],function(card,player,target){
                        return target.group=='wei';
                    },function(target){
                        return get.attitude(_status.event.player,target);
                    });
                    "step 2"
                    if(result.bool){
                        player.logSkill('xwj_xsanguo_juli',result.targets);                     
                        event.targets=result.targets;
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.targets.length){
                        var target=event.targets.shift();
                        event.current=target;
                        event.current.draw(player.maxHp-player.hp); 
                        event.redo();                                               
                    }
                    else{
                        player.loseMaxHp(player.maxHp-player.hp);
                      //  player.unmarkSkill('xwj_xsanguo_juli');
                        player.update();
                        //player.awakenSkill('xwj_xsanguo_juli');
                        event.finish();
                    }          
                
                },
                ai:{
                    order:5,
                },
            },
  "xwj_xsanguo_houlve":{
                audio:["zhiyu",2],
                enable:"chooseToUse",
                usable:1,
                filterCard:function (){return false},
                selectCard:-1,
                viewAsFilter:function (player){return !player.countCards('h')},
                viewAs:{
                    name:"wuxie",
                },
                onuse:function (result,player){player.draw()},
                prompt:"摸一张牌，然后你视为使用一张【无懈可击】",
                check:function (){return 1},
                ai:{
                    threaten:0.8,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
"xwj_xsanguo_longhun1":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player,card){
        return event.getParent().skill=='xwj_xsanguo_longhun2'&&event.cards.length>1;
    },
                content:function (){
        trigger.num++;
    },
            },
            "xwj_xsanguo_longhun2":{
                audio:["longhun",4],
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张方片牌当作火杀使用或打出';
    },
                position:"he",
                check:function (card,event){
        if(1) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return [1,2];
    },
                viewAs:{
                    name:"sha",
                    nature:"fire",
                    suit:"diamond",
                    number:4,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":4,"name":"shunshou","cardid":"3706779320","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"shunshou","suit":"diamond","number":4,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_onEndDelete":true,"timeout":1870,"_transitionEnded":true},"timeout":1828,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                ai:{
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
            "xwj_xsanguo_longhun3":{
                trigger:{
                    global:"recoverBegin",
                },
                forced:true,
                filter:function (event,player,card){
        return event.getParent().skill=='xwj_xsanguo_longhun4'&&event.cards.length>1;
    },
                content:function (){
        trigger.num++;
    },
            },
            "xwj_xsanguo_longhun4":{
                audio:["longhun",4],
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张红桃牌当作桃使用';
    },
                position:"he",
                check:function (card,event){
        if(1) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return [1,2];
    },
                viewAs:{
                    name:"tao",
                    suit:"heart",
                    number:10,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":11,"name":"wuzhong","cardid":"7612547293","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"wuzhong","suit":"heart","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_onEndDelete":true,"timeout":554,"_transitionEnded":true},"timeout":513,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":12,"name":"shengdong","cardid":"2156409290","_transform":"translateX(224px)","_mouseentercreated":false,"clone":{"name":"shengdong","suit":"heart","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_onEndDelete":true,"timeout":555,"_transitionEnded":true},"timeout":514,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                ai:{
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },    
           		"xwj_xsanguo_longhun5":{						
           		audio:["longhun",4],
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){							                
					if(!event.filterCard({name:'shan'})) return false;
					if(player.countCards('he',{suit:'club'})<=0) return false;
					return true;
				},											
				 direct:true,		   
				content:function(){
					"step 0"						
					      var controls=[];                             
           if (player.countCards('he',{suit:'club'})>=1) controls.push('单花');        
           if (player.countCards('he',{suit:'club'})>=2)  controls.push('双花'); 
          controls.push('cancel2');                
  var str='请选择一张还是两张草花牌当【闪】使用或打出';            
  player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
            };                      
              "step 1"
              if(result.control){
    if (result.control=='单花') {
    event.goto(2);
    }
    if (result.control=='双花') {
    event.goto(4);
    } 
    return 'cancel2';
}                                                   
else {       
 event.finish(); 
}                     
				/*	旧写法：有瑕疵：
				 player.chooseControl('单花','双花','cancel2',function(){
            var player=_status.event.player;            
            if(player.countCards('he',{suit:'club'})<=1){
                return '单花';
            }
            if(player.countCards('he',{suit:'club'})>=2){
                return '双花';
            }           
            return 'cancel2';
        });
        "step 1"
        if(result.control=='单花'){
        event.goto(2);
        }
        else if(result.control=='双花'){
           event.goto(4);
        }
        */
          "step 2"
    		player.chooseCard(get.prompt('xwj_xsanguo_longhun5'),1,'he',function(card){				
						return get.suit(card)=='club';
					});
					"step 3"
					if(result.bool){						
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);										 
						player.logSkill('xwj_xsanguo_longhun5');					
			 		event.finish();		
					}
					else{
						event.finish();
					}						                     
          "step 4"
     	player.chooseCard(get.prompt('xwj_xsanguo_longhun5'),2,'he',function(card){				
						return get.suit(card)=='club';
					});					
					"step 5"
					if(result.bool){						
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);					
					 player.discardPlayerCard('he',_status.currentPhase,true);				
						player.logSkill('xwj_xsanguo_longhun5');					
			   event.finish();			
					}
					else{
						event.finish();
					}					         
				},				
			},             
            "xwj_xsanguo_longhun7":{
                audio:["longhun",4],
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张黑桃牌当作无懈可击使用';
    },
                position:"he",
                check:function (card,event){
        if(1) return 0;
        return 7-get.value(card);
    },
                selectCard:function (){
        return [1,2];
    },
                viewAs:{
                    name:"wuxie",
                    suit:"spade",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"nanman","cardid":"4314694258","_transform":"translateX(112px)","_mouseentercreated":false,"clone":{"name":"nanman","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1067},"timeout":960,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":8,"name":"sha","cardid":"4490253259","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"sha","suit":"spade","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1068},"timeout":961,"original":"h"}],
                },
                viewAsFilter:function (player){
        return player.countCards('he',{suit:'spade'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "xwj_xsanguo_longhun":{
                audio:["longhun",4],
                locked:true,
                unique:true,
                noremove:true,
                nodisable:true,
                forceunique:true,
                group:["xwj_xsanguo_longhun1","xwj_xsanguo_longhun2","xwj_xsanguo_longhun3","xwj_xsanguo_longhun4","xwj_xsanguo_longhun5", "xwj_xsanguo_longhun6","xwj_xsanguo_longhun7"],
                ai:{
                    skillTagFilter:function (player,tag){
            switch(tag){
                case 'respondSha':{
                    if(player.countCards('he',{suit:'diamond'})<Math.max(1)) return false;
                    break;
                }
                case 'respondShan':{
                    if(player.countCards('he',{suit:'club'})<Math.max(1)) return false;
                    break;
                }
                case 'save':{
                    if(player.countCards('he',{suit:'heart'})<Math.max(1)) return false;
                    break;
                }
            }
        },
                    maixie:true,
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'recover')&&target.hp>=2) return [0,0];
                if(!target.hasFriend()) return;
                if((get.tag(card,'damage')==2||get.tag(card,'loseHp'))&&target.hp>2) return [0,1];
            },
                    },
                    threaten:function (player,target){
            if(target.hp==2) return 2;
            return 0.5;
        },
                },
            },
            "xwj_xsanguo_longhun6":{
                trigger:{
                    player:"wuxieAfter",
                },
                forced:true,
                filter:function (event,player,card){
        return event.getParent().skill=='xwj_xsanguo_longhun7'&&event.cards.length>1;
    },
                content:function (){
                    player.discardPlayerCard('he',_status.currentPhase,true);
                },
            },
            
            "xwj_xsanguo_juejing":{
                mod:{
                    maxHandcard:function (player,num){
            return 2+num;
        },
                },
                trigger:{
                    player:"dyingAfter",
                },
                priority:10,
                frequent:true,
                 audio:["juejing",2],
                filter:function (event,player){                        
        return player.isAlive();        
    },
                group:"xwj_xsanguo_juejing_2",
                content:function (){
     player.draw();
    },
                subSkill:{
                    "2":{
                        trigger:{
                            player:"dying",
                        },
                         audio:["juejing",2],
                        priority:10,
                        frequent:true,
                        filter:function (event,player){                        
        return player.hp<=0;        
    },
                        content:function (){
     player.draw();
    },
                        sub:true,
                    },
                },
            },
"xwj_xsanguo_shouye":{
                audio:"ext:群英会:1",
                enable:"phaseUse",              
                init:function (player){
        player.storage.xwj_xsanguo_shouye=0;
    },
                intro:{
                    content:"已发动了#次授业",
                },    
	filterCard:function (card){
        return get.color(card)=='red';
    },
    filter:function (event,player){
        return player.countCards('h',{color:'red'})>0;
    },
    filterTarget:function (card,player,target){
        return player!=target;
    },
    check:function (card){
        return 8-get.value(card);
    },
	position:"h",
    selectTarget:[1,2],
    content:function (){
        target.draw();
		player.storage.xwj_xsanguo_shouye++;
		player.markSkill('xwj_xsanguo_shouye');
		player.update();
    },
                ai:{
                    threaten:1,
                     result:{
            target:function (player,target){
                if(target.countCards('h')<=1) return 3.5;
                return 2;
            },
					 },
                    order:4,
                    expose:0.4,
                },
            },
            "xwj_xsanguo_jiehuo":{
                audio:"ext:群英会:1",
                unique:true,
                trigger:{
                    player:"xwj_xsanguo_shouyeAfter",
                },
                forced:true,
                	derivation:['xwj_xsanguo_shouye2','xwj_xsanguo_shien'],
                filter:function (event,player){
        return player.storage.xwj_xsanguo_shouye>7;
    },
                content:function (){
       'step 0'  
    player.$fullscreenpop('授业解惑','water'); 
        'step 1'        
        player.loseMaxHp();        
        player.removeSkill('xwj_xsanguo_shouye'); 
        player.addSkill('xwj_xsanguo_shouye2'); 
        player.addSkill('xwj_xsanguo_shien'); 
        player.update(); 
        player.awakenSkill('xwj_xsanguo_jiehuo');             
    },
            },
            "xwj_xsanguo_shouye2":{  
         			audio:"ext:群英会:1",
                enable:"phaseUse",
                usable:1,
                selectTarget:[1,2],
          	filterCard:function (card){
        return get.color(card)=='red';
    },
    filter:function (event,player){
        return player.countCards('h',{color:'red'})>0;
    },
    filterTarget:function (card,player,target){
        return player!=target;
    },
    check:function (card){
        return 8-get.value(card);
    },
	position:"h",
    selectTarget:[1,2],
    content:function (){
        target.draw();
    },
                ai:{
                    threaten:1,
                     result:{
            target:function (player,target){
                if(target.countCards('h')<=1) return 3.5;
                return 2;
            },
					 },
                    order:4,
                    expose:0.4,
                },
            },
            "xwj_xsanguo_shien":{               
                trigger:{
                    global:"useCard",
                },
                direct:true,               
                filter:function (event,player){
        if(get.type(event.card)=='delay') return false;
        return event.player!=player&&(get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){     
        'step 0'  
         event.current=trigger.player;
       event.current.chooseBool('是否令司马徽摸一张牌？').set('ai',function(){                    
                     return get.attitude(player,event.current)>0;     
                    }); 
            'step 1'
            if(result.bool){
			game.playSu(['xwj_xsanguo_shien1','xwj_xsanguo_shien2','xwj_xsanguo_shien3'].randomGet());
            player.logSkill("xwj_xsanguo_shien");
            player.draw();    
            }
       else{
           event.finish();
       }
    },
            },
/*		"xwj_xsanguo_yizan":{			
group:["xwj_xsanguo_yizan0","xwj_xsanguo_yizan1","xwj_xsanguo_yizan5"],
	init:function (player){
//	player.unmarkSkill('xwj_xsanguo_yizan');
        player.storage.xwj_xsanguo_yizan=0;
    },
                intro:{
                    content:"mark",
                },       
},*/
			//双牌打出闪：
			"xwj_xsanguo_yizan1":{								
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(event.filterCard({name:'wuxie'})) return false;
					if(!event.filterCard({name:'shan'})) return false;
					//if(player.hasSkill('xwj_xsanguo_yizan4')) return false;
					//if(event.parent.name!='sha') return false;
					var hs=player.getCards('h',{type:'basic'});
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])=='basic'){
							break;
						}
					}
					if(i==hs.length) return false;
					return true;
				},								
				 direct:true,			      
				    	init:function (player){
    	player.unmarkSkill('xwj_xsanguo_yizan');
        player.storage.xwj_xsanguo_yizan=[];
        player.syncStorage('xwj_xsanguo_yizan');
    },
                intro:{
                    content:"已发动了#次翊赞",
                },       
				content:function(){
					"step 0"						
					player.chooseCard(get.prompt('xwj_xsanguo_yizan1'),'he',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(!_status.event.player.countCards('h','shan')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.bool){
						game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);
						player.chooseToDiscard('he',true); 
						player.markSkill('xwj_xsanguo_yizan');
					 player.storage.xwj_xsanguo_yizan++;                     
        player.update(); 
						player.logSkill('xwj_xsanguo_yizan1');
						player.addTempSkill('xwj_xsanguo_yizan4');						
					}
					else{
						event.finish();
					}									
				},				
				ai:{				  
			                respondShan:true,
				},
			},
			//双牌打出杀：
			"xwj_xsanguo_yizan5":{								
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(event.filterCard({name:'wuxie'})) return false;
					if(!event.filterCard({name:'sha'})) return false;
					//if(player.hasSkill('xwj_xsanguo_yizan4')) return false;
					var hs=player.getCards('h',{type:'basic'});
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])=='basic'){
							break;
						}
					}
					if(i==hs.length) return false;
					return true;
				},								
				 direct:true,
				   	init:function (player){
    	player.unmarkSkill('xwj_xsanguo_yizan');
        player.storage.xwj_xsanguo_yizan=[];
        player.syncStorage('xwj_xsanguo_yizan');
    },
                intro:{
                    content:"已发动了#次翊赞",
                },       
				content:function(){
					"step 0"						
					player.chooseCard(get.prompt('xwj_xsanguo_yizan5'),'he',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(!_status.event.player.countCards('h','sha')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.bool){
						game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'sha'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);
						player.chooseToDiscard('he',true); 
					 player.markSkill('xwj_xsanguo_yizan');
					 player.storage.xwj_xsanguo_yizan++;                      
       player.update(); 
						player.logSkill('xwj_xsanguo_yizan5');
						player.addTempSkill('xwj_xsanguo_yizan4');						
					}
					else{
						event.finish();
					}									
				},				
								ai:{				  
			                respondSha:true,
				},
			},
			"xwj_xsanguo_yizan4":{},
			//单牌打出闪：
			"xwj_xsanguo_yizan3":{								
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(event.filterCard({name:'wuxie'})) return false;
					if(!event.filterCard({name:'shan'})) return false;
					//if(player.hasSkill('xwj_xsanguo_yizan4')) return false;
					//if(event.parent.name!='sha') return false;
					var hs=player.getCards('h',{type:'basic'});
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])=='basic'){
							break;
						}
					}
					if(i==hs.length) return false;
					return true;
				},								
				direct:true,
				content:function(){
					"step 0"						
					player.chooseCard(get.prompt('xwj_xsanguo_yizan3'),'he',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(!_status.event.player.countCards('h','shan')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.bool){
						game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);						 					    
						player.logSkill('xwj_xsanguo_yizan3');
						player.addTempSkill('xwj_xsanguo_yizan4');						
					}
					else{
						event.finish();
					}									
				},				
			},
			//单牌打出杀：
			"xwj_xsanguo_yizan6":{								
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(event.filterCard({name:'wuxie'})) return false;
					if(!event.filterCard({name:'sha'})) return false;
					//if(player.hasSkill('xwj_xsanguo_yizan4')) return false;
					//if(event.parent.name!='sha') return false;
					var hs=player.getCards('h',{type:'basic'});
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])=='basic'){
							break;
						}
					}
					if(i==hs.length) return false;
					return true;
				},								
				direct:true,
				content:function(){
					"step 0"						
					player.chooseCard(get.prompt('xwj_xsanguo_yizan6'),'he',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(!_status.event.player.countCards('h','sha')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.bool){
						game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'sha'}}	
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);						 					    
						player.logSkill('xwj_xsanguo_yizan3');
						player.addTempSkill('xwj_xsanguo_yizan4');						
					}
					else{
						event.finish();
					}									
				},				
			},
			//双牌使用：
			"xwj_xsanguo_yizan":{
		// 	audio:"ext:群英会:2",
              //  enable:["chooseToUse"],
               enable:["chooseToRespond","chooseToUse"],
               filter:function (event,player){
        return player.countCards('h',{type:'basic'})>0&&player.countCards('he')>1;
    },
    	init:function (player){
    	player.unmarkSkill('xwj_xsanguo_yizan');
        player.storage.xwj_xsanguo_yizan=[];
        player.syncStorage('xwj_xsanguo_yizan');
    },
                intro:{
                    content:"已发动了#次翊赞",
                },       
    group:["xwj_xsanguo_yizan1","xwj_xsanguo_yizan5"],
         chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        if(event.filterCard({name:'sha'},player,event)){
                            list.push(['基本','','sha']);
                            list.push(['基本','','sha','fire']);
                            list.push(['基本','','sha','thunder']);
                        }
                        if(event.filterCard({name:'tao'},player,event)){
                            list.push(['基本','','tao']);
                        }
                        if(event.filterCard({name:'jiu'},player,event)){
                            list.push(['基本','','jiu']);
                        }
                        return ui.create.dialog('翊赞',[list,'vcard'],'hidden');
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':return 5;
                                case 'jiu':return 3.01;
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='fire') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function (links,player){
                        return {
							selectCard:function (){
     //   if(_status.event.player.storage.xwj_xsanguo_longyuan) return 1;
        return 2;
    },
                             filterCard:function (card){
        if(ui.selected.cards.length){
            if(get.type(ui.selected.cards[0],'trick')=='basic') return true;
            return get.type(card)=='basic';
        }
        return true;
    },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'he',
				                   			complexCard:true,
                            popname:true,
                            precontent:function(){
                          	game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());
                            player.storage.xwj_xsanguo_yizan++;
                            player.markSkill('xwj_xsanguo_yizan');
                            player.update(); 
                            },
                        }
                    },
                    prompt:function (links,player){
                        return '你可以将两张牌（其中至少一张是基本牌）当'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用或打出';
                    },
                },
                ai:{
                    order:function (){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(!player.storage.xwj_xsanguo_yizan.jiu&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                            return 3.1;
                        }
                        return 2.9;
                    },
                    save:true,
                    respondSha:true,
			                respondShan:true,
                    skillTagFilter:function (player,tag,arg){
                        if(player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he')){
                            if(!player.storage.xwj_xsanguo_yizan) player.storage.xwj_xsanguo_yizan={};
                            if(tag=='respondSha'){
                                if(arg!='use') return false;
                                if(player.storage.xwj_xsanguo_yizan.sha) return false;
                            }
                            else{
                                if(player.storage.xwj_xsanguo_yizan.tao&&player.storage.xwj_xsanguo_yizan.jiu) return false;
                            }
                        }
                        else{
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                },
            },		
            "xwj_xsanguo_longyuan":{
                audio:"ext:群英会:2",
                unique:true,
                trigger:{
                    player:["respond","useCard"],
                },
                forced:true,
                filter:function (event,player){
                    return player.storage.xwj_xsanguo_yizan>=3;
                },
                content:function (){
        'step 0'  
        player.$fullscreenpop('龙跃于渊','fire'); 
        'step 1'
        player.addSkill('xwj_xsanguo_yizan2');
        
        player.removeSkill('xwj_xsanguo_yizan');
     
        player.awakenSkill('xwj_xsanguo_longyuan');
        
        //player.removeSkill('xwj_xsanguo_longyuan');        
        
        player.update();
            
    },
            },
			//单牌使用：
			"xwj_xsanguo_yizan2":{
                enable:["chooseToRespond","chooseToUse"],
               filter:function (event,player){
        return player.countCards('h',{type:'basic'})>0;
    },	
	group:["xwj_xsanguo_yizan3","xwj_xsanguo_yizan6"],
                chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        if(event.filterCard({name:'sha'},player,event)){
                            list.push(['基本','','sha']);
                            list.push(['基本','','sha','fire']);
                            list.push(['基本','','sha','thunder']);
                        }
                        if(event.filterCard({name:'tao'},player,event)){
                            list.push(['基本','','tao']);
                        }
                        if(event.filterCard({name:'jiu'},player,event)){
                            list.push(['基本','','jiu']);
                        }
                        return ui.create.dialog('翊赞',[list,'vcard'],'hidden');
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':return 5;
                                case 'jiu':return 3.01;
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='fire') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function (links,player){
                        return {
							/*selectCard:function (){
        return 1;
    },*/
                filterCard:function (card){          
                    return get.type(card)=='basic';
                },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'h',
				                       //complexCard:true,
                            popname:true,
                            precontent:function(){
                               game.playSu(['xwj_xsanguo_yizan1','xwj_xsanguo_yizan2'].randomGet());           
                            },
                        }
                    },
                    prompt:function (links,player){
                        return '你可以将一张基本牌当'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用或打出';
                    },
                },
                ai:{
                    order:function (){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(!player.storage.xwj_xsanguo_yizan2.jiu&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                            return 3.1;
                        }
                        return 2.9;
                    },
                    save:true,
                    //respondSha:true,
		             	//		respondShan:true,
                    skillTagFilter:function (player,tag,arg){
                        if(player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he')){
                            if(!player.storage.xwj_xsanguo_yizan2) player.storage.xwj_xsanguo_yizan2={};
                            if(tag=='respondSha'){
                                if(arg!='use') return false;
                                if(player.storage.xwj_xsanguo_yizan2.sha) return false;
                            }
                            else{
                                if(player.storage.xwj_xsanguo_yizan2.tao&&player.storage.xwj_xsanguo_yizan2.jiu) return false;
                            }
                        }
                        else{
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                },
            },
/*"xwj_xsanguo_yizan":{
                audio:"ext:群英会:2",
                enable:["chooseToRespond","chooseToUse"],
                position:"he",
                complexCard:true,
                init:function (player){
        player.storage.xwj_xsanguo_yizan=0;
    },
                intro:{
                    content:"mark",
                },
                selectCard:function (){
     //   if(_status.event.player.storage.xwj_xsanguo_longyuan) return 1;
        return 2;
    },
                filterCard:function (card){
        if(ui.selected.cards.length){
            if(get.type(ui.selected.cards[0],'trick')=='basic') return true;
            return get.type(card)=='basic';
        }
        return true;
    },
                filter:function (event,player){
        return player.countCards('h',{type:'basic'})>0&&player.countCards('he')>1;
    },
                content:function (){
        'step 0'   
        player.storage.xwj_xsanguo_yizan++;
            player.markSkill('xwj_xsanguo_yizan');
            player.update();        
    var list=[];
                if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))){
                    if(game.hasPlayer(function(current){
                        return player.canUse('sha',current);
                    })){
                        list.push(['基本','','sha']);
                        list.push(['基本','','sha','fire']);
                        list.push(['基本','','sha','thunder']);
                    }
                }
                if(game.hasPlayer(function(current){
                if(current.canUse('tao',current,true,true)){
                    list.push(['基本','','tao']);
                }
				}))
                if(player.canUse('jiu',player,true,true)){
                    list.push(['基本','','jiu']);
                }
                if(list.length){
                    player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(card.name=='tao'){
                            if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                                return 5;
                            }
                            return 1;
                        }
                        if(card.name=='sha'){
                            if(game.hasPlayer(function(current){
                                return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                            })){
                                if(card.nature=='fire') return 2.95;
                                if(card.nature=='thunder') return 2.92;
                                return 2.9;
                            }
                            return 0;
                        }
                        if(card.name=='jiu'){
                            return 0.5;
                        }
                        return 0;
                    });
                }
                else{
                    event.finish();
                }                    
        
        'step 1'
        if(result&&result.bool&&result.links[0]){
            var card={name:result.links[0][2],nature:result.links[0][3]};
            if(card.name=='sha'){
                event.fakecard=card;
                player.chooseTarget(function(card,player,target){
                    return player.canUse(_status.event.fakecard,target,true,true);
                },true,'选择出杀目标').set('ai',function(target){
                    var player=_status.event.player;
                    return get.effect(target,_status.event.fakecard,player,player);
                }).set('fakecard',card);
            }
			
			if(card.name=='tao'){ 
game.findPlayer(function(current){	
return current.hp<=0;
})
			player.useCard(card,current);
			 event.finish();
			}
			//待完善
			
            else{
                player.useCard(card,player);
                event.finish();
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.targets&&result.targets.length){
            player.useCard(event.fakecard,result.targets);
            
        }
    },
                ai:{
                save:true,
                wuxie:false,
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('h','sha')) return false;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) return 0.6
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
            },
                    },
                    respondSha:true,
                    threaten:0.8,
                },
            },*/
			
			
            /*"xwj_xsanguo_yizan2":{
                audio:"ext:群英会:2",
                enable:["chooseToRespond","chooseToUse"],
                selectCard:function (){
        return 1;
    },
                filterCard:function (card){          
            return get.type(card)=='basic';
    },
                filter:function (event,player){
        return player.countCards('h',{type:'basic'})>0;
    },
                content:function (){
        'step 0'     
    var list=[];
                if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))){
                    if(game.hasPlayer(function(current){
                        return player.canUse('sha',current);
                    })){
                        list.push(['基本','','sha']);
                        list.push(['基本','','sha','fire']);
                        list.push(['基本','','sha','thunder']);
                    }
                }
                if(player.canUse('tao',player,true,true)){
                    list.push(['基本','','tao']);
                }
                if(player.canUse('jiu',player,true,true)){
                    list.push(['基本','','jiu']);
                }
                if(list.length){
                    player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(card.name=='tao'){
                            if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                                return 5;
                            }
                            return 1;
                        }
                        if(card.name=='sha'){
                            if(game.hasPlayer(function(current){
                                return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                            })){
                                if(card.nature=='fire') return 2.95;
                                if(card.nature=='thunder') return 2.92;
                                return 2.9;
                            }
                            return 0;
                        }
                        if(card.name=='jiu'){
                            return 0.5;
                        }
                        return 0;
                    });
                }
                else{
                    event.finish();
                }                    
        
        'step 1'
        if(result&&result.bool&&result.links[0]){
            var card={name:result.links[0][2],nature:result.links[0][3]};
            if(card.name=='sha'){
                event.fakecard=card;
                player.chooseTarget(function(card,player,target){
                    return player.canUse(_status.event.fakecard,target,true,true);
                },true,'选择出杀目标').set('ai',function(target){
                    var player=_status.event.player;
                    return get.effect(target,_status.event.fakecard,player,player);
                }).set('fakecard',card);
            }
            else{
                player.useCard(card,player);
                event.finish();
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.targets&&result.targets.length){
            player.useCard(event.fakecard,result.targets);
            
        }
    },
                ai:{
                save:true,
                wuxie:false,
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('h','sha')) return false;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) return 0.6
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
            },
                    },
                    respondSha:true,
                    threaten:0.8,
                },
            },*/

 "xwj_xsanguo_wuniang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:["useCard","respond"],
                },
                direct:true,
			           	priority:2018,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function (){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('he')>0;
        });
        check=(num>=2);
        player.chooseTarget(get.prompt('xwj_xsanguo_wuniang'),1,function(card,player,target){
            return target.countCards('he')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){
            var target=result.targets[0];   
            player.logSkill('xwj_xsanguo_wuniang',target);
            player.gainPlayerCard(target,'he',true);
            target.draw();  
          
        }
        else{
            event.finish();
        }
     "step 2"  
   for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='guansuo'){
				player.chooseBool('是否令关索摸一张牌？').set('ai',function(){                    
                     return get.attitude(player,game.players[i])>0;     
                    });           
            }
            }
			"step 3"
			if(result.bool){
			for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='guansuo'){
				game.players[i].draw();	
			}
			}
			}			
    else{
    event.finish();
    }   
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "xwj_xsanguo_zhengnan":{
                audio:"ext:群英会:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
        return event.player!=player&&event.card&&event.card.name=='nanman'&&event.notLink();
    },
                direct:true,
                content:function (){
        "step 0";
        player.chooseTarget('选择【镇南】的目标',lib.translate.xwj_xsanguo_zhengnan_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
                   var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });        
        "step 1"
        if(result.bool){
            player.logSkill('xwj_xsanguo_zhengnan');
            var target=result.targets[0];
            player.line(target);           
            target.damage([1,2,3].randomGet());            
        }
    },
            },
            "xwj_xsanguo_xushen":{
                trigger:{
                    player:"recoverAfter",
                },
                direct:true,
                unique:true,
                priority:18,
                logTarget:"source",
                audio:"ext:群英会:2",
                derivation:['xwj_xsanguo_zhengnan'],
                filter:function (event,player){        
               // if(event.type!='dying') return false;   
                for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='guansuo') return false;           
            }        
        return player.hp==1&&event.source&&event.source!=player&&event.source.sex=='male';        
    },
                content:function (){
        'step 0'                               
        trigger.source.chooseBool('你是否愿意娶鲍三娘为妻？').set('ai',function(){                    
                    if(trigger.source.isAlive()) return true;     
                    });
       'step 1'
        if(result.bool){
        game.delay(2.8);
        player.$fullscreenpop('有情人终成眷属','fire'); 
        game.delay(0.5);
        var name1=trigger.source.name;
        var name2='guansuo';        
        trigger.source.reinit(name1,name2,false);
        if(trigger.source.identity=='zhu'){
        trigger.source.maxHp=5;
        }
        else{
        trigger.source.maxHp=4;
        }
        trigger.source.update();
        player.logSkill('xwj_xsanguo_xushen');  
            player.awakenSkill('xwj_xsanguo_xushen');          
            player.recover();
            player.addSkill('xwj_xsanguo_zhengnan');
            player.update();
        }
        else{
            event.finish();
        }        
    },
            },

	"xwj_xsanguo_oldguhuo":{
         audio:2,
         init:function(player){
          player.storage.xwj_xsanguo_oldguhuo = {
            list:[],
            card:null,
            sayCard:null,
          };
          for(var i=0;i<lib.card.list.length;i++){
            var name = lib.card.list[i][2];
            if(get.type({name:name})!='basic')continue;
            if(player.storage.xwj_xsanguo_oldguhuo.list.contains(name))continue;
            player.storage.xwj_xsanguo_oldguhuo.list.push(name);
          }
          for(var i=0;i<lib.card.list.length;i++){
            var name = lib.card.list[i][2];
            if(get.type({name:name})!='trick')continue;
            if(player.storage.xwj_xsanguo_oldguhuo.list.contains(name))continue;
            player.storage.xwj_xsanguo_oldguhuo.list.push(name);
          }
          for(var i=0;i<player.storage.xwj_xsanguo_oldguhuo.list.length;i++){
            player.storage.xwj_xsanguo_oldguhuo.list[i] = [get.translation(get.type({name:player.storage.xwj_xsanguo_oldguhuo.list[i]})),'',player.storage.xwj_xsanguo_oldguhuo.list[i]];
          }
          player.storage.xwj_xsanguo_oldguhuo.list = [['基本','','sha','fire'],['基本','','sha','thunder']].concat(player.storage.xwj_xsanguo_oldguhuo.list);
        },
        intro:{
          content:function(storage,player){
            var str = '';
            if(storage.sayCard != null){
              str += '声明的牌：' + get.translation(storage.sayCard);
            }
            return str;
          },
          mark:function(dialog,content,player){
            if(content.card == null)return ;
            if(content.sayCard == null)return ;
            if(player.isUnderControl(true)){
              dialog.addSmall([[content.card],'vcard']);
            } else {
              dialog.addSmall([[content.card],'blank']);
            }
            var str = '声明的牌：' + get.translation(content.sayCard);
            dialog.add(str);
          },
        },
        trigger:{player:'chooseToRespondBegin'},
        filter:function(event,player){
          if(player.countCards('h')==0)return false;
          for(var i=0;i<player.storage.xwj_xsanguo_oldguhuo.list.length;i++){
            var card = {
              name:player.storage.xwj_xsanguo_oldguhuo.list[i][2],
              nature:player.storage.xwj_xsanguo_oldguhuo.list[i][3],
            };
            if(event.filterCard(card,player,event)) return true;
          }
          return false;
        },
        xwj_xsanguo_guhuo:function(player,card,sayCard,event){
          var next = game.createEvent('xwj_xsanguo_guhuo');
          next.card = card;
          next.sayCard = sayCard;
          next.event = event;
          next.player = player;
          next.setContent(function(){
            "step 0"
           player.logSkill('xwj_xsanguo_oldguhuo');
            var player = event.player;
            player.storage.xwj_xsanguo_oldguhuo.card = event.card;
            player.storage.xwj_xsanguo_oldguhuo.sayCard = event.sayCard;
            player.markSkill('xwj_xsanguo_oldguhuo');
            player.lose(event.card,ui.special);
            player.popup(get.translation(event.sayCard));
            game.log(player,'声明了',event.sayCard);
            event.targets = game.filterPlayer(function(current){
              return current!=player&&current.hp > 0;
            });
            event.targets.sort(lib.sort.seat);
            event.zhiyis = [];
            "step 1"
            game.delay();
            event.target = event.targets.shift(0);
            event.target.chooseBool('是否质疑蛊惑？').ai=function(){
              var att = get.attitude(event.target,event.player);
              if(att >= 0){
                return false;
              } else {
                if(event.target.hp == 1)return false;
                if(event.zhiyis.length)return false;
                if(event.event.trigger == 'useTo'){
                  var effect = 0;
                  for(var i=0;i<event.event.targets.length;i++){
                    effect += get.effect(event.event.targets[i],event.sayCard,event.player,event.target);
                  }
                  if(effect >= 0)return false;
                }
                return true;
              }
              return true;
            };
            "step 2"
            if(result.bool){
              event.target.popup('质疑');
              game.log(event.target,'质疑');
              event.zhiyis.push(event.target);
              event.target.markSkillCharacter('xwj_xsanguo_oldguhuo',event.player,'质疑','');
            } else {
              event.target.popup('不质疑');
            }
            if(event.targets.length){
              event.goto(1);
            }
            "step 3"
            event.player.$throw(event.card);
            event.player.unmarkSkill('xwj_xsanguo_oldguhuo');
            event.player.storage.xwj_xsanguo_oldguhuo.card = null;
            event.player.storage.xwj_xsanguo_oldguhuo.sayCard = null;
            ui.discardPile.appendChild(event.card);
            var targets = event.zhiyis.sort(lib.sort.seat);
            if(targets.length){
              if(event.card.name==event.sayCard.name&&(event.card.nature == event.sayCard.nature)){
                targets.forEach(function(target){
                  target.loseHp();
                  game.delay();
                });
                if(get.suit(event.card) == 'heart'){
                  if(event.event.trigger == 'respond'){
                    _status.event.xwj_xsanguo_oldguhuo = true;
                     } else {
                    player.useCard(event.sayCard,event.event.targets);
                           }
                }
              } else {
                targets.forEach(function(target){
                  target.draw();
                  game.delay();
                });
              }
            } else {
              if(event.event.trigger == 'respond'){
                _status.event.xwj_xsanguo_oldguhuo = true;
              } else {
                event.player.useCard(event.sayCard,event.event.targets);
              }
            }
            targets.forEach(function(target){
              target.unmarkSkill('xwj_xsanguo_oldguhuo');
            });
          });
        },
        direct:true,
        content:function(){
          "step 0"
          var dialog = ui.create.dialog('是否发动蛊惑？选择一张要声明的牌');
          dialog.add([player.storage.xwj_xsanguo_oldguhuo.list,'vcard']);
          player.chooseButton(dialog).set('filterButton',function(button){
            var evt=_status.event.getTrigger();
						if(evt&&evt.filterCard){
							return evt.filterCard({name:button.link[2],nature:button.link[3]},_status.event.player,evt);
						}
						return true;
          }).set('ai',function(button){
            var card = {
              name: button.link[2],
              nature: button.link[3],
            };
            var hs = player.getCards('h');
            for(var i=0;i<hs.length;i++){
              if(hs[i].name==card.name&&hs[i].nature==card.nature)return 2;
            }
						return -1;
          });
          "step 1"
          if(result.bool){
            event.sayCard = {
              name: result.links[0][2],
              nature: result.links[0][3],
            };
            player.chooseCard('蛊惑：请选择一张扣置的手牌','h',true).ai=function(card){
              if(card.name==event.sayCard.name) {
                if(get.suit(card) == 'heart')return 15;
                return 10;
              }
              return 6 - get.value(card);
            };
          } else {
            event.finish();
          }
          "step 2"
          player.logSkill('xwj_xsanguo_oldguhuo');
          lib.skill.xwj_xsanguo_oldguhuo.xwj_xsanguo_guhuo(player,result.cards[0],event.sayCard,{
            trigger:'respond',
          });
          "step 3"
          if(_status.event.xwj_xsanguo_oldguhuo){
            trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:event.sayCard};
            delete _status.event.xwj_xsanguo_oldguhuo;
          }
        },
				ai:{
					order:4,
					useful:-1,
					value:-1,
          respondSha:true,
          respondShan:true,
          save:true,
          skillTagFilter:function(player){
            return player.countCards('h');
          },
				},
        group:['xwj_xsanguo_oldguhuo_use','xwj_xsanguo_oldguhuo_wuxie'],
        subSkill:{
          use:{
          audio:2,
            enable:'chooseToUse',
            filter:function(event,player){
              if(player.countCards('h')==0)return false;
              for(var i=0;i<player.storage.xwj_xsanguo_oldguhuo.list.length;i++){
                var card = {
                  name:player.storage.xwj_xsanguo_oldguhuo.list[i][2],
                  nature:player.storage.xwj_xsanguo_oldguhuo.list[i][3],
                };
                if(card.name=='wuxie')continue;
                if(event.filterCard(card,player,event)) return true;
              }
              return false;
            },
            selectCard:1,
            filterCard:true,
            prompt:'蛊惑：选择一张扣置的牌',
            check:function(card){
              var evt = _status.event;
              if(get.type(card)!='basic' && get.type(card) != 'trick')return -1;
              return (game.hasPlayer(function(current){
                return evt.player.canUse(card,current)&&get.effect(current,card,evt.player,evt.player) > 0;
              })?20:-10) + (get.suit(card)=='heart'?10:0) + get.order(card);
            },
            discard:false,
            content:function(){
              "step 0"
              event.card = cards[0];
              var dialog = ui.create.dialog('蛊惑：选择一张要声明的牌');
              dialog.add([player.storage.xwj_xsanguo_oldguhuo.list,'vcard']);
              player.chooseButton(dialog,true).set('filterButton',function(button){
                var evt=_status.event.getParent(3);
                var card = {name:button.link[2],nature:button.link[3]};
                var info = lib.card[card.name];
                if(info.selectTarget&&!game.hasPlayer(function(current){
                  return player.canUse(card,current);
                }))return false;
                if(evt&&evt.filterCard){
                  return evt.filterCard(card,player,evt);
                }
                return true;
              }).set('ai',function(button){
                if(button.link[2] == event.card.name && button.link[3] == event.card.nature){
                  return 10;
                }
                return 2 + Math.random();
              });
              "step 1"
              event.sayCard = {
                name:result.links[0][2],
                nature:result.links[0][3],
              };
              player.chooseTarget('蛊惑：选择'+get.translation(event.sayCard)+'的目标',lib.card[event.sayCard.name].selectTarget,function(card,player,target){
                return player.canUse(event.sayCard,target);
              },true).ai=function(target){
                return get.effect(target,event.sayCard,player,player);
              };
              "step 2"
              player.line(result.targets);
              lib.skill.xwj_xsanguo_oldguhuo.xwj_xsanguo_guhuo(player,event.card,event.sayCard,{
                trigger:'useTo',
                targets:result.targets,
              });
            },
            ai:{
              order: 8,
              result:{
                player:function(player){
                  if(_status.event.dying) return get.attitude(player,_status.event.dying);
                  return 10;
                }
              },
            },
          },
          wuxie:{
          audio:2,
            enable:'chooseToUse',
            filter:function(event,player){
              return player.countCards('h');
            },
            selectCard:1,
            filterCard:true,
            discard:false,
            viewAs:{name:'wuxie'},
            prompt:'是否发动蛊惑,声明[无懈可击]？',
            check:function(card){
              if(card.name=='wuxie'&&get.suit(card)=='suit')return 20;
              if(player.countCards('h',{name:'wuxie'}) > 1 && card.name=='wuxie')return 10;
              if(player.countCards('h') < 4) return -1; 
              if(card.name=='wuxie') return -1;
              return 6 - get.value(card);
            },
            onuse:function(result,player){
              var evt = _status.event;
              var next = game.createEvent('xwj_xsanguo_guhuo');
              next.evt = evt;
              next.player = player;
              next.card = result.cards[0];
              next.sayCard = {name:'wuxie'};
              next.setContent(function(){
                "step 0"
                player.logSkill("xwj_xsanguo_oldguhuo");
                var player = event.player;
                player.storage.xwj_xsanguo_oldguhuo.card = event.card;
                player.storage.xwj_xsanguo_oldguhuo.sayCard = event.sayCard;
                player.markSkill('xwj_xsanguo_oldguhuo');
                player.lose(event.card,ui.special);
                player.popup(get.translation(event.sayCard));
                game.log(player,'声明了',event.sayCard);
                event.targets = game.filterPlayer(function(current){
                  return current!=player&&current.hp > 0;
                });
                event.targets.sort(lib.sort.seat);
                event.zhiyis = [];
                "step 1"
              player.logSkill("xwj_xsanguo_oldguhuo");
                game.delay();
                event.target = event.targets.shift(0);
                event.target.chooseBool('是否质疑蛊惑？').ai=function(){
                  var att = get.attitude(event.target,event.player);
                  if(att >= 0){
                    return false;
                  } else {
                    if(event.target.hp == 1)return false;
                    if(event.zhiyis.length)return false;
                    return true;
                  }
                  return true;
                };
                "step 2"
                if(result.bool){
                  event.target.popup('质疑');
                  game.log(event.target,'质疑');
                  event.zhiyis.push(event.target);
                  event.target.markSkillCharacter('xwj_xsanguo_oldguhuo',event.player,'质疑','');
                } else {
                  event.target.popup('不质疑');
                }
                if(event.targets.length){
                  event.goto(1);
                }
                "step 3"
                event.player.unmarkSkill('xwj_xsanguo_oldguhuo');
                event.player.storage.xwj_xsanguo_oldguhuo.card = null;
                event.player.storage.xwj_xsanguo_oldguhuo.sayCard = null;
                ui.discardPile.appendChild(event.card);
                var targets = event.zhiyis.sort(lib.sort.seat);
                if(targets.length){
                  if(event.card.name==event.sayCard.name&&(event.card.nature == event.sayCard.nature)){
                    targets.forEach(function(target){
                      target.loseHp();
                      game.delay();
                    });
                    if(get.suit(event.card) != 'heart'){
                      event.evt.cancel();
                    }
                  } else {
                    targets.forEach(function(target){
                      target.draw();
                      game.delay();
                    });
                    event.player.$throw(event.card);
                    event.evt.cancel();
                  }
                } 
                targets.forEach(function(target){
                  target.unmarkSkill('xwj_xsanguo_oldguhuo');
                });
              });
            },
          },
        },
      },  
	
	
	//老蛊惑代码来自可乐加冰24;
	
	
	
	
	"xwj_xsanguo_guhuo":{
				enable:'chooseToUse',
				delay:0,
				direct:true,			
				unique:true,
				usable:1,
				filterCard:true,
				discard:false,
				lose:false,		
				filter:function(event,player){ 
					if(event.parent.name!='phaseUse'&&event.type!='dying') return false;	
					var num=get.skillCount('xwj_xsanguo_guhuo')+get.skillCount('xwj_xsanguo_guhuo3')+get.skillCount('xwj_xsanguo_guhuo6');
					if(player.storage.xwj_xsanguo_guhuo7) return false;	
					if(num>=1) return false;				
         	   	 	return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					event.viewcard=cards[0];	
					var list=[];
					var evt=_status.event.parent.parent;
					if(evt&&evt.filterCard){
						for(var i in lib.card){
							if(!lib.translate[i+'_info']) continue;
							if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
							if(lib.config.hiddenCardPack.indexOf(i)==0) continue;
							if(evt.filterCard({name:i},player)) list.push([lib.card[i].type,'',i]);
						}				
					}
					if(list.length&&event.parent.parent.parent.name!='phaseUse'){
						var dialog=ui.create.dialog('蛊惑:请选择蛊惑声明的牌',[list,'vcard']);
						player.chooseButton(dialog,function(button){
							if(Math.random()>0.5) return ai.get.value({name:button.link[2]},player);
							var i=Math.floor(Math.random()*list.length);
							return list[i];
						});	
					}					
					else{		
						var list1=[];
						for(var i in lib.card){
							if(!lib.translate[i+'_info']) continue;
							if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
							if(lib.config.hiddenCardPack.indexOf(i)==0) continue;
							if(lib.card[i].type=='trick') list1.push(['trick','',i]);
						}
						var list2=[];
						for(var i in lib.card){
							if(!lib.translate[i+'_info']) continue;
							if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
							if(lib.config.hiddenCardPack.indexOf(i)==0) continue;
							if(lib.card[i].type=='basic') list2.push(['basic','',i]);
						}				
						list2.push(['基本','','sha','fire']);
						list2.push(['基本','','sha','thunder']);	
						list2.push(['毒杀','','sha','poison']);	
						list2.sort(lib.sort.random);				
						var dialog=ui.create.dialog('蛊惑:请选择蛊惑声明的牌');
						dialog.add('基本牌');
						dialog.add([list2,'vcard']);
						dialog.add('锦囊牌');	
						dialog.add([list1,'vcard']);
						var trigger=_status.event.getParent();				
						player.chooseButton(dialog,function(button){
							var player=_status.event.player;
							var recover=0,lose=1;
							for(var i=0;i<game.players.length;i++){
								if(!game.players[i].isOut()){
									if(game.players[i].hp<game.players[i].maxHp){
										if(ai.get.attitude(player,game.players[i])>0){
											if(game.players[i].hp<2){
												lose--;
												recover+=0.5;
											}
											lose--;
											recover++;
										}
										else if(ai.get.attitude(player,game.players[i])<0){
											if(game.players[i].hp<2){
												lose++;
												recover-=0.5;
											}
											lose++;
											recover--;
										}
									}
									else{
										if(ai.get.attitude(player,game.players[i])>0){
											lose--;
										}
										else if(ai.get.attitude(player,game.players[i])<0){
											lose++;
										}
									}
								}
							}
							if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;				
							if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
							if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
							if(player.countCards('h','sha')) return (button.link[2]=='jiu')?1:-1;
							if(!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;		
							return (button.link[2]=='wuzhong')?1:-1;
						}).filterButton=function(button){	
							if(!lib.filter.cardEnabled({name:button.link[2]},player,trigger)) return false;
							if(!lib.filter.cardUsable({name:button.link[2]},player,trigger)) return false;
							return true;
						};		
					}					
					"step 1"
					if(result.bool){
						event.name=result.buttons[0].link[2];	
						if(result.buttons[0].link[3]) event.nature=result.buttons[0].link[3];
						event.goto(2);
					}
					else{
						player.getStat('skill').xwj_xsanguo_guhuo--;
						event.finish();
					}
					"step 2"					
					player.say('道法玄机变化莫测，我声明'+get.translation(event.name));	
					player.storage.xwj_xsanguo_guhuo=cards;
					lib.skill.xwj_xsanguo_guhuo2.viewAs={name:event.name,nature:event.nature};
					event.parent.parent.backup('xwj_xsanguo_guhuo2');
					event.parent.parent.step=0;
					if(event.isMine()){
						event.parent.parent.openskilldialog='选择'+get.translation(event.name)+'的目标';
					}
				},		
				group:['xwj_xsanguo_guhuo5','xwj_xsanguo_guhuo4','xwj_xsanguo_guhuo3','xwj_xsanguo_guhuo6','xwj_xsanguo_guhuo7'],
				ai:{
					save:true,
					threaten:8,
					order:7,
					result:{
						player:function(player){
							var num=player.countCards('h');
							if(_status.dying&&ai.get.attitude(player,_status.dying)>0) return num-1;
							if(_status.dying&&ai.get.attitude(player,_status.dying)<=0) return 0;
							if(_status.currentPhase!=player) return 0;
							return num-2;
						},
					},
				},				
			},
			"xwj_xsanguo_guhuo4":{
				trigger:{global:'phaseAfter'},
				forced:true,
				silent:true,
				popup:false,
				content:function(){
					player.stat.push({card:{},skill:{}});
					player.storage.xwj_xsanguo_guhuo7=false;
				}					
			},				
			"xwj_xsanguo_guhuo2":{
				audio:['xwj_xsanguo_guhuo',2],
				filterCard:function(){return false},
				popname:true,
				selectCard:-1,					
				onuse:function(result,player){
					if(player.storage.xwj_xsanguo_guhuo) result.cards=player.storage.xwj_xsanguo_guhuo;
					if(player.storage.xwj_xsanguo_guhuo) delete player.storage.xwj_xsanguo_guhuo;
				}
			},
			"xwj_xsanguo_guhuo3":{
				audio:['xwj_xsanguo_guhuo',2],
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				popname:true,
				usable:1,
			    viewAs:{name:'sha'},
				filter:function(event,player){
					var num=get.skillCount('xwj_xsanguo_guhuo')+get.skillCount('xwj_xsanguo_guhuo3')+get.skillCount('xwj_xsanguo_guhuo6');
					if(player.storage.xwj_xsanguo_guhuo7) return false;	
					if(num>0) return false;				
					return event.parent.name!='phaseUse'&&player.countCards('h')>0;
				},				
				onuse:function(result,player){
					player.say('道法玄机变化莫测，我声明'+get.translation('sha'));
				},				
				onrespond:function(result,player){
					player.say('道法玄机变化莫测，我声明'+get.translation('sha'));
				},				
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h')>0;
					},						
					respondSha:true
				}
			},
			"xwj_xsanguo_guhuo6":{
				audio:['xwj_xsanguo_guhuo',2],
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				popname:true,
				usable:1,					
			    viewAs:{name:'shan'},
				filter:function(event,player){
					var num=get.skillCount('xwj_xsanguo_guhuo')+get.skillCount('xwj_xsanguo_guhuo3')+get.skillCount('xwj_xsanguo_guhuo6');
					if(player.storage.xwj_xsanguo_guhuo7) return false;	
					if(num>0) return false;				
					return event.parent.name!='phaseUse'&&player.countCards('h')>0;
				},
				onuse:function(result,player){
					player.say('道法玄机变化莫测，我声明'+get.translation('shan'));
				},				
				onrespond:function(result,player){
					player.say('道法玄机变化莫测，我声明'+get.translation('shan'));
				},					
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h')>0;
					},							
					respondShan:true
				}
			},		
			"xwj_xsanguo_guhuo7":{
				audio:['xwj_xsanguo_guhuo',2],
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				popname:true,
				usable:1,					
			    viewAs:{name:'wuxie'},
				filter:function(event,player){
					var num=get.skillCount('xwj_xsanguo_guhuo')+get.skillCount('xwj_xsanguo_guhuo3')+get.skillCount('xwj_xsanguo_guhuo6');
					if(player.storage.xwj_xsanguo_guhuo7) return false;	
					if(num>0) return false;				
					return player.countCards('h')>0;
				},
				onuse:function(result,player){
					player.storage.xwj_xsanguo_guhuo7=true;
					player.say('道法玄机变化莫测，我声明'+get.translation('wuxie'));
				},				
				onrespond:function(result,player){
					player.storage.xwj_xsanguo_guhuo7=true;
					player.say('道法玄机变化莫测，我声明'+get.translation('wuxie'));
				},					
			},				
			
			"xwj_xsanguo_guhuo5":{		
				trigger:{global:['useCardBegin','respondBegin']},
				forced:true,
				popup:false,
				silent:true,
				filter:function(event){
					return event.skill=='xwj_xsanguo_guhuo2'||event.skill=='xwj_xsanguo_guhuo3'||event.skill=='xwj_xsanguo_guhuo6'||event.skill=='xwj_xsanguo_guhuo7';
				},		
				content:function(){
					"step 0"
					player.lose(trigger.cards[0]);
					player.line(trigger.targets);
					event.viewcard=trigger.cards[0];
					var cardx=ui.create.card();
					cardx.classList.add('infohidden');
					cardx.classList.add('infoflip');
					event.cards2=cardx;	
					var node1=event.cards2;	
					event.animate=node1;
					if(lib.config.cardback_style!='default'){
						node1.style.transitionProperty='none';
						ui.refresh(node1);
						node1.classList.add('infohidden');
						ui.refresh(node1);
						node1.style.transitionProperty='';
					}
					else{
						node1.classList.add('infohidden');
					}			
					event.dialog=ui.create.dialog('蛊惑','hidden');
					event.dialog.add(event.cards2);	
					event.dialog.open();					
					event.current=player.next;			
					"step 1"
					if((event.current.hp<=0||event.current.hasSkill('xwj_xsanguo_chanyuan'))&&event.current!=player){
						if(event.current.hasSkill('xwj_xsanguo_chanyuan')) game.log(event.current,'不能质疑于吉');
						event.current=event.current.next;	
						event.redo();
					}														
					if(event.current==player) event.goto(4);
					"step 2"
					if(event.current!=player){
						event.current.chooseControl('质疑于吉','不质疑于吉',function(){
							if(ai.get.attitude(event.current,_status.event.target)>0) return 	'不质疑于吉';
							if(_status.event.target.countCards('h')>3) return '不质疑于吉';
							if(_status.event.target.countCards('h')<2) return '质疑于吉';
							if(Math.random()<0.5) return '质疑于吉';
							return '不质疑于吉';
						}).set('target',player);	
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.control=='质疑于吉'){
						event.current.popup('质疑');
						game.log(event.current,'质疑');	
						event.bool=true;
						event.goto(4);
					}
					else if(result.control=='不质疑于吉'){
						event.current.popup('不质疑');
						game.log(event.current,'不质疑');	
						if(event.current.next!=player){
							event.current=event.current.next;				
							game.delay(0.5);
							event.goto(1);
						}							
					}				
					"step 4"
					game.pause();
					setTimeout(function(){
						event.cards2.init([event.viewcard.suit,event.viewcard.number,event.viewcard.name]);
						event.animate.style.transition='all ease-in 0.3s';
						event.animate.style.transform='perspective(600px) rotateY(270deg) translateX(52px)';
						event.animate.classList.remove('infohidden');
						event.animate.style.transition='all 0s';
						ui.refresh(event.animate);
						event.animate.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
						ui.refresh(event.animate);
						event.animate.style.transition='';
						ui.refresh(event.animate);
						event.animate.style.transform='';
					},500);	
					setTimeout(function(){
            			while(ui.dialogs.length){
              		 		ui.dialogs[0].close();
         				}
						ui.clear();
						game.resume();
					},1500);	
					"step 5"
					player.getStat('skill').xwj_xsanguo_guhuo++;
					player.getStat('skill').xwj_xsanguo_guhuo3++;
					player.getStat('skill').xwj_xsanguo_guhuo6++;
					player.getStat('skill').xwj_xsanguo_guhuo7++;					
					if(event.bool){
						if(event.viewcard.name!=trigger.card.name){
							ui.discardPile.appendChild(event.viewcard);
							game.log(event.viewcard,'被置入了弃牌堆');		
							if(trigger.name=='respond'){
								if(trigger.parent.result){
									game.log(player,'打出的',trigger.card,'作废');
									trigger.parent.result.bool=false;
								}
							}
							else{
								game.log(player,'使用的',trigger.card,'作废');
								trigger.untrigger();
								trigger.finish();
							}																
						}
						else{
							event.current.addSkill('xwj_xsanguo_chanyuan');								
						}	
					}
				},					
			},
			
			
			"xwj_xsanguo_chanyuan":{
						trigger:{player:['phaseBefore','changeHp']},
						forced:true,
						popup:false,
						unique:true,
						content:function(){
							var list=player.get('s');
							list.remove('xwj_xsanguo_chanyuan');
							if(player.hp==1){
								player.disableSkill('xwj_xsanguo_chanyuan',list);
								player.markSkill('xwj_xsanguo_chanyuan');
							}
							else{
								player.enableSkill('xwj_xsanguo_chanyuan');
								player.unmarkSkill('xwj_xsanguo_chanyuan');
							}
						},
						init2:function(player){
							if(player.hp==1){
								var list=player.skills.remove('xwj_xsanguo_chanyuan');
								player.disableSkill('xwj_xsanguo_chanyuan',list);
								player.markSkill('xwj_xsanguo_chanyuan');
							}
						},
						marktext:'缠',
						mark:true,
						intro:{
							 content:function(storage,player,skill){
								var storage=player.disabledSkills.xwj_xsanguo_chanyuan;
								if(storage&&storage.length){
									var str='失效技能：';
									for(var i=0;i<storage.length;i++){
										if(lib.translate[storage[i]+'_info']){
											str+=get.translation(storage[i])+'、';
										}
									}
									return str.slice(0,str.length-1);
								}
							}
						}
					},
			
	//新蛊惑代码来自可乐加冰24;
	
	
	
	 "xwj_xsanguo_chuanshu":{
                audio:["xingshuai",2],
                trigger:{
                    global:"dying",
                },
                priority:8,
                unique:true,
                skillAnimation:true,
                animationColor:"water",
                filter:function (event,player){
        return event.player.hp<=0&&event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:"player",
                content:function (){
       'step 0'
          //  player.logSkill('xwj_xsanguo_chuanshu',trigger.player);                       
                trigger.player.chooseControl('releiji','guidao').set('prompt',''+get.translation(trigger.player)+'获得一项技能');
                goon=true;                    
        
        if(!goon){
            event.finish();
        }
        'step 1'
         trigger.player.addSkillLog(result.control);
         trigger.player.recover(1-trigger.player.hp);
         trigger.player.draw(2);       
         trigger.player.storage.xwj_xsanguo_chuanshu2=player; 
         trigger.player.addSkill('xwj_xsanguo_chuanshu2');              
         game.broadcastAll()+trigger.player.node.avatar.setBackgroundImage('extension/群英会/xwj_xsanguo_zhangjiao.jpg');        
        // player.removeSkill('xwj_xsanguo_chuanshu');         
         player.awakenSkill('xwj_xsanguo_chuanshu');             
    },
            },
            "xwj_xsanguo_xiandao1":{
                audio:["huashen",2],
                forced:true,
             //   noLose:true,                
             //   locked:true,
               // noRemove:true,
             //   noDisable:true,
                priority:10,
                trigger:{
                    global:"gameStart",
                    player:["phaseEnd","enterGame"],
                },
                filter:function (event,player){                
        return player.isAlive();
    },
                content:function (){       
        var n=[1,2].randomGet();
            if(n==1){
                player.addTempSkill("releiji",{player:"phaseUseBegin"}); 
                player.markSkill("releiji",{player:"phaseUseBegin"});                      
            };
            if(n==2){
                player.addTempSkill("guidao",{player:"phaseUseBegin"});   
                player.markSkill("guidao",{player:"phaseUseBegin"});                   
            };
    },
            },
            "xwj_xsanguo_xiandao2":{
                audio:["huashen",2],
                forced:true,
              //  noLose:true,                     
              //  locked:true,
             //   noRemove:true,
              //  noDisable:true,
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){   
        if(!event.nature) return false;
        return true;
    },
                content:function (){                                       
    trigger.cancel();
    event.finish();
    },
            },
            "xwj_xsanguo_xiandao":{
                forced:true,                
               // noLose:true,                
               // locked:true,
                noRemove:true,
              //  noDisable:true,
                group:["xwj_xsanguo_xiandao1","xwj_xsanguo_xiandao2"],
            },
            "xwj_xsanguo_chuanshu2":{
                audio:["songwei",2],
                mark:"character",
                intro:{
                    content:"当你造成或受到一次伤害后，$摸一张牌",
                },
                nopop:true,
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.xwj_xsanguo_chuanshu2&&player.storage.xwj_xsanguo_chuanshu2.isIn()&&event.num>0;
    },
                content:function (){
        'step 0'
        game.delayx();
        'step 1'
        var target=player.storage.xwj_xsanguo_chuanshu2;      
        player.line(target,'green');
        target.draw();
        game.delay();
    },
                onremove:true,
                group:"xwj_xsanguo_chuanshu3",
            },
            "xwj_xsanguo_chuanshu3":{
                audio:"ext:群英会:1",
                trigger:{
                    player:"dieBegin",
                },
                silent:true,
                onremove:true,
                filter:function (event,player){
        return player.storage.xwj_xsanguo_chuanshu2&&player.storage.xwj_xsanguo_chuanshu2.isIn();
    },
                content:function (){   
         'step 0'
        game.delayx();
        'step 1'
        var target=player.storage.xwj_xsanguo_chuanshu2;      
        player.line(target,'green');   
        target.restoreSkill('xwj_xsanguo_chuanshu');                  
      //  target.addSkill('xwj_xsanguo_chuanshu');
        target.update();
    },
                forced:true,
                popup:false,
            },
            "xwj_xsanguo_xiuzheng":{
                audio:["xinsheng",2],
                enable:"phaseUse",
                usable:1,
                priority:10,
                filter:function (event,player){
        return (ui.cardPile.childElementCount+ui.discardPile.childElementCount)>=2;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        event.cards=get.cards(2);
        player.showCards(event.cards);
        "step 1"      
        if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])=='red'){               
           target.damage('fire');
            }
        if(get.color(event.cards[0])!=get.color(event.cards[1])){   
           player.discardPlayerCard(target,"he",true);
            }
        if(get.color(event.cards[0])=='black'&&get.color(event.cards[1])=='black'){               
           target.damage('thunder');
            }               
     "step 2"
        if(event.cards.length){
            player.gain(event.cards,'gain2');                        
            game.delay();
        }
        "step 3"
       player.chooseToDiscard(2,'he','请弃置两张牌',true).ai=function(card){
                return 7-get.value(card);
            };
    },
                ai:{
                    threaten:0.5,
                    order:13,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
	
	"xwj_xsanguo_wenjiu":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='black'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
                subSkill:{
                    "1":{
                        trigger:{
                            target:"shaBefore",
                        },
                        direct:true,
                        priority:11,
                        filter:function (event,player){
        if(event.player.hp<0) return false;
        return (event.card.name=='sha'&&get.color(event.card)=='red')
    },
                        content:function (){ 
        game.playSu('xwj_xsanguo_wenjiu1');						               
        trigger.directHit=true;         
    },
                        ai:{
                            threaten:1,
                        },
                        sub:true,
                    },
                },
                audio:"ext:群英会:1",
                group:"xwj_xsanguo_wenjiu_1",
            },
            "xwj_xsanguo_badao":{
                audio:"ext:群英会:1",
                trigger:{
                    target:"shaBefore",
                },
                direct:true,
                priority:11,
                filter:function (event,player){      
        return event.card.name=='sha'&&get.color(event.card)=='black';
    },
                content:function (){        
         player.chooseToUse({name:'sha'},'霸刀：是否使用一张杀？').logSkill='xwj_xsanguo_badao';
    },
            },
			
"xwj_xsanguo_zhenjun":{
                audio:["jieyue",2],
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
"step 0"
player.chooseTarget(get.prompt('xwj_xsanguo_zhenjun'),function(card,player,target){
return target.countCards('h')>target.hp;
}).set('ai',function(target){
return -ai.get.attitude(_status.event.player,target);
});
"step 1"
if(result.bool){
game.delay();
player.logSkill('xwj_xsanguo_zhenjun',result.targets);
event.target=result.targets[0];
player.discardPlayerCard(event.target,event.target.countCards('h')-event.target.hp,'he',true);
}
else{
event.finish();
}
"step 2"
event.num=0;
for(var i=0;i<result.links.length;i++){
if(get.type(result.links[i])!='equip') event.num++;
}
event.num1=0;
for(var i=0;i<result.links.length;i++){
if(get.type) event.num1++;
}
if(event.num){
player.chooseToDiscard(event.num,'he','弃置'+event.num+'张牌，或令'+get.translation(event.target)+'摸'+event.num1+'张牌').set('ai',function(card){
return 7-get.value(card);
});
}
else{
event.finish();
}
'step 3'
if(!result.bool){
event.target.draw(event.num1);
}
},
                ai:{
                    expose:0.2,
                    threaten:1.4,
                },
            },

 "xwj_xsanguo_tishen":{
                audio:["retishen",2],
                unique:true,
                mark:true,
                skillAnimation:true,
                trigger:{
                    player:"phaseBegin",
                },
                init:function (player){
        player.storage.xwj_xsanguo_tishen=false;
    },
                filter:function (event,player){       
            return player.hp<player.maxHp;     
    },
                check:function (event,player){
        if(player.hp<=1) return true;
        return player.hp<player.maxHp-1;
    },
                content:function (){
        player.awakenSkill('xwj_xsanguo_tishen');
        player.recover(Infinity);
        player.draw(player.maxHp-player.hp);                
        player.storage.xwj_xsanguo_tishen=true;
    },
            },

 "xwj_xsanguo_tiaoxin":{
                audio:["tiaoxin_jiangwei",2],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
            player.discardPlayerCard(target,'he',true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
            },
                    },
                    threaten:1.1,
                },
                audioname:["jiangwei","sp_jiangwei","xiahouba"],
            },

 "xwj_xsanguo_guanxing":{
                audio:["guanxing_jiangwei",2],                
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event,player){       
            return player.isAlive();     
    },
                content:function (){
        "step 0"
        if(player.isUnderControl()){
            game.modeSwapPlayer(player);
        }        
        var cards=get.cards(4);
        event.cards=cards;
        var switchToAuto=function(){
            _status.imchoosing=false;
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
            var top=[];
            var judges=player.node.judges.childNodes;
            var stopped=false;
            if(!player.countCards('h','wuxie')){
                for(var i=0;i<judges.length;i++){
                    var judge=get.judge(judges[i]);
                    cards.sort(function(a,b){
                        return judge(b)-judge(a);
                    });
                    if(judge(cards[0])<0){
                        stopped=true;break;
                    }
                    else{
                        top.unshift(cards.shift());
                    }
                }
            }
            var bottom;
            if(!stopped){
                cards.sort(function(a,b){
                    return get.value(b,player)-get.value(a,player);
                });                        
            }
            bottom=cards;
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            for(i=0;i<bottom.length;i++){
                ui.cardPile.appendChild(bottom[i]);
            }
            player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.delay(2);
        };
        var chooseButton=function(online,player,cards){
            var event=_status.event;
            player=player||event.player;
            cards=cards||event.cards;
            event.top=[];
            event.bottom=[];
            event.status=true;
            event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('pointerdiv');
            }
            event.switchToAuto=function(){
                event._result='ai';
                event.dialog.close();
                event.control.close();
                _status.imchoosing=false;
            },
            event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
                var event=_status.event;
                if(link=='ok'){
                    if(online){
                        event._result={
                            top:[],
                            bottom:[]
                        }
                        for(var i=0;i<event.top.length;i++){
                            event._result.top.push(event.top[i].link);
                        }
                        for(var i=0;i<event.bottom.length;i++){
                            event._result.bottom.push(event.bottom[i].link);
                        }
                    }
                    else{
                        var i;
                        for(i=0;i<event.top.length;i++){
                            ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
                        }
                        for(i=0;i<event.bottom.length;i++){
                            ui.cardPile.appendChild(event.bottom[i].link);
                        }
                        for(i=0;i<event.dialog.buttons.length;i++){
                            if(event.dialog.buttons[i].classList.contains('glow')==false&&
                                event.dialog.buttons[i].classList.contains('target')==false)
                            ui.cardPile.appendChild(event.dialog.buttons[i].link);
                        }
                        player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
                        game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
                    }
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing=false;
                }
                else if(link=='pileTop'){
                    event.status=true;
                    event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
                }
                else{
                    event.status=false;
                    event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
                }                                                                                           
            })
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            event.custom.replace.button=function(link){
                var event=_status.event;
                if(link.classList.contains('target')){
                    link.classList.remove('target');
                    event.top.remove(link);
                }
                else if(link.classList.contains('glow')){
                    link.classList.remove('glow');
                    event.bottom.remove(link);
                }
                else if(event.status){
                    link.classList.add('target');
                    event.top.unshift(link);
                }
                else{
                    link.classList.add('glow');
                    event.bottom.push(link);
                }
            }
            event.custom.replace.window=function(){
                for(var i=0;i<_status.event.dialog.buttons.length;i++){
                    _status.event.dialog.buttons[i].classList.remove('target');
                    _status.event.dialog.buttons[i].classList.remove('glow');
                    _status.event.top.length=0;
                    _status.event.bottom.length=0;
                }
            }
            game.pause();
            game.countChoose();
        };
        event.switchToAuto=switchToAuto;
        if(event.isMine()){
            chooseButton();
            event.finish();
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,true,event.player,event.cards);
            event.player.wait();
            game.pause();
        }
        else{
            event.switchToAuto();
            event.finish();
        }             
         player.draw();                 
        "step 1"
        if(event.result=='ai'||!event.result){
            event.switchToAuto();
         
        }
        else{
            var top=event.result.top||[];
            var bottom=event.result.bottom||[];
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            for(i=0;i<bottom.length;i++){
                ui.cardPile.appendChild(bottom[i]);
            }
            for(i=0;i<event.cards.length;i++){
                if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
                    ui.cardPile.appendChild(event.cards[i]);
                }
            }
            player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.delay(2);                        
        }
                  
    },
                ai:{
                    order:8,
                    threaten:1.2,
                    guanxing:true,
                },
            },
 
 "xwj_xsanguo_huanji":{
                audio:["liangji",2], 
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        'step 0'
        player.chooseCard('h','环计：将1张牌置于'+get.translation(target)+'的武将牌上',true).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                return 7-get.value(card);
            }
            return -get.value(card);
        });
        'step 1'
        if(result.bool){
            player.$give(result.cards,target);
            player.lose(result.cards,ui.special);
            target.storage.xwj_xsanguo_huanji_1=result.cards;
            target.storage.xwj_xsanguo_huanji_1_source=target;
            target.syncStorage('xwj_xsanguo_huanji_1');
            target.addSkill('xwj_xsanguo_huanji_1');
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)>0){
                    return Math.sqrt(target.countCards('he'));
                }
                return 0;
            },
                        player:1,
                    },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        mark:true,
                        intro:{
                            content:"cards",
                        },
                        content:function (){
                'step 0'
                var cards=player.storage.xwj_xsanguo_huanji_1;
                if(cards){
                    player.gain(cards,'gain2');
                   }                  
                  player.storage.xwj_xsanguo_huanji_1=0;                                            
             
                'step 1'            
            if(player.sex=='male')player.addTempSkill('wushuang');                                  
            if(player.sex=='female')player.addTempSkill('lijian');
                player.removeSkill('xwj_xsanguo_huanji_1');                                    
            },
                        sub:true,
                    },
                },
            },
 
 "xwj_xsanguo_jugong":{
                audio:["jingong",2], 
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                frequent:true,
                locked:false,
                notemp:true,
                marktext:"功",
                init:function (player){
        player.storage.xwj_xsanguo_jugong=[];
    },
                filter:function (event,player){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink()                
 &&_status.currentPhase!=player;
   
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        if(player.countCards('h')){
            player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“功”',1,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special);
            player.storage.xwj_xsanguo_jugong=player.storage.xwj_xsanguo_jugong.concat(result.cards);
            player.syncStorage('xwj_xsanguo_jugong');
            player.markSkill('xwj_xsanguo_jugong');
            game.log(player,'将',result.cards,'置于武将牌上作为“功”');
        }
    },
                intro:{
                    content:"cards",
                },
                group:"xwj_xsanguo_jugong_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){        
                            return player.storage.xwj_xsanguo_jugong.length>1;
    },
                        content:function (){
    "step 0" 
      player.chooseCardButton('移去两张“功”',2,player.storage.xwj_xsanguo_jugong,true);
     "step 1"
                 if(event.directresult||result.bool){
            player.logSkill('xwj_xsanguo_jugong');
            var links=event.directresult||result.links;
            for(var i=0;i<links.length;i++){
                player.storage.xwj_xsanguo_jugong.remove(links[i]);
            }
            player.syncStorage('xwj_xsanguo_jugong');
            if(!player.storage.xwj_xsanguo_jugong.length){
                player.unmarkSkill('xwj_xsanguo_jugong');
            }
            else{
               player.markSkill('xwj_xsanguo_jugong');
            }
            player.$throw(links);
            game.log(player,'被移去了',links);
            for(var i=0;i<links.length;i++){
                ui.discardPile.appendChild(links[i]);}
            }
    "step 2"
    trigger.cancel();               
},
                        sub:true,
                    },
                },
                ai:{                               
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
                    if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [0.5,get.tag(card,'damage')*0.2];
                    if(target.hp==2) return [0.1,get.tag(card,'damage')*0.1];
                }
            },
                    },
                },
            },
 
 "xwj_xsanguo_chengmou":{
                audio:["moucheng",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                filter:function (event,player){        
                            return player.storage.xwj_xsanguo_jugong.length>0;
    },
                content:function (){
       'step 0'
       if(player.storage.xwj_xsanguo_jugong.length>2) player.loseHp();
           'step 1'
       var cards=player.storage.xwj_xsanguo_jugong;
              if(cards){                    
       player.gain(cards,'gain2');                    
             }                             
       player.storage.xwj_xsanguo_jugong=[];   
        'step 2'
       trigger.cancel();
    },    
            },
 
"xwj_xsanguo_xiongqi":{
                audio:["zaiqi",2],
                unique:true,
                priority:10,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"雄起",
                animationColor:"fire",
                init:function (player){
        player.storage.xwj_xsanguo_xiongqi=false;
    },
                filter:function (event,player){
        if(player.storage.xwj_xsanguo_xiongqi) return false;     
        return player.hp<=0;
    },
                content:function (){
        'step 0'
        player.gainMaxHp();
        player.discard(player.get('j'));
        player.hp=Math.min(9,player.maxHp);  
        player.draw();
        'step 1'     
        player.link(false);
        player.turnOver(false);
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.xwj_xsanguo_xiongqi) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp<=0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 8;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.xwj_xsanguo_xiongqi) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
 
 "xwj_xsanguo_xiangfu":{
                skillAnimation:true,
                audio:"ext:群英会:1",
                unique:true,
                trigger:{
                    player:"xwj_xsanguo_xiongqiEnd",
                },
                filter:function (event,player){
        return player.maxHp>=7;
    },
                forced:true,
                priority:3,
                content:function (){
                player.die();     
                },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },              
                },
            },


 "xwj_xsanguo_manwang":{
                mod:{
                    maxHandcard:function (player,num){
            return num+=3-player.hp;
            
        },
                },
                init:function (player){
        if(lib.config.mode=='identity'&&player.isZhu){
            player.loseMaxHp();
            player.update();
        }
    },
            },

 "xwj_xsanguo_tannan":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-(from.maxHp-from.hp);
        },
                },
            },
},

translate:{
   "xwj_xsanguo_caomao":"曹髦",
            "xwj_xsanguo_qianzhi":"潜志",
            "xwj_xsanguo_qianzhi_info":"准备阶段，若你已受伤，你可以观看牌堆的X张牌(X为你已损失的体力值)并且任意移动之",
            "xwj_xsanguo_yanghui":"养晦",
            "xwj_xsanguo_yanghui_info":"每当你受到伤害后，你可以增加一点体力上限",
            "xwj_xsanguo_juli":"诛戾",
            "xwj_xsanguo_juli_info":"出牌阶段开始时，若你已受伤且你的体力为全场最低，你可指定任意名“魏国”角色，令各摸X张牌（X为你损失的体力值），然后你的体力上限调整至当前体力值",     
"xwj_xsanguo_xunyou":"荀攸",
 "xwj_xsanguo_houlve":"后略",
            "xwj_xsanguo_houlve_info":"若你没有手牌，你可以摸一张牌，然后视为你使用一张【无懈可击】",        
	 	"xwj_xsanguo_shenzhaoyun":"神赵云",
		"xwj_xsanguo_longhun1":"龙魂",
            "xwj_xsanguo_longhun1_info":"",
            "xwj_xsanguo_longhun2":"龙魂•火杀",
            "xwj_xsanguo_longhun2_info":"方块当火【杀】",
            "xwj_xsanguo_longhun3":"龙魂",
            "xwj_xsanguo_longhun3_info":"",
            "xwj_xsanguo_longhun4":"龙魂•桃",
            "xwj_xsanguo_longhun4_info":"红桃当【桃】",
            "xwj_xsanguo_longhun5":"龙魂•闪",
            "xwj_xsanguo_longhun5_info":"梅花当【闪】",
            "xwj_xsanguo_longhun6":"龙魂",
            "xwj_xsanguo_longhun6_info":"",
            "xwj_xsanguo_longhun7":"龙魂•无懈",
            "xwj_xsanguo_longhun7_info":"黑桃当【无懈可击】",
            "xwj_xsanguo_longhun":"龙魂",
            "xwj_xsanguo_longhun_info":"你可将至多两张同花色的牌按以下规则使用或打出：红桃当【桃】；方块当火【杀】；梅花当【闪】；黑桃当【无懈可击】。若你此法使用了两张红色牌，则此牌回复值伤害值+1。若你此法使用了两张黑色牌，则你弃置当前回合角色一张牌",            
            "xwj_xsanguo_juejing":"绝境",
            "xwj_xsanguo_juejing_info":"当你进入或脱离濒死状态时，你可以摸一张牌。你的手牌上限+2",
	 "xwj_xsanguo_simahui":"智司马徽",
			 "xwj_xsanguo_shouye":"授业",
            "xwj_xsanguo_shouye_info":"出牌阶段，你可以弃置一张红色手牌，指定至多两名其他角色令各摸一张牌。",
            "xwj_xsanguo_jiehuo":"解惑",
            "xwj_xsanguo_jiehuo_info":"<span class=greentext>觉醒技</span> 当你发动“授业”目标累计至少8个时，你须减去一点体力上限，将技能“授业”改为每阶段限一次，并获得技能“师恩”（其他角色使用非延时性锦囊牌时，可以让你摸一张牌）",
            "xwj_xsanguo_shouye2":"授业",
            "xwj_xsanguo_shouye2_info":"出牌阶段限一次，你可以弃置一张红色手牌，指定最多两名其他角色令各摸一张牌。",
            "xwj_xsanguo_shien":"师恩",
            "xwj_xsanguo_shien_info":"其他角色使用非延时性锦囊牌时，可以让你摸一张牌",
 "xwj_xsanguo_zhihuaxiong":"智华雄",
 "xwj_xsanguo_wenjiu":"温酒",
            "xwj_xsanguo_wenjiu_info":"</font><font color=#f00>锁定技</font> 你使用的黑色【杀】造成的伤害+1，你无法闪避红色【杀】",
            "xwj_xsanguo_badao":"霸刀",
            "xwj_xsanguo_badao_info":"当你成为黑色杀的目标时，你可以对你攻击范围内的一名其他角色使用一张【杀】",
     "xwj_xsanguo_baosanniang":"鲍三娘",
	 "xwj_xsanguo_zhaotongzhaoguang":"赵统赵广",
	  "xwj_xsanguo_yizan":"翊赞",
            "xwj_xsanguo_yizan_info":"你可以将两张牌（其中至少一张是基本牌）当任意基本牌牌使用",
             "xwj_xsanguo_yizan0":"翊赞",
            "xwj_xsanguo_yizan0_info":"你可以将两张牌（其中至少一张是基本牌）当任意基本牌牌使用",
			"xwj_xsanguo_yizan1":"翊赞",
            "xwj_xsanguo_yizan1_info":"你可以将两张牌（其中至少一张是基本牌）当【闪】打出",
            "xwj_xsanguo_yizan2":"翊赞",
            "xwj_xsanguo_yizan2_info":"你可以将一张基本牌当任意基本牌牌使用",
			"xwj_xsanguo_yizan3":"翊赞",
            "xwj_xsanguo_yizan3_info":"你可以将一张基本牌当【闪】打出 ",
			"xwj_xsanguo_yizan5":"翊赞",
            "xwj_xsanguo_yizan5_info":"你可以将两张牌（其中至少一张是基本牌）当【杀】打出",
			"xwj_xsanguo_yizan6":"翊赞",
            "xwj_xsanguo_yizan6_info":"你可以将一张基本牌当【杀】打出",
			"xwj_xsanguo_longyuan":"龙渊",
            "xwj_xsanguo_longyuan_info":"<span class=greentext>觉醒技</span> 当你使用或打出基本牌时，若你已经已累计发动过3次【翊赞】，你将【翊赞】改为“你可以将一张基本牌当任意基本牌牌使用或打出”。",           
            "xwj_xsanguo_wuniang":"武娘",
            "xwj_xsanguo_wuniang_info":"你使用或打出【杀】时，你可以获得一名其他角色的一张牌，然后该角色摸一张牌；若“关索”在场，你可令“关索”也摸一张牌",
            "xwj_xsanguo_zhengnan":"镇南",
            "xwj_xsanguo_zhengnan_info":"当你成为【南蛮入侵】的目标时，你可令一名其他角色随机受到一至三点伤害",
            "xwj_xsanguo_xushen":"许身",
            "xwj_xsanguo_xushen_info":"当其他男性角色令你脱离濒死状态时，若“关索”不在场，其可以选择是否用“关索”替换其武将牌，然后你回复一点体力并获得技能【镇南】",
			"xwj_xsanguo_oldyuji":"于吉",
			"xwj_xsanguo_xinyuji":"新于吉",
     	    "xwj_xsanguo_oldguhuo":"蛊惑",
    		"xwj_xsanguo_guhuo":"蛊惑",
    		"xwj_xsanguo_guhuo3":"蛊惑",
    		"xwj_xsanguo_guhuo4":"蛊惑",
    		"xwj_xsanguo_guhuo5":"蛊惑",
    		"xwj_xsanguo_guhuo6":"蛊惑",
    		"xwj_xsanguo_guhuo7":"蛊惑",
    		"xwj_xsanguo_chanyuan":"缠怨",
		   	"xwj_xsanguo_oldguhuo_info":"你可以说出任何一种基本牌或非延时类锦囊牌，并正面朝下使用或打出一张手牌。体力值不为0的其他角色依次选择是否质疑。若无人质疑，则该牌按你所述之牌结算。若有人质疑则亮出验明：若为真，质疑者各失去1点体力；若为假，质疑者各摸一张牌。无论真假，弃置被质疑的牌。仅当被质疑的牌为红桃花色且为真时，该牌仍然可以进行结算",
         	"xwj_xsanguo_guhuo_info":"每名角色的回合限一次，你可以扣置一张手牌当一张基本牌或普通锦囊牌使用或打出。其他角色依次选择是否质疑。一旦有其他角色质疑则翻开此牌：若为假则此牌作废，若为真，则质疑角色获得技能“缠怨”（<font color=#f00>锁定技</font> 你不能质疑于吉，只要你的体力值为1，你失去你的武将技能）",
          	"xwj_xsanguo_chanyuan_info":"<font color=#f00>锁定技</font> 你不能质疑于吉，只要你的体力值为1，你失去你的武将技能",		
            "xwj_xsanguo_jiangwei":"姜伯约",  
            "xwj_xsanguo_guanxing":"继志",
            "xwj_xsanguo_guanxing_info":"每当你受到一次伤害后，你可以观看牌堆顶的4张牌，并将其以任意顺序置于牌堆项或牌堆底，然后你摸一张牌。",
            "xwj_xsanguo_tiaoxin":"挑衅",
            "xwj_xsanguo_tiaoxin_info":"出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",                  
            "xwj_xsanguo_menghuo":"孟获",  
            "xwj_xsanguo_manwang":"蛮王",
            "xwj_xsanguo_manwang_info":"<font color=#f00>锁定技</font> 你的手牌上限为3，你当主公时不增加体力上限。",
            "xwj_xsanguo_xiangfu":"降服",
            "xwj_xsanguo_xiangfu_info":"<span class=greentext>觉醒技</span> 当你的体力上限不少于7，你立即死亡。",
            "xwj_xsanguo_xiongqi":"雄起",
            "xwj_xsanguo_xiongqi_info":"<span class=yellowtext>非限定技</span>当你处于濒死状态时，你可以丢弃你判定区里的牌，并重置你的武将牌，然后摸1张牌且体力回至体力上限，然后加一体力上限。",    
            "xwj_xsanguo_wangyun":"王允",
            "xwj_xsanguo_huanji":"环计",
            "xwj_xsanguo_huanji_info":"出牌阶段限一次，你可以选择一名其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能【无双】，若其为女性角色，则获得技能【离间】，直到回合结束。",
            "xwj_xsanguo_chengmou":"逞谋",
            "xwj_xsanguo_chengmou_info":"摸牌阶段开始时，若你有“功”牌，你获得之并跳过摸牌阶段，若你所获得的“功”牌多于两张，你须失去一点体力。",
            "xwj_xsanguo_jugong":"居功",
            "xwj_xsanguo_jugong_info":"回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。",
            "xwj_xsanguo_zhangfei":"智张飞",
            "xwj_xsanguo_tannan":"探囊",
            "xwj_xsanguo_tannan_info":"<font color=#f00>锁定技</font> 若你已受伤，你的进攻距离+X（X为你已损失体力值）",
            "xwj_xsanguo_tishen":"替身",
            "xwj_xsanguo_tishen_info":"<span class=yellowtext>限定技</span> 准备阶段开始时，你可以将体力回复至体力上限，然后你每以此法回复1点体力，便摸一张牌。",
            "xwj_xsanguo_yujin":"于禁",
            "xwj_xsanguo_zhenjun":"镇军",
            "xwj_xsanguo_zhenjun_info":"准备阶段，你可以弃置一名手牌数多于体力值的角色的X张牌（X为其手牌数和体力值之差），然后选择一项：1.你弃置等同于其中非装备牌数量的牌；2.其摸等量的牌。",
            "xwj_xsanguo_nanhua":"南华老仙",
          	"xwj_xsanguo_chuanshu":"传术",
            "xwj_xsanguo_chuanshu_info":"<span class=yellowtext>限定技</span> 当一名其他角色进入濒死状态时，你可以令其选择获得技能【雷击】或【鬼道】，其回复体力至1并摸两张牌。当该被【传术】的角色造成或受到一次伤害后，你摸一张牌。其阵亡后，你重置技能【传术】",
            "xwj_xsanguo_xiandao1":"仙道",
            "xwj_xsanguo_xiandao1_info":"<font color=#f00>锁定技</font> 游戏开始和回合结束阶段，你随机获得技能【雷击】或【鬼道】，直到下个出牌阶段开始",
            "xwj_xsanguo_xiandao2":"仙道",
            "xwj_xsanguo_xiandao2_info":"<font color=#f00>锁定技</font> 你防止受到任何属性伤害",
            "xwj_xsanguo_xiandao":"仙道",
            "xwj_xsanguo_xiandao_info":"<font color=#f00>锁定技</font> 游戏开始、你进入游戏时和回合结束阶段，你随机获得技能【雷击】或【鬼道】，直到下个出牌阶段阶段开始。你防止受到任何属性伤害",
            "xwj_xsanguo_chuanshu2":"术",
            "xwj_xsanguo_chuanshu2_info":"<font color=#f00>锁定技</font> 当你造成或受到一次伤害后，南华老仙摸一张牌",
            "xwj_xsanguo_chuanshu3":"术",
            "xwj_xsanguo_chuanshu3_info":"<font color=#f00>锁定技</font> 当你【传术】的角色阵亡后，你重置技能【传术】",
            "xwj_xsanguo_xiuzheng":"修真",
            "xwj_xsanguo_xiuzheng_info":"出牌阶段限一次，你可选择一名其他角色，然后展示牌堆顶的两张牌，若同为红色，则其受到一点火焰伤害；若同为黑色，其受到一点雷电伤害；若颜色不相同，你弃置其一张牌。然后你获得这两张展示的牌后再弃置两张牌",
        },
			};
if(lib.device||lib.node){
				for(var i in xsanguo.character){xsanguo.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xsanguo.character){xsanguo.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xsanguo;
		});
		lib.config.all.characters.push('xsanguo');
		if(!lib.config.characters.contains('xsanguo')) lib.config.characters.remove('xsanguo');
		lib.translate['xsanguo_character_config']='<span class=bluetext>三国新将</span>';
		
	
		
		game.import('character',function(){
			var xu={
				name:'xu',
				connect:true,
				character:{
					 "xwj_xu_Sukincen":["male","shen",3,["xwj_xu_qingshang","xwj_xu_xibie"],[]],
        "xwj_xu_xiaoxu":["male","shen",3,["xwj_xu_yunchou","xwj_xu_dingju","xwj_xu_tuiyin"],[]],
        "xwj_xu_cheng":["male","shen",3,["xwj_xu_tiandun"],[]],
        "xwj_xu_SPxiaosu":["male","shen",3,["xwj_xu_huhua","xwj_xu_shuangsu"],[]],
        "xwj_xu_xiaohuan":["female","shen",3,["xwj_xu_lixing","xwj_xu_choumou"],["unseen"]],        
      
},
characterIntro:{
					"xwj_xu_Sukincen":"原武将和技能设计均源于橙续缘的作品《吧友列传》扩展中的人物，为本扩展的作者Sukincen所设计的形象。原技能名分别为“探索”和“拷贝”，这里略作修改。小苏与Sukincen皆为化名。",					
     	"xwj_xu_xiaoxu":"特别感谢神座◎sagiri大佬对技能【运筹】、【定局】所作的贡献，该技能与其作品《作者包》中的“小苏”的作者技异曲同工。小徐，其人熟读《三国演义》，为人处世如运筹帷幄的元帅，但有时却是个死宅，如同隐退江湖一般销声匿迹……",					
     	"xwj_xu_cheng":"小诚，一个善于思考、乐于学习的人，喜欢钻研新技术知识，尤其是计算机软件技术，爱好艺术、文学、历史、时政热点话题……",	
					
												},
characterTitle:{
					"xwj_xu_Sukincen":"Sukincen",
								},
								
skill:{
    
            "xwj_xu_lixing":{                
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
        if(trigger.target.countCards('h')){
                player.logSkill('xwj_xu_lixing');
                game.playSu(['xwj_xsanguo_wuniang1','xwj_xsanguo_wuniang2'].randomGet());  
                player.gainPlayerCard(trigger.target,'h',true);
        }
        else{
        event.finish();
        }
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,1];
            },
                    },
                },
            },
        
            "xwj_xu_choumou":{
                audio:["yuhua",2],            
                  trigger:{
                    global:"shaMiss",
                },
                frequent:true,
                filter:function (event,player){        
        return player.isAlive();
    },                           
                content:function (){    
                  //game.playSu(['xwj_xsanguo_zhengnan1','xwj_xsanguo_zhengnan2'].randomGet());          
                  event.card=get.cardPile(function(card){
                            return get.type(card)=='equip';
                        });
                        if(event.card){
                            player.equip(event.card,true).set('delay',true);                    
                        }        
    },
                ai:{                 
                        order:1,                   
                    expose:0.2,
                },
            },
            
   "xwj_xu_huhua":{
               audio:["roulin",2],
                trigger:{
                    global:"damageEnd",
                },
                priority:2019,
                group:"xwj_xu_huhua2",
               // check:function (event,player){
                  // return get.attitude(player,event.player)>0;
             //   },
                filter:function (event,player){
        return event.source&&event.player.sex=='female'&&event.source!=player;
      },              
                content:function (){            
  'step 0'                    
            if(lib.config.mode=='guozhan'){
                    player.replaceFujiang(trigger.player.name);                  
            }
            else{
                  player.addFujiang(trigger.player.name);                         
            }    
            'step 1'
var list;
if(_status.connectMode){
   list=get.charactersOL(function(i){
   return lib.character[i][1]!='shen'&&lib.character[i][0]!='male';
   });
}
else{        
list=get.gainableCharacters(function(info){
if(info[0]=='male') return false;
return info[1]==['shen','shu','wei','wu','qun','xhuo','xren','xxiao'].randomGet();
});
}
var name=list.randomGet();        
var a=trigger.player.hp;
var b=trigger.player.maxHp;
trigger.player.reinit(trigger.player.name,name,false);
trigger.player.hp=a; 
trigger.player.maxHp=b;
trigger.player.update();
  'step 2'                                    
         var list;
if(_status.connectMode){
   list=get.charactersOL(function(i){
   return lib.character[i][1]!='shen'&&lib.character[i][0]!='male';
   });
}
else{        
list=get.gainableCharacters(function(info){
if(info[0]=='male') return false;
return info[1]==['shen','shu','wei','wu','qun','xhuo','xren','xxiao'].randomGet();
});
}
var name=list.randomGet();        
var a=trigger.source.hp;
var b=trigger.source.maxHp;
trigger.source.reinit(trigger.source.name,name,false);
trigger.source.hp=a; 
trigger.source.maxHp=b;
trigger.source.update();
    },
      ai:{                 
                        order:1,                   
                    expose:0.5,
                },
            },
                             
         "xwj_xu_huhua2":{
               audio:["benyu",2],
                trigger:{
                    player:"damageEnd",
                },
                priority:2019,
               // frequent:true,
                filter:function (event,player){
        return event.source&&event.source!=player&&player.isAlive();
      },              
                content:function (){                                          
         var list;
if(_status.connectMode){
   list=get.charactersOL(function(i){
   return lib.character[i][1]!='shen'&&lib.character[i][0]!='male';
   });
}
else{        
list=get.gainableCharacters(function(info){
if(info[0]=='male') return false;
return info[1]==['shen','shu','wei','wu','qun','xhuo','xren','xxiao'].randomGet();
});
}
var name=list.randomGet();        
var a=trigger.source.hp;
var b=trigger.source.maxHp;
trigger.source.reinit(trigger.source.name,name,false);
trigger.source.hp=a; 
trigger.source.maxHp=b;
trigger.source.update();
    },
      ai:{                 
                        order:1,                   
                    expose:0.5,
                },
            },
                       
        "xwj_xu_shuangsu":{       
                trigger:{
                    player:"dying",
                },
                forced:true,
                priority:100,
                filter:function (event,player){                   
          return player.hp<=0;
      },
                content:function (){                                                   
            if(lib.config.mode=='guozhan'){            
                    player.replaceFujiang('xwj_xu_xiaohuan');                
            }
            else{
                  player.addFujiang('xwj_xu_xiaohuan');                 
            }                          
            player.$fullscreenpop('双栖双宿','fire');   
            player.recover(3-player.hp);  
            game.delay(2);                       
            game.playSu(['xwj_xsanguo_xushen1','xwj_xsanguo_xushen2'].randomGet());  
            player.removeSkill('xwj_xu_huhua'); 
            player.addSkill('xwj_xu_dongliang'); 
            player.awakenSkill('xwj_xu_shuangsu');
            },
            },
                
            "xwj_xu_dongliang":{
            audio:["songci",2],
                trigger:{
                    player:"damageBegin",
                },
                priority:100,
                frequent:true,
                filter:function (event,player){                   
          return player.isAlive();
      },
                content:function (){                
var num=game.countPlayer(function(current){
            return current.sex=='female';
            });                                            
    player.draw(num);
    },
            },
                           
  "xwj_xu_dingju":{
                audio:["benyu",2],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (event,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                content:function (){                 
        "step 0" 
        event.current=player.next;
        player.storage.wujiang=[];
        for (var i=0;i<game.players.length;i++){
            if(game.players[i]!=player){
           // game.players[i].hide();
            game.players[i].classList.add('out');
            player.storage.wujiang.push(game.players[i].name);
            }
        }
       "step 1"
        if(event.current.isAlive()){                        
          for (var i=0;i<game.players.length;i++){              
              var namex=event.current.name;                                      
              var str='请选择'+get.translation(namex)+'的武将牌';  
          }
        }          
                player.chooseControl(player.storage.wujiang,ui.create.dialog(str,'hidden')).ai=function(){
                      return Math.floor(Math.random()*player.storage.wujiang.length);
                  };        
                    "step 2"
                    if(result.control){                
                        var a=event.current.hp;          
                        var b=event.current.maxHp;           
                        event.current.reinit(event.current.name,result.control,false);
                        event.current.maxHp=b;
                        event.current.hp=a;       
                      //  event.current.show();
                        event.current.classList.remove('out');
                        event.current.update();
                        player.storage.wujiang.remove(result.control);                  
                    }             
                 else{
                     event.finish();
                 }          
               "step 3"
            if (event.current.next==player){     
                player.awakenSkill("xwj_xu_dingju");            
                event.finish();               
            }      
            else {
                event.current=event.current.next;   
             event.goto(1);
            }            
    },
            },    

"xwj_xu_tiandun":{
                audio:["xinsheng",2],
                trigger:{
                    player:"damage",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                priority:2019,
				init:function(player){
						player.storage.tian=true;
					},
                filter:function (event,player){
        return event.card&&player!=event.source;
    },
                content:function (){  
        'step 0'
        var skill=trigger.source.skills.randomGet();
       // skill.remove('xwj_jisha');
       if(skill!='xwj_jisha'){
        player.addSkill(skill);               
        player.mark(skill,{
            name:get.translation(skill),
            content:lib.translate[skill+'_info']
        });
       game.log(player,'获得技能','【'+get.translation(skill)+'】');     
       }   
        'step 1'    
		var list=[];
						for(var i in lib.character){
							if(lib.character[i].mode&&lib.character[i].mode.contains(lib.config.mode)==false) continue;							
							if(i!='list') list.push(i);
						}
						var names=[];
						for(var i=0;i<game.players.length;i++){
							names.push(game.players[i].name);
							names.push(game.players[i].name2);
						}
						for(var i=0;i<game.dead.length;i++){
							names.push(game.dead[i].name);
							names.push(game.dead[i].name2);
						}
						if(list.length){
							var dialog=ui.create.dialog([list,'character']);
							var next=player.chooseButton(dialog);
							next.ai=function(button){
								var di=['luoshen','jizhi','reguose','jieyin','lijian','shangshi','ganlu','miji'];
								var tian=['qingguo','xiaoji','beige','buyi','qiuyuan','qieting','qiaoshi','shenxian','liangzhu','zhendu'];
								if(!player.storage.tian){
									for(var i=0;i<tian.length;i++){
										if(lib.character[button.link][3].contains(tian[i])){
											return Math.random();
										}
									}
								}
								else{
									for(var i=0;i<di.length;i++){
										if(lib.character[button.link][3].contains(di[i])){
											return Math.random();
										}
									}
								}
								return 0;
							}
							next.filterButton=function(button){
								return !names.contains(button.link);
							}
							if(player.storage.tian==true){
								player.storage.tian=false;
							}
							else player.storage.tian=true;
						}
						'step 2'
						if(result.bool){
							var a=trigger.source.hp;
                            var b=trigger.source.maxHp;
                            trigger.source.init(result.links[0]);
                            trigger.source.hp=a; 
                            trigger.source.maxHp=b;
                            trigger.source.update();
							player.draw(Math.ceil(trigger.card.number/3));
						}
						else event.finish();
       /* var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun','xhuo','xren','xxiao'].randomGet();
            });
        }
        var name=list.randomGet();        
        var a=trigger.source.hp;
        var b=trigger.source.maxHp;
        trigger.source.reinit(trigger.source.name,name,false);
        trigger.source.hp=a; 
        trigger.source.maxHp=b;
        trigger.source.update();*/
       // 'step 2'   
        //alive('extension/群英会/xwj_tiandun.gif',2.5);          
        //game.delay(2);
      // game[otherFunction[7]](game.qyhGif('xwj_tiandun.gif',null,null,true),3600);		
       //player.draw(Math.ceil(trigger.card.number/3));
    },
          ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*3];
                    if(target.hp==3) return [1,get.tag(card,'damage')*2];
                    if(target.hp==2) return [1,get.tag(card,'damage')*1];
                }
            },
                    },
                },      
            },
"xwj_xu_tuiyin":{
                trigger:{
                    player:"damage",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                forced:true,
                audio:"ext:群英会:2",
                content:function (){                                                 
        player.draw(Math.ceil(game.roundNumber/2));                      
        var chat=['再敢动我，我会让你深刻知道“死”字是怎么写的','唉～退隐江湖，也不得一刻的安宁'].randomGet();
        player.say(chat);                  
    },
            },
            
 "xwj_xu_yunchou":{
 mode:["identity"],
                audio:"ext:群英会:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                content:function (){                 
        "step 0"             
       player.$fullscreenpop('孰忠孰奸由我定','fire');         
       if(player.next.identity!='zhu'){
       event.current=player.next;
        }
       else{
          event.current=player.next.next;
        }
         event.num=0;
         player.storage.countfan=0;
         player.storage.countzhong=0;
         player.storage.countnei=0;
         for (var i=0;i<game.players.length;i++){
            if (game.players[i]!=player){
            if (game.players[i].identity=='fan') player.storage.countfan++;
            if (game.players[i].identity=='zhong') player.storage.countzhong++;
            if (game.players[i].identity=='nei') player.storage.countnei++;
            }
       }
    "step 1"
         if(num<event.targets.length&&event.current.identity!=='zhu'&&event.current.isAlive()){                
         var controls=[];               
               var namex=event.current.name;
                   if (player.storage.countzhong>0) controls.push('zhong');        
                  if (player.storage.countnei>0)  controls.push('nei');
                   if (player.storage.countfan>0) controls.push('fan');                
          var str='请选择'+get.translation(namex)+'的身份';            
          player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                        return Math.floor(Math.random()*controls.length);
                    };      
       }        
        "step 2"
        if(result.control&&event.current.identity!=='zhu'){
            if (result.control=='fan') {
            player.storage.countfan--;
            event.current.setIdentity('fan');
            event.current.identity='fan';
            event.current.update();
            }
            if (result.control=='zhong') {
            player.storage.countzhong--;
            event.current.setIdentity('zhong');
            event.current.identity='zhong';
            event.current.update();
            }
            if (result.control=='nei') {
            player.storage.countnei--;
            event.current.setIdentity('nei');
            event.current.identity='nei';
            event.current.update();
            }
        }                                        
            if (event.current.next==player){      
                player.awakenSkill("xwj_xu_yunchou");      
                event.finish();               
            }      
else {
     event.current=event.current.next;             
     event.goto(1); 
} 
            
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },

  "xwj_xu_xibie":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"loseEnd",
                },
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e')return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        var skillprompt = "是否发动<cS>惜别</cS>？";
        skillprompt += "<p>"+get.translation("xwj_xu_xibie_info")+"</p>";
        player.chooseBool(skillprompt).ai=function(){
            return game.hasPlayer(function(current){
                return current!=player&&get.attitude(player,current)<2;
            });
        };
        "step 1"
        if(result.bool){
            player.draw();
            player.chooseTarget("惜别：选择发动对象",function(card,player,target){
                return target!=player&&target.countCards('hej');
            }).ai=function(target){
                return 2 - get.attitude(player,target);
            };
        }
        else {
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.logSkill("xwj_xu_xibie",result.targets[0]);
            player.discardPlayerCard("hej",result.targets[0],"hej",true);
        }
        else {
            event.goto(0);
        }
    },
                ai:{
                    expose:0.5,
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },

            "xwj_xu_qingshang":{
                audio:"ext:群英会:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var skillprompt = "是否发动<cS>情殇</cS>？";
        skillprompt += "<p>"+get.translation("xwj_xu_qingshang_info")+"</p>"
        player.chooseBool(skillprompt).ai=function(){
            return true;
        };
        "step 1"
        if(result.bool){
            player.chooseToDiscard("情殇：选择弃置一张牌","he").ai=function(card){
                if(player.hasSkill("xwj_xu_xibie")){
                    if(get.position(card)=="e")return 15 - get.value(card);
                }
                return 12 - get.value(card);
            };
        }
        else {
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.logSkill("xwj_xu_qingshang");
            player.chooseControl("基本牌","锦囊牌","装备牌",function(event,player){
                return ["基本牌","锦囊牌","装备牌"].randomGet();
            }).prompt = "情殇：声明一种牌的类型";
        }
        else {
            event.goto(0);
        }
        "step 3"
        if(result.control=="基本牌"){
            event.type = ["basic"];
        }
        else if(result.control=="锦囊牌"){
            event.type = ["trick","delay"];
        }
        else {
            event.type = ["equip"];
        }
        player.popup(result.control);
        event.cards = get.cards(5);
        player.showCards("情殇展示",event.cards);
        "step 4"
        for(var i=0;i<event.cards.length;i++){
            if(!event.type.contains(get.type(event.cards[i]))){
                ui.discardPile.appendChild(event.cards[i]);
                event.cards.remove(event.cards[i--]);
            }
        }
        if(event.cards.length){
            player.gain(event.cards);
            player.$draw(event.cards);
        }
    },
            },           
},

 translate:{  
            "xwj_xu_SPxiaosu":"sp小苏",
            "xwj_xu_huhua":"护花",
            "xwj_xu_huhua_info":"<li>当一名女性角色受到来源不为你的伤害后，你可与其组成双将。然后其与伤害来源的原武牌先后随机替换为一张女性角色的武将牌<li>当你受到伤害后，你可令伤害来源的武将牌随机替换为一张女性角色的武将牌",
            "xwj_xu_huhua2":"护花",
            "xwj_xu_huhua2_info":"当你受到伤害后，伤害来源的武将牌随机替换为一张女性角色的武将牌",           
            "xwj_xu_shuangsu":"双宿",
            "xwj_xu_shuangsu_info":"<span class=greentext>觉醒技</span> 当你进入濒死状态时，你须失去技能【护花】，获得技能【栋梁】，与【小焕】组成双将，然后回复体力至3",
            "xwj_xu_dongliang":"栋梁",
            "xwj_xu_dongliang_info":"当你受到伤害时，你可以摸X张牌（X为场上女性角色数）",
            "xwj_xu_xiaohuan":"小焕",
            "xwj_xu_lixing":"厉行",
            "xwj_xu_lixing_info":"当你使用【杀】指定目标时，你可获得目标角色的一张手牌",
            "xwj_xu_choumou":"绸缪",
            "xwj_xu_choumou_info":"当一名其他角色使用的【杀】被响应后，你可随机使用一张装备牌",            
            "xwj_xu_dingju":"定局",
            "xwj_xu_dingju_info":"<span class=yellowtext>限定技</span> 你可回收所有其他角色的武将牌，然后重新分配武将牌（原体力上限和体力均不变）",
	           "xwj_xu_cheng":"小诚",
            "xwj_xu_tiandun":"天遁",
            "xwj_xu_tiandun_info":"<font color=#f00>锁定技</font> 当你受到其他角色使用卡牌所造成的伤害时，你随机获得伤害来源的一项技能，然后检索所有的武将牌牌堆，选择一张令伤害来源替换之，然后你再摸X张牌（X为对你造成伤害的牌的点数的三分之一进位取整）",                  
            "xwj_xu_xiaoxu":"小徐",
            "xwj_xu_tuiyin":"退隐",
            "xwj_xu_tuiyin_info":"<font color=#f00>锁定技</font> 当你受到伤害时，你可摸X张牌（X为游戏轮数的一半进位取整）",
            "xwj_xu_Sukincen":"小苏",
            "xwj_xu_xibie":"惜别",
            "xwj_xu_xibie_info":"当你失去装备区的牌时（包括替换和弃置等），你可以摸一张牌并弃置其他角色区域内的一张牌。",
            "xwj_xu_qingshang":"情殇",
            "xwj_xu_qingshang_info":"当你受到伤害后，你可以弃置一张牌并声明一种牌的类型，然后从牌堆顶亮出五张牌，获得其中与你所声明类型相同的牌，将其余的牌置入弃牌堆。",
            "xwj_xu_yunchou":"运筹",
            "xwj_xu_yunchou_info":"<span class=yellowtext>限定技</span> 你可回收除主公外的其他角色的身份牌，然后重新分配身份牌（限身份局）",
            
         },
};
if(lib.device||lib.node){
				for(var i in xu.character){xu.character[i][4].push('ext:群英会/'+i+'.jpg');}
			}else{
				for(var i in xu.character){xu.character[i][4].push('db:extension-群英会:'+i+'.jpg');}
			}
			return xu;
		});
		lib.config.all.characters.push('xu');
		if(!lib.config.characters.contains('xu')) lib.config.characters.remove('xu');
		lib.translate['xu_character_config']='<span class=yellowtext>Sukincen</span>';

		
	// ---------------------------------------卡牌------------------------------------------//	
		game.import('card',function(){
var xwj_xus_equip={
name:'xwj_xus_equip',
connect:true,		
              	card:{	
		         			"xwj_xus_houzi":{
                audio:true,
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                skills:["xwj_xus_houzi"],
                ai:{
                    basic:{
                        equipValue:8,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                image:"ext:群英会/xwj_xus_houzi.png",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "zbfs":{
                audio:true,                            
                derivation:"xwj_xhuoying_huanyue",            
                cardnature:"fire",
                vanish:true,	
                skills:["zbfs"],
image:"ext:群英会/zbfs.png",				
                enable:function (card,player){
        return player.canAddJudge(card);
    },
                modTarget:function (card,player,target){
        return lib.filter.judge(card,player,target);
    },
                filterTarget:function (card,player,target){
        return (lib.filter.judge(card,player,target)&&player==target);
    },
                selectTarget:[-1,-1],
                judge:function (card){
        if(get.suit(card)=='diamond') return -6;
        return 0;
    },
                effect:function (){
        'step 0'
        if(result.bool==false){
            if(!card.storage.zbfs){
                card.storage.zbfs=1;
            }
            else{
                card.storage.zbfs++;
            }                    
            player.damage(card.storage.zbfs,'fire','nosource');
            player.discard(player.getCards('he').randomGets(card.storage.zbfs));            
        }
        'step 1'
        player.addJudgeNext(card);
    },
                cancel:function (){
        player.addJudgeNext(card);
    },
                ai:{
                    basic:{
                        order:5,
                        useful:5,
                        value:1,
                    },
                    result:{
                        target:function (player,target){
                return lib.card.shandian.ai.result.target(player,target);
            },
                    },
                },
                content:function (){
                game.playSu('zbfs');
        target.addJudge(card,cards);
    },
                allowMultiple:false,
            },
            "xwj_xus_mianju":{
                audio:true,
                type:"equip",
                subtype:"equip2",
                skills:["xwj_xus_mianju"],
                ai:{
                    order:9.5,
                    basic:{
                        equipValue:function (card,player){
            if(!player.isTurnedOver()) return 6;
            if(player.isTurnedOver()) return -10;
            return 0;
              },
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                image:"ext:群英会/xwj_xus_mianju.png",
                enable:true,
                selectTarget:-1,                
                modTarget:true,
                allowMultiple:false,               
                toself:true,
                fullskin:true,
            },
            "xwj_xus_shoulijian":{             
               	audio:true, 			
                type:"basic",
				skills:["xwj_xus_shoulijian"],
                enable:true,
                fullskin:true,   
				filterTarget:function (card,player,target){
        return get.distance(player,target)>1;
    },
                content:function (){
        "step 0"
        game.playSu('xwj_xus_shoulijian');
        if(!target.countCards('he',{type:'equip'})){
            target.damage();
            event.finish();
        }
        else{
            target.chooseToDiscard('he',{type:'equip'},'弃置一张装备牌或受到一点伤害').ai=function(card){
                return 7-get.value(card);
            };
        }
        "step 1"
        if(!result.bool){
            target.damage();
        }
    },
image:"ext:群英会/xwj_xus_shoulijian.png",				
                ai:{
                    basic:{
                        order:9,
                        value:6,
                        useful:2,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        discard:1,
                        damage:1,
                    },
                },
                selectTarget:1,
            },
			
            "xwj_xus_kuwu":{
                audio:true,
                fullskin:true,
				image:"ext:群英会/xwj_xus_kuwu.png",
                type:"equip",
                subtype:"equip1",
                skills:["xwj_xus_kuwu"],
                nomod:true,
                nopower:true,
                unique:true,
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    equipValue:6,
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,               
                modTarget:true,
                allowMultiple:false,                
                toself:true,
            },
            "xwj_xus_xuelunyang":{
                audio:true,
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                skills:["xwj_xus_xuelunyang"],
                ai:{
                    basic:{
                        equipValue:8,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                image:"ext:群英会/xwj_xus_xuelunyang.png",
                enable:true,
                selectTarget:-1,                
                modTarget:true,
                allowMultiple:false,                
                toself:true,
            },
            "xwj_xus_jiuwei":{
                audio:true,
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                skills:["xwj_xus_jiuwei"],
                ai:{
                    basic:{
                        equipValue:8,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                image:"ext:群英会/xwj_xus_jiuwei.png",
                enable:true,
                selectTarget:-1,                
                modTarget:true,
                allowMultiple:false,               
                toself:true,
            },	
            			  
            
                },
				
				skill:{	
								
				 "zbfs":{
                audio:true,
                audio:"ext:群英会:1",    
                image:"ext:群英会/zbfs.png",				
                derivation:"xwj_xhuoying_huanyue",            
                cardnature:"fire",
                vanish:true,				
                enable:function (card,player){
        return player.canAddJudge(card);
    },
                modTarget:function (card,player,target){
        return lib.filter.judge(card,player,target);
    },
                filterTarget:function (card,player,target){
        return (lib.filter.judge(card,player,target)&&player==target);
    },
                selectTarget:[-1,-1],
                judge:function (card){
        if(get.suit(card)=='diamond') return -6;
        return 0;
    },
                effect:function (){
        'step 0'
        if(result.bool==false){
            if(!card.storage.zbfs){
                card.storage.zbfs=1;
            }
            else{
                card.storage.zbfs++;
            }                    
            player.damage(card.storage.zbfs,'fire','nosource');
            player.discard(player.getCards('he').randomGets(card.storage.zbfs));            
        }
        'step 1'
        player.addJudgeNext(card);
    },
                cancel:function (){
        player.addJudgeNext(card);
    },
                ai:{
                    basic:{
                        order:5,
                        useful:5,
                        value:1,
                    },
                    result:{
                        target:function (player,target){
                return lib.card.shandian.ai.result.target(player,target);
            },
                    },
                },
                content:function (){
                game.playSu('zbfs');
        target.addJudge(card,cards);
    },
                allowMultiple:false,
            },
				"xwj_xus_shoulijian":{		       
                audio:true,        
                enable:true,                
                filterTarget:function (card,player,target){
        return get.distance(player,target)>1;
    },
                content:function (){
        "step 0"
        game.playSu('xwj_xus_shoulijian');
        if(!target.countCards('he',{type:'equip'})){
            target.damage();
            event.finish();
        }
        else{
            target.chooseToDiscard('he',{type:'equip'},'弃置一张装备牌或受到一点伤害').ai=function(card){
                return 7-get.value(card);
            };
        }
        "step 1"
        if(!result.bool){
            target.damage();
        }
    },
                ai:{
                    basic:{
                        order:9,
                        value:6,
                        useful:2,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        discard:1,
                        damage:1,
                    },
                },
                selectTarget:1,
            },
				
					"xwj_xus_houzi":{
trigger:{
        global:"useCardToBegin",
    },
    audio:"ext:群英会:1",
    filter:function (event,player){
        var card=player.get('e','5');
        if(card){
            var name=card.name;              
            if(event.name=='tao'&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d'&&event.player!=player&&name&&name.indexOf('xwj_xus_houzi')!=-1) return true;
        }
        return false;
    },
    check:function (event,player){
        return ai.get.attitude(player,event.player)<=0;
    },
    content:function (){
    "step 0"
     player.$fullscreenpop('猴子偷桃','fire');
       trigger.untrigger();
    trigger.finish();
   "step 1"
   player.discard(player.get('e','5'));
   "step 2"
     player.gain(trigger.cards);
    player.$gain2(trigger.cards);
       },
},

"xwj_xus_mianju":{
 audio:"ext:群英会:1",
    trigger:{
        player:"turnOverBefore",
    },
    forced:true,
    content:function (){
        trigger.cancel();
    },
    ai:{
        noturnOver:true,
        effect:{
            target:function (card,player,target,current){
                if(get.tag(card,'turnOver')) return [0,0];
            },
        },
    },
},

"xwj_xus_kuwu":{
audio:"ext:群英会:1",
    trigger:{
        source:"damageEnd",
    },
    forced:true,
    priority:55,
    filter:function (event,player){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.countCards('he')>0;
    },
    content:function (){
        trigger.player.chooseToDiscard(true,'he');
    },
},

"xwj_xus_xuelunyang":{
 audio:"ext:群英会:1",
    trigger:{
        player:"phaseBegin",
    },
    priority:2018,
    direct:true,
    createDialog:function (player,target,onlylist){
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !lib.skill[skills[j]].unique&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            game.resume();
        };
        for(i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                if(translation[0]=='新'&&translation.length==3){
                    translation=translation.slice(1,3);
                }
                else{
                    translation=translation.slice(0,2);
                }
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },
    content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('xwj_xus_xuelunyang'),function(card,player,target){
            var names=[];
            if(target.name&&!target.isUnseen(0)) names.add(target.name);
            if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
            if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
            var pss=player.getSkills();
            for(var i=0;i<names.length;i++){
                var info=lib.character[names[i]];
                if(info){
                    var skills=info[3];
                    for(var j=0;j<skills.length;j++){
                        if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                            !lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                            return true;
                        }
                    }
                }
                return false;
            }
        }).set('ai',function(target){
            if(get.attitude(_status.event.player,target)>0) return Math.random();
            return 0;
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('xwj_xus_xuelunyang',event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        event.skillai=function(list){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            event.dialog=lib.skill.xwj_xus_xuelunyang.createDialog(player,target);//tianshu
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai(lib.skill.xwj_xus_xuelunyang.createDialog(player,target,true));
        }
        'step 3'
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        player.addTempSkill(result);
        player.popup(result);
        game.log(player,'获得了','【'+get.translation(result)+'】');
    },
},

"xwj_xus_jiuwei":{
trigger:{
        player:"phaseEnd",
    },
    audio:"ext:群英会:1",
    filter:function (event,player){        
        return player.isAlive();
    },
   frequent:true,
    content:function (){
       if(player.isDamaged()){
       player.recover();
       }
       else{
       player.draw();
       }
       },
},					



				},
												
                translate:{
			      		"xwj_xus_houzi":"猴子",
            "xwj_xus_houzi_info":"猴子偷桃：当场上有其他角色使用【桃】时，你可以弃掉【猴子】，阻止【桃】的结算并将其收为手牌",
            "zbfs":"蒸危暴威",
            "zbfs_info":"延时性锦囊牌，若判定结果为方片，则目标角色受到X点无来源的火焰伤害并随机弃置X张牌（X为此锦囊判定结果为方片的次数）。判定完成后，将此牌移动到下家的判定区里",
            "xwj_xus_mianju":"漩涡面具",
            "xwj_xus_mianju_info":"<font color=#f00>锁定技</font> 你的武将牌不能被翻面",
            "xwj_xus_shoulijian":"手里剑",
            "xwj_xus_shoulijian_info":"出牌阶段，对一名距离1以外的角色使用，令其弃置一张装备牌或受到一点伤害",
            "xwj_xus_kuwu":"苦无",
            "xwj_xus_kuwu_info":"<font color=#f00>锁定技</font> 每当你使用【杀】造成一次伤害，受伤角色须弃置一张牌",
            "xwj_xus_xuelunyang":"写轮眼",
            "xwj_xus_xuelunyang_info":"回合开始阶段，你可以选择一名角色，然后获得其一项技能，直到回合结束",
            "xwj_xus_jiuwei":"九尾",
            "xwj_xus_jiuwei_info":"（收集查克拉）回合结束时，若你已受伤，你可回复一点体力，否则摸一张牌",
            
				},
				list:[
					["diamond","5","xwj_xus_houzi"],
		["heart","9","xwj_xus_jiuwei"],
		["heart","2","xwj_xus_xuelunyang"],
		["spade","6","xwj_xus_kuwu"],
		["diamond","4","xwj_xus_shoulijian"],
		["spade","4","xwj_xus_shoulijian"],
		["club","3","xwj_xus_mianju"],				
				]					
			};
			return xwj_xus_equip;
			});
		lib.translate['xwj_xus_equip_card_config']='群英会';
lib.config.all.cards.push('xwj_xus_equip');
if(!lib.config.cards.contains('xwj_xus_equip')) lib.config.cards.remove('xwj_xus_equip');
};
},help:{"群英会":"<li>此扩展原名为：新武将，始创于2017年8月，汇集了部分三国新将和《火影忍者》、《秦时明月》、《武庚纪》等作品的部分角色，技能强度略高，可联机。若想关闭某个扩展小包，可在相应武将栏内关闭并重启，开启同理。<li>若发现BUG可到贴吧或扩展交流②群：852740627 反馈，有技能设计（尤其是玄机动画《武庚纪》的角色）的建议也可联系作者<li>新增卡牌：【手里剑】2张，【写轮眼】、【九尾】、【漩涡面具】、【苦无】、【猴子】各1张。<li>须关闭“配音扩展”的“连杀开关”或者直接删了audio-skill目录下的liansha1至liansha7和jiuren1、jiuren2的九个配音文件，否则可能会与“配音扩展”一起播放击杀与回复体力的音效。<li>游戏时或游戏过程中若遇见卡死情况，打开兼容模式提高扩展的兼容性即可解决。目前为止，已解决绝大部分已知的可能会导致游戏卡死的BUG，暂时未发现任何导致游戏卡死、弹窗警告的技能<li>【编码】Sukincen<li>【配图】Sukincen<li>【录制配音】Sukincen"},config:{
"xwjhelp":{
				"name":"群英会","init":"1","item":{"1":"查看介绍","2":"<li>此扩展原名为：新武将。若发现BUG可到贴吧或无名杀扩展交流群：852740627 反馈，有技能设计的建议也可联系作者","3":"<li>本扩展汇集了部分三国新将和《火影忍者》、《秦时明月》、《武庚纪》等作品的人物（可在菜单→武将界面处关闭任意一个扩展小包，关闭重启后会隐藏武将图片且玩家禁选、ai禁用），技能强度略高。有技能特效，Ai智商较高，还可联机！","4":"<li>本扩展能在关闭兼容模式情况下流畅运行","5":"<li>更多介绍详看：其它→帮助"}
					},				
					"xjisha":{
            name:'击杀特效',
           "intro":"击杀特效：开启后重启游戏生效。任意一名角色杀死一名其他角色后，会记录此为其在本局共杀死过几名角色，并播放相应击杀人次的文字动画和配音",
            init:true
		},							
     	/*		
  			"xmeihuakapai":{
            name:'美化卡牌',
           "intro":"美化卡牌：开启后重启游戏生效。将卡牌的点数1、11、12、13分别调整为A、J、Q、K，颜色微调",
            init:false
		},							
					"shenxuanshili":{
            name:'神选势力',
           "intro":"神选势力：开启后重启游戏生效。开局时神势力的武将可重选势力",
            init:false
		},				
				*/	
    		"wuxianyuedu":{
            name:'无限月读',
           "intro":"无限月读：灵感来源借鉴自《作者包》的“何子诈尸”，开启后重启游戏生效。每当一名角色阵亡后，若场上没有“辉夜”，则该阵亡角色将武将牌替换为“辉夜”并复活（3上限3体力），摸3张牌，且于当前角色的回合结束后立即开始回合",
            init:false
		},							
						"xwansha":{
            name:'完杀模式',
           "intro":"完杀模式：开启后重启游戏生效。场上所有角色视为拥有技能“完杀”",
            init:false
		},											
						"_chooseTime":{
            name:'出牌计时器',
            "intro":"出牌计时器：开启后重启游戏生效。玩家在出牌阶段会自动倒计时，时长15秒，超出时间会直接结束出牌阶段",          
            init:false
		},				
		/*	"_Background":{
            name:'Background',
            "intro":"背景图片：开启后重启游戏生效。开场所有角色摸牌后会切换精美背景图片",
            init:false
		},				*/
/*			"_BackgroundMusic":{
            name:'BackgroundMusic',
               "intro":"背景音乐：开启后重启游戏生效。游戏开始后会切换优质动听的背景音乐",
            init:false
		},				*/
		
  		"BackgroundMusic":{
      name:'BackgroundMusic',
      "intro":"背景音乐：可随意点播、切换优质动听的背景音乐",
       init:'1',
			item:{
				'1':'默认',				
				'2':'胜利',				
			},			
		 onclick:function (item){
			switch (item){
			case '1':
			ui.backgroundMusic.pause();
			game.playBackgroundMusic();
			break;
			case '2':
    ui.backgroundMusic.pause();    
    ui.backgroundMusic.src=lib.assetURL+'extension/群英会/wms_backgroundmusic.mp3';    
    setInterval(function(){
			ui.backgroundMusic.src= lib.assetURL+"extension/群英会/wms_backgroundmusic.mp3";
				},320500)
		               
    // game.playSu('wms_backgroundmusic'); 
			break;	
			}
			}
		},							
			 
			   		"BackgroundPicture":{
           name:'BackgroundPicture',
          "intro":"背景图片：可随意切换精美高清的背景图片",
            init:'1',
			item:{
				'1':'默认背景',				
				'2':'背水一战',				
				'3':'无限月读',		
				'4':'无色神力',		
				'5':'复仇之夜',		
			},			
		 onclick:function (item){
			switch (item){
			case '1':		
			game.broadcastAll()+ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
			break;
			case '2':
    game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_background.jpg");
			break;	
				case '3':
    game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_wxyd_background.jpg");
			break;	
				case '4':
    game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_tian_background.jpg");
			break;	
				case '5':
    game.broadcastAll()+ui.background.setBackgroundImage("extension/群英会/wms_shixing_background.jpg");
			break;	
			}
			}
		},							
		
},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
            
        },
        translate:{
            
        },
        list:[
		
		],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"★Sukincen★<li><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入QQ群参与讨论</span>",
    diskURL:"",
    forumURL:"",
    version:"1.96",
},files:{"character":[],"card":[],"skill":[]}}})
