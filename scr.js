//select ccontainer
const container = document.querySelector(".container");
let size = 16;
//select inputs
const inputSize = document.querySelector("input");
const inputButton = document.querySelector("button");
const clearButton = document.querySelector("#clear");

createPixels()






//Add event listener to redrawn squares given input size
inputButton.addEventListener("click", (e)=> {
    if (inputSize.value == ""){
        return;
    }
    if (inputSize.value > 100 | inputSize.value < 16){
        return;
    }

    size = Number.parseInt(inputSize.value);
    //setSquareSize();
    createPixels();
}
);

//Add event lsitener to set all pixels to black again
clearButton.addEventListener("click", (e) => {
    let pixels = Array.from(container.children);
    pixels.forEach((p) => {
        p.style.backgroundColor = "rgb(39, 38, 38)";
    })
})



//add event to paint a hovered square
/*const pixels = Array.from( container.children);
//console.log(pixels);
pixels.forEach((p) => {
    p.addEventListener("mouseover", (e) => {
        let currentPixel = e.target;
        currentPixel.style.backgroundColor = "white";
    })
})*/


/*function setSquareSize(){
    let pixels = Array.from( container.children);
    console.log(pixels);
    pixels.forEach( (p) => {
        
        p.style.width = `calc(100% / ${size})`;
    } )
}*/

function createPixels(){
    if (container.children.length != 0){
        //delete previous pixels
        container.innerHTML = "";
    }


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            //create element
            let newDiv = document.createElement("div");
            newDiv.classList.add("square");

            //set size of equal fractions
            newDiv.style.width = `calc(100% / ${size})`;

            //add event listener to paint it black when hovered
            newDiv.addEventListener("mouseover", (e) => {
                let currentPixel = e.target;
                currentPixel.style.backgroundColor = "white";
            })
            container.appendChild(newDiv);      
        }
    }

    //setSquareSize();

}
