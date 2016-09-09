$(document).ready(function() {
var logo = Snap('#background');
sword = logo.select('#меч-2');
fighters = logo.select('#fighters');
dungeon = logo.select('#dungeon');
star1 = logo.select('#звезда1');
star2 = logo.select('#звезда2');
star3 = logo.select('#звезда3');

var menu = Snap('#shar1');
pol1 = menu.select('#pol1');
pol2 = menu.select('#pol2');
pol3 = menu.select('#pol3');
	dungeon.animate({transform: "s1.0 1.0 t-300 60 r0,270,50", opacity: "1"}, 0, mina.minaeaseout);
	fighters.animate({transform: "s1.0 1.0 t300 -60 r0,270,50", opacity: "1"}, 0, mina.minaeaseout);
	star1.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 0, mina.minaeaseout);
	star2.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 0, mina.minaeaseout);
	star3.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 0, mina.minaeaseout);
	sword.animate({transform: "s1.0 1.0 t500 0 r720,270,50", opacity: "1"}, 0, mina.minaeaseout);
	
	var audio = new Audio('../sounds/in.wav');
	audio.play();
	
	setTimeout(function() {
	dungeon.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 1500, mina.elastic);
	fighters.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 1500, mina.elastic);
	}, 700);
	setTimeout(function() {
	sword.animate({transform: "s1.0 1.0 t1 0 r-720,270,50", opacity: "1"}, 1200, mina.minaeaseout);
	//SWORD col
	setTimeout(function() {
	var audio = new Audio('../sounds/sword.wav');
	audio.play();
	dungeon.animate({transform: "s1.0 1.0 t-3 0.6 r0,270,50", opacity: "1"}, 500, mina.elastic);
	sword.animate({transform: "s1.0 1.0 t-3 0.6 r-720,270,50", opacity: "1"}, 500, mina.elastic);
	setTimeout(function() {
	dungeon.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 400, mina.elastic);
	sword.animate({transform: "s1.0 1.0 t1 0 r-720,270,50", opacity: "1"}, 400, mina.elastic);
	}, 500);
	}, 1200);
	//SWORD col end
	//STARS
	setTimeout(function() {
	setInterval(function() {
	star1.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 1000, mina.elastic); setTimeout(function() {star1.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 100, mina.minaeaseout);}, 1000);
	}, 1800);
	setTimeout(function() {
	setInterval(function() {
	star3.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 1000, mina.elastic); setTimeout(function() {star3.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 100, mina.minaeaseout);}, 1000);
	}, 2800);
	setTimeout(function() {
	setInterval(function() {
	star2.animate({transform: "s1.0 1.0 t1 0 r0,270,50", opacity: "1"}, 1000, mina.elastic); setTimeout(function() {star2.animate({transform: "s0.0 0.0 t1 0 r0,270,50", opacity: "1"}, 100, mina.minaeaseout);}, 1000);
	}, 2100);
	}, 300);
	}, 300);
	}, 200);
	//STARS end
	}, 1800);
	//ANIMATIONS end
});