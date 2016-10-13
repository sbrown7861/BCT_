/**
 * Created by skylerbrown on 8/23/15.
 */

$("document").ready(function() {

    $(".modalClick").on('click', function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeIn()
            .find("#modal")
            .fadeIn();


    });


    /*Modal fade out*/

    $(".close").on("click", function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeOut()
            .find("#modal")
            .fadeOut();


    });

});