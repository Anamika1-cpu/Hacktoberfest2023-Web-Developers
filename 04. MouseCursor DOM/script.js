const pointer = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
  event.pageX 
  event.pageY 
  console.log(event);
  moveCursor(event.pageX, event.pageY);
});

const moveCursor = function (pageX, pageY) {
  pointer.style.left = pageX + "px";
  pointer.style.top = pageY + "px";
};

