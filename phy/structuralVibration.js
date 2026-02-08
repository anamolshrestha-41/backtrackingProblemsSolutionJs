let x = 0.1;
let v=0;
let m=500;
let k=2e7;
const c= 2*0.02*Math.sqrt(k*m);
const dt = 0.001;

for(let t=0; t<1; t+=dt){
    const a=(-c*v-k*x)/m;
    v+=a*dt;
    x+=v*dt;
    if(Math.abs(t%0.01)<1e-6)
        console.log(`Time: ${t.toFixed(2)} Displacemet: ${x.toFixed(4)}`)
}