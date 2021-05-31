import {ONE} from "./constants.js";
import {TWO as ZWEI} from "./constants.js";

console.log(ZWEI)

export const plus = (n, m = ONE) => n + m
const times = (n, m = ZWEI) => n * m

export default times
