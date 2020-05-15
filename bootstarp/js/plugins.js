/*global $, jQuery, alert*/

$(document).ready(function () {
    
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#E60024").end()
    
           .eq(1).css("backgroundColor", "#E426D5").end()
    
           .eq(2).css("backgroundColor", "#009AFF").end()
    
           .eq(3).css("backgroundColor", "#FFD500");
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});

// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});




    var scrolltop=$("#scroll-top");
    $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop()>=600)
    {
     scrolltop.show();
    }
   else
   {
    
    
   scrolltop.hide(); 
    
  }
  //click on button to scroll top
  /*
   
  scrolltop.click(function(){
   
   $("html,body").animate({scrollTop:0});
  */ 
 
   
  });
    $(scrolltop).on('click',function(){ 
 $("html,body").animate({ scrollTop:0},600);
   
   });