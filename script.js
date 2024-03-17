let box = document.getElementById("box-shape");
let container = document.getElementById("conatainer");
let number_of_boxes = 0;


box.onclick = addElement;


function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.innerText = number_of_boxes;

  // container.appendChild(newDiv);

  document.body.insertBefore(newDiv, container);
  number_of_boxes++;
}