/** Chunk was on 25292 **/
/** chunk id: 141106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BD: () => c,
  dQ: () => i,
  jO: () => a
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var r, i = ((r = {})[r.ExactMatch = 0] = "ExactMatch", r[r.PrefixMatch = 1] = "PrefixMatch", r);
let o = e => RegExp("\\p{P}", "gu").test(null != e ? e : "") || " " === e || "" === e,
  c = (e, t, n, r) => {
    if (1 === r) return o(e.charAt(t - 1));
    {
      if (n - t > e.length) returnfalse;
      let r = e.charAt(t - 1),
        i = e.charAt(n + 1);
      return o(r) && o(i)
    }
  },
  a = (e, t, n, r) => {
    if (0 === r) return {
      start: t,
      end: n,
      keyword: e.substring(t, n + 1)
    };
    let i = n;
    for (; i < e.length - 1 && !o(e.charAt(i + 1));) i++;
    return {
      start: t,
      end: i,
      keyword: e.substring(t, i + 1)
    }
  }