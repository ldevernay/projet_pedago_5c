

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
                // console.log($(this).find('.food'));
            }


        })

        $("#table").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass('ui-state-highlight')
                    // .find('.food')
                ui.draggable.css("color", "blue")


                if (ui.draggable.is(":not(.foodTable)")) {
                    console.log('dont have class Table');
                    result -= Number(ui.draggable.attr('data-score'));
                }

                ui.draggable.removeClass('foodAssiette')
                ui.draggable.addClass('foodTable')

                console.log('result = ' + result);


                // console.log($(this).find('.food'));
            }


        })



    });


});