const _0x5e5cc8=_0x49c6;function _0x49c6(_0x246625,_0x23003d){const _0x1558f4=_0x1558();return _0x49c6=function(_0x49c6d9,_0x8613cd){_0x49c6d9=_0x49c6d9-0x1c6;let _0x49a7ea=_0x1558f4[_0x49c6d9];return _0x49a7ea;},_0x49c6(_0x246625,_0x23003d);}function _0x1558(){const _0x20f7c0=['currentTarget','touchmove','atan2','cos','11IEjwWX','distance','buttons','4BnDMMV','shadowColor','value','getBoundingClientRect','1436xcSDFI','touchend','mouseup','200vnYOyN','brighten','offsetY','lineCap','colour','touchcancel','touchstart','mousemove','lineJoin','round','beginPath','top','targetTouches','shadowBlur','mouseout','addEventListener','3278510nnZWsz','colourInput','14640564TNBRLK','2715FcNkxO','clientX','4566QVSbNS','307035zqltjn','canvas','left','clientY','darken','random','377302ofXRPi','getElementById','toHexString','push','331010vJLIkL','preventDefault','2275wzkoOe','thickness','quadraticCurveTo','removeEventListener'];_0x1558=function(){return _0x20f7c0;};return _0x1558();}(function(_0x37b4e0,_0x3efdb7){const _0x448937=_0x49c6,_0x30dc69=_0x37b4e0();while(!![]){try{const _0xcd0a9c=-parseInt(_0x448937(0x1d0))/0x1*(parseInt(_0x448937(0x1f3))/0x2)+parseInt(_0x448937(0x1ea))/0x3*(-parseInt(_0x448937(0x1d4))/0x4)+parseInt(_0x448937(0x1f7))/0x5+parseInt(_0x448937(0x1ec))/0x6*(-parseInt(_0x448937(0x1f9))/0x7)+-parseInt(_0x448937(0x1d7))/0x8*(-parseInt(_0x448937(0x1ed))/0x9)+-parseInt(_0x448937(0x1e7))/0xa+parseInt(_0x448937(0x1cd))/0xb*(parseInt(_0x448937(0x1e9))/0xc);if(_0xcd0a9c===_0x3efdb7)break;else _0x30dc69['push'](_0x30dc69['shift']());}catch(_0xdfb2a6){_0x30dc69['push'](_0x30dc69['shift']());}}}(_0x1558,0x76461));let colour;const strokeWidth=0x19,varyBrightness=0x5;let latestPoint,drawing=![],currentAngle;const canvas=document[_0x5e5cc8(0x1f4)](_0x5e5cc8(0x1ee)),context=canvas['getContext']('2d'),varyColour=_0x30e93b=>{const _0x791437=_0x5e5cc8,_0x52280e=Math[_0x791437(0x1e0)](Math[_0x791437(0x1f2)]()*0x2*varyBrightness),_0x1d83bd=tinycolor(_0x30e93b),_0x38283a=_0x52280e>varyBrightness?_0x1d83bd[_0x791437(0x1d8)](_0x52280e-varyBrightness):_0x1d83bd[_0x791437(0x1f1)](_0x52280e);return _0x38283a[_0x791437(0x1f5)]();},makeBrush=_0x132310=>{const _0x27447a=_0x5e5cc8,_0x5f1c13=[];let _0x42a441=Math[_0x27447a(0x1e0)](_0x132310/0x3);const _0x5c7e97=strokeWidth/_0x42a441;for(let _0x3e3bf8=0x0;_0x3e3bf8<_0x42a441;_0x3e3bf8++){const _0x34535a=_0x3e3bf8===0x0?0x0:_0x5c7e97*_0x3e3bf8+Math[_0x27447a(0x1f2)]()*_0x5c7e97/0x2-_0x5c7e97/0x2;_0x5f1c13[_0x27447a(0x1f6)]({'distance':_0x34535a,'thickness':Math[_0x27447a(0x1f2)]()*0x2+0x2,'colour':varyColour(colour)});}return _0x5f1c13;};let currentBrush=makeBrush(strokeWidth);const rotatePoint=(_0x49f586,_0x1dfd9f,_0x18a2a2)=>[_0x18a2a2[0x0]+_0x49f586*Math[_0x5e5cc8(0x1cc)](_0x1dfd9f),_0x18a2a2[0x1]+_0x49f586*Math['sin'](_0x1dfd9f)],getBearing=(_0x49faaa,_0x2b4b14)=>(Math[_0x5e5cc8(0x1cb)](_0x2b4b14[0x1]-_0x49faaa[0x1],_0x2b4b14[0x0]-_0x49faaa[0x0])-Math['PI']/0x2)%(Math['PI']*0x2),getNewAngle=(_0x11133e,_0x56c3fb,_0x337efc)=>{const _0x429ee7=getBearing(_0x11133e,_0x56c3fb);if(typeof _0x337efc==='undefined')return console['log'](_0x429ee7),_0x429ee7;return _0x337efc-angleDiff(_0x337efc,_0x429ee7);},angleDiff=(_0x587988,_0x4c3e81)=>{const _0x23cea5=Math['PI']*0x2,_0x17ccc=(_0x587988-(_0x4c3e81>0x0?_0x4c3e81:_0x4c3e81+_0x23cea5)+Math['PI'])%_0x23cea5-Math['PI'];return _0x17ccc<-Math['PI']?_0x17ccc+_0x23cea5:_0x17ccc;},strokeBristle=(_0x362baa,_0x222278,_0x51032b,_0x740b94)=>{const _0x2c2ee8=_0x5e5cc8;context['beginPath'](),context['moveTo'](_0x362baa[0x0],_0x362baa[0x1]),context['strokeStyle']=_0x51032b['colour'],context['lineWidth']=_0x51032b[_0x2c2ee8(0x1c6)],context[_0x2c2ee8(0x1da)]='round',context[_0x2c2ee8(0x1df)]=_0x2c2ee8(0x1e0),context[_0x2c2ee8(0x1d1)]=_0x51032b[_0x2c2ee8(0x1db)],context[_0x2c2ee8(0x1e4)]=_0x51032b[_0x2c2ee8(0x1c6)]/0x2,context[_0x2c2ee8(0x1c7)](_0x740b94[0x0],_0x740b94[0x1],_0x222278[0x0],_0x222278[0x1]),context['lineTo'](_0x222278[0x0],_0x222278[0x1]),context['stroke']();},drawStroke=(_0x113cad,_0x415d21,_0x507f9c,_0x33ce6a,_0x448ea0)=>{_0x113cad['forEach'](_0xe142b9=>{const _0x3d5124=_0x49c6;context[_0x3d5124(0x1e1)]();const _0x2a7729=rotatePoint(_0xe142b9['distance']-strokeWidth/0x2,_0x33ce6a,_0x415d21),_0xc7a947=rotatePoint(_0xe142b9[_0x3d5124(0x1ce)]-strokeWidth/0x2,_0x448ea0,_0x507f9c),_0x33b7b2=rotatePoint(_0xe142b9[_0x3d5124(0x1ce)]-strokeWidth/0x2,_0x448ea0,_0x415d21);strokeBristle(_0x2a7729,_0xc7a947,_0xe142b9,_0x33b7b2);});},continueStroke=_0x783c40=>{const _0x4d973f=getNewAngle(latestPoint,_0x783c40,currentAngle);drawStroke(currentBrush,latestPoint,_0x783c40,currentAngle,_0x4d973f),currentAngle=_0x4d973f%(Math['PI']*0x2),latestPoint=_0x783c40;},startStroke=_0x41b900=>{const _0x3eafa5=_0x5e5cc8;colour=document[_0x3eafa5(0x1f4)](_0x3eafa5(0x1e8))[_0x3eafa5(0x1d2)],currentAngle=undefined,currentBrush=makeBrush(strokeWidth),drawing=!![],latestPoint=_0x41b900;},getTouchPoint=_0x3ef28e=>{const _0x526bd2=_0x5e5cc8;if(!_0x3ef28e[_0x526bd2(0x1c9)])return[0x0,0x0];const _0x1aac76=_0x3ef28e[_0x526bd2(0x1c9)][_0x526bd2(0x1d3)](),_0x5a79dd=_0x3ef28e[_0x526bd2(0x1e3)][0x0];return[_0x5a79dd[_0x526bd2(0x1eb)]-_0x1aac76[_0x526bd2(0x1ef)],_0x5a79dd[_0x526bd2(0x1f0)]-_0x1aac76[_0x526bd2(0x1e2)]];},BUTTON=0x1,mouseButtonIsDown=_0x4b78ef=>(BUTTON&_0x4b78ef)===BUTTON,mouseMove=_0x58eecb=>{const _0x4f90c2=_0x5e5cc8;if(!drawing)return;continueStroke([_0x58eecb['offsetX'],_0x58eecb[_0x4f90c2(0x1d9)]]);},mouseDown=_0x5bb081=>{const _0x535d81=_0x5e5cc8;if(drawing)return;_0x5bb081[_0x535d81(0x1f8)](),canvas[_0x535d81(0x1e6)](_0x535d81(0x1de),mouseMove,![]),startStroke([_0x5bb081['offsetX'],_0x5bb081['offsetY']]);},mouseEnter=_0x4c9807=>{const _0x378b1b=_0x5e5cc8;if(!mouseButtonIsDown(_0x4c9807[_0x378b1b(0x1cf)])||drawing)return;mouseDown(_0x4c9807);},endStroke=_0x2a95f1=>{const _0x2af364=_0x5e5cc8;if(!drawing)return;drawing=![],_0x2a95f1['currentTarget'][_0x2af364(0x1c8)](_0x2af364(0x1de),mouseMove,![]);},touchStart=_0x535084=>{if(drawing)return;_0x535084['preventDefault'](),startStroke(getTouchPoint(_0x535084));},touchMove=_0x5d420c=>{if(!drawing)return;continueStroke(getTouchPoint(_0x5d420c));},touchEnd=_0x27e6ea=>{drawing=![];};canvas[_0x5e5cc8(0x1e6)](_0x5e5cc8(0x1dd),touchStart,![]),canvas[_0x5e5cc8(0x1e6)](_0x5e5cc8(0x1d5),touchEnd,![]),canvas[_0x5e5cc8(0x1e6)](_0x5e5cc8(0x1dc),touchEnd,![]),canvas['addEventListener'](_0x5e5cc8(0x1ca),touchMove,![]),canvas[_0x5e5cc8(0x1e6)]('mousedown',mouseDown,![]),canvas[_0x5e5cc8(0x1e6)](_0x5e5cc8(0x1d6),endStroke,![]),canvas[_0x5e5cc8(0x1e6)](_0x5e5cc8(0x1e5),endStroke,![]),canvas[_0x5e5cc8(0x1e6)]('mouseenter',mouseEnter,![]);