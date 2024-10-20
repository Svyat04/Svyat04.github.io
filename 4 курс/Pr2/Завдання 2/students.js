// Створення масиву об'єктів students
const students = [
    { name: "Іван", age: 20, grade: 85, group: "A" },
    { name: "Олена", age: 22, grade: 90, group: "B" },
    { name: "Петро", age: 21, grade: 78, group: "A" },
    { name: "Марія", age: 19, grade: 95, group: "C" },
    { name: "Сергій", age: 23, grade: 82, group: "B" },
    { name: "Анастасія", age: 20, grade: 88, group: "C" }
];

// Функція для групування студентів за групами
function groupBy(students) {
    return students.reduce((acc, student) => {
        // Якщо група ще не існує, створіть нову
        if (!acc[student.group]) {
            acc[student.group] = [];
        }
        // Додайте студента до відповідної групи
        acc[student.group].push(student);
        return acc;
    }, {});
}

// Функція для сортування студентів за оцінками
function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => b.grade - a.grade); // Сортування за спаданням
}

// Виклик функцій для демонстрації
const groupedStudents = groupBy(students);
console.log("Групування студентів:", groupedStudents);

const sortedStudents = sortStudentsByGrade(students);
console.log("Сортовані студенти за оцінками:", sortedStudents);
