
var canvas = document.getElementById('canvas');
var options = document.getElementById('options');
var {option1, option2, option3, option4} = options;

var ctx = canvas.getContext('2d');

var t = 0;
var xCenter = 250;
var yCenter = 250;
var n = 400;

var strokeStyle1= '#00ff7f';
var strokeStyle2 = '#FF1493';

function figure(val1, val2, radius, strokeStyle,t) {

  ctx.beginPath();

  for (var i = 0; i<n; i++) {
    var x = xCenter + (radius + val1*Math.sin(t/500 + 26*i*Math.PI/n))*Math.sin(i*val2*Math.PI/n);
    var y = yCenter + (radius + val1*Math.sin(t/500 + 26*i*Math.PI/n))*Math.cos(i*val2*Math.PI/n);
    
    ctx.lineTo(x,y); 
    
  }

  ctx.closePath(); 
  ctx.lineWidth = 2;
  ctx.strokeStyle= strokeStyle;
  ctx.stroke();

}

function draw(t) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  figure(option3.value, option1.value, 100, strokeStyle1,t);
  figure(option4.value, option2.value, 50, strokeStyle2,t);

  window.requestAnimationFrame(draw);

}

draw(t);


