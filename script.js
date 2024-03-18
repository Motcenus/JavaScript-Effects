let box = document.getElementById("box-shape");
let container = document.getElementById("conatainer");
let addBox = document.getElementById("add-box");
let number_of_boxes = 0;

addBox.onclick = addElement;

function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.innerText = number_of_boxes;
  document.body.insertBefore(newDiv, container);
  number_of_boxes++;
}

addBox.onmouseover = function() {
  addBox.style.scale = "1.2";
  addBox.style.transition = "0.3s ease-in";
}

addBox.onmouseout = function() {
  addBox.style.scale = "1";
}