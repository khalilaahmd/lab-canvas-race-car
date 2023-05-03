
const img1 = new Image();
img1.src = '/images/road.png' ;

const img2 = new Image();
img2.src = '/images/car.png';

  const backgroundCanvas = document.getElementById('canvas');
  const ctx = backgroundCanvas.getContext('2d');

const backgroundImage = {
  img: img1,
  x: 0,
  y: 0,
  speed: -1,
  move: function () {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },
  draw: function() {
    ctx.drawImage(this.img2, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img2, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img2, 0,this.y - backgroundCanvas.height);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}


const myGameArea = {
  canvas: document.createElement('canvas'),
  road: document.createElement('img').img1,
  player: document.createElement('img').img2,

  start: function() {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.road = img1;
    this.player = img2;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 60);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  playerPrint: function () {
    document.getElementById('canvas').getContext('2d').drawImage(player, xPlayer, 580, 40, 80);
  }
};

function updateGameArea() {
    myGameArea.clear();
    // player.newPos();
    // player.update();
  }

  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      myGameArea.start();
    };
  }

  class Component {
    constructor(width, height, road, player, x, y) {
      this.width = width;
      this.height = height;
      this.road = road;
      this.player = player;
      this.x = x;
      this.y = y;
      }
      update () {
        const ctx = myGameArea.context;
        ctx.fillProperties = this.player, this.road;
        ctx.fillRect (this.x, this.y, this.width, this.height);
      }
      newPos () {
        this.x += this.speedX;
        this.y += this.speedY;
      };
    }

    const xPlayer = new Component(30, 30, this.road, this.player, 0, 110)