(function() {
  const headerBurger = document.querySelector(".header_burger");
  const burgerMenu = document.querySelector(".nav__lists");
  const burgerClose = document.querySelector(".nav-list_close-block");
  const menuLinks = document.querySelectorAll(".nav_list__a");
  headerBurger.addEventListener("click", () => {
    burgerMenu.classList.add("nav__lists_open");
  });
  burgerClose.addEventListener("click", () => {
    burgerMenu.classList.remove("nav__lists_open");
  }); 


  if (window.innerWidth <= 1120) { // !ЕСЛИ ШИРИНА ЭКРАНА МЕНЬШЕ ИЛИ РАВНО 767 ТО
    for (let i = 0; i < menuLinks.length; i += 1) { // !ВСЕМ ЭЛЕМЕНТАМ menuLinks ДОБАВЛЯЕТ ЭТО СОБЫТИЕ
      menuLinks[i].addEventListener("click", () => {
        burgerMenu.classList.remove("nav__lists_open");
      });
    }
  } // !ЭТО СКРОЛЛ В БУРГЕР МЕНЮ
})();








(function () {
  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight; //! .header - САМ БЛОК header , КОТОРЫЙ МОЖЕТ МЕШАТЬ И ЗАБИРАТЬ ВЫСОТУ И ТОГДА НЕ КОРРЕКТНО БУДЕТ ДО БЛОКОВ СКРОЛЛИТЬСЯ!!!
      let target = document.querySelector(targetEl); // !НО ЕСЛИ ХЕАДЕР НЕ БУДЕТ ЕЗДИТЬ ПО СТРАНИЦЕ ИЛИ ЕГО НЕТ, headerElHeight ПЕРЕМЕННУЮ НАДО БУДЕТ ВЕЗДЕ УДАЛИТЬ 
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll'); // !js-scroll класс добавляем к ссылкам
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());






(function() {
  
})();
