document.getElementById("totalParticlesTb").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    getTotalParticlesInput();
  }
});

document.getElementById("canvasWTb").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    getNewCanvasWidthInput();
  }
});

document.getElementById("canvasHTb").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    getNewCanvasHeightInput();
  }
});

function getTotalParticlesInput() {
  var newTotalParticles = document.getElementById("totalParticlesTb");
  var totalNoOfNewParticles = newTotalParticles.value;
  if('' === totalNoOfNewParticles) {
    newTotalParticles.value = newTotalParticles.defaultValue;
  } else {
    TOTAL_PARTICLES = totalNoOfNewParticles;
  }

  initCanvas();
}

function getNewCanvasWidthInput() {
  var newWt = document.getElementById("canvasWTb");
  var newCanvasWidth = newWt.value;
  if('' === newCanvasWidth) {
    newWt.value = newWt.defaultValue;
  } else {
    WIN_WIDTH = newCanvasWidth;
  }

  initCanvas();
}

function getNewCanvasHeightInput() {
  var newHt = document.getElementById("canvasHTb");
  var newCanvasHeight = newHt.value;
  if('' === newCanvasHeight) {
    newHt.value = newHt.defaultValue;
  } else {
    WIN_HEIGHT = newCanvasHeight;
  }

  initCanvas();
}
