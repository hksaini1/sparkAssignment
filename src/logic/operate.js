import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  console.log('$$',numberTwo,operation);
 
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "/" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "/") {
    console.log('$$-',numberTwo==="0");
    if (numberTwo === "0") {
      console.log('$$--',numberTwo,operation);
      //alert("Divide by 0 error");
      return "Math Error";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
