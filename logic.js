
function createGrid(length, width) {
    for (let row = 0; row < width; row++) {
        let rowDiv = document.createElement("div")
        rowDiv.classList.add(`row${row + 1}`)
        rowDiv.classList.add("rows")
        for (let cell = 0; cell < length; cell++) {
            let cellDiv = document.createElement("div")
            cellDiv.classList.add(`cell${cell + 1}`)
            cellDiv.classList.add("cells")
            rowDiv.appendChild(cellDiv)
        }
        squareGrid.appendChild(rowDiv)

    }
}

function newGrid(){
    newBtn.addEventListener("click", () => {
        squareGrid.innerHTML = ""
        getCellLength()
        createGrid(cellNum, cellNum)
        assignCellLength()
        declareCellDivs()
        multipleSelect()
    })
}

function multipleSelect() {
    let canSelect = false

    squareGrid.addEventListener("mousedown", () => canSelect = true)
    squareGrid.addEventListener("mouseup", () => canSelect = false)

    cellDivs.forEach(cellDiv => {
        ["mousedown" ,"mouseover"].forEach(function(event) {
            cellDiv.addEventListener(event, () => {
                if(!canSelect && event !== "mousedown") return

                cellDiv.style.backgroundColor = "blue"
            })
        })
    })
}


function resetGrid() {
    resetBtn.addEventListener("click", () => {
        cellDivs.forEach((cellDiv) => {
            cellDiv.style.backgroundColor = "white"
        })
    })

}

function getCellLength(){
    while (true) {
        cellNum = parseInt(prompt("Enter the number of squares to be in each row (1-60)"))
        if (cellNum <= 60 && cellNum > 0){
            resetBtn.style.display = "inline"
            newBtn.style.display = "inline"   
            cellLength =  maxLengthOfGrid / cellNum
            return
    }   }

}

function declareCellDivs(){
    cellDivs = document.querySelectorAll(".cells")
}

function assignCellLength(){
    // Experimentation with different ways to add css using js
    const style = document.createElement("style")
    style.innerHTML = `
    div.cells {
        width: ${cellLength}px;
        height: ${cellLength}px; 
        }`
    document.head.appendChild(style)
}
    
const squareGrid = document.querySelector(".squareGrid")
const resetBtn = document.querySelector(".resetBtn")
const newBtn = document.querySelector(".newBtn")
// Dimmensions of grid in pixels
const maxLengthOfGrid = 500
let cellNum 
// CellDivs is a nodelist that constains all the individual cells 
// CellDivs can only be assigned after the grid is created into DOM
let cellDivs
let cellLength

getCellLength()
createGrid(cellNum, cellNum)
assignCellLength()
declareCellDivs()
multipleSelect()
resetGrid()    
newGrid()


