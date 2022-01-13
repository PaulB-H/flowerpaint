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
// const soundArr = [];

// const cartoonpop = new Audio("./sounds/cartoonpop.mp4");
// soundArr.push(cartoonpop)

// const crow = new Audio("./sounds/crow.mp4");
// soundArr.push(crow)

// const hover = new Audio("./sounds/hover.mp4");
// soundArr.push(hover)

// const pop = new Audio("./sounds/pop.mp4");
// soundArr.push(pop)

// const retrolaser = new Audio("./sounds/retrolaser.mp4");
// soundArr.push(retrolaser)

// const scifiui = new Audio("./sounds/scifiui.mp4");
// soundArr.push(scifiui)

// const synthglide = new Audio("./sounds/synthglide.mp4");
// soundArr.push(synthglide)


// const getRandLoc = () => {
//   const x = Math.floor(Math.random() * canvas.width);
//   const y = Math.floor(Math.random() * canvas.height);
//   return [x, y];
// }

// const placeRandFlower = () => {
//   const randFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];

//   const randXY = getRandLoc();

//   const imageSize = 150;

//   ctx.drawImage(randFlower, randXY[0] - (imageSize / 2), randXY[1] - (imageSize / 2), imageSize, imageSize);

//   stopAllSounds();
//   playRandomSound();
// }

let activeColor = "rainbow";
let flowerSize = 75;

const placeFlower = (e) => {

  let randFlower;

  if (activeColor === "rainbow") {
    randFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];
  } else {
    switch (activeColor) {
      case "blue":
        randFlower = blueflower;
        break;
      case "green":
        randFlower = greenflower;
        break;
      case "orange":
        randFlower = orangeflower;
        break;
      case "pink":
        randFlower = pinkflower;
        break;
      case "purple":
        randFlower = purpleflower;
        break;
      case "red":
        randFlower = redflower;
        break;
      case "yellow":
        randFlower = yellowflower;
        break;
    }
  }

  // This is a hacky solution to make sure I get the right coords
  // since when I started using this function with a touch event
  // the event object structure is different

  let Xloc;
  let Yloc;

  if (e.clientX === undefined) {
    Xloc = e.touches[0].clientX;
    Yloc = e.touches[0].clientY;
  } else {
    Xloc = e.clientX;
    Yloc = e.clientY;
  };

  ctx.drawImage(randFlower, Xloc - (flowerSize / 2), Yloc - (flowerSize / 2), flowerSize, flowerSize);

  // stopAllSounds();
  // playRandomSound();
}

// const toggleRandom = () => {
//   const toggleRandBtn = document.getElementById("toggle-random");

//   if (toggleRandBtn.innerText === "Draw") {
//     canvas.removeEventListener("click", placeRandFlower)
//     canvas.addEventListener("click", placeFlower)

//     toggleRandBtn.innerText = "Random"
//   } else {
//     canvas.removeEventListener("click", placeFlower)
//     canvas.addEventListener("click", placeRandFlower)

//     toggleRandBtn.innerText = "Draw"
//   }
// }

// const stopAllSounds = () => {
//   soundArr.forEach((item) => {
//     item.pause()
//     item.currentTime = 0;
//   })
// }

// const playRandomSound = () => {
//   soundArr[Math.floor(Math.random() * soundArr.length)].play()
// }

// const muteAudio = () => soundArr.forEach((sound) => sound.muted = true);

// const unMuteAudio = () => soundArr.forEach((sound) => sound.muted = false);

// const toggleMute = () => {
//   const muteBtn = document.getElementById("toggle-mute");

//   if (muteBtn.innerText === "Mute") {
//     muteAudio();
//     muteBtn.innerText = "Unmute"
//   } else {
//     unMuteAudio();
//     muteBtn.innerText = "Mute"
//   }

// }

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height)
}

document.getElementById("download-link").addEventListener("click", () => {
  const downloadLink = document.getElementById("download-link");

  const dataURL = canvas.toDataURL();

  downloadLink.href = dataURL;
})

const openClearOverlay = () => {
  document.getElementById("clear-overlay").style.display = "flex";
}

const closeClearOverlay = () => {
  document.getElementById("clear-overlay").style.display = "none";
}

const openColorOverlay = () => {
  document.getElementById("color-overlay").style.display = "flex";
}

const closeColorOverlay = () => {
  document.getElementById("color-overlay").style.display = "none";
}

const openSizeOverlay = () => {
  document.getElementById("size-overlay").style.display = "flex";
}
const closeSizeOverlay = () => {
  document.getElementById("size-overlay").style.display = "none";
}

document.querySelectorAll(".color-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const toggleColor = document.getElementById("toggle-color")
    toggleColor.style.backgroundColor = item.id;

    if (item.id === "rainbow") {
      toggleColor.style.background = "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(252,173,0,1) 15%, rgba(251,255,0,1) 35%, rgba(0,255,26,1) 50%, rgba(0,32,255,1) 66%, rgba(105,17,255,1) 82%, rgba(231,87,255,1) 100%)";
    } else {
      toggleColor.style.background = "";
      toggleColor.style.backgroundColor = item.id;
    }

    activeColor = item.id;

    switch (item.id) {
      case "blue":
      case "green":
      case "purple":
        toggleColor.firstElementChild.style.color = "white"
        break;
      case "orange":
      case "pink":
      case "red":
      case "yellow":
      case "rainbow":
        toggleColor.firstElementChild.style.color = "black"
        break;
    }
  })
})

let drawing = false;
let lastLoc = [0, 0];

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  lastLoc = [e.clientX, e.clientY]
  placeFlower(e);
})

canvas.addEventListener("mouseup", (e) => {
  drawing = false;
})

canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    if (Math.abs(e.clientX - lastLoc[0]) > (flowerSize / 2) || Math.abs(e.clientY - lastLoc[1]) > (flowerSize / 2)) {
      placeFlower(e);
      lastLoc = [e.clientX, e.clientY]
    };
  }
})

canvas.addEventListener("mouseleave", () => drawing = false)

canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  drawing = true;
  lastLoc = [e.touches[0].clientX, e.touches[0].clientY]
  placeFlower(e);
})

canvas.addEventListener("touchend", (e) => {
  drawing = false;
})

canvas.addEventListener("touchmove", (e) => {
  if (drawing) {
    if (Math.abs(e.touches[0].clientX - lastLoc[0]) > (flowerSize / 2) || Math.abs(e.touches[0].clientY - lastLoc[1]) > (flowerSize / 2)) {
      placeFlower(e);
      lastLoc = [e.touches[0].clientX, e.touches[0].clientY]
    };
  }
})


const setFlowerSize = (sizeString) => {
  switch (sizeString) {
    case "small":
      flowerSize = 50;
      break;
    case "medium":
      flowerSize = 75;
      break;
    case "large":
      flowerSize = 100;
      break;
    case "xlarge":
      flowerSize = 150;
      break;
  }
}