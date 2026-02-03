let m = 2;
const f = 10;
const dt = 0.1;
let v = 0; let x = 0; let r=5; 
for (t = 0; t < 50; t += dt) {
    let a = f / m;
     v += a* dt;
     const fc=(m*v**2)/r;
     x += v* dt;
    console.log(`t${t} | v${v} | x${x} | fc${fc}`);
}