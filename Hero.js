class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

     attack(){
        switch(this.type){
            case "Worrior":
                console.log(`The ${this.type} ${this.name} attacking using sword.`);
                break;
            case "Mage":
                console.log(`The ${this.type} ${this.name} attacking using magic.`);
                break;
            case "Monk":
                console.log(`The ${this.type} ${this.name} attacking using martial arts.`);
                break;
            case "Ninja":
                console.log(`The ${this.type} ${this.name} attacking using shuriken.`);
                break;
            default:
                console.log(`The ${this.name} not have attack.`);
                break;
        }

    }
}


let newHero = new Hero("Biru","25","Monk");
newHero.attack();
