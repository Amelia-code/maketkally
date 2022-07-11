// JavaScript Document

$(document).ready(function(e) {

	$('#event > ul > li').hide();
	$('#event > ul > li:first').show();
	
	$('#event_btn ul li').removeClass('active');
	$('#event_btn ul li:first').addClass('active');
	
	//var num2=0;
	var eL=0;
	
	$('#event_btn ul li').click(function() {
		eL = $(this).index();
		$('#event_btn ul li').removeClass('active');
		$(this).addClass('active');
		//함수호출
		eLShow(eL);
    });
	
	$('.rightEvent_btn').click(function() {
		eL++;
		if(eL>2){eL=0;}
		eLShow(eL);
		e_btnShow(eL);
    });

	$('.leftEvent_btn').click(function() {
		num2--;
		if(num2<0){num2=2;}
		eLShow(eL);
		e_btnShow(eL);
    });	
	
	//var e_run=setInterval('auto()',3000);	
	
});

//function auto(){
	//$('.rightEvent_btn').click();
//}

//imgShow함수 선언
function eLShow(eL){
	$('#event > ul > li').each(function() {
        if(eL==$(this).index()){
			$('#event > ul > li').hide();
			$(this).fadeIn();
		}
    });
}

function e_btnShow(eL) {
	$('#event_btn ul li').each(function() {
		if(eL==$(this).index()){
			$('#event_btn ul li').removeClass('active');
			$(this).addClass('active');
		}
	});
}