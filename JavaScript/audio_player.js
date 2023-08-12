const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const rewindButton = document.getElementById('rewindButton');
const forwardButton = document.getElementById('forwardButton');
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progress');

audioPlayer.addEventListener('loadedmetadata', () => {
    progressBar.style.width = '0%';
});

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

rewindButton.addEventListener('click', () => {
    audioPlayer.currentTime -= 10;
});

forwardButton.addEventListener('click', () => {
    audioPlayer.currentTime += 10;
});

audioPlayer.addEventListener('play', () => {
    playButton.style.backgroundImage = 'url(../icons/pause_audio.svg)';
});

audioPlayer.addEventListener('pause', () => {
    playButton.style.backgroundImage = 'url(../icons/play_audio.svg)';
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = progressPercent + '%';
});
