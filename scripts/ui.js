// Placeholder for additional UI enhancements (tooltips, animations)
export function highlightCell(cell) {
  cell.classList.add('highlight');
  setTimeout(() => cell.classList.remove('highlight'), 100);
}
