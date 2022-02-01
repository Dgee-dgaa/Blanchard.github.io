// -------------   Burger menu  -------------
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-btn').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('is-active')
})
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('is-active')
})
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__search-btn').addEventListener('click', function() {
    document.querySelector('#header__search__field').classList.toggle('is-active');
    document.querySelector('#header__search-x').classList.toggle('is-active');
    document.querySelector('#header__search-form').classList.toggle('is-active');
})
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__search-x').addEventListener('click', function() {
    document.querySelector('#header__search__field').classList.toggle('is-active');
    document.querySelector('#header__search-x').classList.toggle('is-active');
    document.querySelector('#header__search-form').classList.toggle('is-active');
})
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger__search-btn').addEventListener('click', function() {
    document.querySelector('#burger__search__field').classList.toggle('is-active');
    document.querySelector('#burger__search-x').classList.toggle('is-active');
    document.querySelector('#burger__search-form').classList.toggle('is-active');
})
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger__search-x').addEventListener('click', function() {
    document.querySelector('#burger__search__field').classList.toggle('is-active');
    document.querySelector('#burger__search-x').classList.toggle('is-active');
    document.querySelector('#burger__search-form').classList.toggle('is-active');
})
});

// -------------   Swiper Slider  -------------
const heroSwiper = new Swiper('.swiper-hero-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  
    mousewheel: {
      sensitivity: 1,
    },
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".menu__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container-dropdown");
    
    document.querySelectorAll(".menu__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active-btn");
      }
    });
    
    document.querySelectorAll(".container-dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-menu__item");
      }
    })
    dropdown.classList.toggle("active-menu__item");
    btn.classList.toggle("active-btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".menu")) {
    document.querySelectorAll(".container-dropdown").forEach(el => {
        el.classList.remove("active-menu__item");
    })
     document.querySelectorAll(".menu__btn").forEach(el => {
        el.classList.remove("active-btn");
    });
  }
})
})

let gallerySlider = new Swiper(".swiper-gallery-container", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery__swiper-pagination-step",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__sw-btn-next",
    prevEl: ".gallery__sw-btn-prev"
  },

  breakpoints: {
    120: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0.
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

const partnersSwiper = new Swiper('.swiper-partners-container', {
  spaceBetween: 50,  
  autoHeight: false,  
  slidesPerView: 3,
  slidesPerGroup: 3,  
  
  keyboard: {
    enabled: true,
    onlyInViewport: true, 
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },
  
  navigation: {
    nextEl: '.swiper-button-next-part',
    prevEl: '.swiper-button-prev-part',
  },  

  breakpoints: {
    120: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    500: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

// -------------   Select  -------------
const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',  
    shouldSort: false,            
});

// -------------   Accordion  -------------
$( function() {
  $( ".accordion" ).accordion({

    heightStyle: "content",
    collapsible: true});
} );

// -------------   Tabs  -------------
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content_active .catalog__link').forEach(function(tabLink) {
        tabLink.classList.remove('catalog__link_active');      
      });

      this.classList.add("catalog__link_active");

      document.querySelectorAll('.catalog__content_active .catalog__art-info').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__art-info_active')        
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__art-info_active')
      
    });
  });
});

// -------------   Events cards  -------------
let eventsSlider = new Swiper(".eventsSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  grid: {
    rows: 1
  },
  pagination: {
    el: ".eventsSwiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".events-btn_next",
    prevEl: ".events-btn_prev"
  },

  breakpoints: {
    200: {
      spaceBetween: 34,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    600: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    900: {      
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1200: {
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

// -------------   Tooltip  -------------


tippy('.tooltip-span-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  placement: 'top',
  maxWidth: 264,
  arrow: true,
  duration: 500,
  animation: 'scale',
  theme: 'purple',
});

tippy('.tooltip-span-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  placement: 'top',
  maxWidth: 264,
  arrow: true,
  duration: 500,
  animation: 'scale',
  theme: 'purple',
});

tippy('.tooltip-span-3', {
  content: 'В стремлении повысить качество',
  placement: 'top',
  maxWidth: 264,
  arrow: true,
  duration: 500,
  animation: 'scale',
  theme: 'purple',
});

// Yandex map    
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.7603534958755,37.614680332768366],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
        });

        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.7603534958755,37.614680332768366] // координаты точки
            }
        });

        var myPlacemark = new ymaps.Placemark([55.7603534958755,37.614680332768366], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/geotag.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42],
        });

        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark);
    };

    // Form validation
    // mask
    var selector = document.querySelector('input[type="tel"]');
    var im = new Inputmask("+7(999)-999-99-99");

    im.mask(selector);

    //validation
    new JustValidate('.contacts__form', {
        rules: {
          name: {
            required: true,
            minLength: 2,
            maxLength: 30,
          },

          tel: {
              required: true,
              function: (name, value) => {
                  const phone = selector.inputmask.unmaskedvalue();
                  return Number(phone) && phone.length === 10;
            }
          },
    },

    messages: {
      name: {
        minLength: 'Имя должно содержать более двух символов',
        required: 'Как вас зовут?',
      },

      tel: {
        required: 'Укажите ваш телефон',
        function: 'Недопустимый формат',
      },
    },
  });  