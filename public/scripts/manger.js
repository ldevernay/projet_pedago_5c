

$(document).ready(function () {



    $(function () {

        let badResult = 0;
        let goodResult = 0;


        $(".draggable").draggable(); //definition of draggables
        
        $("#assiette").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight');

                ui.draggable.css("color", "red"); //ui.draggable is the dragged object

                //class verificator for goodfood
                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is('.goodfood')) {
                    console.log('dont have class assiette');
                    goodResult += Number(ui.draggable.attr('data-score'));
                }

                ui.draggable.removeClass('foodTable')
                ui.draggable.addClass('foodAssiette')

                // console.log('goodResult = ' + goodResult)

                $('.counter').html(goodResult)


                    //conditions to change counter class
                 if(goodResult > 59){
                    $('.counter').html("too much")
                } else if (goodResult > 39) {
                    $('.counter').html("very good")
                } else if ( goodResult > 19) {
                    $('.counter').html("good")
                } else if (goodResult < -39) {
                    $('.counter').html("very sad")
                } else if (goodResult < -19) {
                    $('.counter').html("sad")
                } else {
                    $('.counter').html("neutral")
                }
            }


     })

        $("#table").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight')
                    
                ui.draggable.css("color", "blue")

                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is(":not(.foodTable)" )) {
                    console.log('no divs');
                    
                } else if (ui.draggable.is(":not(.foodTable)" )) {
                    console.log('dont have class assiette');
                    goodResult -= Number(ui.draggable.attr('data-score'));
                }



                ui.draggable.removeClass('foodAssiette')
                ui.draggable.addClass('foodTable')

                console.log('goodResult = ' + goodResult);

                if(goodResult > 59){
                    $('.counter').html("too much")
                } else if (goodResult > 39) {
                    $('.counter').html("very good")
                } else if ( goodResult > 19) {
                    $('.counter').html("good")
                } else if (goodResult < -39) {
                    $('.counter').html("very sad")
                } else if (goodResult < -19) {
                    $('.counter').html("sad")
                } else {
                    $('.counter').html("neutral")
                }
                
                
            }
        })

        
        


    });//function end
});//ready end