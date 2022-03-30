/*funcao pra pegar largura da imagem de tutorial dos ods*/
function retornaOrientacaoTuto(_this){
	var widthToHeight = 16 / 9;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;
	if(newHeight > newWidth){
		widthToHeight = 9 / 16;
		$(_this).parent().find('#tutoLand').modal('hide');
		$(_this).parent().find('#tutoPort').modal('show');
		$imgAtual=$(_this).parent().find('#tutoPort');
	}else{
		widthToHeight = 16 / 9;
		$(_this).parent().find('#tutoLand').modal('show');
		$(_this).parent().find('#tutoPort').modal('hide');
		$imgAtual=$(_this).parent().find('#tutoLand');
	}
	if (newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		//$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
		//$imgAtual.css("marginTop", (window.innerHeight-newHeight)/2 + 'px');
	} else { 
		newHeight = newWidth / widthToHeight;
		//$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
	}
	$imgAtual.css("marginTop", (window.innerHeight-newHeight)/2 + 'px');
	$imgAtual.css("width",newWidth + 'px');
	$imgAtual.css("height",newHeight + 'px');
}
function pegaRotTela(){
	var rotTela=0;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	if(newHeight > newWidth){
		rotTela=1;
		return rotTela;
	}else{
		rotTela=0;
		return rotTela;
	}

}
function retornaOrientacaoVideo(_this){
	var widthToHeight = 16 / 9;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;
	$imgAtual=$(_this);

	if (newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
		$imgAtual.css("marginTop", (window.innerHeight-newHeight)/2 + 'px');
	} else { 
		newHeight = newWidth / widthToHeight;
		$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
		$imgAtual.css("marginTop", (window.innerHeight-newHeight)/2 + 'px');
	}
	$imgAtual.css("width",newWidth + 'px');
	$imgAtual.css("height",newHeight + 'px');
}
/*funcao pra abrir menu escondido*/
function abreMenuTit(_this){
	$(_this).closest('.telaMenu').find('#od_tit').animate({top: '0px',opacity:1},"fast");
	$(_this).closest('.telaMenu').find('#od_menu').animate({opacity:0},"fast");
	setTimeout(function(){
		$(_this).closest('.telaMenu').find("#od_tit").animate({top: '-50px',opacity:0},"fast");
		$(_this).closest('.telaMenu').find("#od_menu").animate({opacity:1},"fast");
	},3000);

}  

