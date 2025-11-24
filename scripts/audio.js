// Handles playback logic (placeholder implementation)

let tempo = 120;
let isPlaying = false;
let currentStep = 0;
let interval;

const tracks = ['drums', 'bass', 'melody', 'vocals'];

export function setTempo(bpm) {
  tempo = bpm;
}

export function playComposition() {
  if (isPlaying) return;
  isPlaying = true;
  currentStep = 0;

  interval = setInterval(() => {
    playStep(currentStep);
    currentStep = (currentStep + 1) % 16;
  }, (60 / tempo) * 1000 * 0.5);
}

export function pausePlayback() {
  clearInterval(interval);
  isPlaying = false;
}

export function stopPlayback() {
  clearInterval(interval);
  isPlaying = false;
  currentStep = 0;
}

function playStep(stepIndex) {
  tracks.forEach(track => {
    const cells = document.querySelectorAll(`#grid-${track} .grid-cell`);
    cells.forEach((cell, index) => {
      if (index === stepIndex) cell.style.background = '#ffaa00';
      else if (cell.dataset.active === 'true') cell.style.background = '#00ffcc';
      else cell.style.background = '#333';

      if (index === stepIndex && cell.dataset.active === 'true') {
        // TODO: play sound sample (Web Audio API)
        console.log(`Play ${track} beat ${index}`);
      }
    });
  });
}
