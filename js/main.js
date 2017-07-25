/*首頁輪播*/
$(window).load(function() {

  $('.flexslider').flexslider({
    animation: "slide",/*fade or slide 動態淡入淡出或是滑動*/
    direction: "horizontal", /*horizontal or vertical 垂直水平*/   
    slideshowSpeed: 10000,/*輪播速度*/
    pauseOnHover:"true",/*true or false 移入內容是否停止*/
    mousewheel: false,  
    controlNav: false, 
    directionNav: true,
    touch: true,
    prevText: "",
    nextText: "",
    after: function(e){

    var AAA = $('#AAA').hasClass('flex-active-slide');
    var BBB = $('#BBB').hasClass('flex-active-slide');
    var CCC = $('#CCC').hasClass('flex-active-slide');

    if(AAA==true){
        $(".title-1").removeClass('img2').removeClass('img3').addClass('img1');
        $(".number-inner .number-1").removeClass('img2').removeClass('img3').addClass('img1');
    }
    if(BBB==true){
        $(".title-1").removeClass('img1').removeClass('img3').addClass('img2');
        $(".number-inner .number-1").removeClass('img1').removeClass('img3').addClass('img2');
    }
    if(CCC==true){
        $(".title-1").removeClass('img2').removeClass('img1').addClass('img3');
        $(".number-inner .number-1").removeClass('img2').removeClass('img1').addClass('img3');
    }

    }
  });

});

// 讀取
$(document).ready(function(){
    
    Pace.on('done', function() {
        setTimeout(function(){
            $(".loading-block").removeClass('active');
        },300);
    });
    
});

$(function(){

    var body = $("html, body");

    // 選單
    $("#project-btn").click(function(){
        $(".kv-wrap .banner-wrap").addClass('active');
        $(".container-wrap").addClass('blur');
        $(".nav-wrap").addClass('active');
        $(".bg-wrap .white-bg").addClass('active');
        body.stop().animate({scrollTop:0}, '500', 'swing', function() { 
            $("#project-blur").addClass('blur');
            $(".container-fluid").addClass('scrollfixed');
        });
    });
    $(".project-hit").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".container-wrap").removeClass('blur');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $("#project-blur").removeClass('blur');
        $(".container-fluid").removeClass('scrollfixed');
    });
    // 專案
    $("#pj01").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-1.html';
        },1000);
    });
    $("#pj02").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-2.html';
        },1000);
    });
    $("#pj03").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-3.html';
        },1000);
    });
    $("#pj04").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-4.html';
        },1000);
    });
    $("#pj05").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-5.html';
        },1000);
    });
    $("#pj06").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-6.html';
        },1000);
    });
    // 下方專案按鈕
    $("#pjf01").click(function(){
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-1.html';
        },1000);
    });
    $("#pjf02").click(function(){
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-2.html';
        },1000);
    });
    $("#pjf03").click(function(){
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-3.html';
        },1000);
    });
    $("#pjf04").click(function(){
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-4.html';
        },1000);
    });
    $("#pjf05").click(function(){
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-5.html';
        },1000);
    });
    // 首頁大按鈕
    $("#view-btn-letou").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-1.html';
        },1000);
    });
    $("#view-btn-six").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'project-2.html';
        },1000);
    });
    // 回首頁
    $("#back-home").click(function(){
        $(".kv-wrap .banner-wrap").removeClass('active');
        $(".nav-wrap").removeClass('active');
        $(".bg-wrap .white-bg").removeClass('active');
        $(".loading-block").addClass('active');
        setTimeout(function(){
            window.location.href = 'index.html';
        },1000);
    });

});


