/** Chunk was on web.js **/
/** chunk id: 40333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk998304 = require("./998304.js");
let o = 500,
  l = 100;

function c(e) {
  let [t, n] = (0, r.useState)(e), [i, c] = (0, r.useState)(e), [u, d] = (0, r.useState)(e), f = (0, r.useRef)(u), p = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    c(e), n(f.current)
  }, [e]), (0, r.useEffect)(() => {
    if (null != p.current && cancelAnimationFrame(p.current), t === i) {
      p.current = null;
      return
    }
    let e = Date.now(),
      n = a().throttle(() => {
        let r = Math.min((Date.now() - e) / o, 1),
          a = (0, s.De)(t, i, r);
        d(a), f.current = a, r < 1 && (p.current = requestAnimationFrame(n))
      }, l);
    return p.current = requestAnimationFrame(n), () => {
      var e;
      cancelAnimationFrame(null != (e = p.current) ? e : 0), n.cancel()
    }
  }, [t, i]), u
}