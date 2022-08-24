class Vehicle {
    //Sets make, model, year of new vehicles
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'BEEP'
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}


class Car extends Vehicle{
    constructor(make, model, year) {
        super( make , model , year );
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super( make , model , year );
        this.numWheels = 2;
    }

    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle){
        if(this.capacity === this.vehicles.length){

            return 'Sorry, garage is full!'
        }
        //Checks if vehicle is an instance of Carr
        if(vehicle instanceof Car || vehicle instanceof Motorcycle){

            //If true, pushes vehicle into vehicles arr
            this.vehicles.push(vehicle);
            return 'Vehicle was added to garage!'

        } else {

            //if false, prints message
            return 'Only vehicles are allowed in here!'
        }
    }
}