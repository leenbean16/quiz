$(document).ready(function() {

    var questions = $('<button>');
    var startButton = $('<button>');
    var quiz = ' ';
    var question = ' ';
    var winner = $('#winner').hide();
    var h3 = $('h3').hide();
    var jumbo = $('#jumbo').hide();

    $('jumbo').hide();
    $('questions').hide();
    $('.questionArea').hide();
    $('button#a').hide();
    $('button#b').hide();
    $('button#c').hide();
    $('button#d').hide();
    console.log("Hi Derek!");

    $(".startButton").click(function quiz() {
        $(this).hide();
        $('#general').hide();
        console.log("There are 4 options...");
    });


    $('.startButton').click(function show() {
        $(jumbo).show();
        $('.questionArea').show();
        $('button#a').show();
        $('button#b').show();
        $('button#c').show();
        $('button#d').show();
        $('.questionArea').html("Would you say 'yes' if I were to ask you out on a date?");
        $('#a').html("a. yes");
        $('#b').html("b. A");
        $('#c').html("c. A and B");
        $('#d').html("d. All of the above.");
    });


    $(".col-lg-6").click(function congrats() {
        $(winner).show();
        $(h3).show();
    });

    $(".col-lg-6").click(function congrats() {
        $(jumbo).hide();
        console.log("But not really :P");
        console.log("See you in class!");
    });
});
