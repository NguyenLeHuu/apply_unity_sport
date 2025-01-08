const { twoSum } = require("../index");

// Test 1: Kiểm tra với mảng có nhiều cặp số thỏa mãn
test("should return indices of two numbers that add up to target (6)", () => {
  const nums = [3, 2, 4, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([
    [1, 2],
    [0, 3],
  ]);
});

// Test 2: Kiểm tra với mảng có nhiều cặp số thỏa mãn
test("should return indices of two numbers that add up to target (5)", () => {
  const nums = [1, 2, 3, 4];
  const target = 5;
  expect(twoSum(nums, target)).toEqual([
    [1, 2],
    [0, 3],
  ]);
});

// Test 3: Kiểm tra với mảng không có cặp nào thỏa mãn
test("should return an empty array when no two numbers add up to target", () => {
  const nums = [1, 2, 3];
  const target = 10;
  expect(twoSum(nums, target)).toEqual([]);
});

// Test 4: Kiểm tra với mảng có một cặp số trùng lặp
test("should return indices for duplicate numbers that sum up to target", () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([[0, 1]]);
});

// Test 5: Kiểm tra với mảng có các phần tử âm
test("should return indices of two numbers that add up to target (1)", () => {
  const nums = [-1, 1, 3, 4];
  const target = 3;
  expect(twoSum(nums, target)).toEqual([[0, 3]]);
});

// Test 6: Kiểm tra với mảng có độ dài nhỏ hơn 2
test("should return an empty array for an array with fewer than 2 elements", () => {
  const nums = [5];
  const target = 5;
  expect(twoSum(nums, target)).toEqual([]);
});
