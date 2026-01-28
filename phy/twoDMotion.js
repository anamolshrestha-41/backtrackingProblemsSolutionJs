function simulateTwoD({ mass, fx, fy, dt, t_max }) {
    let time = 0;
    let vx = 0;
    let vy = 0;
    let x = 0;
    let y = 0;
    let result = [];
    while (time <= t_max) {
        ax = fx / mass; //forceX/mass
        ay = fy / mass;
        vx += ax * dt;
        vy += ay * dt;

        result.push({
            time: Number(time.toFixed(2)),
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
            vx: Number(vx.toFixed(2)),
            vy: Number(vy.toFixed(2)),
            ax: Number(ax.toFixed(2)),
            ay: Number(ay.toFixed(2)),
        });
        time += dt;
    }
    return result;
}

const mass = 5;
const gravity = 9.81;
const angle = 30 * (Math.PI / 180); //radians
fx = mass * gravity * Math.sin(angle);
fy = 0; //zero verticle force

console.log(simulateTwoD({mass, fx, fy, dt: 0.1, t_max:5}));
