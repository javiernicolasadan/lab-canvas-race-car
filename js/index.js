const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";

const ctx = canvas.getContext("2d")

const startScreen = document.querySelector(".game.intro");

let carX = 175
let carY = 475
let isMovingLeft = false
let isMovingRight = false

let road = new Image();
road.onload = function() {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
};
road.src = "images/road.png"


let car = new Image(); 
car.onload = function() {
  ctx.drawImage(car, carX, carY, canvas.width/4, canvas.height/4);
};
car.src = "images/car.png"

document.addEventListener("keydown", event => {
  console.log(event)
  if (event.key ==="a" || event.key ==="A") {
      isMovingLeft = true
  }
  if (event.key ==="d" || event.key ==="D") {
      isMovingRight = false    
  }

})

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, 0, 0, canvas.width, canvas.height);
 

 requestAnimationFrame(animate);
  
}






window.onload = () => {
  canvas.style.display = "none";

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("start game");
    
    canvas.style.display = "block";
  }
};




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
