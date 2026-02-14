let velocity= 1500;
let temp= 288;

let gamma= 1.4;
let R= 287;
let speedOfSound=Math.sqrt(gamma*R*temp);

let Mach= velocity/speedOfSound;
let aerodyanmicForces;
let thermalLoad;

if(Mach<1){
    aerodyanmicForces= "Using subsonic model";
    thermalLoad="Low heating..."
}

else if(Mach>=1 && Mach<=5){
    aerodyanmicForces="Computed oblique shock or expansion with wave drag."
    thermalLoad= "Moderate heating..."
}

else{
    let staginationTemp= temp * (1+((gamma-1)/2) * Mach * Mach);
    let materialLimit=1500;

    if(staginationTemp>materialLimit){
        thermalLoad= "Risk of material failure due to high stagnation temperature"
    }else{
        thermalLoad= "Within material limits."
    }
    aerodyanmicForces= "Hypersonic flow effects considered."
}

console.log(`Speed of sound: ${speedOfSound.toFixed(2)}m/s , Mach Numer: ${Mach.toFixed(2)},
 Aerodynamic Forces:${aerodyanmicForces}, Thermal Load : ${thermalLoad}`)