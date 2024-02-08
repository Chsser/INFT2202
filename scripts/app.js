/*
change the class of each box, reorder the colours
get the boxes with jquery
loop through each box
get the class of the current box
if the class is red make it blue
if the class is blue make it green
if the class is green make it red
create a button to open the modal
get the button with jquery 
add a click event listener to the button
when the button is clicked, show the modal
*/


let boxes = $('.box');


boxes.each(function(index, box){

    let currentClass = $(box).attr('class');

    if (currentClass === 'box red-box'){
        $(box).attr('class', 'blue-box');
    }

    else if (currentClass === 'box blue-box'){
        $(box).attr('class', 'green-box');
    }

    else if (currentClass === 'box green-box'){
        $(box).attr('class', 'red-box');
    }

});


let button = $('<button>Open Modal</button>');

$('#content').append(button);

button.on('click', function(){
    $('.lightbox').show();
});