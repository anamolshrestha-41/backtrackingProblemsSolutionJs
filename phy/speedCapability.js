function delta_v(v_e, m0, mf){
    return Math.floor(v_e * Math.log(m0/mf));
}
let v_e= 3000;
let m0= 30000;
let mf= 10000;
let dv= delta_v(v_e, m0, mf);

console.log(`Delta_v=> ${dv} m/s`)