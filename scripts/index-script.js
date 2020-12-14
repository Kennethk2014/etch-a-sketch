// HTML OBJECTS
const gridContainer = document.querySelector("#grid-container");
const button16 = document.querySelector(".button16");
const button32 = document.querySelector(".button32");
const button64 = document.querySelector(".button64");

// CREATES ALL THE DIVS WHEN PAGE IS LOADED
for (let i = 0; i < 256; i++) {
  const createDiv = document.createElement("div");
  createDiv.classList.add("inner-div");
  gridContainer.appendChild(createDiv);
}

const gridLayoutSlider = document.querySelector("#grid-layout-slider");

// Makes the slider interactive and fills out the box with the user inputted divs
gridLayoutSlider.oninput = function () {
  let gridVal = this.value;
  let gridArea = gridVal * gridVal;

  gridContainer.innerHTML = "";

  for (let i = 0; i < gridArea; i++) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridVal}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridVal}, 1fr)`;
    const createDiv = document.createElement("div");
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
  const div = document.querySelectorAll(".inner-div").forEach((item) => {
    item.addEventListener("mouseover", colorChanger);
  });
};

const div = document.querySelectorAll(".inner-div").forEach((item) => {
  item.addEventListener("mouseover", colorChanger);
});

//Replaces the existing class with another class created in the CSS file, here i can change the colors
function colorChanger(event) {
  event.target.classList.replace("inner-div", "new-color");
}
