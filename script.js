const music = new Audio("audio/1.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: `On My Way <br>
     <div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: `Faded <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: `Cartoon On And On<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: `Mortals<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: `O Re Piya <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: `Beats<br>
     <div class="subtitle">Alan Walker</div>`,
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: `Agar Tum Sath Ho <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: `Sanak <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: `Dilbar<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: `Duniyaa<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: `Lagdi Lahore Di  <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: `Putt Jatt Da <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: `Raatan Lambiyan <br>
     <div class="subtitle">Alan Walker</div>`,
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: `Vaaste<br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: `Lut Gaye <br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/15.jpg",
  },
  {
    id: "16",
    songName: `Meri Zindagi Hai Tu<br>
     <div class="subtitle">Alan Walker</div>`,
    poster: "img/16.jpg",
  },
  {
    id: "17",
    songName: `Zaroori Tha<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/17.jpg",
  },
  {
    id: "18",
    songName: `Pasoori<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/18.jpg",
  },
  {
    id: "19",
    songName: `Insane<br>
     <div class="subtitle">Alan Walker</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "20",
    songName: ` Vande mantram<br>
      <div class="subtitle">Alan Walker</div>`,
    poster: "img/20.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
    wave.classList.remove("active2");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.style.background = "rgb(105, 105, 105, .0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllplays();
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      // console.log(index);
      music.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();

      let songTitles = songs.filter((e) => {
        return e.id == index;
      });

      songTitles.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });

      masterPlay.classList.remove("bi-play-circle-fill");
      masterPlay.classList.add("bi-pause-circle-fill");
      wave.classList.add("active2");
      music.addEventListener("ended", () => {
        masterPlay.classList.add("bi-play-circle-fill");
        masterPlay.classList.remove("bi-pause-circle-fill");
        wave.classList.remove("active2");
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName("songItem"))[
        "${index-1}"
      ].style.background = "rgb(105, 105, 105, .1)";
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);

  // console.log(min1);
  if (sec < 10) {
    sec = `0 ${sec1}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0 ${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressBar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressBar;
  // console.log(seek.value);

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-circle-fill");
  masterPlay.classList.remove("bi-pause-circle-fill");
  wave.classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-off-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");
// let index = 0;
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();

  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((el) => {
    return el.id == index;
  });

  songTitles.forEach((els) => {
    let { songName } = els;
    title.innerHTML = songName;
  });

  makeAllBackground();

  Array.from(document.getElementsByClassName("songItem"))[
    "${index - 1}"
  ].style.background = "rgb(105, 105, 105, .1)";

  makeAllplays();
  document.getElementById("${index}").classList.remove("bi-play-circle-fill");
  document.getElementById("${index}").classList.add("bi-pause-circle-fill");
});

next.addEventListener("click", () => {
  index -= 0;
  index += 1;

  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  // masterPlay.classList.remove("bi-play-circle-fill");
  // masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((ele) => {
    return ele.id == index;
  });

  songTitles.forEach((els) => {
    let { songName } = els;
    title.innerHTML = songName;
  });

  makeAllplays();

  document.getElementById("${index}").classList.remove("bi-play-circle-fill");
  document.getElementById("${index}").classList.add("bi-pause-circle-fill");
  makeAllBackground();

  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

// Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
//   e.getElementsByTagName("img")[0].src = Songs[i].poster;
//   e.getElementsByTagName("h5")[0].innerHTML = Songs[i].songName;
// });

// // Master Play Buttons

// let masterPlay = document.getElementById("masterPlay");
// // let wave = document.getElementById("wave");

// masterPlay.addEventListener("click", () => {
//   if (music.paused || music.currentTime <= 0) {
//     music.play();
//     masterPlay.classList.remove("bi-play-circle-fill");
//     masterPlay.classList.add("bi-pause-circle-fill");
//     // wave.classList.add("active1");
//   } else {
//     music.pause();
//     masterPlay.classList.add("bi-play-circle-fill");
//     masterPlay.classList.remove("bi-pause-circle-fill");
//     // wave.classList.remove("active1");
//   }
// });

// const makeAllplays = () => {
//   Array.from(document.getElementsByClassName("playListPlay")).forEach((ele) => {
//     ele.classList.add("bi-play-circle-fill");
//     ele.classList.remove("bi-pause-circle-fill");
//   });
// };

// const makeAllBackground = () => {
//   Array.from(document.getElementsByClassName("songItem")).forEach((ele) => {
//     ele.style.background = "rgb(105, 105, 105, .0)";
//   });
// };

// let index = 0;
// let poster_master_play = document.getElementById("poster_master_play");
// let title = document.getElementById("title");

// Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
//   e.addEventListener("click", (el) => {
//     index = el.target.id;
//     // console.log(abc);
//     music.src = `audio/${index}.mp3`;
//     poster_master_play.src = `img/${index}.jpg`;
//     music.play();
//     masterPlay.classList.remove("bi-play-circle-fill");
//     masterPlay.classList.add("bi-pause-circle-fill");

//     let songTitles = Songs.filter((els) => {
//       return els.id == index;
//     });
//     songTitles.forEach((elss) => {
//       let { songName } = elss;
//       title.innerHTML = songName;
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName("songItem"))[
//       index - 1
//     ].style.background = "rgb(105, 105, 105, .1)'";
//     makeAllplays();
//     el.target.classList.remove("bi-play-circle-fill");
//     el.target.classList.add("bi-pause-circle-fill");
//     wave.classList.add("active1");
//   });
// });

// let currentStart = document.getElementById("currentStart");
// let currentEnd = document.getElementById("currentEnd");
// let seek = document.getElementById("seek");
// let bar2 = document.getElementById("bar2");
// let dot = document.getElementsByClassName("dot")[0];

// music.addEventListener("timeupdate", () => {
//   let music_curr = music.currentTime;
//   let music_dur = music.duration;

//   let min1 = Math.floor(music_dur / 60);
//   let sec1 = Math.floor(music_dur % 60);

//   // console.log(min1);
//   if (sec1 < 10) {
//     sec1 = `0 ${sec1}`;
//   }
//   currentEnd.innerText = `${min1}:${sec1}`;

//   let min2 = Math.floor(music_curr / 60);
//   let sec2 = Math.floor(music_curr % 60);
//   if (sec2 < 10) {
//     sec2 = `0 ${sec2}`;
//   }
//   currentStart.innerText = `${min2}:${sec2}`;

//   let progressBar = parseInt((music_curr / music_dur) * 100);
//   seek.value = progressBar;
//   // console.log(seek.value);

//   let seekbar = seek.value;
//   bar2.style.width = `${seekbar}%`;
//   dot.style.left = `${seekbar}%`;
// });

// seek.addEventListener("change", () => {
//   music.currentTime = (seek.value * music.duration) / 100;
// });

// let vol_icon = document.getElementById("vol_icon");
// let vol = document.getElementById("vol");
// let vol_bar = document.getElementsByClassName("vol_bar")[0];
// let vol_dot = document.getElementById("vol_dot");

// vol.addEventListener("change", () => {
//   if (vol.value == 0) {
//     vol_icon.classList.remove("bi-volume-up-fill");
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.add("bi-volume-off-fill");
//   }
//   if (vol.value > 0) {
//     vol_icon.classList.remove("bi-volume-up-fill");
//     vol_icon.classList.add("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-off-fill");
//   }
//   if (vol.value > 50) {
//     vol_icon.classList.add("bi-volume-up-fill");
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-off-fill");
//   }

//   let vol_a = vol.value;
//   vol_bar.style.width = `${vol_a}%`;
//   vol_dot.style.left = `${vol_a}%`;
//   music.volume = vol_a / 100;
// });

// let back = document.getElementById("back");
// let next = document.getElementById("next");

// back.addEventListener("click", () => {
//   index -= 1;
//   if (index < 1) {
//     index = Array.from(document.getElementsByClassName("songItem")).length;
//   }
//   music.src = `audio/${index}.mp3`;
//   poster_master_play.src = `img/${index}.jpg`;
//   music.play();
//   masterPlay.classList.remove("bi-play-circle-fill");
//   masterPlay.classList.add("bi-pause-circle-fill");

//   let songTitles = Songs.filter((el) => {
//     return el.id == index;
//   });

//   songTitles.forEach((els) => {
//     let { songName } = els;
//     title.innerHTML = songName;
//   });

//   makeAllBackground();
//   Array.from(document.getElementsByClassName("songItem"))[
//     index - 1
//   ].style.background = "rgb(105, 105, 105, .1)";
//   makeAllplays();
//   ele.target.classList.remove("bi-play-circle-fill");
//   ele.target.classList.add("bi-pause-circle-fill");
// });

// next.addEventListener("click", () => {
//   index++;
//   if (index > Array.from(document.getElementsByClassName("songItem")).length) {
//     index = 1;
//   }
//   music.src = `audio/${index}.mp3`;
//   poster_master_play.src = `img/${index}.jpg`;
//   music.play();
//   masterPlay.classList.remove("bi-play-circle-fill");
//   masterPlay.classList.add("bi-pause-circle-fill");

//   let songTitles = Songs.filter((el) => {
//     return el.id == index;
//   });

//   songTitles.forEach((els) => {
//     let { songName } = els;
//     title.innerHTML = songName;
//   });

//   makeAllBackground();
//   Array.from(document.getElementsByClassName("songItem"))[
//     index - 1
//   ].style.background = "rgb(105, 105, 105, .1)";
//   makeAllplays();
//   ele.target.classList.remove("bi-play-circle-fill");
//   ele.target.classList.add("bi-pause-circle-fill");
// });

// // index++;
// // // console.log(index);

// let Pop_song_left = document.getElementById("Pop_song_left");
// let Pop_song_right = document.getElementById("Pop_song_right");
// let Pop_song = document.getElementsByClassName("Pop_song")[0];

// Pop_song_right.addEventListener("click", () => {
//   Pop_song.scrollLeft += 330;
// });

// Pop_song_left.addEventListener("click", () => {
//   Pop_song.scrollLeft -= 330;
// });

// let Pop_art_left = document.getElementById("Pop_art_left");
// let Pop_art_right = document.getElementById("Pop_art_right");
// let item = document.getElementsByClassName("item")[0];

// Pop_art_right.addEventListener("click", () => {
//   item.scrollLeft += 330;
// });

// Pop_art_left.addEventListener("click", () => {
//   item.scrollLeft -= 330;
// });
