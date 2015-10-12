//IE works best for debugging
var AddIt;
var setA = { num1: 10 };
var setB = { num1: 10, num2: 5 };
AddIt = function (nums) {
    if (nums.num2 === undefined) {
        return nums.num1 + nums.num2;
    }
    return nums.num1 + nums.num1;
};
//!== We really wanted that to be not equal to undefined
var value1 = AddIt(setA);
console.log('setA = ' + value1);
var value2 = AddIt(setB);
console.log('setB = ' + value2);
//# sourceMappingURL=04-debugging.js.map