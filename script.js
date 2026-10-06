const home = document.querySelector(".container");
const but = document.querySelector("button");

let gridCount = 16;

but.addEventListener("click", () => {
    let input = prompt("Enter a grid Size");
    gridCount = parseInt(input);

    if (gridCount > 100){
        alert("Grid size should be smaller that 100");
    } else {
        gridMaker();
    }
})

function gridMaker(){
    home.replaceChildren();

    for (i = 0; i < gridCount; i++){
        for (j = 0; j< gridCount; j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            // grid.style.color = "blue";
            //grid.textContent = "blue"
            home.appendChild(grid);
        } 
    }

    document.documentElement.style.setProperty('--number', gridCount);
}

gridMaker();