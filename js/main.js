    $(window).on('load',function(){
    $(".loader").fadeOut(3000);
});

    $('.autoplay').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
});

AOS.init({
       offset: 120,
       once: true,
   });

   function show(){
       document.getElementById("side-menu").classList.toggle("show");
   }
   function button_onclick() {
    document.getElementById("btn").style.visibility = "hidden";
}
