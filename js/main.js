$(document).ready(function() {

	
	
widdd = $("#block1").width();
heiii = $("#shtorka").height();
if (widdd > 768) {
	
}
else {
	
}



var i;
imw = $("#img-1").width();
for (i = 1; i < 9; i++) {
	$("#img-"+i).css({"height":imw+"px"});
	$("#img-" + i).animate({"opacity":"1"}, 300);
	//var loader = Snap('#img-'+ i +' #loader');
	//			loaderline = loader.select('#loaderline');
	//loaderline.animate({transform: "r360,18,18"}, 1000, mina.minaeaseout);
}



		
function imgloader(num) {
	setTimeout (function() {
		setTimeout (function() {
			$('#img-'+ num +' #loadimg .sk-folding-cube').animate({opacity:"0"}, 500);
			setTimeout (function() {
				$('#img-'+ num +' #loadimg').animate({opacity:"0"}, 700);
			}, 1000);
		}, 1000);
		var image_url = $('#img-'+ num).css('background-image'),
		image;
		image_url = image_url.match(/^url\("?(.+?)"?\)$/);
		image_url = image_url[1];
		image = new Image();
		$(image).load(function () {
			im1w = image.width;
			im1h = image.height;
			if (im1w >= im1h) {
				$("#img-"+ num).css({"background-size":"auto 100%"});
				im1otsh = 1;
			}
			else if (im1w < im1h) {
				$("#img-"+ num).css({"background-size":"100% auto"});
				im1otsh = 0;
			}
		});
		image.src = image_url;
	}, 100);
}

$('#img-1').bgLoaded({
    afterLoaded : function() {
		imgloader(1);
		setTimeout (function() {
		$("#shtorka").animate({"width":"0px"}, 900);
		$("#animblock1").animate({"left":"0px"}, 600);
		setTimeout(function() {
			$('#shtorka').css({'background':'none'});
			$('#shtorka').css({'background-image':'url(img/black.png)'});
		}, 900);
		}, 500);
    }
});

$('#img-2').bgLoaded({
    afterLoaded : function() {
		imgloader(2);
    }
});

$('#img-3').bgLoaded({
    afterLoaded : function() {
		imgloader(3);
    }
});

$('#img-4').bgLoaded({
    afterLoaded : function() {
		imgloader(4);
    }
});

$('#img-5').bgLoaded({
    afterLoaded : function() {
		imgloader(5);
    }
});

$('#img-6').bgLoaded({
    afterLoaded : function() {
		imgloader(6);
    }
});

$('#img-7').bgLoaded({
    afterLoaded : function() {
		imgloader(7);
    }
});

$('#img-8').bgLoaded({
    afterLoaded : function() {
		imgloader(8);
    }
});



$(window).resize(function() {
	$("#shtorka").css({"width":"0%"});
	currentimg = document.querySelector("#shtorka");
	currentimg.innerHTML = "<center></center>";
	//
	widdd = $("#block1").width();
	heiii = $("#shtorka").height();
	var i;
	imw = $("#img-1").width();
	for (i = 1; i < 9; i++) {
		$("#img-"+i).css({"height":imw+"px"});
	}
});

//
$("#img-1").click(function() {
	var img = $('#img-1').css('background-image')
	shtorkaimg(img);
});
$("#img-2").click(function() {
	var img = $('#img-2').css('background-image')
	shtorkaimg(img);
});
$("#img-3").click(function() {
	var img = $('#img-3').css('background-image')
	shtorkaimg(img);
});
$("#img-4").click(function() {
	var img = $('#img-4').css('background-image')
	shtorkaimg(img);
});
$("#img-5").click(function() {
	var img = $('#img-5').css('background-image')
	shtorkaimg(img);
});
$("#img-6").click(function() {
	var img = $('#img-6').css('background-image')
	shtorkaimg(img);
});
$("#img-7").click(function() {
	var img = $('#img-7').css('background-image')
	shtorkaimg(img);
});
$("#img-8").click(function() {
	var img = $('#img-8').css('background-image')
	shtorkaimg(img);
});
//
$("#shtorka").click(function() {
	$("#shtorka").css({"width":"0%"});
	currentimg = document.querySelector("#shtorka");
	currentimg.innerHTML = "<center></center>";
});
	
function shtorkaimg(img) {
    img = img.match(/^url\("?(.+?)"?\)$/);
	img = img[1];
    currentimg = document.querySelector("#shtorka");
	currentimg.innerHTML = "<center><img id='curim' src='"+img+"' style='width:auto;height:auto;'></center>";
	$("#shtorka").css({"width":"100%"});
	imw = $("#curim").width();
	imh = $("#curim").height();
	//alert(imw + " - " + imh);
	//alert(widdd + " - " + heiii);
	//$("#curim").css({"width":"200px","height":"100px"});
	
	if (imw > imh) {
		var imgsize = 1;
	}
	else if (imw == imh) {
		var imgsize = 1;
	}
	else if (imw < imh) {
		var imgsize = 0;
	}
	if (widdd > heiii) {
		if (imgsize == 1) {
			$("#curim").css({"width":"auto","height":"90%","padding-top":"0%","border":"0px solid red","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			padding = (heiii - imh)/2
			$("#curim").animate({"padding-top":padding + "px","opacity":"1"}, 600);
		}
		else if (imgsize == 0) {
			$("#curim").css({"width":"auto","height":"90%","padding-top":"0%","border":"0px solid green","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			padding = (heiii - imh)/2
			$("#curim").animate({"padding-top":padding + "px","opacity":"1"}, 600);
		}
	}
	else {
		if (imgsize == 1) {
			$("#curim").css({"width":"90%","height":"auto","padding-top":"0%","border":"0px solid blue","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			padding = (heiii - imh)/2
			$("#curim").animate({"padding-top":padding + "px","opacity":"1"}, 1200);
		}
		else if (imgsize == 0) {
			$("#curim").css({"width":"90%","height":"auto","padding-top":"0%","border":"0px solid black","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			padding = (heiii - imh)/2
			$("#curim").animate({"padding-top":padding + "px","opacity":"1"}, 600);
		}
	}
}


});



