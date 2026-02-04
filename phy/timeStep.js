//numerically integrate orbital motion using Newton's Law.

const GM= 3.986e14; //Earth Gravitational Parameter (m^3/s^2)
const dt= 1; //time step sec.

//Initial condition (LEO)
let x= 6.771e6;
let y=0;
let vx=0;
let vy= 7670;

for(let t=0; t< 6000; t+=dt){
let r= Math.sqrt(x*x + y*y);

let ax= -GM * x / Math.pow(r,3);
let ay= -GM * y / Math.pow(r,3);

vx+=ax*dt;
vy+=ay*dt;

x+=vx*dt;
y+=vy*dt;

if(t%60==0){
    console.log(`t => ${t} | r => ${r}`);
}
}
