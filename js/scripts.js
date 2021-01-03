$(document).ready(function(){
	$(".design-icon").click(function(){
		$(".design-icon").hide();
		$(".design").show();
	});
	$(".design").click(function(){
		$(".design").hide();
		$(".design-icon").show();
	});
	$(".dev-icon").click(function(){
		$(".dev-icon").hide();
		$(".development").show();
	});
	$(".development").click(function(){
		$(".development").hide();
		$(".dev-icon").show();
	});
	$(".product-icon").click(function(){
		$(".product-icon").hide();
		$(".product_man").show();
	});
	$(".product_man").click(function(){
		$(".product_man").hide();
		$(".product-icon").show();
	});
	
	
	
});
function sendMessage(){
		alert("Thank you for contacting us!!");
	};
