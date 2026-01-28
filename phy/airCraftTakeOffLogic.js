//Basic Science Related to force
//Everything is supposed.
let mass = 20000; //kg
let thrust = 80000; //Newton
let drag = 30000; //Newton

const NetForce = thrust - drag;
const acceleration = NetForce / mass;

console.log(`Acceleration of aircraft is ${acceleration} m/s^2`);

const Force = mass * acceleration;
console.log(`Force: ${Force}N`)

//Taking input from user for checking whether aircraft is accelerating, constant speed or decelerating

const inputNetforce = 100;

const outPutNetforce = inputNetforce == 0 ? "Constant Speed"
    : inputNetforce > 0 ? "Accelerating"
        : "Decelerating";

        console.log(outPutNetforce)