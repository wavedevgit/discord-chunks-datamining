/** Chunk was on web.js **/
/** chunk id: 482617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk302221 = require("./302221.js");
let a = 500;

function o(e) {
  let [t, n] = (0, r.useState)(e), [o, s] = (0, r.useState)(e), [l, c] = (0, r.useState)(e), u = (0, r.useRef)(l), d = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    s(e), n(u.current)
  }, [e]), (0, r.useEffect)(() => {
    if (null != d.current && cancelAnimationFrame(d.current), t === o) {
      d.current = null;
      return
    }
    let e = Date.now(),
      n = () => {
        let r = Math.min((Date.now() - e) / a, 1),
          s = (0, i.BM)(t, o, r);
        c(s), u.current = s, r < 1 && (d.current = requestAnimationFrame(n))
      };
    return d.current = requestAnimationFrame(n), () => {
      var e;
      return cancelAnimationFrame(null != (e = d.current) ? e : 0)
    }
  }, [t, o]), l
}