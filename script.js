document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const dropzones = document.querySelectorAll('.dropzone');
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerText = 'Item dropped successfully!';
  
    let draggedItem = null;
  
    items.forEach(item => {
      item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
          item.classList.add('dragging');
        }, 0);
      });
  
      item.addEventListener('dragend', () => {
        draggedItem = null;
        item.classList.remove('dragging');
      });
    });
  
    dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragover', e => {
        e.preventDefault();
      });
  
      dropzone.addEventListener('dragenter', e => {
        e.preventDefault();
        dropzone.style.background = 'rgba(0, 0, 0, 0.2)';
      });
  
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.background = '';
      });
  
      dropzone.addEventListener('drop', () => {
        dropzone.appendChild(draggedItem);
        dropzone.appendChild(successMessage);
        dropzone.style.background = '';
      });
    });
  
    function resetContainers() {
      const firstContainer = document.getElementById('first-container');
      const secondContainer = document.getElementById('second-container');
  
      while (secondContainer.firstChild) {
        secondContainer.firstChild.remove();
      }
  
      items.forEach(item => {
        firstContainer.appendChild(item);
      });
  
      successMessage.remove();
    }
  
    const resetButton = document.querySelector('button');
    resetButton.addEventListener('click', resetContainers);
  });
  