// JavaScript Document
$(document).ready(function() {
    //주메뉴에 마우스를 올리면 서브메뉴와 서브배경이 내려오고
	//마우스를 치우면 서브메뉴와 서브배경이 올라감
	$('header>nav>ul').hover(function(){
		$('#sub_bg').stop().slideDown();
		$('.sub').stop().slideDown();
		$('.sub_01 li a').addClass('flavor');
	},
	function(){
		$('#sub_bg').stop().slideUp();
		$('.sub').stop().slideUp();
		$('.sub_01 li a').removeClass('flavor');
	});
});