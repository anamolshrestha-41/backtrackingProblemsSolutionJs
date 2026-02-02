// Goal: Understand centripetal acceleration numerically

// Requirements:

// Radius r

// Angular velocity ω

// Compute x(t), y(t)

const r= 5;
const omega = 2;
const dt = 0.05;
 for(let t=0; t<100; t+=dt){
    let x= r*Math.cos(omega*t);
    let y= r*Math.sin(omega*t);
    console.log(`t${t} | x${x} | y${y}`)
 }