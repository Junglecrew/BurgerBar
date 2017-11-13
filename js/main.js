  $(document).ready(function() {
    $('.arrow-down__pic').hover(
     function() {
      $(this).addClass('animated zoomIn'); 
     },
     function() {
      $(this).removeClass('animated zoomIn'); 
     });

    $('.team__member').click(
     function() {
      $('.team__member').removeClass('team__member--active');
      $(this).addClass('team__member--active');
     });

    $('.header-menu__burger-link').click(
      function(){
        $('.header-menu-nav-mobile').css('right', '0px');
    })

    $('.header-menu-nav-mobile__btn').click(
      function() {
        $('.header-menu-nav-mobile').css('right', '999px');
      })

})


