canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1w = 120;
car1h = 70;
car1_imgname = "car1.png";
car1x = 10;
car1y = 10;

car2w = 120;
car2h = 70;
car2_imgname = "car2.png";
car2x = 10;
car2y = 90;
background_imgname = "racing.jpg";

function add(){
   car1_img=new Image();
    car1_img.onload=draw_car1_img;
    car1_img.src=("carPink.png");

    car2_img=new Image();
    car2_img.onload=draw_car2_img;
    car2_img.src=("carPurple.png");

}

function draw_car1_img(){
    ctx.drawImage(car1_img,car1x,car1y,car1w,car1h);
}

function draw_car2_img(){
    ctx.drawImage(car2_img,car2x,car2y,car2w,car2h);
}

window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed=='38'){
         car1_up();
         console.log("up arrow key");
     }

     if(keyPressed=='40'){
         car1_down();
         console.log("down arrow key");
     }

     if(keyPressed=='37'){
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed=='39'){
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed=='87'){
        car2_up();
        console.log("kew W");
    }

    if(keyPressed=='83'){
        car2_down();
        console.log("key S");
    }

    if(keyPressed=='65'){
        car2_left();
        console.log("key A");
    }

    if(keyPressed=='68'){
        car2_right();
        console.log("key D");
    }
}