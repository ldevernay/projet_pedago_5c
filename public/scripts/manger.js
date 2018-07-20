$(document).ready(function () {



    $(function () {

        let badResult = 0;
        let goodResult = 0;


        $(".draggable").draggable(); //definition of draggables

        $("#assiette").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight');


                // CLASSES VERIF

                //class verificator for goodfood
                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is('.goodfood')) {
                    // console.log('dont have class assiette');
                    goodResult += Number(ui.draggable.attr('data-score'));
                }
                //badfood verif
                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is('.badfood')) {
                    // console.log('dont have class assiette');
                    badResult += Number(ui.draggable.attr('data-score'));

                }


                //conditions to change counter class
                if (goodResult > 25 || badResult <= -15) {
                    $('#module2txt').html("Trop manger");
                    $('#module2img').attr('src', '/images/001-sick.png');
                } else if (goodResult > 15 && badResult >=0) {
                    $('#module2txt').html("Très bien")
                    $('#module2img').attr('src', '/images/003-happy.png');
                } else if (goodResult >= 10 && badResult >=-5) {
                    $('#module2txt').html("Bien")
                    $('#module2img').attr('src', '/images/005-smile.png');
                } else if (goodResult <= 5 && badResult <= -10) {
                    
                    if (goodResult <= 5 && badResult <= -5) {
                        $('#module2txt').html("Pas bien");
                        $('#module2img').attr('src', '/images/004-sad.png');
                    }

                    $('#module2img').attr('src', '/images/002-crying.png');
                    $('#module2txt').html("Pas bien du tout")
                } else if (goodResult <= 5 && badResult <= -10) {
                    $('#module2txt').html("Pas bien");
                    $('#module2img').attr('src', '/images/004-sad.png');
                } else {
                    $('#module2txt').html("neutral");
                    $('#module2img').attr('src', '/images/006-thinking.png');
                }



                console.log('badResult = ' + badResult);

                console.log('goodResult = ' + goodResult);


                ui.draggable.removeClass('foodTable')
                ui.draggable.addClass('foodAssiette')
                // $('.counter').html(goodResult)
                

            }


        })


        $("#table").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight')

                //food norepeat
                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is(":not(.foodTable)")) {
                    console.log('no divs');

                } else if (ui.draggable.is(":not(.foodTable)") && ui.draggable.is('.goodfood')) {
                    console.log('dont have class assiette');
                    goodResult -= Number(ui.draggable.attr('data-score'));
                } else if (ui.draggable.is(":not(.foodTable)") && ui.draggable.is('.badfood')) {
                    console.log('dont have class assiette');
                    badResult -= Number(ui.draggable.attr('data-score'));
                }



                ui.draggable.removeClass('foodAssiette')
                ui.draggable.addClass('foodTable')

                console.log('goodResult = ' + goodResult);
                console.log('badResult = ' + badResult);


                //conditions to change counter class
                if (goodResult > 25 || badResult <= -15) {
                    $('#module2txt').html("Trop manger");
                    $('#module2img').attr('src', '/images/001-sick.png');
                } else if (goodResult > 15 && badResult >=0) {
                    $('#module2txt').html("Très bien")
                    $('#module2img').attr('src', '/images/003-happy.png');
                } else if (goodResult >= 10 && badResult >=-5) {
                    $('#module2txt').html("Bien")
                    $('#module2img').attr('src', '/images/005-smile.png');
                } else if (goodResult <= 5 && badResult <= 15) {
                    $('#module2img').attr('src', '/images/002-crying.png');
                    $('#module2txt').html("Pas bien du tout")
                } else if (goodResult <= 5 && badResult <= 10) {
                    $('#module2txt').html("Pas bien");
                    $('#module2img').attr('src', '/images/004-sad.png');
                } else {
                    $('#module2txt').html("neutral");
                    $('#module2img').attr('src', '/images/001-sick.png');
                }


            }
        })





    }); //function end
}); //ready end