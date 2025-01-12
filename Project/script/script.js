/*burgerMenu*/
const burgerIcons = document.getElementById('burgerIcons');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click', () => {
  menuList.classList.toggle('show-menu')
  openIcon.classList.toggle('hide')
  closeIcon.classList.toggle('hide')
});

/*swiper*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.custom-swiper-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      return current.toString().padStart(2, '0') + ' of ' + total.toString().padStart(2, '0');
    },
  },

  navigation: {
    nextEl: '.swipe_r',
    prevEl: '.swipe_l',
  },
  breakpoints: {
    799: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});

/*Fixed Header*/
const header = document.getElementById("header");
const firstScreen = document.getElementById("firstScreen");
const btnScrollTop = document.getElementById("btnScrollTop");/*button Scroll to Top*/


// Одержуємо висоту елемента firstScreen та початкову позицію прокрутки
let firstScreenH = firstScreen.offsetHeight;
let scrollPos = window.pageYOffset;

// Перевіряємо прокрутку при завантаженні сторінки
checkScroll(scrollPos, firstScreenH);

// Додаємо обробник події для скролінгу та зміни розміру
window.addEventListener("scroll", function() {
    // Оновлюємо висоту елемента та позицію прокрутки
    firstScreenH = firstScreen.offsetHeight;
    scrollPos = window.pageYOffset;

    checkScroll(scrollPos, firstScreenH);
});

window.addEventListener("resize", function() {
    // Оновлюємо висоту елемента при зміні розміру вікна
    firstScreenH = firstScreen.offsetHeight;
    checkScroll(scrollPos, firstScreenH);
});

// Функція для перевірки прокрутки та зміни класу
function checkScroll(scrollPos, firstScreenH) {
    if (scrollPos > firstScreenH) {
        header.classList.add("fixed");
        btnScrollTop.style.display = "block";
    } else {
        header.classList.remove("fixed");
        btnScrollTop.style.display = "none";
    }
}

btnScrollTop.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


