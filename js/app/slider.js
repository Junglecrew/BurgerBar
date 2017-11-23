  // Слайдер //
  var slider = function() {
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
    // прокрутка при нажатии на стрелки вправо или влево
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
  };
  slider();