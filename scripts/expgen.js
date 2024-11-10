import { rng } from "./rng.js";

export function expGen() {
    const OPS = ["*", "/", "+", "-"];
    const NUM_A = rng(3, 9);
    const OP = OPS[rng(0, 3)];
    let num_b;

    if (OP === "/") {
        let min = 3;
        let max = 9;
        let num_b_candidates = [];
        for (let index = min; index <= max; index++) {
            if (((NUM_A / index) % 1) === 0) {
                num_b_candidates.push(index);
            }
        }
        
        num_b = num_b_candidates[rng(0, num_b_candidates.length -1)];
    } else {
        num_b = rng(3, 9);
    }

    const EXP = [];
    EXP.push(NUM_A, OP, num_b);
    return EXP;
}