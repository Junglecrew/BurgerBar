  $(document).ready(function() {
    $('.arrow-down__pic').hover(
     function() {
      $(this).addClass('animated zoomIn'); 
     },
     function() {
      $(this).removeClass('animated zoomIn'); 
     });

    $('.team-list__member').click(
     function() {
      $('.team-list__member').removeClass('team-list__member--active');
      $(this).addClass('team-list__member--active');
     });

})


