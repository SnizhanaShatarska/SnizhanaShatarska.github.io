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

// add reviews
const url = "https://snizhanashatarska.github.io/reviews.json"

function populate() {
 axios.get(url)
  .then(responce => {
   populateReviews(responce.data.reviews);
  })
}

function populateReviews(reviews) {
 const swiper = document.getElementById("reviews");

  for (var i = 0; i < reviews.length; i++) {
    const swiperSlide = document.createElement('div')
    swiperSlide.classList.add('swiper-slide');

    const clientItem = document.createElement('div');
    clientItem.classList.add('section-slider-item', 'client-item');
    const iconsStar = document.createElement('div');
    iconsStar.classList.add('icons-star');

    for (let j = 0; j < reviews[i].rating; j++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('fa-solid', 'fa-star');
      iconsStar.appendChild(starIcon);
    }

    const clientItemDesc = document.createElement('div');
    clientItemDesc.classList.add('client-item-desc');

    const clientitemTitle = document.createElement('div');
    clientitemTitle.classList.add('section-slider-item-title');
    clientitemTitle.textContent = reviews[i].review_title;

    const clientText = document.createElement('p');
    clientText.classList.add('section-text');
    clientText.textContent = reviews[i].review;

    clientItemDesc.appendChild(clientitemTitle);
    clientItemDesc.appendChild(clientText);

    const clientItemInfo = document.createElement('div');
    clientItemInfo.classList.add('client-item-info');

    const clientItemInfoImg = document.createElement('div');
    clientItemInfoImg.classList.add('client-item-info-img');
    const clientImg = document.createElement('img');
    clientImg.src = reviews[i].avatar_url;
    clientImg.alt = reviews[i].avatar_alt;
    clientItemInfoImg.appendChild(clientImg);

    const clientItemInfoName = document.createElement('div');
    clientItemInfoName.classList.add('client-item-info-name');
    clientItemInfoName.textContent = reviews[i].user_name;

    const clientItemInfoCity = document.createElement('div');
    clientItemInfoCity.classList.add('client-item-info-city');
    clientItemInfoCity.textContent = reviews[i].user_city;

    clientItemInfoName.appendChild(clientItemInfoCity);
    clientItemInfo.appendChild(clientItemInfoImg);
    clientItemInfo.appendChild(clientItemInfoName);

    clientItem.appendChild(iconsStar);
    clientItem.appendChild(clientItemDesc);
    clientItem.appendChild(clientItemInfo);

    swiperSlide.appendChild(clientItem);
    swiper.appendChild(swiperSlide);
  }
}
  populate();

