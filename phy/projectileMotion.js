//Simulate 2D Projectile Motion
//Goal: Numerical physics, vectors, kinematics
// Requirements:

// Initial speed, angle
// Gravity = 9.81 m/s²
// Compute position every 0.1 s
// Stop when y ≤ 0

let v0 = 20;
let g = 9.81;
let dt = 0.1;
let x=0;
let y=0;

let vx= v0 * Math.cos(45);
let vy= v0 * Math.sin(45);

for(let t=0; t<=5; t+=dt){
    x +=  vx * dt;
    vy= vy - g*dt;
    y+=vy*dt;
    console.log(`t${t} | x${x} | y${y}`)
}

