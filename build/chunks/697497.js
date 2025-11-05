/** Chunk was on web.js **/
/** chunk id: 697497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
let r = (e, t) => {
    let n = i(e, t);
    if (n > 0) {
      let r = n,
        i = a(e, t),
        s = (r / e.length + r / t.length + (r - i) / r) / 3;
      if (s < .7) return s;
      let l = .1;
      return s + o(e, t) * l * (1 - s)
    }
    return 0
  },
  i = (e, t) => {
    let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
      r = [],
      i = 0;
    for (var a = 0; a < e.length; a++)
      for (var o = Math.max(0, a - n); o <= Math.min(t.length, a + n); o++)
        if (e[a] === t[o] && !r[o]) {
          r[o] = true, i++;
          break
        } return i
  },
  a = (e, t) => {
    let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
      r = {
        a: "",
        b: ""
      },
      i = [];
    for (let a = 0; a < e.length; a++)
      for (let o = Math.max(0, a - n); o <= Math.min(t.length, a + n); o++)
        if (e[a] === t[o] && !i[o]) {
          r.a += e[a], i[o] = true;
          break
        } i = [];
    for (let a = 0; a < t.length; a++)
      for (let o = Math.max(0, a - n); o <= Math.min(e.length, a + n); o++)
        if (t[a] === e[o] && !i[o]) {
          r.b += t[a], i[o] = true;
          break
        } let a = 0;
    for (let e = 0; e < r.a.length; e++) r.a[e] !== r.b[e] && a++;
    return Math.floor(a / 2)
  },
  o = (e, t) => {
    let n = 4,
      r = 0;
    for (; r < n; r++)
      if (e[r] !== t[r]) return r;
    return ++r
  };

function s(e, t, n) {
  let {
    caseSensitive: i = false
  } = null != n ? n : {};
  return i ? r(e, t) : r(e.toLowerCase(), t.toLowerCase())
}