var STONES = {};

function initStones(){


  var mat = new THREE.MeshNormalMaterial();

  var geometry = new THREE.Geometry();

  var placingMatrix = [];
  placingMatrix.push([[0,0,0],[0,0,0],[0,0,0]]);

  place(placingMatrix, 0,0,0,0);
  place(placingMatrix, 0,0,0,1);
  place(placingMatrix, 0,0,0,2);
  place(placingMatrix, 0,0,0,3);
  place(placingMatrix, 0,0,0,4);
  place(placingMatrix, 0,0,0,5);
  place(placingMatrix, 10,0,0,0);
  place(placingMatrix, -10,0,0,1);
  place(placingMatrix, 0,10,0,2);
  place(placingMatrix, 0,-10,0,3);
  place(placingMatrix, 0,0,10,4);
  place(placingMatrix, 0,0,-10,5);

  for( var i=0; i < placingMatrix.length; i++ ){

    var mesh = new THREE.Mesh( GEOS[ 'feather1' ] , mat );

    var p = placingMatrix[i][0];
    var s = placingMatrix[i][1];
    var r = placingMatrix[i][2];

    mesh.position.set( p[0] , p[1] , p[2] );
    mesh.scale.set( 5, 5, 5 );//s[0] *5, s[1] * 5 , s[2] *5);
    mesh.rotation.x = r[0]//,r[1],r[2] );
    mesh.rotation.y = r[1]//,r[1],r[2] );
    mesh.rotation.z = r[2]//,r[1],r[2] );

    mesh.updateMatrix();
    geometry.merge( GEOS[ 'feather1' ] , mesh.matrix );

  }

  geometry.computeFaceNormals();
  geometry.computeVertexNormals();


  STONES.level3 = geometry; 





  var geometry = new THREE.Geometry();

  var placingMatrix = [];
  placingMatrix.push([[0,0,0],[0,0,0],[0,0,0]]);

  place(placingMatrix, 0,0,0,0);
  place(placingMatrix, 0,0,0,1);
  place(placingMatrix, 0,0,0,2);
  place(placingMatrix, 0,0,0,3);
  place(placingMatrix, 0,0,0,4);
  place(placingMatrix, 0,0,0,5);
  place(placingMatrix, 10,0,0,0);
  place(placingMatrix, -10,0,0,1);
  place(placingMatrix, 0,10,0,2);
  place(placingMatrix, 0,-10,0,3);
  place(placingMatrix, 0,0,10,4);
  place(placingMatrix, 0,0,-10,5);

  for( var i=0; i < placingMatrix.length; i++ ){

    var mesh = new THREE.Mesh( GEOS[ 'mandala3' ] , mat );

    var p = placingMatrix[i][0];
    var s = placingMatrix[i][1];
    var r = placingMatrix[i][2];

    mesh.position.set( p[0] , p[1] , p[2] );
    mesh.scale.set( 5, 5, 5 );//s[0] *5, s[1] * 5 , s[2] *5);
    mesh.rotation.x = r[0]//,r[1],r[2] );
    mesh.rotation.y = r[1]//,r[1],r[2] );
    mesh.rotation.z = r[2]//,r[1],r[2] );

    mesh.updateMatrix();
    geometry.merge( GEOS[ 'mandala3' ] , mesh.matrix );

  }

  geometry.computeFaceNormals();
  geometry.computeVertexNormals();


  STONES.level7 = geometry; 



}