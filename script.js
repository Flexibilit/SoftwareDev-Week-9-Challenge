'use strict';
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = '10';


const secretNumber = Math.trunc(Math.random()*20) + 1;

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('guess').value);
}); 