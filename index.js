
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let tela = 1
c.imageSmoothingEnabled = false;


let images = []
images[0] = new Image()
images[0].src = "sprites/kidgoku.png"
 // chars = [[name,image id,base hp,base str,base def,base speed,(mana,ki,chakra,etc),stamina,skills,weaks,statsMultiplier],[]]
let chars = [["Kid goku",0,150,10,7,5,100,20,"fullmoon",,1.05]]
let slots = []

setInterval(main(),500);

function main(){
if( tela == 1){
c.drawImage(images[0],100,100,128,128)
}
}