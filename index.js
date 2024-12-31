
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let tela = 1
c.imageSmoothingEnabled = false;


let images = []
images[0] = new Image()
images[0].src = "sprites/kidgoku.png"
images[1] = new Image()
images[1].src = "sprites/kingpiccolo.png"
images[2] = new Image()
images[2].src = "sprites/superman.png"
 // chars = [[name,image id,base hp,base str,base def,base speed,(mana,ki,chakra,etc),stamina,skills,statsMultiplier,passisves],[]]
let chars = [["Kid goku",0,150,10,7,5,100,20,"Martial arts Attack",1.07,],
["King Piccolo",1,120,5,8,10,200,10,"Martial arts Attack","Limbs Regen","Explosive Demon Wave",1.04,],
["Superman",2,1500,50,200,120,0,450,"Holding punch","Frost breath","Heat Vision","Xray vision","Super Punch",1.005,"Kripitonite weakness","Sound weakness"]
]
let slots = []

setInterval(main(),500);

function main(){
if( tela == 1){
    c.drawImage(images[0],100,200,128,128)
    c.drawImage(images[1],200,400,128,128)
    c.drawImage(images[2],100,600,128,128)
}
}