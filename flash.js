

























'use strict';const _0x6bc3ea=_0x55d3;(function(_0x1f2e69,_0x43c3d3){const _0x3cbb71=_0x55d3,_0x162641=_0x1f2e69();while(!![]){try{const _0x547312=-parseInt(_0x3cbb71(0x23f))/0x1+-parseInt(_0x3cbb71(0x21f))/0x2+parseInt(_0x3cbb71(0x23a))/0x3+parseInt(_0x3cbb71(0x1d7))/0x4*(parseInt(_0x3cbb71(0x2ad))/0x5)+parseInt(_0x3cbb71(0x24d))/0x6+parseInt(_0x3cbb71(0x215))/0x7+-parseInt(_0x3cbb71(0x27c))/0x8;if(_0x547312===_0x43c3d3)break;else _0x162641['push'](_0x162641['shift']());}catch(_0x581d2f){_0x162641['push'](_0x162641['shift']());}}}(_0x2b7f,0xe4c06));var __createBinding=this&&this['__createBinding']||(Object[_0x6bc3ea(0x28e)]?function(_0x468451,_0x2b61d6,_0x5c1d07,_0x424e8b){const _0x67ff70=_0x6bc3ea;if(_0x424e8b===undefined)_0x424e8b=_0x5c1d07;var _0x4e9530=Object[_0x67ff70(0x28a)](_0x2b61d6,_0x5c1d07);(!_0x4e9530||(_0x67ff70(0x21d)in _0x4e9530?!_0x2b61d6[_0x67ff70(0x270)]:_0x4e9530[_0x67ff70(0x223)]||_0x4e9530[_0x67ff70(0x1d4)]))&&(_0x4e9530={'enumerable':!![],'get':function(){return _0x2b61d6[_0x5c1d07];}}),Object['defineProperty'](_0x468451,_0x424e8b,_0x4e9530);}:function(_0x553f70,_0x30a3a7,_0x5842a7,_0x1b08e1){if(_0x1b08e1===undefined)_0x1b08e1=_0x5842a7;_0x553f70[_0x1b08e1]=_0x30a3a7[_0x5842a7];}),__setModuleDefault=this&&this[_0x6bc3ea(0x2b1)]||(Object[_0x6bc3ea(0x28e)]?function(_0x37e5ce,_0x30a3dd){const _0x3e79b6=_0x6bc3ea;Object[_0x3e79b6(0x260)](_0x37e5ce,'default',{'enumerable':!![],'value':_0x30a3dd});}:function(_0xc6846d,_0x31fa7a){const _0x71b0df=_0x6bc3ea;_0xc6846d[_0x71b0df(0x214)]=_0x31fa7a;}),__importStar=this&&this[_0x6bc3ea(0x2b7)]||function(_0x4fd07b){const _0x1619ed=_0x6bc3ea;if(_0x4fd07b&&_0x4fd07b[_0x1619ed(0x270)])return _0x4fd07b;var _0x33301f={};if(_0x4fd07b!=null){for(var _0x479489 in _0x4fd07b)if(_0x479489!==_0x1619ed(0x214)&&Object[_0x1619ed(0x20c)][_0x1619ed(0x245)][_0x1619ed(0x1d6)](_0x4fd07b,_0x479489))__createBinding(_0x33301f,_0x4fd07b,_0x479489);}return __setModuleDefault(_0x33301f,_0x4fd07b),_0x33301f;},__importDefault=this&&this[_0x6bc3ea(0x1e9)]||function(_0x1420e6){const _0x161f9e=_0x6bc3ea;return _0x1420e6&&_0x1420e6[_0x161f9e(0x270)]?_0x1420e6:{'default':_0x1420e6};};function _0x55d3(_0x373489,_0xe45b33){const _0x2b7f1c=_0x2b7f();return _0x55d3=function(_0x55d38f,_0x2706e3){_0x55d38f=_0x55d38f-0x1cc;let _0xf30b7d=_0x2b7f1c[_0x55d38f];return _0xf30b7d;},_0x55d3(_0x373489,_0xe45b33);}Object[_0x6bc3ea(0x260)](exports,_0x6bc3ea(0x270),{'value':!![]});const baileys_1=__importStar(require(_0x6bc3ea(0x282))),logger_1=__importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),logger=logger_1[_0x6bc3ea(0x214)][_0x6bc3ea(0x2ca)]({});logger[_0x6bc3ea(0x2be)]=_0x6bc3ea(0x2a1);const pino=require(_0x6bc3ea(0x2e8)),boom_1=require(_0x6bc3ea(0x25d)),conf=require(_0x6bc3ea(0x272)),axios=require('axios');let fs=require(_0x6bc3ea(0x2a0)),path=require('path');const FileType=require(_0x6bc3ea(0x289)),{Sticker,createSticker,StickerTypes}=require(_0x6bc3ea(0x22b)),{verifierEtatJid,recupererActionJid}=require(_0x6bc3ea(0x2c6)),{atbverifierEtatJid,atbrecupererActionJid}=require(_0x6bc3ea(0x2d2));let evt=require(__dirname+'/framework/TRZ');const {isUserBanned,addUserToBanList,removeUserFromBanList}=require(_0x6bc3ea(0x1cd)),{addGroupToBanList,isGroupBanned,removeGroupFromBanList}=require(_0x6bc3ea(0x2e4)),{isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList}=require(_0x6bc3ea(0x1ee));let {reagir}=require(__dirname+'/framework/app');var session=conf[_0x6bc3ea(0x2b6)]['replace'](/TRZ-MD-WA-BOT;;;=>/g,'');const prefixe=conf[_0x6bc3ea(0x2eb)];async function authentification(){const _0x1236d9=_0x6bc3ea;try{if(!fs[_0x1236d9(0x271)](__dirname+'/auth/creds.json'))console[_0x1236d9(0x27f)](_0x1236d9(0x24a)),await fs[_0x1236d9(0x2aa)](__dirname+_0x1236d9(0x2ce),atob(session),_0x1236d9(0x2ab));else fs[_0x1236d9(0x271)](__dirname+_0x1236d9(0x2ce))&&session!='zokk'&&await fs['writeFileSync'](__dirname+_0x1236d9(0x2ce),atob(session),'utf8');}catch(_0x2928b3){console[_0x1236d9(0x27f)](_0x1236d9(0x1d3)+_0x2928b3);return;}}authentification();function _0x2b7f(){const _0x4bcd42=['.js','notify','undefined','wa-sticker-formatter','type','antipromote','bdd\x20err\x20','....\x20','link\x20detected,\x20\x0a','Message\x20not\x20found','test','ADM','mtype','makeInMemoryStore','./bdd/warn','random','unwatchFile','😡😡\x20','1520733qhnfbP','the\x20bot\x20is\x20online\x20🕸\x0a\x0a','mute_at','length','demote','116018KGKieC','./bdd/cron','transparent','mise\x20à\x20jour\x20','ChatJid\x20must\x20be\x20a\x20string','toLowerCase','hasOwnProperty','videoMessage','messages.upsert','replace','@g.us','connection\x20in\x20progress\x20...','quotedMessage','connection\x20to\x20server\x20lost\x20😞,,,\x20reconnection\x20in\x20progress...\x20','9020364vEScTb','add','message\x20deleted\x20\x0a\x20@','*You\x20are\x20welcomed\x20here.*\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*You\x20MAY\x20read\x20the\x20group\x20description\x20FOR\x20more\x20info\x20and\x20Avoid\x20getting\x20removed*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20◇\x20*GROUP\x20DESCRIPTION*\x20\x20◇\x0a\x0a','\x20and\x20@','Africa/Nairobi','message\x20from\x20the\x20group\x20:\x20','floor','conversation','owner','image','mentionedJid','off','Options\x20must\x20be\x20an\x20object','delete','open','@hapi/boom','\x20installé\x20✔️','12345','defineProperty','url','includes','Je\x20ne\x20reagis\x20pas\x20au\x20reactions','extendedTextMessage','\x20have\x20been\x20removed\x20from\x20administrative\x20rights.','./media/chrono.webp','You\x20don\x27t\x20have\x20acces\x20to\x20commands\x20here','trim','messageContextInfo','nomCom','/commands/','\x20has\x20violated\x20the\x20anti-promotion\x20rule,\x20therefore\x20both\x20','Delete\x20message\x20about\x20me','action','participant','__esModule','existsSync','./set','readFileSync','unmute_at','desc','output','video','antidemote','AUTO_DOWNLOAD_STATUS','contacts','pm2\x20restart\x20all','1498480pFcffZ','forEach','participants','log','\x20\x20\x20\x20\x20\x20\x20\x20😈Anti-delete-message😈\x0a\x20Message\x20from\x20@','extname','@whiskeysockets/baileys','!!!\x20connection\x20closed,\x20reconnection\x20in\x20progress\x20...','lien\x20detecté','fromBuffer','\x0a❒\x20CREATED:\x20*22.2.2024*︎\x0a\x0a___________________________________\x0a\x20\x20\x20\x0a\x20\x0a╔═════◇\x0a║◇\x20*KEEP\x20USING\x20TRZ-MD*\x0a╚════════════════>\x0a___________________________________\x0a\x0a*THE\x20\x20TRZ\x20\x20MULTI\x20\x20DEVICE*','status@broadcast','\x0a\x0a📌Powered\x20by\x20*TRZ\x20King','file-type','getOwnPropertyDescriptor','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','error','------------------/-----','create','object','schedule','number','node-cron','254742063632','message\x20sent\x20By\x20:\x20','etablissement\x20d\x27un\x20autounmute\x20pour\x20','fromMe','toLocaleLowerCase','timeout','status','BAES','announcement','Wrong\x20session\x20ID.\x20please\x20rescan\x20the\x20QR\x20or\x20use\x20pairing\x20code\x20by\x20TRZ\x20King...','downloadAndSaveMediaMessage','remoteJid','child_process','fs-extra','silent','\x20*\x20*\x20*','toFile','je\x20fais\x20rien','map','audio/mp4','Cas\x20de\x20superUser\x20je\x20fais\x20rien','https://telegra.ph/file/3bf285a2c0f3d986028f3.jpg','bot\x20detected\x20;you\x20will\x20be\x20removed\x20because\x20of\x20reaching\x20warn-limit','writeFileSync','utf8','\x0a❒\x20COMMANDS:\x20','10byqZdZ','connectionClosed','You\x20are\x20banned\x20from\x20bot\x20commands','hum\x20','__setModuleDefault','You\x20are\x20disconnected,,,\x20please\x20rescan\x20the\x20qr\x20code\x20or\x20use\x20pairing\x20code','jidDecode','creds.update','st1.webp','session','__importStar','function','unlink','listResponseMessage','mimetype','sendMessage','./media/deleted-message.jpg','level','===========\x20New\x20message\x20===========','antibot\x20','split','restartRequired','string','endsWith','\x20:\x20','./bdd/antilien','DisconnectReason','◇TRZ-MD◇\x0a','filter','child','find','fonction','protocolMessage','/auth/creds.json','group_id','yes','fetchLatestBaileysVersion','./bdd/antibot','✅\x20Successful\x20connection!\x20☺️','Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.','message','warn','@s.whatsapp.net','singleSelectReply','connectionLost','groupMetadata','msg','recording','reaction','ℹ️\x20Connexion\x20en\x20cours...','sendPresenceUpdate','keys','messages','*☢️𝐅𝐋𝐀𝐒𝐇-𝐌𝐃\x20is\x20Connected☢️*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a❒\x20𝐂𝐑𝐄𝐀𝐓𝐎𝐑:\x20𝐅𝐫𝐚𝐧𝐜𝐞\x20𝐊𝐢𝐧𝐠\x20\x20\x0a❒\x20PREFIX:\x20[\x20','slice','./bdd/banGroup','cache','bind','1.0.0','pino','PM_PERMIT','.\x20Consequently,\x20he\x20has\x20been\x20demonated\x20from\x20the\x20admin\x20sit.','PREFIXE','ETAT','Link\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','private','from','./bdd/banUser','Loading\x20Commands\x20...\x0a','Reboot\x20Error\x20😑','recupererToutesLesValeurs','shift','then','Session\x20Invalide\x20','configurable','contacts.upsert','call','1220328SCseIn','OWNER_NAME','ext','buttonsResponseMessage','text','goodbye','WARN_COUNT','Filter\x20must\x20be\x20a\x20function','254750948696','concat','An\x20Error\x20Occurred,\x20Repeat\x20Command!','etablissement\x20d\x27un\x20automute\x20pour\x20','author','public','assign','selectedRowId','contextInfo','remove','__importDefault','message\x20delete\x20\x0a\x20@','selectedButtonId','readdirSync','connecting','./bdd/onlyAdmin','./bdd/sudo','group-participants.update','delay','#000000','resolve','hummm','------\x20message\x20content\x20------','NUMERO_OWNER','connectionReplaced','\x20H\x20','FULL','safari','downloadContentFromMessage','unavailable','Timeout\x20must\x20be\x20a\x20number','Good\x20morning;\x20It\x27s\x20time\x20to\x20open\x20the\x20group.','groupParticipantsUpdate','TRZ-Md','https://','store','useMultiFileAuthState','pushName','getContentType','welcome','audio','user','server','available','imageMessage','prototype','startsWith','\x20removed\x20from\x20group.','s.whatsapp.net','Timeout','message\x20type\x20:\x20','/auth','key','default','2354212ftMuDn','connection.update','Commands\x20successfully\x20Loaded\x20✅','/commands','\x20has\x20violated\x20the\x20anti-demotion\x20rule\x20by\x20removing\x20@','MODE','store.json','caption','get','readMessages','3432982EtyNJq','reactionMessage','NOM_OWNER','------','writable','120363158701337904@g.us','./bdd/mention','admin','Les\x20crons\x20n\x27ont\x20pas\x20été\x20activés'];_0x2b7f=function(){return _0x4bcd42;};return _0x2b7f();}const store=(0x0,baileys_1[_0x6bc3ea(0x235)])({'logger':pino()[_0x6bc3ea(0x2ca)]({'level':_0x6bc3ea(0x2a1),'stream':_0x6bc3ea(0x202)})});setTimeout(()=>{const _0x2d4459=_0x6bc3ea;async function _0x3aaec6(){const _0x5c5d71=_0x55d3,{version:_0x2fde3d,isLatest:_0x50b63c}=await(0x0,baileys_1[_0x5c5d71(0x2d1)])(),{state:_0x54b2fa,saveCreds:_0x46bfaf}=await(0x0,baileys_1[_0x5c5d71(0x203)])(__dirname+_0x5c5d71(0x212)),_0x43694b={'version':_0x2fde3d,'logger':pino({'level':_0x5c5d71(0x2a1)}),'browser':[_0x5c5d71(0x200),_0x5c5d71(0x1fa),_0x5c5d71(0x2e7)],'printQRInTerminal':!![],'fireInitQueries':![],'shouldSyncHistoryMessage':!![],'downloadHistory':!![],'syncFullHistory':!![],'generateHighQualityLinkPreview':!![],'markOnlineOnConnect':![],'keepAliveIntervalMs':0x7530,'auth':{'creds':_0x54b2fa['creds'],'keys':(0x0,baileys_1['makeCacheableSignalKeyStore'])(_0x54b2fa[_0x5c5d71(0x2e0)],logger)},'getMessage':async _0x1acfe0=>{const _0x361af6=_0x5c5d71;if(store){const _0x46f4e2=await store['loadMessage'](_0x1acfe0[_0x361af6(0x29e)],_0x1acfe0['id'],undefined);return _0x46f4e2[_0x361af6(0x2d5)]||undefined;}return{'conversation':_0x361af6(0x1e1)};}},_0x54915e=(0x0,baileys_1[_0x5c5d71(0x214)])(_0x43694b);store[_0x5c5d71(0x2e6)](_0x54915e['ev']),setInterval(()=>{const _0x54e207=_0x5c5d71;store['writeToFile'](_0x54e207(0x21b));},0xbb8),_0x54915e['ev']['on']('messages.upsert',async _0x3725f0=>{const _0xfb7ec3=_0x5c5d71,{messages:_0x1eee02}=_0x3725f0,_0x4c7ae7=_0x1eee02[0x0];if(!_0x4c7ae7[_0xfb7ec3(0x2d5)])return;const _0x39b55e=_0x4a8639=>{const _0x3a29c5=_0xfb7ec3;if(!_0x4a8639)return _0x4a8639;if(/:\d+@/gi[_0x3a29c5(0x232)](_0x4a8639)){let _0x3b86c2=(0x0,baileys_1[_0x3a29c5(0x2b3)])(_0x4a8639)||{};return _0x3b86c2[_0x3a29c5(0x208)]&&_0x3b86c2[_0x3a29c5(0x209)]&&_0x3b86c2[_0x3a29c5(0x208)]+'@'+_0x3b86c2['server']||_0x4a8639;}else return _0x4a8639;};var _0x2fcd31=(0x0,baileys_1[_0xfb7ec3(0x205)])(_0x4c7ae7[_0xfb7ec3(0x2d5)]),_0x5ee996=_0x2fcd31==_0xfb7ec3(0x255)?_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x255)]:_0x2fcd31==_0xfb7ec3(0x20b)?_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x20b)]?.[_0xfb7ec3(0x21c)]:_0x2fcd31==_0xfb7ec3(0x246)?_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x246)]?.[_0xfb7ec3(0x21c)]:_0x2fcd31==_0xfb7ec3(0x264)?_0x4c7ae7[_0xfb7ec3(0x2d5)]?.['extendedTextMessage']?.[_0xfb7ec3(0x1db)]:_0x2fcd31=='buttonsResponseMessage'?_0x4c7ae7?.[_0xfb7ec3(0x2d5)]?.[_0xfb7ec3(0x1da)]?.[_0xfb7ec3(0x1eb)]:_0x2fcd31==_0xfb7ec3(0x2ba)?_0x4c7ae7[_0xfb7ec3(0x2d5)]?.[_0xfb7ec3(0x2ba)]?.[_0xfb7ec3(0x2d8)]?.[_0xfb7ec3(0x1e6)]:_0x2fcd31==_0xfb7ec3(0x269)?_0x4c7ae7?.[_0xfb7ec3(0x2d5)]?.[_0xfb7ec3(0x1da)]?.[_0xfb7ec3(0x1eb)]||_0x4c7ae7[_0xfb7ec3(0x2d5)]?.['listResponseMessage']?.[_0xfb7ec3(0x2d8)]?.[_0xfb7ec3(0x1e6)]||_0x4c7ae7['text']:'',_0x30f6ef=_0x4c7ae7[_0xfb7ec3(0x213)][_0xfb7ec3(0x29e)],_0x2b438f=_0x39b55e(_0x54915e[_0xfb7ec3(0x208)]['id']),_0x5758bb=_0x2b438f[_0xfb7ec3(0x2c1)]('@')[0x0];const _0x40d387=_0x30f6ef?.[_0xfb7ec3(0x2c4)](_0xfb7ec3(0x249));var _0x25aecf=_0x40d387?await _0x54915e[_0xfb7ec3(0x2da)](_0x30f6ef):'',_0x640525=_0x40d387?_0x25aecf['subject']:'',_0x5aaad5=_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x264)]?.['contextInfo']?.[_0xfb7ec3(0x24b)],_0x3f294f=_0x39b55e(_0x4c7ae7[_0xfb7ec3(0x2d5)]?.[_0xfb7ec3(0x264)]?.[_0xfb7ec3(0x1e7)]?.[_0xfb7ec3(0x26f)]),_0x73f8e1=_0x4c7ae7['message']?.['extendedTextMessage']?.[_0xfb7ec3(0x1e7)]?.[_0xfb7ec3(0x258)],_0x450f5b=_0x73f8e1?_0x73f8e1:_0x5aaad5?_0x3f294f:'',_0x1f6de3=_0x40d387?_0x4c7ae7['key']['participant']?_0x4c7ae7[_0xfb7ec3(0x213)][_0xfb7ec3(0x26f)]:_0x4c7ae7['participant']:_0x30f6ef;_0x4c7ae7['key'][_0xfb7ec3(0x296)]&&(_0x1f6de3=_0x2b438f);var _0x5e3578=_0x40d387?_0x4c7ae7[_0xfb7ec3(0x213)][_0xfb7ec3(0x26f)]:'';const {getAllSudoNumbers:_0x38666e}=require(_0xfb7ec3(0x1ef)),_0x4cd692=_0x4c7ae7[_0xfb7ec3(0x204)],_0x447ce4=_0xfb7ec3(0x293),_0x37ce71='254757835036',_0x2b2a9d=_0xfb7ec3(0x1df),_0x380abe='254751284109',_0x186b47=await _0x38666e(),_0x311abd=[_0x5758bb,_0x447ce4,_0x37ce71,_0x2b2a9d,_0x380abe,conf[_0xfb7ec3(0x1f6)]][_0xfb7ec3(0x2a5)](_0x7318f6=>_0x7318f6[_0xfb7ec3(0x248)](/[^0-9]/g)+'@s.whatsapp.net'),_0x33bf21=_0x311abd['concat'](_0x186b47),_0x24d84b=_0x33bf21[_0xfb7ec3(0x262)](_0x1f6de3);var _0xb0f099=[_0x447ce4,_0x37ce71,_0x2b2a9d,_0x380abe][_0xfb7ec3(0x2a5)](_0x1b59ae=>_0x1b59ae['replace'](/[^0-9]/g)+_0xfb7ec3(0x2d7))[_0xfb7ec3(0x262)](_0x1f6de3);function _0x56f396(_0x49c6d8){const _0x5ae8b6=_0xfb7ec3;_0x54915e[_0x5ae8b6(0x2bc)](_0x30f6ef,{'text':_0x49c6d8},{'quoted':_0x4c7ae7});}console[_0xfb7ec3(0x27f)]('\x09\x20[][]...{TRZ-MD}...[][]'),console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x2bf));_0x40d387&&console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x253)+_0x640525);console['log'](_0xfb7ec3(0x294)+'['+_0x4cd692+_0xfb7ec3(0x2c5)+_0x1f6de3[_0xfb7ec3(0x2c1)]('@s.whatsapp.net')[0x0]+'\x20]'),console['log'](_0xfb7ec3(0x211)+_0x2fcd31),console['log'](_0xfb7ec3(0x1f5)),console['log'](_0x5ee996);function _0x3022c0(_0x2d14ff){const _0x5ad0ed=_0xfb7ec3;let _0x203e69=[];for(_0x3725f0 of _0x2d14ff){if(_0x3725f0[_0x5ad0ed(0x226)]==null)continue;_0x203e69['push'](_0x3725f0['id']);}return _0x203e69;}var _0x192b68=conf[_0xfb7ec3(0x2ec)];if(_0x192b68==0x1)await _0x54915e['sendPresenceUpdate'](_0xfb7ec3(0x20a),_0x30f6ef);else{if(_0x192b68==0x2)await _0x54915e[_0xfb7ec3(0x2df)]('composing',_0x30f6ef);else _0x192b68==0x3?await _0x54915e[_0xfb7ec3(0x2df)](_0xfb7ec3(0x2dc),_0x30f6ef):await _0x54915e[_0xfb7ec3(0x2df)](_0xfb7ec3(0x1fc),_0x30f6ef);}const _0xf4d20=_0x40d387?await _0x25aecf['participants']:'';let _0x162d9e=_0x40d387?_0x3022c0(_0xf4d20):'';const _0x4dac52=_0x40d387?_0x162d9e[_0xfb7ec3(0x262)](_0x1f6de3):![];var _0x45802c=_0x40d387?_0x162d9e[_0xfb7ec3(0x262)](_0x2b438f):![];const _0x256ae7=_0x5ee996?_0x5ee996['trim']()['split'](/ +/)[_0xfb7ec3(0x2e3)](0x1):null,_0x3721f4=_0x5ee996?_0x5ee996[_0xfb7ec3(0x20d)](prefixe):![],_0x41467b=_0x3721f4?_0x5ee996[_0xfb7ec3(0x2e3)](0x1)[_0xfb7ec3(0x268)]()[_0xfb7ec3(0x2c1)](/ +/)[_0xfb7ec3(0x1d1)]()[_0xfb7ec3(0x244)]():![],_0x1a9885=conf['URL'][_0xfb7ec3(0x2c1)](',');function _0x1bb5e3(){const _0x1c84c3=_0xfb7ec3,_0x1c41e2=Math[_0x1c84c3(0x254)](Math[_0x1c84c3(0x237)]()*_0x1a9885['length']),_0x5a8205=_0x1a9885[_0x1c41e2];return _0x5a8205;}var _0x57d196={'superUser':_0x24d84b,'dev':_0xb0f099,'verifGroupe':_0x40d387,'mbre':_0xf4d20,'membreGroupe':_0x5e3578,'verifAdmin':_0x4dac52,'infosGroupe':_0x25aecf,'nomGroupe':_0x640525,'auteurMessage':_0x1f6de3,'nomAuteurMessage':_0x4cd692,'idBot':_0x2b438f,'verifZokouAdmin':_0x45802c,'prefixe':prefixe,'arg':_0x256ae7,'repondre':_0x56f396,'mtype':_0x2fcd31,'groupeAdmin':_0x3022c0,'msgRepondu':_0x5aaad5,'auteurMsgRepondu':_0x3f294f,'ms':_0x4c7ae7,'mybotpic':_0x1bb5e3};if(_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x2cd)]&&_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x2cd)][_0xfb7ec3(0x22c)]===0x0&&conf[_0xfb7ec3(0x233)][_0xfb7ec3(0x297)]()===_0xfb7ec3(0x2d0)){if(_0x4c7ae7[_0xfb7ec3(0x213)][_0xfb7ec3(0x296)]||_0x4c7ae7['message'][_0xfb7ec3(0x2cd)]['key']['fromMe']){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x26d));return;}console[_0xfb7ec3(0x27f)]('Message\x20supprimer');let _0x2b3505=_0x4c7ae7['message'][_0xfb7ec3(0x2cd)][_0xfb7ec3(0x213)];try{let _0x1ce24a='./store.json';const _0x13bac4=fs[_0xfb7ec3(0x273)](_0x1ce24a,_0xfb7ec3(0x2ab)),_0x5e559e=JSON['parse'](_0x13bac4);let _0x44d898=_0x5e559e[_0xfb7ec3(0x2e1)][_0x2b3505[_0xfb7ec3(0x29e)]],_0x5da583;for(let _0x286fbf=0x0;_0x286fbf<_0x44d898[_0xfb7ec3(0x23d)];_0x286fbf++){if(_0x44d898[_0x286fbf][_0xfb7ec3(0x213)]['id']===_0x2b3505['id']){_0x5da583=_0x44d898[_0x286fbf];break;}}if(_0x5da583===null||!_0x5da583||_0x5da583==='undefined'){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x231));return;}await _0x54915e[_0xfb7ec3(0x2bc)](_0x2b438f,{'image':{'url':_0xfb7ec3(0x2bd)},'caption':_0xfb7ec3(0x280)+_0x5da583[_0xfb7ec3(0x213)][_0xfb7ec3(0x26f)]['split']('@')[0x0]+'​','mentions':[_0x5da583[_0xfb7ec3(0x213)][_0xfb7ec3(0x26f)]]})[_0xfb7ec3(0x1d2)](()=>{_0x54915e['sendMessage'](_0x2b438f,{'forward':_0x5da583},{'quoted':_0x5da583});});}catch(_0xad9596){console[_0xfb7ec3(0x27f)](_0xad9596);}}_0x4c7ae7[_0xfb7ec3(0x213)]&&_0x4c7ae7['key']['remoteJid']==='status@broadcast'&&conf['AUTO_READ_STATUS']===_0xfb7ec3(0x2d0)&&await _0x54915e[_0xfb7ec3(0x21e)]([_0x4c7ae7['key']]);if(_0x4c7ae7[_0xfb7ec3(0x213)]&&_0x4c7ae7[_0xfb7ec3(0x213)][_0xfb7ec3(0x29e)]===_0xfb7ec3(0x287)&&conf[_0xfb7ec3(0x279)]===_0xfb7ec3(0x2d0)){if(_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x264)]){var _0x12cbf1=_0x4c7ae7[_0xfb7ec3(0x2d5)]['extendedTextMessage']['text'];await _0x54915e['sendMessage'](_0x2b438f,{'text':_0x12cbf1},{'quoted':_0x4c7ae7});}else{if(_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x20b)]){var _0x2ffe89=_0x4c7ae7[_0xfb7ec3(0x2d5)]['imageMessage']['caption'],_0x12475c=await _0x54915e[_0xfb7ec3(0x29d)](_0x4c7ae7[_0xfb7ec3(0x2d5)][_0xfb7ec3(0x20b)]);await _0x54915e[_0xfb7ec3(0x2bc)](_0x2b438f,{'image':{'url':_0x12475c},'caption':_0x2ffe89},{'quoted':_0x4c7ae7});}else{if(_0x4c7ae7['message']['videoMessage']){var _0x2ffe89=_0x4c7ae7[_0xfb7ec3(0x2d5)]['videoMessage'][_0xfb7ec3(0x21c)],_0xc34a90=await _0x54915e[_0xfb7ec3(0x29d)](_0x4c7ae7['message'][_0xfb7ec3(0x246)]);await _0x54915e[_0xfb7ec3(0x2bc)](_0x2b438f,{'video':{'url':_0xc34a90},'caption':_0x2ffe89},{'quoted':_0x4c7ae7});}}}}if(!_0xb0f099&&_0x30f6ef==_0xfb7ec3(0x224))return;if(_0x5ee996&&_0x1f6de3[_0xfb7ec3(0x2c4)](_0xfb7ec3(0x20f))){const {ajouterOuMettreAJourUserData:_0x5d91f8}=require('./bdd/level');try{await _0x5d91f8(_0x1f6de3);}catch(_0x1f1092){console[_0xfb7ec3(0x28c)](_0x1f1092);}}try{if(_0x4c7ae7['message'][_0x2fcd31][_0xfb7ec3(0x1e7)][_0xfb7ec3(0x258)]&&(_0x4c7ae7['message'][_0x2fcd31][_0xfb7ec3(0x1e7)]['mentionedJid'][_0xfb7ec3(0x262)](_0x2b438f)||_0x4c7ae7[_0xfb7ec3(0x2d5)][_0x2fcd31]['contextInfo'][_0xfb7ec3(0x258)][_0xfb7ec3(0x262)](conf['NUMERO_OWNER']+_0xfb7ec3(0x2d7)))){if(_0x30f6ef==_0xfb7ec3(0x224))return;;if(_0x24d84b){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x1f4));return;}let _0x386f38=require(_0xfb7ec3(0x225)),_0x341d5a=await _0x386f38[_0xfb7ec3(0x1d0)](),_0x398e68=_0x341d5a[0x0];if(_0x398e68[_0xfb7ec3(0x299)]==='non'){console[_0xfb7ec3(0x27f)]('mention\x20pas\x20actifs');return;}let _0x512241;if(_0x398e68[_0xfb7ec3(0x22c)][_0xfb7ec3(0x297)]()===_0xfb7ec3(0x257))_0x512241={'image':{'url':_0x398e68[_0xfb7ec3(0x261)]},'caption':_0x398e68['message']};else{if(_0x398e68[_0xfb7ec3(0x22c)][_0xfb7ec3(0x297)]()===_0xfb7ec3(0x277))_0x512241={'video':{'url':_0x398e68[_0xfb7ec3(0x261)]},'caption':_0x398e68[_0xfb7ec3(0x2d5)]};else{if(_0x398e68[_0xfb7ec3(0x22c)][_0xfb7ec3(0x297)]()==='sticker'){let _0x1a04cc=new Sticker(_0x398e68[_0xfb7ec3(0x261)],{'pack':conf[_0xfb7ec3(0x221)],'type':StickerTypes[_0xfb7ec3(0x1f9)],'categories':['🤩','🎉'],'id':_0xfb7ec3(0x25f),'quality':0x46,'background':_0xfb7ec3(0x241)});const _0x2a21f7=await _0x1a04cc['toBuffer']();_0x512241={'sticker':_0x2a21f7};}else _0x398e68['type'][_0xfb7ec3(0x297)]()===_0xfb7ec3(0x207)&&(_0x512241={'audio':{'url':_0x398e68[_0xfb7ec3(0x261)]},'mimetype':_0xfb7ec3(0x2a6)});}}_0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,_0x512241,{'quoted':_0x4c7ae7});}}catch(_0x2c1da6){}try{const _0x4d5ba5=await verifierEtatJid(_0x30f6ef);if(_0x5ee996[_0xfb7ec3(0x262)](_0xfb7ec3(0x201))&&_0x40d387&&_0x4d5ba5){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x284));var _0x5695ed=_0x40d387?_0x162d9e[_0xfb7ec3(0x262)](_0x2b438f):![];if(_0x24d84b||_0x4dac52||!_0x5695ed){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x2a4));return;};const _0x1a244e={'remoteJid':_0x30f6ef,'fromMe':![],'id':_0x4c7ae7['key']['id'],'participant':_0x1f6de3};var _0x56b950=_0xfb7ec3(0x230);const _0x5f3c52=_0xfb7ec3(0x28b);var _0x2a49d7=new Sticker(_0x5f3c52,{'pack':_0xfb7ec3(0x200),'author':conf[_0xfb7ec3(0x1d8)],'type':StickerTypes[_0xfb7ec3(0x1f9)],'categories':['🤩','🎉'],'id':_0xfb7ec3(0x25f),'quality':0x32,'background':'#000000'});await _0x2a49d7[_0xfb7ec3(0x2a3)](_0xfb7ec3(0x2b5));var _0x4a88c8=await recupererActionJid(_0x30f6ef);if(_0x4a88c8===_0xfb7ec3(0x1e8)){_0x56b950+=_0xfb7ec3(0x24f)+_0x1f6de3['split']('@')[0x0]+'\x20removed\x20from\x20group.',await _0x54915e['sendMessage'](_0x30f6ef,{'sticker':fs[_0xfb7ec3(0x273)]('st1.webp')}),(0x0,baileys_1[_0xfb7ec3(0x1f1)])(0x320),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x56b950,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7});try{await _0x54915e[_0xfb7ec3(0x1ff)](_0x30f6ef,[_0x1f6de3],'remove');}catch(_0x75b535){console[_0xfb7ec3(0x27f)]('antiien\x20')+_0x75b535;}await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x1a244e}),await fs[_0xfb7ec3(0x2b9)](_0xfb7ec3(0x2b5));}else{if(_0x4a88c8===_0xfb7ec3(0x25b))_0x56b950+='Goodbye\x20\x0a\x20@'+_0x1f6de3[_0xfb7ec3(0x2c1)]('@')[0x0]+'\x20Sending\x20other\x20group\x20links\x20here\x20is\x20prohibited!.',await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x56b950,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x1a244e}),await fs[_0xfb7ec3(0x2b9)](_0xfb7ec3(0x2b5));else{if(_0x4a88c8==='warn'){const {getWarnCountByJID:_0x3769ee,ajouterUtilisateurAvecWarnCount:_0x1e0553}=require(_0xfb7ec3(0x236));let _0x5e7570=await _0x3769ee(_0x1f6de3),_0x2f2745=conf['WARN_COUNT'];if(_0x5e7570>=_0x2f2745){var _0x5a7940='link\x20detected\x20,\x20you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit';await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x5a7940,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e[_0xfb7ec3(0x1ff)](_0x30f6ef,[_0x1f6de3],_0xfb7ec3(0x1e8)),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x1a244e});}else{var _0x1fa3c0=_0x2f2745-_0x5e7570,_0x12d012=_0xfb7ec3(0x2ed)+_0x1fa3c0+'\x20';await _0x1e0553(_0x1f6de3),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x12d012,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e['sendMessage'](_0x30f6ef,{'delete':_0x1a244e});}}}}}}catch(_0x3787be){console['log'](_0xfb7ec3(0x22e)+_0x3787be);}try{const _0x5487d3=_0x4c7ae7[_0xfb7ec3(0x213)]?.['id']?.[_0xfb7ec3(0x20d)]('BAES')&&_0x4c7ae7[_0xfb7ec3(0x213)]?.['id']?.[_0xfb7ec3(0x23d)]===0x10,_0x1e93bb=_0x4c7ae7[_0xfb7ec3(0x213)]?.['id']?.['startsWith'](_0xfb7ec3(0x29a))&&_0x4c7ae7['key']?.['id']?.[_0xfb7ec3(0x23d)]===0x10;if(_0x5487d3||_0x1e93bb){if(_0x2fcd31===_0xfb7ec3(0x220)){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x263));return;};const _0x4f1385=await atbverifierEtatJid(_0x30f6ef);if(!_0x4f1385)return;;if(_0x4dac52||_0x1f6de3===_0x2b438f){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x2a4));return;};const _0x23bdb4={'remoteJid':_0x30f6ef,'fromMe':![],'id':_0x4c7ae7[_0xfb7ec3(0x213)]['id'],'participant':_0x1f6de3};var _0x56b950='bot\x20detected,\x20\x0a';const _0x3b8720=_0xfb7ec3(0x28b);var _0x2a49d7=new Sticker(_0x3b8720,{'pack':_0xfb7ec3(0x200),'author':conf['OWNER_NAME'],'type':StickerTypes[_0xfb7ec3(0x1f9)],'categories':['🤩','🎉'],'id':_0xfb7ec3(0x25f),'quality':0x32,'background':_0xfb7ec3(0x1f2)});await _0x2a49d7[_0xfb7ec3(0x2a3)](_0xfb7ec3(0x2b5));var _0x4a88c8=await atbrecupererActionJid(_0x30f6ef);if(_0x4a88c8===_0xfb7ec3(0x1e8)){_0x56b950+=_0xfb7ec3(0x24f)+_0x1f6de3['split']('@')[0x0]+_0xfb7ec3(0x20e),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'sticker':fs[_0xfb7ec3(0x273)](_0xfb7ec3(0x2b5))}),(0x0,baileys_1[_0xfb7ec3(0x1f1)])(0x320),await _0x54915e['sendMessage'](_0x30f6ef,{'text':_0x56b950,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7});try{await _0x54915e['groupParticipantsUpdate'](_0x30f6ef,[_0x1f6de3],_0xfb7ec3(0x1e8));}catch(_0xd1e164){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x2c0))+_0xd1e164;}await _0x54915e['sendMessage'](_0x30f6ef,{'delete':_0x23bdb4}),await fs[_0xfb7ec3(0x2b9)](_0xfb7ec3(0x2b5));}else{if(_0x4a88c8===_0xfb7ec3(0x25b))_0x56b950+=_0xfb7ec3(0x1ea)+_0x1f6de3['split']('@')[0x0]+'\x20Avoid\x20sending\x20link.',await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x56b950,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x23bdb4}),await fs[_0xfb7ec3(0x2b9)]('st1.webp');else{if(_0x4a88c8===_0xfb7ec3(0x2d6)){const {getWarnCountByJID:_0x386135,ajouterUtilisateurAvecWarnCount:_0x2abe5b}=require(_0xfb7ec3(0x236));let _0x397c0a=await _0x386135(_0x1f6de3),_0x584773=conf[_0xfb7ec3(0x1dd)];if(_0x397c0a>=_0x584773){var _0x5a7940=_0xfb7ec3(0x2a9);await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x5a7940,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e[_0xfb7ec3(0x1ff)](_0x30f6ef,[_0x1f6de3],_0xfb7ec3(0x1e8)),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x23bdb4});}else{var _0x1fa3c0=_0x584773-_0x397c0a,_0x12d012='bot\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20'+_0x1fa3c0+'\x20';await _0x2abe5b(_0x1f6de3),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':_0x12d012,'mentions':[_0x1f6de3]},{'quoted':_0x4c7ae7}),await _0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'delete':_0x23bdb4});}}}}}}catch(_0x422f4b){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x22f)+_0x422f4b);}if(_0x3721f4){const _0x5cb68f=evt['cm'][_0xfb7ec3(0x2cb)](_0x13c2c4=>_0x13c2c4[_0xfb7ec3(0x26a)]===_0x41467b);if(_0x5cb68f)try{if(conf[_0xfb7ec3(0x21a)][_0xfb7ec3(0x297)]()!=_0xfb7ec3(0x2d0)&&!_0x24d84b)return;if(!_0x24d84b&&_0x30f6ef===_0x1f6de3&&conf[_0xfb7ec3(0x2e9)]===_0xfb7ec3(0x2d0)){_0x56f396(_0xfb7ec3(0x267));return;}if(!_0x24d84b&&_0x40d387){let _0x4d2ebc=await isGroupBanned(_0x30f6ef);if(_0x4d2ebc)return;}if(!_0x4dac52&&_0x40d387){let _0x4ec0ff=await isGroupOnlyAdmin(_0x30f6ef);if(_0x4ec0ff)return;}if(!_0x24d84b){let _0x313b04=await isUserBanned(_0x1f6de3);if(_0x313b04){_0x56f396(_0xfb7ec3(0x2af));return;}}reagir(_0x30f6ef,_0x54915e,_0x4c7ae7,_0x5cb68f[_0xfb7ec3(0x2dd)]),_0x5cb68f[_0xfb7ec3(0x2cc)](_0x30f6ef,_0x54915e,_0x57d196);}catch(_0x351d7e){console[_0xfb7ec3(0x27f)](_0xfb7ec3(0x239)+_0x351d7e),_0x54915e[_0xfb7ec3(0x2bc)](_0x30f6ef,{'text':'😡😡\x20'+_0x351d7e},{'quoted':_0x4c7ae7});}}});const {recupevents:_0x37dad3}=require('./bdd/welcome');_0x54915e['ev']['on'](_0x5c5d71(0x1f0),async _0x282883=>{const _0x101b53=_0x5c5d71;console[_0x101b53(0x27f)](_0x282883);let _0x2c1b52;try{_0x2c1b52=await _0x54915e['profilePictureUrl'](_0x282883['id'],_0x101b53(0x257));}catch{_0x2c1b52=_0x101b53(0x2a8);}try{const _0x3813d8=await _0x54915e[_0x101b53(0x2da)](_0x282883['id']);if(_0x282883[_0x101b53(0x26e)]==_0x101b53(0x24e)&&await _0x37dad3(_0x282883['id'],_0x101b53(0x206))=='on'){let _0x5d5554=_0x101b53(0x2c8),_0x9aa315=_0x282883['participants'];for(let _0xb4bb0b of _0x9aa315){_0x5d5554+='Hello\x20@'+_0xb4bb0b['split']('@')[0x0]+'\x0a';}_0x5d5554+=_0x101b53(0x250)+_0x3813d8[_0x101b53(0x275)]+_0x101b53(0x288),_0x54915e[_0x101b53(0x2bc)](_0x282883['id'],{'image':{'url':_0x2c1b52},'caption':_0x5d5554,'mentions':_0x9aa315});}else{if(_0x282883[_0x101b53(0x26e)]=='remove'&&await _0x37dad3(_0x282883['id'],_0x101b53(0x1dc))=='on'){let _0x305e43='Goodbye\x20to\x20that\x20Fallen\x20soldier,\x20Powered\x20by\x20*TRZ-MD*;\x0a',_0x214ca6=_0x282883[_0x101b53(0x27e)];for(let _0x3093e1 of _0x214ca6){_0x305e43+='@'+_0x3093e1['split']('@')[0x0]+'\x0a';}_0x54915e[_0x101b53(0x2bc)](_0x282883['id'],{'text':_0x305e43,'mentions':_0x214ca6});}else{if(_0x282883['action']=='promote'&&await _0x37dad3(_0x282883['id'],_0x101b53(0x22d))=='on'){if(_0x282883['author']==_0x3813d8[_0x101b53(0x256)]||_0x282883[_0x101b53(0x1e3)]==conf[_0x101b53(0x1f6)]+_0x101b53(0x2d7)||_0x282883[_0x101b53(0x1e3)]==decodeJid(_0x54915e[_0x101b53(0x208)]['id'])||_0x282883[_0x101b53(0x1e3)]==_0x282883[_0x101b53(0x27e)][0x0]){console[_0x101b53(0x27f)](_0x101b53(0x2a7));return;};await _0x54915e['groupParticipantsUpdate'](_0x282883['id'],[_0x282883[_0x101b53(0x1e3)],_0x282883[_0x101b53(0x27e)][0x0]],_0x101b53(0x23e)),_0x54915e[_0x101b53(0x2bc)](_0x282883['id'],{'text':'@'+_0x282883[_0x101b53(0x1e3)][_0x101b53(0x2c1)]('@')[0x0]+_0x101b53(0x26c)+_0x282883[_0x101b53(0x1e3)][_0x101b53(0x2c1)]('@')[0x0]+_0x101b53(0x251)+_0x282883[_0x101b53(0x27e)][0x0][_0x101b53(0x2c1)]('@')[0x0]+_0x101b53(0x265),'mentions':[_0x282883[_0x101b53(0x1e3)],_0x282883['participants'][0x0]]});}else{if(_0x282883['action']=='demote'&&await _0x37dad3(_0x282883['id'],_0x101b53(0x278))=='on'){if(_0x282883['author']==_0x3813d8[_0x101b53(0x256)]||_0x282883[_0x101b53(0x1e3)]==conf[_0x101b53(0x1f6)]+_0x101b53(0x2d7)||_0x282883[_0x101b53(0x1e3)]==decodeJid(_0x54915e[_0x101b53(0x208)]['id'])||_0x282883[_0x101b53(0x1e3)]==_0x282883[_0x101b53(0x27e)][0x0]){console[_0x101b53(0x27f)](_0x101b53(0x2a7));return;};await _0x54915e['groupParticipantsUpdate'](_0x282883['id'],[_0x282883[_0x101b53(0x1e3)]],'demote'),await _0x54915e[_0x101b53(0x1ff)](_0x282883['id'],[_0x282883[_0x101b53(0x27e)][0x0]],'promote'),_0x54915e[_0x101b53(0x2bc)](_0x282883['id'],{'text':'@'+_0x282883[_0x101b53(0x1e3)][_0x101b53(0x2c1)]('@')[0x0]+_0x101b53(0x219)+_0x282883[_0x101b53(0x27e)][0x0][_0x101b53(0x2c1)]('@')[0x0]+_0x101b53(0x2ea),'mentions':[_0x282883[_0x101b53(0x1e3)],_0x282883['participants'][0x0]]});}}}}}catch(_0x603930){console[_0x101b53(0x28c)](_0x603930);}});async function _0xcc7d81(){const _0x41308c=_0x5c5d71,_0x414427=require(_0x41308c(0x292)),{getCron:_0x3b64aa}=require(_0x41308c(0x240));let _0x4aac4d=await _0x3b64aa();console[_0x41308c(0x27f)](_0x4aac4d);if(_0x4aac4d[_0x41308c(0x23d)]>0x0)for(let _0x3efa45=0x0;_0x3efa45<_0x4aac4d['length'];_0x3efa45++){if(_0x4aac4d[_0x3efa45][_0x41308c(0x23c)]!=null){let _0x2ed7a2=_0x4aac4d[_0x3efa45][_0x41308c(0x23c)][_0x41308c(0x2c1)](':');console['log'](_0x41308c(0x1e2)+_0x4aac4d[_0x3efa45]['group_id']+'\x20a\x20'+_0x2ed7a2[0x0]+_0x41308c(0x1f8)+_0x2ed7a2[0x1]),_0x414427[_0x41308c(0x290)](_0x2ed7a2[0x1]+'\x20'+_0x2ed7a2[0x0]+'\x20*\x20*\x20*',async()=>{const _0x54182e=_0x41308c;await _0x54915e['groupSettingUpdate'](_0x4aac4d[_0x3efa45][_0x54182e(0x2cf)],_0x54182e(0x29b)),_0x54915e['sendMessage'](_0x4aac4d[_0x3efa45][_0x54182e(0x2cf)],{'image':{'url':_0x54182e(0x266)},'caption':_0x54182e(0x2d4)});},{'timezone':_0x41308c(0x252)});}if(_0x4aac4d[_0x3efa45]['unmute_at']!=null){let _0x54f26c=_0x4aac4d[_0x3efa45][_0x41308c(0x274)]['split'](':');console[_0x41308c(0x27f)](_0x41308c(0x295)+_0x54f26c[0x0]+_0x41308c(0x1f8)+_0x54f26c[0x1]+'\x20'),_0x414427[_0x41308c(0x290)](_0x54f26c[0x1]+'\x20'+_0x54f26c[0x0]+_0x41308c(0x2a2),async()=>{const _0x38591f=_0x41308c;await _0x54915e['groupSettingUpdate'](_0x4aac4d[_0x3efa45][_0x38591f(0x2cf)],'not_announcement'),_0x54915e[_0x38591f(0x2bc)](_0x4aac4d[_0x3efa45][_0x38591f(0x2cf)],{'image':{'url':_0x38591f(0x266)},'caption':_0x38591f(0x1fe)});},{'timezone':_0x41308c(0x252)});}}else console[_0x41308c(0x27f)](_0x41308c(0x227));return;}return _0x54915e['ev']['on'](_0x5c5d71(0x1d5),async _0x2c895d=>{const _0x3ed4d8=_0x1bd90f=>{const _0x1fe6f2=_0x55d3;for(const _0x452ecb of _0x1bd90f){store[_0x1fe6f2(0x27a)][_0x452ecb['id']]?Object[_0x1fe6f2(0x1e5)](store[_0x1fe6f2(0x27a)][_0x452ecb['id']],_0x452ecb):store[_0x1fe6f2(0x27a)][_0x452ecb['id']]=_0x452ecb;}return;};_0x3ed4d8(_0x2c895d);}),_0x54915e['ev']['on'](_0x5c5d71(0x216),async _0x41cbb4=>{const _0x8fd5f2=_0x5c5d71,{lastDisconnect:_0x237ded,connection:_0x225bdd}=_0x41cbb4;if(_0x225bdd===_0x8fd5f2(0x1ed))console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x2de));else{if(_0x225bdd===_0x8fd5f2(0x25c)){console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x2d3)),console[_0x8fd5f2(0x27f)]('--'),await(0x0,baileys_1[_0x8fd5f2(0x1f1)])(0xc8),console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x222)),await(0x0,baileys_1[_0x8fd5f2(0x1f1)])(0x12c),console['log'](_0x8fd5f2(0x28d)),console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x23b)),console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x1ce)),fs[_0x8fd5f2(0x1ec)](__dirname+_0x8fd5f2(0x218))[_0x8fd5f2(0x27d)](_0x15881f=>{const _0x34b158=_0x8fd5f2;if(path[_0x34b158(0x281)](_0x15881f)[_0x34b158(0x244)]()==_0x34b158(0x228)){try{require(__dirname+_0x34b158(0x26b)+_0x15881f),console[_0x34b158(0x27f)](_0x15881f+_0x34b158(0x25e));}catch(_0xf6423c){console['log'](_0x15881f+'\x20could\x20not\x20be\x20loaded\x20for\x20the\x20following\x20reasons\x20\x20:\x20'+_0xf6423c);}(0x0,baileys_1[_0x34b158(0x1f1)])(0x12c);}}),(0x0,baileys_1['delay'])(0x2bc);var _0x369558;if(conf[_0x8fd5f2(0x21a)][_0x8fd5f2(0x297)]()===_0x8fd5f2(0x2d0))_0x369558=_0x8fd5f2(0x1e4);else conf[_0x8fd5f2(0x21a)][_0x8fd5f2(0x297)]()==='no'?_0x369558=_0x8fd5f2(0x2ee):_0x369558=_0x8fd5f2(0x22a);console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x217)),await _0xcc7d81();if(conf['DP'][_0x8fd5f2(0x244)]()===_0x8fd5f2(0x2d0)){let _0xb0a499=_0x8fd5f2(0x2e2)+prefixe+'\x20]\x0a❒\x20MODE:\x20'+_0x369558+_0x8fd5f2(0x2ac)+evt['cm'][_0x8fd5f2(0x23d)]+_0x8fd5f2(0x286);await _0x54915e[_0x8fd5f2(0x2bc)](_0x54915e['user']['id'],{'text':_0xb0a499});}}else{if(_0x225bdd=='close'){let _0x57380b=new boom_1['Boom'](_0x237ded?.[_0x8fd5f2(0x28c)])?.[_0x8fd5f2(0x276)]['statusCode'];if(_0x57380b===baileys_1[_0x8fd5f2(0x2c7)]['badSession'])console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x29c));else{if(_0x57380b===baileys_1['DisconnectReason'][_0x8fd5f2(0x2ae)])console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x283)),_0x3aaec6();else{if(_0x57380b===baileys_1[_0x8fd5f2(0x2c7)][_0x8fd5f2(0x2d9)])console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x24c)),_0x3aaec6();else{if(_0x57380b===baileys_1[_0x8fd5f2(0x2c7)]?.[_0x8fd5f2(0x1f7)])console['log']('connection\x20replaced,,,\x20a\x20session\x20is\x20already\x20open,\x20please\x20close\x20it!!!');else{if(_0x57380b===baileys_1[_0x8fd5f2(0x2c7)]['loggedOut'])console['log'](_0x8fd5f2(0x2b2));else{if(_0x57380b===baileys_1[_0x8fd5f2(0x2c7)][_0x8fd5f2(0x2c2)])console[_0x8fd5f2(0x27f)]('Reboot\x20in\x20progress\x20▶️'),_0x3aaec6();else{console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x1cf),_0x57380b);const {exec:_0x1fdbe8}=require(_0x8fd5f2(0x29f));_0x1fdbe8(_0x8fd5f2(0x27b));}}}}}}console[_0x8fd5f2(0x27f)](_0x8fd5f2(0x2b0)+_0x225bdd),_0x3aaec6();}}}}),_0x54915e['ev']['on'](_0x5c5d71(0x2b4),_0x46bfaf),_0x54915e[_0x5c5d71(0x29d)]=async(_0x4a6d3e,_0xdb3c87='',_0x8db5eb=!![])=>{const _0x2a5fa7=_0x5c5d71;let _0x1f25c6=_0x4a6d3e['msg']?_0x4a6d3e[_0x2a5fa7(0x2db)]:_0x4a6d3e,_0x5693f7=(_0x4a6d3e['msg']||_0x4a6d3e)[_0x2a5fa7(0x2bb)]||'',_0x12d7cc=_0x4a6d3e['mtype']?_0x4a6d3e[_0x2a5fa7(0x234)]['replace'](/Message/gi,''):_0x5693f7[_0x2a5fa7(0x2c1)]('/')[0x0];const _0x205087=await(0x0,baileys_1[_0x2a5fa7(0x1fb)])(_0x1f25c6,_0x12d7cc);let _0x369e02=Buffer[_0x2a5fa7(0x1cc)]([]);for await(const _0xb3660a of _0x205087){_0x369e02=Buffer[_0x2a5fa7(0x1e0)]([_0x369e02,_0xb3660a]);}let _0x326ef3=await FileType[_0x2a5fa7(0x285)](_0x369e02),_0x3c6e42='./'+_0xdb3c87+'.'+_0x326ef3[_0x2a5fa7(0x1d9)];return await fs[_0x2a5fa7(0x2aa)](_0x3c6e42,_0x369e02),_0x3c6e42;},_0x54915e['awaitForMessage']=async(_0x5bb35e={})=>{return new Promise((_0x3964a3,_0x337f1b)=>{const _0x89174=_0x55d3;if(typeof _0x5bb35e!==_0x89174(0x28f))_0x337f1b(new Error(_0x89174(0x25a)));if(typeof _0x5bb35e['sender']!=='string')_0x337f1b(new Error('Sender\x20must\x20be\x20a\x20string'));if(typeof _0x5bb35e['chatJid']!==_0x89174(0x2c3))_0x337f1b(new Error(_0x89174(0x243)));if(_0x5bb35e[_0x89174(0x298)]&&typeof _0x5bb35e[_0x89174(0x298)]!==_0x89174(0x291))_0x337f1b(new Error(_0x89174(0x1fd)));if(_0x5bb35e[_0x89174(0x2c9)]&&typeof _0x5bb35e['filter']!==_0x89174(0x2b8))_0x337f1b(new Error(_0x89174(0x1de)));const _0x57e106=_0x5bb35e?.[_0x89174(0x298)]||undefined,_0x67f6d9=_0x5bb35e?.[_0x89174(0x2c9)]||(()=>!![]);let _0x2a2f5d=undefined,_0x68434d=_0x3034cc=>{const _0x11d8b1=_0x89174;let {type:_0x496a2b,messages:_0x5a926b}=_0x3034cc;if(_0x496a2b==_0x11d8b1(0x229))for(let _0x4d9e98 of _0x5a926b){const _0xe65a77=_0x4d9e98['key'][_0x11d8b1(0x296)],_0x3b5560=_0x4d9e98[_0x11d8b1(0x213)][_0x11d8b1(0x29e)],_0x379b3a=_0x3b5560[_0x11d8b1(0x2c4)](_0x11d8b1(0x249)),_0x427578=_0x3b5560==_0x11d8b1(0x287),_0x31290e=_0xe65a77?_0x54915e[_0x11d8b1(0x208)]['id']['replace'](/:.*@/g,'@'):_0x379b3a||_0x427578?_0x4d9e98['key']['participant']['replace'](/:.*@/g,'@'):_0x3b5560;_0x31290e==_0x5bb35e['sender']&&_0x3b5560==_0x5bb35e['chatJid']&&_0x67f6d9(_0x4d9e98)&&(_0x54915e['ev'][_0x11d8b1(0x259)](_0x11d8b1(0x247),_0x68434d),clearTimeout(_0x2a2f5d),_0x3964a3(_0x4d9e98));}};_0x54915e['ev']['on'](_0x89174(0x247),_0x68434d),_0x57e106&&(_0x2a2f5d=setTimeout(()=>{const _0x4972a0=_0x89174;_0x54915e['ev'][_0x4972a0(0x259)](_0x4972a0(0x247),_0x68434d),_0x337f1b(new Error(_0x4972a0(0x210)));},_0x57e106));});},_0x54915e;}let _0xd74932=require[_0x2d4459(0x1f3)](__filename);fs['watchFile'](_0xd74932,()=>{const _0x8a3397=_0x2d4459;fs[_0x8a3397(0x238)](_0xd74932),console['log'](_0x8a3397(0x242)+__filename),delete require[_0x8a3397(0x2e5)][_0xd74932],require(_0xd74932);}),_0x3aaec6();},0x1388);
