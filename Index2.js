document.getElementById('m').style.visibility ="hidden" ;
document.getElementById('m3').style.visibility ="hidden" ;
document.getElementById('m4').style.visibility ="hidden" ;
document.getElementById('color').style.visibility ="hidden"
document.getElementById('daynight').style.visibility ="hidden";
  function menu() {
    document.getElementById('m').style.visibility = "visible ";
    document.getElementById('m2').style.visibility ="hidden" ;
    document.getElementById('m3').style.visibility ="visible" ;
    document.getElementById('m4').style.visibility ="visible" ;
    document.getElementById('color').style.visibility ="visible" ;
    document.getElementById('daynight').style.visibility ="visible";
  }
    function menu2() {
      document.getElementById('m').style.visibility = "hidden";
      document.getElementById('m2').style.visibility = "visible";
      document.getElementById('m3').style.visibility = "hidden";
      document.getElementById('m4').style.visibility ="hidden" ;
      document.getElementById('color').style.visibility ="hidden" ;
      document.getElementById('daynight').style.visibility ="hidden";
    }
    color.select();


let gttsv =0;
let mam =0;
let zz=0;
let xk=0;
 
/*onload =  function gtts() {
	setTimeout(doSomething2, 800);
	function doSomething2() {
console.log('game time tick speed +1');
gttsv += 1;

          console.log(gttsv);
	setTimeout(800);
	return gtts();
}}
*/

onload = function gt() {
	setTimeout(doSomething3, 300);
	function doSomething3() {
//Quicker reset kp engine
mam+=1;
if(xk===1){
gttsv+=1;
}
          console.log('load2.='+mam+gttsv);
if (mam>2) {
  mam=0;
  xt=0;
  yt=0;
}
if(xk===1 && gttsv ===290) {
  var audioFile = new Audio('./Sonarmylove.wav');
  audioFile.play()
  gttsv = 0;
  
}
//music

 

	setTimeout(300  );
	return gt();
}}
 function myFunction2(event)  {
   zz += 2;
   if (zz > 1) { 
   xk=1;
     zz -= 400;
     var audioFile = new Audio('./Sonarmylove.wav');
     audioFile.play()
     
     
   
   
   }
   }
     
       
 
 function hidedb(){
   document.getElementById('console').style.visibility ="hidden" ;
   renderer();
 }
 
 if (camera.position.y < -9) {
  camera.position.y += 20;
}


var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();
renderer();
 color.select();
 
