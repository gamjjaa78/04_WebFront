function exam1(a) {
  console.log("Hello, "+"["+a+"]"+"!");
}
print1("고양이");

//--------------------------
function print2(fn) { 
console.log(fn(3, 4));
}

const sumFn = function(a, b) {
return a + b;
  }

print2(sumFn);

//----------------------------
const sumFn1 = function(a, b) {
return a * b;
  }

function print2(fn) { 
console.log(fn(5, 6));
}
print2(sumFn1);

