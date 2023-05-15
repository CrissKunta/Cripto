// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 9.5;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#f4427d";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);















const imputMensaje = document.querySelector("#mensaje");
const imputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");



function encriptar (){
    var mensaje = imputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    imputResultado.value = mensajeEncriptado;
   

}


function desencriptar (){
    var mensaje = imputMensaje.value;
    var mensajeDesencriptado = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    imputResultado.value = mensajeDesencriptado;

}

function copiar (){
    mensajeEncriptado = imputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    


}

btnCopiar.onclick = copiar
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function remplazar(elemento){
    let texto = elemento.value
    texto = texto.split(/[A-Z\#\&\@\$\―\‗\“\”\„\‟\•\‣\‥\…\‧\″\‴\‶\‷\❛\❜\❝\❞\ʺ\\ʿ\ˀ\ˁ\>\<\˅\ˇ\"\ˉ\`\/\ˌ\ˍ\ˎ\ˏ\ˑ\˒\˓\˔\˕\+\˘\˙\˚\˝\ˠ\ˡ\¡\﹐\.\﹔\﹕\!\%\*\,\;\?\¿\、 \。\〃\〝 \〞 \:]+/g)
    texto = texto.join("")
    elemento.value = texto
  }