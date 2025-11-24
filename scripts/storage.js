// Handles save/load to localStorage

export function saveComposition() {
  const data = {};
  document.querySelectorAll('.grid').forEach(grid => {
    const track = grid.id.replace('grid-', '');
    data[track] = Array.from(grid.children).map(cell => cell.dataset.active === 'true');
  });
  localStorage.setItem('moomusic_composition', JSON.stringify(data));
  alert('Composition saved!');
}

export function loadComposition() {
  const data = JSON.parse(localStorage.getItem('moomusic_composition'));
  if (!data) return alert('No saved composition found!');
  Object.keys(data).forEach(track => {
    const grid = document.getElementById(`grid-${track}`);
    const cells = grid.querySelectorAll('.grid-cell');
    data[track].forEach((active, i) => {
      cells[i].dataset.active = active;
      cells[i].classList.toggle('active', active);
    });
  });
  alert('Composition loaded!');
}
