// for (var i = 0; i < 4; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//     });
// }
// function audioPlay(text) {
//     switch (text) {
//         case "song1":
//             var audio = new Audio("songs/anthem.mp3");
//             audio.play();
//             break;
//         case "song2":
//             var audio = new Audio("songs/teerhara.mp3");
//             audio.play();
//             break;
//         case "song3":
//             var audio = new Audio("songs/bd.mp3");
//             audio.play();
//             break;
//     }
// }

const sounds = [
    'song1',
    'song2',
    'song3',
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}