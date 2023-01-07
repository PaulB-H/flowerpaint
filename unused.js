// Currently unused, may re-add in future

/**/
//// Random Sounds
/**/

// Making sounds
const soundArr = [];

const cartoonpop = new Audio("./sounds/cartoonpop.mp4");
soundArr.push(cartoonpop);

const crow = new Audio("./sounds/crow.mp4");
soundArr.push(crow);

const hover = new Audio("./sounds/hover.mp4");
soundArr.push(hover);

const pop = new Audio("./sounds/pop.mp4");
soundArr.push(pop);

const retrolaser = new Audio("./sounds/retrolaser.mp4");
soundArr.push(retrolaser);

const scifiui = new Audio("./sounds/scifiui.mp4");
soundArr.push(scifiui);

const synthglide = new Audio("./sounds/synthglide.mp4");
soundArr.push(synthglide);

const stopAllSounds = () => {
  soundArr.forEach((item) => {
    item.pause();
    item.currentTime = 0;
  });
};

const playRandomSound = () => {
  soundArr[Math.floor(Math.random() * soundArr.length)].play();
};

const muteAudio = () => soundArr.forEach((sound) => (sound.muted = true));

const unMuteAudio = () => soundArr.forEach((sound) => (sound.muted = false));

const toggleMute = () => {
  const muteBtn = document.getElementById("toggle-mute");

  if (muteBtn.innerText === "Mute") {
    muteAudio();
    muteBtn.innerText = "Unmute";
  } else {
    unMuteAudio();
    muteBtn.innerText = "Mute";
  }
};

/**/
//// Random Flower Mode
/**/

const toggleRandom = () => {
  const toggleRandBtn = document.getElementById("toggle-random");

  if (toggleRandBtn.innerText === "Draw") {
    canvas.removeEventListener("click", placeRandFlower);
    canvas.addEventListener("click", placeFlower);

    toggleRandBtn.innerText = "Random";
  } else {
    canvas.removeEventListener("click", placeFlower);
    canvas.addEventListener("click", placeRandFlower);

    toggleRandBtn.innerText = "Draw";
  }
};

const getRandLoc = () => {
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  return [x, y];
};
const placeRandFlower = () => {
  const randFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];

  const randXY = getRandLoc();

  const imageSize = 150;

  ctx.drawImage(
    randFlower,
    randXY[0] - imageSize / 2,
    randXY[1] - imageSize / 2,
    imageSize,
    imageSize
  );

  stopAllSounds();
  playRandomSound();
};
