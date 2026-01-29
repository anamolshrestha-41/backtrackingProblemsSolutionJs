function rotationalMotion({I, Torque, dt=0.1, t_max= 5}){
let omega=0;
let theta=0;
const result=[];
for(let time=0; time<t_max; time=time+dt){
    const alpha= Torque/I; //torque= Inertia*AngularAcceleration
    omega += alpha*dt;
    theta= (omega*dt)+(1/2)*alpha*dt**2;
    result.push({
        time: time.toFixed(2),
        omega: omega.toFixed(2),
        theta: theta.toFixed(2),
        alpha: alpha.toFixed(2)
    });
}
return result;
}
const run = rotationalMotion({I: 0.5, Torque: 2});
console.log(run);