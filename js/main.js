$(document).ready(function() {

infobready = 0;
infobhidden = 1;

$("#logo-text").click(function() {
	if (infobready == 0)
	{
		if (infobhidden == 1)
		{
			infobhidden = 0;
			infobready = 1;
			setTimeout(function() {
				infobready = 0;
			}, 1010);
			$("#infob-block").animate({"top":"0px"}, 1000, 'easeInOutCubic');
		}
		else {
			infobhidden = 1;
			infobready = 1;
			setTimeout(function() {
				infobready = 0;
			}, 1010);
			$("#infob-block").animate({"top":"-50vh"}, 1000, 'easeInOutBack');
		}
	}
});	

$("#lang").animate({"opacity":"1"}, 1000);

$("#l-ua").click(function() {
	$("#l-ua").css({"text-decoration":"underline"});
	$("#l-ru").css({"text-decoration":"none"});
	$("#l-en").css({"text-decoration":"none"});
	lang = document.querySelector("#logo-text");
	lang.innerHTML = "Вiрстюк Богдан";
	lang = document.querySelector("#infob-text1");
	lang.innerHTML = "<img src='img/download.svg' id='infob-downloadimg' alt=''>Завантажити резюме";
	lang = document.querySelector("#footer1");
	lang.innerHTML = "© 2016 VirB. Всi права захищенi.";
	lang = document.querySelector("#footer2");
	lang.innerHTML = "Дизайн <a href='https://vk.com/sirgantz' style='color:white'>Вiрстюка Богдана";
	lang = document.querySelector("#portfolio-p");
	lang.innerHTML = "Портфолiо";
});

$("#l-ru").click(function() {
	$("#l-ua").css({"text-decoration":"none"});
	$("#l-ru").css({"text-decoration":"underline"});
	$("#l-en").css({"text-decoration":"none"});
	lang = document.querySelector("#logo-text");
	lang.innerHTML = "Вирстюк Богдан";
	lang = document.querySelector("#infob-text1");
	lang.innerHTML = "<img src='img/download.svg' id='infob-downloadimg' alt=''>Скачать резюме";
	lang = document.querySelector("#footer1");
	lang.innerHTML = "© 2016 VirB. Все права защищены.";
	lang = document.querySelector("#footer2");
	lang.innerHTML = "Дизайн <a href='https://vk.com/sirgantz' style='color:white'>Вирстюка Богдана";
	lang = document.querySelector("#portfolio-p");
	lang.innerHTML = "Портфолио";
});	

$("#l-en").click(function() {
	$("#l-ua").css({"text-decoration":"none"});
	$("#l-ru").css({"text-decoration":"none"});
	$("#l-en").css({"text-decoration":"underline"});
	lang = document.querySelector("#logo-text");
	lang.innerHTML = "Virstiuk Bogdan";
	lang = document.querySelector("#infob-text1");
	lang.innerHTML = "<img src='img/download.svg' id='infob-downloadimg' alt=''>Download resume";
	lang = document.querySelector("#footer1");
	lang.innerHTML = "© 2016 VirB. All Rights Reserved.";
	lang = document.querySelector("#footer2");
	lang.innerHTML = "Design by <a href='https://vk.com/sirgantz' style='color:white'>Virstiuk Bogdan";
	lang = document.querySelector("#portfolio-p");
	lang.innerHTML = "Portfolio";
});	


$("#logo").click(function() {
	if (infobready == 0)
	{
		if (infobhidden == 1)
		{
			infobhidden = 0;
			infobready = 1;
			setTimeout(function() {
				infobready = 0;
			}, 1010);
			$("#infob-block").animate({"top":"0px"}, 1000, 'easeInOutCubic');
		}
		else {
			infobhidden = 1;
			infobready = 1;
			setTimeout(function() {
				infobready = 0;
			}, 1010);
			$("#infob-block").animate({"top":"-50vh"}, 1000, 'easeInOutBack');
		}
	}
});	
	
widdd = $("#block1").width();
heiii = $("#shtorka").height();
if (widdd > 768) {
	
}
else {
	
}



var i;
imw = $("#img-1").width();
for (i = 1; i < 13; i++) {
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

setTimeout (function() {
	$('#logo').animate({opacity:"1"}, 700);
	setTimeout (function() {
		$('#logo-text').animate({opacity:"1"}, 700);
		setTimeout (function() {
			$('#footer1').animate({opacity:"1"}, 700);
			setTimeout (function() {
				$('#footer2').animate({opacity:"1"}, 700);
				setTimeout (function() {
					$('#portfolio').animate({opacity:"1"}, 700);
				}, 700);
			}, 700);
		}, 700);
	}, 700);
}, 1500);

//setTimeout (function() {
		//$("#shtorka").animate({"width":"0px"}, 900);
		//$("#animblock1").animate({"left":"0px"}, 600);
//		setTimeout(function() {
			$('#shtorka').css({'background':'none'});
			$('#shtorka').css({'background-image':'url(img/black.png)'});
//		}, 900);
//}, 1000);

$('#img-1').bgLoaded({
    afterLoaded : function() {
		imgloader(1);
		
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

$('#img-9').bgLoaded({
    afterLoaded : function() {
		imgloader(9);
    }
});

$('#img-10').bgLoaded({
    afterLoaded : function() {
		imgloader(10);
    }
});

$('#img-11').bgLoaded({
    afterLoaded : function() {
		imgloader(11);
    }
});

$('#img-12').bgLoaded({
    afterLoaded : function() {
		imgloader(12);
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
	for (i = 1; i < 13; i++) {
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
$("#img-9").click(function() {
	var img = $('#img-9').css('background-image')
	shtorkaimg(img);
});
$("#img-10").click(function() {
	var img = $('#img-10').css('background-image')
	shtorkaimg(img);
});
$("#img-11").click(function() {
	var img = $('#img-11').css('background-image')
	shtorkaimg(img);
});
$("#img-12").click(function() {
	var img = $('#img-12').css('background-image')
	shtorkaimg(img);
});
//
$(".sclose").click(function() {
	$("#shtorka").css({"width":"0%"});
	currentimg = document.querySelector("#shtorka");
	currentimg.innerHTML = "<center></center>";
	$(".sclose").css({"width":"0%","height":"0%"});
});
	
function shtorkaimg(img) {
    img = img.match(/^url\("?(.+?)"?\)$/);
	img = img[1];
    currentimg = document.querySelector("#shtorka");
	currentimg.innerHTML = "<center><img id='curim' src='"+img+"' style='width:auto;height:auto;'></center>";
	$("#shtorka").css({"width":"100%"});
	$(".sclose").css({"width":"8vh","height":"8vh"});
	imw = $("#curim").width();
	imh = $("#curim").height();
	imraznw = imw/imh;
	imraznh = imh/imw;
	imot = 0.9;
	//alert(imw + ', ' + imh + ', ' + imrazn);
	currentimg.innerHTML = "<center><div id='curim' style='overflow:hidden;width:auto;height:auto;max-width:"+ (widdd*imot) +"px;max-height:"+ (heiii*imot) +"px;'><img id='curim2' src='"+img+"' style='width:100%;height:auto;'></div></center>";
	//alert(imw + " - " + imh);
	//alert(widdd + " - " + heiii);
	//$("#curim").css({"width":"200px","height":"100px"});
	//<img id='curim' src='"+img+"' style='width:auto;height:auto;'>
	//background-image:url("+img+"); background-size:100% 100%
	
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
			$("#curim2").css({"width":"auto","height":"100%"});
			$("#curim").css({"width":((heiii*imraznw*imot))+"px","height":(heiii*imot)+"px","margin-top":"0%","border":"0px solid red","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			hcurim2 = $("#curim2").height();
			margin = (heiii - (hcurim2))/2;
			if (widdd > 768) {
				$("#curim").animate({"margin-top":margin + "px","opacity":"1"}, 600);
			}
			else {
				$("#curim").css({"margin-top":margin + "px","opacity":"1"});
			}
		}
		else if (imgsize == 0) {
			//$("#curim").css({"width":"auto","height":"90%","margin-top":"0%","border":"0px solid green","opacity":"0"});
			$("#curim2").css({"width":"auto","height":"100%"});
			$("#curim").css({"width":((heiii*imraznw*imot))+"px","height":(heiii*imot)+"px","margin-top":"0%","border":"0px solid red","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			hcurim2 = $("#curim2").height();
			margin = (heiii - (hcurim2))/2;
			if (widdd > 768) {
				$("#curim").animate({"margin-top":margin + "px","opacity":"1"}, 600);
			}
			else {
				$("#curim").css({"margin-top":margin + "px","opacity":"1"});
			}
		}
	}
	else {
		if (imgsize == 1) {
			//$("#curim").css({"width":"90%","height":"auto","margin-top":"0%","border":"0px solid blue","opacity":"0"});
			$("#curim2").css({"width":"100%","height":"auto"});
			$("#curim").css({"width":(heiii*imot)+"px","height":(heiii*imraznh*imot)+"px","margin-top":"0%","border":"0px solid red","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			hcurim2 = $("#curim2").height();
			margin = (heiii - (hcurim2))/2;
			if (widdd > 768) {
				$("#curim").animate({"margin-top":margin + "px","opacity":"1"}, 600);
			}
			else {
				$("#curim").css({"margin-top":margin + "px","opacity":"1"});
			}
		}
		else if (imgsize == 0) {
			//$("#curim").css({"width":"90%","height":"auto","margin-top":"0%","border":"0px solid black","opacity":"0"});
			$("#curim2").css({"width":"auto","height":"100%"});
			$("#curim").css({"width":(heiii*imot)+"px","height":(heiii*imraznh*imot)+"px","margin-top":"0%","border":"0px solid red","opacity":"0"});
			imw = $("#curim").width();
			imh = $("#curim").height();
			hcurim2 = $("#curim2").height();
			margin = (heiii - (hcurim2))/2;
			if (widdd > 768) {
				$("#curim").animate({"margin-top":margin + "px","opacity":"1"}, 600);
			}
			else {
				$("#curim").css({"margin-top":margin + "px","opacity":"1"});
			}
		}
	}
}


});



