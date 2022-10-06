// JavaScript Document

$(document).ready(function(){
  $(".nav-toggle").click(function(){
    $(".menu").slideToggle();
  });
});





$('#banner').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:4,
 
})


var typed = new Typed('.element', {
               	strings: ["Graphic Designer.","Web Designer.", "App Designer."],
       	 	typeSpeed:100,
        		backSpeed:50,
        		loop:true,
        		});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:5
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


new WOW().init();