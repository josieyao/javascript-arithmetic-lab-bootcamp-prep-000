/*var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})*/

function add(a, b){
  return a + b;
}

/*it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})*/

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  var product = (a * b);
  return product;
}

function divide(a,b){
  var divided = (a / b);
  return divided;
}

function inc(a){
  var n = parseInt(a + 1);
  return n; 
}

function dec(a){
  var n = parseInt(a - 1);
  return n;
}

function makeInt(a){
  var n = parseInt(a);
  return n;
}

function makeInt(a){
  var n = parseInt(a, 10);
  return n;
}

function preserveDecimal(a){
  var n = parseFloat(a, 10);
  return n;
}
