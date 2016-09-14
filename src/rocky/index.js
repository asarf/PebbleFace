var rocky = require('rocky');

rocky.on('draw', function(event)
{
  //get the CanvasRenderingContext2D object
  var ctx       = event.context;
      // clear the screen
      ctx.clearRect(0,0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  //determine the width and height of the display
  var w         = ctx.canvas.unobstructedWidth;
  var h         = ctx.canvas.unobstructedHeight;
  
  //current date/time
  var d         = new Date();
  
    //set the text color
      ctx.fillstyle = 'white';
    //center the align the text
      ctx.textAlign = 'center';
  
    // Display the time, in the middle of the screen
    ctx.fillText(d.toLocaleTimeString(), w / 2, h / 2, w);
});

rocky.on('minutechange', function(event) 
{
  // Display a message in the system logs
  console.log("Another minute with your Pebble!");

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});