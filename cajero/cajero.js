class billetes
{
    constructor(v, c)
    {
    this.valor = v
    this.cantidad = c
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
            resultado.innerHTML += resultado.innerHTML + e.cantidad + " billetes de " + e.valor + "<br />"
            }
        }

    }
}

var caja = [];
var entregado = [];
caja.push( new billetes(100, 7) );
caja.push( new billetes(50, 10) );
caja.push( new billetes(20, 15) );
caja.push( new billetes(10, 20) );
caja.push( new billetes(5, 20) );
caja.push( new billetes(1, 30) );

var resultado = document.getElementById("resultado")
var dinero = 0;
var div = 0;
var papeles = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);






    

