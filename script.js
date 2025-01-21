// Анимация появления секций при прокрутке (для остальных блоков)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section'); // Секции для анимации

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
        observer.observe(section); // Отслеживаем каждую секцию
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

// Событие выбора файла
fileInput.addEventListener('change', function () {
    const file = this.files[0]; // Получаем выбранный файл

    if (file) {
        const reader = new FileReader();

        // Загрузка файла для предпросмотра
        reader.onload = function (e) {
            previewImage.src = e.target.result; // Устанавливаем выбранное изображение
            previewImage.style.display = 'block'; // Показываем изображение
            fileLabel.style.display = 'none'; // Скрываем текст
        };

        reader.readAsDataURL(file);
    }
});

// Событие отправки формы
document.querySelector('form').addEventListener('submit', function (e) {
    // После отправки формы сбрасываем состояние
    previewImage.style.display = 'none';
    fileLabel.style.display = 'block';
    fileInput.value = ''; // Очищаем input
});

