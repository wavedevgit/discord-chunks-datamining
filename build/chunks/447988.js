/** Chunk was on 93886 **/
/** chunk id: 447988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js");
let l = (e, t, n) => {
    let [r, l] = (0, i.useState)(false);
    return (0, i.useEffect)(() => {
      let i = a(e);
      if (t || n || null == i) return void l(false);
      let r = i - Date.now();
      if (r <= 0) return void l(true);
      l(false);
      let o = setTimeout(() => {
        l(true)
      }, Math.min(0x7fffffff, r));
      return () => clearTimeout(o)
    }, [t, n, e]), r
  },
  a = e => {
    let t = null;
    return e.forEach(e => {
      let n = null;
      e.type === r.z.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === r.z.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
    }), t
  }