let myjson = {
    "data": [

        {
            "winImage": "plantule.jpg",
            "failImage": "poule_mange.png",
            "btnWinImage": "arroser.jpg",
            "btnFailImage": "escargot.png",
            "text1": "Arroser",
            "text2": "Un escargot"
        },
        {
            "winImage": "plante.jpg",
            "failImage": "escargot_mange.jpg",
            "btnWinImage": "soleil.png",
            "btnFailImage": "nuage.png",
            "text1": "Soleil",
            "text2": "Pluie"
        },
        {
            "winImage": "patate.jpg",
            "failImage": "feuille.png",
            "btnWinImage": "recolter.jpeg",
            "btnFailImage": "arracher.png",
            "text1": "Récolter",
            "text2": "Arracher"
        },
        {
            "winImage": "patates.png",
            "failImage": "potato_sad.png",
            "btnWinImage": "camion.png",
            "btnFailImage": "velo.png",
            "text1": "Camion",
            "text2": "Vélo "
        },
        {
            "winImage": "potato_truck.jpeg",
            "failImage": "potato_bike.png",
            "btnWinImage": "market.png",
            "btnFailImage": "house.jpg",
            "text1": "Marché",
            "text2": "Maison "
        },
        {
            "winImage": "market_buy.jpg",
            "failImage": "house_potato.png",
            "btnWinImage": "parent.jpg",
            "btnFailImage": "dog.png",
            "text1": "Acheter",
            "text2": "Animal"
        },
        {
            "winImage": "potato_house.jpg",
            "failImage": "dog_eat.png",
            "btnWinImage": "pan.png",
            "btnFailImage": "pressoir.png",
            "text1": "Poêle",
            "text2": "Ecrasé"
        },
        {
            "winImage": "cooked_potato.jpg",
            "failImage": "puree.jpg",
            "btnWinImage": "pan.png",
            "btnFailImage": "pressoir.png",
            "text1": "Poêle",
            "text2": "Ecrasé"
        }
    ]
}


let btnCounter = 0;
let gameOver = false;
// Change the button image on click
let changeBtn1Image = () => {
    if (!gameOver && btnCounter < myjson.data.length) {
        document.getElementById("button1").src = `./images/${myjson.data[btnCounter].btnWinImage}`;
        document.getElementById("button2").src = `./images/${myjson.data[btnCounter].btnFailImage}`;
        document.getElementById('text1').innerHTML = myjson.data[btnCounter].text1;
        document.getElementById('text2').innerHTML = myjson.data[btnCounter].text2;
        changeMainImage(myjson.data[btnCounter].winImage);
        btnCounter++;
        shuffle();
    } else {
        showRestartBtn();
    }
}

let changeBtn2Image = () => {
    changeMainImage(myjson.data[btnCounter].failImage);
    showRestartBtn();
}

let changeMainImage = mainImage => {
    document.getElementById("mainImg").src = `./images/${mainImage}`;
}

let showRestartBtn = () => {
    if (!gameOver) {
        document.getElementById("restart-btn").classList.remove("d-none");
    }
    gameOver = true;
}

let shuffle = () =>{
    $(".clickable-images").html($(".clickable-images .pack").sort(function(){
        return Math.random()-0.5;
    }));
}