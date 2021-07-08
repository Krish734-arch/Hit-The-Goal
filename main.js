var canvas = new fabric.Canvas("golf");

ball_x = 0;
ball_y = 0;

hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToheight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);

new_image();
}

function new_image()
 { 
	fabric.Image.fromURL("ball.png",function(Img){
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToheight(50);
	ball_obj.set({
		top:ball_y,
		left:ball_x
	});
		
	canvas.add(ball_obj);

   });
 }
	
  if((ball_x==hole_x)&&(ball_y==hole_y)) {
	canvas.remove(ball_obj);
	
	document.getElementById("hd3").innerHTML = "You have Hit The Goal!!";
	document.getElementById("golf").style.borderColor="red";} 
  





		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
		function up(){
			if (ball_y>=0 )
			{
				ball_y= ball_y-block_image_height;
				console.log("block_image_height=" +block_image_height);
				console.log("When up is pressed,x="+ball_x,"Y ="+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
	 
		}
	 
		function down(){
		 if (ball_y<=500 )
		 {
			 ball_y= ball_y+block_image_height;
			 console.log("block_image_height=" + block_image_height);
			 console.log("When down is pressed,x="+ball_x,"Y ="+ball_y);
			 canvas.remove(ball_object);
			 new_image();
		 }
	 }
	 
	 function left(){
		 if (ball_x>0 )
		 {
			 ball_x= ball_x-block_image_height;
			 console.log("block_image_height=" +block_image_height);
			 console.log("When left is pressed,x="+ball_x,"Y ="+ball_y);
			 canvas.remove(ball_object);
			 new_image();
		 }
	 }
	 
	 function right(){
		 if (ball_x<=850 )
		 {
			 ball_x= ball_x+block_image_height;
			 console.log("block_image_height=" +block_image_height);
			 console.log("When right is pressed,x="+ball_x,"Y ="+ball_y);
			 canvas.remove(ball_object);
			 new_image();
		 }
	 }

	 window.addEventListener("keydown" , my_keydown);
	 my_keydown(e);
		
	

