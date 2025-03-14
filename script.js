// Анимация появления секций при прокрутке (для остальных блоков)
// Анимация появления секций и кнопок при прокрутке
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section, .contact-row'); // Отслеживаем и секции, и кнопки

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс видимости
            }
        });
    }, {
        threshold: 0.1 // Порог видимости (10% элемента)
    });

    sections.forEach(section => {
        observer.observe(section); // Отслеживаем каждую секцию и кнопку
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      // Опции Swiper
      loop: true, // Бесконечный слайдер
      navigation: {
        nextEl: ".swiper-button-next", // Кнопка "вперед"
        prevEl: ".swiper-button-prev", // Кнопка "назад"
      },
      pagination: {
        el: ".swiper-pagination", // Индикаторы
        clickable: true, // Возможность клика по точкам
      },
      effect: "slide", // Эффект перехода
      speed: 600, // Скорость анимации (в мс)
    });
  });

  // Получаем элементы
const fileInput = document.getElementById('id_image');
const uploadBox = document.getElementById('upload-box');
const fileLabel = document.getElementById('file-label');
const previewImage = document.getElementById('preview-image');






