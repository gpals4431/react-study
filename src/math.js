//math 모듈
export function add(a,b){
    return a + b;
}

export function sub(a,b){
    return a - b;
}

//common.js에 의해서 내보내짐. 
// module.exports = {
//     add,
//     sub
// };

//ES 모듈
// export { add, sub };

export default function multiply(a, b){
    return a * b
}