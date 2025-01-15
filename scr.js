//select ccontainer
const container = document.querySelector(".container");
const side = 100;
//create 16 x 16 grid
for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        container.appendChild(newDiv);
        
    }
}

//ad hover event to paint pixel square
const pixels = Array.from( container.children);
console.log(pixels);
pixels.forEach((p) => {
    p.addEventListener("mouseover", (e) => {
        let currentPixel = e.target;
        currentPixel.style.backgroundColor = "white";
    })
})