// color picker done!

const color = document.querySelector('input[type="color"]')
let colorValue = "#000000";
color.addEventListener('change', (e) => {
    colorValue = e.target.value;
})


// Dyanamic Grid
const mainEle = document.querySelector('.canvas-container');

// Grid Size Indicator
const span = document.querySelectorAll('.rangeValue');

// Slider
const rangeEle = document.querySelector('input[type="range"]');


rangeEle.addEventListener('change', (e) => {
    let gridSize = e.target.value;


    // display size of grid in page
    span.forEach(span => {
        span.textContent = gridSize;
    });

    // defining grid size
    mainEle.style.cssText = `grid-template-columns:repeat(${gridSize},1fr); grid-template-rows:repeat(${gridSize},1fr)`;

    // removal of old elements from grid
    const childOfMain = Array.from(mainEle.children);
    childOfMain.forEach(child => {
        child.remove();
    });

    // define how many elements we want to create
    let numOfEle = gridSize * gridSize;

    // adding new elements in grid
    for (let i = 1; i <= numOfEle; i++) {
        let newEle = document.createElement('div');
        newEle.addEventListener('mouseenter', e => {
            e.target.style.cssText = `background-color:${colorValue}`;
        });
        mainEle.appendChild(newEle);
    }

});



// color cells functionality added (default)

const colorBtn = document.querySelector('.btn__colorfull');
colorBtn.addEventListener('click', () => {
    
    const fullCanvas = document.querySelector('.canvas-container');
    const cells = Array.from(fullCanvas.children);
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            e.target.style.cssText = `background-color:${colorValue}`;
        })
    });
});








// clear canvas functionality added
const clearBtn = document.querySelector('.btn__clear');
clearBtn.addEventListener('click', () => {
   
    const fullCanvas = document.querySelector('.canvas-container');
    const cells = Array.from(fullCanvas.children);
    cells.forEach(cell => {
        cell.style.cssText = "background-color:#ffffff";
    });
});


// Eraser functionality added
const EraserBtn = document.querySelector('.btn__eraser');
EraserBtn.addEventListener('click', () => {
    
    const fullCanvas = document.querySelector('.canvas-container');
    const cells = Array.from(fullCanvas.children);
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            e.target.style.cssText = "background-color:#ffffff";
        })
    })
});



// random color cell functionality added

const rainbowBtn = document.querySelector('.btn__rainbow');
rainbowBtn.addEventListener('click', () => {

    const randomHexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    const fullCanvas = document.querySelector('.canvas-container');
    const cells = Array.from(fullCanvas.children);
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            let rCode1 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];
            let rCode2 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];
            let rCode3 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];
            let rCode4 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];
            let rCode5 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];
            let rCode6 = randomHexCode[Math.floor(Math.random() * randomHexCode.length)];



            e.target.style.cssText = `background-color:#${rCode1}${rCode2}${rCode3}${rCode4}${rCode5}${rCode6}`;

        })
    });

});







function InitialMode() {
    const parent = document.querySelector('.canvas-container');
    const sliderInitialValue = document.querySelector('input[type="range"]').value;
    let ele;

    for (let i = 1; i <= (sliderInitialValue * sliderInitialValue); i++) {
        ele = document.createElement('div');
        ele.addEventListener('mouseenter', e => {
            e.target.style.cssText = `background-color:${colorValue};`;

        })
        parent.appendChild(ele);
    }
}

window.addEventListener('load', InitialMode);