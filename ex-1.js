function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //console.log(numbers[0] + numbers[1]);
  //console.log(numbers[1] + numbers[2]);
  //console.log(numbers[2] + numbers[3]);
  let left = 0;
  let right = 0;

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === numbers[0]) {
      left = numbers[0];
      right = left + numbers[1];
    } else if (numbers[i] === numbers[1]) {
      left = numbers[1];
      right = left + numbers[2];
    } else if (numbers[i] === numbers[2]) {
      left = numbers[2];
      right = left + numbers[3];
    }
    //console.log(right);
  }
  return right;
}
const numbers = [2, 7, 11, 15];
console.log(twoSum(numbers));
