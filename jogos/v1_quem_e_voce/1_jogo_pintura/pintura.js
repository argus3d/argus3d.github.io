const _0x9c137e=_0x3e35;(function(_0x2e4a4f,_0x2fc70d){const _0x567c89=_0x3e35,_0x42f827=_0x2e4a4f();while(!![]){try{const _0x12fedf=-parseInt(_0x567c89(0xe0))/0x1*(-parseInt(_0x567c89(0xc9))/0x2)+parseInt(_0x567c89(0xb9))/0x3+-parseInt(_0x567c89(0xbb))/0x4*(parseInt(_0x567c89(0xe4))/0x5)+parseInt(_0x567c89(0xd2))/0x6+parseInt(_0x567c89(0xb4))/0x7+-parseInt(_0x567c89(0xb8))/0x8+parseInt(_0x567c89(0xe5))/0x9*(-parseInt(_0x567c89(0xde))/0xa);if(_0x12fedf===_0x2fc70d)break;else _0x42f827['push'](_0x42f827['shift']());}catch(_0x33b26d){_0x42f827['push'](_0x42f827['shift']());}}}(_0x19a1,0x770ec));var canvas=document[_0x9c137e(0xef)](_0x9c137e(0xe8)),divcanvas=document['getElementById'](_0x9c137e(0xc2));const context=canvas[_0x9c137e(0xbd)]('2d');var contorno=document['getElementById'](_0x9c137e(0xae)),cores=document[_0x9c137e(0xcb)](_0x9c137e(0xd6));const slider=document['querySelector']('.sliderPincel');function _0x3e35(_0x3c73d4,_0x2855f7){const _0x19a1ee=_0x19a1();return _0x3e35=function(_0x3e35fb,_0x131934){_0x3e35fb=_0x3e35fb-0xad;let _0x392854=_0x19a1ee[_0x3e35fb];return _0x392854;},_0x3e35(_0x3c73d4,_0x2855f7);}var strokeWidth=0xa;slider[_0x9c137e(0xb5)](_0x9c137e(0xc7),function(){const _0x561bbd=this['value'];strokeWidth=_0x561bbd;}),cores[_0x9c137e(0xb2)](_0x2fa5c6=>{const _0x3d6b0e=_0x9c137e;_0x2fa5c6[_0x3d6b0e(0xb5)](_0x3d6b0e(0xeb),function(){const _0x1845f1=_0x3d6b0e;colour=_0x2fa5c6[_0x1845f1(0xc5)]('data-cor'),_0x2fa5c6[_0x1845f1(0xe9)][_0x1845f1(0xbe)](_0x1845f1(0xf5))?context[_0x1845f1(0xb1)](0x0,0x0,rectcanvas[_0x1845f1(0xce)],rectcanvas[_0x1845f1(0xdd)]):(cores[_0x1845f1(0xb2)](_0x21f24a=>{const _0x56130b=_0x1845f1;_0x21f24a[_0x56130b(0xe9)][_0x56130b(0xc8)](_0x56130b(0xb3));}),_0x2fa5c6['classList'][_0x1845f1(0xb7)](_0x1845f1(0xb3)));});});let colour=_0x9c137e(0xee);const varyBrightness=0x5;var rectcanvas={'largura':window[_0x9c137e(0xcf)],'altura':window[_0x9c137e(0xec)]};canvas['width']=rectcanvas[_0x9c137e(0xce)],canvas[_0x9c137e(0xd4)]=rectcanvas[_0x9c137e(0xdd)];let latestPoint,drawing=![],currentAngle;const varyColour=_0xb4b737=>{const _0xc4d5ae=_0x9c137e,_0x2cdde7=Math['round'](Math[_0xc4d5ae(0xd9)]()*0x2*varyBrightness),_0x49751b=tinycolor(_0xb4b737),_0x24ad44=_0x2cdde7>varyBrightness?_0x49751b[_0xc4d5ae(0xd3)](_0x2cdde7-varyBrightness):_0x49751b[_0xc4d5ae(0xe2)](_0x2cdde7);return _0x24ad44[_0xc4d5ae(0xaf)]();},makeBrush=_0x172655=>{const _0x65d5b7=_0x9c137e,_0x2e55eb=[];let _0x3736d7=Math[_0x65d5b7(0xe7)](_0x172655/0x3);const _0x5d84d2=strokeWidth/_0x3736d7;for(let _0x583278=0x0;_0x583278<_0x3736d7;_0x583278++){const _0x3a88d9=_0x583278===0x0?0x0:_0x5d84d2*_0x583278+Math[_0x65d5b7(0xd9)]()*_0x5d84d2/0x2-_0x5d84d2/0x2;_0x2e55eb[_0x65d5b7(0xd1)]({'distance':_0x3a88d9,'thickness':Math[_0x65d5b7(0xd9)]()*0x2+0x2,'colour':varyColour(colour)});}return _0x2e55eb;};function _0x19a1(){const _0x17c599=['innerHeight','mousemove','#e286ae','getElementById','beginPath','touchcancel','mousedown','lineTo','touchmove','borracha','log','contornodesenho','toHexString','shadowColor','clearRect','forEach','active','1217811EWgHUJ','addEventListener','colour','add','33072kdwGWv','2146041ULjqfj','atan2','1844012DpwNSs','targetTouches','getContext','contains','preventDefault','mouseout','thickness','divCanvas','lineWidth','quadraticCurveTo','getAttribute','cos','input','remove','38hoewwX','top','querySelectorAll','buttons','clientX','largura','innerWidth','clientY','push','5612412KSOygX','brighten','height','lineCap','.lapis','offsetY','touchend','random','removeEventListener','mouseenter','offsetX','altura','310BRDDdi','moveTo','6173NXZkoF','strokeStyle','darken','distance','10KiNkjr','153351mEwtor','currentTarget','round','canvas','classList','mouseup','click'];_0x19a1=function(){return _0x17c599;};return _0x19a1();}let currentBrush=makeBrush(strokeWidth);const rotatePoint=(_0x4a5f22,_0x3e7144,_0x34026a)=>[_0x34026a[0x0]+_0x4a5f22*Math[_0x9c137e(0xc6)](_0x3e7144),_0x34026a[0x1]+_0x4a5f22*Math['sin'](_0x3e7144)],getBearing=(_0x34c37a,_0x1ac3eb)=>(Math[_0x9c137e(0xba)](_0x1ac3eb[0x1]-_0x34c37a[0x1],_0x1ac3eb[0x0]-_0x34c37a[0x0])-Math['PI']/0x2)%(Math['PI']*0x2),getNewAngle=(_0x301cc7,_0x296df1,_0x70b473)=>{const _0x5a931c=_0x9c137e,_0x5ec063=getBearing(_0x301cc7,_0x296df1);if(typeof _0x70b473==='undefined')return console[_0x5a931c(0xad)](_0x5ec063),_0x5ec063;return _0x70b473-angleDiff(_0x70b473,_0x5ec063);},angleDiff=(_0xfc492,_0x577ac2)=>{const _0x3be8e2=Math['PI']*0x2,_0x24305d=(_0xfc492-(_0x577ac2>0x0?_0x577ac2:_0x577ac2+_0x3be8e2)+Math['PI'])%_0x3be8e2-Math['PI'];return _0x24305d<-Math['PI']?_0x24305d+_0x3be8e2:_0x24305d;},strokeBristle=(_0x3af101,_0x123b37,_0x46210a,_0x5e203b)=>{const _0x3f24d5=_0x9c137e;context[_0x3f24d5(0xf0)](),context[_0x3f24d5(0xdf)](_0x3af101[0x0],_0x3af101[0x1]),context[_0x3f24d5(0xe1)]=_0x46210a[_0x3f24d5(0xb6)],context[_0x3f24d5(0xc3)]=_0x46210a[_0x3f24d5(0xc1)],context[_0x3f24d5(0xd5)]=_0x3f24d5(0xe7),context['lineJoin']=_0x3f24d5(0xe7),context[_0x3f24d5(0xb0)]=_0x46210a[_0x3f24d5(0xb6)],context['shadowBlur']=_0x46210a[_0x3f24d5(0xc1)]/0x2,context[_0x3f24d5(0xc4)](_0x5e203b[0x0],_0x5e203b[0x1],_0x123b37[0x0],_0x123b37[0x1]),context[_0x3f24d5(0xf3)](_0x123b37[0x0],_0x123b37[0x1]),context['stroke']();},drawStroke=(_0x48772,_0x5de941,_0x54d6bf,_0x3e9910,_0x5a9e33)=>{const _0x30c3fd=_0x9c137e;_0x48772[_0x30c3fd(0xb2)](_0x3fb721=>{const _0x17eb00=_0x30c3fd;context['beginPath']();const _0x364353=rotatePoint(_0x3fb721[_0x17eb00(0xe3)]-strokeWidth/0x2,_0x3e9910,_0x5de941),_0x1c2117=rotatePoint(_0x3fb721[_0x17eb00(0xe3)]-strokeWidth/0x2,_0x5a9e33,_0x54d6bf),_0x8d18aa=rotatePoint(_0x3fb721[_0x17eb00(0xe3)]-strokeWidth/0x2,_0x5a9e33,_0x5de941);strokeBristle(_0x364353,_0x1c2117,_0x3fb721,_0x8d18aa);});},continueStroke=_0x4fdd14=>{const _0x1283bf=getNewAngle(latestPoint,_0x4fdd14,currentAngle);drawStroke(currentBrush,latestPoint,_0x4fdd14,currentAngle,_0x1283bf),currentAngle=_0x1283bf%(Math['PI']*0x2),latestPoint=_0x4fdd14;},startStroke=_0x4434db=>{currentAngle=undefined,currentBrush=makeBrush(strokeWidth),drawing=!![],latestPoint=_0x4434db;},getTouchPoint=_0x2ca655=>{const _0x380871=_0x9c137e;if(!_0x2ca655[_0x380871(0xe6)])return[0x0,0x0];const _0x36fb0f=_0x2ca655[_0x380871(0xe6)]['getBoundingClientRect'](),_0x158a85=_0x2ca655[_0x380871(0xbc)][0x0];return[_0x158a85[_0x380871(0xcd)]-_0x36fb0f['left'],_0x158a85[_0x380871(0xd0)]-_0x36fb0f[_0x380871(0xca)]];},BUTTON=0x1,mouseButtonIsDown=_0x33ebf1=>(BUTTON&_0x33ebf1)===BUTTON,mouseMove=_0x18403b=>{const _0x547a7f=_0x9c137e;if(!drawing)return;continueStroke([_0x18403b[_0x547a7f(0xdc)],_0x18403b[_0x547a7f(0xd7)]]);},mouseDown=_0x3c7a1d=>{const _0x5a31be=_0x9c137e;if(drawing)return;_0x3c7a1d[_0x5a31be(0xbf)](),canvas['addEventListener'](_0x5a31be(0xed),mouseMove,![]),startStroke([_0x3c7a1d[_0x5a31be(0xdc)],_0x3c7a1d[_0x5a31be(0xd7)]]);},mouseEnter=_0x3d7454=>{const _0x3c84cf=_0x9c137e;if(!mouseButtonIsDown(_0x3d7454[_0x3c84cf(0xcc)])||drawing)return;mouseDown(_0x3d7454);},endStroke=_0x47c8eb=>{const _0x4023f9=_0x9c137e;if(!drawing)return;drawing=![],_0x47c8eb[_0x4023f9(0xe6)][_0x4023f9(0xda)](_0x4023f9(0xed),mouseMove,![]);},touchStart=_0x57e526=>{const _0x135aff=_0x9c137e;if(drawing)return;_0x57e526[_0x135aff(0xbf)](),startStroke(getTouchPoint(_0x57e526));},touchMove=_0x39e272=>{if(!drawing)return;continueStroke(getTouchPoint(_0x39e272));},touchEnd=_0x179e34=>{drawing=![];};canvas['addEventListener']('touchstart',touchStart,![]),canvas[_0x9c137e(0xb5)](_0x9c137e(0xd8),touchEnd,![]),canvas[_0x9c137e(0xb5)](_0x9c137e(0xf1),touchEnd,![]),canvas[_0x9c137e(0xb5)](_0x9c137e(0xf4),touchMove,![]),canvas['addEventListener'](_0x9c137e(0xf2),mouseDown,![]),canvas[_0x9c137e(0xb5)](_0x9c137e(0xea),endStroke,![]),canvas[_0x9c137e(0xb5)](_0x9c137e(0xc0),endStroke,![]),canvas['addEventListener'](_0x9c137e(0xdb),mouseEnter,![]);