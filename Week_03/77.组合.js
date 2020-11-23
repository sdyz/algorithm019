/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  const dfs = (ans, i) => {
    if (ans.length == k) {
      res.push([...ans]);
    }
    for (i; i <= n; i++) {
      ans.push(i);
      dfs(ans, i + 1);
      ans.pop();
    }
  };
  dfs([], 1);
  return res;
};
// @lc code=end
