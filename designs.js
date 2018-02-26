// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
  //creates the grid based on user input
  $('#sizePicker').submit(function makeGrid(evt) {
    evt.preventDefault();
    $('#pixel_canvas').empty();
    var row = $('#input_height').val();
    var cell = $('#input_width').val();
    var table = $('#pixel_canvas');
    for(var r = 0; r < row; r++){
      table.append("<tr></tr>").css('box-shadow',"0 0 5px 2px black")
      for(var c = 0; c < cell; c++){
        table.children().last().append('<td></td>');
      }
    }
   });
  
   //function to use selected color and apply to cell
   //click to begin color
   $('#pixel_canvas').on('click','td', function(){
      var color = $('#colorPicker').val();
      $('#pixel_canvas').on('mouseover','td', function(){
        $(this).css('background-color', color);
      //click to end color
      $('#pixel_canvas').on('click', function(){
        $(this).off('mouseover', 'td');
        });
      });  
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