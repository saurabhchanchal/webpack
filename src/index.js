//console.log("hello whole world");

// function sum(a, b) {
//     return a+b;
// }
// function mult(a, b) {
//     return a * b;
// }



//import form calc.js
import { sum, mult } from "./calc.js";
import "./index.css";

console.log(sum(10, 15));

console.log(mult(10, 15));

//
const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerText = "my name saurabh";
// h1.classList.add("redtext") //or
h1.setAttribute("class", "redtext")

root.append(h1);// append or appendhild both are same

// style-loader, css-loader
//CSS LOADER , image loader , font loader