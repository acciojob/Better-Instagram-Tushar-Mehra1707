let draggedElement = null;

document.querySelectorAll('.image-box').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = "move"; // Optional: sets the drag effect
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow dropping
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      // Swap background images
      const tempBg = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempBg;
    }
    draggedElement = null; // Reset draggedElement after drop
  });
});
