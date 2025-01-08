const { isPalindrome } = require("../index");

// Test 1: Kiểm tra với chuỗi là palindrome
test('should return true for "madam"', () => {
  expect(isPalindrome("madam")).toBe(true);
});

// Test 2: Kiểm tra với chuỗi không phải palindrome
test('should return false for "hello"', () => {
  expect(isPalindrome("hello")).toBe(false);
});

// Test 3: Kiểm tra với chuỗi có độ dài chẵn là palindrome
test('should return true for "abba"', () => {
  expect(isPalindrome("abba")).toBe(true);
});

// Test 4: Kiểm tra với chuỗi có độ dài chẵn không phải palindrome
test('should return false for "abcd"', () => {
  expect(isPalindrome("abcd")).toBe(false);
});

// Test 5: Kiểm tra với chuỗi rỗng (được coi là palindrome)
test("should return true for an empty string", () => {
  expect(isPalindrome("")).toBe(true);
});

// Test 6: Kiểm tra với chuỗi chỉ chứa một ký tự (được coi là palindrome)
test('should return true for "a"', () => {
  expect(isPalindrome("a")).toBe(true);
});

// Test 7: Kiểm tra với chuỗi có ký tự đặc biệt
test('should return false for "A man, a plan, a canal, Panama!"', () => {
  expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(false);
});
