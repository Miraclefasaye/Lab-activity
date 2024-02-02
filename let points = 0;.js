let points = 0;

function increasePoints() {
  points++;
  updateScore(points);
  if (points === 1) {
    document.getElementById('planet').style.display = 'block';
  }
  if (points === 4) {
    document.getElementById('rocket').style.display = 'block';
  }
  if (points === 8) {
    document.getElementById('alien').style.display = 'block';
  }
}

function unlockObject(object) {
  if (object === 'planet') {
    document.getElementById('planet').style.transform = 'scale(1.5)';
  }
  if (object === 'rocket') {
    document.getElementById('rocket').style.transform = 'scale(1.5)';
  }
  if (object === 'alien') {
    document.getElementById('alien').style.transform = 'scale(1.5)';
  }
}

function updateScore(score) {
  document.getElementById('score').innerText = 'Score: ' + score;
}
