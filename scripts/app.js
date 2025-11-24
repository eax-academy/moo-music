// Entry point: initializes grid and playback

import { setupGrids, toggleCell } from './grid.js';
import { playComposition, stopPlayback, pausePlayback, setTempo } from './audio.js';
import { saveComposition, loadComposition } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  setupGrids(['drums', 'bass', 'melody', 'vocals']);

  // Button events
  document.getElementById('btn-play').addEventListener('click', playComposition);
  document.getElementById('btn-pause').addEventListener('click', pausePlayback);
  document.getElementById('btn-stop').addEventListener('click', stopPlayback);
  document.getElementById('btn-clear').addEventListener('click', () => setupGrids(['drums', 'bass', 'melody', 'vocals']));
  document.getElementById('btn-save').addEventListener('click', saveComposition);
  document.getElementById('btn-load').addEventListener('click', loadComposition);

  // Tempo control
  const tempoSlider = document.getElementById('tempo');
  const bpmDisplay = document.getElementById('bpm-display');
  tempoSlider.addEventListener('input', () => {
    bpmDisplay.textContent = tempoSlider.value;
    setTempo(tempoSlider.value);
  });
});
