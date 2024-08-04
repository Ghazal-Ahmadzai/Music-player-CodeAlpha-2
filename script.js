const music = new Audio('vande.mp3');
let progressBar = document.querySelector('.bar2');
let progressDot = document.querySelector('.dot');
let volumeBar = document.querySelector('.vol .vol_bar');
let volumeDot = document.querySelector('.vol .dot');
let progressInput = document.querySelector('.bar input');
let volumeInput = document.querySelector('.vol input');




const songs = [
    {
        id: '1',
        songName: 'Tere Hawaale <br> <div class="Subtitle">Arijit Singh</div>',
        poster: "images/1.jpg"
    },
    {
        id: '2',
        songName: 'SADQAY <br> <div class="Subtitle">Ashir Wajahat x Nayel x Nehaal</div>',
        poster: "images/2.jpg"
    },

    {
        id: '3',
        songName: 'Janiye <br> <div class="Subtitle">Vishal Mishra,  Rashmeet Kaur</div>',
        poster: "images/3.jpg"
    },

    {
        id: '4',
        songName: 'Ve Kamleya <br> <div class="Subtitle">Arijit Singh, Shreya Ghoshal</div>',
        poster: "images/4.jpg"
    },

    {
        id: '5',
        songName: 'Maula Mere Maula <br> <div class="Subtitle">Roopkumar Rathod</div>',
        poster: "images/5.jpg"
    },

    {
        id: '6',
        songName: 'Gule Suri <br> <div class="Subtitle">Farhad Darya</div>',
        poster: 'images/6.jpg'
    },

    {
        id: '7',
        songName: 'Roze Sefid <br> <div class="Subtitle">Haamim</div>',
        poster: 'images/7.jpg'
    },
    {
        id: '8',
        songName: 'O Bedardeya <br> <div class="Subtitle">Arijit Singh</div>',
        poster: 'images/8.jpg'
    },
    {
        id: '9',
        songName: 'Rabba Janda <br> <div class="Subtitle">Jubin Nautiyal</div>',
        poster: 'images/9.jpg'
    },
    {
        id: '10',
        songName: 'Escapism <br> <div class="Subtitle">RAYE</div>',
        poster: 'images/10.jpg'
    },

    {
        id: '11',
        songName: 'Thoda Pyaar <br> <div class="Subtitle">Kumaar, Nilesh </div>',
        poster: 'images/11.jpg'
    },

    {
        id: '12',
        songName: 'Humnava Mere <br> <div class="Subtitle">Jubin Nautiyal</div>',
        poster: 'images/12.jpg'
    },
    
    {
        id: '13',
        songName: 'Zabanam Lal <br> <div class="Subtitle">Kasra Zahedi</div>',
        poster: 'images/13.jpg'
    },

    {
        id: '14',
        songName: 'Jaan Ban Gaye<br> <div class="Subtitle"> Vishal Mishra </div>',
        poster: 'images/14.jpg'
    },
    
    {
        id: '15',
        songName: 'Ishq Hua Hi Hua <br> <div class="Subtitle">Shreya Ghoshal </div>',
        poster: 'images/15.jpg'
    },
    
    
    {
        id: '16',
        songName: 'Kona Zariko <br> <div class="Subtitle">Farhad Darya </div>',
        poster: 'images/16.jpg'
    }
    
]




Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
        <img src="${poster}" alt="">
        <div class="content">
            ${songName}
        </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let item = search_result.getElementsByTagName('a');

    for (let i = 0; i < item.length; i++) {
        let content = item[i].getElementsByClassName('content')[0];
        let text_value = content.textContent || content.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }

        if (input.value == 0 ) {
            search_result.style.display ="none";

        } else {
            search_result.style.display ="";

        }
    }
});



sterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    });
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgba(0, 0, 0, 0)";
        element.classList.remove('bi-pause-circle-fill');
    });
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('PlayListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = e.target.id;
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => ele.id == index);

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        });

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "#c4a876";
    })
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }

    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = (music.currentTime / music.duration) * 100;
    seek.value = progressbar;
    bar2.style.width = `${progressbar}%`;
    dot.style.left = `${progressbar}%`;
});


seek.addEventListener('input', (e) => {
    let seekTo = music.duration * (e.target.value / 100);
    music.currentTime = seekTo;
});


const barContainer = document.querySelector('.bar');
barContainer.addEventListener('click', (e) => {
    const rect = barContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const totalWidth = rect.width;
    const clickPositionPercentage = (offsetX / totalWidth) * 100;

    seek.value = clickPositionPercentage;
    let seekTo = music.duration * (clickPositionPercentage / 100);
    music.currentTime = seekTo;
});


music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    let vol_a = vol.value;

    if (vol_a == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }

    if (vol_a > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }

    if (vol_a > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' ,()=>{
    index -= 1
    if(index <1) {
        index= Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => ele.id == index);

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        });

        makeAllPlays()
        document.getElementById (`$(index)`).classList.remove('bi-play-fill');
        document.getElementById (`$(index)`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "#c4a876";
})
next.addEventListener('click' ,()=>{
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1; 

    }

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => ele.id == index);

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        });

        makeAllPlays()
        document.getElementById (`$(index)`).classList.remove('bi-play-fill');
        document.getElementById (`$(index)`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "#c4a876";
})


let left_scroll = document.getElementById('left-scroll')
let right_scroll = document.getElementById('right-scroll')
let pop_song = document.getElementsByClassName('pop_song')[0]


left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left-scrolls')
let right_scrolls = document.getElementById('right-scrolls')
let item = document.getElementsByClassName('item')[0]


left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})




 
    

