  $(document).ready(function() {

    $('#fullpage').fullpage({
      menu: '#menu'
    });


    // Меню для мобильной версии 
    $('.burger-menu__link').click(
      function(){
        $('.nav-mobile').css('right', '0px');
    })
    $('.nav-mobile__btn').click(
      function() {
        $('.nav-mobile').css('right', '999px');
      })

    // Анимация стрелки вниз
    $('.arrow-down__pic').hover(
     function() {
      $(this).addClass('animated zoomIn'); 
     },
     function() {
      $(this).removeClass('animated zoomIn'); 
     });

    // вертикальная карусель. Секция "Команда" 
    $('.team__member').click(
     function() {
      $('.team__member').removeClass('team__member--active');
      $(this).addClass('team__member--active');
     });


    // Горизонтальный слайдер. Секция "Меню"
    $('.menu__link').click (
      function(e){
        e.preventDefault();
        //Проверка, есть ли активный класс у родителя ссылки, чтобы можно было закрыть все элементы.
        if ($(this).parent().hasClass('menu__item--active')) {
          $('.menu__item').removeClass('menu__item--active');
        }
        else {
          $('.menu__item').removeClass('menu__item--active'); // Убирает у остальных элементов класс активный.
          $(this).parent().addClass('menu__item--active'); //родителю данной ссылке даёт активный класс.
        }

      })


    // Слайдер //

    $( () => {
      var  moveSlide = function(container, slideNum) {
        var items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;

        if (reqItem.length) {
          list.animate({
            'left': -reqIndex * 100 + '%'}, duration, () => {
              activeSlide.removeClass('active');
              reqItem.addClass('active');
          });
        }
      }

      $('.arrow').click(function(e){
        e.preventDefault();

        var $this = $(this),
            container = $('.burgers-section__slider'),
            items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

        if ($this.hasClass('arrow-right')) { //вперед
          existedItem = activeItem.next();
          edgeItem = items.first();
        }
        if ($this.hasClass('arrow-left')) { //назад
          existedItem = activeItem.prev();
          edgeItem = items.last();
        }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();


        moveSlide(container, reqItem);

      });

    });

});


