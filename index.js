//function test 1
function isPalindrome(s) {
  const n = s.length;

  // Duyệt qua nửa chuỗi đầu tiên và so sánh với nửa còn lại
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - i - 1]) {
      return false;
    }
  }

  return true;
}

//function test 2
function twoSum(nums, target) {
  let map = new Map();
  let result = []; //kq trả về

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Tính phần bù

    if (map.has(complement)) {
      result.push([map.get(complement), i]); // Thêm cặp index nếu có phần bù
    }

    map.set(nums[i], i); //không bỏ trên đầu vòng lặp vì giả sử target là 6 và có 1 phần tử trong mảng là 3
  }

  return result;
}

//import chạy test 3
require("./test_3");

module.exports = { isPalindrome, twoSum };
