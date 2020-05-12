const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');


const date = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minDeg = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90;
    second.style.transform = `rotate(${secondsDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(date, 1000);
