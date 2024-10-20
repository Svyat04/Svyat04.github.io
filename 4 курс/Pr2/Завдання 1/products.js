// Створення масиву об'єктів products
const products = [
    { name: "Ноутбук", category: "Електроніка", price: 1200, inStock: 5 },
    { name: "Мобільний телефон", category: "Електроніка", price: 800, inStock: 0 },
    { name: "Навушники", category: "Аудіо", price: 150, inStock: 10 },
    { name: "Книжка", category: "Література", price: 20, inStock: 2 },
    { name: "Пляшка", category: "Кухня", price: 10, inStock: 0 }
];

// Функція для отримання доступних товарів
function getAvailableProducts() {
    return products.filter(product => product.inStock > 0);
}

// Функція для пошуку товару за назвою
function findProductByName(productName) {
    const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    return product ? product : "Товар не знайдено";
}

// Виклик функцій для демонстрації в консолі
console.log("Доступні товари:", getAvailableProducts());
console.log("Пошук товару 'Навушники':", findProductByName("Навушники"));
console.log("Пошук товару 'Телевізор':", findProductByName("Телевізор"));
