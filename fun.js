///1
function convert(amount) {
  const conv = 8;
	const am = amount*conv;
	return am;	
};
console.log(convert(4));
///2


function qwer(str) {
	const a = str.split("");
	let revrs = a.reverse();
	let join = revrs.join("");
	return join;	
}
console.log(qwer('saghhj'));
///3


function staircase(n) {
  let line = Array(n + 1).fill(' ');
  //line[n] = '';
  for (let i = n - 1; i >= 0; i--) {
    line[i] = '#';
    console.log(line.join(''));
  }
};
staircase(4)

// ////4
function sumRange(start, end) {
  let sum = 0;
  for(let i = start; i <= end; i++){
    sum+=i;
  }
  return sum;
}
console.log(sumRange(2, 4));

//////5

function min(a, b, c) { 
  const minNumber = Math.min(a, b, c);
  return minNumber;
}
console.log(min(196,888, 999));

/////6



/////7
function firstAndLastToUpper(str) {
  let newStr = str[0].toUpperCase() + str.slice(1, -1) + str[str.length-1].toUpperCase();
  console.log(newStr);
}
firstAndLastToUpper('rrhadfgsfeeaw');



/////8
function cursorCheck(str) {
  let newStr = str.toLowerCase();
  if(newStr.includes("ostap") 
     || newStr.includes("ironman") 
     || newStr.includes("cursor")){
    return true;
  } else {
    return false;
  }
}
cursorCheck('ostap');


/////9
function toUppercase(str) {
  let newStr = '';
  for(let i = 0; i <= str.length-1; i++){
    newStr += str[i].toUpperCase();
  }
  console.log(newStr);
}
toUppercase('abc');

////10

function removeDuplicationLetters(str){
	let uniq="";
	for(let i=0; i < str.length; i++) {
		if(uniq.indexOf(str.charAt(i))==-1 || str.charAt(i) == ' ') {
		uniq += str[i];
		}
	}
  console.log(uniq);
}
removeDuplicationLetters('London is a capital of Great Britain');

///11

function fibonacci(n){
  let a = 1;
  let b = 1;
  for (var i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  console.log(b);
}

fibonacci(7);


////6

function printPyramid(n){
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 1; j < n - i; j++) {
			str += ' ';
		}
		for (let k = 1; k <= (2 * i + 1); k++) {
			str += '#';
		}
		console.log(str);
	}
}
printPyramid(8)




