console.log("Hello world");

// Setup canvas / context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grass = document.createElement("img");
grass.src = "./images/grass.png";
grass.onload = () => {
  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height);
};

// Making flowers
const flowerArr = [];

const blueflower = document.createElement("img");
blueflower.src = "./images/blue.png";
flowerArr.push(blueflower);

const greenflower = document.createElement("img");
greenflower.src = "./images/green.png";
flowerArr.push(greenflower);

const orangeflower = document.createElement("img");
orangeflower.src = "./images/orange.png";
flowerArr.push(orangeflower);

const pinkflower = document.createElement("img");
pinkflower.src = "./images/pink.png";
flowerArr.push(pinkflower);

const purpleflower = document.createElement("img");
purpleflower.src = "./images/purple.png";
flowerArr.push(purpleflower);

const redflower = document.createElement("img");
redflower.src = "./images/red.png";
flowerArr.push(redflower);

const yellowflower = document.createElement("img");
yellowflower.src = "./images/yellow.png";
flowerArr.push(yellowflower);

console.log(flowerArr["blueflower"]);

let activeColor = "rainbow";
let flowerSize = 75;

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
};

const placeFlower = (e) => {
  let eventType;
  switch (e.type) {
    case "mousedown":
    case "mousemove":
    case "mouseup":
      eventType = "mouse";
      break;
    case "touchstart":
    case "touchmove":
    case "touchend":
      eventType = "touch";
      break;
  }

  let newFlower;
  if (activeColor === "rainbow") {
    newFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];
  } else {
    switch (activeColor) {
      case "blue":
        newFlower = blueflower;
        break;
      case "green":
        newFlower = greenflower;
        break;
      case "orange":
        newFlower = orangeflower;
        break;
      case "pink":
        newFlower = pinkflower;
        break;
      case "purple":
        newFlower = purpleflower;
        break;
      case "red":
        newFlower = redflower;
        break;
      case "yellow":
        newFlower = yellowflower;
        break;
    }
  }

  let Xloc;
  let Yloc;
  if (eventType === "mouse") {
    Xloc = e.clientX;
    Yloc = e.clientY;
  } else if (eventType === "touch") {
    Xloc = e.touches[0].clientX;
    Yloc = e.touches[0].clientY;
  }

  ctx.drawImage(
    newFlower,
    Xloc - flowerSize / 2,
    Yloc - flowerSize / 2,
    flowerSize,
    flowerSize
  );
};

const drawTouchFlower = (x, y) => {
  let newFlower;
  if (activeColor === "rainbow") {
    newFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];
  } else {
    switch (activeColor) {
      case "blue":
        newFlower = blueflower;
        break;
      case "green":
        newFlower = greenflower;
        break;
      case "orange":
        newFlower = orangeflower;
        break;
      case "pink":
        newFlower = pinkflower;
        break;
      case "purple":
        newFlower = purpleflower;
        break;
      case "red":
        newFlower = redflower;
        break;
      case "yellow":
        newFlower = yellowflower;
        break;
    }
  }

  ctx.drawImage(
    newFlower,
    x - flowerSize / 2,
    y - flowerSize / 2,
    flowerSize,
    flowerSize
  );
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height);
};

document.getElementById("download-link").addEventListener("click", () => {
  const downloadLink = document.getElementById("download-link");
  const downloadBtn = document.getElementById("download-btn");

  downloadBtn.setAttribute("disabled", true);
  setTimeout(() => {
    downloadBtn.removeAttribute("disabled");
  }, 1500);

  const dataURL = canvas.toDataURL();

  downloadLink.href = dataURL;
});

const openClearOverlay = () =>
  (document.getElementById("clear-overlay").style.display = "flex");
const closeClearOverlay = () =>
  (document.getElementById("clear-overlay").style.display = "none");

const openColorOverlay = () =>
  (document.getElementById("color-overlay").style.display = "flex");
const closeColorOverlay = () =>
  (document.getElementById("color-overlay").style.display = "none");

const openSizeOverlay = () =>
  (document.getElementById("size-overlay").style.display = "flex");
const closeSizeOverlay = () =>
  (document.getElementById("size-overlay").style.display = "none");

document.querySelectorAll(".color-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const colorBtn = document.getElementById("color-btn");
    colorBtn.style.backgroundColor = item.id;

    if (item.id === "rainbow") {
      colorBtn.style.background =
        "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(252,173,0,1) 15%, rgba(251,255,0,1) 35%, rgba(0,255,26,1) 50%, rgba(0,32,255,1) 66%, rgba(105,17,255,1) 82%, rgba(231,87,255,1) 100%)";
    } else {
      colorBtn.style.background = "";
      colorBtn.style.backgroundColor = item.id;
    }

    activeColor = item.id;

    switch (item.id) {
      case "blue":
      case "green":
      case "purple":
        colorBtn.firstElementChild.style.color = "white";
        break;
      case "orange":
      case "pink":
      case "red":
      case "yellow":
      case "rainbow":
        colorBtn.firstElementChild.style.color = "black";
        break;
    }
  });
});

let drawing = false;
let lastLoc = [0, 0];

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  lastLoc = [e.clientX, e.clientY];
  placeFlower(e);
});

canvas.addEventListener("mouseup", () => (drawing = false));

canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    if (
      Math.abs(e.clientX - lastLoc[0]) > flowerSize / 2 ||
      Math.abs(e.clientY - lastLoc[1]) > flowerSize / 2
    ) {
      placeFlower(e);
      lastLoc = [e.clientX, e.clientY];
    }
  }
});

// canvas.addEventListener("mouseleave", () => drawing = false);

/*
  Each touch event includes event.touches, which is a 
  a list of all the active touch events and positions
  Each touch itself has a touch.identifier property which
  we use to keep track of them on our own object, "touches"

  Flowers are still only drawn if the total distance between the 
  touchmove points is greater than half the size of a flower
*/

const touches = {};

canvas.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    const touchesList = event.touches;

    for (let i = 0; i < touchesList.length; i++) {
      const touch = touchesList[i];
      drawTouchFlower(touch.clientX, touch.clientY);

      // Add the touch to the touches object
      touches[touch.identifier] = {
        x: touch.clientX,
        y: touch.clientY,
        lastFlower: {
          x: touch.clientX,
          y: touch.clientY,
        },
      };
    }
  },
  false
);

canvas.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
    const touchesList = event.touches;

    for (let i = 0; i < touchesList.length; i++) {
      const touch = touchesList[i];

      let totalDistance = 0;
      totalDistance += Math.abs(
        touches[touch.identifier].lastFlower.x - touch.clientX
      );
      totalDistance += Math.abs(
        touches[touch.identifier].lastFlower.y - touch.clientY
      );

      if (totalDistance >= flowerSize / 2) {
        drawTouchFlower(touch.clientX, touch.clientY);

        // If we draw, update the lastFlower position for this touch
        touches[touch.identifier].lastFlower.x = touch.clientX;
        touches[touch.identifier].lastFlower.y = touch.clientY;
      }

      // Update the position of the touch in the touches object
      Object.assign(touches[touch.identifier], {
        x: touch.clientX,
        y: touch.clientY,
      });
    }
  },
  false
);

canvas.addEventListener(
  "touchend",
  (event) => {
    event.preventDefault();
    const touchesList = event.changedTouches;

    for (let i = 0; i < touchesList.length; i++) {
      const touch = touchesList[i];
      // Remove the touch from the touches object
      delete touches[touch.identifier];
    }
  },
  false
);
