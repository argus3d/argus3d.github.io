var appInfografico3d=function(_id,_dentroModulo,_itens,_meshObstaculos){

	var orientacao;
	var widthToHeight = 9 / 16;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;
	let div_canvas=document.getElementById("divCanvas");
	let div_gui=document.getElementById("gui");

	newWidth = newHeight * widthToHeight;
	tamanhoDivs();

	let debugador=false;
	let offsetCamera=[15,50,35];

	let caminho="resources/image/";
	
	let canvas = document.getElementById("canvas_od");
	let heartImg = document.getElementById("heartImg");
	let textPassos = document.getElementById("texto_passos");
	let camera;
	let sommastiga = new Howl({
		src: ['resources/image/bite.mp3']
	});
	let distancia=2;
	let distanciaCria=15;
	let distApaga=20;
	let distX=[distancia*5,distancia*4,distancia*3,distancia*2,distancia,0,distancia*-1,distancia*-2,distancia*-3,distancia*-4,distancia*-5];
	let target,advancedTexture,clique,count,passo,countRuas,countEscala,vidas,personagem,rootPersonagem,obstaculos,meshObstaculos,carros,comidas,arvore,burguer,rua3x3,posX,posY,tampa,map;

	var mc = new Hammer(canvas);
	mc.on("panleft panright tap pressup", function(ev) {
		if(ev.type=="tap"){
			personagemMove(ev.type);
		}
		if(ev.type=="panleft" || ev.type=="panright"){
			if(ev.isFinal){
				personagemMove(ev.type);
			}
		}
	});

	let engine = new BABYLON.Engine(canvas, true);

	let createScene = function(){
		clique=true;
		count=0;
		passo=0;
		countRuas=0;
		countEscala=1;
		vidas=3;
		heartImg.src=caminho+"vida"+vidas+".png";

		personagem={
			pernaL:null,
			pernaLpos:[0,0,0],
			pernaR:null,
			pernaRpos:[0,0,0],
			bracoL:null,
			bracoLpos:[0,0,0],
			bracoR:null,
			bracoRpos:[0,0,0],
			corpo:null,
			corpopos:[0,0,0],
			cabeca:null,
			cabecapos:[0,0,0],
		};
		rootPersonagem;
		obstaculos=[];
		meshObstaculos=[];
		carros=[];
		comidas=[];
		arvore;
		burguer;
		rua3x3;
		posX=5;
		posY=0;
		textPassos.innerText =posY;
		tampa;
		map=[];


		scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color3.FromHexString("#83A243");
		scene.ambientColor = BABYLON.Color3.White();
		camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
		camera.setPosition(new BABYLON.Vector3(65, 65, -65));
		target = new BABYLON.TransformNode('target', scene);
		camera.fov = 0.4;
		camera.pinchDeltaPercentage = 0.01;
		camera.wheelDeltaPercentage = 0.01;
		light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
		light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-0.8, -0.8, -1.0), scene);
		light2.position = new BABYLON.Vector3(0, 10, 0);
		light.intensity = 0.6;
		light2.intensity = 2;
		light2.shadowMinZ = 1;
		light2.shadowMaxZ = 5000;
		var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
		shadowGenerator.usePoissonSampling = true;
		shadowGenerator.useBlurExponentialShadowMap = true;
		var grupo1 = new BABYLON.TransformNode();
		var assetsManager = new BABYLON.AssetsManager(scene);

		let meshTaskPersonagem = assetsManager.addMeshTask("personagem", "", caminho, "bob.glb");
		let meshTaskTampa = assetsManager.addMeshTask("tampa", "", caminho, "tampa.glb");
		let meshTaskRua = assetsManager.addMeshTask("rua", "", caminho, "rua3x3.glb");

		for (var i = 0; i <_itens.length; i++) {
			let meshComidas = assetsManager.addMeshTask("comidas", "", caminho, _itens[i].obj);
		}
		for (var i = 0; i <_meshObstaculos.length; i++) {
			let meshObj = assetsManager.addMeshTask("obst", "", caminho, _meshObstaculos[i].obj);
		}
		assetsManager.onFinish = function (tasks) {

			for (let j = 0; j < tasks.length; j++) {
				if (tasks[j].name == "rua") {
					const task = tasks[j];
					for (let i = 0; i < task.loadedMeshes.length; i++) {
						if(task.loadedMeshes[i].name=="rua3x3"){
							rua3x3=task.loadedMeshes[i];
							rua3x3.isVisible=false;
							rua3x3.parent = null
						}
					}
				}
				if (tasks[j].name == "tampa") {
					const task = tasks[j];
					for (let i = 0; i < task.loadedMeshes.length; i++) {
						if(task.loadedMeshes[i].name.includes("tampa")){
							var material_black = new BABYLON.StandardMaterial('stairsmat', scene);
							material_black.diffuseColor = BABYLON.Color3.Black();
							material_black.emissiveColor = new BABYLON.Color3(0,0,0);
							material_black.alpha = 0.3;
							tampa=task.loadedMeshes[i];
							tampa.material=material_black;

						}
					}
				}
				if (tasks[j].name == "obst") {
					const task = tasks[j];
					for (let i = 0; i < task.loadedMeshes.length; i++) {
						if(task.loadedMeshes[i].name.includes("obstaculo")){
							let _obs=task.loadedMeshes[i];
							_obs.isVisible=false;
							_obs.parent = null;
							_obs.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
							meshObstaculos.push(_obs)
						}
					}
				}
				if (tasks[j].name == "comidas") {
					const task = tasks[j];
					for (let i = 0; i < task.loadedMeshes.length; i++) {
						if(task.loadedMeshes[i].name.includes("item")){
							let _comida=task.loadedMeshes[i];
							_comida.isVisible=false;
							_comida.parent = null;
 										//_comida.scaling=new BABYLON.Vector3(_itens[i].size,_itens[i].size,_itens[i].size);
 										comidas.push(_comida)
 									}
 								}
 							}
 							if (tasks[j].name == "personagem") {
 								const task = tasks[j];
 								for (let i = 0; i < task.loadedMeshes.length; i++) {
 									if(task.loadedMeshes[i].name=="corpo"){
 										personagem.corpo=task.loadedMeshes[i];
 										personagem.corpo.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.corpo.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.corpopos=[personagem.corpo.position.x,personagem.corpo.position.y,personagem.corpo.position.z];
 									}
 									if(task.loadedMeshes[i].name=="pernaL"){
 										personagem.pernaL=task.loadedMeshes[i];
 										personagem.pernaL.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.pernaL.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.pernaLpos=[personagem.pernaL.position.x,personagem.pernaL.position.y,personagem.pernaL.position.z];
 									}
 									if(task.loadedMeshes[i].name=="pernaR"){
 										personagem.pernaR=task.loadedMeshes[i];
 										personagem.pernaR.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.pernaR.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.pernaRpos=[personagem.pernaR.position.x,personagem.pernaR.position.y,personagem.pernaR.position.z];
 									}
 									if(task.loadedMeshes[i].name=="bracoL"){
 										personagem.bracoL=task.loadedMeshes[i];
 										personagem.bracoL.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.bracoL.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.bracoLpos=[personagem.bracoL.position.x,personagem.bracoL.position.y,personagem.bracoL.position.z];
 									}
 									if(task.loadedMeshes[i].name=="bracoR"){
 										personagem.bracoR=task.loadedMeshes[i];
 										personagem.bracoR.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.bracoR.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.bracoRpos=[personagem.bracoR.position.x,personagem.bracoR.position.y,personagem.bracoR.position.z];
 									}
 									if(task.loadedMeshes[i].name=="cabeca"){
 										personagem.cabeca=task.loadedMeshes[i];
 										personagem.cabeca.rotation = new BABYLON.Vector3(0, 0, 0);
 										personagem.cabeca.scaling=new BABYLON.Vector3(1,1,1);
 										personagem.cabecapos=[personagem.cabeca.position.x,personagem.cabeca.position.y,personagem.cabeca.position.z];
 									}
 									if(task.loadedMeshes[i].name=="rootPersonagem"){
 										rootPersonagem=task.loadedMeshes[i];
 										rootPersonagem.rotation = new BABYLON.Vector3(0, 0, 0);
 									}
 								}
 							}

 						}

 						for (let i=0;i < 20; i++) {
 							criaFileira();
 						}
 						console.log(JSON.stringify(map))

 					}	
 					assetsManager.load();
 					scene.onBeforeCameraRenderObservable.add(()=>{
 						//camera.setTarget(target.position)
 						if(rootPersonagem){
 							let camTargetTo = new BABYLON.Vector3(rootPersonagem.position.x*-1, rootPersonagem.position.y + 2, rootPersonagem.position.z);
 							camera.target = BABYLON.Vector3.Lerp(camera.target, camTargetTo, 0.025);
 							let camPosTo = new BABYLON.Vector3(rootPersonagem.position.x*-1 + 15, rootPersonagem.position.y + 50, rootPersonagem.position.z - 35);
 							camera.position = BABYLON.Vector3.Lerp(camera.position, camPosTo, 0.025);
 							for (var i = 0; i < carros.length; i++) {
 								if (personagem.corpo.intersectsMesh(carros[i], false)) {
 									console.log("colidiu");
 									countEscala+=0.35;
 									personagem.corpo.scaling=new BABYLON.Vector3(countEscala,countEscala,countEscala);
 									personagem.cabecapos[1]+=0.10;
 									personagem.cabeca.position.y=personagem.cabecapos[1];
 									personagem.bracoRpos[0]+=0.10;
 									personagem.bracoR.position.x=personagem.bracoRpos[0];
 									personagem.bracoR.rotation=new BABYLON.Vector3(0,0,Math.PI/4);
 									personagem.bracoLpos[0]-=0.10;
 									personagem.bracoL.position.x=personagem.bracoLpos[0];
 									personagem.bracoL.rotation=new BABYLON.Vector3(0,0,-Math.PI/4);
 									carros[i].dispose();
 									carros.splice(i, 1); 
 									sommastiga.play();

 									vidas-=1;
 									if(vidas<0){
 										scene = createScene();

 									}else{
 										heartImg.src=caminho+"vida"+vidas+".png";
 									}
 									

 								}
 								
 							}
 						}
 						
 					})
 					return scene;
 				}


 				scene = createScene();
 				scene.onPointerDown = function (evt, pickResult) {
 					if (pickResult.hit) {
 						if(pickResult.pickedMesh.name=="personagem" ){
 							console.log(pickResult.pickedMesh.name);

 						}
 					}
 				};
 				function deletaObjetos(){
 					for (var i = 0; i < obstaculos.length; i++) {
 						if((rootPersonagem.getAbsolutePosition().z-obstaculos[i].getAbsolutePosition().z)>distApaga){
 							obstaculos[i].dispose();
 							obstaculos.splice(i, 1); 
 						}
 					}
 					for (var i = 0; i < carros.length; i++) {
 						if((rootPersonagem.getAbsolutePosition().z-carros[i].getAbsolutePosition().z)>distApaga){
 							carros[i].dispose();
 							carros.splice(i, 1); 
 						}
 					}
 					console.log("carros"+carros.length);
 				}
 				function verificaCriaRua(){
 					countRuas++;
 					
 					let randomizacaoRua=Math.round(Math.random()*15)+1;
 					if(countRuas>randomizacaoRua){
 						countRuas=0;
 						criaRua();
 					}else{
 						criaFileira();
 					}
 				}
 				function criaRua(){
 					const ruanova = rua3x3.clone("rua");
 					ruanova.isVisible=true;
 					ruanova.position.z=count*distancia;
 					obstaculos.push(ruanova);
 					let w=0;
 					for (var i = 0; i < 3; i++) {
 						let velocidade=Math.round(Math.random()*5000)+2000;
 						for (var j = 0; j < 3; j++) {
 							let _comida = comidas[Math.floor(Math.random() * comidas.length)];
 							const carro = _comida.clone("comida");
 							carro.isVisible=true;
 							let dest;
 							if(w==0){
 								carro.position.x=-30;
 								dest=30;
 							}else{
 								carro.position.x=30;
 								dest=-30;
 							}
 							carro.position.z=count*distancia;
 							anime({
 								targets: carro.position,
 								x:dest,
 								loop:true,
 								easing: 'linear',
 								delay:(velocidade/3)*j,
 								duration: velocidade
 							})
 							carros.push(carro);
 						}
 						if(w==0){
 							w=1
 						}else{
 							w=0;
 						}
 						criaFileira(true);
 					}

 				}
 				function criaFileira(_rua=false){

 					let rand=[];
 					for (var i = 0; i < 10; i++) {
 						let num;
 						if(_rua){
 							num=0;
 						}else if(count<3){
 							num=0;
 						}else{
 							num=Math.round(Math.random()*10);
 						}
 						rand.push(num);
 						if(num==1){
 							let _obs = meshObstaculos[Math.floor(Math.random() * meshObstaculos.length)];
 							const box2 = _obs.clone("arvore");
 							box2.isVisible=true;

 							let randRot=[-1,1,2,-2];
 							const random = Math.floor(Math.random() * randRot.length);
 							box2.position.x=i*distancia-(5*distancia);
 							box2.position.z=count*distancia;
 							box2.rotation.y = Math.PI/randRot[random];
 							obstaculos.push(box2);
 						}
 					}
 					map.push(rand);
 					count++;
 				}
 				function personagemMove(_dir){
 					if(clique){
 						clique=false;
 						if(_dir=="tap"){
 							setTimeout(function(){
 								clique=true
 							},100)
 							let passa=true;
 							let posProjetada=rootPersonagem.getAbsolutePosition();
 							posProjetada.z=posProjetada.z+distancia;
 							if(map[posY+1][posX]!=1){
 								posY+=1;
 								tampa.position.z=posY*distancia;
 								textPassos.innerText =posY;
 								if(count-posY<distanciaCria){
 									verificaCriaRua();
 								}
 								deletaObjetos();
 								anime({
 									targets: rootPersonagem.position,
 									z:posY*distancia,
 									easing: 'easeOutBack',
 									duration: 100,
 									complete: () => {
 										
 									}
 								})
 								anime({
 									targets: rootPersonagem.rotation,
 									y:Math.PI,
 									easing: 'easeOutBack',
 									duration: 100
 								})
 								animaCorpinho();
 							}
 						}else if(_dir=="panright"){
 							console.log("clica panleft:");
 							clique=false;
 							setTimeout(function(){
 								clique=true
 							},50)
 							let passa=true;
 							let posProjetada=rootPersonagem.getAbsolutePosition();
 							posProjetada.x=posProjetada.x-distancia;
 							if(map[posY][posX+1]!=1){
 								if(posX<10){
 									posX+=1;
 									anime({
 										targets: rootPersonagem.position,
 										x:distX[posX],
 										easing: 'easeOutBack',
 										duration: 100,
 										complete: () => {

 										}
 									})
 									anime({
 										targets: rootPersonagem.rotation,
 										y: Math.PI/2,
 										easing: 'easeOutBack',
 										duration: 100
 									})
 									animaCorpinho();
 								}

 							}

 						}else if(_dir=="panleft"){
 							console.log("clica:");
 							clique=false;
 							setTimeout(function(){
 								clique=true
 							},50)
 							let passa=true;
 							let posProjetada=rootPersonagem.getAbsolutePosition();
 							posProjetada.x=posProjetada.x+distancia;

 							if(map[posY][posX-1]!=1){
 								if(posX>0){
 									posX-=1;
 									anime({
 										targets: rootPersonagem.position,
 										x:distX[posX],
 										easing: 'easeOutBack',
 										duration: 100,
 										complete: () => {

 										}
 									})
 									anime({
 										targets: rootPersonagem.rotation,
 										y: -Math.PI/2,
 										easing: 'easeOutBack',
 										duration: 100
 									})
 									animaCorpinho();
 								}

 							}
 						}
 					}
 				}
 				function animaCorpinho(){
 					let rotR;
 					let rotL;
 					if(passo==0){
 						rotR=Math.PI / 2;
 						rotL=-Math.PI / 2;
 						passo=1;
 					}else{
 						rotR=-Math.PI / 2;
 						rotL=Math.PI / 2;
 						passo=0;
 					}
 					anime({
 						targets: personagem.corpo.position,
 						keyframes: [
 						{y: personagem.corpopos[1]+1},
 						{y: personagem.corpopos[1]}
 						],
 						easing: 'easeOutBack',
 						duration: 200
 					})
 					anime({
 						targets: personagem.cabeca.position,
 						keyframes: [
 						{y: personagem.cabecapos[1]+1},
 						{y: personagem.cabecapos[1]}
 						],
 						easing: 'easeOutBack',
 						duration: 200
 					})
 					anime({
 						targets: personagem.pernaL.position,
 						keyframes: [
 						{y: personagem.pernaLpos[1]+1},
 						{y: personagem.pernaLpos[1]}
 						],
 						easing: 'linear',
 						duration: 200
 					})
 					anime({
 						targets: personagem.pernaL.rotation,
 						keyframes: [
 						{x: rotR},
 						{x: 0}
 						],
 						easing: 'linear',
 						duration: 200
 					})
 					anime({
 						targets: personagem.pernaR.rotation,
 						keyframes: [
 						{x: rotL},
 						{x: 0}
 						],
 						easing: 'linear',
 						duration: 200
 					})
 				}
 				function checkme_xyz(a, b) {
 					if(map[posX][posY]){
 					}
 				}
 				engine.runRenderLoop(function(){
 					scene.render();

 				});

 				window.addEventListener('resize', redimensionaGame, false);
 				function redimensionaGame() {
 					resizeDiv();
 					engine.resize();
 				}
 				function resizeDiv() {
 					var newWidth = window.innerWidth;
 					var newHeight = window.innerHeight;
 					widthToHeight = 9 / 16;
 					orientacao=1; 

 					newWidth = newHeight * widthToHeight;
 					tamanhoDivs();
 				}
 				function tamanhoDivs(){

 					div_canvas.style.width = newWidth + 'px';
 					div_canvas.style.height = newHeight + 'px';
 					div_canvas.style.marginLeft = (window.innerWidth-newWidth)/2 + 'px';
 					div_canvas.style.marginTop = (window.innerHeight-newHeight)/2 + 'px';

 					div_gui.style.width = newWidth + 'px';
 					div_gui.style.height = newHeight + 'px';

 				}
 				engine.resize();


 			}

