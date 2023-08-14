const urlParams = new URLSearchParams(window.location.search);
const audioSrc = urlParams.get('audio');
const imageSrc = urlParams.get('image');
const songName = urlParams.get('song');
const artistName = urlParams.get('artist');

document.getElementById('songName').innerText = songName;
document.getElementById('artistName').innerText = artistName;
document.getElementById('audioPlayer').src = `../audio/${audioSrc}.mp3`;
document.getElementById('audioImage').src = `../images/${imageSrc}.jpg`;