!function(a){
	var b=function(){
		var a=$(".integration_item .inttit"),b={bind:function(){
			a.off("click.integration.title")
			.on("click.integration.title",function(){var a=$(this)
			.parent(".integration_item");
			a.hasClass("off")?a.removeClass("off"):a.addClass("off")})},init:function(){b.bind()
			}
			};
			return{init:b.init}}(a);$(function(){b.init()})}(window,void 0);