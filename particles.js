// random function
function rand(max, min, _int) {
  var max = (max === 0 || max) ? max : 1; 
  var min = min || 0; 
  var gen = min + (max - min) * Math.random();

  return (_int) ? Math.round(gen) : gen;
}

// function that create the particle object
function Particle(i) {
  this.id = i;
  this.hue = rand(50, 0, 1);
  this.active = false;
}

Particle.prototype.reset = function() {
  this.active = (this.r > .05);
};

Particle.prototype.build = function() {
  this.x = w * 0.5;
  this.y = h * 0.5;
  this.r = rand(7, 2, 1);
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.gravity = .01;
  this.opacity = Math.random() + .5;
  this.active = true;

  c.beginPath();
  c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  c.fillStyle = "hsla(" + this.hue + ",100%,50%,1)";
  c.fill();
};

Particle.prototype.draw = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;
  this.hue -= 0.5;
  this.r = Math.abs(this.r - .05);
  this.active = true;

  c.beginPath();
  c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  c.fillStyle = "hsla(" + this.hue + ",100%,50%,1)";
  c.fill();

  this.reset(); // reset particle
};
