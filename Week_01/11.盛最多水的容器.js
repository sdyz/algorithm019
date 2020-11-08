/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 1. 暴力法
   * 思路：双重for循环，时间复杂度 O(n^2)
   * 把其他方法先封装出去，不影响主思路
   * 求最大面积即可，不需要存下标值
   */

  // let max = 0;
  // for (let i = 0; i < height.length - 1; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     max = Math.max(max, getArea(j - i, Math.min(height[i], height[j])));
  //   }
  // }
  // return max;

  /**
   * 2. 双指针法
   * 思路：时间复杂度 n
   * 每次移动小的
   * 指针间距离：j - i
   */

  let i = 0;
  let j = height.length - 1;
  let maxArea = getArea(j - i, Math.min(height[i], height[j]));

  while (i < j) {
    if (height[i] <= height[j]) {
      i++;
      if (height[i] > height[i - 1]) {
        maxArea = Math.max(
          getArea(Math.min(height[i], height[j]), j - i),
          maxArea
        );
      }
    } else {
      j--;
      if (height[j] > height[j + 1]) {
        maxArea = Math.max(
          getArea(Math.min(height[i], height[j]), j - i),
          maxArea
        );
      }
    }
  }
  return maxArea;
};

const getArea = (x, y) => {
  return x * y;
};
// @lc code=end
