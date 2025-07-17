//common.js 사용
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// console.log(moduleData);

// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

//ES module 시스템 
// import mul, { add, sub } from "./math.js";
// // import { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));

//라이브러리는 경로말고 이름만 
import randomColor from "randomcolor";
const color = randomColor();
console.log(color);