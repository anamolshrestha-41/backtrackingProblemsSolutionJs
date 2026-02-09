const aircraft_weight=12000;
const fuelWeight=1000;
const liftToDrag=15;
const specificFuelConsumption= 550;
const cruiseSpeed=570;
const altitude= 3000;
const enginePower=4500;
const timeStep=1/60;
let distance=0;

function powerRequired(weight, speed, liftToDrag){
    return (weight*9.81*speed)/liftToDrag/1000;
}

function powerAvailable(enginePower, altitude){
    return(enginePower* Math.max(0, 1-altitude/12000))
}

while (fuelWeight>0){
    const requiredPower= powerRequired(
        aircraft_weight, cruiseSpeed, liftToDrag
    );
    const availablePower= powerAvailable(enginePower, altitude)

    if(availablePower<requiredPower){
        console.log("Mission failed because of insufficient power.");
        break;
    }

    const fuelBurnRate= requiredPower + specificFuelConsumption;
    const fuelBurned= fuelBurnRate+timeStep;
    fuelWeight-= fuelBurned;
    aircraft_weight-=fuelBurned;
    if(fuelWeight<0) fuelWeight =0;
    distance+=cruiseSpeed*timeStep*3600; //meters
}

console.log(`Total Range: ${(distance/1000).toFixed(2)}`)