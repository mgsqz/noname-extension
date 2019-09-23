game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"凤凰模式",content:function (config,pack){
		game.countChoose=function(clear){
            if(_status.imchoosing){
                return;
            }
            _status.imchoosing=true;
			if(game.hasPlayer(function(target){return target.hasSkill('_timeLimit_timeOver')})&&!_status.countDown){
                ui.timer.show();
                var num=_status.timeCount;
                game.countDown(parseInt(num),function(){
					ui.timer.hide();
					delete _status.timeCount;
					game.stopCountChoose();
					var evt=_status.event;
					for(var i=0;i<10;i++){
						if(evt&&evt.getParent){
							evt=evt.getParent();
						}
						if(evt.name=='phaseUse'){
							evt.skipped=true;
							break;
						}
					}
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
            if(_status.connectMode&&!_status.countDown){
                ui.timer.show();
                var num;
                if(_status.connectMode){
                    num=lib.configOL.choose_timeout;
                }
                else{
                    num=get.config('choose_timeout');
                }
                game.countDown(parseInt(num),function(){
                    ui.click.auto();
                    ui.timer.hide();
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
        };
game.saveConfig('wujinmoshiYZR',undefined);
if(config.wujinmoshi){
game.wujinmoshiRE=function(){
game.saveConfig('wujinmoshiP',undefined);
game.saveConfig('wujinmoshiDXB',undefined);
game.saveConfig('wujinmoshiDS',undefined);
game.saveConfig('wujinmoshiDamage',undefined);
game.saveConfig('wujinmoshiMaxHp',undefined);
game.saveConfig('wujinmoshiMaxHandCard',undefined);
game.saveConfig('wujinmoshiDraw',undefined);
game.saveConfig('wujinmoshiRecover',undefined);
game.saveConfig('wujinmoshiESkill',undefined);
game.saveConfig('wujinmoshiDamageI',undefined);
game.saveConfig('wujinmoshiMaxHpI',undefined);
game.saveConfig('wujinmoshiMaxHandCardI',undefined);
game.saveConfig('wujinmoshiDrawI',undefined);
game.saveConfig('wujinmoshiRecoverI',undefined);
game.saveConfig('wujinmoshiESkillE',undefined);
game.reload();
};
if(lib.config.wujinmoshiDXB==undefined) game.saveConfig('wujinmoshiDXB',1);
if(lib.config.wujinmoshiDS==undefined) game.saveConfig('wujinmoshiDS',1);
if(lib.config.wujinmoshiDamage==undefined) game.saveConfig('wujinmoshiDamage',0);
if(lib.config.wujinmoshiMaxHp==undefined) game.saveConfig('wujinmoshiMaxHp',0);
if(lib.config.wujinmoshiMaxHandCard==undefined) game.saveConfig('wujinmoshiMaxHandCard',0);
if(lib.config.wujinmoshiDraw==undefined) game.saveConfig('wujinmoshiDraw',0);
if(lib.config.wujinmoshiRecover==undefined) game.saveConfig('wujinmoshiRecover',0);
if(lib.config.wujinmoshiDamageI==undefined) game.saveConfig('wujinmoshiDamageI',0);
if(lib.config.wujinmoshiMaxHpI==undefined) game.saveConfig('wujinmoshiMaxHpI',0);
if(lib.config.wujinmoshiMaxHandCardI==undefined) game.saveConfig('wujinmoshiMaxHandCardI',0);
if(lib.config.wujinmoshiDrawI==undefined) game.saveConfig('wujinmoshiDrawI',0);
if(lib.config.wujinmoshiRecoverI==undefined) game.saveConfig('wujinmoshiRecoverI',0);
if(lib.config.wujinmoshiMAXLC==undefined) game.saveConfig('wujinmoshiMAXLC',0);
if(lib.config.wujinmoshiMAXLCWJ==undefined) game.saveConfig('wujinmoshiMAXLCWJ','');
if(lib.config.wujinmoshiMAXLC<lib.config.wujinmoshiDXB-1){
game.saveConfig('wujinmoshiMAXLC',lib.config.wujinmoshiDXB-1);
game.saveConfig('wujinmoshiMAXLCWJ','（'+lib.translate[lib.config.wujinmoshiP]+'）');
};
if(lib.config.wujinmoshiHJK==undefined) game.saveConfig('wujinmoshiHJK',0);
if(lib.config.wujinmoshiXRK==undefined) game.saveConfig('wujinmoshiXRK',0);
var wujinmoshiESkillESkills=[];
for(i in lib.character){
for(var j=0;j<lib.character[i][3].length;j++){
wujinmoshiESkillESkills.push(lib.character[i][3][j]);
};
};
if(lib.config.wujinmoshiESkillE==undefined) game.saveConfig('wujinmoshiESkillE',wujinmoshiESkillESkills.randomGet());
			game.WJchangeCharacter=function(){
				var WJchangeCharacter=ui.create.dialog('hidden');
				WJchangeCharacter.style.height='calc(100%)';
				WJchangeCharacter.style.width='calc(100%)';
				WJchangeCharacter.style.left='0px';
				WJchangeCharacter.style.top='0px';
				WJchangeCharacter.classList.add('popped');
				WJchangeCharacter.classList.add('static');
						
						
				var WJchangeCharacterCC=ui.create.div();
              	WJchangeCharacterCC.style.left='50px';
                WJchangeCharacterCC.style.top='30px';
				var character='';
				for(i in lib.character){
					if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
				};
				WJchangeCharacterCC.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
				var WJchangeCharacterYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					var country=document.getElementById('chooseCharacter');
					var str=country.options[country.selectedIndex].value;
					if(confirm('是否选择'+lib.translate[str]+'？')){
						WJchangeCharacter.delete();
						game.saveConfig('wujinmoshiP',str);
					};
				});
				WJchangeCharacterYES.style.left='-40.55px';
				WJchangeCharacterYES.style.top='70px';

						
				WJchangeCharacter.add(WJchangeCharacterCC);
				WJchangeCharacter.add(WJchangeCharacterYES);
				ui.window.appendChild(WJchangeCharacter);
			};
if(lib.brawl){
lib.brawl.wujinmoshi={
            name:'无尽模式',
            mode:'identity',
            intro:'曾通过的最高轮次：'+get.cnNumber(lib.config.wujinmoshiMAXLC)+'轮'+lib.config.wujinmoshiMAXLCWJ,
			showcase:function(init){
				if(lib.config.wujinmoshiYZR!=true){
					this.style.width='575px';
					var wujinmoshichooseCharacter1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">选择<br>武将</span>',function(){
						var wujinmoshichooseCharacter=ui.create.dialog('hidden');
						wujinmoshichooseCharacter.style.height='calc(100%)';
						wujinmoshichooseCharacter.style.width='calc(100%)';
						wujinmoshichooseCharacter.style.left='0px';
						wujinmoshichooseCharacter.style.top='0px';
						wujinmoshichooseCharacter.classList.add('popped');
						wujinmoshichooseCharacter.classList.add('static');
						
						
						var wujinmoshiCharacter=ui.create.div();
                		wujinmoshiCharacter.style.left='50px';
                		wujinmoshiCharacter.style.top='30px';
						var character='';
						for(i in lib.character){
							if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
						};
						wujinmoshiCharacter.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
						var wujinmoshiYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
							var country=document.getElementById('chooseCharacter');
							var str=country.options[country.selectedIndex].value;
							if(confirm('是否选择'+lib.translate[str]+'？')){
								wujinmoshichooseCharacter.delete();
								wujinmoshichooseCharacter1.hide();
								wujinmoshiDXB.show();
								wujinmoshiDS.show();
								wujinmoshiharacter.show();
								wujinmoshiDamage.show();
								wujinmoshiMaxHp.show();
								wujinmoshiMaxHandCard.show();
								wujinmoshiDraw.show();
								wujinmoshiRecover.show();
								wujinmoshiESkill.show();
								wujinmoshiDSDJC.show();
								wujinmoshiDamageE.show();
								wujinmoshiMaxHpE.show();
								wujinmoshiMaxHandCardE.show();
								wujinmoshiDrawE.show();
								wujinmoshiRecoverE.show();
								wujinmoshiESkillE.show();
								game.saveConfig('wujinmoshiP',str);
							};
						});
						wujinmoshiYES.style.left='-40.55px';
						wujinmoshiYES.style.top='70px';

						
						wujinmoshichooseCharacter.add(wujinmoshiCharacter);
						wujinmoshichooseCharacter.add(wujinmoshiYES);
						ui.window.appendChild(wujinmoshichooseCharacter);
					});
					wujinmoshichooseCharacter1.style.left='0px';
					wujinmoshichooseCharacter1.style.top='0px';
					this.appendChild(wujinmoshichooseCharacter1);
					if(lib.config.wujinmoshiP!=undefined) wujinmoshichooseCharacter1.hide();
					
					
					var wujinmoshiDXB=ui.create.div();
					wujinmoshiDXB.style.left='0px';
					wujinmoshiDXB.style.top='0px';
					this.appendChild(wujinmoshiDXB);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB==undefined){
							wujinmoshiDXB.innerHTML='未开始';
						}else{
							wujinmoshiDXB.innerHTML='第'+get.cnNumber(lib.config.wujinmoshiDXB)+'轮';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDXB.hide();
					
					
					var wujinmoshiDS=ui.create.div();
					wujinmoshiDS.style.left='120px';
					wujinmoshiDS.style.top='0px';
					this.appendChild(wujinmoshiDS);
					setInterval(function(){
						if(lib.config.wujinmoshiDS==undefined){
							wujinmoshiDS.innerHTML='拥有点数：0点';
						}else{
							wujinmoshiDS.innerHTML='拥有点数：'+lib.config.wujinmoshiDS+'点';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDS.hide();

					
					var wujinmoshiharacter=ui.create.div();
					wujinmoshiharacter.style.left='0px';
					wujinmoshiharacter.style.top='20px';
					this.appendChild(wujinmoshiharacter);
					setInterval(function(){
						if(lib.config.wujinmoshiP==undefined){
							wujinmoshiharacter.innerHTML='拥有武将：未选择';
						}else{
							wujinmoshiharacter.innerHTML='拥有武将：'+lib.translate[lib.config.wujinmoshiP];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiharacter.hide();

					
					var wujinmoshiDamage=ui.create.div();
					wujinmoshiDamage.style.left='0px';
					wujinmoshiDamage.style.top='40px';
					this.appendChild(wujinmoshiDamage);
					setInterval(function(){
						if(lib.config.wujinmoshiDamage==undefined){
							wujinmoshiDamage.innerHTML='攻击力加成：0';
						}else{
							wujinmoshiDamage.innerHTML='攻击力加成：'+lib.config.wujinmoshiDamage;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamage.hide();

					
					var wujinmoshiDamageAdd=ui.create.div(function(){
						if(confirm('消耗'+(5+Math.floor(lib.config.wujinmoshiDamage/3))+'点点数来增加一点攻击力?')){
							game.saveConfig('wujinmoshiDamage',lib.config.wujinmoshiDamage+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-(5+Math.floor(lib.config.wujinmoshiDamage/3)));
						};
					});
					wujinmoshiDamageAdd.style.left='150px';
					wujinmoshiDamageAdd.style.top='40px';
					wujinmoshiDamageAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDamageAdd);
					wujinmoshiDamageAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=(5+Math.floor(lib.config.wujinmoshiDamage/3))){
							wujinmoshiDamageAdd.show();
						}else{
							wujinmoshiDamageAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHp=ui.create.div();
					wujinmoshiMaxHp.style.left='0px';
					wujinmoshiMaxHp.style.top='60px';
					this.appendChild(wujinmoshiMaxHp);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHp==undefined){
							wujinmoshiMaxHp.innerHTML='体力上限加成：0';
						}else{
							wujinmoshiMaxHp.innerHTML='体力上限加成：'+lib.config.wujinmoshiMaxHp;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHp.hide();

					
					var wujinmoshiMaxHpAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点体力上限?')){
							game.saveConfig('wujinmoshiMaxHp',lib.config.wujinmoshiMaxHp+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiMaxHpAdd.style.left='150px';
					wujinmoshiMaxHpAdd.style.top='60px';
					wujinmoshiMaxHpAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHpAdd);
					wujinmoshiMaxHpAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiMaxHpAdd.show();
						}else{
							wujinmoshiMaxHpAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHandCard=ui.create.div();
					wujinmoshiMaxHandCard.style.left='0px';
					wujinmoshiMaxHandCard.style.top='80px';
					this.appendChild(wujinmoshiMaxHandCard);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHandCard==undefined){
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：0';
						}else{
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：'+lib.config.wujinmoshiMaxHandCard;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCard.hide();

					
					var wujinmoshiMaxHandCardAdd=ui.create.div(function(){
						if(confirm('消耗1点点数来增加一点手牌上限?')){
							game.saveConfig('wujinmoshiMaxHandCard',lib.config.wujinmoshiMaxHandCard+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-1);
						};
					});
					wujinmoshiMaxHandCardAdd.style.left='150px';
					wujinmoshiMaxHandCardAdd.style.top='80px';
					wujinmoshiMaxHandCardAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHandCardAdd);
					wujinmoshiMaxHandCardAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=1&&lib.config.wujinmoshiP!=undefined){
							wujinmoshiMaxHandCardAdd.show();
						}else{
							wujinmoshiMaxHandCardAdd.hide();
						};
					},100);

					
					var wujinmoshiDraw=ui.create.div();
					wujinmoshiDraw.style.left='0px';
					wujinmoshiDraw.style.top='100px';
					this.appendChild(wujinmoshiDraw);
					setInterval(function(){
						if(lib.config.wujinmoshiDraw==undefined){
							wujinmoshiDraw.innerHTML='摸牌数加成：0';
						}else{
							wujinmoshiDraw.innerHTML='摸牌数加成：'+lib.config.wujinmoshiDraw;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDraw.hide();

					
					var wujinmoshiDrawAdd=ui.create.div(function(){
						if(confirm('消耗5点点数来增加一点摸牌数?')){
							game.saveConfig('wujinmoshiDraw',lib.config.wujinmoshiDraw+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-5);
						};
					});
					wujinmoshiDrawAdd.style.left='150px';
					wujinmoshiDrawAdd.style.top='100px';
					wujinmoshiDrawAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDrawAdd);
					wujinmoshiDrawAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=5&&lib.config.wujinmoshiDraw<3){
							wujinmoshiDrawAdd.show();
						}else{
							wujinmoshiDrawAdd.hide();
						};
					},100);

					
					var wujinmoshiRecover=ui.create.div();
					wujinmoshiRecover.style.left='0px';
					wujinmoshiRecover.style.top='120px';
					this.appendChild(wujinmoshiRecover);
					setInterval(function(){
						if(lib.config.wujinmoshiRecover==undefined){
							wujinmoshiRecover.innerHTML='恢复量加成：0';
						}else{
							wujinmoshiRecover.innerHTML='恢复量加成：'+lib.config.wujinmoshiRecover;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecover.hide();

					
					var wujinmoshiRecoverAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点恢复量?')){
							game.saveConfig('wujinmoshiRecover',lib.config.wujinmoshiRecover+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiRecoverAdd.style.left='150px';
					wujinmoshiRecoverAdd.style.top='120px';
					wujinmoshiRecoverAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiRecoverAdd);
					wujinmoshiRecoverAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiRecoverAdd.show();
						}else{
							wujinmoshiRecoverAdd.hide();
						};
					},100);

					
					var wujinmoshiESkill=ui.create.div();
					wujinmoshiESkill.style.left='0px';
					wujinmoshiESkill.style.top='140px';
					this.appendChild(wujinmoshiESkill);
					setInterval(function(){
						if(lib.config.wujinmoshiESkill==undefined){
							wujinmoshiESkill.innerHTML='额外技能：未获得（只能拥有一个）';
						}else{
							wujinmoshiESkill.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkill]+'（只能拥有一个）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkill.hide();

					
					var wujinmoshiDSDJC=ui.create.div();
					wujinmoshiDSDJC.style.left='0px';
					wujinmoshiDSDJC.style.top='180px';
					wujinmoshiDSDJC.innerHTML='对手的加成：'
					this.appendChild(wujinmoshiDSDJC);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDSDJC.hide();

					
					var wujinmoshiDamageE=ui.create.div();
					wujinmoshiDamageE.style.left='0px';
					wujinmoshiDamageE.style.top='200px';
					this.appendChild(wujinmoshiDamageE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiDamageE.innerHTML='攻击力加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI)+'（每15轮+1）';
						}else{
							wujinmoshiDamageE.innerHTML='攻击力加成：0（每15轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamageE.hide();

					
					var wujinmoshiMaxHpE=ui.create.div();
					wujinmoshiMaxHpE.style.left='0px';
					wujinmoshiMaxHpE.style.top='220px';
					this.appendChild(wujinmoshiMaxHpE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHpE.innerHTML='体力上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)+'（每8轮+1）';
						}else{
							wujinmoshiMaxHpE.innerHTML='体力上限加成：0（每8轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHpE.hide();

					
					var wujinmoshiMaxHandCardE=ui.create.div();
					wujinmoshiMaxHandCardE.style.left='0px';
					wujinmoshiMaxHandCardE.style.top='240px';
					this.appendChild(wujinmoshiMaxHandCardE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI)+'（每5轮+1）';
						}else{
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：0（每5轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCardE.hide();

					
					var wujinmoshiDrawE=ui.create.div();
					wujinmoshiDrawE.style.left='0px';
					wujinmoshiDrawE.style.top='260px';
					this.appendChild(wujinmoshiDrawE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
								wujinmoshiDrawE.innerHTML='摸牌数加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI)+'（每15轮+1，上限+3）';
							}else{
								wujinmoshiDrawE.innerHTML='摸牌数加成：3（每15轮+1，上限+3）';
							};
						}else{
							wujinmoshiDrawE.innerHTML='摸牌数加成：0（每15轮+1，上限+5）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDrawE.hide();

					
					var wujinmoshiRecoverE=ui.create.div();
					wujinmoshiRecoverE.style.left='0px';
					wujinmoshiRecoverE.style.top='280px';
					this.appendChild(wujinmoshiRecoverE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiRecoverE.innerHTML='回复量加成：'+(Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI)+'（每10轮+1）';
						}else{
							wujinmoshiRecoverE.innerHTML='回复量加成：0（每10轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecoverE.hide();

					
					var wujinmoshiESkillE=ui.create.div();
					wujinmoshiESkillE.style.left='0px';
					wujinmoshiESkillE.style.top='300px';
					this.appendChild(wujinmoshiESkillE);
					setInterval(function(){
						if(lib.config.wujinmoshiESkillE==undefined){
							wujinmoshiESkillE.innerHTML='额外技能：未获得';
						}else{
							wujinmoshiESkillE.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkillE];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkillE.hide();
					

					var wujinmoshiRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
						if(confirm('是否重置?')){
							game.wujinmoshiRE();
						};
					});
					wujinmoshiRE.style.left='500px';
					wujinmoshiRE.style.top='0px';
					this.appendChild(wujinmoshiRE);
					
					
					var wujinmoshiBAGQX1=this;
					var wujinmoshiBAG=ui.create.div('.menubutton.large','<span style="cursor:pointer;">背包</span>',function(){
						wujinmoshiBAG.delete();
						var wujinmoshiBAGQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							wujinmoshiBAGQX.delete();
							wujinmoshiBAGJM.delete();
							wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
						});
						wujinmoshiBAGQX.style.left='500px';
						wujinmoshiBAGQX.style.top='50px';
						wujinmoshiBAGQX1.appendChild(wujinmoshiBAGQX);
						wujinmoshiBAGJM=ui.create.dialog('hidden');
						wujinmoshiBAGJM.style.height='calc(50%)';
						wujinmoshiBAGJM.style.width='calc(50%)';
						wujinmoshiBAGJM.style.left='calc(25%)';
						wujinmoshiBAGJM.style.top='calc(25%)';
						wujinmoshiBAGJM.classList.add('popped');
						wujinmoshiBAGJM.classList.add('static');
						
						
						var wujinmoshiHJK=ui.create.div('','<span style="cursor:pointer;">换将卡<br>'+lib.config.wujinmoshiHJK+'张</span>',function(){
							if(lib.config.wujinmoshiHJK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用换将卡?')){
										game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK-1);
										game.WJchangeCharacter();
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiHJK>0) wujinmoshiBAGJM.add(wujinmoshiHJK);
						setInterval(function(){
							if(lib.config.wujinmoshiHJK<=0) wujinmoshiHJK.delete();
						},1000);
						
						
						var wujinmoshiXRK=ui.create.div('','<span style="cursor:pointer;">削弱卡<br>'+lib.config.wujinmoshiXRK+'张</span>',function(){
							if(lib.config.wujinmoshiXRK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用削弱卡?')){
										game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK-1);
										game.saveConfig('wujinmoshiDamageI',lib.config.wujinmoshiDamageI+1);
										game.saveConfig('wujinmoshiMaxHpI',lib.config.wujinmoshiMaxHpI+1);
										game.saveConfig('wujinmoshiMaxHandCardI',lib.config.wujinmoshiMaxHandCardI+1);
										game.saveConfig('wujinmoshiDrawI',lib.config.wujinmoshiDrawI+1);
										game.saveConfig('wujinmoshiRecoverI',lib.config.wujinmoshiRecoverI+1);
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiXRK>0) wujinmoshiBAGJM.add(wujinmoshiXRK);
						setInterval(function(){
							if(lib.config.wujinmoshiXRK<=0) wujinmoshiXRK.delete();
						},1000);
						
						
						ui.window.appendChild(wujinmoshiBAGJM);
					});
					wujinmoshiBAG.style.left='500px';
					wujinmoshiBAG.style.top='50px';
					this.appendChild(wujinmoshiBAG);
				
				
					var wujinmoshiJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
							var wujinmoshiJS1=ui.create.dialog('hidden');
							wujinmoshiJS1.style.height='calc(100%)';
							wujinmoshiJS1.style.width='calc(100%)';
							wujinmoshiJS1.style.left='0px';
							wujinmoshiJS1.style.top='0px';
							wujinmoshiJS1.classList.add('popped');
							wujinmoshiJS1.classList.add('static');
							var wujinmoshiJSQX=ui.create.div('.menubutton.round','×',function(){
								wujinmoshiJS1.delete();
							});
							wujinmoshiJSQX.style.left='50px';
							wujinmoshiJSQX.style.top='50px';
	
							var wujinmoshiJS2=ui.create.div('','');
							wujinmoshiJS2.setBackgroundImage('extension/凤凰模式/wujinmoshiJS.png');
							wujinmoshiJS2.style.height='400px';
							wujinmoshiJS2.style.width='600px';
							wujinmoshiJS2.style.left='50px';
							wujinmoshiJS2.style.top='50px';
						
							wujinmoshiJS1.add(wujinmoshiJS2);
							wujinmoshiJS1.add(wujinmoshiJSQX);
							ui.window.appendChild(wujinmoshiJS1);
					});
					wujinmoshiJS.style.left='500px';
					wujinmoshiJS.style.top='100px';
					this.appendChild(wujinmoshiJS);
					
					
					game.saveConfig('wujinmoshiYZR',true);
				};
        	},
            content:{
	            gameStart:function(){
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					game.me.next.init(characterAi.randomGet());
					if(lib.config.wujinmoshiMaxHp>0){
						game.me.gainMaxHp(lib.config.wujinmoshiMaxHp);
						game.me.recover(lib.config.wujinmoshiMaxHp);
					};
					if(-(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)<game.me.next.maxHp){
						game.me.next.gainMaxHp(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
						game.me.next.recover(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
					}else{
						game.me.next.maxHp=0;
						game.me.next.update();
						game.me.next.die();
					};
					if(lib.config.wujinmoshiESkillE!=undefined) game.me.next.addSkill(lib.config.wujinmoshiESkillE);
					game.me.storage.wujinmoshiRE=lib.character[game.me.next.name][3];
					if(lib.config.wujinmoshiESkill!=undefined) game.me.addSkill(lib.config.wujinmoshiESkill);
					game.addPlayer=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                if(lib.config.wujinmoshiP!=undefined) return [lib.config.wujinmoshiP];
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					return [characterAi.randomGet()];
                },
                chooseCharacterAi:function(){
                    return ;
                },
			},
            init:function(){
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
				game.saveConfig('player_number','2','identity');
				lib.skill._wujinmoshiRE={
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					filter:function (event,player){
						return lib.config.wujinmoshiP!=undefined;
					},
					content:function(){
						if(player==game.me){
							alert('进行无尽模式的武将死亡，重置游戏');
							game.wujinmoshiRE();
						}else{
							if(Math.random()<=0.05){
								var DJlist=['wujinmoshiHJK','wujinmoshiXRK'];
								var DJ=DJlist.randomGet();
								game.saveConfig(DJ,lib.config[DJ]+1);
								if(DJ=='wujinmoshiHJK') game.say1('你获得一张换将卡');
								if(DJ=='wujinmoshiXRK') game.say1('你获得一张削弱卡');
							};
							if(Math.random()<=0.05){
								game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK+1);
								game.say2('你获得一张换将卡');
							};
							if(Math.random()<=0.01){
								game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK+1);
								game.say2('你获得一张削弱卡');
							};
							game.saveConfig('wujinmoshiESkillE',undefined);
							game.saveConfig('wujinmoshiDXB',lib.config.wujinmoshiDXB+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS+1);
							game.me.useSkill('wujinmoshiRE1');
						};
					},
				};
				lib.skill.wujinmoshiRE1={
					content:function (){
						'step 0'
						game.me.chooseControl('确定','取消',ui.create.dialog('是否从对方身上获得额外技能？','hidden'));
						'step 1'
						if(result.control=='确定') game.me.useSkill('wujinmoshiRE2');
					},
				};
				lib.skill.wujinmoshiRE2={
                	createDialog:function (player,target,onlylist){
						var list=target.storage.wujinmoshiRE;
							if(onlylist) return list;
						var dialog=ui.create.dialog('选择一项作为你的额外技能');
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
									}else{
									translation=translation.slice(0,2);
								}
								var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
								item.firstChild.addEventListener('click',clickItem);
								item.firstChild.link=list[i];
							};
						};
						dialog.add(ui.create.div('placeholder'));
						return dialog;
                	},
                	content:function (){
                    	"step 0"
                    	event.dialog=lib.skill.wujinmoshiRE2.createDialog(target,player);
                    	event.switchToAuto=function(){
                        	event._result=event.skillai(event.list);
                        	game.resume();
                    	};
                    	_status.imchoosing=true;
                    	game.pause();
                    	"step 1"
                    	_status.imchoosing=false;
                    	if(event.dialog){
                        	event.dialog.close();
                    	};
						game.saveConfig('wujinmoshiESkill',result);
                	},
				};
				lib.translate.wujinmoshiRE1='获取技能';
				lib.translate.wujinmoshiRE2='获取技能';
				lib.skill._wujinmoshiDamage={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDamage>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDamage;
					},
				};
				lib.skill._wujinmoshiDamageE={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI;
					},
				};
            	lib.skill._wujinmoshiMaxHandCard={
					mod:{
    					maxHandcard:function (player,num){
            				if(player==game.me&&lib.config.wujinmoshiMaxHandCard>0) return num+lib.config.wujinmoshiMaxHandCard;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiMaxHandCardE={
					mod:{
    					maxHandcard:function (player,num){
            				if(player!=game.me) return num+Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiDraw={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDraw>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDraw;
					},
				};
            	lib.skill._wujinmoshiDrawE={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
							trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI;
						}else{
							trigger.num+=3;
						};
					},
				};
            	lib.skill._wujinmoshiRecover={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiRecover>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiRecover;
					},
				};
            	lib.skill._wujinmoshiRecoverE={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI;
					},
				};
				if(lib.config.wujinmoshiP==undefined){
					alert('未选择进行无尽模式的武将，重新载入游戏');
					game.reload();
				};
				if(wujinmoshiBAGJM) wujinmoshiBAGJM.delete();
			},
};
};
};
			var jilueduijueCharacter1=[];
			for(i in lib.character){
				if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) jilueduijueCharacter1.push(i);
			};
			var jilueduijueCharacter=jilueduijueCharacter1.randomGets(25);
		if(lib.config.jilueduijue1==undefined) game.saveConfig('jilueduijue1',jilueduijueCharacter[0]);
		if(lib.config.jilueduijue2==undefined) game.saveConfig('jilueduijue2',jilueduijueCharacter[1]);
		if(lib.config.jilueduijue3==undefined) game.saveConfig('jilueduijue3',jilueduijueCharacter[2]);
		if(lib.config.jilueduijue4==undefined) game.saveConfig('jilueduijue4',jilueduijueCharacter[3]);
		if(lib.config.jilueduijue5==undefined) game.saveConfig('jilueduijue5',jilueduijueCharacter[4]);
		if(lib.config.jilueduijue6==undefined) game.saveConfig('jilueduijue6',jilueduijueCharacter[5]);
		if(lib.config.jilueduijue7==undefined) game.saveConfig('jilueduijue7',jilueduijueCharacter[6]);
		if(lib.config.jilueduijue8==undefined) game.saveConfig('jilueduijue8',jilueduijueCharacter[7]);
		if(lib.config.jilueduijue9==undefined) game.saveConfig('jilueduijue9',jilueduijueCharacter[8]);
		if(lib.config.jilueduijue10==undefined) game.saveConfig('jilueduijue10',jilueduijueCharacter[9]);
		if(lib.config.jilueduijue11==undefined) game.saveConfig('jilueduijue11',jilueduijueCharacter[10]);
		if(lib.config.jilueduijue12==undefined) game.saveConfig('jilueduijue12',jilueduijueCharacter[11]);
		if(lib.config.jilueduijue13==undefined) game.saveConfig('jilueduijue13',jilueduijueCharacter[12]);
		if(lib.config.jilueduijue14==undefined) game.saveConfig('jilueduijue14',jilueduijueCharacter[13]);
		if(lib.config.jilueduijue15==undefined) game.saveConfig('jilueduijue15',jilueduijueCharacter[14]);
		if(lib.config.jilueduijue16==undefined) game.saveConfig('jilueduijue16',jilueduijueCharacter[15]);
		if(lib.config.jilueduijue17==undefined) game.saveConfig('jilueduijue17',jilueduijueCharacter[16]);
		if(lib.config.jilueduijue18==undefined) game.saveConfig('jilueduijue18',jilueduijueCharacter[17]);
		if(lib.config.jilueduijue19==undefined) game.saveConfig('jilueduijue19',jilueduijueCharacter[18]);
		if(lib.config.jilueduijue20==undefined) game.saveConfig('jilueduijue20',jilueduijueCharacter[19]);
		if(lib.config.jilueduijue21==undefined) game.saveConfig('jilueduijue21',jilueduijueCharacter[20]);
		if(lib.config.jilueduijue22==undefined) game.saveConfig('jilueduijue22',jilueduijueCharacter[21]);
		if(lib.config.jilueduijue23==undefined) game.saveConfig('jilueduijue23',jilueduijueCharacter[22]);
		if(lib.config.jilueduijue24==undefined) game.saveConfig('jilueduijue24',jilueduijueCharacter[23]);
		if(lib.config.jilueduijue25==undefined) game.saveConfig('jilueduijue25',jilueduijueCharacter[24]);
		if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayerA==undefined){
			game.saveConfig('gameMeHasPlayer1',lib.config.jilueduijue1);
			game.saveConfig('gameMeHasPlayerHp1',lib.character[lib.config.jilueduijue1][2]);
			game.saveConfig('gameMeHasPlayerA',true);
		};
		if(lib.config.jilueduijueDXG==undefined) game.saveConfig('jilueduijueDXG',1);
		game.saveConfig('jilueduijueYZR',undefined);
		if(lib.config.jilueduijueND==undefined) game.saveConfig('jilueduijueND','medium');
		game.saveConfig('bingjingliangzuYZR',undefined);
		if(lib.config.jilueduijueEasy==undefined) game.saveConfig('jilueduijueEasy',0);
		if(lib.config.jilueduijuemedium==undefined) game.saveConfig('jilueduijuemedium',0);
		if(lib.config.jilueduijuehard==undefined) game.saveConfig('jilueduijuehard',0);

	if(config.jilueduijue){
	game.jilueduijueRE=function(){
						game.saveConfig('jilueduijue1',undefined);
						game.saveConfig('jilueduijue2',undefined);
						game.saveConfig('jilueduijue3',undefined);
						game.saveConfig('jilueduijue4',undefined);
						game.saveConfig('jilueduijue5',undefined);
						game.saveConfig('jilueduijue6',undefined);
						game.saveConfig('jilueduijue7',undefined);
						game.saveConfig('jilueduijue8',undefined);
						game.saveConfig('jilueduijue9',undefined);
						game.saveConfig('jilueduijue10',undefined);
						game.saveConfig('jilueduijue11',undefined);
						game.saveConfig('jilueduijue12',undefined);
						game.saveConfig('jilueduijue13',undefined);
						game.saveConfig('jilueduijue14',undefined);
						game.saveConfig('jilueduijue15',undefined);
						game.saveConfig('jilueduijue16',undefined);
						game.saveConfig('jilueduijue17',undefined);
						game.saveConfig('jilueduijue18',undefined);
						game.saveConfig('jilueduijue19',undefined);
						game.saveConfig('jilueduijue20',undefined);
						game.saveConfig('jilueduijue21',undefined);
						game.saveConfig('jilueduijue22',undefined);
						game.saveConfig('jilueduijue23',undefined);
						game.saveConfig('jilueduijue24',undefined);
						game.saveConfig('jilueduijue25',undefined);
						
						
						game.saveConfig('jilueduijueE',undefined);
						game.saveConfig('jilueduijueE1',undefined);
						
						
						game.saveConfig('jilueduijue2a',undefined);
						game.saveConfig('jilueduijue3a',undefined);
						game.saveConfig('jilueduijue4a',undefined);
						game.saveConfig('jilueduijue5a',undefined);
						game.saveConfig('jilueduijue6a',undefined);
						game.saveConfig('jilueduijue7a',undefined);
						game.saveConfig('jilueduijue8a',undefined);
						game.saveConfig('jilueduijue9a',undefined);
						game.saveConfig('jilueduijue10a',undefined);
						game.saveConfig('jilueduijue11a',undefined);
						game.saveConfig('jilueduijue12a',undefined);
						game.saveConfig('jilueduijue13a',undefined);
						game.saveConfig('jilueduijue14a',undefined);
						game.saveConfig('jilueduijue15a',undefined);
						game.saveConfig('jilueduijue16a',undefined);
						game.saveConfig('jilueduijue17a',undefined);
						game.saveConfig('jilueduijue18a',undefined);
						game.saveConfig('jilueduijue19a',undefined);
						game.saveConfig('jilueduijue20a',undefined);
						game.saveConfig('jilueduijue21a',undefined);
						game.saveConfig('jilueduijue22a',undefined);
						game.saveConfig('jilueduijue23a',undefined);
						game.saveConfig('jilueduijue24a',undefined);
						game.saveConfig('jilueduijue25a',undefined);
						
						
						game.saveConfig('gameMeHasPlayer1',undefined);
						game.saveConfig('gameMeHasPlayer2',undefined);
						game.saveConfig('gameMeHasPlayer3',undefined);
						game.saveConfig('gameMeHasPlayer4',undefined);
						game.saveConfig('gameMeHasPlayer5',undefined);
						game.saveConfig('gameMeHasPlayerA',undefined);
						
						
						game.saveConfig('gameMeHasPlayerHp1',undefined);
						game.saveConfig('gameMeHasPlayerHp2',undefined);
						game.saveConfig('gameMeHasPlayerHp3',undefined);
						game.saveConfig('gameMeHasPlayerHp4',undefined);
						game.saveConfig('gameMeHasPlayerHp5',undefined);
						
						
						game.saveConfig('jilueduijueDXG',undefined);
						
						
						game.reload();
					};
	if ( lib.brawl ) {
lib.brawl.jilueduijue = {
            name:'极略对决',
	        mode:'identity',
            intro:'',
            showcase:function(init){
//				window.resizeTo(1000, 650);
//				window.onresize=function(){
//					window.resizeTo(1000, 650);
//				};
				this.style.width='575px';
				if(lib.config.jilueduijueYZR!=true){
				var jilueduijueSM=ui.create.div('');
				if(lib.device){
					jilueduijueSM.innerHTML='单击选择挑战武将，点击取消或确定后弹出武将资料';
				}else{
					jilueduijueSM.innerHTML='单击弹出武将资料，双击选择挑战武将';
				};
				jilueduijueSM.style.left='100px';
				jilueduijueSM.style.top='0px';
				this.appendChild(jilueduijueSM);
				

				var jilueduijueRENDS=ui.create.div('');
				if(lib.config.jilueduijueE==undefined){
					jilueduijueRENDS.innerHTML='未选择对手';
				}else{
					if(lib.config.jilueduijueE1==undefined){
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
					}else{
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
					};
				};
				jilueduijueRENDS.style.left='0px';
				jilueduijueRENDS.style.top='20px';
				this.appendChild(jilueduijueRENDS);
				setInterval(function(){
					if(lib.config.jilueduijueE==undefined){
						jilueduijueRENDS.innerHTML='未选择对手';
					}else{
						if(lib.config.jilueduijueE1==undefined){
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
						}else{
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
						};
					};
				},100);
				
				
				var jilueduijueDXG=ui.create.div('');
				if(lib.config.jilueduijueDXG<=5){
					jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
				}else{
					jilueduijueDXG.innerHTML='已通关'
				};
				jilueduijueDXG.style.left='0px';
				jilueduijueDXG.style.top='0px';
				this.appendChild(jilueduijueDXG);
				setInterval(function(){
					if(lib.config.jilueduijueDXG<=5){
						jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
					}else{
						jilueduijueDXG.innerHTML='已通关'
					};
				},100);
				
				
				var jilueduijuePlayer=ui.create.div('');
				jilueduijuePlayer.innerHTML='你的阵容：';
				jilueduijuePlayer.style.left='0px';
				jilueduijuePlayer.style.top='40px';
				this.appendChild(jilueduijuePlayer);
				
				
				var jilueduijuePlayer1=ui.create.div('');
				if(lib.config.gameMeHasPlayer1!=undefined){
					jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';
				}else{
					jilueduijuePlayer1.innerHTML='未拥有'
				};
				jilueduijuePlayer1.style.left='0px';
				jilueduijuePlayer1.style.top='60px';
				this.appendChild(jilueduijuePlayer1);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer1!=undefined){
						jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';;
					}else{
					jilueduijuePlayer1.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer2=ui.create.div('');
				if(lib.config.gameMeHasPlayer2!=undefined){
					jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
				}else{
					jilueduijuePlayer2.innerHTML='未拥有'
				};
				jilueduijuePlayer2.style.left='0px';
				jilueduijuePlayer2.style.top='80px';
				this.appendChild(jilueduijuePlayer2);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer2!=undefined){
						jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
					}else{
					jilueduijuePlayer2.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer3=ui.create.div('');
				if(lib.config.gameMeHasPlayer3!=undefined){
					jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
				}else{
					jilueduijuePlayer3.innerHTML='未拥有'
				};
				jilueduijuePlayer3.style.left='0px';
				jilueduijuePlayer3.style.top='100px';
				this.appendChild(jilueduijuePlayer3);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer3!=undefined){
						jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
					}else{
					jilueduijuePlayer3.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer4=ui.create.div('');
				if(lib.config.gameMeHasPlayer4!=undefined){
					jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
				}else{
					jilueduijuePlayer4.innerHTML='未拥有'
				};
				jilueduijuePlayer4.style.left='0px';
				jilueduijuePlayer4.style.top='120px';
				this.appendChild(jilueduijuePlayer4);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer4!=undefined){
						jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
					}else{
					jilueduijuePlayer4.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer5=ui.create.div('');
				if(lib.config.gameMeHasPlayer5!=undefined){
					jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
				}else{
					jilueduijuePlayer5.innerHTML='未拥有'
				};
				jilueduijuePlayer5.style.left='0px';
				jilueduijuePlayer5.style.top='140px';
				this.appendChild(jilueduijuePlayer5);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer5!=undefined){
						jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
					}else{
					jilueduijuePlayer5.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijueRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
					if(confirm('是否重置?')){
						game.jilueduijueRE();
					};
				});
				jilueduijueRE.style.left='500px';
				jilueduijueRE.style.top='0px';
				this.appendChild(jilueduijueRE);
				
				
				var jilueduijueJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
						var jilueduijueJS1=ui.create.dialog('hidden');
						jilueduijueJS1.style.height='calc(100%)';
						jilueduijueJS1.style.width='calc(100%)';
						jilueduijueJS1.style.left='0px';
						jilueduijueJS1.style.top='0px';
						jilueduijueJS1.classList.add('popped');
						jilueduijueJS1.classList.add('static');
						var jilueduijueQX=ui.create.div('.menubutton.round','×',function(){
							jilueduijueJS1.delete();
						});
						jilueduijueQX.style.left='50px';
						jilueduijueQX.style.top='50px';

						var jilueduijueJS2=ui.create.div('','');
						jilueduijueJS2.setBackgroundImage('extension/凤凰模式/jilueduijueJS.png');
						jilueduijueJS2.style.height='400px';
						jilueduijueJS2.style.width='600px';
						jilueduijueJS2.style.left='50px';
						jilueduijueJS2.style.top='50px';
						
						jilueduijueJS1.add(jilueduijueJS2);
						jilueduijueJS1.add(jilueduijueQX);
						ui.window.appendChild(jilueduijueJS1);
				});
				jilueduijueJS.style.left='500px';
				jilueduijueJS.style.top='50px';
				this.appendChild(jilueduijueJS);
				

				var jilueduijueNDA=ui.create.div('.menubutton.large','<span style="cursor:pointer;">难度</span>',function(){
					if(lib.config.jilueduijueDXG==1&&lib.config.jilueduijueE==undefined){
						if(lib.config.jilueduijueND=='hard'){
							game.saveConfig('jilueduijueND','easy');
							game.say1('设置难度为简单');
						}else if(lib.config.jilueduijueND=='medium'){
							game.saveConfig('jilueduijueND','hard');
							game.say1('设置难度为困难');
						}else if(lib.config.jilueduijueND=='easy'){
							game.saveConfig('jilueduijueND','medium');
							game.say1('设置难度为普通');
						};
					}else{
						alert('对决已经开始，无法设置难度');
					};
				});
				jilueduijueNDA.style.left='500px';
				jilueduijueNDA.style.top='100px';
				this.appendChild(jilueduijueNDA);
				
				
				
				var jilueduijueND=ui.create.div('.menubutton.large','  ');
				jilueduijueND.style.left='500px';
				jilueduijueND.style.top='150px';
				this.appendChild(jilueduijueND);
				setInterval(function(){
					if(lib.config.jilueduijueND=='easy'){
						jilueduijueND.innerHTML='简单';
						jilueduijueND.style.backgroundColor='#04FF00';
					};
					if(lib.config.jilueduijueND=='medium'){
						jilueduijueND.innerHTML='普通';
						jilueduijueND.style.backgroundColor='#FFFB00';
					};
					if(lib.config.jilueduijueND=='hard'){
						jilueduijueND.innerHTML='困难';
						jilueduijueND.style.backgroundColor='red';
					};
				},100);
					
					var jilueduijueJL1=this;
					var jilueduijueJL=ui.create.div('.menubutton.large','<span style="cursor:pointer;">记录</span>',function(){
						jilueduijueJL.delete();
						var jilueduijueJLQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							jilueduijueJLQX.delete();
							jilueduijueJLJM.delete();
							jilueduijueJL1.appendChild(jilueduijueJL);
						});
						jilueduijueJLQX.style.left='500px';
						jilueduijueJLQX.style.top='200px';
						jilueduijueJL1.appendChild(jilueduijueJLQX);
						jilueduijueJLJM=ui.create.dialog('hidden');
						jilueduijueJLJM.style.height='calc(50%)';
						jilueduijueJLJM.style.width='calc(50%)';
						jilueduijueJLJM.style.left='calc(25%)';
						jilueduijueJLJM.style.top='calc(25%)';
						jilueduijueJLJM.classList.add('popped');
						jilueduijueJLJM.classList.add('static');
						var jilueduijueJLD=ui.create.div('','简单难度通关次数：'+lib.config.jilueduijueEasy+'次<br>普通难度通关次数：'+lib.config.jilueduijuemedium+'次<br>困难难度通关次数：'+lib.config.jilueduijuehard+'次');
						jilueduijueJLJM.add(jilueduijueJLD);
						
						ui.window.appendChild(jilueduijueJLJM);
					});
					jilueduijueJL.style.left='500px';
					jilueduijueJL.style.top='200px';
					this.appendChild(jilueduijueJL);
				
				
				var jilueduijue1=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue1,'');
				});
				jilueduijue1.style.height='55px';
				jilueduijue1.style.width='55px';
				jilueduijue1.style.left='0px';
				jilueduijue1.style.top='155px';
				jilueduijue1.setBackground(lib.config.jilueduijue1,'character');
				this.appendChild(jilueduijue1);
				

				var jilueduijue2=ui.create.div('.card.fullskin');
				jilueduijue2.style.height='55px';
				jilueduijue2.style.width='55px';
				jilueduijue2.style.left='0px';
				jilueduijue2.style.top='122.5px';
				jilueduijue2.setBackground(lib.config.jilueduijue2,'character');
				ondblclickjilueduijue2=false;
				jilueduijue2.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue2!=1&&ondblclickjilueduijue2!=2){
							ui.click.charactercard(lib.config.jilueduijue2,'');
						}else{
							if(ondblclickjilueduijue2==2) ondblclickjilueduijue2=false;
							if(ondblclickjilueduijue2==1) ondblclickjilueduijue2=2;
						};
					},500);
				};
				jilueduijue2.ondblclick=function(){
					ondblclickjilueduijue2=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue2);


				var jilueduijue3=ui.create.div('.card.fullskin');
				jilueduijue3.style.height='55px';
				jilueduijue3.style.width='55px';
				jilueduijue3.style.left='-62.5px';
				jilueduijue3.style.top='187.5px';
				jilueduijue3.setBackground(lib.config.jilueduijue3,'character');
				ondblclickjilueduijue3=false;
				jilueduijue3.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue3!=1&&ondblclickjilueduijue3!=2){
							ui.click.charactercard(lib.config.jilueduijue3,'');
						}else{
							if(ondblclickjilueduijue3==2) ondblclickjilueduijue3=false;
							if(ondblclickjilueduijue3==1) ondblclickjilueduijue3=2;
						};
					},500);
				};
				jilueduijue3.ondblclick=function(){
					ondblclickjilueduijue3=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue3);

				
				var jilueduijue4=ui.create.div('.card.fullskin');
				jilueduijue4.style.height='55px';
				jilueduijue4.style.width='55px';
				jilueduijue4.style.left='-62.5px';
				jilueduijue4.style.top='90px';
				jilueduijue4.setBackground(lib.config.jilueduijue4,'character');
				ondblclickjilueduijue4=false;
				jilueduijue4.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue4!=1&&ondblclickjilueduijue4!=2){
							ui.click.charactercard(lib.config.jilueduijue4,'');
						}else{
							if(ondblclickjilueduijue4==2) ondblclickjilueduijue4=false;
							if(ondblclickjilueduijue4==1) ondblclickjilueduijue4=2;
						};
					},500);
				};
				jilueduijue4.ondblclick=function(){
					ondblclickjilueduijue4=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue4);


				var jilueduijue5=ui.create.div('.card.fullskin');
				jilueduijue5.style.height='55px';
				jilueduijue5.style.width='55px';
				jilueduijue5.style.left='-125px';
				jilueduijue5.style.top='155px';
				jilueduijue5.setBackground(lib.config.jilueduijue5,'character');
				ondblclickjilueduijue5=false;
				jilueduijue5.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue5!=1&&ondblclickjilueduijue5!=2){
							ui.click.charactercard(lib.config.jilueduijue5,'');
						}else{
							if(ondblclickjilueduijue5==2) ondblclickjilueduijue5=false;
							if(ondblclickjilueduijue5==1) ondblclickjilueduijue5=2;
						};
					},500);
				};
				jilueduijue5.ondblclick=function(){
					ondblclickjilueduijue5=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue5);


				var jilueduijue6=ui.create.div('.card.fullskin');
				jilueduijue6.style.height='55px';
				jilueduijue6.style.width='55px';
				jilueduijue6.style.left='-187.5px';
				jilueduijue6.style.top='220px';
				jilueduijue6.setBackground(lib.config.jilueduijue6,'character');
				ondblclickjilueduijue6=false;
				jilueduijue6.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue6!=1&&ondblclickjilueduijue6!=2){
							ui.click.charactercard(lib.config.jilueduijue6,'');
						}else{
							if(ondblclickjilueduijue6==2) ondblclickjilueduijue6=false;
							if(ondblclickjilueduijue6==1) ondblclickjilueduijue6=2;
						};
					},500);
				};
				jilueduijue6.ondblclick=function(){
					ondblclickjilueduijue6=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue6);


				var jilueduijue7=ui.create.div('.card.fullskin');
				jilueduijue7.style.height='55px';
				jilueduijue7.style.width='55px';
				jilueduijue7.style.left='-187px';
				jilueduijue7.style.top='57.5px';
				jilueduijue7.setBackground(lib.config.jilueduijue7,'character');
				ondblclickjilueduijue7=false;
				jilueduijue7.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue7!=1&&ondblclickjilueduijue7!=2){
							ui.click.charactercard(lib.config.jilueduijue7,'');
						}else{
							if(ondblclickjilueduijue7==2) ondblclickjilueduijue7=false;
							if(ondblclickjilueduijue7==1) ondblclickjilueduijue7=2;
						};
					},500);
				};
				jilueduijue7.ondblclick=function(){
					ondblclickjilueduijue7=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue7);


				var jilueduijue8=ui.create.div('.card.fullskin');
				jilueduijue8.style.height='55px';
				jilueduijue8.style.width='55px';
				jilueduijue8.style.left='-250px';
				jilueduijue8.style.top='122.5px';
				jilueduijue8.setBackground(lib.config.jilueduijue8,'character');
				ondblclickjilueduijue8=false;
				jilueduijue8.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue8!=1&&ondblclickjilueduijue8!=2){
							ui.click.charactercard(lib.config.jilueduijue8,'');
						}else{
							if(ondblclickjilueduijue8==2) ondblclickjilueduijue8=false;
							if(ondblclickjilueduijue8==1) ondblclickjilueduijue8=2;
						};
					},500);
				};
				jilueduijue8.ondblclick=function(){
					ondblclickjilueduijue8=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue8);


				var jilueduijue9=ui.create.div('.card.fullskin');
				jilueduijue9.style.height='55px';
				jilueduijue9.style.width='55px';
				jilueduijue9.style.left='-312.75px';
				jilueduijue9.style.top='187px';
				jilueduijue9.setBackground(lib.config.jilueduijue9,'character');
				ondblclickjilueduijue9=false;
				jilueduijue9.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue9!=1&&ondblclickjilueduijue9!=2){
							ui.click.charactercard(lib.config.jilueduijue9,'');
						}else{
							if(ondblclickjilueduijue9==2) ondblclickjilueduijue9=false;
							if(ondblclickjilueduijue9==1) ondblclickjilueduijue9=2;
						};
					},500);
				};
				jilueduijue9.ondblclick=function(){
					ondblclickjilueduijue9=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue9);


				var jilueduijue10=ui.create.div('.card.fullskin');
				jilueduijue10.style.height='55px';
				jilueduijue10.style.width='55px';
				jilueduijue10.style.left='191.5px';
				jilueduijue10.style.top='187px';
				jilueduijue10.setBackground(lib.config.jilueduijue10,'character');
				ondblclickjilueduijue10=false;
				jilueduijue10.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue10!=1&&ondblclickjilueduijue10!=2){
							ui.click.charactercard(lib.config.jilueduijue10,'');
						}else{
							if(ondblclickjilueduijue10==2) ondblclickjilueduijue10=false;
							if(ondblclickjilueduijue10==1) ondblclickjilueduijue10=2;
						};
					},500);
				};
				jilueduijue10.ondblclick=function(){
					ondblclickjilueduijue10=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue10);


				var jilueduijue11=ui.create.div('.card.fullskin');
				jilueduijue11.style.height='55px';
				jilueduijue11.style.width='55px';
				jilueduijue11.style.left='193.5px';
				jilueduijue11.style.top='-40.5px';
				jilueduijue11.setBackground(lib.config.jilueduijue11,'character');
				ondblclickjilueduijue11=false;
				jilueduijue11.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue11!=1&&ondblclickjilueduijue11!=2){
							ui.click.charactercard(lib.config.jilueduijue11,'');
						}else{
							if(ondblclickjilueduijue11==2) ondblclickjilueduijue11=false;
							if(ondblclickjilueduijue11==1) ondblclickjilueduijue11=2;
						};
					},500);
				};
				jilueduijue11.ondblclick=function(){
					ondblclickjilueduijue11=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue11);


				var jilueduijue12=ui.create.div('.card.fullskin');
				jilueduijue12.style.height='55px';
				jilueduijue12.style.width='55px';
				jilueduijue12.style.left='130px';
				jilueduijue12.style.top='24.5px';
				jilueduijue12.setBackground(lib.config.jilueduijue12,'character');
				ondblclickjilueduijue12=false;
				jilueduijue12.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue12!=1&&ondblclickjilueduijue12!=2){
							ui.click.charactercard(lib.config.jilueduijue12,'');
						}else{
							if(ondblclickjilueduijue12==2) ondblclickjilueduijue12=false;
							if(ondblclickjilueduijue12==1) ondblclickjilueduijue12=2;
						};
					},500);
				};
				jilueduijue12.ondblclick=function(){
					ondblclickjilueduijue12=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue12);


				var jilueduijue13=ui.create.div('.card.fullskin');
				jilueduijue13.style.height='55px';
				jilueduijue13.style.width='55px';
				jilueduijue13.style.left='67px';
				jilueduijue13.style.top='89.5px';
				jilueduijue13.setBackground(lib.config.jilueduijue13,'character');
				ondblclickjilueduijue13=false;
				jilueduijue13.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue13!=1&&ondblclickjilueduijue13!=2){
							ui.click.charactercard(lib.config.jilueduijue13,'');
						}else{
							if(ondblclickjilueduijue13==2) ondblclickjilueduijue13=false;
							if(ondblclickjilueduijue13==1) ondblclickjilueduijue13=2;
						};
					},500);
				};
				jilueduijue13.ondblclick=function(){
					ondblclickjilueduijue13=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue13);


				var jilueduijue14=ui.create.div('.card.fullskin');
				jilueduijue14.style.height='55px';
				jilueduijue14.style.width='55px';
				jilueduijue14.style.left='4.5px';
				jilueduijue14.style.top='154.5px';
				jilueduijue14.setBackground(lib.config.jilueduijue14,'character');
				ondblclickjilueduijue14=false;
				jilueduijue14.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue14!=1&&ondblclickjilueduijue14!=2){
							ui.click.charactercard(lib.config.jilueduijue14,'');
						}else{
							if(ondblclickjilueduijue14==2) ondblclickjilueduijue14=false;
							if(ondblclickjilueduijue14==1) ondblclickjilueduijue14=2;
						};
					},500);
				};
				jilueduijue14.ondblclick=function(){
					ondblclickjilueduijue14=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue14);


				var jilueduijue15=ui.create.div('.card.fullskin');
				jilueduijue15.style.height='55px';
				jilueduijue15.style.width='55px';
				jilueduijue15.style.left='-58.5px';
				jilueduijue15.style.top='219.5px';
				jilueduijue15.setBackground(lib.config.jilueduijue15,'character');
				ondblclickjilueduijue15=false;
				jilueduijue15.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue15!=1&&ondblclickjilueduijue15!=2){
							ui.click.charactercard(lib.config.jilueduijue15,'');
						}else{
							if(ondblclickjilueduijue15==2) ondblclickjilueduijue15=false;
							if(ondblclickjilueduijue15==1) ondblclickjilueduijue15=2;
						};
					},500);
				};
				jilueduijue15.ondblclick=function(){
					ondblclickjilueduijue15=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue15);


				var jilueduijue16=ui.create.div('.card.fullskin');
				jilueduijue16.style.height='55px';
				jilueduijue16.style.width='55px';
				jilueduijue16.style.left='-40px';
				jilueduijue16.style.top='-40px';
				jilueduijue16.setBackground(lib.config.jilueduijue16,'character');
				ondblclickjilueduijue16=false;
				jilueduijue16.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue16!=1&&ondblclickjilueduijue16!=2){
							ui.click.charactercard(lib.config.jilueduijue16,'');
						}else{
							if(ondblclickjilueduijue16==2) ondblclickjilueduijue16=false;
							if(ondblclickjilueduijue16==1) ondblclickjilueduijue16=2;
						};
					},500);
				};
				jilueduijue16.ondblclick=function(){
					ondblclickjilueduijue16=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue16);


				var jilueduijue17=ui.create.div('.card.fullskin');
				jilueduijue17.style.height='55px';
				jilueduijue17.style.width='55px';
				jilueduijue17.style.left='-102.5px';
				jilueduijue17.style.top='25px';
				jilueduijue17.setBackground(lib.config.jilueduijue17,'character');
				ondblclickjilueduijue17=false;
				jilueduijue17.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue17!=1&&ondblclickjilueduijue17!=2){
							ui.click.charactercard(lib.config.jilueduijue17,'');
						}else{
							if(ondblclickjilueduijue17==2) ondblclickjilueduijue17=false;
							if(ondblclickjilueduijue17==1) ondblclickjilueduijue17=2;
						};
					},500);
				};
				jilueduijue17.ondblclick=function(){
					ondblclickjilueduijue17=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue17);


				var jilueduijue18=ui.create.div('.card.fullskin');
				jilueduijue18.style.height='55px';
				jilueduijue18.style.width='55px';
				jilueduijue18.style.left='-165.5px';
				jilueduijue18.style.top='90px';
				jilueduijue18.setBackground(lib.config.jilueduijue18,'character');
				ondblclickjilueduijue18=false;
				jilueduijue18.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue18!=1&&ondblclickjilueduijue18!=2){
							ui.click.charactercard(lib.config.jilueduijue18,'');
						}else{
							if(ondblclickjilueduijue18==2) ondblclickjilueduijue18=false;
							if(ondblclickjilueduijue18==1) ondblclickjilueduijue18=2;
						};
					},500);
				};
				jilueduijue18.ondblclick=function(){
					ondblclickjilueduijue18=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue18);


				var jilueduijue19=ui.create.div('.card.fullskin');
				jilueduijue19.style.height='55px';
				jilueduijue19.style.width='55px';
				jilueduijue19.style.left='275px';
				jilueduijue19.style.top='89px';
				jilueduijue19.setBackground(lib.config.jilueduijue19,'character');
				ondblclickjilueduijue19=false;
				jilueduijue19.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue19!=1&&ondblclickjilueduijue19!=2){
							ui.click.charactercard(lib.config.jilueduijue19,'');
						}else{
							if(ondblclickjilueduijue19==2) ondblclickjilueduijue19=false;
							if(ondblclickjilueduijue19==1) ondblclickjilueduijue19=2;
						};
					},500);
				};
				jilueduijue19.ondblclick=function(){
					ondblclickjilueduijue19=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue19);


				var jilueduijue20=ui.create.div('.card.fullskin');
				jilueduijue20.style.height='55px';
				jilueduijue20.style.width='55px';
				jilueduijue20.style.left='212.5px';
				jilueduijue20.style.top='154px';
				jilueduijue20.setBackground(lib.config.jilueduijue20,'character');
				ondblclickjilueduijue20=false;
				jilueduijue20.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue20!=1&&ondblclickjilueduijue20!=2){
							ui.click.charactercard(lib.config.jilueduijue20,'');
						}else{
							if(ondblclickjilueduijue20==2) ondblclickjilueduijue20=false;
							if(ondblclickjilueduijue20==1) ondblclickjilueduijue20=2;
						};
					},500);
				};
				jilueduijue20.ondblclick=function(){
					ondblclickjilueduijue20=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue20);


				var jilueduijue21=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue21,'');
				});
				jilueduijue21.style.height='55px';
				jilueduijue21.style.width='55px';
				jilueduijue21.style.left='207.5px';
				jilueduijue21.style.top='-106px';
				jilueduijue21.setBackground(lib.config.jilueduijue21,'character');
				this.appendChild(jilueduijue21);


				var jilueduijue22=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue22,'');
				});
				jilueduijue22.style.height='55px';
				jilueduijue22.style.width='55px';
				jilueduijue22.style.left='146px';
				jilueduijue22.style.top='-41px';
				jilueduijue22.setBackground(lib.config.jilueduijue22,'character');
				this.appendChild(jilueduijue22);


				var jilueduijue23=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue23,'');
				});
				jilueduijue23.style.height='55px';
				jilueduijue23.style.width='55px';
				jilueduijue23.style.left='83px';
				jilueduijue23.style.top='24px';
				jilueduijue23.setBackground(lib.config.jilueduijue23,'character');
				this.appendChild(jilueduijue23);


				var jilueduijue24=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue24,'');
				});
				jilueduijue24.style.height='55px';
				jilueduijue24.style.width='55px';
				jilueduijue24.style.left='20px';
				jilueduijue24.style.top='89px';
				jilueduijue24.setBackground(lib.config.jilueduijue24,'character');
				this.appendChild(jilueduijue24);


				var jilueduijue25=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue25,'');
				});
				jilueduijue25.style.height='55px';
				jilueduijue25.style.width='55px';
				jilueduijue25.style.left='-43px';
				jilueduijue25.style.top='154px';
				jilueduijue25.setBackground(lib.config.jilueduijue25,'character');
				this.appendChild(jilueduijue25);
				
				
				if(lib.config.jilueduijue2a==true) jilueduijue2.hide();
				if(lib.config.jilueduijue3a==true) jilueduijue3.hide();
				if(lib.config.jilueduijue4a==true) jilueduijue4.hide();
				if(lib.config.jilueduijue5a==true) jilueduijue5.hide();
				if(lib.config.jilueduijue6a==true) jilueduijue6.hide();
				if(lib.config.jilueduijue7a==true) jilueduijue7.hide();
				if(lib.config.jilueduijue8a==true) jilueduijue8.hide();
				if(lib.config.jilueduijue9a==true) jilueduijue9.hide();
				if(lib.config.jilueduijue10a==true) jilueduijue10.hide();
				if(lib.config.jilueduijue11a==true) jilueduijue11.hide();
				if(lib.config.jilueduijue12a==true) jilueduijue12.hide();
				if(lib.config.jilueduijue13a==true) jilueduijue13.hide();
				if(lib.config.jilueduijue14a==true) jilueduijue14.hide();
				if(lib.config.jilueduijue15a==true) jilueduijue15.hide();
				if(lib.config.jilueduijue16a==true) jilueduijue16.hide();
				if(lib.config.jilueduijue17a==true) jilueduijue17.hide();
				if(lib.config.jilueduijue18a==true) jilueduijue18.hide();
				if(lib.config.jilueduijue19a==true) jilueduijue19.hide();
				if(lib.config.jilueduijue20a==true) jilueduijue20.hide();
				if(lib.config.jilueduijue21a==true) jilueduijue21.hide();
				if(lib.config.jilueduijue22a==true) jilueduijue22.hide();
				if(lib.config.jilueduijue23a==true) jilueduijue23.hide();
				if(lib.config.jilueduijue24a==true) jilueduijue24.hide();
				if(lib.config.jilueduijue25a==true) jilueduijue25.hide();
				game.saveConfig('jilueduijueYZR',true);
				};
			},
            content:{
	            gameStart:function(){
					if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
					if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
					if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
					if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
					if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
					game.me.update();
					game.me.next.init(lib.config.jilueduijueE);
					if(lib.config.jilueduijueDXG==5) game.me.previous.init(lib.config.jilueduijueE1);
					if(lib.config.jilueduijueND=='easy'){
						if(game.me!=game.zhu){
							for(var i=0;i<game.players.length;i++){
								game.players[i].draw(2);
							};
							game.me.insertPhase();
						};
						game.me.identity='zhu';
						game.me.next.identity='fan';
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='fan';
						game.zhu=game.me;
					}else{
						game.me.identity='fan';
						game.me.next.identity='zhu';
						game.zhu=game.me.next;
						if(game.me.next!=game.zhu){
							game.me.next.insertPhase();
						};
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='zhong';
					};
					if(lib.config.jilueduijueND=='hard'){
						var pl=game.addPlayer();
						pl.init(jilueduijueCharacter1.randomGet());
						if(lib.config.jilueduijueND=='easy'){
							pl.identity='fan';
							pl.setIdentity('fan');
							pl.node.identity.dataset.color=pl.identity;
						}else{
							pl.identity='zhong';
							pl.setIdentity('zhong');
							pl.node.identity.dataset.color=pl.identity;
						};
					};
					game.showIdentity();
					game.addPlayer=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                var gameMeHasPlayer=[];
	                if(lib.config.gameMeHasPlayer1!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer5);
	                return gameMeHasPlayer;
                },
                chooseCharacterAi:function(player,list,list2,back){
                    return ;
                },
            },
            init:function(){
				if(lib.config.jilueduijueE==undefined){
					alert('未选择挑战武将，重新载入游戏');
					game.reload();
				};
//				ui.commandnode.classList.add('off');
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
                game.saveConfig('double_character',false,'identity');
                game.saveConfig('identity_mode','normal','identity');
                if(lib.config.jilueduijueDXG!=5){
					game.saveConfig('player_number','2','identity');
				}else{
					game.saveConfig('player_number','3','identity');
				};
			lib.skill._jilueduijueRE={
				trigger:{
					player:'dieBefore'
				},
				forced:true,
				filter:function (event,player){
					return lib.config.jilueduijueE!=undefined;
				},
				content:function(){
					if(player.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayer1',undefined);
					if(player.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayer2',undefined);
					if(player.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayer3',undefined);
					if(player.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayer4',undefined);
					if(player.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayer5',undefined);
					if(player==game.me){
						if(lib.config.jilueduijueND!='easy') player.discard(player.get('hej'));
						if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayer2==undefined&&lib.config.gameMeHasPlayer3==undefined&&lib.config.gameMeHasPlayer4==undefined&&lib.config.gameMeHasPlayer5==undefined){
							alert('你的阵容内没有武将，重置极略对决');
							game.jilueduijueRE();
						}else{
							game.me.useSkill('jilueduijueCS');
							trigger.untrigger();
							trigger.finish();
						};
					}else{
						if(game.players.length==2&&lib.config.jilueduijueND!='hard'){
							if(lib.config.jilueduijueDXG==1){
								game.saveConfig('gameMeHasPlayer2',player.name);
								game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
							};
							if(lib.config.jilueduijueDXG==2){
								game.saveConfig('gameMeHasPlayer3',player.name);
								game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
							};
							if(lib.config.jilueduijueDXG==3){
								game.saveConfig('gameMeHasPlayer4',player.name);
								game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
							};
							if(lib.config.jilueduijueDXG==4){
								game.saveConfig('gameMeHasPlayer5',player.name);
								game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
							};
							if(lib.config.jilueduijueND=='easy'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijueEasy',lib.config.jilueduijueEasy+1);
							if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
							if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
							game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
							game.saveConfig('jilueduijueE',undefined);
						}else{
							if(player==game.zhu){
								if(lib.config.jilueduijueDXG==1){
									game.saveConfig('gameMeHasPlayer2',player.name);
									game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
								};
								if(lib.config.jilueduijueDXG==2){
									game.saveConfig('gameMeHasPlayer3',player.name);
									game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
								};
								if(lib.config.jilueduijueDXG==3){
									game.saveConfig('gameMeHasPlayer4',player.name);
									game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
								};
								if(lib.config.jilueduijueDXG==4){
									game.saveConfig('gameMeHasPlayer5',player.name);
									game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
								};
								if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
								if(lib.config.jilueduijueND=='hard'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuehard',lib.config.jilueduijuehard+1);
								if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
								game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
								game.saveConfig('jilueduijueE',undefined);
							};
						};
					};
				},
			};
			lib.skill.jilueduijueCS={
				content:function(){
					'step 0'
	                var list=[];
					if(lib.config.gameMeHasPlayer1!=undefined) list.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) list.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) list.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) list.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) list.push(lib.config.gameMeHasPlayer5);
					player.chooseButton(ui.create.dialog('选择上场的武将',[list,'character']),true);
					'step 1'
					if(result.bool){
						player.init(result.buttons[0].link);
						if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
						if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
						if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
						if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
						if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
						game.me.update();
						player.draw(2);
					};
				},
			};
			lib.translate.jilueduijueCS='换将';
			if(jilueduijueJLJM) jilueduijueJLJM.delete();
            },
};
};
};
	if(config.duorenduijue){
	if ( lib.brawl ) {
lib.brawl.duorenduijue = {
            name:'多人对决',
	        mode:'versus',
	        submode:'自由',
            intro:'该模式中可以选择：4v4，5v5，6v6，7v7，8v8',
content:{
submode:'standard',
gameStart:function(){
barenduijue.hide();
shirenduijue.hide();
shierrenduijue.hide();
shishirenduijue.hide();
shiliurenduijue.hide();
duijuetips.hide();
}
},
init:function(){
barenduijue=ui.create.div('.menubutton.large','4v4',function(){
_status.event.dialog.versus_number.link=4;
game.say1('设置4v4成功');
});
barenduijue.style.left='calc(4%)';
barenduijue.style.top='calc(50% - 250px)';
ui.window.appendChild(barenduijue);


shirenduijue=ui.create.div('.menubutton.large','5v5',function(){
_status.event.dialog.versus_number.link=5;
game.say1('设置5v5成功');
});
shirenduijue.style.left='calc(4%)';
shirenduijue.style.top='calc(50% - 200px)';
ui.window.appendChild(shirenduijue);


shierrenduijue=ui.create.div('.menubutton.large','6v6',function(){
_status.event.dialog.versus_number.link=6;
game.say1('设置6v6成功');
});
shierrenduijue.style.left='calc(4%)';
shierrenduijue.style.top='calc(50% - 150px)';
ui.window.appendChild(shierrenduijue);


shishirenduijue=ui.create.div('.menubutton.large','7v7',function(){
_status.event.dialog.versus_number.link=7;
game.say1('设置7v7成功');
});
shishirenduijue.style.left='calc(4%)';
shishirenduijue.style.top='calc(50% - 100px)';
ui.window.appendChild(shishirenduijue);


shiliurenduijue=ui.create.div('.menubutton.large','8v8',function(){
_status.event.dialog.versus_number.link=8;
game.say1('设置8v8成功');
});
shiliurenduijue.style.left='calc(4%)';
shiliurenduijue.style.top='calc(50% - 50px)';
ui.window.appendChild(shiliurenduijue);

duijuetips=ui.create.div('','选择以上选项后,<br>请不要再设置游戏人数。<br>以上选项与这段文字在游戏开始后会自动隐藏。');
duijuetips.style.height='120px';
duijuetips.style.width='120px';
duijuetips.style.left='5px';
duijuetips.style.top='calc(50%)';
ui.window.appendChild(duijuetips);


if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
},
};
};
};
	if(config.bingjingliangzu){
	if ( lib.brawl ) {
lib.brawl.bingjingliangzu = {
            name:'兵精粮足',
            mode:'identity',
            intro:[
			'当前人数：'+config.brawlPlayerNumber+'人（游戏人数在扩展界面设置，前提是增加人数选项为全部增加，否则游戏人数固定为8）',
			'1、游戏开始时，所有人获得一点体力上限并恢复一点体力',
			'2、所有人摸牌阶段多摸一张牌，出牌阶段可以额外使用一张杀',
			],
            showcase:function(init){
				if(lib.config.bingjingliangzuYZR!=true){
                	var bjlz=ui.create.div();
                	bjlz.style.height='267px';
                	bjlz.style.width='500px';
                	bjlz.style.left='calc(50% - 250px)';
                	bjlz.style.top='0px';
                	bjlz.setBackgroundImage('extension/凤凰模式/bjlz.png');
                	this.appendChild(bjlz);
					game.saveConfig('bingjingliangzuYZR',true);
				};
            },
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].gainMaxHp();
game.players[i].recover();
};
}
},
init:function(){
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
game.saveConfig('identity_mode','normal','identity');
if(config.IncreasePlayerNumber=='all'){
game.saveConfig('player_number',config.brawlPlayerNumber,'identity');
if(config.brawlPlayerNumber=='9'){
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='10'){
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='11'){
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='12'){
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='13'){
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='14'){
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='15'){
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='16'){
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
}
}else{
game.saveConfig('player_number','8','identity');
};
lib.skill._mopaishuzengjia={
trigger:{
player:"phaseDrawBegin",
},
forced:true,
content:function (){
trigger.num++;
},
};
lib.skill._chushashuzengjia={
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return num+1;
},
},
};
},
};
};
};
	if(config.jiangshimoshi){
	if ( lib.brawl ) {
lib.brawl.jiangshimoshi = {
            name:'僵尸模式',
            mode:'identity',
            intro:[
			'当前人数：'+config.brawlPlayerNumber+'人（游戏人数在扩展界面设置，前提是增加人数选项为全部增加，否则游戏人数固定为8）',
			'游戏中无法执行换位和翻面函数。',
			'移植神杀的僵尸模式，规则有改动。<br><span class=\"bluetext\" style=\"color:#EE7621;font-size:20px\"><p align="center">规则介绍</p></span>',
			'1.在此模式中主公、忠臣为人类，反贼、内奸为僵尸。',
			'2.游戏开始时，所有角色的身份变为人类，主公获得退治印记（每回合开始时，退治印记+1）。',
			'3.若主公死亡，则下一名人类玩家成为主公，生命与上限+1，并获取相当于原主公退治标记数-1的退治标记。',
			'4.主公的第二个回合开始时，夜幕降临，此轮中会有X个人变为反贼僵尸（X为存活人数/6（向上整取））。以此法变为反贼僵尸时，体力上限变为5。',
			'5.僵尸杀死人类后，人类与内奸僵尸组成双将。',
			'6.人类死亡后与内奸僵尸组成双将。',
			'7.内奸僵尸杀死人类或内奸僵尸后变为反贼僵尸。<br><span class=\"bluetext\" style=\"color:#EE7621;font-size:20px\"><p align="center">游戏结束条件</p></span>',
			'1.退治成功，所有人类胜利，僵尸以及成为僵尸的人类失败：<br>任何玩家的回合开始时，主公退治印记到达8。<br>击杀所有僵尸。',
			'2.退治失败，所有反贼僵尸胜利，非反贼僵尸以及人类失败：<br>主公阵亡并且场上没有可以代替主公的人类。'
			],
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].turnOver=function(all){};
if(game.players[i]!=game.zhu){
game.players[i].identity='zhong';
};
};
game.zhu.storage.fzjsNumber=0;
game.showIdentity();
game.swapSeat=function(all){};
}
},
init:function(){
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
game.saveConfig('identity_mode','normal','identity');
if(config.IncreasePlayerNumber=='all'){
game.saveConfig('player_number',config.brawlPlayerNumber,'identity');
if(config.brawlPlayerNumber=='9') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='10') lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='11') lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='12') lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='13') lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='14') lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='15') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='16') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
}else{
game.saveConfig('player_number','8','identity');
};
			lib.skill._jisuangailv={
				trigger:{global:'phaseAfter'},
				forced:true,
				filter:function(event,player){
					return player==game.zhu&&game.zhu.storage._tuizhi==2;
				},
				content:function(){
					if(game.zhu.storage.jisuangailv==undefined) game.zhu.storage.jisuangailv=0;
					game.zhu.storage.jisuangailv++;
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				filter:function(event,player){
					return player==game.zhu;
				},
				content:function(){
					if(player.storage._tuizhi==undefined) player.storage._tuizhi=0;
					player.storage._tuizhi++;
					player.markSkill('_tuizhi');
					player.syncStorage('_tuizhi');
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					return game.zhu.storage._tuizhi>=8;
				},
				content:function(){
					if(game.me.identity=='zhu'||game.me.identity=='zhong'){
						game.over(true);
					}else{
						game.over(false);
					};
				}
			};
			lib.skill._jiangshi={
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					if(player.storage.fzjs==0){
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshifz');
						player.maxHp=5;
						player.hp=player.maxHp;
						player.identity='fan';
					}else{
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshinj');
						player.hp=player.maxHp;
						player.identity='nei';
					};
					game.showIdentity();
					trigger.untrigger();
					trigger.finish();
				}
			};
			lib.skill._jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(game.players.length<=6) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>6&&game.players.length<=12) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*2/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>12&&game.players.length<=18) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*3/(game.players.length-1))-game.zhu.storage.fzjsNumber;
				},
				content:function(){
					player.die();
					player.identity='zhong';
					player.storage.fzjs=0;
					game.zhu.storage.fzjsNumber++;
				}
			}
			lib.skill._jiangshi3={
				trigger:{source:'dieBefore'},
				forced:true,
				filter:function(event,player){
					return (event.player.identity=='zhong'||event.player.identity=='nei')&&player.identity=='nei';
				},
				content:function(){
					player.identity='fan';
					player.init(player.name,'jiangshifz');
					game.showIdentity();
				},
			};
			lib.skill._jiangshi4={
				skillAnimation:'epic',
				animationStr:'主公阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'死亡',event.target,'成为了新的主公！');
						game.zhu=event.target;
						event.target.identity='zhu';
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.fzjsNumber=player.storage.fzjsNumber;
						event.target.storage._tuizhi=player.storage._tuizhi-1;
						event.target.markSkill('_tuizhi');
						event.target.syncStorage('_tuizhi');
						game.showIdentity();
					}
				}
			}
			lib.skill._jiangshiTx={
				skillAnimation:'epic',
				animationStr:'灵魂、献祭',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂、献祭');
				}
			};
			lib.skill._jiangshiTx2={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸、灭亡',
				animationColor:'thunder',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸、灭亡');
				}
			};
			lib.skill._jiangshiTx3={
				skillAnimation:'epic',
				animationStr:'暗夜、降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi==2&&player.storage.ayjljs!=0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.ayjljs=0;
					};
					game.log('暗夜、降临');
				}
			}
			lib.skill._huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					player.useCard({name:'tao'},target)
				}
			}
			lib.translate._tuizhi='退治'
			lib.translate._tuizhi2='退治'
			lib.translate._jiangshi='僵尸'
			lib.translate._jiangshi2='僵尸'
			lib.translate._jiangshi3='僵尸'
			lib.translate._jiangshi4='僵尸'
			lib.translate._jiangshiTx='僵尸'
			lib.translate._jiangshiTx2='僵尸'
			lib.translate._jiangshiTx3='僵尸'
			lib.translate._huzhu='互助'
			lib.translate._huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
},
};
};
};
	if(config.jianbingmoshi){
	if ( lib.brawl ) {
lib.translate.unknown8='九号位';
lib.translate.unknown9='十号位';
lib.translate.unknown10='十一号位';
lib.translate.unknown11='十二号位';
lib.translate.unknown12='十三号位';
lib.translate.unknown13='十四号位';
lib.translate.unknown14='十五号位';
lib.translate.unknown15='十六号位';
lib.translate.chanceIdentity0='自立为国';
lib.translate.chanceIdentity='自立为国';
lib.translate.chanceIdentity1='自立为国';
lib.translate.chanceIdentity2='自立为国';
lib.translate.chanceIdentity3='自立为国';
lib.translate.chanceIdentity4='自立为国';
lib.translate.chanceIdentity5='自立为国';
lib.translate.chanceIdentity6='自立为国';
lib.translate.chanceIdentity7='自立为国';
lib.translate.chanceIdentity8='自立为国';
lib.translate.chanceIdentity9='自立为国';
lib.translate.chanceIdentity10='自立为国';
lib.translate.chanceIdentity11='自立为国';
lib.translate.chanceIdentity12='自立为国';
lib.translate.chanceIdentity13='自立为国';
lib.translate.chanceIdentity14='自立为国';
lib.translate.chanceIdentity15='自立为国';
			lib.group.push('er');
			lib.translate.er='国';
			lib.translate.erColor="#990099"
			lib.group.push('san');
			lib.translate.san='国';
			lib.translate.sanColor="#990099"
			lib.group.push('si');
			lib.translate.si='国';
			lib.translate.siColor="#990099"
			lib.group.push('wu1');
			lib.translate.wu1='国';
			lib.translate.wu1Color="#990099"
			lib.group.push('liu');
			lib.translate.liu='国';
			lib.translate.liuColor="#990099"
			lib.group.push('qi');
			lib.translate.qi='国';
			lib.translate.qiColor="#990099"
			lib.group.push('ba');
			lib.translate.ba='国';
			lib.translate.baColor="#990099"
			lib.group.push('jiu1');
			lib.translate.jiu1='国';
			lib.translate.jiu1Color="#990099"
			lib.group.push('shi');
			lib.translate.shi='国';
			lib.translate.shiColor="#990099"
			lib.group.push('shiyi');
			lib.translate.shiyi='国';
			lib.translate.shiyiColor="#990099"
			lib.group.push('shier');
			lib.translate.shier='国';
			lib.translate.shierColor="#990099"
			lib.group.push('shisan');
			lib.translate.shisan='国';
			lib.translate.shisanColor="#990099"
			lib.group.push('shisi');
			lib.translate.shisi='国';
			lib.translate.shisiColor="#990099"
			lib.group.push('shiwu');
			lib.translate.shiwu='国';
			lib.translate.shiwuColor="#990099"
			lib.group.push('shiliu');
			lib.translate.shiliu='国';
			lib.translate.shiliuColor="#990099"
			lib.group.push('yi');
			lib.translate.yi='国';
			lib.translate.yiColor="#990099"
lib.brawl.jianbingmoshi = {
            name:'兼并模式',
            mode:'guozhan',
            intro:[
			'游戏开始，每个玩家自立为国，各自为战。',
			'每当有一个国家灭亡时，造成其灭亡的国家可以获得灭亡的国家的明置武将技能。',
            ],
content:{
gameStart:function(){
game.me.useSkill('chanceIdentity0');
}
},
init:function(){
game.saveConfig('onlyguozhan',false,'guozhan');
game.saveConfig('guozhanpile',false,'guozhan');
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
lib.skill.chanceIdentity={
                content:function (){
player.next.group='er';
player.next.identity='er';
player.next._group='er';
player.next.node.identity.firstChild.innerHTML=get.translation('er');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>2){
player.next.useSkill("chanceIdentity2")
}
},
            };
lib.skill.chanceIdentity2={
                content:function (){
player.next.group='san';
player.next.identity='san';
player.next._group='san';
player.next.node.identity.firstChild.innerHTML=get.translation('san');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>3){
player.next.useSkill("chanceIdentity3")
}
},
            };
lib.skill.chanceIdentity3={
                content:function (){
player.next.group='si';
player.next.identity='si';
player.next._group='si';
player.next.node.identity.firstChild.innerHTML=get.translation('si');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>4){
player.next.useSkill("chanceIdentity4")
}
},
            };
lib.skill.chanceIdentity4={
                content:function (){
player.next.group='wu1';
player.next.identity='wu1';
player.next._group='wu1';
player.next.node.identity.firstChild.innerHTML=get.translation('wu1');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>5){
player.next.useSkill("chanceIdentity5")
}
},
            };
lib.skill.chanceIdentity5={
                content:function (){
player.next.group='liu';
player.next.identity='liu';
player.next._group='liu';
player.next.node.identity.firstChild.innerHTML=get.translation('liu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>6){
player.next.useSkill("chanceIdentity6")
}
},
            };
lib.skill.chanceIdentity6={
                content:function (){
player.next.group='qi';
player.next.identity='qi';
player.next._group='qi';
player.next.node.identity.firstChild.innerHTML=get.translation('qi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>7){
player.next.useSkill("chanceIdentity7")
}
},
            };
lib.skill.chanceIdentity7={
                content:function (){
player.next.group='ba';
player.next.identity='ba';
player.next._group='ba';
player.next.node.identity.firstChild.innerHTML=get.translation('ba');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>8){
player.next.useSkill("chanceIdentity8")
}
},
            };
lib.skill.chanceIdentity8={
                content:function (){
player.next.group='jiu1';
player.next.identity='jiu1';
player.next._group='jiu1';
player.next.node.identity.firstChild.innerHTML=get.translation('jiu1');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>9){
player.next.useSkill("chanceIdentity9")
}
},
            };
lib.skill.chanceIdentity9={
                content:function (){
player.next.group='shi';
player.next.identity='shi';
player.next._group='shi';
player.next.node.identity.firstChild.innerHTML=get.translation('shi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>10){
player.next.useSkill("chanceIdentity10")
}
},
            };
lib.skill.chanceIdentity10={
                content:function (){
player.next.group='shiyi';
player.next.identity='shiyi';
player.next._group='shiyi';
player.next.node.identity.firstChild.innerHTML=get.translation('shiyi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>11){
player.next.useSkill("chanceIdentity11")
}
},
            };
lib.skill.chanceIdentity11={
                content:function (){
player.next.group='shier';
player.next.identity='shier';
player.next._group='shier';
player.next.node.identity.firstChild.innerHTML=get.translation('shier');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>12){
player.next.useSkill("chanceIdentity12")
}
},
            };
lib.skill.chanceIdentity12={
                content:function (){
player.next.group='shisan';
player.next.identity='shisan';
player.next._group='shisan';
player.next.node.identity.firstChild.innerHTML=get.translation('shisan');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>13){
player.next.useSkill("chanceIdentity13")
}
},
            };
lib.skill.chanceIdentity13={
                content:function (){
player.next.group='shisi';
player.next.identity='shisi';
player.next._group='shisi';
player.next.node.identity.firstChild.innerHTML=get.translation('shisi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>14){
player.next.useSkill("chanceIdentity14")
}
},
            };
lib.skill.chanceIdentity14={
                content:function (){
player.next.group='shiwu';
player.next.identity='shiwu';
player.next._group='shiwu';
player.next.node.identity.firstChild.innerHTML=get.translation('shiwu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>15){
player.next.useSkill("chanceIdentity15")
}
},
            };
lib.skill.chanceIdentity15={
                content:function (){
player.next.group='shiliu';
player.next.identity='shiliu';
player.next._group='shiliu';
player.next.node.identity.firstChild.innerHTML=get.translation('shiliu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>16){
player.next.useSkill("chanceIdentity16")
}
},
            };
lib.skill.chanceIdentity0={
                content:function (){
player.next.group='yi';
player.next.identity='yi';
player.next._group='yi';
player.next.node.identity.firstChild.innerHTML=get.translation('yi');
player.next.node.identity.dataset.color='zhu';
player.next.useSkill("chanceIdentity")
},
            };
lib.skill._gainSkill={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
                    return event.source&&event.source.isIn();
                },
                content:function (){
					game.log(trigger.source,'获得了',player.get('s',false,false));
					trigger.source.addSkill(player.get('s',false,false));
				},
            };
}
}
}
	};
		if(config.IncreasePlayerNumber=='0'){
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','8','identity');
					game.saveConfig('player_number','8','guozhan');
				};
			});
		};
		if(config.IncreasePlayerNumber=='1'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','9','identity');
					game.saveConfig('player_number','9','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='2'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','10','identity');
					game.saveConfig('player_number','10','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='3'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','11','identity');
					game.saveConfig('player_number','11','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='4'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','12','identity');
					game.saveConfig('player_number','12','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='5'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='14'){
					game.saveConfig('player_number','13','identity');
					game.saveConfig('player_number','13','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='6'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'){
					game.saveConfig('player_number','14','identity');
					game.saveConfig('player_number','14','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='7'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','15','identity');
					game.saveConfig('player_number','15','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='8'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'||get.config('player_number')=='15'){
					game.saveConfig('player_number','16','identity');
					game.saveConfig('player_number','16','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='all'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
			}
			if(get.config('player_number')=='9'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='10'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='11'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='12'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='13'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='14'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='15'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='16'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			};
	if(config.gongchengmoshi){
	game.addCharacterPack({
       character:{
            "蓝方城池":["","",20,["budong","bumo","shenglitiaojian1","shenglitiaojian3","threatencfz"],["forbidai"]],
            "红方城池":["","",20,["budong","bumo","shenglitiaojian2","shenglitiaojian4","threatencfz"],["forbidai"]],
		},
		skill:{
            budong:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
trigger.untrigger();
trigger.finish();
},
            },
            bumo:{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
player.discard(player.get("hej"),99999);
},
            },
            shenglitiaojian1:{
                trigger:{
                    player:"dying",
                },
                forced:true,
                content:function (){
					if (game.me.side==true){
					game.over(true);
					}
					else{
					game.over(false);
					}
},
            },
            shenglitiaojian2:{
                trigger:{
                    player:"dying",
                },
                forced:true,
                content:function (){
					if (game.me.side==false){
					game.over(true);
					}
					else{
					game.over(false);
					}
},
            },
         shenglitiaojian3:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
        filter:function (event,player){
            return game.players.length==3;
        },
                content:function (){
                for(var i=0;i<game.players.length;i++){
                if (game.players[i].hasSkill('shenglitiaojian4')){
                if (player.hp>game.players[i].hp&&game.me.side==false){
                game.over(true);
                }
                else if(player.hp==game.players[i].hp){
                    game.over();
                    }
                else{
                    game.over(false);
                    }
                }
                }
},
            },
            shenglitiaojian4:{

			},
            threatencfz:{
        ai:{
	threaten:10,
            }
			},

		},
		translate:{
            "蓝方城池":"蓝方城池",
            "红方城池":"红方城池",
            budong:"",
            "budong_info":"",
            bumo:"",
            "bumo_info":"",
            shenglitiaojian1:"",
            "shenglitiaojian_info":"",
            shenglitiaojian2:"",
            "shenglitiaojian_info":"",
            threatencfz:"",
            "threatencfz_info":"",
            shenglitiaojian3:"",
            "shenglitiaojian3_info":"",
            shenglitiaojian4:"",
            "shenglitiaojian4_info":"",
		}
},'攻城模式');
	if ( lib.brawl ) {
lib.brawl.gongchengmoshi = {
            name:'攻城模式',
            mode:'chess',
            intro:[
			'红方城池位于右下角，蓝方城池位于左上角。',
			'当一方的城池体力为零时，游戏结束。',
			'蓝方城池开始时，若游戏人数为三，比较双方城池的体力值，体力值大的一方获胜。',
			'回合开始前，若角色与自方城池距离小于或等于一，玩家恢复一点体力。',
			'<br><br><br><br>注：<br>城池是自身技能驱动的，若城池技能被删除，规则也会被破坏。'
            ],
			    content:{
                gameStart:function(){
                    for(var w=0;w<game.players.length;w++){
                        game.players[w].addSkill('chengAddFriend');
                        game.players[w].addSkill('chengAddEnemy');
                    }
					}
                },


		init:function(){
		game.saveConfig('chess_obstacle','0','chess');
		game.saveConfig('battle_number','3','chess');
		game.saveConfig('single_control',false,'chess');
		game.saveConfig('seat_order','交替','chess');
		game.saveConfig('chess_mode','combat','chess');


		lib.skill.chengAddFriend={
				trigger:{player:'gameDrawAfter'},
				forced:true,
				content:function(){
				var chengFriend=game.addChessPlayer();
				chengFriend.init("红方城池");
				chengFriend.side=true;
			    chengFriend.setIdentity('城');
if (game.players.length<4){
for(var i=0;i<game.players.length;i++){
var xy=game.players[i].getXY();
if (xy[0]==7&&xy[1]==4) {
game.swapSeat(game.players[i],chengFriend);
}
}
}
if (4<=game.players.length<6){
for(var i=0;i<game.players.length;i++){
var xy=game.players[i].getXY();
if (xy[0]==9&&xy[1]==6) {
game.swapSeat(game.players[i],chengFriend);
}
}
}
if (6<=game.players.length<8){
for(var i=0;i<game.players.length;i++){
var xy=game.players[i].getXY();
if (xy[0]==11&&xy[1]==7) {
game.swapSeat(game.players[i],chengFriend);
}
}
}
if (game.players.length==8){
for(var i=0;i<game.players.length;i++){
var xy=game.players[i].getXY();
if (xy[0]==12&&xy[1]==8) {
game.swapSeat(game.players[i],chengFriend);
}
}
}
			if (game.players.length<4){
			chengFriend.moveTo(7,4)
			}
			if (4<=game.players.length<6){
			chengFriend.moveTo(9,6)
			}
			if (6<=game.players.length<8){
			chengFriend.moveTo(11,7)
			}
			if (game.players.length==8){
			chengFriend.moveTo(12,8)
			}
}
}

lib.skill._chengBuff={
				trigger:{
					player:'phaseBefore'
					},
				forced:true,
				content:function(){
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('bumo')){
if (game.players[i]!==player&&get.distance(player,game.players[i])<=1){
if (player.side==game.players[i].side){
player.recover();
}
}
}
}
}
}


		lib.skill.chengAddEnemy={
				trigger:{player:'gameDrawAfter'},
				forced:true,
				content:function(){
				var chengEnemy=game.addChessPlayer();
				chengEnemy.moveTo(0,0);
				chengEnemy.init("蓝方城池");
				chengEnemy.side=false;
			    chengEnemy.setIdentity('城');
for(var i=0;i<game.players.length;i++){
var xy=game.players[i].getXY();
if (xy[0]==0&&xy[1]==0) {
game.swapSeat(game.players[i],chengEnemy);
}
}
}
}
}


}
}
};
		},precontent:function (phoenixol){
		get.modetrans=function(config,server){
            if(config.mode=='versus'){
                switch(config.versus_mode){
                    case '1v1':return '单人对决';
                    case '2v2':return '欢乐成双';
                    case '3v3':return '血战到底';
                    case '4v4':return '四人对决';
                }
            }
            else if(config.mode=='identity'&&config.identity_mode=='zhong'){
                return '忠胆英杰';
            }
            else if(config.mode=='identity'&&config.identity_mode=='zombie'){
                return '僵尸狂潮';
            }
            else if(config.mode=='identity'&&config.identity_mode=='strong'){
                return '兵精粮足';
            }
            else if(config.mode=='guozhan'&&config.guozhan_mode=='combine'){
                return '一统天下';
            }
            else{
                if(server){
                    return get.translation(config.mode)+'模式';
                }
                else{
                    return get.cnNumber(parseInt(config.number))+'人'+get.translation(config.mode);
                }
            }
        };
		get.groupnature=function(group,method){
			var nature;
			switch(group){
				case 'shen':nature='thunder';break;
				case 'wei':nature='water';break;
				case 'shu':nature='soil';break;
				case 'wu':nature='wood';break;
				case 'qun':nature='metal';break;
				default:return '';
			}
			if(method=='raw'){
				return nature;
			}
			return nature+'mm';
		};
        if(phoenixol.enable){
            game.import('character',function(){
                var zombie={
                    name:'zombie',
                    connect:true,
                    character:{
                        jiangshifz:["male","qun",5,["xunmeng","zaibian","ganran","wansha","paoxiao"],["ext:凤凰模式/jiangshifz.jpg","forbidai","des:僵尸模式配套武将"]],
                        jiangshinj:["male","qun",3,["baozou","wansha","xueji","shishi","ganran"],["ext:凤凰模式/jiangshinj.jpg","forbidai","des:僵尸模式配套武将"]],
                    },
                    skill:{
baozou:{
    mod:{
        cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
    },
    ai:{
        unequip:true,
        skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
    },
},
            shishi:{
				trigger:{source:'dieAfter'},
				forced:true,
				content:function(){
					player.gainMaxHp(1);
					player.recover();
				}
			},
            xunmeng:{
				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				forced:true,
				content:function(){
					trigger.num++;
					if(player.hp>1) player.loseHp();
				}
			},
            zaibian:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return get.population('zhong')-get.population('fan')-get.population('nei')+2>0;
				},
				forced:true,
				content:function(){
					var num=get.population('zhong')-get.population('fan')-get.population('nei')+2;
					player.draw(num);
				}
			},
			ganran:{
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardRespondable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
				},
				enable:['chooseToUse'],
				filterCard:{type:'equip'},
				viewAsFilter:function(player){
					return player.num('h',{type:'equip'})>0;
				},
				viewAs:{name:'tiesuo'},
				check:function(){return 1},
				group:'ganran2',
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			},
			ganran2:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.num('h',{type:'equip'})>0;
				},
				filterCard:{type:'equip'},
				prepare:function(cards,player){
					player.$throw(cards,1000);
				},
				discard:false,
				delay:0.5,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					for(var i=0;i<cards.length;i++){
						ui.discardPile.appendChild(cards[i]);
					}
				},
				ai:{
					order:3.5,
					result:{
						player:1
					}
				}
			},

		},
                    translate:{
                        jiangshifz:'僵尸',
                        jiangshinj:'僵尸',
                        baozou:'暴走',
                        baozou_info:' 锁定技，出牌阶段，你可以使用任意数量的【杀】。 ',
                        shishi:'噬尸',
                        shishi_info:' 锁定技，当你杀死一名角色后，你获得一点体力上限并回复一点体力。 ',
                        xunmeng:'迅猛',
                        xunmeng_info:' 锁定技，你的杀造成的伤害+1。你的杀造成伤害时，若你体力大于1，你流失1点体力。 ',
                        zaibian:'灾变',
                        zaibian_info:' 锁定技，你的出牌阶段开始时，若人类玩家数-僵尸玩家数+1大于0，则你摸取该数目的牌。 ' ,
                        ganran:'感染',
                        ganran_info:' 锁定技，你的装备牌都视为铁锁连环',
                        ganran2:'感染·重铸',
                    },
                };
                return zombie;
            });
            lib.config.all.characters.push('zombie');
            if(!lib.config.characters.contains('zombie')){
                lib.config.characters.push('zombie');
            }
            lib.translate['zombie_character_config'] ='僵尸';
		};
			lib.mode.identity.connect.connect_identity_mode={
				name:'游戏模式',
				init:'normal',
				item:{
					normal:'标准',
					zhong:'明忠',
					zombie:'僵尸',
					strong:'强兵'
				},
				restart:true,
				frequent:true,
				intro:'明忠详见帮助<br>僵尸详见僵尸模式<br>强兵详见兵精粮足'
			};
			lib.skill._zombieSupport={
				trigger:{global:'gameStart'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return true;
				},
				content:function(){
					game.zhu.storage.fzjsNumber=0;
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].turnOver=function(all){};
							if(game.players[i]!=game.zhu){
								game.players[i].identity='zhong';
							};
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
					game.swapSeat=function(all){};
				},
			};
			lib.skill._jisuangailv={
				trigger:{global:'phaseAfter'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player==game.zhu&&game.zhu.storage._tuizhi==2;
				},
				content:function(){
					if(game.zhu.storage.jisuangailv==undefined) game.zhu.storage.jisuangailv=0;
					game.zhu.storage.jisuangailv++;
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player==game.zhu;
				},
				content:function(){
					if(player.storage._tuizhi==undefined) player.storage._tuizhi=0;
					player.storage._tuizhi++;
					player.markSkill('_tuizhi');
					player.syncStorage('_tuizhi');
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return game.zhu.storage._tuizhi>=8;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='fan'||game.players[i].identity=='nei') game.players[i].die();
					};
				}
			};
			lib.skill._jiangshi={
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong';
				},
				content:function(){
					if(player.storage.fzjs==0){
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						game.broadcastAll(function(player){
							player.uninit;
							player.init(player.name,'jiangshifz');
						},player);
						player.maxHp=5;
						player.hp=player.maxHp;
						game.broadcastAll(function(player){
							player.identity='fan';
						},player);
					}else{
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						game.broadcastAll(function(player){
							player.uninit;
							player.init(player.name,'jiangshinj');
						},player);
						player.hp=player.maxHp;
						game.broadcastAll(function(player){
							player.identity='nei';
						},player);
					};
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
					trigger.untrigger();
					trigger.finish();
				}
			};
			lib.skill._jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					if(game.players.length<=6) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>6&&game.players.length<=12) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*2/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>12&&game.players.length<=18) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*3/(game.players.length-1))-game.zhu.storage.fzjsNumber;
				},
				content:function(){
					player.die();
					game.broadcastAll(function(player){
						player.identity='zhong';
					},player);
					player.storage.fzjs=0;
					game.zhu.storage.fzjsNumber++;
				}
			}
			lib.skill._jiangshi3={
				trigger:{source:'dieBefore'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return (event.player.identity=='zhong'||event.player.identity=='nei')&&player.identity=='nei';
				},
				content:function(){
					game.broadcastAll(function(player){
						player.identity='fan';
					},player);
					game.broadcastAll(function(player){
						player.init(player.name,'jiangshifz');
					},player);
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
				},
			};
			lib.skill._jiangshi4={
				skillAnimation:'epic',
				animationStr:'主公阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.storage._tuizhi>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'死亡',event.target,'成为了新的主公！');
						game.zhu=event.target;
						game.broadcastAll(function(player){
							player.identity='zhu';
						},event.target);
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.fzjsNumber=player.storage.fzjsNumber;
						event.target.storage._tuizhi=player.storage._tuizhi-1;
						event.target.markSkill('_tuizhi');
						event.target.syncStorage('_tuizhi');
						game.broadcastAll(function(){
							for(var i=0;i<game.players.length;i++){
								game.players[i].setIdentity(game.players[i].identity);
							};
						});
					}
				}
			}
			lib.skill._jiangshiTx={
				skillAnimation:'epic',
				animationStr:'灵魂、献祭',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂、献祭');
				}
			};
			lib.skill._jiangshiTx2={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸、灭亡',
				animationColor:'thunder',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸、灭亡');
				}
			};
			lib.skill._jiangshiTx3={
				skillAnimation:'epic',
				animationStr:'暗夜、降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.storage._tuizhi==2&&player.storage.ayjljs!=0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.ayjljs=0;
					};
					game.log('暗夜、降临');
				}
			}
			lib.skill._huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					player.useCard({name:'tao'},target)
				}
			}
			lib.translate._tuizhi='退治'
			lib.translate._tuizhi2='退治'
			lib.translate._jiangshi='僵尸'
			lib.translate._jiangshi2='僵尸'
			lib.translate._jiangshi3='僵尸'
			lib.translate._jiangshi4='僵尸'
			lib.translate._jiangshiTx='僵尸'
			lib.translate._jiangshiTx2='僵尸'
			lib.translate._jiangshiTx3='僵尸'
			lib.translate._huzhu='互助'
			lib.translate._huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
			lib.skill._mopaishuzengjia={
				trigger:{
					player:"phaseDrawBegin",
				},
				forced:true,
				filter:function(event,player){
					return _status.mode=='strong';
				},
				content:function (){
					trigger.num++;
				},
			};
			lib.skill._chushashuzengjia={
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha'&&_status.mode=='strong') return num+1;
					},
				},
			};
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 70px);left:calc(85% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='3']{top:5px;left:calc(75% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='4']{top:0;left:calc(60% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='5']{top:0;left:calc(40% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='6']{top:5px;left:calc(25% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 70px);left:calc(15% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='4']{top:0;left:calc(77% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='5']{top:0;left:calc(59% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='6']{top:0;left:calc(41% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='7']{top:0;left:calc(23% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='8']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='4']{top:0;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='5']{top:0;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='7']{top:0;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='8']{top:0;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='9']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='13']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='4']{top:0;left:calc(83% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='5']{top:0;left:calc(69.8% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='6']{top:0;left:calc(56.6% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='7']{top:0;left:calc(43.4% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='8']{top:0;left:calc(30.2% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='9']{top:0;left:calc(17% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='10']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='11']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='12']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='6']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='7']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='8']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='6']{top:5px;left:calc(69.25% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='7']{top:0;left:calc(56.4% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='8']{top:0;left:calc(43.55% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='9']{top:5px;left:calc(30.7% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='7']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='8']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='9']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='17']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='2']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='3']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='4']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='5']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='6']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='7']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='8']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='9']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='10']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='11']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='12']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='13']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='14']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='15']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='16']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			lib.mode.identity.connect.connect_player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			}
			lib.mode.guozhan.connect.connect_player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			}
			lib.translate.unknown8='九号位';
			lib.translate.unknown9='十号位';
			lib.translate.unknown10='十一号位';
			lib.translate.unknown11='十二号位';
			lib.translate.unknown12='十三号位';
			if(get.mode()=='connect') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			lib.mode.guozhan.connect.connect_guozhan_mode={
		        name:'游戏模式',
		        init:'normal',
		        item:{
					normal:'标准',
		            combine:'兼并'
		        },
		        frequent:true,
		        restart:true,
				intro:'兼并详见兼并模式'
			};
			lib.skill._combineSupport={
				trigger:{player:'phaseBefore'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='combine') return false;
					return player.storage.combineSupport!=0;
				},
				content:function(){
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].group=get.cnNumber(i+1);
							game.players[i].identity=get.cnNumber(i+1);
							game.players[i]._group=get.cnNumber(i+1);
							game.players[i].storage.combineSupport=0;
							game.players[i].node.identity.firstChild.innerHTML='国';
//							game.players[i].node.identity.dataset.color='zhu';
						};
					});
				},
			};
			lib.skill._combine={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
					if(_status.mode!='combine') return false;
                    return event.source&&event.source.isIn();
                },
                content:function (){
					game.log(trigger.source,'获得了',player.get('s',false,false));
					trigger.source.addSkill(player.get('s',false,false));
				},
            };
			if(lib.device&&get.mode()=='connect'){
				game.saveConfig('player_height','short');
				game.saveConfig('layout','long');
			};
		lib.arenaReady.push(function(){
			if(lib.device&&_status.connectMode){
				var zoom=function(num){
					var zoom=num;
					game.documentZoom=game.deviceZoom*zoom;
					document.documentElement.style.zoom=game.documentZoom;
				};
				zoom(0.8);
			};
		});
game.say1=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 200px)';
setTimeout(function(){
dialog.delete();
},1500);
};
game.say2=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 150px)';
setTimeout(function(){
dialog.delete();
},2000);
};
game.removeCard2=function(name){
            for(var i=0;i<lib.card.list.length;i++){
                if(lib.card.list[i][2]==name){
                    lib.card.list.splice(i--,1);
                }
            }
            var list=[];
            for(var i=0;i<ui.discardPile.childElementCount;i++){
                if(ui.discardPile.childNodes[i].name==name){
                    list.push(ui.discardPile.childNodes[i]);
                }
            }
            for(var i=0;i<list.length;i++){
                list[i].remove();
            }
};
game.awakenShow=function(character,fontSize,colorCode,skillName){
if(lib.config.awakenShow==true&&Math.random()<=lib.config.awakenShowRandom){
game.broadcastAll(function(character,fontSize,colorCode,skillName){
game.pause();
var player=ui.create.player(null,true);
player.node.avatar.style.backgroundSize='cover';
player.node.avatar.setBackgroundImage('extension/凤凰模式/'+character+'.jpg');
player.node.avatar.show();
player.style.left='calc(50% - 75px)';
player.style.top='175px';
player.node.count.remove();
player.node.hp.remove();
player.node.nameol.innerHTML='<span style=\"font-size:'+fontSize+'px;font-weight:600;color:'+colorCode+'\">'+skillName+'</span>';
player.style.transition='all 0.5s';
ui.window.appendChild(player);
setTimeout(function(){
player.delete();
game.resume();
},3400);
ui.window.showcaseinterval=setInterval(function(){
player.classList.add('zoomin2');
player.show();
setTimeout(function(){
player.hide();
},1500);
},1700);
},character,fontSize,colorCode,skillName)
}else{};
};
},config:{"tips1":{"name":"<span style=\"font-size:15.6px;font-weight:600\">增加人数后建议开启军争卡包，避免回合内摸牌过多导致平局出现</span><span style=\"font-size:14px\"><li>如果选项为全部增加，乱斗模式下的非本扩展的身份模式中人数不能大于8，否则无法游戏，选择+X选项可以解决<li>8人局以上，任何卡牌无法指定距离相隔4及以上的角色为目标<li>以下身份选项仅在非联机模式下生效<br></span>","clear":true,"nopointer":true},"IncreasePlayerNumber":{"name":"增加人数","init":"all","item":{"0":"不增加","1":"+1","2":"+2","3":"+3","4":"+4","5":"+5","6":"+6","7":"+7","8":"+8","all":"全部增加"}},"nineMan":{"name":"九人场身份","init":"1","item":{"1":"三忠四反一内","2":"二忠四反二内","3":"四忠四反零内","4":"三忠五反零内"}},"tenMan":{"name":"十人场身份","init":"1","item":{"1":"三忠四反二内","2":"三忠五反一内","3":"四忠五反零内"}},"elevenMan":{"name":"十一人场身份","init":"1","item":{"1":"四忠五反一内","2":"三忠五反二内","3":"五忠五反零内","4":"四忠六反零内"}},"twelveMan":{"name":"十二人场身份","init":"1","item":{"1":"四忠五反二内","2":"四忠六反一内","3":"五忠六反零内"}},"thirteenMan":{"name":"十三人场身份","init":"1","item":{"1":"五忠六反一内","2":"四忠六反二内","3":"六忠六反零内","4":"五忠七反零内"}},"fourteenMan":{"name":"十四人场身份","init":"1","item":{"1":"五忠六反二内","2":"五忠七反一内","3":"六忠七反零内"}},"fifteenMan":{"name":"十五人场身份","init":"1","item":{"1":"六忠七反一内","2":"五忠七反二内","3":"七忠七反零内","4":"六忠八反零内"}},"SixteenMan":{"name":"十六人场身份","init":"1","item":{"1":"六忠七反二内","2":"六忠八反一内","3":"七忠八反零内"}},"gongchengmoshi":{"name":"攻城模式","init":true},"jianbingmoshi":{"name":"兼并模式","init":true},"jiangshimoshi":{"name":"僵尸模式","init":true},"bingjingliangzu":{"name":"兵精粮足","init":true},"duorenduijue":{"name":"多人对决","init":true},"jilueduijue":{"name":"极略对决","init":true},"wujinmoshi":{"name":"无尽模式","init":true},"brawlPlayerNumber":{"name":"此扩展乱斗—身份乱斗人数","init":"16","item":{"2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12","13":"13","14":"14","15":"15","16":"16"}},"phoenixol":{"name":"<span style=\"font-size:13px;font-weight:600\">将凤凰联机武将设为禁用</span>","init":false,"intro":"将凤凰联机武将设为禁用"}},package:{
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
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"",
},files:{"character":[],"card":[],"skill":[]}}})