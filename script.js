let draggedDiv = null;

document.querySelectorAll('.draggable').forEach(div => {
  // Drag start: save the source element
  div.addEventListener('dragstart', (e) => {
    draggedDiv = e.target;
    e.dataTransfer.effectAllowed = 'move';
  });

  // Drag over: allow dropping
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Drop: swap backgrounds
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.target) {
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });

  // Optional: Add a little visual feedback
  div.addEventListener('dragenter', (e) => {
    e.target.style.borderColor = '#333';
  });

  div.addEventListener('dragleave', (e) => {
    e.target.style.borderColor = '#ccc';
  });

  div.addEventListener('dragend', () => {
    document.querySelectorAll('.draggable').forEach(el => {
      el.style.borderColor = '#ccc';
    });
  });
});
