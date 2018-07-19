

$(document).ready(function () {



    $(function () {

        let result = 0;

        $(".draggable").draggable(
            //{ drag: function (event, ui) {
            //     $(this)

            // }}
        );


        $("#assiette").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight');
                // .find('.food')
                ui.draggable.css("color", "red");

                


                if (ui.draggable.is(":not(.foodAssiette)")) {
                    console.log('dont have class assiette');
                    result += Number(ui.draggable.attr('data-score'));
                }

                ui.draggable.removeClass('foodTable')
                ui.draggable.addClass('foodAssiette')

                console.log('result = ' + result)
                // $('.counter').html(result)

                // if(result < 0 && result > -20){
                //     $('.counter').html("sad")
                // } else if (result < -20) {
                //     $('.counter').html("very sad")
                // } else if (result >= 0 && result < 20) {
                //     $('.counter').html("neutral")
                // } else if (result > 20 && result < 40) {
                //     $('.counter').html("sad")
                // } else if (result>40 && result < 60){
                //     $('.counter').html("happy")
                // } else {
                //     $('.counter').html("ate too much")
                // }
                console.log($(this).find('.food'));

                 if(result > 59){
                    $('.counter').html("too much")
                } else if (result > 39) {
                    $('.counter').html("very good")
                } else if ( result > 19) {
                    $('.counter').html("good")
                } else if (result < -39) {
                    $('.counter').html("very sad")
                } else if (result < -19) {
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
                    // .find('.food')
                ui.draggable.css("color", "blue")



                if (ui.draggable.is(":not(.foodAssiette)") && ui.draggable.is(":not(.foodTable)")) {
                    console.log('no divs');
                    
                } else if (ui.draggable.is(":not(.foodTable)")) {
                    console.log('dont have class assiette');
                    result -= Number(ui.draggable.attr('data-score'));
                }



                ui.draggable.removeClass('foodAssiette')
                ui.draggable.addClass('foodTable')

                console.log('result = ' + result);

                // $('.counter').html(result)
                // if(result < 0 && result > -20){
                //     $('.counter').html("sad")
                // } else if (result < -20) {
                //     $('.counter').html("very sad")
                // } else if (result >= 0 && result < 20) {
                //     $('.counter').html("neutral")
                // } else if (result > 20 && result < 40) {
                //     $('.counter').html("sad")
                // } else if (result>40 && result < 60){
                //     $('.counter').html("happy")
                // } else {
                //     $('.counter').html("ate too much")
                // }
                // console.log($(this).find('.food'));
                if(result > 59){
                    $('.counter').html("too much")
                } else if (result > 39) {
                    $('.counter').html("very good")
                } else if ( result > 19) {
                    $('.counter').html("good")
                } else if (result < -39) {
                    $('.counter').html("very sad")
                } else if (result < -19) {
                    $('.counter').html("sad")
                } else {
                    $('.counter').html("neutral")
                }
                
                
            }
        })

        
        


    });//function end
});//ready end