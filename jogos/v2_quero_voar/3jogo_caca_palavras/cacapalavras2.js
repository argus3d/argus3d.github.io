var _0x5f4d86=_0xba6b;(function(_0x47e8ad,_0x1eab44){var _0x3b8ae0=_0xba6b,_0x425115=_0x47e8ad();while(!![]){try{var _0x294226=parseInt(_0x3b8ae0(0xdb))/0x1+parseInt(_0x3b8ae0(0xbd))/0x2+-parseInt(_0x3b8ae0(0xbf))/0x3*(parseInt(_0x3b8ae0(0xca))/0x4)+parseInt(_0x3b8ae0(0xc5))/0x5+-parseInt(_0x3b8ae0(0xce))/0x6+-parseInt(_0x3b8ae0(0xd5))/0x7*(parseInt(_0x3b8ae0(0xc3))/0x8)+parseInt(_0x3b8ae0(0xcf))/0x9;if(_0x294226===_0x1eab44)break;else _0x425115['push'](_0x425115['shift']());}catch(_0x55f127){_0x425115['push'](_0x425115['shift']());}}}(_0x4705,0x3f405));const rows=0xe,cols=0x9,words=[_0x5f4d86(0xcb),_0x5f4d86(0xc6),'ADMIRAÇÃO',_0x5f4d86(0xc9),_0x5f4d86(0xd8),'RESPEITO'],matrixX=0xfa,matrixY=0xa,squareSize=0x32;var matrix=[['J','Q','V','N','R','G','I','T','A'],['V','O','A','O','S','A','N','P','C'],['W','Ã','R','I','D','M','S','I','E'],['K','Ç','I','T','R','E','P','R','I'],['Z','A','A','C','E','S','I','C','T'],['X','R','B','N','S','Z','R','S','A'],['O','I','L','U','P','A','A','A','Ç'],['A','M','E','F','E','L','Ç','V','Ã'],['E','D','O','C','I','E','Ã','A','O'],['F','A','Y','H','T','G','O','A','Y'],['E','Y','U','C','O','R','H','P','Y'],['U','I','S','F','R','I','O','A','Y'],['H','A','M','I','Z','A','D','E','Y'],['R','W','O','C','R','P','O','A','Y']],found=[],prevCell=null,currCell=null,currSelection=null;function setup(){var _0x29b033=_0x5f4d86;let _0x1f7aa5=createCanvas(0x320,0x320);_0x1f7aa5[_0x29b033(0xc0)](_0x29b033(0xcd));}function draw(){clear(),display(),checkMouse();}function displayBackground(){noStroke(),background(0xf1,0x45,0x28),fill(0x2a,0x3b,0x55),circle(-0x5a,0x12c,0x190);}function checkMouse(){if(!mouseIsPressed){validateSelection(),prevCell=null,currCell=null,currSelection=null;return;}if(!prevCell)prevCell=findCell(mouseX,mouseY);var _0x245505=findCell(mouseX,mouseY);if(_0x245505)currCell=_0x245505;currSelection=findSelection();}function validateSelection(){var _0x40dfbb=_0x5f4d86,_0x164ff8=selectedWord();if(!_0x164ff8)return;if(foundWord(_0x164ff8))return;if(words[_0x40dfbb(0xc4)](_0x164ff8))addFound(_0x164ff8,currSelection);found[_0x40dfbb(0xdc)]===words['length']&&trocaTela(_0x40dfbb(0xbe),_0x40dfbb(0xcd));}function findCell(_0x1459ce,_0x31b602){var _0x43cb0a=_0x5f4d86,_0x2f392b=Math[_0x43cb0a(0xc1)]((_0x1459ce-matrixX)/squareSize),_0x8bf5c7=Math['floor']((_0x31b602-matrixY)/squareSize);if(_0x2f392b<0x0||_0x2f392b>=cols||_0x8bf5c7<0x0||_0x8bf5c7>=rows)return null;return{'row':_0x8bf5c7,'col':_0x2f392b};}function display(){displayMatrix(),displaySelection(),displayWords();}function displayMatrix(){var _0x313d72=_0x5f4d86;push(),textAlign(CENTER,CENTER);for(var _0x16c6fd=0x0;_0x16c6fd<matrix[_0x313d72(0xdc)];_0x16c6fd++){var _0x3e0210=matrix[_0x16c6fd];for(var _0x46e4bd=0x0;_0x46e4bd<_0x3e0210[_0x313d72(0xdc)];_0x46e4bd++){var _0xb9b0ea=_0x3e0210[_0x46e4bd],_0x1dcb76=matrixX+_0x46e4bd*squareSize,_0x10a512=matrixY+_0x16c6fd*squareSize;stroke(0x0);var _0x829a0f=isSelected(_0x16c6fd,_0x46e4bd)?_0x313d72(0xdf):foundCell(_0x16c6fd,_0x46e4bd)?_0x313d72(0xd9):_0x313d72(0xde);fill(_0x829a0f),rect(_0x1dcb76,_0x10a512,squareSize,squareSize),noStroke(),fill(0x0),text(_0xb9b0ea,_0x1dcb76+squareSize/0x2,_0x10a512+squareSize/0x2);}}pop();}function selectedWord(){var _0x3c16e8=_0x5f4d86;if(!currSelection)return'';var _0x471d39='';for(var _0xef9698 of currSelection){_0x471d39+=_0xef9698[_0x3c16e8(0xd2)];}return _0x471d39;}function displaySelection(){var _0x286f2b=selectedWord();if(!_0x286f2b)return;push(),noStroke(),fill(0x0),textSize(0x20),text(_0x286f2b,matrixX,matrixY+(rows+0x1)*squareSize),pop();}function displayWords(){var _0x14f69c=_0x5f4d86;push(),noStroke();for(var _0x2fd960=0x0;_0x2fd960<words[_0x14f69c(0xdc)];_0x2fd960++){fill(foundWord(words[_0x2fd960])?_0x14f69c(0xc2):_0x14f69c(0xbc)),textSize(0x1c),text(words[_0x2fd960],0x28,matrixY+0xfa+_0x2fd960*0x32);}pop();}function findSelection(){if(!prevCell||!currCell)return null;return hSelection()||vSelection()||dSelection();}function hSelection(){var _0x2e667e=_0x5f4d86;if(!prevCell||!currCell)return null;if(prevCell['row']!=currCell[_0x2e667e(0xd0)])return null;var _0x30078b=[],_0x2ad74e=prevCell[_0x2e667e(0xcc)]<=currCell[_0x2e667e(0xcc)]?0x1:-0x1;for(var _0x34a758=prevCell['col'];_0x34a758!=currCell['col']+_0x2ad74e;_0x34a758+=_0x2ad74e){var _0x41ad9e=prevCell[_0x2e667e(0xd0)],_0x1ee4cb=matrix[_0x41ad9e][_0x34a758];_0x30078b[_0x2e667e(0xe2)]({'row':_0x41ad9e,'col':_0x34a758,'chr':_0x1ee4cb});}return _0x30078b;}function vSelection(){var _0x1beba8=_0x5f4d86;if(!prevCell||!currCell)return null;if(prevCell[_0x1beba8(0xcc)]!=currCell[_0x1beba8(0xcc)])return null;var _0x1d88d8=[],_0x2e7185=prevCell[_0x1beba8(0xd0)]<=currCell[_0x1beba8(0xd0)]?0x1:-0x1;for(var _0x2207f9=prevCell[_0x1beba8(0xd0)];_0x2207f9!=currCell['row']+_0x2e7185;_0x2207f9+=_0x2e7185){var _0x50e58a=prevCell[_0x1beba8(0xcc)],_0x46e8cd=matrix[_0x2207f9][_0x50e58a];_0x1d88d8[_0x1beba8(0xe2)]({'row':_0x2207f9,'col':_0x50e58a,'chr':_0x46e8cd});}return _0x1d88d8;}function dSelection(){var _0x40cebe=_0x5f4d86;if(!prevCell||!currCell)return null;if(abs(currCell[_0x40cebe(0xd0)]-prevCell[_0x40cebe(0xd0)])!=abs(currCell[_0x40cebe(0xcc)]-prevCell[_0x40cebe(0xcc)]))return null;var _0x2a6aad=[],_0x2f6c1b=prevCell['col']<=currCell[_0x40cebe(0xcc)]?0x1:-0x1,_0x1a775a=prevCell[_0x40cebe(0xd0)]<=currCell['row']?0x1:-0x1,_0x287477=prevCell[_0x40cebe(0xd0)],_0x46b7c7=prevCell[_0x40cebe(0xcc)];while(_0x287477!=currCell[_0x40cebe(0xd0)]+_0x1a775a&&_0x46b7c7!=currCell[_0x40cebe(0xcc)]+_0x2f6c1b){var _0x845bde=matrix[_0x287477][_0x46b7c7];_0x2a6aad['push']({'row':_0x287477,'col':_0x46b7c7,'chr':_0x845bde}),_0x287477+=_0x1a775a,_0x46b7c7+=_0x2f6c1b;}return _0x2a6aad;}function _0xba6b(_0x3ab512,_0x28d6b6){var _0x470525=_0x4705();return _0xba6b=function(_0xba6b34,_0x1ca8e6){_0xba6b34=_0xba6b34-0xbc;var _0xdc2502=_0x470525[_0xba6b34];return _0xdc2502;},_0xba6b(_0x3ab512,_0x28d6b6);}function _0x4705(){var _0x6eb407=['Pink','addEventListener','57954VmHHSy','length','innerWidth','White','LightBlue','css','cells','push','black','876672MRFJHz','telaFim','934002bfMIRa','parent','floor','Gray','278872epPGmF','includes','137545NFKhSY','ACEITAÇÃO','marginLeft','innerHeight','ALEGRIA','4pLkhgZ','AMIZADE','col','divCanvas','2956848FiSdqI','6423435bYdijD','row','height','chr','marginTop','#divCanvas','35UemDqy','width','orientationchange','INSPIRAÇÃO'];_0x4705=function(){return _0x6eb407;};return _0x4705();}function isSelected(_0x3965ab,_0x4b81c4){var _0x227fb5=_0x5f4d86;if(!currSelection)return![];for(var _0x1f6a78 of currSelection){if(_0x1f6a78[_0x227fb5(0xd0)]===_0x3965ab&&_0x1f6a78[_0x227fb5(0xcc)]===_0x4b81c4)return!![];}return![];}function addFound(_0x3fbc56,_0x3869c3){var _0x766d6d=_0x5f4d86;found[_0x766d6d(0xe2)]({'word':_0x3fbc56,'cells':_0x3869c3});}function foundWord(_0x35c617){for(var _0x5c5ad4 of found){if(_0x5c5ad4['word']===_0x35c617)return!![];}return![];}function foundCell(_0x2a8d10,_0x453f11){var _0x1bb2fd=_0x5f4d86;for(var _0x5a3ca2 of found){for(var _0x1a4614 of _0x5a3ca2[_0x1bb2fd(0xe1)]){if(_0x1a4614[_0x1bb2fd(0xd0)]===_0x2a8d10&&_0x1a4614[_0x1bb2fd(0xcc)]===_0x453f11)return!![];}}return![];}var $divCanvas=$(_0x5f4d86(0xd4));retornaOrientacaoVideo($divCanvas);function resizeGame(){retornaOrientacaoVideo($divCanvas);}window[_0x5f4d86(0xda)]('resize',resizeGame,![]),window[_0x5f4d86(0xda)](_0x5f4d86(0xd7),resizeGame,![]);function retornaOrientacaoVideo(_0x1728ff){var _0x26062e=_0x5f4d86,_0x1ed350=0x320/0x320,_0x4bf60c=window[_0x26062e(0xdd)]-0x4b,_0x45a113=window['innerHeight']-0x4b,_0x374d9f=_0x4bf60c/_0x45a113;$imgAtual=$(_0x1728ff),_0x374d9f>_0x1ed350?(_0x4bf60c=_0x45a113*_0x1ed350,$imgAtual['css']('marginLeft',(window['innerWidth']-_0x4bf60c)/0x2+'px'),$imgAtual[_0x26062e(0xe0)]('marginTop',(window[_0x26062e(0xc8)]-_0x45a113)/0x2+'px')):(_0x45a113=_0x4bf60c/_0x1ed350,$imgAtual[_0x26062e(0xe0)](_0x26062e(0xc7),(window[_0x26062e(0xdd)]-_0x4bf60c)/0x2+'px'),$imgAtual[_0x26062e(0xe0)](_0x26062e(0xd3),(window[_0x26062e(0xc8)]-_0x45a113)/0x2+'px')),$imgAtual['css'](_0x26062e(0xd6),_0x4bf60c+'px'),$imgAtual[_0x26062e(0xe0)](_0x26062e(0xd1),_0x45a113+'px');}