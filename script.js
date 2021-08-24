

// color picker done!

const color = document.querySelector('input[type="color"]')
let colorValue = "#000000";
color.addEventListener('change',(e)=>{
    colorValue = e.target.value;
})


// Dyanamic Grid
const mainEle = document.querySelector('.canvas-container');

// Grid Size Indicator
const span = document.querySelectorAll('.rangeValue');

// Slider
const rangeEle = document.querySelector('input[type="range"]');


rangeEle.addEventListener('change',(e)=>{
    let gridSize = e.target.value;


    // display size of grid in page
    span.forEach(span=>{
        span.textContent = gridSize;
    });

    // defining grid size
    mainEle.style.cssText = `grid-template-columns:repeat(${gridSize},1fr); grid-template-rows:repeat(${gridSize},1fr)`;

    // removal of old elements from grid
    const childOfMain = Array.from( mainEle.children);
    childOfMain.forEach(child=>{
       child.remove();
    });

    // define how many elements we want to create
    let numOfEle = gridSize * gridSize;

    // adding new elements in grid
    for(let i = 1; i<= numOfEle; i++) {
        let newEle = document.createElement('div');
        newEle.addEventListener('mouseenter',e=>{
            e.target.style.cssText = `background-color:${colorValue}`;
        });
        mainEle.appendChild(newEle);
    }

});









function InitialMode() {
    const parent = document.querySelector('.canvas-container');
    const sliderInitialValue = document.querySelector('input[type="range"]').value;
    let ele;
    console.log(sliderInitialValue);
    for (let i = 1; i <= (sliderInitialValue * sliderInitialValue); i++) {
        ele = document.createElement('div');
        ele.textContent = i;
        ele.addEventListener('mouseenter',e=>{
            e.target.style.cssText=`background-color:${colorValue};`;
            console.log(colorValue);
        })
        parent.appendChild(ele);
    }
}

window.addEventListener('load',InitialMode);

