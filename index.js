
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
 // chars = [[name,image id,base hp,base str,base def,base speed,(mana,ki,chakra,etc),stamina,skills,statsMultiplier,passisves,lvl],[]]
let chars = [["Kid goku",0,150,10,7,5,100,20,"Martial arts Attack",1.07,,1],
["King Piccolo",1,120,5,8,10,200,10,"Martial arts Attack","Limbs Regen","Explosive Demon Wave",1.04,,1],
["Superman",2,1500,50,200,120,0,450,"Holding punch","Frost breath","Heat Vision","Xray vision","Super Punch",1.005,"Kripitonite weakness","Sound weakness",1]
]
let slots = []
slots = chars
setInterval(main(),500);

function main(){
if( tela == 1){

    if(!(slots[0] == null)){
        c.drawImage(slots[0][1],100,200,128,128)
    }
    if(!(slots[1] == null)){
        c.drawImage(slots[1][1],400,500,128,128)
    }
    if(!(slots[2] == null)){
        c.drawImage(slots[2][1],100,700,128,128)
    }
}
}