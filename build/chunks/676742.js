/** Chunk was on web.js **/
/** chunk id: 676742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk864106 = require("./864106.js");
let o = 0x7fffffff;

function s(e) {
  let [t, n] = r.useState(false), s = r.useRef(null);
  return r.useEffect(() => {
    let t = () => {
      if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(false);
      let r = (0, a.fO)(e);
      n(r);
      let l = 1e3 * e.expiresAt - Date.now();
      if (!r && l > 0) {
        let e = new i.V7;
        e.start(Math.min(o, l), () => t()), s.current = e
      }
    };
    return t(), () => {
      var e;
      return null == (e = s.current) ? true : e.stop()
    }
  }, [e]), r.useEffect(() => {
    if (t) {
      var e;
      null == (e = s.current) || e.stop()
    }
  }, [t]), t ? true : e
}