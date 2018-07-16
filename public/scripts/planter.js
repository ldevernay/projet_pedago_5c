let winImages = ["graine_terre.jpg", "plantule.jpg", "plante.jpg", "patates.png", "peasant.jpg"];
let failImages = ["poule_mange.png", "limace_mange.png", "plante_sans_patates.png", "plante_fruits.png", "patate_germee.png"];
let btnWinImages = ["arroser.png", "arroser.png", "amendement.png", "recolter.png", "camion.png", "camion.png"];
let btnFailImages = ["poule.png", "limace.png", "recolter.jpg", "arroser.png",  "planter.png", "planter.png"];

//DOM selectors
// let imgCirlce = document.getElementsByClassName('img.circle');




let btnCounter = 0;
let gameOver = false;
// Change the button image on click
let changeBtn1Image = () => {
    if(!gameOver && btnCounter < btnWinImages.length){
        document.getElementById("button1").src = `./images/${btnWinImages[btnCounter]}`;
        document.getElementById("button2").src = `./images/${btnFailImages[btnCounter]}`;
        changeMainImage(winImages[btnCounter]);
        btnCounter++;
    }else{
        showRestartBtn();
    }
}

let changeBtn2Image = () =>{
    changeMainImage(failImages[btnCounter]);
    showRestartBtn();
}

let changeMainImage = mainImage => {
    document.getElementById("mainImg").src = `./images/${mainImage}`;
}

let showRestartBtn = () => {
    if(!gameOver){
        document.getElementById("restart-btn").classList.remove("d-none");
    }
    gameOver = true;
}