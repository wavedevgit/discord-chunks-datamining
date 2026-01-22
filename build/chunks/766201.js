/** Chunk was on 21738 **/
/** chunk id: 766201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk651162 = require("./651162.js");
let l = (e, t, n) => {
    let [i, l] = (0, r.useState)(false);
    return (0, r.useEffect)(() => {
      let r = a(e);
      if (t || n || null == r) return void l(false);
      let i = r - Date.now();
      if (i <= 0) return void l(true);
      l(false);
      let s = setTimeout(() => {
        l(true)
      }, Math.min(0x7fffffff, i));
      return () => clearTimeout(s)
    }, [t, n, e]), i
  },
  a = e => {
    let t = null;
    return e.forEach(e => {
      let n = null;
      e.type === i.g.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === i.g.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
    }), t
  }