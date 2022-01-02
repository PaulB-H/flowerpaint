console.log("Hello world");

// Setup canvas / context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

