$('.nav-item a').click(function(){
    $('.nav-item a').removeClass("active");
    $(this).addClass("active");
});

$('.nav-button').click(function(){
  $('.collapse ').addClass("mobile-nav");
  
})

$('.nav-item a').click(function(){
  $('.nav-item a').addClass("menu-link");
  
});

$('.nav-button').click(function(){
  $('.nav-link').removeClass("menu-link");
})
