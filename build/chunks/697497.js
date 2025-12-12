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
        i = o(e, t),
        s = (r / e.length + r / t.length + (r - i) / r) / 3;
      if (s < .7) return s;
      let l = .1;
      return s + a(e, t) * l * (1 - s)
    }
    return 0
  },
  i = (e, t) => {
    let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
      r = [],
      i = 0;
    for (var o = 0; o < e.length; o++)
      for (var a = Math.max(0, o - n); a <= Math.min(t.length, o + n); a++)
        if (e[o] === t[a] && !r[a]) {
          r[a] = true, i++;
          break
        } return i
  },
  o = (e, t) => {
    let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
      r = {
        a: "",
        b: ""
      },
      i = [];
    for (let o = 0; o < e.length; o++)
      for (let a = Math.max(0, o - n); a <= Math.min(t.length, o + n); a++)
        if (e[o] === t[a] && !i[a]) {
          r.a += e[o], i[a] = true;
          break
        } i = [];
    for (let o = 0; o < t.length; o++)
      for (let a = Math.max(0, o - n); a <= Math.min(e.length, o + n); a++)
        if (t[o] === e[a] && !i[a]) {
          r.b += t[o], i[a] = true;
          break
        } let o = 0;
    for (let e = 0; e < r.a.length; e++) r.a[e] !== r.b[e] && o++;
    return Math.floor(o / 2)
  },
  a = (e, t) => {
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