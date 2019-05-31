

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
/* navigation js her */

/* progress bar js her */
 
$(document).ready(function() {

var getMax = function() {
    return $(document).height() - $(window).height();
}

var getValue = function() {
    return $(window).scrollTop();
}

if ('max' in document.createElement('progress')) {
    var progressBar = $('progress');
    
    progressBar.attr({
        max: getMax()
    });

    $(document).on('scroll', function() {
        progressBar.attr({
            value: getValue()
        });
    });

    $(window).resize(function() {
        
        progressBar.attr({
            max: getMax(),
            value: getValue()
        });
    });

} else {

    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;

    var getWidth = function() {
        
        value = getValue();
        width = (value / max) * 100;
        width = width + '%';
        return width;
    }

    var setWidth = function() {
        progressBar.css({
            width: getWidth()
        });
    }

    $(document).on('scroll', setWidth);
    $(window).on('resize', function() {
        
        max = getMax();
        setWidth();
    });
}
});

$(document).ready(function(){
	// fadeIn() for smoth loading
	$(".menu-container").fadeIn();
	
	
	$(".menu-container .manu ul li:has(ul)").children("ul").not("ul li ul li ul").addClass("have_dropdown");
	
	//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu
	$(".menu-container .manu ul li ul:has(li ul li)").removeClass("have_dropdown").addClass("have_dropdown_n_style");
	
	 //Checks if li has sub (ul) and adds class for toggle icon 
	$(".menu-container .manu ul li:has('ul')").children("a").not(".manu ul li ul li a").append("<span class='drop_down_icon fa fa-angle-down'></span>");
	
	
	if ($(window).width() < 768) {
		//If width is less or equal to 943px dropdowns are displayed on click
		$(".menu-container .manu ul li a").not("ul li ul li a").click(function(){
			$(this).removeAttr("href");
		});
         $(".menu-container .manu ul li").click(function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideToggle(100);
		});

		$(".menu-container .manu ul li").click(function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideToggle(100);
		}); 
		
		//================================================================
		
		$(".nav_menu_toggler_icon").click(function(){
			$(".menu-container .manu").slideToggle();
		});
		
     }else{
		
		//If width is more than 768px dropdowns are displayed on hover
		 
		$(".menu-container .manu ul li").hover(function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideDown(100);
		},function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideUp(100);
		});

		$(".menu-container .manu ul li").hover(function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideDown(100);
		},function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideUp(100);
		}); 
	 }
});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


	  google_ad_client = "ca-pub-2783044520727903";
			/* jQuery_demo */
	google_ad_slot = "2780937993";
	google_ad_width = 728;
	google_ad_height = 90;
	
	//-->
	
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

		if(win.width() > 300){

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
