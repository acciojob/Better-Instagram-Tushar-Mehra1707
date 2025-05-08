let draggedBox = null;

// Select all the boxes
const boxes = document.querySelectorAll('.box');

// Loop through each box to add event listeners
boxes.forEach(box => {
  box.addEventListener('dragstart', (e) => {
    draggedBox = box; // Store the dragged box
    e.dataTransfer.setData('text/plain', '');
    box.style.opacity = '0.6'; // Change opacity while dragging
  });

  box.addEventListener('dragend', () => {
    draggedBox.style.opacity = '1'; // Reset opacity after drag
  });

  box.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
  });

  box.addEventListener('dragenter', (e) => {
    e.preventDefault(); // Necessary for drop
    box.style.borderColor = '#666'; // Change border color on enter
  });

  box.addEventListener('dragleave', () => {
    box.style.borderColor = '#ddd'; // Reset border color on leave
  });

  box.addEventListener('drop', () => {
    box.style.borderColor = '#ddd'; // Reset border color on drop
    if (draggedBox && draggedBox !== box) {
      // Swap background images
      const temp = draggedBox.style.backgroundImage;
      draggedBox.style.backgroundImage = box.style.backgroundImage;
      box.style.backgroundImage = temp;
    }
  });
});
