/** Chunk was on web.js **/
/** chunk id: 447988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js");
let a = 0x7fffffff,
  o = (e, t, n) => {
    let [i, o] = (0, r.useState)(false);
    return (0, r.useEffect)(() => {
      let r = s(e);
      if (t || n || null == r) return void o(false);
      let i = r - Date.now();
      if (i <= 0) return void o(true);
      o(false);
      let l = setTimeout(() => {
        o(true)
      }, Math.min(a, i));
      return () => clearTimeout(l)
    }, [t, n, e]), i
  },
  s = e => {
    let t = null;
    return e.forEach(e => {
      let n = null;
      if (e.type === i.z.IMMERSIVE_BANNER) {
        let t = e;
        n = null != t.endTime ? t.endTime.getTime() : null
      } else e.type === i.z.COUNTDOWN_TIMER && (n = e.endTime.getTime());
      (null == t || null != n && n < t) && (t = n)
    }), t
  }