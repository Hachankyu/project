$(function(){
	$("nav > ul >li").hover(
		function(){
			$("nav > ul").addClass("active");
		},
		function(){
			$("nav > ul").removeClass("active")
		}
	);

	let n=0;
	$(".keyvisual li").eq(0).addClass("active");

	
	$(".keyvisual li").click(function(){
		$(".keyvisual li").removeClass("active");
		$(this).addClass("active");
		n=$(this).index();
	});

	$(".right").click(function(e){
		e.preventDefault();
		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}

		$(".keyvisual li").removeClass("active");
		$(".keyvisual li").eq(n).addClass("active");
	});
	$(".left").click(function(e){
		e.preventDefault();
		if(n > 0){
			n=n-1;
		}
		else{
			n=3;
		}

		$(".keyvisual li").removeClass("active");
		$(".keyvisual li").eq(n).addClass("active");
	});
});