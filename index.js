let canvas = document.getElementById("canvas");
let c = canvas.canvas.getContext("2d");
let tela = 1

let images = []
images[0] = new Image()
images[0].src = "sprites/kidgoku.png"

setInterval(main(),17);

function main(){
if( tela == 1){
c.drawImage(images[0],100,100)

}
}