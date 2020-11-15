/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 前序遍历 中 左 -> 右
  const res = [];
  const recursive = (root) => {
    if (root == null) return;
    res.push(root.val);
    for (let i in root.children) {
      recursive(root.children[i]);
    }
  };

  recursive(root);
  return res;
};
// @lc code=end
