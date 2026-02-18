const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Theme toggle logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
});

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbersContainer.innerHTML = '';

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
});
