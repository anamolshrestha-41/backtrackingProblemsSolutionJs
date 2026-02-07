
//Stabilize angular position using PD control

let theta = 0.2;
let omega = 0;
const I=100;
const Kp=10;
const Kd=5;
const dt=0.01;

for(let t=0; t<5; t+=dt){
    const error= -theta;
    const torque= Kp*error-Kd*omega;
    const alpha= torque/I;
    omega+=alpha*dt;
    theta+=omega*dt;
    if(Math.abs(t%0.1)<1e-6) console.log(`t=> ${t.toFixed(2)} Theta=> ${theta.toFixed(4)}`)
}