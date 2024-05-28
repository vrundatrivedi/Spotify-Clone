console.log("welcome to spotify");
let songIndex = 0;
let masterplay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songname: "jiyo re bahubali",
    filepath: "D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3",
  },
  {
    songname: "tum se",
    filepath: "D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3",
  },
  {
    songname: "o sajani re",
    filepath: " D:\\Dwvlopment\\new\\O-Sajni-Re(PaglaSongs).mp3",
  },
  {
    songname: "haiwaan",
    filepath: " D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3 ",
  },
  {
    songname: "pehale-bhi-main",
    filepath: " D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3 ",
  },
  {
    songname: "dil-roi-jaye",
    filepath: "D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3",
  },
  {
    songname: "tu-jane-na",
    filepath: "D:\\Dwvlopment\\new\\Tum-Se(PaglaSongs).mp3",
  },
];
// songItems.forEach((Element, i) => {
//   console.log(Element, i);
//   Element.getElementsByTagName("img")[0].src = songs[i].filepath;
//   Element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
// });
// songItems.forEach((element, i) => {
//   console.log(`Element at index ${i}:`, element); // Debugging log
//   var img = element.getElementsByTagName("img")[0];
//   var songnameDiv = element.getElementsByClassName("songItem")[0];

//   if (songnameDiv) {
//     img.src = songs[i].filepath;
//     songnameDiv.innerText = songs[i].songnameDiv;
//   } else {
//     console.error(`Could not find img or songname in element at index ${i}`);
//   }
// });

// let audioElement = new Audio('"C:\Users\vrund\Downloads\Pehle Bhi Main Nonstop Jukebox  Best of 2023 Love Songs  Best of Arijit Singh Vishal Mishra Atif.mp3"')
masterplay.addEventListener("click", () => {
  console.log("click");
  if (audioElement.paused) {
    audioElement.play();
    masterplay.classList.remove("fas-fa-play");
    masterplay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fas-fa-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
// console.log("Welcome to Spotify");
// let songIndex = 0;
// let masterplay = document.getElementById("masterPlay");
// let myProgressBar = document.getElementById("myProgressBar");

// masterplay.addEventListener("click", () => {
//   console.log("click");
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//   } else {
//     audioElement.pause();
//   }
// });

// audioElement.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
//   // Update progress bar value here if needed
// });
