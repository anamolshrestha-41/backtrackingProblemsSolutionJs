//constants
const gamma=1.4;
const R=287.05;

function computeAerodynamics(velocity, temperature){
    const speedOfSound= Math.sqrt(gamma*R*temperature)
    const Mach= velocity/speedOfSound;

    let liftCoefficient=0.5;
    let dragCoefficient= 0.02;

    if(Mach<1){
        //compressibility correction
        const correction= 1/Math.sqrt(1-Mach*Mach);
        liftCoefficient*=correction;
        dragCoefficient*=correction;
    } else{
        liftCoefficient*= (1+0.2*(Mach-1));
        dragCoefficient+= 0.1+ Math.pow(Mach-1, 2)
    }
    return {liftCoefficient, dragCoefficient};
}

console.log(computeAerodynamics(340, 288))


