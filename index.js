let canvas = document.getElementById("canvas");
let c = canvas.canvas.getContext("2d");
let tela = 1

let images = []
images[0] = new Image()
images[0].src = "sprites/kidgoku.png"
alert("4")
setInterval(main(),500);
alert("3")
function main(){
if( tela == 1){
alert("1")
c.drawImage(images[0],100,100)
alert("2")
}
}