// Problem

// Aircraft:
// Mass = 9,000 kg
// Speed increases from 40 → 80 m/s
// Time = 20 s
// Find:
// Change in kinetic energy kE=1/2mv**2
// Average power required (ignoring drag) P=W/T, F*v, ke/t

let mass= 9000;
let speed1= 40;
let speed2= 80;
let time= 20;

//initial kinetic energy
let ke1= (1/2)*mass*speed1**2
//final kinetic energy
let ke2= (1/2)*mass*speed2**2
//kinetic energy total
let ke= ke2-ke1;
//power
let power= ke/time;

console.log(`Kinetic Energy=> ${ke}J, Power=> ${power}W`)



