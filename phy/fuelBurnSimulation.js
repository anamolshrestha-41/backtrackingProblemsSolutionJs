let exhaustVelocity = 3000;
let mass = 30000;
let burnRate = 50;
let dt = 1;
let velocity = 0;

for (let t = 0; t < 200; t++) {
    if(mass <= 10000) {
        console.log("Out of fuel");
        break;
    }
    let dv = exhaustVelocity * (burnRate)
    velocity = velocity + dv;
    mass -= burnRate;
    let Thrust = burnRate * exhaustVelocity;
    let acceleration = Thrust / mass;

    console.log(`Time: ${t}, Mass: ${mass.toFixed(2)}, Velocity: ${velocity.toFixed(2)}, Acceleration: ${acceleration.toFixed(2)} `)
}