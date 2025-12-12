/** Chunk was on web.js **/
/** chunk id: 482617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk302221 = require("./302221.js");
let s = 500,
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
      n = o().throttle(() => {
        let r = Math.min((Date.now() - e) / s, 1),
          o = (0, a.BM)(t, i, r);
        d(o), f.current = o, r < 1 && (p.current = requestAnimationFrame(n))
      }, l);
    return p.current = requestAnimationFrame(n), () => {
      var e;
      cancelAnimationFrame(null != (e = p.current) ? e : 0), n.cancel()
    }
  }, [t, i]), u
}