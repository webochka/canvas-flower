
var canvas = document.getElementById('canvas');
var options = document.getElementById('options');
var {option1,option2, option3, option4} = options;

var ctx = canvas.getContext('2d');

var t = 0;
var radius = 100;
var xCenter = 250;
var yCenter = 250;
var n = 400;

function path(t) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  for (var i = 0; i<n; i++) {
    var x = xCenter + (radius + option3.value*Math.sin(t/500 + 26*i*Math.PI/n))*Math.sin(i*option1.value*Math.PI/n);
    var y = yCenter + (radius + option3.value*Math.sin(t/500 + 26*i*Math.PI/n))*Math.cos(i*option1.value*Math.PI/n);
    
    ctx.lineTo(x,y); 
  }

  ctx.closePath(); 
  ctx.lineWidth = 2;
  ctx.strokeStyle= '#00ff7f';
  ctx.stroke();

  
  ctx.beginPath();

  for (var i = 0; i<n; i++) {
    var x = xCenter + (radius/2 + option4.value*Math.sin(t/500 + 26*i*Math.PI/n))*Math.sin(i*option2.value*Math.PI/n);
    var y = yCenter + (radius/2 + option4.value*Math.sin(t/500 + 26*i*Math.PI/n))*Math.cos(i*option2.value*Math.PI/n); 

    ctx.lineTo(x,y);

  }

  ctx.closePath(); 
  ctx.strokeStyle= '#FF1493';
  ctx.stroke();

  window.requestAnimationFrame(path);

}

path(t);




