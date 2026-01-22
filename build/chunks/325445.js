/** Chunk was on web.js **/
/** chunk id: 325445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk507698 = require("./507698.js");
let s = 0x7fffffff;

function o(e) {
  let [t, n] = r.useState(false), o = r.useRef(null);
  return r.useEffect(() => {
    let t = () => {
      if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(false);
      let r = (0, a.bS)(e);
      n(r);
      let l = 1e3 * e.expiresAt - Date.now();
      if (!r && l > 0) {
        let e = new i.Ep;
        e.start(Math.min(s, l), () => t()), o.current = e
      }
    };
    return t(), () => {
      var e;
      return null == (e = o.current) ? true : e.stop()
    }
  }, [e]), r.useEffect(() => {
    if (t) {
      var e;
      null == (e = o.current) || e.stop()
    }
  }, [t]), t ? true : e
}