jQuery(document).ready(listo); 



function listo()
{
	jQuery(".hamb").click(function(e){
		e.preventDefault(); /*es para que deje de funcionar la accion por defecto*/
		jQuery("header .container nav").toggleClass("open");/*metodo de agregar y quitar*/
		jQuery(".hamb i").toggleClass("fa-times");
	});

	jQuery("header .container nav a").click(function () {

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");
		 
		var dev=jQuery(this).attr("href");
		
		jQuery("html,body").animate({
			"scrollTop":jQuery(dev).offset().top -152.3
		})
	})	

}
