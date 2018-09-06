const a = 15;
const b = 37;
const c = 61;
const someStr = "lorem";
const anthStr = "ipsum";
const someBool = true;

console.log((c-b) / a);
console.log((a+b) * (c-b) / a);

if(someStr.length === anthStr.length && someBool){
	console.log("yey");
}else if(b > a || b > c){
	console.log("yeey");
}
else{
	console.log("yeeey");
}

if(a + b > c || (someStr + "aa").length > 6){
	console.log("hello world!");
}
else{
	console.log("bye");
}