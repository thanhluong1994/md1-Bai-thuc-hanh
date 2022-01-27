class Animal{
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
    }
    setName(a){
        this.name=a;
    }
    setWeight(b){
        this.weight=b;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return "name:" + this.name + "weight:" + this.weight;
    }
}
let objAnimal1= new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight("45.6");
objAnimal1.toString();
let objAnimal2 = new Animal();
objAnimal2.setName("Mouse");