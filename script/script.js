$(function(){
    // NAV
    var nav = $(".nav");
    var navbg = $(".header");

    nav.on("mouseenter", function(){
        nav.find(".subnav").stop(true).slideDown(200);
        navbg.find(".subnav-bg").stop(true).slideDown(200);
    }).on("mouseleave", function(){
        nav.find(".subnav").stop(true).slideUp(200);
        navbg.find(".subnav-bg").stop(true).slideUp(200);
    });

    // SLIDE
    var $slide = $(".slides > div");
    var count = $slide.length;
    var index = 0;


    $slide.eq(index).stop(true).fadeIn(300);
    function slide(){
        $interval = setInterval(function(){
            slideAct();
        }, 3000);
    }
    function slideAct(){
        var next = (index + 1) % count;
        $slide.eq(index).stop(true).fadeOut(300);
        $slide.eq(next).stop(true).fadeIn(300);
        index = next;
    }
    slide();

    // POPUP
    var popup = $(".popup");
    var btn = popup.find(".btn");

    $(".notice").find("ul>li").on("click", function(){
        popup.stop(true).fadeIn(300);
    });
    btn.on("click", function(){
        popup.stop(true).fadeOut(300);
    });
    $(".menu").find("li").on("click", function(){
        popup.stop(true).fadeIn(300);
    });
    btn.on("click", function(){
        popup.stop(true).fadeOut(300);
    });
     
});