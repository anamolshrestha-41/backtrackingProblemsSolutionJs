function orbitalCalculator({massCentral, radius}){
    const Gravity= 6.674e-11;
    const oV=Math.sqrt((Gravity*massCentral)/radius);
    const oP= 2*Math.PI*Math.sqrt((radius**3)/(Gravity*massCentral));
    const eV= Math.sqrt((2*Gravity*massCentral)/ radius);
    return{
        orbitalVelocity: oV,
        orbitalPeriod : oP,
        escapeVelocity : eV
    }
}
const calculated= orbitalCalculator({massCentral: 5.972e24, radius: 7e6})
console.log(calculated)