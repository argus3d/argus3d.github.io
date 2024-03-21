var aplicativoOnline = false;
//firebase de aprove



/*funcao pra pegar largura da imagem de tutorial dos ods*/
function retornaOrientacaoTuto(_this) {
	var widthToHeight = 16 / 9;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;
	if (newHeight > newWidth) {
		widthToHeight = 9 / 16;
		$(_this).parent().find('#tutoLand').hide();
		$(_this).parent().find('#tutoPort').show();
		$imgAtual = $(_this).parent().find('#tutoPort');
	} else {
		widthToHeight = 16 / 9;
		$(_this).parent().find('#tutoLand').show();
		$(_this).parent().find('#tutoPort').hide();
		$imgAtual = $(_this).parent().find('#tutoLand');
	}
	if (newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		//$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
		//$imgAtual.css("marginTop", (window.innerHeight-newHeight)/2 + 'px');
	} else {
		newHeight = newWidth / widthToHeight;
		//$imgAtual.css("marginLeft",(window.innerWidth-newWidth)/2 + 'px');
	}
	$imgAtual.css("marginTop", (window.innerHeight - newHeight) / 2 + 'px');
	$imgAtual.css("width", newWidth + 'px');
	$imgAtual.css("height", newHeight + 'px');
}
function pegaRotTela() {
	var rotTela = 0;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	if (newHeight > newWidth) {
		rotTela = 1;
		return rotTela;
	} else {
		rotTela = 0;
		return rotTela;
	}

}
function retornaOrientacaoVideo(_this) {
	var widthToHeight = 16 / 9;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;
	$imgAtual = $(_this);

	if (newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		$imgAtual.css("marginLeft", (window.innerWidth - newWidth) / 2 + 'px');
		$imgAtual.css("marginTop", (window.innerHeight - newHeight) / 2 + 'px');
	} else {
		newHeight = newWidth / widthToHeight;
		$imgAtual.css("marginLeft", (window.innerWidth - newWidth) / 2 + 'px');
		$imgAtual.css("marginTop", (window.innerHeight - newHeight) / 2 + 'px');
	}
	$imgAtual.css("width", newWidth + 'px');
	$imgAtual.css("height", newHeight + 'px');
}
/*funcao pra abrir menu escondido*/
function abreMenuTit(_this) {
	$(_this).closest('.telaMenu').find('#od_tit').animate({ top: '0px', opacity: 1 }, "fast");
	$(_this).closest('.telaMenu').find('#od_menu').animate({ opacity: 0 }, "fast");
	$(_this).closest('.objetoDigital').find('#profCanvas').animate({ top: '0px' }, "medium");
	setTimeout(function () {
		$(_this).closest('.telaMenu').find("#od_tit").animate({ top: '-50px', opacity: 0 }, "fast");
		$(_this).closest('.telaMenu').find("#od_menu").animate({ opacity: 1 }, "fast");
		$(_this).closest('.objetoDigital').find('#profCanvas').animate({ top: '-15%' }, "fast");
	}, 3000);

}
/** fullscreen forçado **/
/*
var verificaOD = document.getElementsByClassName('od');
for(var i = 0; verificaOD.length > -1; i++){

if(verificaOD.length > -1){
//essa parte ta dando erro no player de video
	verificaOD.addEventListener("click", function(){
			alternaFullScreen(_idContainer,btFull,queue.getResult("full1"),queue.getResult("full2"),_idVideo,_idCanvas);
	}, false);
}
}
*/

/** funcao fullscreen dos ods 
 * Rever codigo, no android ele estoura o height escondendo o botao de voltar do fullscreen
 * 
 * **/
 var modoFullScreenOd=false;
 function alternaFullScreen(_div, _botaoFull, _img1, _img2, _vidDiv, _canvasDiv) {
	/*
	var elementoFull = document.getElementById(_div);
	var videodiv = document.getElementById(_vidDiv);
	var canvasdiv = document.getElementById(_canvasDiv);
	if (!modoFullScreenOd) {
		var t = window.innerHeight;

				videodiv.style.height = "50%";
				videodiv.style.width = "auto";
				videodiv.style.marginLeft = t / 350 + "rem";
				canvasdiv.style.height = "50%";
				canvasdiv.style.width = "auto";
				canvasdiv.style.marginLeft = t / 350 + "rem";

		_botaoFull.image = _img2;
		if (elementoFull.mozRequestFullScreen) {
			elementoFull.mozRequestFullScreen();
		} else {
			elementoFull.webkitRequestFullScreen();
		}
		modoFullScreenOd=true;
	} else {
				videodiv.style.height = "100%";
				videodiv.style.width = "auto";
				videodiv.style.marginLeft = "none";
				canvasdiv.style.height = "100%";
				canvasdiv.style.width = "auto";
				canvasdiv.style.marginLeft = "none";
		_botaoFull.image = _img1;
		if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			document.webkitCancelFullScreen();
		}
		modoFullScreenOd=false;
	}
	*/
}
function alternaFullScreenCanvas(_div, _botaoFull, _img1, _img2) {
	var elementoFull = document.getElementById(_div);
	if (!document.mozFullScreen && !document.webkitFullScreen) {
		var t = window.innerWidth;
		document.getElementById(_botaoFull).src = _img2;
		if (elementoFull.mozRequestFullScreen) {
			elementoFull.mozRequestFullScreen();
		} else {
			elementoFull.webkitRequestFullScreen();
		}
	} else {
		_botaoFull.image = _img1;
		document.getElementById(_botaoFull).src = _img1;
		if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			document.webkitCancelFullScreen();
		}
	}
}
function mobilecheckOds() {
	var check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

/** OD Video **/
function intializePlayers() {
	$(window).ready(function () {
		redimensionar();
	});
	$(window).resize(function () {
		redimensionar();
	});
	function redimensionar() {
		var iFrameName = document.getElementsByTagName('iframe');
		var divVideo = document.getElementsByClassName('video');
		for (let doc of iFrameName) {
			if (doc) {
				doc.height = "";
				doc.height = $(divVideo).width() / 1.7 + "px";

				console.log(doc.contentWindow.document.body.scrollWidth + "px")
			}
		}
	}
	$(window).ready(function odOnline(isOffline) { //let of da problema no android velho
		if (isOffline) {
			var frame = document.getElementsByTagName('iframe');
			for (let item of frame) {
				item.hidden = true;
			}
		}
		else {
			aplicativoOnline = true;
			var frame = document.getElementsByClassName('player');
			for (let item of frame) {
				item.hidden = true;
			}

		}
	});
	$('.player').each(function () {
		var path, name, poster, player, $vidContainer, $vid, $playPause, $seekSlider, $curTime, $durTime, $mute, $volume;

		$vidContainer = $(this);
		path = $vidContainer.attr('data-path');
		name = $vidContainer.attr('data-name');
		poster = $vidContainer.attr('data-poster');
		if (/iPad/i.test(navigator.userAgent)) {
			$vidContainer.html('<a href="uniwebview://movie?name=' + name + '">' +
				'<img src="' + path + poster + '" style="position:relative; width: 100%; height: auto; text-align: center; overflow: hidden;">' +
				'<video style="alpha:0;" height="0">' +
				'</video>' +
				'</a>');
			$vidContainer.removeClass('playing').addClass('paused');
		} else if (/iPhone|iPod/i.test(navigator.userAgent)) {
			$vidContainer.html('<video preload="metadata" poster="' + path + poster + '" controls>' +
				'<source src="' + path + name + '.mp4" type="video/mp4" />' +
				'<source src="' + path + name + '.webm" type="video/webm" />' +
				'<source src="' + path + name + '.ogv" type="video/ogg" />' +
				'</video>');
		} else {
			$vidContainer.html('<video poster="' + path + poster + '">' +
				'<source src="' + path + name + '.mp4" type="video/mp4" />' +
				'<source src="' + path + name + '.webm" type="video/webm" />' +
				'<source src="' + path + name + '.ogv" type="video/ogg" />' +
				'</video>' +
				'<div class="controlBar">' +
				'<input class="seekSlider" type="range" min="0" max="100" value="0" step="1">' +
				'<button class="playPause">&#9658;</button>' +
				'<span class="curTime">00:00</span> / <span class="durTime">00:00</span>' +
				'<button class="mute">&#x1f50a;</button>' +
				'<input class="volume" type="range" min="0" max="100" value="100" step="1">' +
				'</div>');

		}

		$vid = $vidContainer.find('video');
		player = $vid.get(0);
		$playerControls = $vidContainer.find('.controlBar');
		$playPause = $playerControls.find('.playPause');
		$seekSlider = $playerControls.find('.seekSlider');
		$curTime = $playerControls.find('.curTime');
		$durTime = $playerControls.find('.durTime');
		$mute = $playerControls.find('.mute');
		$volume = $playerControls.find('.volume');
		$playPause.on('click', function () {
			if (player.paused) {
				player.play();
				$vidContainer.removeClass('paused').addClass('playing');
				$playPause.html('&#10074;&#10074;');
			} else {
				player.pause();
				$vidContainer.removeClass('playing').addClass('paused');
				$playPause.html('&#9658;');
			}
		});

		$vid.on('click', function () {
			if (player.paused) {
				player.play();
				$vidContainer.removeClass('paused').addClass('playing');
				$playPause.html('&#10074;&#10074;');
			} else {
				player.pause();
				$vidContainer.removeClass('playing').addClass('paused');
				$playPause.html('&#9658;');
			}
		});
		$vid.on('ended', function () {
			player.load();
			$vidContainer.removeClass('playing').addClass('paused');
			$playPause.html('&#9658;');
			$seekSlider.val(0);
		});
		$seekSlider.on('change', seek);
		$vid.on('timeupdate', seekTimeUpdate);
		$mute.on('click', mute);
		$volume.on('change', volume);

		function seek() {
			var seekto = player.duration * ($seekSlider.val() / 100);
			player.currentTime = seekto;
		}

		function seekTimeUpdate() {
			var nt = player.currentTime * (100 / player.duration);
			$seekSlider.val(nt);
			var curmins = Math.floor(player.currentTime / 60);
			var cursecs = Math.floor(player.currentTime - curmins * 60);
			var durmins = Math.floor(player.duration / 60);
			var dursecs = Math.floor(player.duration - durmins * 60);
			if (cursecs < 10) {
				cursecs = '0' + cursecs;
			}
			if (dursecs < 10) {
				dursecs = '0' + dursecs;
			}
			if (curmins < 10) {
				curmins = '0' + curmins;
			}
			if (durmins < 10) {
				durmins = '0' + durmins;
			}
			$curTime.html(curmins + ':' + cursecs);
			$durTime.html(durmins + ':' + dursecs);
		}

		function mute() {
			if (!player.muted) {
				player.muted = true;
				$volume.val('0');
				$mute.html('&#x1f507;');
			} else {
				player.muted = false;
				$volume.val('70');
				$mute.html('&#x1f50a;');
			}
		}

		function volume() {
			player.volume = parseFloat($volume.val() / 100);
			if (player.volume == 0) {
				$mute.html('&#x1f507;');
			} else {
				$mute.html('&#x1f50a;');
			}
		}

	})
};


/** OD Arrastar e Soltar **/

function initializeDragAndDrop() {
	$('.arrastar').each(function (i, e) {
		var $mainArea, $dragArea, $dropArea, $draggables = [], $droppables = [];
		$mainArea = $(e).children('.areaArraste');
		$dragArea = $mainArea.children('.areaPegar');
		$dropArea = $mainArea.find('.areaSoltar');
		// Store the pile of itens
		$dragArea.children('li').each(function (i, e) {
			var $draggable = $(e);
			$draggable.attr('data-position', i);
			$draggables[i] = $draggable;
		});
		// Store droppable areas
		$dropArea.children('li').each(function (i, e) {
			var $droppable = $(e);
			$droppable.attr('data-position', i)
			.width($draggables[i].outerWidth())
			.height($draggables[i].outerHeight());
			$droppables[i] = $droppable;
		});
		// Shuffle pile of itens
		$draggables.sort(function () {
			return Math.random() - .5
		});
		// Clear the area
		$dragArea.html('');
		$dropArea.html('');
		// Populate draggable area shuffled
		$.each($draggables, function (i, e) {
			$(e).appendTo($dragArea).draggable({
				containment: $mainArea,
				stack: $draggables,
				cursor: 'move',
				revert: true
			});
		});
		// Create the droppable slots
		$.each($droppables, function (i, e) {
			$(e).appendTo($dropArea).droppable({
				drop: handleDragDrop
			});
		});
	});
}

function handleDragDrop(event, ui) {
	var $droppable = $(this);
	dropPosition = $droppable.data('position'),
	draggingPosition = ui.draggable.data('position');

	// If the element was dropped to the correct slot,
	// change the element style, position it directly
	// on top of the slot, and prevent it being dragged
	// again
	if (dropPosition == draggingPosition) {
		ui.draggable.addClass('true').draggable('disable');
		$droppable.droppable('disable');
		$(window).resize(function () {
			ui.draggable.position({ of: $droppable, my: 'center center', at: 'center center' });
		}).trigger('resize');
		ui.draggable.draggable('option', 'revert', false);
	}
}

/** OD Ordenar **/

function initializeReorder() {
	$('.ordenar').each(function (i, e) {
		var $orderArea, $orderItensArea, $orderItens = [];
		$orderArea = $(e).children('.areaOrdenacao');
		$orderItensArea = $orderArea.children('.itensOrdenar');

		// Store the pile of itens
		$orderItensArea.children('li').each(function (i, e) {
			var $item = $(e);
			$item.attr('data-position', i);
			$orderItens[i] = $item;
		});

		// Shuffle pile of itens
		$orderItens.sort(function () {
			return Math.random() - .5
		});

		var repeat = false;

		$.each($orderItens, function (i, e) {
			if (i == e.attr('data-position')) {
				repeat = true;
				return false;
			}
		});

		while (repeat) {
			$orderItens.sort(function () {
				return Math.random() - .5
			});

			$.each($orderItens, function (i, e) {
				if (i == e.attr('data-position')) {
					repeat = true;
					return false;
				}

				repeat = false;
			});
		}

		// Clear the area
		$orderItensArea.html('');

		// Populate draggable area shuffled
		$.each($orderItens, function (i, e) {
			$(e).appendTo($orderItensArea);
		});

		$orderItensArea.sortable({
			placeholder: 'ui-drop-placeholder',
			cursor: 'move',
			cancel: '.disable-sort',
			start: handleOrderDrag,
			update: handleOrderChange
		}).disableSelection();

		// $orderItensArea.children('li').each(function(i, e) {
		//     var $item = $(e);

		//     if (i == $item.attr('data-position')) {
		//         $item.removeClass('false').addClass('true').addClass("disable-sort");
		//     } else {
		//         $item.removeClass('false true')
		//     }
		// });

		function handleOrderDrag(event, ui) {
			ui.item.removeClass('false true')
		}

		function handleOrderChange(event, ui) {
			$orderItensArea.children('li').each(function (i, e) {
				var $item = $(e);

				if (i == $item.attr('data-position')) {
					$item.removeClass('false').addClass('true').addClass("disable-sort");
				} else {
					$item.removeClass('true').addClass('false').removeClass("disable-sort");
				}
			});
		}
	});
}
jQuery(function ($) {
	/** Blockquote resizer **/
	$('blockquote').each(function (i, e) {
		if ($(e).outerHeight() > $(this).outerWidth()) {
			$(e).addClass('alto');
		}
	});

	/** OD Vídeo **/
	intializePlayers();

	$(window).load(function () {
		/** OD Arrastar e Soltar **/
		initializeDragAndDrop();

		/** OD Ordenar **/
		initializeReorder();
	});
	/* insere som nos titulo*/
	$('.tituloSonoro').each(function (i, e) {
		var $audioContainer = $(this);
		var pathAudio = $audioContainer.attr('arquivoAudio');
		var _href = $audioContainer.attr('href');
		var path = $audioContainer.attr('data-path');
		var som = new Audio(pathAudio);
		var somtocando = false;
		if (_href) {
			var tague = '<img id="imgPlayer' + i + '" src="' + path + 'btplayer.png" alt="" style="width: 50px;vertical-align: middle; margin-right: 0.3em;">';
			$(e).prepend(tague);
		} else {
			var tague = '<img id="imgPlayer' + i + '" src="' + path + 'btplayer.png" alt="" style="width: 50px;vertical-align: middle; margin-right: 0.3em;display:inline">';
			$(e).prepend(tague);
		}

		document.getElementById("imgPlayer" + i).addEventListener('click', function (e) {
			if (somtocando) {
				somtocando = false;
				som.pause();
				this.src = path + "btplayer.png";
			} else {
				som.play();
				somtocando = true;
				console.log("toca", pathAudio);
				this.src = path + "btplayer_pause.png";
			}
		});
		som.addEventListener("ended", function () {
			document.getElementById("imgPlayer" + i).src = path + "btplayer.png";
		});
	});
	/** OD Abas **/
	$('.abas').each(function (i, e) {
		$(e).easytabs({
			updateHash: false
		});
	});

	/** Check if the current URL contains '#' **/
	if (document.URL.indexOf("#") == -1) {
		/** Set the URL to whatever it was plus "#". **/
		url = document.URL + "#";
		location = "#";
		/** Reload the page **/
		location.reload(true);
	}

	/** OD Lacunas e Colunas Relacionaveis **/
	var $lacunas = $('.lacunas, .relacionaveis').find('.input');
	$lacunas.each(function (i, e) {
		var $lacuna = $(e),
		$input = $lacuna.children('input');
		$input.on('input focus', function () {
			$lacuna.removeClass('true false');
			var value,
			result;
			if ($(this).hasClass('ignore-special')) {
				value = latinize($(this).val().toLowerCase());
				result = latinize($(this).attr('data-result').toLowerCase());
				/*remove espacos desnecessarios no fim e no inicio da palavra caso tenha*/
				value = value.trim();
			} else {
				value = $(this).val().toLowerCase();
				result = $(this).attr('data-result').toLowerCase();
			}
			if (value == result) {
				$lacuna.addClass('true');
			} else if (value != '' && value != result) {
				$lacuna.addClass('false');
			}
		});
	});

	/** OD Quiz **/
	var $quizAlternativas = $('.quiz').find('.input');
	$quizAlternativas.each(function (i, e) {
		var $alternativa = $(e),
		$input = $alternativa.children('input');
		$input.on('change', function () {
			var quiz = $(this).attr('name'),
			quizType = $(this).attr('type');
			if (quizType == 'checkbox') {
				if ($input.is(':checked') && $input.attr('data-result') == 'true') {
					$alternativa.addClass('true');
				} else if ($input.is(':checked') && $input.attr('data-result') == 'false') {
					$alternativa.addClass('false');
				} else {
					$quizAlternativas.children('input[name="' + quiz + '"]').not(':checked').parent().removeClass('true false');
				}
			} else if (quizType == 'radio') {
				$quizAlternativas.children('input[name="' + quiz + '"]').parent().removeClass('true false');
				if ($input.attr('data-result') == 'true') {
					$alternativa.addClass('true');
				} else {
					$alternativa.addClass('false');
				}
			}
		});
	});

	$(document).on('click', 'a[href^="http"]', function (event) {
		event.preventDefault();
		window.open(this.href, 'popUpWindow', 'height=600,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	});
});


/* OD Slider */
$(document).on('ready', function () {
	if ($('.sliderVar').length) {
		$('.sliderVar').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true
		});
	}

});

var result = [];
var rankLink;
var rankId;
var textoRank;
var nota1;
/*function estrela_extensivo(nota){
	console.log($(nota).parent().find('#rankTitle'));
	$(nota).parent().hide();

	if(nota.id == "botao1" || nota.id == "botao2"){
		$(nota).parent().parent().find('#rankTitle').text("O que poderíamos fazer para ganhar mais uma estrela?");
		$(nota).parent().parent().parent().find('#comentario').show();
	}else{
		$(nota).parent().parent().find('#rankTitle').text("Obrigado!");
		$(nota).parent().parent().parent().find('#comentario').hide();
	}
	var divId = document.getElementsByClassName("objetoDigitalExtensivo");
	var i = 0;
	var numeroOds = 20;
	var listas = [];
	var rankTodos = [];
	for (i = 0; i < numeroOds; i++) {
		if (divId[i] != undefined) {
			var lista = document.getElementsByClassName('rankEstrela').item(i);
			listas.push(lista);
			console.log(listas.length);
			rankTodos[i] = lista.parentNode;

		}
	};
	var notaParent = nota.parentNode;
	var notaRank = notaParent.parentNode;
	for (i = 0; i < listas.length; i++) {
		if (divId[i] === undefined) {
		} else if (notaRank.id === rankTodos[i].id) {
			nota1 = divId[i].id + "/" + nota.id;

			console.log(nota.id);
			if (nota.id == "botao1" || nota.id == "botao2") {
				setTimeout(function () {
					$(nota).parent().parent().find('#rankTitle').text("O que poderíamos fazer para ganhar mais uma estrela?");
					$(nota).parent().parent().parent().find('#comentario').show();

				}, 500);
			} else {
				result.push(nota1);
				setTimeout(function () {
					$(nota).parent().parent().find('#rankTitle').text("Obrigado!");

				}, 500);

				setTimeout(function () {
					$("#caixaRank").modal('hide');
					$("#btAvalie").hide();
				}, 2000);
			}
		}

	};
	window.parent.analyticsOds(result);
	console.log(result);

}
function setCommentrank_extensivo(e){
	var janelaRank = e.parentNode;
	var filho = janelaRank.childNodes;
	textoRank = filho[3].value;
	result.push(nota1 + "/" + textoRank);
	filho[3].value = "";

	$(e).parent().parent().find('#rankTitle').text("Obrigado!");
	$(e).parent().parent().parent().find('#comentario').hide();
	var janelaRank = e.parentNode;
	console.log(e.parentNode);
	var filho = janelaRank.childNodes;
	console.log(filho);
	textoRank = filho[1].value;
	console.log(textoRank);
	result.push(nota1 + "/" + textoRank);
	console.log(result);
	filho[3].value = "";
	$("#caixaRank").modal('hide');
	$("#btAvalie").hide();

}*/

function estrela(nota) {
	var divId;
	if (document.getElementsByClassName("od").length > 0) {
		divId = document.getElementsByClassName("od");
		console.log("entreiOD");
	}
	if (document.getElementsByClassName("objetoDigitalExtensivo").length > 0) {
		divId = document.getElementsByClassName("objetoDigitalExtensivo");
		console.log("entreiExtensivo");
	}
	var i = 0;
	var numeroOds = 20;
	var listas = [];
	var rankTodos = [];
	for (i = 0; i < numeroOds; i++) {
		if (divId[i] != undefined) {
			var lista = document.getElementsByClassName('rankEstrela').item(i);
			listas.push(lista);
			rankTodos[i] = lista.parentNode;

		}
	};
	var notaParent = nota.parentNode;
	var notaRank = notaParent.parentNode;
	for (i = 0; i < listas.length; i++) {
		if (divId[i] === undefined) {
		} else if (notaRank.id === rankTodos[i].id) {
			nota1 = divId[i].id + "/" + nota.id;
			if (document.querySelector("a[href='#rank" + (i + 1) + "']") > 0) {
				rankLink = document.querySelector("a[href='#rank" + (i + 1) + "']");
			}
			rankLink = document.querySelector("a[href='#rank" + (i) + "']");

			if (nota.id == "botao1" || nota.id == "botao2") {
				setTimeout(function () {
					$.featherlight.current().setContent($('#comentario'))

				}, 500);
			} else {
				result.push(nota1);
				setTimeout(function () {
					notaRank.parentNode.style.backgroundColor="#EC2784";
					$.featherlight.current().setContent($('<div style="float: left;height:200px"><img class="rankCarinhaFeliz"/></div><div style="float: right;height:200px"><h2 style="margin-top: 100px;color: #FCB833; font-size: 30pt" class="textoCentralizado">Obrigado!</h2></div>'))

				}, 500);
				setTimeout(function () {
					$.featherlight.close();
					rankLink.remove();

				}, 2000);
			}
		}

	};
	/*
	manda mensagem pra unity sobre o comentario
	*/
	if (window.vuplex) {
		window.vuplex.postMessage({ type: 'estrela', message: nota.id });
	} else {
		window.addEventListener('vuplexready', function(){
			window.vuplex.postMessage({ type: 'estrela', message: nota.id });
		}, false);
	}
	console.log("qual rank" + nota.id);
	window.parent.analyticsOds(result);
	console.log(result);
};

function setCommentrank(e) {
	var janelaRank = e.parentNode;
	
	console.log(e.parentNode);
	var filho = janelaRank.childNodes;
	console.log(filho);
	textoRank = filho[3].value;
	console.log(textoRank);
	/*
	manda mensagem pra unity sobre o comentario
	*/
	if (window.vuplex) {
		window.vuplex.postMessage({ type: 'texto', message: textoRank });
	} else {
		window.addEventListener('vuplexready', function(){
			window.vuplex.postMessage({ type: 'texto', message: textoRank });
		}, false);
	}


	result.push(nota1 + "/" + textoRank);
	console.log(result);
	setTimeout(function () {
		janelaRank.parentNode.style.backgroundColor="#EC2784";
		$.featherlight.current().setContent($('<div style="float: left;height:200px"><img class="rankCarinhaFeliz"/></div><div style="float: right;height:200px"><h2 style="margin-top: 100px;color: #FCB833; font-size: 30pt" class="textoCentralizado">Obrigado!</h2></div>'))


	}, 500);
	setTimeout(function () {
		filho[3].value = "";
		$.featherlight.close();
		rankLink.remove();
	}, 2000);
}

/* Tabelas */

$(document).on('ready', function () {
	var tbs = [];
	var paragrafos;
	var content = [];
	var tabela = document.getElementsByTagName("table");

	for (i = 0; i < tabela.length; i++) {
		var colunas = tabela[i].getElementsByTagName("td");
		var linhas = tabela[i].getElementsByTagName("tr");

		var cabecalhos = [];
		for (a = 0; a < linhas.length; a++) {
			var colunas2 = linhas[a].getElementsByTagName("td");
			if (a == 0) {
				var t = linhas[0].getElementsByClassName("cabecalho");
				if (t.length == 0) {
					break;
				}
				for (var b = 0; b < t.length; b++) {
					cabecalhos[b] = t[b].textContent;
				};
			} else {
				for (var c = 0; c < linhas.length; c++) {
					linhas[c].setAttribute("data-title", "linha");
				}
				for (var b = 0; b < colunas2.length; b++) {
					console.log("qual=" + b + " " + colunas2[b]);
					//colunas2[b].setAttribute("class", "cabecalho");
					colunas2[b].setAttribute("data-title", " " + cabecalhos[b]);
				};

			}

			//var header2 = colunas[a].getElementsByClassName("cabecalho");
			/*
			if(paragrafos.length>1){
				var paragrafoDois = paragrafos[1].textContent;
				var paragrafoUm = paragrafos[0].textContent;
				paragrafos[0].append(" " + paragrafoDois);
				paragrafos[1].style.display = "none";
				tbs[i][0][a].setAttribute("data-title", " " + paragrafos[0]);
			}
			else{

				tbs[i][0][a].setAttribute("data-title", content[a]);
			}
			*/
		}
	}
});



/**
 * ATIVADOR DOS PLAYERS DE ÁUDIO V2
 * 
 * Criado em 27/07/2020 por Matheus Dias
 */

 $(document).on('ready', () => {
 	$('.audioPlayer').each((i, e) => {
 		const el = $(e)
 		let file = el.data('file')
 		const audioNumber = el.data('numero')
 		if (!audioNumber) {
 			console.error('O seguinte elemento não possui "data-numero" e não foi inicializado.')
 			return console.log(e)
 		}
 		if (!file) {
 			if (typeof audioFilePattern === 'undefined') {
 				console.error('O seguinte elemento não possui "data-file" e a variavel "audioFilePattern" não está presente.')
 				return console.log(e)
 			}
 			file = audioFilePattern.replace('%', audioNumber)
 		}
 		el.append(`<canvas id="audio${i}" width="298" height="118"></canvas>`)

 		const thisPlayer = AppPlayer2(`audio${i}`,
 			file,
 			'audio_toca.png',
 			'audio_para.png',
 			`Áudio ${audioNumber}`,
 			35,
 			[130, 68]
 			)
 		playersMultiplos.push(thisPlayer);
 	})
 })

// atualizações para o Extensivo
// Mikhael Gusso  02/10/2020
$(document).on('ready', () => {

	Array.from(document.getElementsByTagName("input")).forEach(function (item) {
		item.removeAttribute("checked");
		item.checked = false;
		item.addEventListener('click', function (a) {
			if (item.getAttribute("checked") != null) {
				item.removeAttribute("checked");
				item.checked = false;
			} else
			if (item.getAttribute("checked") == null) {
				item.setAttribute("checked", "true");
				item.checked = true;
			}

		})
	});
})
var acertos = 0;
var qErros = 0;
var quantiaAcertos = 0;
var quantiaErros = 0;

function ligaGabarito(resposta) {
	Array.from(document.getElementsByClassName("gabarito")).forEach(function (resposta) {
		resposta.removeAttribute("hidden");
	})
	Array.from(document.getElementsByClassName("pontuacao")).forEach(function (resposta) {
		resposta.removeAttribute("hidden");
	})
	Array.from(document.getElementsByTagName("input")).forEach(function (ponto) {
		if (ponto.getAttribute("checked") == "true") {
			if (ponto.getAttribute("data-result") == "true") {
				ponto.parentNode.parentNode.classList.add('acertou');
				acertos = document.getElementsByClassName('acertou');
				//console.log(acertos.length);
			}
		}
		if (ponto.getAttribute("checked") == "true") {
			if (ponto.getAttribute("data-result") == null) {
				ponto.parentNode.parentNode.classList.add('errou');

			}
		}
		if (ponto.getAttribute("checked") == null) {
			if (ponto.getAttribute("data-result") == "true") {
				ponto.parentNode.parentNode.classList.add('respostaCerta');
				qErros = document.getElementsByClassName('respostaCerta');

			}
		}

	})
	Array.from(document.getElementsByClassName("certas")).forEach(function (posicao) {
		if (acertos == 0) {
			posicao.textContent = '0';
		} else {
			posicao.textContent = acertos.length;
			quantiaAcertos = posicao.textContent;
		}
	})
	Array.from(document.getElementsByClassName("erradas")).forEach(function (posicao) {
		if (qErros == 0) {
			posicao.textContent = '0';
		} else {
			posicao.textContent = qErros.length;
			quantiaErros = posicao.textContent;
			console.log(quantiaErros);
		}
	})
	Array.from(document.getElementsByClassName("pontFinal")).forEach(function (posicao) {
		posicao.textContent = quantiaAcertos;
		if ((quantiaAcertos) > 0) {
			posicao.classList.add('positivo');
		}
		else {
			posicao.classList.add('negativo');
		}
	})
}





/**
 * SCRIPT PARA LIGAR AS TARJAS NO ENSINO MÉDIO
 * 
 * Obs: muitas coisas estavam limitadas no css, e não queria colocar muita
 * coisa no HTML na marretinha, pois seria muito trabalho para editar, então
 * estou inserindo tudo no JS
 * 
 * Criado por Matheus Dias
 */

/**
 * TARJAS possui todos os objetos de tarjas, com suas cores.
 */
 const TARJAS = {
 	"tarjaBoxCuriosidade": ["#00a0b8", "#009e6d"],
 	"tarjaBoxObersvacao": ["#006EB0", "#00A8E7"],
 	"tarjaBoxAtencao": ["#D53021", "#D61676"],
 	"tarjaBoxSaberMais": ["#8A4B8F", "#33569F"],
 	"tarjaBoxResumo": ["#209B36", "#E3DC00"],
 	"tarjaBoxOlhoNoEnem": ["#DA6105", "#EBBD1A"],
 	"tarjaBoxTextoComplementar": ["#27539A", "#008ED1"],
 	"tarjaBoxOjo": ["#D53021", "#D61676"],
 	"tarjaBoxNota": ["#006DAF", "#00A8E7"],
 	"tarjaBoxLoSabias": ["#00A0B8", "#009E6D"],
 	"tarjaBoxImportante": ["#CF428A", "#8C3487"],
 	"tarjaBoxConoceMas": ["#8A4B8F", "#33569F"],
 	"tarjaBoxComprensionLectora": ["#DA6105", "#EBBD1A"],
 	"tarjaBoxDidYouKnow": ["#00A0B8", "#009E6D"],
 	"tarjaBoxImportant": ["#cf428a", "#8c3487"],
 	"tarjaBoxNote": ["#006DAF", "#00A8E7"],
 	"tarjaBoxAttencion": ["#D53021", "#D61676"],
 	"tarjaBoxToGoFurther": ["#8A4B8F", "#33569F"]
 }

 $(document).on('ready', () => {
 	if (!$('body').hasClass('medio')) return

 		console.info('Ligando tarjas do ensino médio...')

 	$('.boxTarja').each((i, e) => {
 		const el = $(e)
 		const tarja = Object.keys(TARJAS)
 		.find(t => el.hasClass(t))

 		const tarjaTitulo = el.children().first().text()
 		el.children().first().remove()

 		const [primary, secondary] = TARJAS[tarja]

 		el.prepend(`<div class="tarjaTitulo">
 			<svg class="tarjaLinha" width="100%" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
 			<line x1="7" y1="2.5" x1="0%" x2="100%" y2="2.5" stroke="url(#tarja_${tarja})" />
 			<line x1="7" y1="6.5" x1="0%" x2="100%" y2="6.5" stroke="url(#tarja_${tarja})" stroke-width="3" />
 			<rect x="1" y="1" width="9" height="9" fill="white" stroke="url(#tarja_${tarja})" stroke-width="2" />
 			<rect x="100%" y="1" width="9" height="9" fill="white" stroke="url(#tarja_${tarja})" stroke-width="2" class="rectFinal" />
 			<defs>
 			<linearGradient id="tarja_${tarja}" x1="0" y1="1" x2="58" y2="1" gradientUnits="userSpaceOnUse">
 			<stop offset="0" stop-color="${primary}" /><stop offset="1" stop-color="${secondary}" />
 			</linearGradient>
 			</defs>
 			</svg>
 			<div class="tarjaTituloBox">
 			<svg width="281" height="36" viewBox="0 0 281 36" fill="none" xmlns="http://www.w3.org/2000/svg">
 			<path d="M0 0H281L259.897 27.7203C255.925 32.9374 249.745 36 243.188 36H181.492C180.156 36 178.909 35.333 178.167 34.2222L177.967 33.9231H103.033V33.9231C102.395 35.1961 101.093 36 99.6695 36H37.8121C31.2552 36 25.0747 32.9374 21.103 27.7203L0 0Z" fill="url(#tarja_box_${tarja})" />
 			<defs>
 			<linearGradient id="tarja_box_${tarja}" x1="0" y1="0" x2="140.5" y2="0" gradientUnits="userSpaceOnUse">
 			<stop stop-color="${primary}" />
 			<stop offset="1" stop-color="${secondary}" />
 			</linearGradient>
 			</defs>
 			</svg>
 			</div>


 			<div class="tarjaTituloTexto">
 			<span>${tarjaTitulo}</span>
 			</div>
 			</div>`)

 		el.append(`
 			<svg class="tarjaLinha" width="100%" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
 			<line x1="7" y1="2.5" x1="0%" x2="100%" y2="2.5" stroke="url(#tarja_${tarja})" />
 			<line x1="7" y1="6.5" x1="0%" x2="100%" y2="6.5" stroke="url(#tarja_${tarja})" stroke-width="3" />
 			<rect x="1" y="1" width="9" height="9" fill="white" stroke="url(#tarja_${tarja})" stroke-width="2" />
 			<rect x="100%" y="1" width="9" height="9" fill="white" stroke="url(#tarja_${tarja})" stroke-width="2" class="rectFinal" />
 			</svg>`)


 	})
 })



/**
 * SCRIPT PARA LIGAR ICONES RA NO EXTENSIVO
 * Estou usando SVG para ser mais facil editar as cores
 * Criado por Matheus Dias
 */

 $(document).on('ready', () => {
 	if (!$('body').hasClass('extensivo')) return

 		$('.textoRA').each((i, e) => {
 			const el = $(e)

 			el.append(`
 				<svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.136 9.20831H15.232C11.0258 9.20831 7.616 12.6035 7.616 16.7916V63.375C7.616 67.5631 11.0258 70.9583 15.232 70.9583H51.136C55.3422 70.9583 58.752 67.5631 58.752 63.375V16.7916C58.752 12.6035 55.3422 9.20831 51.136 9.20831Z" fill="black"/>
 				<path d="M51.7297 14H14.2703C13.0164 14 12 14.9907 12 16.2128V63.7872C12 65.0093 13.0164 66 14.2703 66H51.7297C52.9836 66 54 65.0093 54 63.7872V16.2128C54 14.9907 52.9836 14 51.7297 14Z" fill="#11133D" class="fundoRA"/>
 				<g filter="url(#filter0_d)"><path d="M45.6083 36.5476L28.7953 27.169C26.6196 25.9553 23.936 27.5212 23.936 30.0043V49.1367C23.936 51.6443 26.6672 53.2073 28.8432 51.9449L45.6561 42.1911C47.8384 40.9251 47.8117 37.7768 45.6083 36.5476Z" fill="#DEDEDE"/></g>
 				<path d="M15.4636 20.6025C14.3421 19.1302 15.3826 17 17.2233 17H48.7808C50.0064 17 51 18.0022 51 19.2385V60.757C51 62.8976 48.3077 63.8171 47.0183 62.1175L30.9897 40.9842L15.4636 20.6025Z" fill="url(#paint0_linear)"/><path d="M44.2027 38.1415L32.5938 31.4679C31.769 30.9937 30.7144 31.2751 30.2382 32.0964C29.762 32.9176 30.0446 33.9677 30.8694 34.4418L42.4782 41.1155C43.303 41.5896 44.3577 41.3082 44.8338 40.487C45.31 39.6658 45.0274 38.6156 44.2027 38.1415Z" fill="white"/>
 				<path d="M28.8685 29.6144L28.7858 29.5668C27.961 29.0927 26.9064 29.3741 26.4302 30.1953C25.954 31.0165 26.2366 32.0666 27.0614 32.5408L27.1441 32.5883C27.9689 33.0625 29.0235 32.7811 29.4997 31.9598C29.9759 31.1386 29.6933 30.0885 28.8685 29.6144Z" fill="white"/><path d="M3.26401 69.875V74.2083C3.26401 74.8069 3.75112 75.2917 4.35201 75.2917H8.70401" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.032 75.2917H60.384C60.9851 75.2917 61.472 74.8069 61.472 74.2083V69.875" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 				<path d="M61.472 8.66667V4.33333C61.472 3.73502 60.9851 3.25 60.384 3.25H56.032" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.16 3.25H3.808C3.20712 3.25 2.72 3.73502 2.72 4.33333V8.66667" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.688 72.5834V75.8334" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M50.32 74.2084H47.056" stroke="black" stroke-width="2" stroke-linecap="round"/>
 				<path d="M65.28 30.3333V33.5833" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M66.912 31.9583H63.648" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M18.496 1.08331V5.41665" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M20.672 3.25H16.32" stroke="black" stroke-width="2" stroke-linecap="round"/>
 				<defs><filter id="filter0_d" x="20.936" y="26.7496" width="26.341" height="29.642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-2" dy="3"/>
 				<feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter>
 				<linearGradient id="paint0_linear" x1="31.8597" y1="17" x2="31.8597" y2="67.3668" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.26"/><stop offset="1" stop-color="white" stop-opacity="0.08"/></linearGradient></defs></svg>`)
 		})
 })

/**
 * SCRIPTS PARA ARRUMAR HTML DO EXTENSIVO PARA RESPONSIVIDADE
 * Estou ativando isso via javascript para não ter que corrigir na mão
 * 
 * Criado em 14/12/2020 por Matheus Dias
 */

 const getAndRemove = query => {
 	const el = $(query)
 	const content = el.prop('outerHTML')
 	el.remove()
 	return content
 }

 $(document).on('ready', () => {
 	if (!$('body').hasClass('extensivo')) return

 		/* HEADER RESPONSIVO */
 	const tituloQRcode = getAndRemove('.blocoHeader .tituloQRcode')
 	const frente = getAndRemove('.blocoHeader .frente')
 	const sequenciaMod = getAndRemove('.blocoHeader .sequenciaMod')
 	const numeroModulo = getAndRemove('.blocoHeader .numeroModulo')

 	$('.blocoHeader').append(`
 		<div class="moduloConteudo">
 		${tituloQRcode}
 		${frente || ''}
 		${sequenciaMod}
 		</div>
 		${numeroModulo}
 		`)

 	/* RESPONSIVIDADE TABELAS */
 	$('table').each((i, e) => {
 		const el = $(e)
 		const content = el.prop('outerHTML')
 		el.replaceWith(`
 			<div class="tabelaScroll">
 			${content}
 			</div>
 			`)
 	})


 	const styles = getComputedStyle(document.documentElement)
 	const primary = styles.getPropertyValue('--primario')
 	const secondary = styles.getPropertyValue('--secundario')

 	const repeats = 150
 	const addition = 18

 	const circles = [...new Array(repeats).keys()]
 	.map(i => `<circle cx="50%" cy="50%" r="${80 + (i * addition)}" stroke="${secondary}" stroke-width="1.5"/>`)

 	const bg = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
 		<svg width="1821" height="2223" viewBox="0 0 1821 2223" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)">
 		<rect width="1821" height="2223" fill="${primary}"/>
 		${circles.join('')}</g>
 		<defs><clipPath id="clip0"><rect width="1821" height="2223" fill="white"/></clipPath></defs></svg>
 		`)

 	$('main blockquote.fixar')
 	.first()
 	.css('background', `url("${bg}")`)


 })


/**
 * SCRIPTS ENSINO MÉDIO 
 * 
 * Criado em 16/12/2020 por Matheus Dias
 */
 $(document).on('ready', () => {
 	if (!$('body').hasClass('medio')) return

 		const tituloQRcode = getAndRemove('.blocoHeader .tituloQRcode')
 	const frente = getAndRemove('.blocoHeader .frente')
 	const sequenciaMod = getAndRemove('.blocoHeader .sequenciaMod')
 	const numeroModulo = getAndRemove('.blocoHeader .numeroModulo')

 	$('.blocoHeader').append(`
 		<div class="moduloConteudo">
 		${tituloQRcode}
 		${sequenciaMod}
 		</div>
 		${numeroModulo}
 		`)

 	/* RESPONSIVIDADE TABELAS */
 	$('table').each((i, e) => {
 		const el = $(e)
 		const content = el.prop('outerHTML')
 		el.replaceWith(`
 			<div class="tabelaScroll">
 			${content}
 			</div>
 			`)
 	})


 	const styles = getComputedStyle(document.documentElement)
 	const primary = styles.getPropertyValue('--primario')
 	const secondary = styles.getPropertyValue('--secundario')

 	const repeats = 150
 	const addition = 18

 	const circles = [...new Array(repeats).keys()]
 	.map(i => `<circle cx="50%" cy="50%" r="${80 + (i * addition)}" stroke="${secondary}" stroke-width="1.5"/>`)

 	const bg = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
 		<svg width="1821" height="2223" viewBox="0 0 1821 2223" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)">
 		<rect width="1821" height="2223" fill="${primary}"/>
 		${circles.join('')}</g>
 		<defs><clipPath id="clip0"><rect width="1821" height="2223" fill="white"/></clipPath></defs></svg>
 		`)

 	$('main blockquote.fixar')
 	.first()
 	.css('background', `url("${bg}")`)


 	$('body.medio .startAb').remove()
 	$('body.medio header .frente').remove()

 	const textoCirculos = styles.getPropertyValue('--circulo-disciplina')
 	const corCirculos1 = styles.getPropertyValue('--circulo-1')
 	const corCirculos2 = styles.getPropertyValue('--circulo-2')

 	handleMedioResize()

 	const capSVG = `
 	<svg class="imagemCirculos" width="572" height="434" viewBox="0 0 572 434" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M121.037 176.526C143.672 136.555 178.904 105.203 221.233 87.3633C263.561 69.5233 310.606 66.1992 355.023 77.9112C399.439 89.6222 438.729 115.71 466.758 152.102C494.787 188.493 509.98 233.141 509.963 279.076" stroke="white" stroke-width="13"/>
 	<path d="M195.166 399.447C176.082 382.52 161.294 361.301 152.019 337.538C142.744 313.775 139.249 288.148 141.82 262.769C144.392 237.39 152.957 212.985 166.811 191.566C180.664 170.146 199.409 152.325 221.5 139.57" stroke="white" stroke-width="2"/>
 	<path d="M226.426 137.638C256.77 121.629 291.459 115.809 325.366 121.036C359.272 126.264 390.597 142.262 414.71 166.666" stroke="white" stroke-width="5" stroke-dasharray="4 5"/><path d="M450.953 221.479C457.818 239.276 461.443 258.159 461.655 277.233" stroke="white" stroke-width="5" stroke-dasharray="4 5"/>
 	<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="428" y="64" width="144" height="252">
 	<path d="M569.418 315.074C575.776 267.94 569.563 219.964 551.409 176.004C533.255 132.045 503.805 93.664 466.042 64.751L428.282 114.068C457.353 136.326 480.024 165.872 493.999 199.713C507.974 233.554 512.757 270.487 507.863 306.771L569.418 315.074Z" fill="white"/></mask><g mask="url(#mask0)">
 	<path d="M569.418 315.074C575.776 267.94 569.563 219.964 551.409 176.004C533.255 132.045 503.805 93.664 466.042 64.751L428.282 114.068C457.353 136.326 480.024 165.872 493.999 199.713C507.974 233.554 512.757 270.487 507.863 306.771L569.418 315.074Z" stroke="white" stroke-width="8"/>
 	</g><path d="M301.094 92.7376C325.651 92.6176 349.989 97.3556 372.707 106.678C395.426 115.999 416.077 129.722 433.473 147.055C450.868 164.388 464.664 184.989 474.068 207.674C483.471 230.359 488.296 254.68 488.265 279.237" stroke="white" stroke-width="6"/>
 	<path d="M468.65 217.598C472.571 228.24 475.464 239.233 477.289 250.426" stroke="white" stroke-width="2"/><path d="M389.843 124.643C399.699 130.252 408.996 136.793 417.606 144.175" stroke="white" stroke-width="2"/>
 	<path d="M331.413 103.851C342.597 105.729 353.576 108.674 364.199 112.646" stroke="white" stroke-width="2"/><path d="M455.79 124.718C488.444 157.267 509.928 199.338 517.151 244.875" stroke="${corCirculos2}" stroke-width="14"/>
 	<path d="M366.908 71.0547C397.385 80.5677 425.398 96.6637 448.965 118.203" stroke="${corCirculos1}" stroke-width="14"/><path d="M159.16 375.662C141.16 349.063 130.945 317.966 129.665 285.874C128.385 253.783 136.091 221.971 151.915 194.023" stroke="url(#paint0_linear)" stroke-width="18"/><path d="M200.639 105.672C231.064 87.8799 265.635 78.4099 300.879 78.2139" stroke="url(#paint1_linear)" stroke-width="64"/>
 	<path d="M490.969 386.855C484.041 398.994 475.959 410.437 466.836 421.026" stroke="white" stroke-width="13"/><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="32" y="9" width="310" height="272">
 	<path d="M341.678 12.0963C303.226 6.3799 263.992 9.03959 226.663 19.8933C189.334 30.7473 154.79 49.5383 125.397 74.9813C96.0044 100.423 72.4559 131.917 56.3639 167.305C40.2719 202.693 32.0163 241.14 32.1621 280.015L99.6427 279.762C99.5333 250.609 105.724 221.776 117.792 195.238C129.86 168.7 147.519 145.082 169.562 126.002C191.604 106.922 217.509 92.8303 245.503 84.6913C273.497 76.5513 302.919 74.5573 331.756 78.8433L341.678 12.0963Z" fill="white"/></mask><g mask="url(#mask1)">
 	<path d="M341.678 12.0963C303.226 6.3799 263.992 9.03959 226.663 19.8933C189.334 30.7473 154.79 49.5383 125.397 74.9813C96.0044 100.423 72.4559 131.917 56.3639 167.305C40.2719 202.693 32.0163 241.14 32.1621 280.015L99.6427 279.762C99.5333 250.609 105.724 221.776 117.792 195.238C129.86 168.7 147.519 145.082 169.562 126.002C191.604 106.922 217.509 92.8303 245.503 84.6913C273.497 76.5513 302.919 74.5573 331.756 78.8433L341.678 12.0963Z" stroke="white" stroke-width="8"/></g><path d="M436.912 163.496C444.287 172.111 450.821 181.412 456.423 191.273" stroke="white" stroke-width="2"/>
 	<path d="M91.4479 336.8C82.9899 305.988 81.3973 273.696 86.7823 242.202C92.1674 210.708 104.399 180.779 122.614 154.529" stroke="url(#paint2_linear)" stroke-width="13"/>
 	<text x="200" y="409" fill="white" class="medioCirculoTexto">${textoCirculos}</text><defs>
 	<linearGradient id="paint0_linear" x1="134.927" y1="331.059" x2="151.07" y2="181.743" gradientUnits="userSpaceOnUse"><stop stop-color="${corCirculos2}"/><stop offset="1" stop-color="${corCirculos1}"/></linearGradient>
 	<linearGradient id="paint1_linear" x1="87.6806" y1="345.781" x2="108.388" y2="154.239" gradientUnits="userSpaceOnUse"><stop stop-color="${corCirculos2}"/><stop offset="1" stop-color="${corCirculos1}"/></linearGradient>
 	<linearGradient id="paint2_linear" x1="94.9999" y1="343.5" x2="115" y2="158.5" gradientUnits="userSpaceOnUse"><stop stop-color="${corCirculos2}"/><stop offset="1" stop-color="${corCirculos1}"/></linearGradient></defs></svg>
 	`


 	const afterSVG = `<svg id="medioSvgStart" width="357" height="51" viewBox="0 0 357 51" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)">
 	<path d="M35.5 0C19 0 18 34.3696 0 34.3696V51H357V34.3696C341.5 34.3696 336 0 323.5 0H35.5Z" fill="white"/>
 	<path d="M124.74 33C123.866 33 123.115 32.6857 122.486 32.057C121.857 31.4283 121.543 30.677 121.543 29.803V28.538H124.579V29.136C124.579 29.5653 124.602 29.8107 124.648 29.872C124.709 29.918 124.955 29.941 125.384 29.941H134.239C134.668 29.941 134.906 29.918 134.952 29.872C135.013 29.8107 135.044 29.5653 135.044 29.136V27.043C135.044 26.6137 135.013 26.376 134.952 26.33C134.906 26.2687 134.668 26.238 134.239 26.238H124.74C123.866 26.238 123.115 25.9237 122.486 25.295C121.857 24.6663 121.543 23.915 121.543 23.041V19.637C121.543 18.763 121.857 18.0117 122.486 17.383C123.115 16.7543 123.866 16.44 124.74 16.44H134.906C135.78 16.44 136.531 16.7543 137.16 17.383C137.789 18.0117 138.103 18.763 138.103 19.637V20.902H135.044V20.304C135.044 19.8747 135.013 19.637 134.952 19.591C134.906 19.5297 134.668 19.499 134.239 19.499H125.384C124.955 19.499 124.709 19.5297 124.648 19.591C124.602 19.637 124.579 19.8747 124.579 20.304V22.397C124.579 22.8263 124.602 23.064 124.648 23.11C124.709 23.156 124.955 23.179 125.384 23.179H134.906C135.78 23.179 136.531 23.501 137.16 24.145C137.789 24.7737 138.103 25.525 138.103 26.399V29.803C138.103 30.677 137.789 31.4283 137.16 32.057C136.531 32.6857 135.78 33 134.906 33H124.74ZM151.608 33V19.499H144.846V16.44H161.406V19.499H154.667V33H151.608ZM168.232 33V19.637C168.232 18.763 168.546 18.0117 169.175 17.383C169.804 16.7543 170.555 16.44 171.429 16.44H181.572C182.461 16.44 183.22 16.7543 183.849 17.383C184.478 18.0117 184.792 18.763 184.792 19.637V33H181.733V27.434H171.268V33H168.232ZM171.268 24.398H181.733V20.304C181.733 19.8747 181.702 19.637 181.641 19.591C181.58 19.5297 181.342 19.499 180.928 19.499H172.073C171.644 19.499 171.398 19.5297 171.337 19.591C171.291 19.637 171.268 19.8747 171.268 20.304V24.398ZM192.45 33V16.463H205.79C206.679 16.463 207.438 16.785 208.067 17.429C208.695 18.0577 209.01 18.8013 209.01 19.66V24.122C209.01 24.996 208.695 25.7473 208.067 26.376C207.438 27.0047 206.679 27.319 205.79 27.319H204.893L208.987 32.149V33H205.675L200.914 27.319L195.486 27.342V33H192.45ZM196.291 24.26H205.146C205.56 24.26 205.79 24.237 205.836 24.191C205.897 24.145 205.928 23.9073 205.928 23.478V20.304C205.928 19.8747 205.897 19.637 205.836 19.591C205.79 19.5297 205.56 19.499 205.146 19.499H196.291C195.861 19.499 195.616 19.5297 195.555 19.591C195.509 19.637 195.486 19.8747 195.486 20.304V23.478C195.486 23.9073 195.509 24.145 195.555 24.191C195.616 24.237 195.861 24.26 196.291 24.26ZM222.446 33V19.499H215.684V16.44H232.244V19.499H225.505V33H222.446Z" fill="black"/>
 	<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="357" height="51">
 	<path d="M35.5 0C19 0 18 34.3696 0 34.3696V51H357V34.3696C341.5 34.3696 336 0 323.5 0H35.5Z" fill="white"/>/mask><g mask="url(#mask0)">
 	<g filter="url(#filter0_d)"><path d="M71 48.5C40.5 48.5 27 -0.5 27 -0.5L329 -2C329 -2 318 48.5 281 48.5H71Z" fill="white"/></g>
 	</g><g filter="url(#filter1_i)"><path d="M0 34.3696C18 34.3696 19 0 35.5 0H323.5C336 0 341.5 34.3696 357 34.3696H462V192H357H0H-41.5V34.3696H0Z" fill="#C4C4C4" fill-opacity="0.01"/></g></g>
 	<defs><filter id="filter0_d" x="21" y="-4" width="314" height="62.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/>
 	<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3"/>
 	<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter>
 	<filter id="filter1_i" x="-41.5" y="0" width="503.5" height="196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 	<feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/>
 	<feGaussianBlur stdDeviation="7"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
 	</filter><clipPath id="clip0"><rect width="357" height="51" fill="white"/></clipPath></defs></svg>
 	`

 	$('body header')
 	.first()
 	.prepend(capSVG)
 	.append(afterSVG)

 	const title = getAndRemove('body header .tituloModulo')
 	console.log(title)
 	$('body header .blocoTitulo').prepend(`<div class="tituloBloco">${title}</div>`)

	// const imagemAbertura = $('body header .imagemAberturaMedio').first()
	// handleImagemMedio(imagemAbertura)
	// Retirado temporáriamente por causa da política do chrome	


	const qrCodes = []
	$('body main blockquote.qrCodeAbertura').each((_, e) => {
		const content = getAndRemove(e)
		qrCodes.push(content)
	})

	console.log(qrCodes)

	$('body header blockquote.blocoTitulo')
	.first()
	.append(`<div class="medioQrCodes">${qrCodes.join('')}</div>`)


})


$(window).resize(() => {
	handleMedioResize()
})

const handleMedioResize = () => {
	const styles = getComputedStyle(document.documentElement)
	const header1 = styles.getPropertyValue('--header-1')
	const header2 = styles.getPropertyValue('--header-2')


	const { innerWidth } = window

	let bg

	if ($('body').hasClass('medio') && (innerWidth > 1024)) {
		bg = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg width="1014" height="416" viewBox="0 0 1014 416" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0)"><g filter="url(#filter0_d)"><path d="M495 391.5C464.5 391.5 451 342.5 451 342.5L753 341C753 341 742 391.5 705 391.5H495Z" fill="white"/></g><g filter="url(#filter1_d)">
			<path d="M0 0H1014V289C1014 335.944 975.974 374 929.03 374C864.52 374 785.057 374 774 374C755 374 752.5 343 738 343C723.5 343 478 343 460.5 343C443 343 439.5 374 415.5 374C403.033 374 291.394 374 186.983 374C83.7057 374 0 290.277 0 187V0Z" fill="url(#paint0_linear)"/></g>
			<path d="M548.74 376C547.866 376 547.115 375.686 546.486 375.057C545.857 374.428 545.543 373.677 545.543 372.803V371.538H548.579V372.136C548.579 372.565 548.602 372.811 548.648 372.872C548.709 372.918 548.955 372.941 549.384 372.941H558.239C558.668 372.941 558.906 372.918 558.952 372.872C559.013 372.811 559.044 372.565 559.044 372.136V370.043C559.044 369.614 559.013 369.376 558.952 369.33C558.906 369.269 558.668 369.238 558.239 369.238H548.74C547.866 369.238 547.115 368.924 546.486 368.295C545.857 367.666 545.543 366.915 545.543 366.041V362.637C545.543 361.763 545.857 361.012 546.486 360.383C547.115 359.754 547.866 359.44 548.74 359.44H558.906C559.78 359.44 560.531 359.754 561.16 360.383C561.789 361.012 562.103 361.763 562.103 362.637V363.902H559.044V363.304C559.044 362.875 559.013 362.637 558.952 362.591C558.906 362.53 558.668 362.499 558.239 362.499H549.384C548.955 362.499 548.709 362.53 548.648 362.591C548.602 362.637 548.579 362.875 548.579 363.304V365.397C548.579 365.826 548.602 366.064 548.648 366.11C548.709 366.156 548.955 366.179 549.384 366.179H558.906C559.78 366.179 560.531 366.501 561.16 367.145C561.789 367.774 562.103 368.525 562.103 369.399V372.803C562.103 373.677 561.789 374.428 561.16 375.057C560.531 375.686 559.78 376 558.906 376H548.74ZM575.608 376V362.499H568.846V359.44H585.406V362.499H578.667V376H575.608ZM592.232 376V362.637C592.232 361.763 592.546 361.012 593.175 360.383C593.804 359.754 594.555 359.44 595.429 359.44H605.572C606.461 359.44 607.22 359.754 607.849 360.383C608.478 361.012 608.792 361.763 608.792 362.637V376H605.733V370.434H595.268V376H592.232ZM595.268 367.398H605.733V363.304C605.733 362.875 605.702 362.637 605.641 362.591C605.58 362.53 605.342 362.499 604.928 362.499H596.073C595.644 362.499 595.398 362.53 595.337 362.591C595.291 362.637 595.268 362.875 595.268 363.304V367.398ZM616.45 376V359.463H629.79C630.679 359.463 631.438 359.785 632.067 360.429C632.695 361.058 633.01 361.801 633.01 362.66V367.122C633.01 367.996 632.695 368.747 632.067 369.376C631.438 370.005 630.679 370.319 629.79 370.319H628.893L632.987 375.149V376H629.675L624.914 370.319L619.486 370.342V376H616.45ZM620.291 367.26H629.146C629.56 367.26 629.79 367.237 629.836 367.191C629.897 367.145 629.928 366.907 629.928 366.478V363.304C629.928 362.875 629.897 362.637 629.836 362.591C629.79 362.53 629.56 362.499 629.146 362.499H620.291C619.861 362.499 619.616 362.53 619.555 362.591C619.509 362.637 619.486 362.875 619.486 363.304V366.478C619.486 366.907 619.509 367.145 619.555 367.191C619.616 367.237 619.861 367.26 620.291 367.26ZM646.446 376V362.499H639.684V359.44H656.244V362.499H649.505V376H646.446Z" fill="black"/></g><defs><filter id="filter0_d" x="445" y="339" width="314" height="62.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter>
			<filter id="filter1_d" x="-18" y="-14" width="1050" height="410" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/>
			<feGaussianBlur stdDeviation="9"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
			</filter><linearGradient id="paint0_linear" x1="5.85329e-06" y1="40.5" x2="1014" y2="281" gradientUnits="userSpaceOnUse"><stop stop-color="${header2}"/><stop offset="1" stop-color="${header1}"/></linearGradient><clipPath id="clip0"><rect width="1014" height="416" fill="white"/></clipPath></defs></svg>`)
bg = `url("${bg}")`
} else if ($('body').hasClass('medio')) {
	bg = `linear-gradient(to left, ${header1}, ${header2})`
}

console.log(bg)
$('body.medio header')
.css('background', bg)
}


/**
 * Script para adicionar SVGs ponto-partida e ponto-chegada e arrumar os boxes
 * de habilidade em pratica do novo EM 1S
 * 
 * Criado por Matheus D. em 18/11/2021
 */
 $(document).on('ready', () => {
 	if (!$('body').hasClass('novo-medio')) return

 		console.log($('.ponto-partida'))

 	$('.ponto-partida').append(`
 		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.276 61.973" style="enable-background:new 0 0 595.276 61.973;" xml:space="preserve">
 		<polygon class="st0" points="266.92,48.716 308.765,9.294 1.042,9.294 1.042,48.716 "/>
 		<polygon class="st0" points="595.455,42.148 595.455,19.359 387.89,19.359 364.618,42.148 "/>
 		<g><defs><rect id="SVGID_1_" x="0.544" width="594.911" height="61.973"/></defs><clipPath id="SVGID_00000062879989130086977160000018429130870621068682_"><use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>
 		<path style="clip-path:url(#SVGID_00000062879989130086977160000018429130870621068682_);fill:var(--terciario);" d="M594.574,9.891H371.492 c-0.486,0-0.881,0.394-0.881,0.881c0,0.487,0.395,0.881,0.881,0.881h223.082c0.486,0,0.881-0.394,0.881-0.881 C595.455,10.285,595.06,9.891,594.574,9.891"/>
 		<path style="clip-path:url(#SVGID_00000062879989130086977160000018429130870621068682_);fill:var(--terciario);" d="M337.023,0L1.544,0 c-0.552,0-1,0.448-1,1s0.448,1,1,1h330.471l-47.726,45.368c-0.401,0.38-0.417,1.013-0.037,1.414c0.38,0.4,1.014,0.416,1.414,0.035 L337.023,0z"/>
 		<path style="clip-path:url(#SVGID_00000062879989130086977160000018429130870621068682_);fill:var(--terciario);" d="M302.812,54.358H32.292 c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h270.52c0.553,0,1-0.448,1-1C303.812,54.806,303.365,54.358,302.812,54.358"/>
 		<path style="clip-path:url(#SVGID_00000062879989130086977160000018429130870621068682_);fill:var(--terciario);" d="M594.574,44.317 h-222.97c-0.444,0-0.803,0.359-0.803,0.803c0,0.443,0.359,0.803,0.803,0.803h222.97c0.443,0,0.803-0.36,0.803-0.803 C595.377,44.676,595.017,44.317,594.574,44.317"/>
 		<path style="clip-path:url(#SVGID_00000062879989130086977160000018429130870621068682_);fill:var(--terciario);" d="M594.574,15.567 H410.245c-0.467,0-0.846,0.379-0.846,0.846c0,0.467,0.379,0.846,0.846,0.846h184.329c0.467,0,0.846-0.379,0.846-0.846 C595.42,15.946,595.041,15.567,594.574,15.567"/></g>
 		<polygon class="st2" points="396.531,38.197 375.411,27.178 595.455,27.178 595.455,23.134 351.678,23.134 369.76,33.676 251.977,38.197 "/><g>
 		<defs><rect id="SVGID_00000031908524834237690940000012719838607453612972_" x="0.544" width="594.911" height="61.973"/></defs>
 		<clipPath id="SVGID_00000015355293437294484000000012097363461616321154_"><use xlink:href="#SVGID_00000031908524834237690940000012719838607453612972_"  style="overflow:visible;"/></clipPath>
 		<path style="clip-path:url(#SVGID_00000015355293437294484000000012097363461616321154_);fill:var(--terciario);" d="M174.73,59.973H1.544 c-0.552,0-1,0.448-1,1s0.448,1,1,1H174.73c0.552,0,1-0.448,1-1S175.282,59.973,174.73,59.973"/>
 		</g> <path class="st2" d="M41.935 23.7931C42.356 21.3672 41.3335 18.6405 36.3814 18.6405H31.6097V31.5922H34.8376L35.2186 27.5222L41.4137 27.0411L41.935 23.7931ZM38.2861 24.3345H35.2787V21.8283L36.0005 21.8484C38.0856 21.9286 38.2861 22.4899 38.2861 23.1917V24.3345ZM55.9119 25.1364C55.9119 21.7481 54.5887 18.4801 49.6767 18.4801C44.8248 18.4801 43.4615 21.7481 43.4615 25.1164C43.4615 28.5046 44.7847 31.7526 49.6767 31.7526C54.5887 31.7526 55.9119 28.5046 55.9119 25.1364ZM52.263 25.1364C52.263 27.3418 51.6616 28.6049 49.6767 28.6049C47.752 28.6049 47.1305 27.3418 47.1305 25.1164C47.1305 22.9511 47.752 21.6278 49.6767 21.6278C51.6616 21.6278 52.263 22.931 52.263 25.1364ZM69.3739 31.5922V18.6205H66.3465L65.9054 22.7105V27.1213L62.9983 18.6205H57.8457V31.5922H60.7929L61.214 27.5222V23.332L64.101 31.5922H69.3739ZM80.6449 21.4674V18.6205H70.9011L70.9412 21.4674L74.0087 21.8283V27.4821L74.4097 31.5922H77.5974V21.8283L80.6449 21.4674ZM93.3276 25.1364C93.3276 21.7481 92.0044 18.4801 87.0924 18.4801C82.2405 18.4801 80.8772 21.7481 80.8772 25.1164C80.8772 28.5046 82.2004 31.7526 87.0924 31.7526C92.0044 31.7526 93.3276 28.5046 93.3276 25.1364ZM89.6787 25.1364C89.6787 27.3418 89.0772 28.6049 87.0924 28.6049C85.1677 28.6049 84.5461 27.3418 84.5461 25.1164C84.5461 22.9511 85.1677 21.6278 87.0924 21.6278C89.0772 21.6278 89.6787 22.931 89.6787 25.1364ZM112.238 25.0562C112.238 21.0464 110.373 18.6405 106.424 18.6405H101.311V31.6122H106.203C110.213 31.6122 112.238 29.046 112.238 25.0562ZM108.709 25.0562C108.729 28.0836 107.727 28.4245 104.92 28.6049V21.8083L105.762 21.8684C107.887 22.0489 108.709 22.2494 108.709 25.0562ZM123.638 31.5922V28.8655L119.969 28.4645H117.804V26.5599L123.177 26.199V23.4523H117.804V21.8083H119.969L123.638 21.3873V18.6405H114.155V31.5922H123.638ZM142.043 23.7931C142.464 21.3672 141.441 18.6405 136.489 18.6405H131.718V31.5922H134.946L135.326 27.5222L141.522 27.0411L142.043 23.7931ZM138.394 24.3345H135.387V21.8283L136.108 21.8484C138.194 21.9286 138.394 22.4899 138.394 23.1917V24.3345ZM154.829 31.5922V29.2665L151.2 18.6205H146.488L142.9 29.2665V31.5922H145.967L146.629 29.3868H150.939L151.561 31.6122L154.829 31.5922ZM150.017 26.3995H147.551L148.794 22.109L150.017 26.3995ZM167.189 31.5922V29.1863L164.983 26.6601L166.527 26.5599L167.048 23.8132C167.529 21.3672 166.427 18.6405 161.495 18.6405H156.603V31.5922H159.831L160.252 27.5022L160.272 27.1814L161.595 27.1012L164.422 31.5922H167.189ZM163.399 23.9736H160.272V21.8283L161.114 21.8484C163.219 21.8885 163.399 22.4899 163.399 23.1917V23.9736ZM177.875 21.4674V18.6205H168.131L168.171 21.4674L171.238 21.8283V27.4821L171.639 31.5922H174.827V21.8283L177.875 21.4674ZM183.023 31.5922V18.6405H179.354V27.5022L179.795 31.5922H183.023ZM196.428 25.0562C196.428 21.0464 194.564 18.6405 190.614 18.6405H185.501V31.6122H190.393C194.403 31.6122 196.428 29.046 196.428 25.0562ZM192.9 25.0562C192.92 28.0836 191.917 28.4245 189.11 28.6049V21.8083L189.952 21.8684C192.078 22.0489 192.9 22.2494 192.9 25.0562ZM209.141 31.5922V29.2665L205.512 18.6205H200.801L197.212 29.2665V31.5922H200.279L200.941 29.3868H205.252L205.873 31.6122L209.141 31.5922ZM204.329 26.3995H201.863L203.106 22.109L204.329 26.3995Z" fill="white"/></svg>
 		`)

$('.linha-chegada').append(`
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 595.276 61.973" style="enable-background:new 0 0 595.276 61.973;" xml:space="preserve">
	<polygon class="st6" points="329.08,13.257 287.235,52.679 594.958,52.679 594.958,13.257 "/>
	<polygon class="st6" points="0.544,19.825 0.544,42.614 208.109,42.614 231.381,19.825 "/><g><g><defs>
	<rect id="SVGID_1_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000117639060394831301670000012016955224172371617_">
	<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000117639060394831301670000012016955224172371617_);fill:var(--terciario);" d="M1.425,52.082h223.082
	c0.486,0,0.881-0.394,0.881-0.881s-0.395-0.881-0.881-0.881H1.425c-0.486,0-0.881,0.394-0.881,0.881S0.939,52.082,1.425,52.082"/></g><g><defs>
	<rect id="SVGID_00000158019419657991327320000007271644843099082886_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000134225941050840224070000005408444117704082843_">
	<use xlink:href="#SVGID_00000158019419657991327320000007271644843099082886_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000134225941050840224070000005408444117704082843_);fill:var(--terciario);" d="M258.977,61.973 h335.479c0.552,0,1-0.448,1-1s-0.448-1-1-1H263.985l47.726-45.368c0.401-0.38,0.417-1.013,0.037-1.414 c-0.38-0.4-1.014-0.416-1.414-0.035L258.977,61.973z"/></g><g><defs>
	<rect id="SVGID_00000086669638570297816590000006269939655154735007_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000079476344961776587270000010052297005533011341_">
	<use xlink:href="#SVGID_00000086669638570297816590000006269939655154735007_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000079476344961776587270000010052297005533011341_);fill:var(--terciario);" d="M293.187,7.615h270.52 c0.552,0,1-0.448,1-1s-0.448-1-1-1h-270.52c-0.553,0-1,0.448-1,1C292.187,7.167,292.634,7.615,293.187,7.615"/></g><g><defs>
	<rect id="SVGID_00000169519893335730712830000014555798022942310582_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000113323028558608788230000011245316361345060790_">
	<use xlink:href="#SVGID_00000169519893335730712830000014555798022942310582_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000113323028558608788230000011245316361345060790_);fill:var(--terciario);" d="M1.425,17.656h222.97 c0.444,0,0.803-0.359,0.803-0.803c0-0.443-0.359-0.803-0.803-0.803H1.425c-0.443,0-0.803,0.36-0.803,0.803 C0.622,17.297,0.982,17.656,1.425,17.656"/></g><g><defs>
	<rect id="SVGID_00000098188885187646994280000012969596311168226200_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000142174877505265651930000010398111365036968849_">
	<use xlink:href="#SVGID_00000098188885187646994280000012969596311168226200_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000142174877505265651930000010398111365036968849_);fill:var(--terciario);" d="M1.425,46.406h184.329 c0.467,0,0.846-0.379,0.846-0.846s-0.379-0.846-0.846-0.846H1.425c-0.467,0-0.846,0.379-0.846,0.846 C0.579,46.027,0.958,46.406,1.425,46.406"/></g></g>
	<polygon class="st12" points="199.469,23.776 220.589,34.795 0.545,34.795 0.545,38.839 244.322,38.839 226.24,28.297 344.023,23.776 "/><g><g><defs>
	<rect id="SVGID_00000091000181787736658210000012208815606541416879_" x="0.544" width="594.911" height="61.973"/></defs>
	<clipPath id="SVGID_00000182517098551782624480000011132610382156685759_">
	<use xlink:href="#SVGID_00000091000181787736658210000012208815606541416879_"  style="overflow:visible;"/></clipPath>
	<path style="clip-path:url(#SVGID_00000182517098551782624480000011132610382156685759_);fill:var(--terciario);" d="M421.27,2h173.186 c0.552,0,1-0.448,1-1s-0.448-1-1-1H421.27c-0.552,0-1,0.448-1,1S420.718,2,421.27,2"/></g></g>
	<path class="st12 st14 st15" d="M378.502 35.8447V32.9978L374.493 32.677L374.513 22.8931H370.884V35.8447H378.502ZM383.773 35.8447V22.8931H380.104V31.7547L380.545 35.8447H383.773ZM397.78 35.8447V22.873H394.752L394.311 26.963V31.3738L391.404 22.873H386.251V35.8447H389.199L389.62 31.7748V27.5845L392.507 35.8447H397.78ZM411.336 35.8447V22.8931H408.008L407.607 27.0232V27.6848H404.099V27.0232L403.657 22.8931H400.309V35.8447H403.657L404.099 31.7547V30.8124H407.607V31.7547L407.868 35.8447H411.336ZM425.045 35.8447V33.519L421.417 22.873H416.705L413.116 33.519V35.8447H416.184L416.845 33.6393H421.156L421.777 35.8648L425.045 35.8447ZM420.234 30.652H417.768L419.011 26.3615L420.234 30.652ZM443.796 29.3088C443.796 25.299 441.931 22.8931 437.982 22.8931H432.869V35.8648H437.761C441.771 35.8648 443.796 33.2985 443.796 29.3088ZM440.267 29.3088C440.287 32.3362 439.285 32.677 436.478 32.8574V26.0608L437.32 26.121C439.445 26.3014 440.267 26.5019 440.267 29.3088ZM455.196 35.8447V33.1181L451.527 32.7171H449.362V30.8124L454.735 30.4515V27.7048H449.362V26.0608H451.527L455.196 25.6398V22.8931H445.713V35.8447H455.196ZM472.839 35.2232V32.7171H469.33C467.326 32.7171 466.243 31.4339 466.263 29.3088C466.263 27.1635 467.225 26.0608 469.25 26.0608H472.598L472.619 23.4745C472.619 23.4745 470.112 22.7126 468.428 22.7126C464.418 22.7126 462.714 25.8403 462.714 29.3088C462.714 32.7371 464.439 35.9851 468.508 35.9851C470.473 35.9851 472.839 35.2232 472.839 35.2232ZM485.756 35.8447V22.8931H482.428L482.027 27.0232V27.6848H478.519V27.0232L478.078 22.8931H474.729V35.8447H478.078L478.519 31.7547V30.8124H482.027V31.7547L482.288 35.8447H485.756ZM497.761 35.8447V33.1181L494.092 32.7171H491.927V30.8124L497.3 30.4515V27.7048H491.927V26.0608H494.092L497.761 25.6398V22.8931H488.278V35.8447H497.761ZM510.304 35.8648V27.8051H504.389L504.369 30.5518L506.695 30.8926V32.7371H505.232C503.307 32.7371 502.465 31.3538 502.485 29.3088C502.485 27.2838 503.327 26.0007 505.312 26.0007H509.803L509.823 23.4143C508.82 23.2139 506.314 22.7126 504.63 22.7126C500.62 22.7126 498.916 25.8403 498.916 29.3088C498.916 32.4965 500.64 35.9851 504.45 35.9851C505.452 35.9851 507.116 35.143 507.116 35.143L507.637 35.8247L510.304 35.8648ZM523.763 35.8447V33.519L520.134 22.873H515.423L511.834 33.519V35.8447H514.902L515.563 33.6393H519.874L520.495 35.8648L523.763 35.8447ZM518.951 30.652H516.485L517.728 26.3615L518.951 30.652ZM536.464 29.3088C536.464 25.299 534.599 22.8931 530.65 22.8931H525.537V35.8648H530.429C534.439 35.8648 536.464 33.2985 536.464 29.3088ZM532.935 29.3088C532.955 32.3362 531.953 32.677 529.146 32.8574V26.0608L529.988 26.121C532.113 26.3014 532.935 26.5019 532.935 29.3088ZM549.177 35.8447V33.519L545.548 22.873H540.836L537.248 33.519V35.8447H540.315L540.977 33.6393H545.287L545.909 35.8648L549.177 35.8447ZM544.365 30.652H541.899L543.142 26.3615L544.365 30.652Z" fill="black"/>				
	</svg>
	`)

$('.box-pratica').prepend('<blockquote class="icon-pratica"></blockquote>')
}) 