const icons = document.querySelectorAll('.icon');

let currentIcon = null;
let initialX, initialY, currentX, currentY, xOffset = 0, yOffset = 0;

icons.forEach(icon => {
  icon.addEventListener('mousedown', dragStart);
});

window.addEventListener('mousemove', drag);
window.addEventListener('mouseup', dragEnd);

function dragStart(event) {
  currentIcon = event.target.closest('.icon');
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;
  currentIcon.style = `
  background: rgba(106, 96, 230, 0.59); border-radius: 5px; cursor: pointer;`

}

function drag(event) {
  if (currentIcon) {
    event.preventDefault();
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, currentIcon);
    
  }
}

function dragEnd(event) {
    currentIcon = null;
  
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
