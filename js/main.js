$(document).ready(function() {
widdd = $("#block1").width();
if (widdd > 768) {
	
}
else {
	
}


var i;
imw = $("#img-1").width();
for (i = 1; i < 9; i++) {
	$("#img-"+i).css({"height":imw+"px"});
	$("#img-" + i).animate({"opacity":"1"}, 300);
	var loader = Snap('#img-'+ i +' #loader');
	loaderline = loader.select('#loaderline');
	loaderline.animate({transform: "r36000,18,18"}, 100000, mina.minaeaseout);
}


		
function imgloader(num) {
	setTimeout (function() {
			$('#img-'+ num +' #loadimg #loader').animate({opacity:"0"}, 500);
			setTimeout (function() {
				$('#img-'+ num +' #loadimg').animate({opacity:"0"}, 1000);
			}, 1000);
		}, 700);
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
}

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



$(window).resize(function() {
	widdd = $("#block1").width();
	var i;
	imw = $("#img-1").width();
	for (i = 1; i < 9; i++) {
		$("#img-"+i).css({"height":imw+"px"});
	}
});
});
