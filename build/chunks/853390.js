/** Chunk was on web.js **/
/** chunk id: 853390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  f: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk927813 = require("./927813.js");
let s = e => String(e).padStart(2, "0"),
  o = e => {
    let t = Math.floor(e) % a.A.Seconds.MINUTE,
      n = Math.floor(e / a.A.Seconds.MINUTE) % a.A.Seconds.MINUTE,
      r = Math.floor(e / a.A.Seconds.HOUR);
    return 0 === r ? "".concat(s(n), ":").concat(s(t)) : "".concat(s(r), ":").concat(s(n), ":").concat(s(t))
  };

function l(e) {
  let {
    start: t,
    end: n
  } = e, [s] = (0, r.useState)(new i.IX), [o, l] = (0, r.useState)(Date.now());
  (0, r.useEffect)(() => (s.start(a.A.Millis.HALF_SECOND, () => l(Date.now())), () => s.stop()), [s]);
  let c = (n - t) / a.A.Millis.SECOND,
    u = Math.max(Math.min((o - t) / a.A.Millis.SECOND, c), 0);
  return {
    elapsed: u,
    duration: c,
    percentage: Math.max(Math.min(u / c, 1), 0)
  }
}