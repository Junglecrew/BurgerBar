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


})


