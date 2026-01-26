function Simulation(u, a, dt, t_max){
    let time= 0;
    let velocity= u;
    let position= 0;
    const result =[];

    while(time<=t_max){
        position+=velocity*dt;
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

console.log(Simulation(0, 9.81, 0.1, 5));