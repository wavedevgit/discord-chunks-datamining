/** Chunk was on web.js **/
/** chunk id: 141106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BD: () => s,
  dQ: () => r,
  jO: () => l
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var r = function(e) {
  return e[e.ExactMatch = 0] = "ExactMatch", e[e.PrefixMatch = 1] = "PrefixMatch", e
}({});
let i = e => RegExp("\\p{P}", "gu").test(null != e ? e : "") || " " === e || "" === e,
  o = (e, t, n) => {
    if (n - t > e.length) returnfalse;
    let r = e.charAt(t - 1),
      o = e.charAt(n + 1);
    return i(r) && i(o)
  },
  a = (e, t) => i(e.charAt(t - 1)),
  s = (e, t, n, r) => 1 === r ? a(e, t) : o(e, t, n),
  l = (e, t, n, r) => {
    if (0 === r) return {
      start: t,
      end: n,
      keyword: e.substring(t, n + 1)
    };
    let o = n;
    for (; o < e.length - 1 && !i(e.charAt(o + 1));) o++;
    return {
      start: t,
      end: o,
      keyword: e.substring(t, o + 1)
    }
  }