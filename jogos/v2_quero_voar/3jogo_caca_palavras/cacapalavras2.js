var a0_0xafbdd=a0_0x3ce4;(function(_0x56e630,_0x56cf19){var _0x349fd4=a0_0x3ce4,_0x3b4a53=_0x56e630();while(!![]){try{var _0x33cc55=parseInt(_0x349fd4(0x1c8))/0x1*(-parseInt(_0x349fd4(0x1d4))/0x2)+-parseInt(_0x349fd4(0x1c6))/0x3*(parseInt(_0x349fd4(0x1e1))/0x4)+parseInt(_0x349fd4(0x1cd))/0x5+-parseInt(_0x349fd4(0x1d7))/0x6*(-parseInt(_0x349fd4(0x1ce))/0x7)+-parseInt(_0x349fd4(0x1e0))/0x8+-parseInt(_0x349fd4(0x1d9))/0x9*(-parseInt(_0x349fd4(0x1d1))/0xa)+-parseInt(_0x349fd4(0x1e3))/0xb;if(_0x33cc55===_0x56cf19)break;else _0x3b4a53['push'](_0x3b4a53['shift']());}catch(_0xb881e7){_0x3b4a53['push'](_0x3b4a53['shift']());}}}(a0_0x366a,0x318bd));const rows=0xe,cols=0x9,words=[a0_0xafbdd(0x1e7),a0_0xafbdd(0x1ca),'ADMIRAÇÃO',a0_0xafbdd(0x1cf),a0_0xafbdd(0x1c9),'RESPEITO'],matrixX=0x2d,matrixY=0xaf,squareSize=0x32;var matrix=[['J','Q','V','N','R','G','I','T','A'],['V','O','A','O','S','A','N','P','C'],['W','Ã','R','I','D','M','S','I','E'],['K','Ç','I','T','R','E','P','R','I'],['Z','A','A','C','E','S','I','C','T'],['X','R','B','N','S','Z','R','S','A'],['O','I','L','U','P','A','A','A','Ç'],['A','M','E','F','E','L','Ç','V','Ã'],['E','D','O','C','I','E','Ã','A','O'],['F','A','Y','H','T','G','O','A','Y'],['E','Y','U','C','O','R','H','P','Y'],['U','I','S','F','R','I','O','A','Y'],['H','A','M','I','Z','A','D','E','Y'],['R','W','O','C','R','P','O','A','Y']],found=[],prevCell=null,currCell=null,currSelection=null;function setup(){var _0x166178=a0_0xafbdd;let _0xe6f137=createCanvas(0x21f,0x384);_0xe6f137[_0x166178(0x1d8)]('divCanvas');}function draw(){clear(),display(),checkMouse();}function checkMouse(){if(!mouseIsPressed){validateSelection(),prevCell=null,currCell=null,currSelection=null;return;}if(!prevCell)prevCell=findCell(mouseX,mouseY);var _0xf9e493=findCell(mouseX,mouseY);if(_0xf9e493)currCell=_0xf9e493;currSelection=findSelection();}function validateSelection(){var _0xb6fb33=a0_0xafbdd,_0xa1dc08=selectedWord();if(!_0xa1dc08)return;if(foundWord(_0xa1dc08))return;if(words[_0xb6fb33(0x1d3)](_0xa1dc08))addFound(_0xa1dc08,currSelection);found['length']===words[_0xb6fb33(0x1d2)]&&trocaTela(_0xb6fb33(0x1c7),_0xb6fb33(0x1cc));}function findCell(_0x3ac0c9,_0x5b7bbc){var _0x21b086=a0_0xafbdd,_0x2704d6=Math[_0x21b086(0x1eb)]((_0x3ac0c9-matrixX)/squareSize),_0x7cea05=Math[_0x21b086(0x1eb)]((_0x5b7bbc-matrixY)/squareSize);if(_0x2704d6<0x0||_0x2704d6>=cols||_0x7cea05<0x0||_0x7cea05>=rows)return null;return{'row':_0x7cea05,'col':_0x2704d6};}function display(){displayMatrix(),displaySelection(),displayWords();}function displayMatrix(){var _0x21aae6=a0_0xafbdd;push(),textAlign(CENTER,CENTER);for(var _0x3662db=0x0;_0x3662db<matrix[_0x21aae6(0x1d2)];_0x3662db++){var _0x2f053c=matrix[_0x3662db];for(var _0x3abab5=0x0;_0x3abab5<_0x2f053c[_0x21aae6(0x1d2)];_0x3abab5++){var _0x37cd47=_0x2f053c[_0x3abab5],_0x383d8d=matrixX+_0x3abab5*squareSize,_0x38aee8=matrixY+_0x3662db*squareSize;stroke(0x0);var _0x2d0339=isSelected(_0x3662db,_0x3abab5)?_0x21aae6(0x1da):foundCell(_0x3662db,_0x3abab5)?'Pink':_0x21aae6(0x1dc);fill(_0x2d0339),noStroke(),rect(_0x383d8d,_0x38aee8,squareSize,squareSize),noStroke(),fill(0x0),textFont(_0x21aae6(0x1e2)),textSize(0x20),text(_0x37cd47,_0x383d8d+squareSize/0x2,_0x38aee8+squareSize/0x2);}}pop();}function selectedWord(){var _0x21e068=a0_0xafbdd;if(!currSelection)return'';var _0x4538e5='';for(var _0x59fee8 of currSelection){_0x4538e5+=_0x59fee8[_0x21e068(0x1e6)];}return _0x4538e5;}function displaySelection(){var _0x469be2=a0_0xafbdd,_0x186a62=selectedWord();if(!_0x186a62)return;push(),noStroke(),fill(0x0),textFont(_0x469be2(0x1e2)),textSize(0x20),text(_0x186a62,matrixX,matrixY+(rows+0x1)*squareSize),pop();}function displayWords(){var _0x311f3b=a0_0xafbdd;push(),noStroke();let _0x3b7930=[[0x32,0x32],[0x32,0x64],[0x32,0x96],[0xfa,0x32],[0xfa,0x64],[0xfa,0x96]];for(var _0x18c7f6=0x0;_0x18c7f6<words[_0x311f3b(0x1d2)];_0x18c7f6++){fill(foundWord(words[_0x18c7f6])?_0x311f3b(0x1d6):_0x311f3b(0x1e8)),textFont(_0x311f3b(0x1e2)),textSize(0x1c),text(words[_0x18c7f6],_0x3b7930[_0x18c7f6][0x0]+0x1e,_0x3b7930[_0x18c7f6][0x1]);}pop();}function findSelection(){if(!prevCell||!currCell)return null;return hSelection()||vSelection()||dSelection();}function a0_0x3ce4(_0x2087e3,_0xb959b1){var _0x366af4=a0_0x366a();return a0_0x3ce4=function(_0x3ce4cd,_0x191ae3){_0x3ce4cd=_0x3ce4cd-0x1c4;var _0x17c84d=_0x366af4[_0x3ce4cd];return _0x17c84d;},a0_0x3ce4(_0x2087e3,_0xb959b1);}function hSelection(){var _0x2be940=a0_0xafbdd;if(!prevCell||!currCell)return null;if(prevCell[_0x2be940(0x1e5)]!=currCell[_0x2be940(0x1e5)])return null;var _0x191714=[],_0x3a839c=prevCell[_0x2be940(0x1cb)]<=currCell[_0x2be940(0x1cb)]?0x1:-0x1;for(var _0x5ee0e=prevCell[_0x2be940(0x1cb)];_0x5ee0e!=currCell[_0x2be940(0x1cb)]+_0x3a839c;_0x5ee0e+=_0x3a839c){var _0x2a9cee=prevCell[_0x2be940(0x1e5)],_0x404d10=matrix[_0x2a9cee][_0x5ee0e];_0x191714[_0x2be940(0x1d5)]({'row':_0x2a9cee,'col':_0x5ee0e,'chr':_0x404d10});}return _0x191714;}function vSelection(){var _0x583078=a0_0xafbdd;if(!prevCell||!currCell)return null;if(prevCell[_0x583078(0x1cb)]!=currCell[_0x583078(0x1cb)])return null;var _0x450efa=[],_0x23a48f=prevCell['row']<=currCell[_0x583078(0x1e5)]?0x1:-0x1;for(var _0x5302e3=prevCell[_0x583078(0x1e5)];_0x5302e3!=currCell['row']+_0x23a48f;_0x5302e3+=_0x23a48f){var _0x2b84a5=prevCell['col'],_0x9d0c4f=matrix[_0x5302e3][_0x2b84a5];_0x450efa[_0x583078(0x1d5)]({'row':_0x5302e3,'col':_0x2b84a5,'chr':_0x9d0c4f});}return _0x450efa;}function dSelection(){var _0x982c0c=a0_0xafbdd;if(!prevCell||!currCell)return null;if(abs(currCell[_0x982c0c(0x1e5)]-prevCell['row'])!=abs(currCell['col']-prevCell['col']))return null;var _0x45e01e=[],_0x437bb4=prevCell['col']<=currCell[_0x982c0c(0x1cb)]?0x1:-0x1,_0x4b6c41=prevCell[_0x982c0c(0x1e5)]<=currCell[_0x982c0c(0x1e5)]?0x1:-0x1,_0x42d1aa=prevCell[_0x982c0c(0x1e5)],_0x1116c6=prevCell[_0x982c0c(0x1cb)];while(_0x42d1aa!=currCell[_0x982c0c(0x1e5)]+_0x4b6c41&&_0x1116c6!=currCell[_0x982c0c(0x1cb)]+_0x437bb4){var _0x31f519=matrix[_0x42d1aa][_0x1116c6];_0x45e01e[_0x982c0c(0x1d5)]({'row':_0x42d1aa,'col':_0x1116c6,'chr':_0x31f519}),_0x42d1aa+=_0x4b6c41,_0x1116c6+=_0x437bb4;}return _0x45e01e;}function isSelected(_0xa86915,_0x1c476a){var _0x33baef=a0_0xafbdd;if(!currSelection)return![];for(var _0x58aea6 of currSelection){if(_0x58aea6['row']===_0xa86915&&_0x58aea6[_0x33baef(0x1cb)]===_0x1c476a)return!![];}return![];}function addFound(_0x5cf093,_0x2c24f3){var _0x5f2f0d=a0_0xafbdd;found[_0x5f2f0d(0x1d5)]({'word':_0x5cf093,'cells':_0x2c24f3});}function foundWord(_0x508cc6){for(var _0x421b1d of found){if(_0x421b1d['word']===_0x508cc6)return!![];}return![];}function a0_0x366a(){var _0x3e66d0=['length','includes','158TWWZlu','push','yellow','1813908RUbVmn','parent','3435876NatfkC','LightBlue','addEventListener','White','innerHeight','width','innerWidth','555112NANOrT','20LDptkj','Marvin\x20W01\x20Regular','3908509RIdCQB','marginLeft','row','chr','AMIZADE','white','height','css','floor','cells','resize','#divCanvas','56469jPuPJd','telaFim','3684vxlejq','INSPIRAÇÃO','ACEITAÇÃO','col','divCanvas','1643590lVAJqR','7JQSFJq','ALEGRIA','marginTop','10PAlNXi'];a0_0x366a=function(){return _0x3e66d0;};return a0_0x366a();}function foundCell(_0x4222d7,_0x14f780){var _0x2f0454=a0_0xafbdd;for(var _0xd3c9fb of found){for(var _0x29ef06 of _0xd3c9fb[_0x2f0454(0x1ec)]){if(_0x29ef06[_0x2f0454(0x1e5)]===_0x4222d7&&_0x29ef06[_0x2f0454(0x1cb)]===_0x14f780)return!![];}}return![];}var $divCanvas=$(a0_0xafbdd(0x1c5));retornaOrientacaoVideo($divCanvas);function resizeGame(){retornaOrientacaoVideo($divCanvas);}window[a0_0xafbdd(0x1db)](a0_0xafbdd(0x1c4),resizeGame,![]),window[a0_0xafbdd(0x1db)]('orientationchange',resizeGame,![]);function retornaOrientacaoVideo(_0x25c7a1){var _0x4bd7cb=a0_0xafbdd,_0x554587=0x1e0/0x30c,_0x135d2c=window[_0x4bd7cb(0x1df)],_0x1d0e48=window['innerHeight'],_0x5f3dcb=_0x135d2c/_0x1d0e48;$imgAtual=$(_0x25c7a1),_0x5f3dcb>_0x554587?(_0x135d2c=_0x1d0e48*_0x554587,$imgAtual['css'](_0x4bd7cb(0x1e4),(window['innerWidth']-_0x135d2c)/0x2+'px'),$imgAtual['css'](_0x4bd7cb(0x1d0),(window[_0x4bd7cb(0x1dd)]-_0x1d0e48)/0x2+'px')):(_0x1d0e48=_0x135d2c/_0x554587,$imgAtual['css'](_0x4bd7cb(0x1e4),(window[_0x4bd7cb(0x1df)]-_0x135d2c)/0x2+'px'),$imgAtual[_0x4bd7cb(0x1ea)](_0x4bd7cb(0x1d0),(window[_0x4bd7cb(0x1dd)]-_0x1d0e48)/0x2+'px')),$imgAtual[_0x4bd7cb(0x1ea)](_0x4bd7cb(0x1de),_0x135d2c+'px'),$imgAtual[_0x4bd7cb(0x1ea)](_0x4bd7cb(0x1e9),_0x1d0e48+'px');}