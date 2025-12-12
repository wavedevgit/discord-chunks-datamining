/** Chunk was on web.js **/
/** chunk id: 676742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk864106 = require("./864106.js"),
  Chunk215023 = require("./215023.js");
let s = 0x7fffffff;

function l(e) {
  let [t, n] = r.useState(false), l = r.useRef(null);
  return r.useEffect(() => {
    let t = () => {
      if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(false);
      let r = (0, o.fO)(e);
      n(r);
      let c = 1e3 * e.expiresAt + a.Cm - Date.now();
      if (!r && c > 0) {
        let e = new i.V7;
        e.start(Math.min(s, c), () => t()), l.current = e
      }
    };
    return t(), () => {
      var e;
      return null == (e = l.current) ? true : e.stop()
    }
  }, [e]), r.useEffect(() => {
    if (t) {
      var e;
      null == (e = l.current) || e.stop()
    }
  }, [t]), t ? true : e
}