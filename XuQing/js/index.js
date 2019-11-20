//banner
(function(){
    $(".flexslider").flexslider({
        animation: "fade",
        slideshowSpeed:3000,//展示时间间隔ms
        animationSpeed:400,//滚动时间ms
        touch:true,
        pauseOnAction:false,
        before: function(){
        },
        after:function () {
        }
    });


})();



/* // fancybox
$('.fancybox').fancybox();

//宽高等于浏览器的宽高
function quan()
{
    var _h=$(window).height();
    var _w=$(window).width();
    $(".slides li").css("width",_w);
    $(".slides li").css("height",_h);
}
window.onload=quan();

$(window).resize(function(){
    quan()
} ); */
