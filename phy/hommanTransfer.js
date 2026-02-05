const mu = 3.986e14; //mew

function circularVelocity(r){ 
    return Math.sqrt(mu/r)   //vc​=root μ/r​
​
}  


function hommanDeltaV(r1,r2){
    const a = (r1+r2)/2;

    const v1 = circularVelocity(r2);
    const v2 = circularVelocity(r1);

    const vt1 = Math.sqrt(mu * ( 2/ r1-1/ a ));
    const vt2 = Math.sqrt( mu* (2/ r2-1/ a ));

    return{
        dv1: vt1-v1,  //deltav1= vtransfer1-vc1
        dv2: v2-vt2, //deltav2= vc2-vtransfer2
        total: (vt1-v1)+(v2-vt2)
    }
}
console.log(hommanDeltaV(6.771e6, 7.171e6))