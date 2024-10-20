const phrases = [
    "Привіт! Це ефект друкарської машинки.",
    "Сподіваюся, вам сподобається!",
    "Це демонстрація за допомогою JavaScript.",
    "Введіть свою фразу для друку!"
];

let currentPhrase = "";
let currentIndex = 0;
let outputElement = document.getElementById("output");


function typeWriterEffect(phrase) {
    currentIndex = 0; 
    currentPhrase = phrase;
    outputElement.innerText = ""; 

    const interval = setInterval(() => {
        
        if (currentIndex < currentPhrase.length) {
            outputElement.innerText += currentPhrase[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval); 
        }
    }, 100); 
}


document.getElementById("startButton").addEventListener("click", () => {
    const userPhrase = prompt("Введіть фразу для друку:"); 

    
    if (userPhrase) {
        typeWriterEffect(userPhrase);
    } else {
        
        const randomIndex = Math.floor(Math.random() * phrases.length);
        typeWriterEffect(phrases[randomIndex]);
    }
});
