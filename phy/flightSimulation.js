function derivatives(state) {
    const [x, y, vx, vy] = state;
    const ax = 0;
    const ay = -9.81;
    return [
        vx,  //dx/dt
        vy, //dy/dt
        ax, //dvx/dt
        ay //dvy/dt
    ]
}
function RK4(state, derivatives, dt) {
    const k1 = derivatives(state);

    const s2 = state.map((s, i) => 
        s + (k1[i] * dt) / 2
    )
    const k2 = derivatives(state);

    const s3 = state.map((s, i) => 
        s + (k2[i] * dt) / 2
    )
    const k3 = derivatives(state);

    const s4 = state.map((s, i) => 
        s + (k3[i] * dt)
    )
    const k4 = derivatives(state);

    return state.map((s, i) => 
        s + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
    )
}
let state = [0, 0, 10, 10];
const dt = 0.16;
for (let i = 0; i < 1000; i++) {
    state = RK4(state, derivatives, dt);
}
const [x, vx, y, vy]=state;
console.log({x, y, vx, vy});
