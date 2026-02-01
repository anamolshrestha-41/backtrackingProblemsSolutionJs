//Longitudinal
let alpha = 5 * Math.PI / 180; //Initial Angle Of Attack
let alphaDot = 0; //pitch acceleration...Rate of change.
let dt = 0.01; //time steps

//Stability derivatives (negative = stable)
const dCm_dAlpha = -0.8; //stability strength
const I = 5000; //Moment Of Inertia

//Time simulation
for (let t = 0; t <= 5; t += dt) {
    //restoring tendency
    let moment = dCm_dAlpha * alpha; //Pitching moment proportional to alpha
    let alphaDot = moment / I; //angular Acceleration
    alphaDot += alphaDot * dt;
    alpha += alphaDot * dt;
    console.log(`t${t}s , alpha ${alpha.toFixed(2)} rad`)
}