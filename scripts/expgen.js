import { rng } from "./rng.js";

export function expGen() {
    const OPS = ["*", "/", "+", "-"];
    const NUM_A = rng(3, 9);
    const OP = OPS[rng(0, 3)];
    const NUM_B = rng(3, 9);

    const EXP = [];
    EXP.push(NUM_A, OP, NUM_B);
    return EXP;
}