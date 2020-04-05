$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        smartSpedd:600,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false

    });

});
function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var errorm = document.getElementById("errorm");
    var text;

   errorm.style.padding = "10px";

   if (name.length < 2){
       text = "please Enter Valid Name";
       errorm.innerHTML = text;
       return false ;
   }
  
if (email.indexOf("@") == -1 || email.length < 5){
  text = "please Enter Valid email";
  errorm.innerHTML = text;
  return false ;

}
alert("form sunmitted success")
}

$ (function(){
    new Window().init();
});
$(window).on('load', function(){
    $("#image-wine1").addClass("animated fadeInDown");
    $("#image-wine2").addClass("animated fadeInDown");
    $("#image-wine3").addClass("animated fadeInDown");
    $("#about-city-image").addClass("animated fadeInLeft");
    $("#about-city-t").addClass("animated fadeInRIght");
    $(".wine-heading").addClass("animated fadeInLeft");
    $(".contact-box").addClass("animated fadeInDown");
    $(".home-heading").addClass("animated fadeInDown ");

})
