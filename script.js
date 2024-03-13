class Ninja{
    constructor(nombre, salud){
        this.nombre= nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log( `el nombre del ninja es: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} Salud: ${this.salud} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad}`);
    }
    drinkSake(){
        this.salud +=10;
    }
}
const ninja1= new Ninja('akari', 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();