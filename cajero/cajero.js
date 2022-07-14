var imagenes = [];
imagenes ["5"] = "billete5.png";
imagenes ["10"] = "billete10.png";
imagenes ["20"] = "billete20.png";
imagenes ["50"] = "billete50.png";
imagenes ["100"] = "billete100.png";



class billetes
{
    constructor(v, c)
    {
    this.imagen = new Image();
    this.valor = v
    this.cantidad = c
    this.imagen.src = imagenes[this.valor];
    this.saldo = this.valor * this.cantidad;
    } 
}



function entregarDinero()
{
    var t = document.getElementById("dinero")
    dinero = parseInt(t.value);
    for(var bi of caja)
    {   
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
            papeles = bi.cantidad
        }
        else
        {
            papeles = div;
        }
        entregado.push( new billetes(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
      }
       
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "Dinero insuficiente en cajero"
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                for(var money = 0; money <= e.cantidad; money++)
                {
                    document.body.appendChild(e.imagen) + "<br />";
                }

            
            }
        }

    }
}



var caja = [];
var entregado = [];
caja.push( new billetes(100, 8) );
caja.push( new billetes(50, 10) );
caja.push( new billetes(20, 15) );
caja.push( new billetes(10, 20) );
caja.push( new billetes(5, 20) );


function restarDinero()
{
    var resta;

    for(var x of entregado)
    {
        resta = x.valor - x.cantidad
        console.log("valores")
    }
}


var total = document.getElementById("total")
var resultado = document.getElementById("resultado")
var dinero = 0;
var div = 0;
var papeles = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);








    

