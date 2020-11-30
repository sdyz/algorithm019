/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 思路：寻找一个数的平方等于num
  // 范围：[0,num]
  let left = 0,
    right = num,
    pointer = 0;
  while (left <= right) {
    pointer = Math.floor((left + right) / 2);
    let target = pointer * pointer;
    if (target === num) {
      return true;
    } else if (target > num) {
      right = pointer - 1;
    } else {
      left = pointer + 1;
    }
  }
  return false;
};
// @lc code=end
