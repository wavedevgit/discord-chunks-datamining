/** Chunk was on 1272 **/
/** chunk id: 447988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk685816 = require("./685816.js");
let l = (e, t, n) => {
    let [i, l] = (0, r.useState)(false);
    return (0, r.useEffect)(() => {
      let r = a(e);
      if (t || n || null == r) return void l(false);
      let i = r - Date.now();
      if (i <= 0) return void l(true);
      l(false);
      let o = setTimeout(() => {
        l(true)
      }, Math.min(0x7fffffff, i));
      return () => clearTimeout(o)
    }, [t, n, e]), i
  },
  a = e => {
    let t = null;
    return e.forEach(e => {
      let n = null;
      e.type === i.z.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === i.z.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
    }), t
  }