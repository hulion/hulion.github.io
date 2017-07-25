// 內頁捲軸變色
// header 自動變色
$(window).on("scroll touchmove", function () {
    var $vh = $('.Project-wrap-1');
    var vhH = $vh.height() - 150;
    var $footer = $('.projects-tmp').height();
    $('.header-wrap').toggleClass('tiny', $(document).scrollTop() > vhH);
    $('html').toggleClass('show-scrollbar', $(document).scrollTop() > 0);
    $('.Project-wrap-3').toggleClass('tofooter', $(document).scrollTop() > $footer);
});

