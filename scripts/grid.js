// Handles the grid generation and interactivity

export function setupGrids(tracks) {
  tracks.forEach(track => {
    const grid = document.getElementById(`grid-${track}`);
    grid.innerHTML = '';
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.active = 'false';
      cell.dataset.index = i;
      cell.dataset.track = track;
      cell.addEventListener('click', toggleCell);
      grid.appendChild(cell);
    }
  });
}

export function toggleCell(e) {
  const cell = e.target;
  const active = cell.dataset.active === 'true';
  cell.dataset.active = !active;
  cell.classList.toggle('active');
}
