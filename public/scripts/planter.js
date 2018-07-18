let winImages = ["plantule.jpg", "plante.jpg", "patate.jpg", "patates.png"];
let failImages = ["poule_mange.png", "escargot_mange.jpg", "feuille.png", "potato_sad.png", "patate_germee.png"];
let btnWinImages = [ "arroser.jpg", "soleil.png", "recolter.jpeg", "camion.png", "", "camion.png"];
let btnFailImages = ["escargot.png", "vent.png", "arracher.png", "velo.png", "planter.png"];

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