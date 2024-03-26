"use strict";//treat all js code as newer version
//alert(3+3) we are using noejs ,not browser
console.log(3+3);
console.log("harshul");//code readibility should be focused.

let name="harshul"
let age =20
let isloggedin=false

//number
// bigint
//string =""
// boolean->true/false
//null->standalone value
//undefined -> not declarded yet
//symbol->unique

// object

console.log(typeof"harshul");


/* primitive
7 types : string,number,boolean,null,undefined,symbol,bigInt,
*/

const id =Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);

/* refrence(non primitive)
arrays,objects,functions*/

const heros =["shaktiman","chotabheem","krish"];
let mybobj={
    name:"harshul",
    age:21,
}

const myfunction=function(){
    console.log("hellow world");
}
//********************************************* */
  // stack(primitive)->copy, heap(non-primitive)->refrence
 
  let user={
    email:"user@google.com",
    upi:"harshulv49@axl",
  }
  let user2=user
  user2.email="hello@gamil.com"
  console.log(user.email);
  console.log(user2.email);
