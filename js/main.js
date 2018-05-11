$(document).ready(function(){
    $(".hamburger, .close").click(function(){
      $(".main-nav").toggleClass("open-nav");
  });
  $("nav a").click(function(e){
    $("nav a").revoveClass("active");
    // e.preventdefault();
    // console.log(this);
    $(this).addClass("active");
  });
 
