var vp = document.getElementById("cuadro");
var paper = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
document.addEventListener("keyup", dibujarConTeclado);



var fondo = {
    url: "campo.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false,
    x : [],
    y : []
}   
var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    x : 0,
	y : 0
}
var pollo = {
    url: "pollo.png",
    cargaOk: false,
    x : [],
    y : []
}

var cantidad = aleatorio(1, 10)
 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargaDeFondo);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargaDeVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargaDeCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargaDePollo);



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
function cargaDeCerdo()
{
    cerdo.cargaOk = true
    dibujar();
}
function cargaDePollo()
{
    pollo.cargaOk = true
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
        for(var v = 0; v<cantidad; v++)
        {
        var x = aleatorio(0, 420)
        var y = aleatorio(0,420)
        vaca.y[v] = y
        vaca.x[v] = x
        paper.drawImage(vaca.imagen, x, y);
        }
    }

    if(pollo.cargaOk)
    {
        for(var p = 0; p<cantidad; p++)
        {
        var x = aleatorio(0, 420)
        var y = aleatorio(0,420)
        pollo.y[p] = y
        pollo.x[p] = x
        paper.drawImage(pollo.imagen, x, y);
        }
    if(cerdo.cargaOk)
    {
        var x = aleatorio(0, 420)
        var y = aleatorio(0, 420)
        cerdo.x = x
        cerdo.y = y
        paper.drawImage(cerdo.imagen, 420, 400);
    }

    }

    
    
}

function dibujar2()
{
    if(fondo.cargaOk)
    {
        paper.drawImage(fondo.imagen, 0, 0);
    }
   
    if(vaca.cargaOk)
    {
        for(var v = 0; v<cantidad; v++)
        {
        paper.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
        }
    }

    if(pollo.cargaOk)
    {
        for(var p = 0; p<cantidad; p++)
        {
        paper.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
        }
    }

}


function moverCerdo(x,y)
{
    paper.drawImage(cerdo.imagen, x, y)
}


3
function dibujarConTeclado(evento)
{
     var movimiento = 10;

    switch(evento.keyCode)
  {
    case teclas.UP:
        dibujar2()
        moverCerdo(cerdo.x, cerdo.y)
        cerdo.y = cerdo.y - movimiento
        console.log("arriba")
    break;
    case teclas.DOWN:
        dibujar2()
        moverCerdo(cerdo.x, cerdo.y)
        cerdo.y = cerdo.y + movimiento
    break;
    case teclas.LEFT:
        dibujar2()
        moverCerdo(cerdo.x, cerdo.y)
        cerdo.x = cerdo.x - movimiento
    break;
    case teclas.RIGHT:
        dibujar2()
        moverCerdo(cerdo.x, cerdo.y)
        cerdo.x = cerdo.x + movimiento
    break;
    default:
        console.log("otra tecla")
    break;
  }
}






function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min)) + min;
    return resultado;
}