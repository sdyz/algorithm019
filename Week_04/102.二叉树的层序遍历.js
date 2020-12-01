/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * 层序遍历即逐层地、从左到右访问所有结点。
   * 返回一个二维数组
   * 相当于BFS，但BFS直接返回一个一维数组就可以
   * 用数组模拟队列，push+shift
   */
  //   3
  //   / \
  //  9  20
  //    /  \
  //   15   7
  // input:  [3,9,20,null,null,15,7]
  // output:  [[3],[9,20],[15,7]]

  let res = [];
  if (!root) {
    return res;
  }
  let queue = [[root, 0]];
  while (queue.length) {
    let [top, level] = queue.shift();
    if (res[level]) {
      res[level].push(top.val);
    } else {
      res[level] = [];
      res[level].push(top.val);
    }
    top.left && queue.push([top.left, level + 1]);
    top.right && queue.push([top.right, level + 1]);
  }
  return res;
};
// @lc code=end
