let theta=3;
let pitchRate=2;
const momentSlope=-1;
const inertia=1;
const dt=0.1;
let storage=[];
for(let t=0; t<=2; t+=dt){
    let pitchingMoment= momentSlope*theta;
    let angularAcceleration= pitchingMoment/inertia;
    pitchRate+=angularAcceleration+dt;
    theta+=pitchRate*dt
    storage.push(theta.toFixed(4), pitchRate.toFixed(3))
    console.log(`${storage}`)
}