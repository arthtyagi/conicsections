background(255, 0, 0);
stroke(255, 255, 255);
ellipse(200,200,3,3);
translate(-200,-200);
resetMatrix();
rotate(0);


var increment = 10;


for(var shift = 0; shift <=400; shift=shift+increment) {

    line(0 + shift, 0, 400, 0 + shift); }


for(var shift = 0; shift <=400; shift=shift+increment) {

    line(0, 0 + shift, 0 + shift,400); }


for(var shift = 0; shift <=400; shift=shift+increment) {

    line(400, 400 - shift, 0 + shift,400); }


for(var shift = 80; shift <=400; shift=shift+increment) {

    line(400 - shift, 0, 0 , 0 + shift); }



