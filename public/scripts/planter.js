let winImages = ["graine_terre.png", "cotyledon.png", "plantule.png", "plante.png", "patates.png", "market.png"];
let failImages = ["poule_mange.png", "poule_mange.png", "limace_mange.png", "plante_sans_patates.png", "plante_fruits.png", "patate_germee.png"];
let btnWinImages = ["arroser.png", "arroser.png", "amendement.png", "recolter.png", "camion.png", "camion.png"];
let btnFailImages = ["poule.png", "limace.png", "recolter.png", "arroser.png",  "planter.png", "planter.png"];

let btnCounter = 0;
let gameOver = false;
// Change the button image on click
let changeBtn1Image = () => {
    if(!gameOver && btnCounter < btnWinImages.length){
        document.getElementById("button1").src = "./images/" + btnWinImages[btnCounter];
        document.getElementById("button2").src = "./images/" + btnFailImages[btnCounter];
        changeMainImage(winImages[btnCounter]);
        btnCounter++;
    }
    // else include restart the game option
}

let changeBtn2Image = () =>{
    changeMainImage(failImages[btnCounter]);
    gameOver = true;
}

let changeMainImage = mainImage => {
    document.getElementById("mainImg").src = "./images/" + mainImage;
}