/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  /**
   * 思路：
   * 遍历，判断与stack中最后一个值是否匹配，匹配就pop，否则就push
   * 先进后出的数据结构--> 栈
   * 怎么模拟栈？数组：push、pop 都是操作队尾
   * 怎么判断匹配上了？matchRules规则
   */

  // 基数一定不匹配
  if (s.length % 2 === 1) {
    return false;
  }
  if (s.length == 0) return true;

  let stack = [];
  // 左括号直接push,右括号根据key进行value匹配
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const stackTop = stack[stack.length - 1];
      if (s[i] === map.get(stackTop)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};
// @lc code=end
