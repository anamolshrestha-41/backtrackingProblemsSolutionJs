function energyAnalysis({mass, velocity, height}){
const gravity= 9.81;
return{
    kineticEnergy: (1/2)*mass*velocity**2 + "J",
    potentialEnergy: mass*height*gravity +"J"
};
}
console.log(
    energyAnalysis({mass:1000, velocity: 50, height: 100})
)