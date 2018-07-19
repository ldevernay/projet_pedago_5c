// let winImages = ["plantule.jpg", "plante.jpg", "patate.jpg", "patates.png", "potato_truck.jpeg", "market_buy.jpg", "potato_house.jpg", "cooked_potato.jpg"];
// let failImages = ["poule_mange.png", "escargot_mange.jpg", "feuille.png", "potato_sad.png", "potato_bike.png", "house_potato.png","dog_eat.png", "puree.jpg"];
// let btnWinImages = [ "arroser.jpg", "soleil.png", "recolter.jpeg", "camion.png", "market.png", "parent.jpg", "pan.png", ""];
// let btnFailImages = ["escargot.png", "nuage.png", "arracher.png", "velo.png", "house.jpg", "dog.png", "pressoir.png", ""];
// let text1 = ["Arroser", "Soleil", "Récolter", "ECamion", "Marché", "Acheter", "Poêle"]
// let text2 = ["Un escargot ?", "Pluie", "Arracher", "Vélo ?", "Maison ", "Animal", "Ecrasé"]
//DOM selectors
// let imgCirlce = document.getElementsByClassName('img.circle');




let btnCounter = 0;
let gameOver = false;
// Change the button image on click
let changeBtn1Image = () => {
    if(!gameOver && btnCounter < btnWinImages.length){
        document.getElementById("button1").src = `./images/${btnWinImages[btnCounter]}`;
        document.getElementById("button2").src = `./images/${btnFailImages[btnCounter]}`;
        document.getElementById('text1').innerHTML = text1[btnCounter];
        document.getElementById('text2').innerHTML = text2[btnCounter];
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