const baseColor = "rgb(39, 38, 38)";

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
        p.style.backgroundColor = baseColor;
        p.style.opacity = 1;
    })
})

//delegate event handler
container.addEventListener("mouseover", (e) => {
    let currentPixel = e.target;    

    recolorPixel(currentPixel);
    
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
            newDiv.style.backgroundColor = baseColor;
            newDiv.style.opacity = 1;

            //set size of equal fractions
            newDiv.style.width = `calc(100% / ${size})`;

            //add event listener to paint it black when hovered
            /*newDiv.addEventListener("mouseover", (e) => {
                let currentPixel = e.target;
                

                recolorPixel(currentPixel);
                
            })*/
            container.appendChild(newDiv);      
        }
    }
}

function recolorPixel(pixel){ 
    let currentColor = pixel.style.backgroundColor ;
    if (currentColor == baseColor){
        pixel.style.backgroundColor = randomRGB();
        pixel.style.opacity = 0.1;
        
    } else if (pixel.style.opacity < 1){
        
        pixel.style.opacity =  Number(pixel.style.opacity) + 0.1;
        
    }
}

function randomRGB(){
    
    let max = 255;
    let randomValue = function (){
        return Math.round(Math.random() * 255);
    };
    let r = randomValue();
    let g = randomValue();
    let b = randomValue();

    return `rgb(${r}, ${g}, ${b})`;
    
}

