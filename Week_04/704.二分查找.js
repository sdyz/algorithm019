/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * 二分查找
 * 有序的整型数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 一般查找思路为遍历或arr.indexOf
   * 二分查找可以使复杂度降低为O(logn）
   */
  /*** 模板代码 ***/
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2); // 向下取整
    // mid = (left + right) >> 1; // 右移一位相当于除2
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // 容易丢!!
};
// @lc code=end
