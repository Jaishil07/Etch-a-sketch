const gridContainer = document.querySelector(".grid-container");
createSquareGrids(16);

function createSquareGrids(noOfRows) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < noOfRows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        gridContainer.appendChild(rowDiv);
        for (let i = 0; i < noOfRows; i++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            rowDiv.appendChild(div);
        }
    }
    const grids = document.querySelectorAll(".grid");
    addRandomColor(grids);
}

function addRandomColor(grids){
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => addColor(getRandomColorCode(), getRandomColorCode(), getRandomColorCode(), grid));
    });
}

const gridButton = document.querySelector("#set-grid");
gridButton.addEventListener("click", () => {
    let noOfGrids = prompt("Enter the number of grids? 2-32");
    createSquareGrids(noOfGrids);
    
    
});



function getRandomColorCode() {
    return Math.floor(Math.random() * 255) + 1;
}

function addColor(r, g, b, grid) {
    grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}