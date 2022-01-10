console.log("Hello world");

// Setup canvas / context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grass = document.createElement("img");
grass.src = "./images/grass.png";
grass.onload = () => {
  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height)
}

// Making flowers
const flowerArr = [];

const blueflower = document.createElement("img");
blueflower.src = "./images/blue.png";
flowerArr.push(blueflower)

const greenflower = document.createElement("img");
greenflower.src = "./images/green.png";
flowerArr.push(greenflower)

const orangeflower = document.createElement("img");
orangeflower.src = "./images/orange.png";
flowerArr.push(orangeflower)

const pinkflower = document.createElement("img");
pinkflower.src = "./images/pink.png";
flowerArr.push(pinkflower)

const purpleflower = document.createElement("img");
purpleflower.src = "./images/purple.png";
flowerArr.push(purpleflower)

const redflower = document.createElement("img");
redflower.src = "./images/red.png";
flowerArr.push(redflower)

const yellowflower = document.createElement("img");
yellowflower.src = "./images/yellow.png";
flowerArr.push(yellowflower)


// Making sounds
const soundArr = [];

const cartoonpop = new Audio("./sounds/cartoonpop.mp4");
soundArr.push(cartoonpop)

const crow = new Audio("./sounds/crow.mp4");
soundArr.push(crow)

const hover = new Audio("./sounds/hover.mp4");
soundArr.push(hover)

const pop = new Audio("./sounds/pop.mp4");
soundArr.push(pop)

const retrolaser = new Audio("./sounds/retrolaser.mp4");
soundArr.push(retrolaser)

const scifiui = new Audio("./sounds/scifiui.mp4");
soundArr.push(scifiui)

const synthglide = new Audio("./sounds/synthglide.mp4");
soundArr.push(synthglide)


const getRandLoc = () => {
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  return [x, y];
}

const placeRandFlower = () => {
  const randFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];

  const randXY = getRandLoc();

  const imageSize = 150;

  ctx.drawImage(randFlower, randXY[0] - (imageSize / 2), randXY[1] - (imageSize / 2), imageSize, imageSize);

  stopAllSounds();
  playRandomSound();
}

const placeFlower = (e) => {
  const randFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];

  const imageSize = 150;

  ctx.drawImage(randFlower, e.clientX - (imageSize / 2), e.clientY - (imageSize / 2), imageSize, imageSize);

  stopAllSounds();
  playRandomSound();
}

const toggleRandom = () => {
  const toggleRandBtn = document.getElementById("toggle-random");

  if (toggleRandBtn.innerText === "Draw") {
    canvas.removeEventListener("click", placeRandFlower)
    canvas.addEventListener("click", placeFlower)

    toggleRandBtn.innerText = "Random"
  } else {
    canvas.removeEventListener("click", placeFlower)
    canvas.addEventListener("click", placeRandFlower)

    toggleRandBtn.innerText = "Draw"
  }
}

canvas.addEventListener("click", placeFlower)

const stopAllSounds = () => {
  soundArr.forEach((item) => {
    item.pause()
    item.currentTime = 0;
  })
}

const playRandomSound = () => {
  soundArr[Math.floor(Math.random() * soundArr.length)].play()
}

const muteAudio = () => soundArr.forEach((sound) => sound.muted = true);

const unMuteAudio = () => soundArr.forEach((sound) => sound.muted = false);

const toggleMute = () => {
  const muteBtn = document.getElementById("toggle-mute");

  if (muteBtn.innerText === "Mute") {
    muteAudio();
    muteBtn.innerText = "Unmute"
  } else {
    unMuteAudio();
    muteBtn.innerText = "Mute"
  }

}

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height)
}

document.getElementById("download-link").addEventListener("click", () => {
  const downloadLink = document.getElementById("download-link");

  const dataURL = canvas.toDataURL();

  downloadLink.href = dataURL;
})