var vp = document.getElementById("cuadro");
var paper = vp.getContext("2d");


var fondo = {
    url: "campo.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
}   
 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargaDeFondo);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargaDeVaca);



function cargaDeFondo()
{
    fondo.cargaOk = true
    dibujar();
}

function cargaDeVaca()
{
    vaca.cargaOk = true
    dibujar();
}




function dibujar()
{
    if(fondo.cargaOk)
    {
        paper.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        for(v = 0; v<10; v++)
        {
        var x = aleatorio(0, 420)
        var y = aleatorio(0,420)
        paper.drawImage(vaca.imagen, x, y);
        }
    }
}


function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min)) + min;
    return resultado;
}