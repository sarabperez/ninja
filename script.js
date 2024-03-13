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

class Sensei extends Ninja{
    constructor(
        nombre,
        salud=200,
        fuerza=10,
        velocidad=10,
        sabiduria=10
        ) {
        super(nombre,salud);
        this.fuerza=fuerza;
        this.velocidad=velocidad;
        this.sabiduria=sabiduria;
        
    }
    speakWisdom(){
        console.log("La sabiduría del sensei dice: El camino hacia la victoria no es fácil pero es inevitable")
        super.drinkSake();
    }

}

const sensei1= new Sensei('Kyotaro', 200);
console.log(sensei1);
sensei1.speakWisdom();
console.log(sensei1);