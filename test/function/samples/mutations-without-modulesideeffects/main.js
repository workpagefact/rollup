import { modified } from "./other.js";

const result = modified ? "OK" : "FAIL";
assert.strictEqual(result, "OK");
