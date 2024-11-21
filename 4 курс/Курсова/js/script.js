// стрілка скролу
// Отримуємо елемент кнопки
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


// карусель

const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
    updateCarousel((currentIndex - 1 + carouselItems.length) % carouselItems.length);
});

document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
    updateCarousel((currentIndex + 1) % carouselItems.length);
});

function updateCarousel(newIndex) {
    carouselItems[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = newIndex;
    carouselItems[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}


// modal window
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });




