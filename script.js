// Слідкуємо, коли користувач доходить до кінця сторінки
document.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    // Якщо користувач дійшов до кінця сторінки
    if (scrolled >= scrollableHeight) {
        footer.classList.add('visible-footer');
    } else {
        footer.classList.remove('visible-footer');
    }
});
