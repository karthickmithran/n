x=0;
y=0;

draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "drawing"+content;
if (content = "circle"){
x=Math.floor(Math.random()*900);
y=Math.floor(Math.random()*900);
document.getElementById("status").innerHTML = "drawing circle";
draw_circle = "set";
}

if (content = "rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*900);
    document.getElementById("status").innerHTML = "drawing rectangle";
    draw_rectangle = "set";
    }
}
function setup (){
    canvas = createCanvas(900, 600);
}

function draw (){
    if(draw_circle="set"){
radius = Math.floor(Math.random()*100);
circle (x,y,radius);
document.getElementById("status").innerHTML = "circle drawn by karthick";
draw_circle = "";
    }
    
 if(draw_rectangle="set"){
    rect (x,y,70,50);
    document.getElementById("status").innerHTML = "rectangle drawn by karthick";
    draw_rectangle = "";
        }
}
