/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
   * 思路：
   * 长度、元素相同，位置不同
   * 知识点：
   * 1. 字符串转map，map结构key相同value会被覆盖，注意考虑重复key的情况！
   * 2. 英文单词排序，会按照字母表顺序
   * 3. string排序，先转数组，再sort，再转str
   * 时间复杂度：sort O(nlogn),比较两个字符串 O(n)。总的 O(nlogn)
   */

  // 边界条件判断
  if (s.length !== t.length) return false;

  /**
   * 方法1：哈希表 136 ms
   * 注意map存储，key重复会被覆盖！所以用计数器方式
   * 用obj是不是更方便..
   */
  // 1. map Map(5){ 'a' => 3, 'n' => 1, 'g' => 1, 'r' => 1, 'm' => 1 }
  const map = new Map();
  for (let i in s) {
    if (map.has(s[i])) {
      let count = map.get(s[i]);
      map.set(s[i], ++count); // 此处是++count，不能是count++!
    } else {
      map.set(s[i], 1);
    }
  }
  // 2. 再遍历t,map中查找，找到就delete，找不到直接false
  for (let i in t) {
    if (map.has(t[i]) && map.get(t[i]) > 0) {
      if (map.get(t[i]) == 1) {
        map.delete(t[i]);
      } else {
        let count = map.get(t[i]);
        map.set(t[i], --count);
      }
    } else {
      return false;
    }
  }
  return map.size === 0;

  /**
   * 方法2：直接排序
   * 转数组，排序(按字母排序) -> 一次遍历比较两个数组
   */

  //   let ss = s.split("").sort(),tt = t.split("").sort();
  //   let i = 0;
  //   while (i < ss.length) {
  //     if (ss[i] == tt[i]) {
  //       i++;
  //       continue;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;

  /**
   * 方法3：直接比较两个字符串是否全等 ！(112 ms)
   */
  //   let ss = s.split("").sort().join(),
  //     tt = t.split("").sort().join();
  //   return ss === tt;
};
// @lc code=end
