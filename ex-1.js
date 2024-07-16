function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }

  return result;
}
const numbers = [2, 7, 11, 15];
const target = 9;
//const target = 23;
console.log(twoSum(numbers, target));
