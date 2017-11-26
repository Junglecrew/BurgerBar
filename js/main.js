$(document).ready(function() {

  // OnePageScroll. Плагин fullpage.js
  var onePageScroll = function() {
    $('#fullpage').fullpage({
      menu: '#menu',
      responsiveHeight: 651,
      verticalCentered:false,
    });
    }
  onePageScroll();

  //запрет или разрешение скороллинга
  var scrollControl = function(param) {
    $.fn.fullpage.setAllowScrolling(param);
    $.fn.fullpage.setKeyboardScrolling(param, 'down');
  }

  var modalClose = function(modal) {
    $('.modal__close').click(function(e){
      e.preventDefault()
      $(modal).addClass('visuallyHidden');
      scrollControl(true);
      $('.navigation__dots').css('z-index', '3');
    });
    // закрыие окна модалки при клике вне области
    $(modal).click(function(e){
      if ($('.modal__container').has(e.target).length === 0) {
        $(modal).addClass('visuallyHidden');
        scrollControl(true);
        $('.navigation__dots').css('z-index', '3');
      }
    });
  };

  // Меню для мобильной версии 
  var mobileMenu = function() {
    var menuControl = function(param, value) {
      $('.nav-mobile').css(param, value);
    }

    $('.burger-menu__link').click(
      function() {
        menuControl('right', '0px');
        scrollControl(false);
      });

    $('.nav-mobile__btn').click(
      function() {
        menuControl('right', '999px');
        scrollControl(true);
      });

    $('.nav-mobile__link').click(
      function(){
        menuControl('right', '999px');
        scrollControl(true);
      });
  }
  mobileMenu();

  // Анимация стрелки вниз
  var arrowDownAnimate = function() {
    $('.arrow-down__pic').hover(
     () => {
      $(this).addClass('animated zoomIn'); 
     },
     () => {
      $(this).removeClass('animated zoomIn'); 
     });
  };
  arrowDownAnimate();

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

  //Модальное окно

  var showFullReview = function() {
    // открытие модального окна
    $('.reviews__link').click(function(e) {
      e.preventDefault();
        var container = $(this).closest('.reviews__info'),
            name = container.children('.reviews__name').text(),
            comment = container.children('.reviews__text').text();
            showModal = function() {
              $('.modalReview__title').text(name);
              $('.modal__content').text(comment); 
            }
            showModal();


      $('.modalReview').removeClass('visuallyHidden');
      $('.navigation__dots').css('z-index', '-1');
        scrollControl(false);
      if (!$('.modalReview').hasClass('visuallyHidden')) {
        modalClose('.modalReview');
      };

    });
  };
  showFullReview();

// Отправка сообщения от клиента на почту администратору
  var submitForm = function (ev) {
      ev.preventDefault();

      var form = $(ev.target);
          
      var request = ajaxForm(form);

      request.done(function(msg) {
          var mes = msg.mes,
              status = msg.status;

          $('.modalForm').removeClass('visuallyHidden');
          $('.navigation__dots').css('z-index', '-1');
          scrollControl(false);
          console.log('324324');
          if (status === 'OK') {
              $('.modal__content').text('Спасибо, Ваша заявка отправлена!');
              modalClose('.modalForm');
          } else{
              $('.modal__content').text('Ошибка');
              modalClose('.modalForm')
          }
      });

      request.fail(function(jqXHR, textStatus) {
          $('.modalForm').removeClass('visuallyHidden');
          $('.modal__content').text('Ошибка');
          scrollControl(false);
          $('.navigation__dots').css('z-index', '-1');
          modalClose('.modalForm');

          alert("Request failed: " + textStatus);
      });
  }

  var ajaxForm = function (form) {

      var url = form.attr('action'),
          data = form.serialize();

      return $.ajax({
          type: 'POST',
          url: url,
          data: data,
          dataType: 'JSON'
      });
  }

  $('#order-form').on('submit', submitForm);


});

  //Карта. googleMaps
  function initMap() {
    var uluru = {lat: 54.7104264, lng: 20.4522144};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru,
      draggable: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: false,
      streetViewControl: false
    });
    var image = 'img/map-marker.png';
    var marker = new google.maps.Marker({
      position: {lat: 54.7093730, lng: 20.5026030},
      map: map,
      title: 'Московский проспект, 40',
      icon: image
    });
    var marker = new google.maps.Marker({
      position: {lat: 54.6811190, lng: 20.4701760},
      map: map,
      title: 'ул. Киевская, 117',
      icon: image
    });
    var marker = new google.maps.Marker({
      position: {lat: 54.7228450, lng: 20.4634520},
      map: map,
      title: 'Проспект Мира, 126',
      icon: image
    });

  }


