var num ;

$(document).ready(function(){

	$(".information .info-list li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".information .info-content div").hide();
		$("."+$(this).data("class")).fadeIn(1000);

	});
});  

