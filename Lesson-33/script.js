let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 80,
    tankCapacity: 40,
    fuelConsumption: 8.2,
    driver: [],

    displayInfo() {
        console.log(`Manufacturer: ${this.manufacturer}; Model: ${this.model}; Year: ${this.year}; Average Speed ${this.averageSpeed} km/h; Tank Capacity: ${this.tankCapacity} liters; Fuel consumption: ${this.fuelConsumption} liters/100km; Driver: ${this.driver}.`)
    },

    addDriver(driverName) {
        this.driver.push(driverName)
    },

    hasDriver(name) {
        if (this.driver.includes(name)) {
            console.log(`Водій ${name} є в списку`)
        } else {
            console.log(`Водія ${name} не має в списку`)
        }
    },

    calcTrip(distance) {
        const time = distance / this.averageSpeed + Math.floor(distance / this.averageSpeed / 4);
        const fuel = distance / 100 * this.fuelConsumption;
        return console.log(`Time: ${time}; Fuel: ${fuel}`)
    }
};

car.addDriver("Roma");
car.displayInfo();
car.hasDriver("Roma");
car.calcTrip(500);
// ---------------------------------------------------------------------------------------------------------------------------
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    displayTime() {
        let hours = this.hours.toString().padStart(2, "0");
        let minutes = this.minutes.toString().padStart(2, "0");
        let seconds = this.seconds.toString().padStart(2, "0");
        console.log(`${hours}:${minutes}:${seconds}`);
    },

    addSeconds(seconds) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(totalSeconds/3600);
        this.minutes = Math.floor((totalSeconds % 3600)/60);
        this.seconds = totalSeconds % 60;
    },

    addMinutes (minutes) {
        this.addSeconds(minutes * 60);
    },

    addHours (hours) {
        this.addSeconds(hours * 3600)
    }
}

time.addSeconds(30);
time.addMinutes(70);
time.addHours(3)
time.displayTime();


