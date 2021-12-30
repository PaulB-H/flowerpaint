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

