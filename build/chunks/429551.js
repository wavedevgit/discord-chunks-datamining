/** Chunk was on web.js **/
/** chunk id: 429551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l,
  m: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk70956 = require("./70956.js");
let a = e => String(e).padStart(2, "0"),
  s = e => {
    let t = Math.floor(e) % o.Z.Seconds.MINUTE,
      n = Math.floor(e / o.Z.Seconds.MINUTE) % o.Z.Seconds.MINUTE,
      r = Math.floor(e / o.Z.Seconds.HOUR);
    return 0 === r ? "".concat(a(n), ":").concat(a(t)) : "".concat(a(r), ":").concat(a(n), ":").concat(a(t))
  };

function l(e) {
  let {
    start: t,
    end: n
  } = e, [a] = (0, r.useState)(new i.Xp), [s, l] = (0, r.useState)(Date.now());
  (0, r.useEffect)(() => (a.start(o.Z.Millis.HALF_SECOND, () => l(Date.now())), () => a.stop()), [a]);
  let c = (n - t) / o.Z.Millis.SECOND,
    u = Math.max(Math.min((s - t) / o.Z.Millis.SECOND, c), 0);
  return {
    elapsed: u,
    duration: c,
    percentage: Math.max(Math.min(u / c, 1), 0)
  }
}