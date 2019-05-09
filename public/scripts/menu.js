$(function(){
    $("#home").show();
    $("#index").hide();
    $("#game-information").hide();
    $("#contact").hide();
    $("#chat").hide();

    $("#home-btn").click(function(){
        $("#home").hide();
        $("#index").show();
    });

    $("#menu-btn").click(function () {
        $("#home").show();
        $("#index").hide();
    });

    $("#gameinfo-btn").click(function () {
        $("#home").hide();
        $("#game-information").show();
    });
  
    $("#gameinfohome-btn").click(function () {
        $("#home").show();
        $("#game-information").hide();
    });

    $("#contact-btn").click(function () {
        $("#home").hide();
        $("#contact").show();
    });

    $("#contactohome-btn").click(function () {
        $("#home").show();
        $("#contact").hide();
    });

    $("#chathome-btn").click(function () {
        $("#home").show();
        $("#chat").hide();
    });

    $("#chat-btn").click(function () {
        $("#chat").show();
        $("#home").hide();
    });

    $(".chat-btn").click(function(){
        gameid =  $(this).data("gameid");
        $("#game-information").hide();
         cleanupUi();
         startDatabaseQueries();
        $("#chat").show();
    })
})
