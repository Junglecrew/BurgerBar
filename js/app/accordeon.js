  // вертикальныый аккордеон. Секция "Команда" 
  var accTeam = function() {
    $('.team__member').click(
     function(e) {
      e.preventDefault();
      if ($(this).hasClass('team__member--active')) {
          $('.team__member').removeClass('team__member--active');
      } else {
          $('.team__member').removeClass('team__member--active');
          $(this).addClass('team__member--active');
      }});
  };
  accTeam();

  // Горизонтальный аккордеон. Секция "Меню"
  var accMenu = function() {
    $('.menu-section').click(function(e){
      if ($('.menu__link').has(e.target).length === 0) {
        $('.menu__item').removeClass('menu__item--active');
      }
    });

    $('.menu__link').click (
      function(e){
        e.preventDefault();
        //Проверка, есть ли активный класс у родителя ссылки, чтобы можно было закрыть все элементы.
        if ($(this).parent().hasClass('menu__item--active')) {
          $('.menu__item').removeClass('menu__item--active');
        } else {
          // Убирает у остальных элементов класс активный.
          $('.menu__item').removeClass('menu__item--active');
          //родителю данной ссылке даёт активный класс.
          $(this).parent().addClass('menu__item--active');
          }
      });
  }
  accMenu();