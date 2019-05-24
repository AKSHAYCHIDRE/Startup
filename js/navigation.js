


	/* pre loader js here */

	jQuery(document).ready(function() {
    	jQuery('#preloader').fadeOut(600);
	})


	/* animation js here */

	$( document ).ready(function() {
	     AOS.init({
	  		duration:1100,
		});
	});



	$(document).ready(function(){

		var showHeaderAt = 150;

		var win = $(window),
				body = $('body');

		// Show the fixed header only on larger screen devices

		if(win.width() > 400){

			// When we scroll more than 150px down, we set the
			// "fixed" class on the body element.

			win.on('scroll', function(e){

				if(win.scrollTop() > showHeaderAt) {
					body.addClass('fixed');
				}
				else {
					body.removeClass('fixed');
				}
			});

		}

	});

function classToggle() {
  const navs = document.querySelectorAll('.navbar__items')
  
  navs.forEach(nav => nav.classList.toggle('navbar__toggleshow'));
}
document.querySelector('.navbar__link-toggle')
  .addEventListener('click', classToggle);


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});






