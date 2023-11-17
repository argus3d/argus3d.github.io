/*
V2.5
Adicionado som no final da resposta

Aumentei numero de erros pra 4

Adicionado var som para caso tenha enunciado em mp3
Adicionada opção pra sequencia de botoes unica pra cada pergunta(opcional)
Adicionada resposta imagem para pergunta texto

*/
var AppQuiz=function(canvasID,
  fundoID,
  tamanhoBotao,
  margem,
  espacamento,
  areaParaBotoes,
  posicaoIconeCertoErrado,
  posicaoPergunta,
  tempoLeituraResposta,
  larguraPergunta,
  tamanhoTextoPergunta,
  tamanhoTextoBotao,
  respostaCerta,
  mostraFeedback,
  _itens,
  arrayBotoes,
  escondePontosFinais,
  imagemGui,
  _naoEmbaralhar,
  _enunciado,
  _btiniciar,
  _naoEmbaralharPergunta
  ){
  var gameID,
  btdicas,
  dicas,
  caminho="resources/image/",
  canvas,
  rel = [],
  stage,
  conta,
  botoes,
  icones_associar,
  count = 0,
  seq = [],
  inicio_associar = false,
  gui,
  podeArrastar=true,
  i_acertos = 0,
  i_erros = 0,
  fig=[],
  figA=[],
  sons = ["triangle.aac", "erro2.aac", "trumpet.aac", "parabens.mp3", "tentenovamente.mp3", "pop.mp3"],
  delayGeral=1500,
  tempBts=[],
  margemX=margem[0],
  margemY=margem[1],
  relationsGeral={};


  function ticker(event) {
    stage.update();
  }
  function criaGui() {
    gui = new createjs.Container();
    stage.addChild(gui);
    gui.x = 800;
    gui.y = 270;

    var img;
    if(imagemGui){
      img=imagemGui;
    }else{
      img="gui.png";
    }


    var _gui = new createjs.Bitmap(caminho+img);
    _gui.image.onload = function () {};


    var txt_a = new createjs.Text(i_acertos, "40px VAG Rounded BT", "#000000");
    txt_a.textAlign = "left";
    txt_a.x = 215;
    txt_a.y = 25;

    var txt_e = new createjs.Text(i_erros, "40px VAG Rounded BT", "#b10000");
    txt_e.textAlign = "left";
    txt_e.x = 220;
    txt_e.y = 100;

    gui.addChild(_gui);
    gui.addChild(txt_a);
    gui.addChild(txt_e);

  }
  function criaBts() {

    botoes.removeAllChildren();

    var i;
    tempBts=[];
    margemX=margem[0];
    margemY=margem[1];

    if(arrayBotoes){
      if(_naoEmbaralhar){

      }else{
        //shuffle(_itens[count].botao);
      }

      for(i = 0; i < _itens[count].botao.length; i++){
        console.log("qual"+i);
        configuraBts(i,_itens[count].botao[i]);
      }

    }else{
      shuffle(_itens);
      for(i = 0; i < _itens.length; i++){
        if(tempBts.indexOf(_itens[i].botao)>-1){
          continue;
        }
        configuraBts(i,_itens[i].botao);
      }
    }




  }
  function configuraBts(i,nome){
    var extensao=nome.split('.').pop();

    var bt = new createjs.Bitmap(caminho+nome);
    bt.image.onload = function () {};
    bt.tipo="imagem";
    bt.regX=tamanhoBotao[0]/2;
    bt.regY=tamanhoBotao[1]/2;
    bt.x = bt.px = margemX;
    bt.y = 900;
    bt.py = margemY;

    createjs.Tween.get(bt).wait(i*100).to({y:margemY},300,createjs.Ease.backOut);

    margemX+=tamanhoBotao[0]+espacamento;
    if(margemX>margem[0]+areaParaBotoes){
      margemX=margem[0];
      margemY+=tamanhoBotao[1]+espacamento;
    }
    bt.pode=true;
    bt.id=caminho+nome;
    bt.name=nome;
    botoes.addChild(bt);
    tempBts.push(nome);

    bt.on("pressup", function (evt) {
      if(inicio_associar){
        inicio_associar=false;
        var somparado=true;

        if(this.id == fig[count].certa){
          this.visible=false;

          i_acertos++;
          setTimeout(function(){
            botoes.removeAllChildren();
            fig[count].y=-720;
            telaAcerto= textoContorno(fig[count].resposta,"telafeedback.png");

            botoes.addChild(telaAcerto);
            telaAcerto.on("pressup", function (evt) {
              proxima(true);
            });
            telaAcerto.y=-720;
            telaAcerto.x=640;
            createjs.Tween.get(telaAcerto).to({y: 350}, 400, createjs.Ease.backOut)
            
          },1500);
          animaIco("certo",this.x,this.y);
          sons[2].play();
        } else { 

          setTimeout(function(){
            botoes.removeAllChildren();
            fig[count].y=-720;
            var telaErro = new createjs.Bitmap(caminho+"telaErro.png");
            telaErro.image.onload = function () {
              botoes.addChild(telaErro);
              telaErro.on("pressup", function (evt) {
                proxima(false);
              });
              telaErro.y=-720;
              createjs.Tween.get(telaErro).to({y: 0}, 400, createjs.Ease.backOut)
            };
            
          },1500);
          i_erros++;
          sons[1].play();
          animaIco("errado",this.x,this.y);

        }
      }
    });
  }
  function formulaPergunta() {
    createjs.Tween.get(fig[count]).wait(200).to({y: posicaoPergunta[1], rotation: 0}, 400, createjs.Ease.backOut).call(habilitaCliques);
  }
  function habilitaCliques(){
    inicio_associar = true;
  }
  function proxima(pula) {
    botoes.removeAllChildren();
    icones_associar.removeAllChildren();
    fig[count].y=-720;

    if (count < _itens.length-1) {
      if(pula){
        count++;
      }

      criaBts();
      formulaPergunta();
    } else {
      verificaFim();
    }

  }

  function textoContorno(texto,img){
    var img = new createjs.Bitmap(caminho+img);
    img.image.onload = function () {};
    img.regX=1280/2;
    img.regY=720/2;

    var txt = new createjs.Text(texto, "30px Lilita", "#000000");

    txt.textAlign = "center";
    txt.lineWidth = 600;

    var tamX=txt.getBounds().width+120;
    var tamY=txt.getBounds().height+180;
    txt.regY=tamY/2-40;

    offX=tamX/2;
    offY=tamY/2;


    var t = new createjs.Container();

    t.addChild(img);
    t.addChild(txt);

    return t;

  }


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function verificaFim(rel) {
    setTimeout(function(){
      document.querySelector(".telaParabens").style.display="flex";
    },500)
  }

  function animaIco(qual, b, c) {
    var ico;
    ico = new createjs.Bitmap(caminho + qual + ".png");
    stage.addChild(ico);
    ico.x = b;
    ico.y = c;
    ico.regX = 315 / 2;
    ico.regY = 315 / 2;
    ico.scaleX = ico.scaleY = 0.1;
    createjs.Tween.get(ico).to({scaleX: 0.6, scaleY: 0.6}, 200, createjs.Ease.backOut).wait(1500).call(deleta);
  }
  function deleta() {
    stage.removeChild(this);
  }


  canvas = document.getElementById(canvasID);
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver(10);

  createjs.Touch.enable(stage);
  stage.enableMouseOver(10);
  stage.mouseMoveOutside = true;


  conta = new createjs.Container();
  botoes = new createjs.Container();
  icones_associar = new createjs.Container();

  stage.addChild(conta);
  stage.addChild(botoes);
  stage.addChild(icones_associar);


  var index;
  for (index in sons) {
    var t = sons[index];
    sons[index] = new Audio(caminho + t);
  }

  if(_naoEmbaralharPergunta){
   /*nao embaralha*/
   console.log("nao embaralhou");
 }else{
  shuffle(_itens);

}

for(var i = 0; i < _itens.length; i++){
  var extensao=_itens[i].pergunta.split('.').pop();

  fig[i] = textoContorno(_itens[i].pergunta,"qiadropergunta.png");
  fig[i].resposta = _itens[i].resposta;

  figA[i] = textoContorno(_itens[i].resposta,"qiadropergunta.png");
  figA[i].y = -900;
  figA[i].resposta = _itens[i].resposta;

  fig[i].x = posicaoPergunta[0];
  fig[i].y = -900;

  fig[i].certa = caminho+_itens[i].botaoCerto;

  fig[i].resposta = _itens[i].resposta;
  conta.addChild(fig[i]);
  conta.addChild(figA[i]);


}

criaBts();
formulaPergunta();





createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", ticker);


}
