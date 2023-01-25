// console.log("Hello FlowerPaint");

// Setup canvas / context
// const canvas = <HTMLCanvasElement> document.getElementById("canvas");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grass = document.createElement("img") as HTMLImageElement;
grass.src = "./images/grass.png";
grass.onload = (): void => {
  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height);
};

// Making flowers
const flowerArr: HTMLImageElement[] = [];

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

let activeColor:
  | "rainbow"
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow" = "rainbow";
let flowerSize: number = 75;

const setFlowerSize = (
  sizeString: "small" | "medium" | "large" | "xlarge"
): void => {
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
    default:
      break;
  }
};

const placeFlower = (clientX: number, clientY: number): void => {
  let newFlower: HTMLImageElement;

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
      default:
        newFlower = flowerArr[Math.floor(Math.random() * flowerArr.length)];
    }
  }

  ctx.drawImage(
    newFlower,
    clientX - flowerSize / 2,
    clientY - flowerSize / 2,
    flowerSize,
    flowerSize
  );
};

const clearCanvas = (): void => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(grass, 0, 0, canvas.width, canvas.height);
};

const downloadLink = document.getElementById(
  "download-link"
) as HTMLLinkElement;

downloadLink.addEventListener("click", (): void => {
  const downloadLink = document.getElementById(
    "download-link"
  ) as HTMLLinkElement;
  const downloadBtn = document.getElementById(
    "download-btn"
  ) as HTMLButtonElement;

  downloadBtn.setAttribute("disabled", "true");
  setTimeout((): void => {
    downloadBtn.removeAttribute("disabled");
  }, 1500);

  const dataURL: string = canvas.toDataURL();

  downloadLink.href = dataURL;
});

const clearOverlay = document.getElementById("clear-overlay") as HTMLElement;
const openClearOverlay = (): void => {
  clearOverlay.style.display = "flex";
};
const closeClearOverlay = (): void => {
  clearOverlay.style.display = "none";
};

const colorOverlay = document.getElementById("color-overlay") as HTMLElement;
const openColorOverlay = (): void => {
  colorOverlay.style.display = "flex";
};
const closeColorOverlay = (): void => {
  colorOverlay.style.display = "none";
};

const sizeOverlay = document.getElementById("size-overlay") as HTMLElement;
const openSizeOverlay = (): void => {
  sizeOverlay.style.display = "flex";
};
const closeSizeOverlay = (): void => {
  sizeOverlay.style.display = "none";
};

document.querySelectorAll(".color-btn").forEach((elem: Element): void => {
  elem.addEventListener("click", (): void => {
    const colorBtn = document.getElementById("color-btn") as HTMLButtonElement;
    const colorBtnFirstElChild =
      colorBtn.firstElementChild as HTMLParagraphElement;

    colorBtn.style.backgroundColor = elem.id;

    if (elem.id === "rainbow") {
      colorBtn.style.background =
        "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(252,173,0,1) 15%, rgba(251,255,0,1) 35%, rgba(0,255,26,1) 50%, rgba(0,32,255,1) 66%, rgba(105,17,255,1) 82%, rgba(231,87,255,1) 100%)";
    } else {
      colorBtn.style.background = "";
      colorBtn.style.backgroundColor = elem.id;
    }

    // We know elem.id *should* contain only a valid string,
    // but it *could* contain any.. so we need <any> here..
    activeColor = <any>elem.id;

    switch (elem.id) {
      case "blue":
      case "green":
      case "purple":
        colorBtnFirstElChild.style.color = "white";
        break;
      case "orange":
      case "pink":
      case "red":
      case "yellow":
      case "rainbow":
        colorBtnFirstElChild.style.color = "black";
        break;
      default:
        break;
    }
  });
});

let drawing = false;
let lastLoc: [number, number] = [0, 0];

canvas.addEventListener("mousedown", (event: MouseEvent): void => {
  drawing = true;
  lastLoc = [event.clientX, event.clientY];
  placeFlower(event.clientX, event.clientY);
});

canvas.addEventListener("mouseup", (): void => {
  drawing = false;
});

canvas.addEventListener("mousemove", (event: MouseEvent) => {
  if (drawing) {
    if (
      Math.abs(event.clientX - lastLoc[0]) > flowerSize / 2 ||
      Math.abs(event.clientY - lastLoc[1]) > flowerSize / 2
    ) {
      placeFlower(event.clientX, event.clientY);
      lastLoc = [event.clientX, event.clientY];
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

interface Touches {
  [key: number]: TouchLoc;
}

interface TouchLoc {
  x: number;
  y: number;
  lastFlower: {
    x: number;
    y: number;
  };
}

const touches: Touches = {};

canvas.addEventListener(
  "touchstart",
  (event: TouchEvent) => {
    event.preventDefault();
    const touchList: TouchList = event.touches;

    for (let i = 0; i < touchList.length; i++) {
      const touch: Touch = touchList[i];
      placeFlower(touch.clientX, touch.clientY);

      // Add the touch to the touches object
      touches[touch.identifier] = <TouchLoc>{
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
  (event: TouchEvent) => {
    event.preventDefault();
    const touchList: TouchList = event.touches;

    for (let i = 0; i < touchList.length; i++) {
      const touch: Touch = touchList[i];

      let totalDistance = 0;
      totalDistance += Math.abs(
        touches[touch.identifier].lastFlower.x - touch.clientX
      );
      totalDistance += Math.abs(
        touches[touch.identifier].lastFlower.y - touch.clientY
      );

      if (totalDistance >= flowerSize / 2) {
        placeFlower(touch.clientX, touch.clientY);

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
  (event: TouchEvent) => {
    event.preventDefault();
    const touchList: TouchList = event.changedTouches;

    for (let i = 0; i < touchList.length; i++) {
      const touch: Touch = touchList[i];

      // Remove the touch from the touches object
      delete touches[touch.identifier];
    }
  },
  false
);
