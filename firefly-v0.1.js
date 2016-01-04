function firefly(id, num, sz, color) {
  var canvas = document.createElement('canvas');
  div = document.getElementById(id);
  div.style.position = "relative";
  console.log(id);
  console.log(div);
  canvas.id = "fireflyLayer";
  canvas.height = div.offsetHeight;
  canvas.width = div.offsetWidth;
  var h = canvas.height;
  var w = canvas.width;
  canvas.style.position = "absolute";
  canvas.style.zIndex = 100;
  canvas.style.left = "0";
  canvas.style.top = "0";
  div.appendChild(canvas);
  draw(num, sz, color, h, w);
}

function draw(num, sz, color, h, w) {
  var mainCanvas = document.getElementById("fireflyLayer");
  var mainContext = mainCanvas.getContext('2d');
  var circles = [];

  var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  function Circle(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = .05 + Math.random() * .8;

    this.counter = 0;

    var signHelper = Math.floor(Math.random() * 2);

    if (signHelper == 1) {
      this.sign = -1;
    } else {
      this.sign = 1;
    }
  }

  Circle.prototype.update = function() {
    this.counter += this.sign * this.speed;

    mainContext.beginPath();

    mainContext.arc(this.xPos + Math.cos(this.counter / w) * this.radius,
      this.yPos + Math.sin(this.counter / h) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false);

    mainContext.closePath();

    var hex = color.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
    // mainContext.fillStyle = 'rgba(0, 0, 0, ' + this.opacity + ')';
    mainContext.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + this.opacity + ')';
    mainContext.fill();
  };

  var szNum;
  if (sz == "big") { szNum = 10; }
    else if (sz == "medium") { szNum = 5; }
    else if (sz == "small") { szNum = 3; }
    else if (sz == "tiny") { szNum = 1; }
    else { szNum = 5; }

  function drawCircles() {
    for (var i = 0; i < num; i++) {
      var randomX = Math.round(Math.random() * w);
      var randomY = Math.round(Math.random() * h);
      var speed = .2 + Math.random() * 3;
      var size = Math.random() * szNum;

      var circle = new Circle(100, speed, size, randomX, randomY);
      circles.push(circle);
    }
    draw();
  }
  drawCircles();

  function draw() {
    mainContext.clearRect(0, 0, w, h);

    for (var i = 0; i < circles.length; i++) {
      var myCircle = circles[i];
      myCircle.update();
    }
    requestAnimationFrame(draw);
  }
};