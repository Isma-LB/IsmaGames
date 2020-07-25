jQuery(document).ready(function(){
	
	jQuery(".hambur").click(function(e){
		e.preventDefault();
		openmenu();
	});
	jQuery("header .container nav a").click(function(e){
		e.preventDefault();
		var enlace = jQuery(this).attr("href");
		var dpx = jQuery(enlace).position().top;
		jQuery("html,body").animate({
			"scrollTop": dpx
		}, dpx < 200? 200 : dpx*0.5,"swing");
		openmenu();
	});
	jQuery("#inicio .bloque-banner a").click(function(e){
		e.preventDefault();
		var enlace = jQuery(this).attr("href");
		jQuery("html,body").animate({
			"scrollTop": jQuery(enlace).position().top
		}, 800, "swing");
	});
	jQuery(".home-bt").click(function(e){
		e.preventDefault();
		jQuery("html,body").animate({
			"scrollTop": 0
		}, 800, "swing");
	})
});

function openmenu() {
	jQuery("header").toggleClass("open");
	jQuery("header .container nav").toggleClass("open");
	jQuery("header .container .hambur i").toggleClass("fa-times");
}