var jogoPausado=!1;function pausaJogo(){jogoPausado=!0,document.getElementById("telaVoltaJogo").style.display="block"}function despausaJogo(){jogoPausado=!1,document.getElementById("telaVoltaJogo").style.display="none"}var AppPortfolio=function(e,o){var a=20;window.innerHeight>window.innerWidth&&(a=30);var i=a;var t=!1,n=!1;let s=!1;var l=[!1,new BABYLON.Vector3(2,2,0),new BABYLON.Vector3(0,6,6)],r=document.getElementById("renderCanvas"),d=document.getElementById("telaCarregando"),c=document.getElementById("telaVoltaJogo");r.width=window.innerWidth,r.height=window.innerHeight,d.style.width=window.innerWidth+"px",d.style.height=window.innerHeight+"px",c.style.width=window.innerWidth+"px",c.style.height=window.innerHeight+"px";var B,h,g,m,p,A,N,u,w,L,O,M,x,f,Y,b,I,y,v,P,V,C,T,S,k,E,z,G=!1,R=[],U=[],F=[],W=!1,H=!1,_=null,D=new BABYLON.Engine(r,!0),Z=[];scene=new BABYLON.Scene(D);let J=new BABYLON.RecastJSPlugin;BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI=function(){},BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI=function(){document.getElementById("telaCarregando").style.display="none",console.log("scene is now loaded")};function j(e,o){let a=e.position,i=o.position;return a.x+o.scaling.x>i.x&&a.x<i.x+o.scaling.x&&a.y+o.scaling.y>i.y&&a.y<i.y+o.scaling.y&&a.z+o.scaling.z>i.z&&a.z<i.z+o.scaling.z}function Q(){if(j(B,L)){if(L.fechada)if(anime({targets:p.scaling,x:1.2,y:1.2,z:1.2,easing:"easeOutBack",duration:250}),W)for(let e=0;e<U.length;e++){const o=U[e];o.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,10*Math.random(),0),o.getAbsolutePosition())}else{console.log("ativou icones 3d:"+_);for(let e=0;e<U.length;e++){const o=U[e];o.isVisible=!0,o.physicsImpostor=new BABYLON.PhysicsImpostor(o,BABYLON.PhysicsImpostor.BoxImpostor,{mass:1,restitution:.2},scene)}W=!0}L.fechada=!1,v.video.play(),N.material=E}else L.fechada=!0,v.video.pause(),p.scaling=new BABYLON.Vector3(1,1,1),N.material=z;if(j(B,O)){if(O.fechada)if(anime({targets:A.scaling,x:1.2,y:1.2,z:1.2,easing:"easeOutBack",duration:250}),H)for(let e=0;e<F.length;e++){const o=F[e];o.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,10*Math.random(),0),o.getAbsolutePosition())}else{console.log("ativou icones 3d:"+_);for(let e=0;e<F.length;e++){const o=F[e];o.isVisible=!0,o.physicsImpostor=new BABYLON.PhysicsImpostor(o,BABYLON.PhysicsImpostor.BoxImpostor,{mass:1,restitution:.2},scene)}H=!0}O.fechada=!1,V.video.play(),w.material=E}else O.fechada=!0,V.video.pause(),A.scaling=new BABYLON.Vector3(1,1,1),w.material=z;if(j(B,M)){if(M.fechada){console.log("ativa skills"),S.isVisible=!0,anime({targets:k.rotation,x:Math.PI/1.5,easing:"easeOutBack",duration:500});for(let e=0;e<R.length;e++){const o=R[e];o.isVisible=!0,o.scaling=new BABYLON.Vector3(0,0,0),anime({targets:o.scaling,x:1,y:1,z:1,easing:"easeOutBack",delay:50*e,duration:100})}}M.fechada=!1,u.material=E}else{u.material=z,M.fechada=!0,S.isVisible=!1,k.rotation=new BABYLON.Vector3(0,Math.PI,Math.PI);for(let e=0;e<R.length;e++){R[e].isVisible=!1}}}function X(){r.width=window.innerWidth,r.height=window.innerHeight,d.width=window.innerWidth+"px",d.height=window.innerHeight+"px",c.width=window.innerWidth+"px",c.height=window.innerHeight+"px",D.resize(),a=window.innerHeight>window.innerWidth?20:13}scene=function(){D.displayLoadingUI(),scene.clearColor=new BABYLON.Color3.FromHexString("#b1c5d9").toLinearSpace(),scene.ambientColor=BABYLON.Color3.White(),scene.animationsEnabled=!0,scene.collisionsEnabled=!0,camera=new BABYLON.ArcRotateCamera("Camera",0,0,0,new BABYLON.Vector3(0,0,0),scene),camera.setPosition(new BABYLON.Vector3(0,20,20)),new BABYLON.TransformNode("target",scene),camera.fov=.5,camera.pinchDeltaPercentage=.01,camera.wheelDeltaPercentage=.01,C=new BABYLON.HemisphericLight("light1",new BABYLON.Vector3(0,1,0),scene),(T=new BABYLON.DirectionalLight("dir01",new BABYLON.Vector3(-.8,-.8,-1),scene)).position=new BABYLON.Vector3(500,250,500),C.intensity=.6,T.intensity=2,T.shadowMinZ=1,T.shadowMaxZ=5e3,W=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ui1"),(H=new BABYLON.GUI.StackPanel).isVertical=!1,H.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,W.addControl(H),(x=new BABYLON.GUI.StackPanel).verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,W.addControl(x);var e=new BABYLON.ShadowGenerator(1024,T);e.usePoissonSampling=!0,e.useBlurExponentialShadowMap=!0,Y=BABYLON.MeshBuilder.CreateBox("cube",{size:1,height:1},scene),b=BABYLON.MeshBuilder.CreateBox("cube",{size:.1,height:.1},scene),o?(Y.isVisible=!0,b.isVisible=!0):(Y.isVisible=!1,b.isVisible=!1),scene.enablePhysics();var a=BABYLON.Mesh.CreateGround("ground1",100,100,2,scene);a.isVisible=!1,a.position.y=-1.5,a.physicsImpostor=new BABYLON.PhysicsImpostor(a,BABYLON.PhysicsImpostor.BoxImpostor,{mass:0,restitution:.1},scene);var d=BABYLON.Mesh.CreateBox("box",1,scene);d.isPickable=!1,d.isVisible=!1,d.scaling=new BABYLON.Vector3(24,2,18),d.showBoundingBox=!0,d.position=new BABYLON.Vector3(3,0,0),d.physicsImpostor=new BABYLON.PhysicsImpostor(d,BABYLON.PhysicsImpostor.BoxImpostor,{mass:0,restitution:.1},scene);var c=BABYLON.Mesh.CreateBox("box",1,scene);c.isPickable=!1,c.isVisible=!1,c.scaling=new BABYLON.Vector3(5,2,8),c.showBoundingBox=!0,c.position=new BABYLON.Vector3(-7,0,15),c.physicsImpostor=new BABYLON.PhysicsImpostor(c,BABYLON.PhysicsImpostor.BoxImpostor,{mass:0,restitution:.1},scene),(L=BABYLON.Mesh.CreateBox("box1",1,scene)).isPickable=!1,L.isVisible=!1,L.scaling=new BABYLON.Vector3(3,2,4),L.showBoundingBox=!0,L.position.x=12,L.position.y=3,L.position.z=7,L.fechada=!0,(O=BABYLON.Mesh.CreateBox("box",1,scene)).isPickable=!1,O.isVisible=!1,O.scaling=new BABYLON.Vector3(3,2,5),O.showBoundingBox=!0,O.position.x=-7,O.position.y=.2,O.position.z=16,O.fechada=!0,(M=BABYLON.Mesh.CreateBox("box",1,scene)).isPickable=!1,M.isVisible=!1,M.scaling=new BABYLON.Vector3(3,2,5),M.showBoundingBox=!0,M.position.x=-2.5,M.position.y=2,M.position.z=-10,M.fechada=!0,(S=BABYLON.MeshBuilder.CreatePlane("plane",{width:25,height:40},scene)).position=new BABYLON.Vector3(-2,17.2,-18.5),S.isVisible=!1,S.rotation=new BABYLON.Vector3(0,Math.PI,Math.PI/2);var W=BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(S,1024,1024),H=new BABYLON.GUI.StackPanel;W.addControl(H);var _=new BABYLON.GUI.TextBlock;_.height="70px",_.text="Blender",_.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,H.addControl(_);var j=new BABYLON.GUI.TextBlock;j.height="50px",j.text="3dsMax",j.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,H.addControl(j);var q=new BABYLON.GUI.TextBlock;q.height="50px",q.text="Javascript",q.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,H.addControl(q);var K=new BABYLON.GUI.TextBlock;K.height="50px",K.text="Unity",K.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,H.addControl(K);var $,ee,oe=new BABYLON.GUI.TextBlock;oe.height="50px",oe.text="After Effects",oe.textHorizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,H.addControl(oe),(E=new BABYLON.StandardMaterial("myMaterial",scene)).diffuseColor=new BABYLON.Color3(0,1,.5);var ae=new BABYLON.AssetsManager(scene);ae.addMeshTask("personagem","","assets/","pessoa_augusto.glb"),ae.addMeshTask("cenarioFabrica","","assets/","cenario_novo.glb");ae.onFinish=function(a){for(let d=0;d<a.length;d++){if("personagem"==a[d].name&&(a[d],a[d].loadedSkeletons[0],(B=a[d].loadedMeshes[0]).carregando=!1,B.carregandoTipo=null,B.speed=new BABYLON.Vector3(0,0,.05),B.nextspeed=new BABYLON.Vector3.Zero,e.addShadowCaster(B),h=scene.getAnimationGroupByName("idle"),g=scene.getAnimationGroupByName("anda2"),m=scene.getAnimationGroupByName("desacelera"),h.start(!0,1,h.from,h.to,!1),g.stop(),g.setWeightForAllAnimatables(0),m.setWeightForAllAnimatables(0),h.setWeightForAllAnimatables(1)),"cenarioFabrica"==a[d].name){const e=a[d];for(let a=0;a<e.loadedMeshes.length;a++)if(e.loadedMeshes[a].isPickable=!1,e.loadedMeshes[a].name.includes("cenario")&&(e.loadedMeshes[a].receiveShadows=!0,e.loadedMeshes[a].freezeWorldMatrix(),z=e.loadedMeshes[a].material,e.loadedMeshes[a].material.freeze(),e.loadedMeshes[a].isPickable=!1,e.loadedMeshes[a].doNotSyncBoundingInfo=!0),"plataforma1"==e.loadedMeshes[a].name&&(console.log("BURNS BURNS BURNS1"),N=e.loadedMeshes[a],e.loadedMeshes[a].receiveShadows=!0),"plataforma2"==e.loadedMeshes[a].name&&(console.log("BURNS BURNS BURNS2"),u=e.loadedMeshes[a],e.loadedMeshes[a].receiveShadows=!0),"plataforma3"==e.loadedMeshes[a].name&&(console.log("BURNS BURNS BURNS3"),w=e.loadedMeshes[a],e.loadedMeshes[a].receiveShadows=!0),e.loadedMeshes[a].name.includes("pergunta")&&(e.loadedMeshes[a].isVisible=!1),e.loadedMeshes[a].name.includes("skill")&&(e.loadedMeshes[a].isVisible=!1,R.push(e.loadedMeshes[a])),"lap"==e.loadedMeshes[a].name&&e.loadedMeshes[a],"lapTela"==e.loadedMeshes[a].name&&(console.log("achou tela"),(k=e.loadedMeshes[a]).rotation=new BABYLON.Vector3(0,Math.PI,Math.PI)),"painel1"==e.loadedMeshes[a].name&&(console.log("achou painel1"),e.loadedMeshes[a].isPickable=!1,e.loadedMeshes[a].doNotSyncBoundingInfo=!0,p=e.loadedMeshes[a]),"painel2"==e.loadedMeshes[a].name&&(console.log("achou painel1"),e.loadedMeshes[a].isPickable=!1,e.loadedMeshes[a].doNotSyncBoundingInfo=!0,A=e.loadedMeshes[a]),e.loadedMeshes[a].name.includes("icone")&&(console.log("achou incone"),e.loadedMeshes[a].isVisible=!1,e.loadedMeshes[a].parent=null,e.loadedMeshes[a].isPickable=!1,U.push(e.loadedMeshes[a])),e.loadedMeshes[a].name.includes("caixinha")&&(console.log("achou incone2"),e.loadedMeshes[a].isVisible=!1,e.loadedMeshes[a].parent=null,e.loadedMeshes[a].isPickable=!1,F.push(e.loadedMeshes[a])),e.loadedMeshes[a].name.includes("tela1")&&(y=new BABYLON.StandardMaterial("m",scene),v=new BABYLON.VideoTexture("vidtex","assets/painel1.mp4",scene),y.diffuseTexture=v,y.roughness=1,y.emissiveColor=new BABYLON.Color3.White,e.loadedMeshes[a].material=y,v.video.pause()),e.loadedMeshes[a].name.includes("tela2")&&(console.log("achou tela2"),P=new BABYLON.StandardMaterial("m",scene),V=new BABYLON.VideoTexture("vidtex2","assets/painel2.mp4",scene),P.diffuseTexture=V,P.roughness=1,P.emissiveColor=new BABYLON.Color3.White,e.loadedMeshes[a].material=P,V.video.pause()),"navmesh"==e.loadedMeshes[a].name){e.loadedMeshes[a].freezeWorldMatrix(),e.loadedMeshes[a].material.freeze(),navemeshe=e.loadedMeshes[a],e.loadedMeshes[a].isVisible=!1;var i={cs:.2,ch:.2,walkableSlopeAngle:90,walkableHeight:0,walkableClimb:1,walkableRadius:1,maxEdgeLen:2,maxSimplificationError:1.3,minRegionArea:8,mergeRegionArea:20,maxVertsPerPoly:6,detailSampleDist:6,detailSampleMaxError:1};J.createNavMesh([e.loadedMeshes[a]],i);var l=J.createDebugNavMesh(scene);l.position=new BABYLON.Vector3(0,.01,0);var r=new BABYLON.StandardMaterial("matdebug",scene);r.diffuseColor=new BABYLON.Color3(.1,.2,1),r.alpha=o?.5:0,l.material=r}}setTimeout(function(){t=!0,n=!0,s=!0},1e3)}i={cs:.2,ch:.2,walkableSlopeAngle:35,walkableHeight:1,walkableClimb:1,walkableRadius:1,maxEdgeLen:12,maxSimplificationError:1.3,minRegionArea:8,mergeRegionArea:20,maxVertsPerPoly:6,detailSampleDist:6,detailSampleMaxError:1},J.createNavMesh([navemeshe],i),f=J.createCrowd(10,.1,scene),I={radius:1.1,height:1.2,maxAcceleration:100,maxSpeed:5,collisionQueryRange:.5,pathOptimizationRange:0,separationWeight:1};var d=new BABYLON.Vector3(-2.2,.2,2),c=new BABYLON.TransformNode,L=f.addAgent(d,I,c);Z.push({idx:L,trf:c,mesh:Y,target:b}),B.position=d,D.runRenderLoop(function(){jogoPausado||scene.render()})},ae.load();var ie=function(e){if(n&&s&&(G=!0,h.stop(),h.setWeightForAllAnimatables(0),g.start(!0,1,g.from,g.to,!1),g.setWeightForAllAnimatables(1),l=scene.pick(scene.pointerX,scene.pointerY),$=l.hit?l.pickedPoint:null)){setTimeout(function(){camera.detachControl(r)},0);var a,i=f.getAgents();for(a=0;a<i.length;a++)J.getRandomPointAround($,1),f.agentGoto(i[a],J.getClosestPoint($));var t=J.computePath(f.getAgentPosition(i[0]),J.getClosestPoint($));o&&(ee=BABYLON.MeshBuilder.CreateDashedLines("ribbon",{points:t,updatable:!0,instance:ee},scene))}var l};scene.onPointerObservable.add(e=>{switch(e.type){case BABYLON.PointerEventTypes.POINTERDOWN:e.pickInfo.hit&&ie(e.pickInfo)}}),scene.onBeforeRenderObservable.add(()=>{if(t){if(B)if(l[0])camera.target=l[1];else{let e=new BABYLON.Vector3(B.position.x,B.position.y+2,B.position.z);camera.target=BABYLON.Vector3.Lerp(camera.target,e,.025);let o=new BABYLON.Vector3(B.position.x-i,B.position.y+i,B.position.z+i);camera.position=BABYLON.Vector3.Lerp(camera.position,o,.025)}if(n){var e=Z.length;for(let a=0;a<e;a++){var o=Z[a];o.mesh.position=f.getAgentPosition(o.idx);let e=f.getAgentVelocity(o.idx);if(f.getAgentNextTargetPathToRef(o.idx,o.target.position),e.length()>.5){B.position=o.mesh.position,e.normalize();let a=o.target.position.subtract(o.mesh.position),i=o.mesh.position.add(a.scale(-1));o.mesh.lookAt(i),B.lookAt(i)}else if(1==G){n=!1,g.stop(),h.start(!0,1,h.from,h.to,!1),h.setWeightForAllAnimatables(0);for(let e=0;e<10;e++)setTimeout(function(e){g.setWeightForAllAnimatables(0),h.setWeightForAllAnimatables(e/10)},10*e,e);setTimeout(function(e){n=!0},120),G=!1,Q()}}}}});var te=new BABYLON.DefaultRenderingPipeline("defaultPipeline",!0,scene,[camera]);te.imageProcessingEnabled=!0,te.imageProcessing.vignetteEnabled=!0,te.imageProcessing.vignetteWeight=3,te.sharpenEnabled=!0,te.chromaticAberrationEnabled=!0,te.chromaticAberration.aberrationAmount=300,te.chromaticAberration.radialIntensity=3;var ne=new BABYLON.GUI.TextBlock;ne.height="40px",ne.color="black",ne.fontSize=24,ne.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,x.addControl(ne);var se=new BABYLON.SceneOptimizerOptions(70,500);se.addOptimization(new BABYLON.HardwareScalingOptimization(0,1));var le=new BABYLON.SceneOptimizer(scene,se);return le.onSuccessObservable.add(function(){ne.text="State: Done",console.log("terminou otimizacao")}),le.onNewOptimizationAppliedObservable.add(function(e){var o=new BABYLON.GUI.TextBlock;o.height="30px",o.color="white",o.fontSize=18,o.text=e.getDescription(),x.addControl(o)}),le.onFailureObservable.add(function(){ne.text="State: Failed. Frame rate was "+le.currentFrameRate,console.log("State: Failed")}),X(),scene}(),window.addEventListener("resize",X()),X()};AppPortfolio("od1",!1);