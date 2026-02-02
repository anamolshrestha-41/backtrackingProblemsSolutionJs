let velocity= 250;
let altitude= 10000;
let dt= 0.1;

const g= 9.81;
const damping= 0.002;

for( let t=0; t<=120; t+=dt){
    let dv= -g * (altitude/10000) * dt;
    velocity += dv;

    //damping
    velocity *= (1-damping);
    altitude += velocity * dt * 0.01;

    console.log(`t=${t.toFixed(1)}s | v=${velocity.toFixed(2)}m/s | h=${altitude.toFixed(2)}m`)
}