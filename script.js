$(document).ready(function () {
    // default state of hint button content 
    $(".hide").hide();

    // show/hide hint content
    $('.btn').click(function () {
        switch (true) {
            case $(this).hasClass('aaa'):
                $(".hint1").toggle();
                break;
            case $(this).hasClass('bbb'):
                $(".hint2").toggle();
                break;
            case $(this).hasClass('ansbtn'):
                $(".answers").toggle();
        }
    })

    // users can't change the checkboxes on answer table but can change their own answers
    $('.answer-table input[type="checkbox"]').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });



    // THIS **************************
    // color selected rows when box checked
    // $('.checkbox-table input[type="checkbox"]').click(function () {
    //   if ($('input[type="checkbox"]').prop("checked")) {

    //     var className = $(':input').attr('class');
    //     console.log(className)
    //     console.log($('.item1'))
    //     switch (className) {
    //       case $('.item1'):
    //       $(".row1").addClass("highlight");
    //       console.log('this is happening');
    //       break;

    //     case $('.item2'):
    //       $(".row2").addClass("highlight");
    //       console.log('this is happening');
    //       break;

    //     case $('.item3'):
    //       $(".row3").addClass("highlight");
    //       console.log('this is happening');
    //       break;






    //     }






    //   } else if ($(".checkbox").prop("checked", false)) {
    //     $("tr td").removeClass("highlight");
    //     console.log("remove highlight")
    //     console.log(className)

    //   }


    // })



    // $('.checkbox-table input[type="checkbox"]').click(function () {
    //   if ($(".checkbox").prop("checked")) {
    //     $(this).parent().parent().find('td').addClass("highlight");
    //     console.log('this is happening');

    //   } else if ($(".checkbox").prop("checked", false)) {
    //     $("tr td").removeClass("highlight");
    //     console.log("no its happening here")
    //   }





    // $('.checkbox-table input[type="checkbox"]').click(function () {
    //   if ($(".checkbox").prop("checked")) {
    //     $(".row1").css("background-color", "#eee");
    //     console.log('this is happening');

    //   } else if ($(".checkbox").prop("checked", false)) {
    //     $("tr td").css("background-color", "#e1f2fb");
    //     console.log("no its happening here")
    //   }


}); // end of doc ready 
