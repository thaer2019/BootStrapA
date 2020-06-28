$(function () {

// adjust slider height
var winH   = $(window).height(),
  uPPerH   = $(".upper-bar").innerHeight(),
  navH     = $(".navbar").innerHeight();
$(".slider, .carousel-item").height(winH - (uPPerH + navH));

// shuffle

$(".featured-work ul li").on("click",function(){
       $(this).addclass("active").siblings().removeclass("active")
})

}); // Dont write anything out this function


