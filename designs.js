/ Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
  //creates the grid based on user input
  $('#sizePicker').submit(function makeGrid(evt) {
    evt.preventDefault();
    //Clear previous grid
    $('#pixel_canvas').empty();
    //Don't begin dragging color automatically
    $('#pixel_canvas').removeClass('colorMe')
    let row = $('#input_height').val();
    let cell = $('#input_width').val();
    const table = $('#pixel_canvas');
    //Add rows and cells
    for(let r = 0; r < row; r++){
      table.append("<tr></tr>").css('box-shadow',"0 0 5px 2px black")
      for(let c = 0; c < cell; c++){
        table.children().last().append('<td></td>');
      }
    }
   });
  
   //function to use selected color and apply to cell
   //click to toggle coloring ability
   $('#pixel_canvas').on('click', function(){
      $(this).toggleClass('colorMe');
      let color = $('#colorPicker').val();
      if ($(this).hasClass('colorMe') === true) {
        $('#pixel_canvas').on('mouseover','td', function(){
            $(this).css('background-color', color);
        });
      } else {
          $(this).off('mouseover', 'td');
      };
    });
  
   //function to clear a cell on double click
   $("#pixel_canvas").on('dblclick','td', function(){
     $(this).css('background-color', 'white')
   });
  
   //function to clear all cells of color
   $('button').on('click', function(){
     $('td').css('background-color', 'white')
   });
});