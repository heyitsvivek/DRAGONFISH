var MATS = {}

function initMaterials(){

  MATS.phong    = new THREE.MeshPhongMaterial();
  MATS.basic    = new THREE.MeshBasicMaterial();
 
  MATS.basicWF    = new THREE.MeshBasicMaterial();
  MATS.basicWF.wireframe = true;
  
  MATS.lambert  = new THREE.MeshLambertMaterial();
  MATS.normal  = new THREE.MeshNormalMaterial();



  MATS.textures = {};
  MATS.textures.normals = {};

  MATS.textures.normals.moss = THREE.ImageUtils.loadTexture( 'img/normals/moss_normal_map.jpg' );


  MATS.textures.normals.moss.wrapS = THREE.RepeatWrapping; 
  MATS.textures.normals.moss.wrapT = THREE.RepeatWrapping; 

  var color1 = new THREE.Vector3( 3. , .4 , 1. );
  var color2 = new THREE.Vector3( .5 , 1. , 5. );
  var color3 = new THREE.Vector3( 0. , 3 , 0. );
  var color4 = new THREE.Vector3( 1. , 1. , 4. );

  var uniforms = {

    lightPos: { type:"v3" , value: new THREE.Vector3(1000,0,0)},
    time:time,
    tNormal:{ type:"t" , value: MATS.textures.normals.moss },
    t_audio:{ type:"t" , value: audioController.texture },
    texScale:{type:"f" , value:.005},
    normalScale:{type:"f" , value:.5},
    color1:{ type:"v3" , value: color1 },
    color2:{ type:"v3" , value: color2 },
    color3:{ type:"v3" , value: color3 },
    color4:{ type:"v3" , value: color4 },

  }



  vertexShader   = shaders.vertexShaders.planet;
  fragmentShader = shaders.fragmentShaders.planet;

  MATS.planet = new THREE.ShaderMaterial({

    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader

  });


  var color1 = new THREE.Vector3( 3. , .4 , 1. );
  var color2 = new THREE.Vector3( .5 , 1. , 5. );
  var color3 = new THREE.Vector3( 0. , 3 , 0. );
  var color4 = new THREE.Vector3( 1. , 1. , 4. );

  var uniforms = {

    lightPos: { type:"v3" , value: new THREE.Vector3(1000,0,0)},
    time:time,
    tNormal:{ type:"t" , value: MATS.textures.normals.moss },
    t_audio:{ type:"t" , value: audioController.texture },
    texScale:{type:"f" , value:.005},
    normalScale:{type:"f" , value:.5},
    color1:{ type:"v3" , value: color1 },
    color2:{ type:"v3" , value: color2 },
    color3:{ type:"v3" , value: color3 },
    color4:{ type:"v3" , value: color4 },

  }



  vertexShader   = shaders.vertexShaders.planetDisplace;
  fragmentShader = shaders.fragmentShaders.planet;

  MATS.planetDisplace = new THREE.ShaderMaterial({

    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader

  });


    var color1 = new THREE.Vector3( 3. , .4 , 1. );
  var color2 = new THREE.Vector3( .5 , 1. , 5. );
  var color3 = new THREE.Vector3( 0. , 3 , 0. );
  var color4 = new THREE.Vector3( 1. , 1. , 4. );

  var uniforms = {

    time:time,
    t_audio:{ type:"t" , value: audioController.texture },
    to:{ type:"v3" , value: new THREE.Vector3() },
    from:{ type:"v3" , value: new THREE.Vector3() },
    color:{ type:"v3", value: new THREE.Vector3(1,1,1)}

  }



  vertexShader   = shaders.vertexShaders.clueLine;
  fragmentShader = shaders.fragmentShaders.clueLine;


   MATS.clueLine = new THREE.ShaderMaterial({

    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    linewidth:10,
    blending:THREE.AdditiveBlending,
    transparent:true

  });


  

}
