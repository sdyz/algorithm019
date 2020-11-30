/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
/**
 * 《贪心算法》
 * 局部最优
 * 贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择，
 * 选择的贪心策略必须具备无后效性，即某个状态以前的过程不会影响以后的状态，只与当前状态有关。
 */
var lemonadeChange = function (bills) {
  // test:[5,5,5,10,20] --> true
  /**
   * 思路：枚举所有情况
   * 1. curr = 5
   * 2. curr = 10 ? 需要减去一个5
   * 3. curr = 20 ? 需要减去一个10和一个5（比3个5进行后续找零更有利，贪心..），没有的话减去3个5
   */
  /**
   * 待改进！！
   * wallet.indexOf(5) 查找效率低
   * 考虑转换成其他方式记录，比如 count 记录5元10元个数，进行++/--
   * splice也就不需要了！
   */
  const wallet = [];
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      wallet.push(5);
    } else if (bills[i] === 10) {
      // 减去一个5
      const _i = wallet.indexOf(5);
      if (_i !== -1) {
        wallet.splice(_i, 1);
        wallet.push(10);
      } else {
        return false;
      }
    } else {
      // 同时减去一个10和一个5
      const _i = wallet.indexOf(10),
        _j = wallet.indexOf(5);
      if (_i !== -1 && _j !== -1) {
        wallet.splice(_i, 1);
        wallet.splice(wallet.indexOf(5), 1); // j 下标变了
        wallet.push(20);
      } else if (wallet.indexOf(5) !== -1) {
        // 是否有3个5
        let counter = 3;
        for (const _k in wallet) {
          if (counter > 0 && wallet[_k] === 5) {
            wallet.splice(_k, 1);
            counter--;
          }
        }
        if (counter > 0) {
          return false;
        }
        wallet.push(20);
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
