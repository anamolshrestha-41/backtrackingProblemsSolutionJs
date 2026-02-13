function calculateForces(v, rho, S, alpha, mass, g, thrust){
    const speed= Math.sqrt(v.x**2+v.y**2+v.z**2);
    const CL= 2*Math.PI*alpha;
    const CD= 0.02+0.04*CL**2;

    const lift= 0.5 * rho * speed**2 * S * CL;
    const drag= 0.5 * rho * speed**2 * S * CD;

    const weight= mass*g;

    return{
        x: thrust-drag,
        y: 0,
        z: -lift-weight
    };
}
const v={x: 50, y:0, z:0};
const force= calculateForces(v, 1.225, 16, 0.1, 1200, 9.81, 2000);
console.log(force);

//moments
function calculateMoments(velocity, rho, S, c, b, alpha, controlDeflection){
    const V= Math.sqrt(velocity.x**2+velocity.y**2+velocity.z**2);
    const Cm= getPitchCoefficient(alpha, controlDeflection.elevator);
    const Cl= getRollCoefficient(controlDeflection.aileron);
    const Cn= getYawCoefficient(controlDeflection.rudder);

    const moments={
        x: 0.5*rho*V**2*S*b*Cl,
        y: 0.5*rho*V**2*S*c*Cm,
        z: 0.5*rho*V**2*S*b*Cn
    };
    return moments
}

function getPitchCoefficient(alpha, elevatorDeflection){
    return 0.05 * alpha + 0.1 * elevatorDeflection;
}
function getRollCoefficient(aileronDeflection){
    return 0.08 * aileronDeflection;
}
function getYawCoefficient(rudderDeflection){
    return 0.06 * rudderDeflection;
}
const V={x: 50, y: 0, z: 0};
const rho=1.225;
const S= 16; 
const c=1.5;
const b=10;
const alpha=0.1;
const controlDeflection={
    elevator: 0.05,
    aileron: 0.02,
    rudder: 0.03
}
const moments=calculateMoments(V, rho, S, c, b, alpha, controlDeflection);
console.log(moments);