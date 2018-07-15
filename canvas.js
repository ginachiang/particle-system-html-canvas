var TOTAL_PARTICLES = document.getElementById('totalParticlesTb').value;
var particles       = [];
var ANIMATION;

function colourCanvas() {
  c.fillStyle = document.getElementById('colourDropDown').value;
  c.fillRect(0, 0, w, h);
}

function drawScene() {
  colourCanvas();

  particles.forEach(function(currParticle) {
    if(currParticle.active) {
      currParticle.draw();
    } else {
      currParticle.build();
    }
  });

  ANIMATION = requestAnimationFrame(drawScene);
}

function cleanCanvas() {
  particles = [];
  cancelAnimationFrame(ANIMATION);
  ANIMATION;
  //console.log(ANIMATION);
}

function initCanvas() {
  var s = getComputedStyle(a);
  if(particles.length) {
    cleanCanvas();
  }

  w = a.width = WIN_WIDTH;
  h = a.height = WIN_HEIGHT;

  for(var i = 0; i < TOTAL_PARTICLES; ++i) {
    particles.push(new Particle(i));
  }

  drawScene();
  //console.log(ANIMATION);
}