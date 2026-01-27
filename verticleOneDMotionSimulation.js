function Simulation(u, a, dt, t_max){
    let time= 0;
    let velocity= u;
    let position= 0;
    const result =[];

    while(time<=t_max){
        position=position+(velocity*dt);
        velocity+=a*dt;

        result.push({
            time: Number(time.toFixed(2)),
            position:Number(position.toFixed(2)),
            velocity: Number(velocity.toFixed(2)),
            acceleration: a
        });
        time+=dt;
    }
    return result;
}

console.log(`Simulation 1---->`);
console.log(Simulation(0, 9.81, 1, 5));
console.log(`<----Simulation 1`);

// console.log(`Simulation 1---->${JSON.stringify(Simulation(0, 9.81, 1, 5))}`);

function Simulation2(u, a, dt, t_max){
    let velocity=u;
    let time=0;
    let position=0;
    let result=[];

    while(time<=t_max){
        velocity+=a*dt;
        position+=velocity*dt;
        result.push({
            time: Number(time.toFixed(2)),
            position: Number(position.toFixed(2)),
            velocity: Number(velocity.toFixed(2)),
            acceleration: a
        })
        time+=dt;
    }
    return result;
}
console.log(`Simulation 2---->`);
console.log(Simulation2(0, 9.81, 0.1, 5));
console.log(`<----Simulation 2`);


console.log(`____________Task Momentum_________________`)

function Momentum(mass, initialSpeed, stopTime){
    let finalSpeed= 0;
    let momentum= mass*(finalSpeed-initialSpeed);
    let force=momentum/stopTime;
    return(force<5000 ? `You can Safely Stop` : `Don't stop, it's Dangerous!!!`)
}
console.log(`Landing Information: ${Momentum(8000, 40, 10)}`)