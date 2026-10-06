const home = document.querySelector(".container");

let gridCount = 16;
for (i = 0; i < gridCount; i++){
    for (j = 0; j< gridCount; j++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        // grid.style.color = "blue";
        //grid.textContent = "blue"
        home.appendChild(grid);
    } 
}