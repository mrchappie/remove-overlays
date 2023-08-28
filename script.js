const htmlEl = document.querySelector('html');

function removeElement(e) {
  if (e.key === 'Control') {
  }
}

htmlEl.addEventListener('contextmenu', () => {
  console.log('right-click');
});

window.addEventListener('keydown', removeElement);
