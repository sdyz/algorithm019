/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * 1. 思路：
   * 时间复杂度 O(n)
   * 需要考虑结束条件!
   */
  let counter = 0;
  for (let i = 0; i < nums.length; ) {
    if (i == nums.length - counter && nums[i] == 0) {
      break;
    }
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      counter++;
    } else {
      i++;
    }
  }
  // 2. 别人的代码
  // nums.sort((a,b) => b? 0: -1)
};
// @lc code=end
