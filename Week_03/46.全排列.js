/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //   let n = nums.length;
  let res = [],
    arr = [];
  const backTrack = (arr) => {
    if (arr.length == nums.length) {
      res.push(arr);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i]);
        backTrack(arr.slice());
        arr.pop();
      }
    }
  };
  backTrack(arr);
  return res;
};
// @lc code=end
