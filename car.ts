class Car {
    name: string;
    acceleration: number = 0;

    constructor(names:string) {
        this.name = name;
    }
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
    honk(): void {
        console.log(`${this.name} is saying : Tooooooooot!`)
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);