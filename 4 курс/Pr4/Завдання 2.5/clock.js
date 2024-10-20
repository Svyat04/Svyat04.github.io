function formatTimeUnit(value) {
    // Додаємо "0" до значення, якщо воно менше 10
    return value < 10 ? '0' + value : value;
}

function updateClock() {
    const now = new Date(); // Отримання поточної дати та часу
    const hours = formatTimeUnit(now.getHours()); // Форматування годин
    const minutes = formatTimeUnit(now.getMinutes()); // Форматування хвилин
    const seconds = formatTimeUnit(now.getSeconds()); // Форматування секунд
    
    // Виведення відформатованого часу на сторінку
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Додаємо обробник подій для кнопки
document.getElementById('updateButton').addEventListener('click', updateClock);

// Виклик функції для початкового відображення
updateClock();
