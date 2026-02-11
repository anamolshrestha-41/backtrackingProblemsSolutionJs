let theta=0;
let pitchRate=0
const CmAlpha=-1;
const CmDelta=-2;
const I=5000;
const dt=0.1;
const totalTime=10;
const dynamicPressure=500;
const wingArea=30;
const meanAerodynamicChord=3;
const commendedValue=0.22;
for(let t=0; t<totalTime; t+=dt){
    let elevatorDeflection= (t>1)? commendedValue:0;
    let moment= dynamicPressure*wingArea*meanAerodynamicChord * (CmAlpha*theta+CmDelta*elevatorDeflection);
    let angularAccleration= moment/I;

    pitchRate+=angularAccleration*dt;
    theta+= pitchRate * dt;
    console.log(`---------------------------------------
        \n{Time: ${t}\n ,  PitchRate ${pitchRate} \n , Theta ${theta} \n}\n
-------------------------------------- \n`)
}
console.log(`Finally=> Theta: ${theta} and PitchRate: ${pitchRate}`)