  $(document).ready(function() {

    $('#fullpage').fullpage({
      menu: '#menu',
      responsiveHeight: 650
    });

    // Определение ширины слайдера в % в зависимости от количества слайдов
    // $(function() {
    //   let slider= $('.slider__list');
    //   let sliderItemsCount = $('.slider__item').length;
    //   let sliderWidth = sliderItemsCount * 100 + "%";
    //   let setSliderWidth = function(element, width) {
    //     $(element).css(width, sliderWidth);
    //   }

    //   setSliderWidth(slider, 'width');
    // });



    // Меню для мобильной версии 
    $('.burger-menu__link').click(
      () => {
        $('.nav-mobile').css('right', '0px'); //меню появляется слева на полный экран
        $.fn.fullpage.setAllowScrolling(false); // запрет на скрол мышкой при открытом меню
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет на скрол с клавиатуры при открытом меню
      });

    $('.nav-mobile__btn').click(
      () => {
        $('.nav-mobile').css('right', '999px');
        $.fn.fullpage.setAllowScrolling(true); // снятие запрета на скрол мышкой
        $.fn.fullpage.setKeyboardScrolling(true, 'down'); // снятие запрета на скрол клавиатурой
      });

    // Анимация стрелки вниз
    $('.arrow-down__pic').hover(
     () => {
      $(this).addClass('animated zoomIn'); 
     },
     () => {
      $(this).removeClass('animated zoomIn'); 
     });

    // вертикальная карусель. Секция "Команда" 
    $('.team__member').click(
     function(e) {
      e.preventDefault();
      if ($(this).hasClass('team__member--active')) {
          $('.team__member').removeClass('team__member--active');
      } else {
          $('.team__member').removeClass('team__member--active');
          $(this).addClass('team__member--active');
      }});


    // Горизонтальный слайдер. Секция "Меню"
    $('.menu__link').click (
      function(e){
        e.preventDefault();
        //Проверка, есть ли активный класс у родителя ссылки, чтобы можно было закрыть все элементы.
        if ($(this).parent().hasClass('menu__item--active')) {
          $('.menu__item').removeClass('menu__item--active');
          $('.menu__item-text').css({
            'transition': '0',
            'transition-delay': '0'
          });
        }
        else {
          $('.menu__item').removeClass('menu__item--active');
           // Убирает у остальных элементов класс активный.
          $(this).parent().addClass('menu__item--active');
          //родителю данной ссылке даёт активный класс.
        }

      })


    // Слайдер //

    $( () => {
      let list = $('.slider__list'),
          sliderItemsCount = $('.slider__item').length;
          sliderWidth = sliderItemsCount * 100 + "%";
          // Определение ширины слайдера в % в зависимости от количества слайдов
          setSliderWidth = function(element, width) {
            $(element).css(width, sliderWidth);
          }
          // анимация движения
          moveSlide = function(container, slideNum) {
            let items = $('.slider__item'),
                activeSlide = items.filter('.active'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                duration = 500;

            if (reqItem.length) {
              list.animate({
                'left': -reqIndex * 100 + '%'}, duration, () => {
                  activeSlide.removeClass('active');
                  reqItem.addClass('active');
              });
            }
          }
      setSliderWidth(list, 'width');


      // прокрутка при нажатии на кнопки вправо или влево
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


