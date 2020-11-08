/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * 1. 实现 fibonacci 数列
   * fn = f(n-1)+f(n-2) （f0=0，f1=1，n>=0）
   * 优化：重复计算的fn怎么优化？--加缓存
   */

  // function fn(n) {
  //   if (n === 0) return 0;
  //   if (n === 1) return 1;
  //   if (n >= 0) {
  //     return f(n - 1) + f(n - 2);
  //   }
  // }

  /**
   * 2. 滚动数组
   */
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// @lc code=end
