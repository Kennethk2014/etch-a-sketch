// HTML OBJECTS
const gridContainer = document.querySelector('#grid-container');
const button16 = document.querySelector('.button16');
const button32 = document.querySelector('.button32');
const button64 = document.querySelector('.button64');

// CREATES ALL THE DIVS WHEN PAGE IS LOADED
for(let i = 0; i < 256; i++){
    const createDiv = document.createElement('div')
    createDiv.classList.add('inner-div');
    gridContainer.appendChild(createDiv)
};


/*button16.addEventListener('click', grid16)
button32.addEventListener('click', grid32)
button64.addEventListener('click', grid64)*/

/*function grid16(){
    gridContainer.innerHTML = "";

    for(let i = 0; i < 256; i++){
        
        gridContainer.style.gridTemplateColumns =  "repeat(16, 1fr)";
        gridContainer.style.gridTemplateRows =  "repeat(16, 1fr)";
        const createDiv = document.createElement('div')
        createDiv.classList.add('inner-div');
        gridContainer.appendChild(createDiv)
        
    };
    const div = document.querySelectorAll('.inner-div').forEach(item => {
        item.addEventListener('mouseover', colorChanger)
    })
}*/


function grid32(){
    gridContainer.innerHTML = "";

    for(let i = 0; i < 1024; i++){
        
        gridContainer.style.gridTemplateColumns =  "repeat(32, 1fr)";
        gridContainer.style.gridTemplateRows =  "repeat(32, 1fr)";
        const createDiv = document.createElement('div')
        createDiv.classList.add('inner-div');
        gridContainer.appendChild(createDiv)
        
    };
    const div = document.querySelectorAll('.inner-div').forEach(item => {
        item.addEventListener('mouseover', colorChanger)
    })
}

function grid64(){
    gridContainer.innerHTML = "";

    for(let i = 0; i < 4096; i++){
        const createDiv = document.createElement('div')
        createDiv.classList.add('inner-div');
        gridContainer.appendChild(createDiv)
        gridContainer.style.gridTemplateColumns =  "repeat(64, 2fr)";
        gridContainer.style.gridTemplateRows =  "repeat(64, 2fr)";

    }
    const div = document.querySelectorAll('.inner-div').forEach(item => {
        item.addEventListener('mouseover', colorChanger)
    })
};

const div = document.querySelectorAll('.inner-div').forEach(item => {
    item.addEventListener('mouseover', colorChanger)
})

function colorChanger(event){
    event.target.classList.replace('inner-div', 'new-color')
}


const gridLayoutSlider = document.querySelector("#grid-layout-slider")

gridLayoutSlider.oninput = function(){
    let gridVal = this.value;
    let gridArea = gridVal * gridVal;

    gridContainer.innerHTML = "";

    for(let i = 0; i < gridArea; i++){
        
        gridContainer.style.gridTemplateColumns =  `repeat(${gridVal}, 1fr)`;
        gridContainer.style.gridTemplateRows =  `repeat(${gridVal}, 1fr)`;
        const createDiv = document.createElement('div')
        createDiv.classList.add('inner-div');
        gridContainer.appendChild(createDiv)
        
    };
    const div = document.querySelectorAll('.inner-div').forEach(item => {
        item.addEventListener('mouseover', colorChanger)
    })
    console.log(gridArea)
}
    
    
    


