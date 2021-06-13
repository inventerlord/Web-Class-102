let slider = document.getElementById("ran");
let sliderV = document.getElementById("ranV");
let image = document.getElementById("aimg");
let bodym = document.getElementById("myb");
let bc = document.getElementById("bc");
function displayvalu(){
    sliderV.innerHTML = slider.value;
    image.style.height = `${slider.value}px`;
    image.style.width = `${slider.value}px`;

}
function displaycol(){

bodym.style.backgroundColor = `${bc.value}`;
}
slider.addEventListener('change',displayvalu);
slider.addEventListener('input',displayvalu);
bc.addEventListener('change',displaycol);
bc.addEventListener('input',displaycol);