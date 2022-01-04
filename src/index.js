module.exports = function toReadable (number) {
  const simpleNumber = {
    0: 'zero', 
		1: "one", 
		2: "two", 
		3: "three", 
		4: "four",
    5: "five", 
		6: "six", 
		7: "seven", 
		8: "eight",
		9: "nine",
    10: "ten", 
		11: "eleven", 
		12: "twelve",
		13: "thirteen",
    14: "fourteen", 
		15: "fifteen",
		16: "sixteen", 
		17: "seventeen",
    18: "eighteen", 
		19: "nineteen", 
		20: "twenty",
		30: "thirty",
    40: "forty", 
		50: "fifty", 
		60: "sixty", 
		70: "seventy",
    80: "eighty",
		90: "ninety"
};
let numStr = number.toString();
let res = '';
if (numStr.length === 3) {
  if (number % 10 !== 0) {
    res+= simpleNumber[(number - number % 100)  / 100] + ' hundred';
    if (number % 100 <= 19) {
      res+= ' ' + simpleNumber[number % 100];
    }
    if (number % 100 > 19) {
      res+= ' ' + simpleNumber[number % 100 - number % 10] + ' ' + simpleNumber[number % 10];
    }
  }   
  if (number % 10 === 0) {
    res+= simpleNumber[(number - number % 100)  / 100] + ' hundred ';
    if(number % 100 !== 0){
      res+= simpleNumber[number % 100 - number % 10]
    }
  } 
return res.trim();
}
if (numStr.length === 2) {
  if (number > 19) {
    if (number % 10 !== 0) {
      res+= simpleNumber[number - number % 10] + ' ' + simpleNumber[number % 10]
    }
    if (number % 10 === 0) {
      res += simpleNumber[number]
    }
  return res.trim()
  } else {
      return simpleNumber[number]
  }
}
return simpleNumber[number]
}
