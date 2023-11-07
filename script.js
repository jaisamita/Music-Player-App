const music = new Audio('Music/3.mp3');
music.play(); 

const songs = 
[{
    id:1,
    songName : `On My Way<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"img/a21.png"
}
]


let pop_song_left = document.getElementById('pop_song_left');
 //let $pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
    pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_art_right.addEventListener('click', ()=>{
    Artist_bx.scrollLeft +=330;
})
pop_song_left.addEventListener('click',()=> {
    Artist_bx.scrollLeft -= 330;
})