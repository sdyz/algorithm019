/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (!s.length) return ''

    const a = s.split('') 

    for (let i = 0, n = a.length; i < n; i += 2 * k) {
        let l = i, r = Math.min(l + k - 1, n), t 
        while (l < r) {
            t = a[l]
            a[l++] = a[r]
            a[r--] = t
        }
    }

    return a.join('')
};
