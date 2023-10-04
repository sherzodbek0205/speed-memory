
// function getValue(key) {
//  let person = {
//   name: "Sherzodbek",
//   lastname : "Usmonov",
//   age : 20,
//  };

// return person[key]|| "not found";

// }
// const b = getValue("name");
// console.log(b);
function checkValue(key) {
 let b= [];
 person1 = {
  name: "Sherzodbek",
  age : 20,
  salary : 400,
 };
 person2 = {
  name: "kent",
  salary : 500,
 };
if(person1[key] && person2[key]){
 b.push(person1[key]);
 b.push(person2[key]);
 return b;
}
else return  "false";

}
console.log(checkValue("salary"));