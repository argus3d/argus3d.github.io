
var fases = [
    {
        opcoes: [['a1.jpg', false], ['a2.jpg', true]],
        pergunta: 'QUAL O JEITO CORRETO DE CONDUZIR UMA PESSOA CEGA?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! DEIXE A PESSOA CEGA SEGURAR O SEU BRAÇO AO CONDUZI-LA, POIS ELA SE SENTIRÁ MAIS SEGURA E COM MAIS AUTONOMIA'
    }, {
        opcoes: [['b1.jpg', true], ['b2.jpg', false]],
        pergunta: 'COMO UM CEGO LÊ?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! OS CEGOS LEEM COM AS MÃOS TEXTOS ESCRITOS EM BRAILLE. '
    }, {
        opcoes: [['c1.jpg', false], ['c2.jpg', true]],
        pergunta: 'QUAL ANIMAL PODE SER TREINADO PARA GUIAR CEGOS?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! O CÃO-GUIA É UM ANIMAL ADESTRADO PARA GUIAR PESSOAS CEGAS E AUXILIÁ-LAS NO DIA A DIA.'
    }, {
        opcoes: [['d1.jpg', false], ['d2.jpg', true]],
        pergunta: 'QUAL O TIPO DE BENGALA USADO PELOS CEGOS?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! A BENGALA LONGA É UTILIZADA PELA PESSOA CEGA. ESSE TIPO DE BENGALA É LEVE E DOBRÁVEL.'
    }, {
        opcoes: [['e1.jpg', true], ['e2.jpg', false]],
        pergunta: 'QUAL COR TEM A BENGALA DE UMA PESSOA CEGA?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! A BENGALA BRANCA É USADA PELOS CEGOS. JÁ A BENGALA VERDE INDICA QUE A PESSOA TEM BAIXA VISÃO E A VERMELHA E BRANCA SINALIZA QUE A PESSOA É SURDOCEGA.'
    }, {
        opcoes: [['f1.jpg', false], ['f2.jpg', true]],
        pergunta: 'QUAL DESTAS RAÇAS É MAIS ADEQUADA PARA UM CÃO-GUIA?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! A RAÇA PASTOR-ALEMÃO É ÓTIMA PARA SER TREINADA COMO CÃO-GUIA, POIS OS CÃES-GUIAS PRECISAM SER GRANDES.'
    }, {
        opcoes: [['g1.jpg', true], ['g2.jpg', false]],
        pergunta: 'QUAL DAS IMAGENS MOSTRA UM PISO TÁTIL?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! O piso tátil é um piso com relevos que  forma um caminho para pessoas com deficiência visual.'
    }, {
        opcoes: [['h1.jpg', false], ['h2.jpg', true]],
        pergunta: 'QUAL OBJETO PODE SER PERCEBIDO EM DETALHES POR UMA PESSOA CEGA?',
        feedback2: 'Tente novamente.',
        feedback: 'PARABÉNS, VOCÊ ACERTOU! COMO OS CEGOS SENTEM OS OBJETOS PELO TATO, UM VASO COM FLORES TRAZ MAIS INFORMAÇÕES QUE UM DESENHO.'
    }
];
var fase = 0;

var tela1 = document.querySelector(".telaInicial");
var tela2 = document.querySelector(".divContent");
var tela3 = document.querySelector(".divCerta");
var feedback = document.querySelector(".feedback");
var imgfeedback = document.querySelector(".imgFeedback");
var telaParabens = document.querySelector(".telaParabens");
function iniciaJogo() {
    tela1.style.display = "none";
    tela2.style.display = "flex";
    //animaCartas();
    formulaPerg();
    //requestFullscreen();

}
var som = new Audio('assets/triangle.aac');
var som2 = new Audio('assets/success.mp3');
var pecaPegada;
var jogoativo = true;
var caminho = 'assets/';

function formulaPerg() {
    tela2.style.display = "flex";
    tela3.style.display = "none";
    var perg = document.querySelector(".pergunta");
    var mid = document.querySelector(".mid");
    mid.innerHTML = '';

    perg.innerHTML = fases[fase].pergunta;

    var imgs = document.querySelectorAll(".btjogo");
    for (let i = 0; i < fases[fase].opcoes.length; i++) {
        var img = document.createElement("img");
        img.className = "imagem";
        img.src = 'assets/' + fases[fase].opcoes[i][0];
        mid.appendChild(img);

        img.setAttribute("data-resp", fases[fase].opcoes[i][1]);
        img.addEventListener('click', function (e) {
            tela2.style.display = "none";
            tela3.style.display = "flex";
            console.log("clique")
            if (img.getAttribute("data-resp") == 'true') {
                imgfeedback.src = 'assets/certo.png';
                feedback.innerHTML = fases[fase].feedback;
            } else {
                imgfeedback.src = 'assets/errado.png';
                feedback.innerHTML = fases[fase].feedback2;
            }
            anime({
                targets: tela3,
                scale: [0.5, 1],
                opacity: [0, 1],
                duration: 3000
            });

        });
        anime({
            targets: img,
            translateY: [200, 0],
            opacity: [0, 1],
            delay: i * 250
        });

    }
    anime({
        targets: '.pergunta',
        translateY: [-200, 0],
        opacity: [0, 1]
    });
    anime({
        targets: tela2,
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 3000
    });
}
function pulaPergunta() {
    fase++;
    console.log(fase)
    if (fase >= fases.length) {
        tela2.style.display = "none";
        tela3.style.display = "none";
        telaParabens.style.display = 'flex';
        anime({
            targets: telaParabens,
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 3000
        });
    } else {
        formulaPerg();
    }
}

var body = document.body;

function requestFullscreen() {
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { // Firefox
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { // Chrome, Safari and Opera
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { // IE/Edge
        body.msRequestFullscreen();
    }
}
