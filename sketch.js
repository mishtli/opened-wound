let doris;
let vectors=[];
let names=[];
let idx=0;
//animate text every frame
let xoff=60;
let nameIndex = 0;


function preload(){
 doris=loadImage('doris.jpg'); 
}

function setup() {
  frameRate(40);
  createCanvas(600, 600);

 names=loadStrings("names.txt") 
  
  
//define path
  let x=width-200;
  for(var i=0; i<height; i++){
  vectors.push(createVector(x,i));  
  if(int(i/xoff)%4==0){
    x++;
   }else{
    x--;
  }
 }
}

function draw() {
  background(0);
  textSize(20);
  fill(252,251,229);
  stroke(252,250,196);
  strokeWeight(2); 
  image(doris,0,0,);
  //print(names);
  //let currentName=" AnguilaBallenaArmadillo";
  //let randomNames=0;
  
 //con esto abajo se ajusto: cada 45% de nombres se ajusta la cantidad/tamano del nombre. 
  if(frameCount % 45 == 0){
    nameIndex = int(random(0,names.length));
  }
  
  let currentName = names[nameIndex];
  
  for (let i=0; i<currentName.length;i++){

  
 text(currentName[i],vectors[(idx+25*i)%width].x,vectors[(idx+25*i)%height].y);
    
    
    
    
    
    
    
    
    
    
    
    //print(names);
 //var newIdx=idx+100;
    
 //for(var i=0;i<str.length;i++){   
  
  //var xPos=vectors[(newIdx+10*i)%width].x+50;
     //var yPos=vectors[(newIdx+10*i)%height].y+10;
    
    //text(str[i],xPos,yPos);
 }  
// }

 idx++;
  if(idx>=vectors.length){
    idx=0
  }
}
  
  



