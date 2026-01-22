/** Chunk was on web.js **/
/** chunk id: 18108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => o
});
let r = (e, t) => {
    let n = i(e, t);
    if (n > 0) {
      let r = n,
        i = a(e, t),
        o = (r / e.length + r / t.length + (r - i) / r) / 3;
      if (o < .7) return o;
      let l = .1;
      return o + s(e, t) * l * (1 - o)
    }
    return 0
  },
  i = (e, t) => {
    let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
      r = [],
      i = 0;
    for (var a = 0; a < e.length; a++)
      for (var s = Math.max(0, a - n); s <= Math.min(t.length, a + n); s++)
        if (e[a] === t[s] && !r[s]) {
          r[s] = true, i++;
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
      for (let s = Math.max(0, a - n); s <= Math.min(t.length, a + n); s++)
        if (e[a] === t[s] && !i[s]) {
          r.a += e[a], i[s] = true;
          break
        } i = [];
    for (let a = 0; a < t.length; a++)
      for (let s = Math.max(0, a - n); s <= Math.min(e.length, a + n); s++)
        if (t[a] === e[s] && !i[s]) {
          r.b += t[a], i[s] = true;
          break
        } let a = 0;
    for (let e = 0; e < r.a.length; e++) r.a[e] !== r.b[e] && a++;
    return Math.floor(a / 2)
  },
  s = (e, t) => {
    let n = 4,
      r = 0;
    for (; r < n; r++)
      if (e[r] !== t[r]) return r;
    return ++r
  };

function o(e, t, n) {
  let {
    caseSensitive: i = false
  } = null != n ? n : {};
  return i ? r(e, t) : r(e.toLowerCase(), t.toLowerCase())
}