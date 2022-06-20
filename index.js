const drum = document.querySelectorAll(".drum");

console.log(drum);

const play = drum.forEach((item) => {
  item.addEventListener("click", () => {
    const val = item.classList.value[0];
    Play(val);
    buttonAnimation(val);
  });
});

window.addEventListener("keypress", function (item) {
  console.log(item.key);
  Play(item.key);
  buttonAnimation(item.key);
});

function Play(val) {
  let audio;
  switch (val) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
  }
}

function buttonAnimation(val) {
  const activeButton = document.querySelector("." + val);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
