var AddIt: (nums: { num1: number; num2?: number; }) => number;

var setA = { num1: 10 };
var setB = { num1: 10, num2: 5 };

AddIt = function (nums) {
    if (nums.num2 === undefined) {
        return nums.num1 + nums.num2;
    }
    return nums.num1 + nums.num1;
};

var value1: number = AddIt(setA);
console.log('setA = ' + value1);

var value2: number = AddIt(setB);
console.log('setB = ' + value2);

//!== We really wanted that to be not equal to undefined
