

// color picker done!

const color = document.querySelector('input[type="color"]')
let colorValue;
color.addEventListener('change',(e)=>{
    colorValue = e.target.value;
})




const rangeEle = document.querySelector('input[type="range"]');
const mainEle = document.querySelector('.canvas-container');
const span = document.querySelectorAll('.rangeValue');
let divChild;

rangeEle.addEventListener('change', (e) => {

    let rangeValue = e.target.value;
    span.forEach(span => { span.textContent = rangeValue });
    mainEle.style.cssText = `grid-template-columns:repeat(${rangeValue},1fr); grid-template-rows:repeat(${rangeValue},1fr)`;
    let numberOfEle = rangeValue * rangeValue;

    // loop 
    for (let i = 1; i <= numberOfEle; i++) {
        divChild = document.createElement('div');
        divChild.addEventListener('mouseenter',e=>{
            e.target.style.cssText=`background-color:${colorValue};`;
        })
        mainEle.appendChild(divChild);
    }

});


function createBasicElement() {
    const parent = document.querySelector('.canvas-container');
    for (let i = 1; i <= (16*16); i++) {
        let ele = document.createElement('div');
        ele.addEventListener('mouseenter',e=>{
            e.target.style.cssText=`background-color:${colorValue};`;
        })
        parent.appendChild(ele);
    }
}

window.addEventListener('load',createBasicElement);

