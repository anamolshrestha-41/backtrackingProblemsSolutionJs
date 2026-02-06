const I=120;
let omega=0;
const torque=1;
const dt=0.1;

for(let t=0; t<=20; t+=dt){
    const alpha= torque/I;
    omega += alpha * dt;

    console.log(`time: ${t} omega: ${omega.toFixed(2)}`)
}