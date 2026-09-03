const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    gridContainer.appendChild(rowDiv);
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        rowDiv.appendChild(div);
    }
}

const grid = document.querySelector(".grid");
