
      /*
      
      add new color and more realistic floor
      add more lands and add a most (nie wiem nie jestem fobry w angielski)
      add new light shadow
      learn more GLSL for unity shaders
     
      
      */
      ab=1;
      
      
      lightintensity =(  2 ) ;
      




      
      // Set Scene
      var scene = new THREE.Scene();
      scene.background = new THREE.Color('#0F1E27'); // black background
      // Set Camera
      var camera = new THREE.PerspectiveCamera( 100,window.innerWidth / window.innerHeight, 0.1, 1000 , 1000);
      camera.position.set(0, 0, 
      3);
      
      

      
     var renderer = new THREE.WebGLRenderer();
     renderer.setSize(window.innerWidth, window.innerHeight);
     document.body.appendChild(renderer.domElement);
    
    
      const loader = new THREE.CubeTextureLoader();
      const texture = loader.load([
        //right
        './Daylight Box_Right.bmp',
        //left
        './Daylight Box_Left.bmp',
        //top
'./Daylight Box_Top.bmp',
//bottom 
'./Daylight Box_Bottom.bmp',
//font
'./Daylight Box_Front.bmp',
//back
'./Daylight Box_Back.bmp ',



      ]);
      
      scene.background = texture;
    }
    const player = new THREE.Mesh(coin,gold);
    player.position.z -= 3;
    scene.add(player)
    const facing = new THREE.Object3D();
    facing.position.z += 6;
    scene.add(facing);
    
    /*var v = new THREE.Vector3 (0,0,1
    );
          v.x = 0;
                v.y = 0
                v.z = 2
    camera.lookAt(v);
    camera.add(v);*/
    
    const loader = new THREE.TextureLoader();
        const loader2 = new THREE.TextureLoader();
        
    var floortexture = loader.load('./pixil-frame-0.png', function(texture) {
    
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.offset.set(0, 0);
      texture.repeat.set(20, 20);

    });
var leavestexture = loader.load('./leaves.png', function(texture2) {

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.offset.set(0, 0);
  texture2.repeat.set(6, 6);

});
   var background = scene.background ;
      
      
      
 // kolory
      
 // kolory
var material2 = new THREE.MeshPhongMaterial({
  
   color: 0xfffff,
     specular: 0xffffff,
     shininess: 10,
map: loader.load('/textures/pixil-frame-0 (3).png'),
     reflectivity: 0.1
   
 });
 
 
 var material3 = new THREE.MeshStandardMaterial({
   color: '#0E0500', 
   
 });
 
 
 
      var material = new THREE.MeshStandardMaterial({
        shininess: 7,
        antialias:true, 
        map: floortexture, 
        
          /*color: '#234700', 
         flatShading:true, 
         metalness : 0.2 ,
         roughness:0.15, 
         envMap:0.076, */
      });
      
      
      
      var treelogmaterial= new THREE.MeshStandardMaterial({
        color: '#211300'
      });
      var leavematerial = new THREE.MeshStandardMaterial({
        map: leavestexture,
          transparent: true,
        metalness : 0.5 ,
        fog :true, 
        transparent: true,
          
        reflectivity: 0.1, 
      });
var gold = new THREE.MeshPhongMaterial({
  
        reflectivity: 98, 
        color: 0x00010BBF,
        transparent:  true, 
        opacity: 0.6
      });
var snu = new THREE.MeshNormalMaterial({


  color:'EFFF00'
  
  
});
      
 //objekty
 var brg = new THREE.BoxGeometry(160,3,10);
            var an = new THREE.BoxGeometry(2000,100,2000);
            
      var floor = new THREE.BoxGeometry(100,10,100);
      var m1 = new THREE.BoxGeometry(100,50,100);
      var floormap2 = new THREE.BoxGeometry(100,100,100);
      var geometry = new THREE.BoxGeometry(1, 1,1);
      var treelog = new THREE.BoxGeometry(1, 8,1);
      var coin = new THREE.BoxGeometry(2,2,2);
      var leaves = new THREE.SphereGeometry(5,5,5);
            var sunobj = new THREE.SphereGeometry(40,40,40);
     var ub = new THREE.BoxGeometry(5,12,5);
     var o2obj = new THREE.SphereGeometry(500,500,500);
     var box2 = new THREE.BoxGeometry(1,2,1);
          //
   
          var ocean = new THREE.Mesh(an, gold);

var most = new THREE.Mesh(brg, treelogmaterial);  
          var cube2 = new THREE.Mesh(ub, material2);
      var cube = new THREE.Mesh(geometry, material2);
			var floor= new THREE.Mesh(floor, material);
				var floormap2 = new THREE.Mesh(floormap2, material);
	var map3 = new THREE.Mesh(m1, material);
			var tree = new THREE.Mesh(treelog, treelogmaterial);
						var tree3 = new THREE.Mesh(treelog, treelogmaterial);
		var leaf = new THREE.Mesh(leaves, leavematerial ) ;
									var tree2 = new THREE.Mesh(treelog, treelogmaterial);
									var tree4 = new THREE.Mesh(treelog, treelogmaterial);
	var leaf2 = new THREE.Mesh(leaves, leavematerial ) ;
	var leaf3 = new THREE.Mesh(leaves, leavematerial ) ;
	var leaf4 = new THREE.Mesh(leaves, leavematerial ) ;
	var coin1 = new THREE.Mesh(coin, gold ) ;
		var sun = new THREE.Mesh(sunobj, snu ) ;
		var obj1 = new THREE.Mesh(o2obj, snu );
		
//obtut objektu	

     /* cube.rotation.x = 22.5;
      cube.rotation.y = 45;*/
      
//pokaż objekt
scene.add(obj1);
scene.add(map3);
scene.add(most);
scene.add(ocean);





     // camera.add(player);
      
    //  facing.player.position.z = 8;
      
      
      scene.add(sun);
            scene.add(coin1);
			scene.add(floor);
						scene.add(floormap2);
			scene.add(tree);
			scene.add(leaf);
			scene.add(tree2);
scene.add(leaf2);
			scene.add(tree4);
			scene.add(leaf4);
			scene.add(leaf3);
			scene.add(tree3);
			//objekty pozycja 
			ocean.position.y -=60
			cube2.position.z -= 120
cube2.position.x -= 50
			floor.position.y -= 8
			floormap2.position.y -= 53
			floormap2.position.z -= 110
			 tree.position.z -= 10
			 sun.position.z += 400
			sun.position.y += 250
			obj1.position.z += 1200
			obj1.position.y += 1250
		
			obj1.position.x += 100
						 tree.position.x -= 10
		 leaf.position.z -= 10
					 leaf.position.x -= 10
					 leaf.position.y += 5
			tree2.position.y -= 2
						tree2.position.z -= 6
			leaf2.position.z -= 6
			leaf2.position.y += 5
			leaf3.position.y += 5
			leaf3.position.x += 10
			tree3.position.x += 10
			leaf3.position.z -= 10
			coin1.position.z -= 120
						tree3.position.z -= 10
						map3.position.x -= 200
						most.position.x -= 80
						most.rotation.z += 6
						map3.rotation.y -= 20
									tree4.position.x += 20
									leaf4.position.z -= 100
																		leaf4.position.x += 20
																											leaf4.position.y += 5
									tree4.position.z -= 100
      // Directional Light
      var directionalLight = new THREE.DirectionalLight(0xffffff, lightintensity );
       lightintensity = 2;
       
      directionalLight.position.x = 0;
      directionalLight.position.y = 60;
      directionalLight.position.z = 50;
      
      directionalLight.shadowMap = THREE.PCFSoftShadowMap;
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 512; // default
      directionalLight.shadow.mapSize.height = 512; // default
      directionalLight.shadow.camera.near = 0.5; // default
 
      /*  var directionalLight2 = new THREE.DirectionalLight(0xffffff, lightintensity);
         lightintensity = 2;
         directionalLight2.position.x = 0;
         directionalLight2.position.y = 30;
         directionalLight2.position.z += 50 ;
         */
         
     scene.add(directionalLight);
     /*
const controls = new PointerLockControls(camera, document.body);

// add event listener to show/hide a UI (e.g. the game's menu)



/*
.    +-----------+
.    |.controls  |
.    |.          |
.    +-----------+
*/

/*
controls.addEventListener('lock', function() {

  menu.style.display = 'none';

});

controls.addEventListener('unlock', function() {

  menu.style.display = 'block';

});











//pętlowanie
//facing funkcja game engine e0.1
/*player.add(camera);
player.add(facing);
*/
scene.add(camera);
      // Show the scene
      renderer.render(scene, camera);
      var render = function() {
       // camera.lookAt(facing.position.x, facing.position.y ,facing.position.z );
        player.position.x = camera.position.x;
        player.position.y = camera.position.y ;
        player.position.z = camera.position.z ;
        //facing
      
        player.position.x = facing.position.x +2
       player.position.y = facing.position.y +2
 player.position.z = facing.position.z +2
			requestAnimationFrame(render);
			
			
			cube.rotation.x -= 0.005;
		cube.rotation.y += 0.003;
		background.rotation.y += 0.0008;

						
			
			
			renderer.render(scene, camera);


};	

function myFunction(event) {
  
    
 xt = event.touches[0].clientX; 
 yt = event.touches[0].clientY;
 
     TO=1;
     
     if (xt > 800) {
       camera.rotation.y -= xt / 30000;
     }
     if (xt < 1000) {
       camera.rotation.y += xt / 30000;
     }
     
     
     
     if (yt < 220) {
       camera.rotation.x += yt / 8000;
       
     }
     if (yt > 320) {
       camera.rotation.x -= yt / 25000;
     }
       
       
       
  document.getElementById("console").innerHTML = xt + ", " + yt +" .........Popelek "+ '<br>version  a1.2.01 relase (kliknij ekran jerzeli chcesz muzuke'+ '<br><br>    [X] '+camera.position.x+`[Y] `+camera.position.y+'[Z] ' + camera.position.z +'<br>Copyright© 2023 readme.md' +'<br><br><a   href="https://github.com/Kashumy" >[github] </a> - github krystiana';
  
}

function go(event) {
  
     camera.position.z -= 0.3;
player.position.z -= 0.3;
facing.position.z -= 0.3;
}
function back(event) {
  
     camera.position.z += 0.3;
  player.position.z += 0.3;
  facing.position.z += 0.3;
}
function up(event) {
  camera.position.y  += 0.4 ;
  player.position.y  += 0.4 ;
  facing.position.y += 0.4;
}

function left(event) {
  camera.position.x  += 0.3 ;
  player.position.x  += 0.3 ;
  facing.position.x += 0.3;
}

function right(event) {
  camera.position.x  -= 0.3 ;
  player.position.x  -= 0.3 ;
  facing.position.x -= 0.3;
}
function down(event) {
  camera.position.y -= 0.4;
  player.position.y  -= 0.4 ;
  facing.position.y -= 0.4;
}

render();
render();




window.addEventListener('touchstart', function onFirstTouch() {
  // we could use a class
  document.body.classList.add('user-is-touching');

  // or set some global variable
  window.USER_IS_TOUCHING = true;

  // or set your app's state however you normally would
  myFrameworkOfChoice.dispatchEvent('USER_IS_TOUCHING', true);

  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, true);
}, false);
 
 
