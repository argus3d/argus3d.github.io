var a0_0x4e7b94=a0_0xc61d;(function(_0x505b47,_0x24231e){var _0xc50b6c=a0_0xc61d,_0x3c7e39=_0x505b47();while(!![]){try{var _0x1f5963=parseInt(_0xc50b6c(0xf5))/0x1+-parseInt(_0xc50b6c(0xf0))/0x2+-parseInt(_0xc50b6c(0x108))/0x3+parseInt(_0xc50b6c(0xef))/0x4*(-parseInt(_0xc50b6c(0x106))/0x5)+-parseInt(_0xc50b6c(0xee))/0x6+-parseInt(_0xc50b6c(0x109))/0x7+parseInt(_0xc50b6c(0x10b))/0x8*(parseInt(_0xc50b6c(0xfb))/0x9);if(_0x1f5963===_0x24231e)break;else _0x3c7e39['push'](_0x3c7e39['shift']());}catch(_0x2fa259){_0x3c7e39['push'](_0x3c7e39['shift']());}}}(a0_0x56cd,0xd5c7c));const rows=0xe,cols=0x9,words=[a0_0x4e7b94(0x102),a0_0x4e7b94(0xf3),a0_0x4e7b94(0xe5),a0_0x4e7b94(0xfd),a0_0x4e7b94(0x104),a0_0x4e7b94(0xed)],matrixX=0xfa,matrixY=0xa,squareSize=0x32;var matrix=[['R','E','S','T','P','A','T','Z','D'],['A','I','C','S','Ã','O','O','A','I'],['C','A','A','D','O','P','L','M','V'],['E','B','U','A','I','I','E','I','E'],['I','V','M','I','N','A','R','R','R'],['T','O','A','L','C','G','Â','I','S'],['A','C','E','S','L','A','N','R','I'],['Ç','I','I','N','U','N','C','E','D'],['Ã','A','V','E','S','I','I','S','A'],['O','T','S','U','Ã','C','A','A','D'],['I','Ç','Ã','O','O','O','P','D','E'],['E','M','P','A','T','I','A','O','A'],['N','D','E','R','P','O','N','A','P'],['E','D','A','D','L','A','U','G','I']],found=[],prevCell=null,currCell=null,currSelection=null;function setup(){var _0xfcfd82=a0_0x4e7b94;let _0x184eea=createCanvas(0x320,0x320);_0x184eea['parent'](_0xfcfd82(0x101));}function draw(){clear(),display(),checkMouse();}function displayBackground(){noStroke(),background(0xf1,0x45,0x28),fill(0x2a,0x3b,0x55),circle(-0x5a,0x12c,0x190);}function checkMouse(){if(!mouseIsPressed){validateSelection(),prevCell=null,currCell=null,currSelection=null;return;}if(!prevCell)prevCell=findCell(mouseX,mouseY);var _0xc7820b=findCell(mouseX,mouseY);if(_0xc7820b)currCell=_0xc7820b;currSelection=findSelection();}function validateSelection(){var _0x25981a=a0_0x4e7b94,_0x27ca59=selectedWord();if(!_0x27ca59)return;if(foundWord(_0x27ca59))return;if(words[_0x25981a(0xe8)](_0x27ca59))addFound(_0x27ca59,currSelection);found[_0x25981a(0xf4)]===words[_0x25981a(0xf4)]&&trocaTela(_0x25981a(0xf8),_0x25981a(0x101));}function findCell(_0x41868a,_0x34e79d){var _0x1f45f8=a0_0x4e7b94,_0x51d5bb=Math[_0x1f45f8(0xff)]((_0x41868a-matrixX)/squareSize),_0x4f89bf=Math[_0x1f45f8(0xff)]((_0x34e79d-matrixY)/squareSize);if(_0x51d5bb<0x0||_0x51d5bb>=cols||_0x4f89bf<0x0||_0x4f89bf>=rows)return null;return{'row':_0x4f89bf,'col':_0x51d5bb};}function display(){displayMatrix(),displaySelection(),displayWords();}function displayMatrix(){var _0x143006=a0_0x4e7b94;push(),textAlign(CENTER,CENTER);for(var _0xcfbba1=0x0;_0xcfbba1<matrix[_0x143006(0xf4)];_0xcfbba1++){var _0xaf180a=matrix[_0xcfbba1];for(var _0x40528c=0x0;_0x40528c<_0xaf180a[_0x143006(0xf4)];_0x40528c++){var _0x1bef26=_0xaf180a[_0x40528c],_0x207e88=matrixX+_0x40528c*squareSize,_0x5a00c8=matrixY+_0xcfbba1*squareSize;stroke(0x0);var _0x5a8fff=isSelected(_0xcfbba1,_0x40528c)?_0x143006(0xfc):foundCell(_0xcfbba1,_0x40528c)?_0x143006(0x107):_0x143006(0xf7);fill(_0x5a8fff),rect(_0x207e88,_0x5a00c8,squareSize,squareSize),noStroke(),fill(0x0),text(_0x1bef26,_0x207e88+squareSize/0x2,_0x5a00c8+squareSize/0x2);}}pop();}function selectedWord(){var _0x74a95f=a0_0x4e7b94;if(!currSelection)return'';var _0x3e33e5='';for(var _0x415fe7 of currSelection){_0x3e33e5+=_0x415fe7[_0x74a95f(0xfe)];}return _0x3e33e5;}function a0_0x56cd(){var _0x2933cf=['innerHeight','addEventListener','row','TOLERÂNCIA','10322862jkjVwQ','1437508QPfeRi','3415880iouucx','white','marginTop','IGUALDADE','length','109888qLbvoa','#divCanvas','White','telaFim','resize','width','11565deWEqb','LightBlue','EMPATIA','chr','floor','word','divCanvas','ACEITAÇÃO','push','INCLUSÃO','col','15vIqLaD','Pink','4187910wpopcu','4341722bpiBFA','marginLeft','45376rNfzcS','yellow','height','DIVERSIDADE','css','cells','includes','innerWidth'];a0_0x56cd=function(){return _0x2933cf;};return a0_0x56cd();}function displaySelection(){var _0x457809=selectedWord();if(!_0x457809)return;push(),noStroke(),fill(0x0),textSize(0x20),text(_0x457809,matrixX,matrixY+(rows+0x1)*squareSize),pop();}function displayWords(){var _0x2da1b9=a0_0x4e7b94;push(),noStroke();for(var _0x436440=0x0;_0x436440<words[_0x2da1b9(0xf4)];_0x436440++){fill(foundWord(words[_0x436440])?_0x2da1b9(0x10c):_0x2da1b9(0xf1)),textSize(0x1c),text(words[_0x436440],0x28,matrixY+0xfa+_0x436440*0x32);}pop();}function findSelection(){if(!prevCell||!currCell)return null;return hSelection()||vSelection()||dSelection();}function hSelection(){var _0x32fb99=a0_0x4e7b94;if(!prevCell||!currCell)return null;if(prevCell[_0x32fb99(0xec)]!=currCell[_0x32fb99(0xec)])return null;var _0x42d562=[],_0xa8ed1d=prevCell[_0x32fb99(0x105)]<=currCell[_0x32fb99(0x105)]?0x1:-0x1;for(var _0x50c640=prevCell[_0x32fb99(0x105)];_0x50c640!=currCell[_0x32fb99(0x105)]+_0xa8ed1d;_0x50c640+=_0xa8ed1d){var _0x2ebf5d=prevCell[_0x32fb99(0xec)],_0x3d1cbf=matrix[_0x2ebf5d][_0x50c640];_0x42d562[_0x32fb99(0x103)]({'row':_0x2ebf5d,'col':_0x50c640,'chr':_0x3d1cbf});}return _0x42d562;}function vSelection(){var _0x879e45=a0_0x4e7b94;if(!prevCell||!currCell)return null;if(prevCell['col']!=currCell[_0x879e45(0x105)])return null;var _0x848aae=[],_0x449c2c=prevCell[_0x879e45(0xec)]<=currCell[_0x879e45(0xec)]?0x1:-0x1;for(var _0x1d8956=prevCell['row'];_0x1d8956!=currCell['row']+_0x449c2c;_0x1d8956+=_0x449c2c){var _0x19a5de=prevCell[_0x879e45(0x105)],_0x483981=matrix[_0x1d8956][_0x19a5de];_0x848aae[_0x879e45(0x103)]({'row':_0x1d8956,'col':_0x19a5de,'chr':_0x483981});}return _0x848aae;}function dSelection(){var _0xf7bc5=a0_0x4e7b94;if(!prevCell||!currCell)return null;if(abs(currCell['row']-prevCell['row'])!=abs(currCell[_0xf7bc5(0x105)]-prevCell[_0xf7bc5(0x105)]))return null;var _0x2717af=[],_0x297698=prevCell[_0xf7bc5(0x105)]<=currCell[_0xf7bc5(0x105)]?0x1:-0x1,_0x3a6650=prevCell[_0xf7bc5(0xec)]<=currCell['row']?0x1:-0x1,_0x525d17=prevCell[_0xf7bc5(0xec)],_0x36960e=prevCell[_0xf7bc5(0x105)];while(_0x525d17!=currCell[_0xf7bc5(0xec)]+_0x3a6650&&_0x36960e!=currCell[_0xf7bc5(0x105)]+_0x297698){var _0x5437c4=matrix[_0x525d17][_0x36960e];_0x2717af['push']({'row':_0x525d17,'col':_0x36960e,'chr':_0x5437c4}),_0x525d17+=_0x3a6650,_0x36960e+=_0x297698;}return _0x2717af;}function isSelected(_0x4eb76d,_0x435f3e){var _0x40d272=a0_0x4e7b94;if(!currSelection)return![];for(var _0x1e851a of currSelection){if(_0x1e851a[_0x40d272(0xec)]===_0x4eb76d&&_0x1e851a[_0x40d272(0x105)]===_0x435f3e)return!![];}return![];}function addFound(_0x1e3d4c,_0x7e1f89){var _0x41aa0a=a0_0x4e7b94;found[_0x41aa0a(0x103)]({'word':_0x1e3d4c,'cells':_0x7e1f89});}function a0_0xc61d(_0x17ebde,_0x28db63){var _0x56cd05=a0_0x56cd();return a0_0xc61d=function(_0xc61d49,_0xa23be2){_0xc61d49=_0xc61d49-0xe5;var _0x56372a=_0x56cd05[_0xc61d49];return _0x56372a;},a0_0xc61d(_0x17ebde,_0x28db63);}function foundWord(_0x227dfc){var _0x13e6ae=a0_0x4e7b94;for(var _0x233db2 of found){if(_0x233db2[_0x13e6ae(0x100)]===_0x227dfc)return!![];}return![];}function foundCell(_0x189f01,_0x2c93f3){var _0x2a11ea=a0_0x4e7b94;for(var _0x2815ca of found){for(var _0x2f0ea3 of _0x2815ca[_0x2a11ea(0xe7)]){if(_0x2f0ea3[_0x2a11ea(0xec)]===_0x189f01&&_0x2f0ea3[_0x2a11ea(0x105)]===_0x2c93f3)return!![];}}return![];}var $divCanvas=$(a0_0x4e7b94(0xf6));retornaOrientacaoVideo($divCanvas);function resizeGame(){retornaOrientacaoVideo($divCanvas);}window[a0_0x4e7b94(0xeb)](a0_0x4e7b94(0xf9),resizeGame,![]),window['addEventListener']('orientationchange',resizeGame,![]);function retornaOrientacaoVideo(_0x45441b){var _0x3c4abb=a0_0x4e7b94,_0x58a0dc=0x320/0x320,_0x5ce5e3=window[_0x3c4abb(0xe9)],_0x1ee699=window[_0x3c4abb(0xea)],_0x1d9f11=_0x5ce5e3/_0x1ee699;$imgAtual=$(_0x45441b),_0x1d9f11>_0x58a0dc?(_0x5ce5e3=_0x1ee699*_0x58a0dc,$imgAtual[_0x3c4abb(0xe6)]('marginLeft',(window['innerWidth']-_0x5ce5e3)/0x2+'px'),$imgAtual['css'](_0x3c4abb(0xf2),(window['innerHeight']-_0x1ee699)/0x2+'px')):(_0x1ee699=_0x5ce5e3/_0x58a0dc,$imgAtual['css'](_0x3c4abb(0x10a),(window[_0x3c4abb(0xe9)]-_0x5ce5e3)/0x2+'px'),$imgAtual[_0x3c4abb(0xe6)](_0x3c4abb(0xf2),(window[_0x3c4abb(0xea)]-_0x1ee699)/0x2+'px')),$imgAtual[_0x3c4abb(0xe6)](_0x3c4abb(0xfa),_0x5ce5e3+'px'),$imgAtual[_0x3c4abb(0xe6)](_0x3c4abb(0x10d),_0x1ee699+'px');}