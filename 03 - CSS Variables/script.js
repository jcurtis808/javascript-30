//grabbing each input from the DOM
const transform = document.getElementById('transform');
const blur = document.getElementById('blur');
const base = document.getElementById('base');
const cssRoot = document.documentElement;
cssRoot.style.setProperty('--base', `${base.value}`); // matching --base-color with picker on load

//declaring functions for events
const move = (e) => {
    cssRoot.style.setProperty('--transform', `translate(${e.target.value}px, ${e.target.value}px)`);
}

const blurImg = (e) => {
    const bluramt = (e.target.value / 2);
    cssRoot.style.setProperty('--blur', `blur(${bluramt}px)`);
}

const changeColor = (e) => {
    cssRoot.style.setProperty('--base', `${e.target.value}`);
}

//adding eventListeners
base.addEventListener('input', changeColor);
blur.addEventListener('input', blurImg);
transform.addEventListener('input', move);

