/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * 思路：
   * 1. 暴力求解，三重for循环
   * 2. 转换为求两数之和： a+b=-c、但是有多解
   * 3. 双指针、排序
   */

  /**
   * 1. 三重for
   */
  // for (let i = 0; i < nums.length - 2; i++) {
  //   for (let j = i + 1; j < nums.length - 1; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       // ...
  //     }
  //   }
  // }

  /**
   * 2. 怎么避免返回值重复-利用排序可以避免重复答案【规律代码！】
   *  - 排序之后，枚举到的不会重复
   *  - 同时每次循环时，相邻的重复元素要跳过
   *
   * 排序 array.sort() 时间复杂度 O(nlogn)
   *
   * 普通跳过：
   * if(i>0 && nums[i] === nums[i+1]){continue} // 从第二位开始，要求与上一位值不同
   * 双指针跳过：
   * while (left < right && nums[left] === nums[left + 1]) {
   *  left++;
   * }
   */

  /**
   * 3. 双指针
   * 当需要枚举数组中的两个元素时，如果随着第一个元素的递增，第二个元素是递减的，那么就可以使用双指针的方法。
   * 时间复杂度 O(n)
   */

  /**
   * 最终解法: 双指针 + 去重
   * 时间复杂度 o(n^2)
   */

  /**
   * 双指针方法
   * 需要兼容是否有多组解
   * @param {*} nums
   * @param {*} target
   * @returns [[-1,2],[0,1]]
   */

  const temp = [];
  const arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    // 重复跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let target = -arr[i];
    let left = i + 1,
      right = nums.length - 1;
    // 双指针循环体
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        temp.push([nums[i], nums[left], nums[right]]);
        //---多组解，继续搜索；跳过重复值
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
        //---
      } else if (sum < target) {
        // 往大移
        left++;
      } else {
        // 往小移
        right--;
      }
    }
  }
  return temp;
};
// @lc code=end
