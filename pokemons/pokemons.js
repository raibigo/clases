//Arrays asociativo con valores de Cadena
var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";


//Una clase nos permite definir una colección de objetos permitiendo que estos posean los mismos atributos y métodos.
class pokemon
{
    constructor(nombre, vida, ataque)
        {
            this.imagen = new Image();
            this.nombre = nombre;
            this.vida = vida
            this.ataque = ataque

            this.imagen.src = imagenes[this.nombre];
        }
        mostrar()
        {
            document.body.appendChild(this.imagen)
            document.write("<p>")
            document.write("<strong>" + this.nombre + "</strong>" + "<br />")
            document.write("VIDA: " + "<strong>" + this.vida + "</strong>" + "<br />");
            document.write("ATAQUE: " + "<strong>" + this.ataque + "</strong")
            document.write("</p>")
        }
    
}


var pokacho = new pokemon("pokacho", 80, 70);
var tocinauro = new pokemon("tocinauro", 120, 40);

pokacho.mostrar();
tocinauro.mostrar();


// Otra Forma de Arrays haciendo push (crea indices de 1, 2, 3 ...)
var coleccion = [];
coleccion.push(new pokemon("cauchin", 100, 50))

for(var pokis of coleccion)
{
    pokis.mostrar();
}