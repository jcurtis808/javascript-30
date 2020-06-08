const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const controls = document.querySelectorAll('button');
const toggle = document.querySelector('.toggle');
const sliders = document.querySelectorAll('.player__slider');
const full = document.querySelector('.full');


//function to start/stop playback after clicking anywhere on video or on play button
function togglePlayback(e) {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function fullScreen() {
    video.requestFullscreen()
}

//function to update progress bar with playback
const handleProgress = e => {
    const percent = (e.target.currentTime / e.target.duration) * 100 + '%';
    progressBar.style.flexBasis = percent;
}

//function to update progress to position scrolled
function updateProgress(e) {
   video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

//function to update progress to position clicked
// const clickProgress = (e) => video.currentTime = (e.layerX / video.videoWidth) * video.duration;

//function to control play and seek buttons
function controlButtons() {
    if (this === toggle) togglePlayback();
    if (this === controls[1]) video.currentTime -= 10;
    if (this === controls[2]) video.currentTime += 25;
}

//function to handle slider bars
function handleInput(e) {
    if (this.name === 'volume') video.volume = this.value;
    if (this.name === 'playbackRate') video.playbackRate = this.value;
    //Wes's solution - very clean
    // video[this.name] = this.value;
}

//EventListeners
video.addEventListener('click', togglePlayback);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('dblclick', fullScreen)
video.addEventListener('timeupdate', handleProgress);

let isChanging = false;
progress.addEventListener('mousemove', (e) => isChanging && updateProgress(e));
progress.addEventListener('mousedown', () => isChanging = true);
document.addEventListener('mouseup', () => isChanging = false);
progress.addEventListener('click', updateProgress);
controls.forEach(button => button.addEventListener('click', controlButtons));
sliders.forEach(slider => slider.addEventListener('input', handleInput));
full.addEventListener('click', fullScreen);