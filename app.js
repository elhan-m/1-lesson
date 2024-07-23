// class Animal {
//     constructor(option) {
//         this.name = option.name;
//         this.age = option.age;
//         this.hasTail = option.hasTail;
//     }
//     voice() {
//         console.log(`${this.name} makes rrrrr`);
//     }
// }

// class HomeAnimals extends Animal {
//     constructor(option) {
//         super(option);
//         this.muuzu = option.muuzu;
//         this.color = option.color;
//     }
// }


// class MeatAnimals extends HomeAnimals {
//     constructor(option) {
//         super(option);
//         this.providesMeat = option.providesMeat;
//     }
//     provideMeat() {
//         console.log(`${this.name} provides meat.`);
//     }
// }


// class FlyingAnimals extends HomeAnimals {
//     constructor(option) {
//         super(option);
//         this.canFly = option.canFly;
//     }
//     fly() {
//         if (this.canFly) {
//             console.log(`${this.name} is flying.`);
//         } else {
//             console.log(`${this.name} cannot fly.`);
//         }
//     }
// }


// class MilkAnimals extends HomeAnimals {
//     constructor(option) {
//         super(option);
//         this.providesMilk = option.providesMilk;
//     }
//     provideMilk() {
//         console.log(`${this.name} provides milk.`);
//     }
// }


// const cow = new MeatAnimals({
//     name: "Bessie",
//     age: 5,
//     hasTail: true,
//     muuzu: true,
//     color: "brown",
//     providesMeat: true
// });

// const chicken = new FlyingAnimals({
//     name: "Cluck",
//     age: 1,
//     hasTail: true,
//     muuzu: false,
//     color: "white",
//     canFly: false
// });

// const goat = new MilkAnimals({
//     name: "Billy",
//     age: 3,
//     hasTail: true,
//     muuzu: true,
//     color: "white",
//     providesMilk: true
// });

// console.log(cow);
// cow.provideMeat();

// console.log(chicken);
// chicken.fly();

// console.log(goat);
// goat.provideMilk();

// class components {
//     constructor(selector) {
//         this.el = document.querySelector(selector);
//     }
//     hide() {
//         this.el.style.display = 'none';
//     }
//     show() {
//         this.el.style.display = 'block';
//     }
// }

// class Box extends components {
//     constructor(option) {
//         super(option.selector);
//         this.el.style.width = this.el.style.height = option.size + 'px';
//         this.el.style.background = option.color;
//     }
// }

// const boxFirst = new Box({
//     selector: '#first',
//     size: 100,
//     color: 'red'
// });

// class circle extends box {
//     constructor(option) {
//         super(option);
//         this.el.style.borderRadius = '50%';
//     }
// }
// const c = new circle({
//     selector: '#circle',
//     size: 100,
//     color: 'yellow'
// })
class Vehicle {
    constructor(option) {
        this.name = option.name;
        this.speed = option.speed;
    }
    move() {
        console.log(`${this.name} is moving at ${this.speed} km/h.`);
    }
}

class GroundVehicle extends Vehicle {
    constructor(option) {
        super(option);
        this.type = option.type;
    }
}

class HeavyGroundVehicle extends GroundVehicle {
    constructor(option) {
        super(option);
        this.weight = option.weight;
    }
    description() {
        console.log(`${this.name} is a heavy ground vehicle weighing ${this.weight} tons.`);
    }
}

class LightGroundVehicle extends GroundVehicle {
    constructor(option) {
        super(option);
        this.fuelEfficiency = option.fuelEfficiency;
    }
    description() {
        console.log(`${this.name} is a light ground vehicle with fuel efficiency of ${this.fuelEfficiency} km/l.`);
    }
}

class FlyingVehicle extends Vehicle {
    constructor(option) {
        super(option);
        this.altitude = option.altitude;
    }
    fly() {
        console.log(`${this.name} is flying at an altitude of ${this.altitude} meters.`);
    }
}

class WaterVehicle extends Vehicle {
    constructor(option) {
        super(option);
        this.capacity = option.capacity;
    }
    float() {
        console.log(`${this.name} is floating with a capacity of ${this.capacity} passengers.`);
    }
}

// Creating instances

const truck = new HeavyGroundVehicle({
    name: "Freightliner",
    speed: 80,
    type: "truck",
    weight: 18
});

const car = new LightGroundVehicle({
    name: "Toyota Corolla",
    speed: 180,
    type: "car",
    fuelEfficiency: 15
});

const bicycle = new LightGroundVehicle({
    name: "Mountain Bike",
    speed: 25,
    type: "bicycle",
    fuelEfficiency: "N/A"
});

const scooter = new LightGroundVehicle({
    name: "Electric Scooter",
    speed: 20,
    type: "scooter",
    fuelEfficiency: "N/A"
});

const motorcycle = new LightGroundVehicle({
    name: "Harley Davidson",
    speed: 150,
    type: "motorcycle",
    fuelEfficiency: 20
});

const airplane = new FlyingVehicle({
    name: "Airbus A380",
    speed: 900,
    altitude: 35000
});

const helicopter = new FlyingVehicle({
    name: "Apache",
    speed: 300,
    altitude: 5000
});

const boat = new WaterVehicle({
    name: "Speedboat",
    speed: 70,
    capacity: 6
});

const ship = new WaterVehicle({
    name: "Cruise Ship",
    speed: 30,
    capacity: 3000
});



console.log(truck);


console.log(car);


console.log(bicycle);


console.log(scooter);


console.log(motorcycle);

console.log(airplane);


console.log(helicopter);


console.log(boat);


console.log(ship);