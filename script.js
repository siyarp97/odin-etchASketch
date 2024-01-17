// Ask size 
const size = prompt('Choose Canvas Size ( Max value = 100 )')

// Creating sketchboard
createGrid()

// Selecting each square
let square = document.querySelectorAll('.square')
const squareArr = [...square]

// Making art process
clickColorize()
// hoverColorize()

const color = 'pink'








//* FUNCTİONS

// ! Creating Canvas
function createGrid(){
    if(size > 100){
        window.alert('Not correct size point')
        return window.location.reload()
    }
    
    else{
        for(let i = 1; i<= size; i++){
            const wrapper = document.createElement('div')
            wrapper.classList.add('container')
            for(let j = 1; j <= size; j++){
                const squareBtn = document.createElement('div')
                squareBtn.classList.add('square')
                wrapper.append(squareBtn)
            }

            document.body.appendChild(wrapper)
        }
    }
}

// ! Making art by click way
function clickColorize(){

    squareArr.forEach( (e) => e.addEventListener('click', () => {
        e.setAttribute('style', `background-color: red; border:1px solid red;`)
        
    })
    )
}

// ! Making art by hover

function hoverColorize(){
    squareArr.forEach( (e) => e.addEventListener('mouseover', () => {
        e.setAttribute('style', `background-color: red; border:none;`)
    }))
}










//* ------ TO DOS ---------//

//TODO #1 : Fit in a frame the grids. Because when entered high numbers, page is overflowin in enormous way.
    // [ ] After figureout this, make link resizing canvas by slide option  between 1-100


//TODO #2 : Create three buttons
    // [ ] Clear btn
    // [ ] Color chooser btn
    // [ ] Random color btn

//TODO #3 : Button events
    // [ ] Left click pressed down 1 time and keep draw event.
    // [ ] Hover and click draw toggle


//TODO After do that all make good ui

