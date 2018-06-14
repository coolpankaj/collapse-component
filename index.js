$(document).ready(() => {
    $("#box-first").hide();
    $("#box-second").hide();
    $("#box-third").hide();
    $(".box-1").click(function () {
        $("#box-first").slideToggle("slow");
    });
    $(".box-2").click(function () {
        $("#box-second").slideToggle("slow");
    });
    $(".box-3").click(function () {
        $("#box-third").slideToggle("slow");
    });
});
