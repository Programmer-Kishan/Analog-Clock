
const secHand = document.getElementById('sec-hand');
const minHand = document.getElementById('min-hand');
const hrHand = document.getElementById('hr-hand');

let sec = new Date().getSeconds();
let min = new Date().getMinutes();
let hr = new Date().getHours();


setInterval(() => {
    hr = hr > 12 ? hr-12 : hr;

    secHand.style.transform = `rotate(${6 * sec}deg)`;
    sec = new Date().getSeconds();

    minHand.style.transform = `rotate(${6 * min}deg)`;
    min = new Date().getMinutes();

    hrHand.style.transform = `rotate(${(hr*30) + (min*0.5)}deg)`;
    hr = new Date().getHours();
}, 1000);
