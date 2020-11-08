/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 1. 暴力法(双重for),时间复杂度O(n^2)
   * 1) 确认下标范围 2）确认返回值
   * 下标规律：
   * 0 < i < nums.length - 1(第一位 ~ 倒数第二位)
   * i + 1 < j < nums.length(第i+1位 ~ 最后一位)
   */
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  /**
   * 2. 哈希表方式
   * 一般什么情况下会想到hash表呢？
   * 1) 快速寻找数组中是否存在目标元素
   *
   * 思路：遍历数组,当第一个值确定时，使用indexOf查找第二个值是否存在，存在则结束...
   * 时间复杂度：O(n)?
   * i范围 [0,length-1]
   * 注意条件：数组中同一个元素不能使用两遍 [3,2,4] --> 6
   */
  // 方法1：很慢。。是因为 nums.indexOf 查找慢吗？
  //   for (let i = 0; i < nums.length; i++) {
  //     // 增加判断条件：查找时另一个下标不能是自己
  //     if (nums.indexOf(aValue) !== -1 && nums.indexOf(aValue) !== i) {
  //       return [i, nums.indexOf(aValue)];
  //     }
  //   }

  // 方法2：
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i);
    }
  }
};
// @lc code=end
