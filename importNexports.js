//! Import and Export

//* Person.js
const person = {
  name: "John",
};
export default person;

//* Utitlty.js
export const clean = () => {};
export const baseData = 10;

//* To differnce ismy ye dekho ky person me nichy export ky sath default likha hai or yaha Utitlity me nahi likha hai.
//=> jab tumary pass default agya to tum jab agly component me usko import karogy to tum usko koi bhi naam de saktay ho.
//=> jab tumary pass default nahi agya to tum jab agly component me usko import karogy to tum usko wahi naam dena paray ga jo usko export karte waqt diya gaya hai. and second cheez ye hai ky tum usko curly braces me import karogy.

//* like this as you see below in example
// import prsn from "./Person.js"; //=> yaha tum usko koi bhi naam de saktay ho. (default export)
// import { clean, baseData } from "./Utitlity.js"; //=> yaha tum usko wahi naam dena paray ga jo usko export karte waqt diya gaya hai. (named export)

import * as bundled from "./Utitlity.js"; //=> iska matlab hai ky Utitlity.js me jitnay bhi export hain unko mai bundled naam ke object me le raha hoon. or phir mai usko console karwa raha hoon.
console.log(bundled); //=> {clean: ƒ, baseData: 10}
