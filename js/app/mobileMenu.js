  // Меню для мобильной версии 
  var mobileMenu = function() {
    $('.burger-menu__link').click(
      function() {
        $('.nav-mobile').css('right', '0px'); //меню появляется слева на полный экран
        $.fn.fullpage.setAllowScrolling(false); // запрет на скрол мышкой при открытом меню
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет на скрол с клавиатуры при открытом меню
        $("body").addClass("fixed"); //для мобильных версий
        $("body").css("overflow","hidden"); // для тесктопа
      });
    $('.nav-mobile__btn').click(
      function() {
        $('.nav-mobile').css('right', '999px');
        $.fn.fullpage.setAllowScrolling(true); // снятие запрета на скрол мышкой
        $.fn.fullpage.setKeyboardScrolling(true, 'down'); // снятие запрета на скрол клавиатурой
        $("body").css("overflow","auto"); // для тесктопа
        $("body").removeClass("fixed"); //для мобильных версий
      });
  }
  mobileMenu();