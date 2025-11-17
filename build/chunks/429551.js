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
let o = e => String(e).padStart(2, "0"),
  s = e => {
    let t = Math.floor(e) % a.Z.Seconds.MINUTE,
      n = Math.floor(e / a.Z.Seconds.MINUTE) % a.Z.Seconds.MINUTE,
      r = Math.floor(e / a.Z.Seconds.HOUR);
    return 0 === r ? "".concat(o(n), ":").concat(o(t)) : "".concat(o(r), ":").concat(o(n), ":").concat(o(t))
  };

function l(e) {
  let {
    start: t,
    end: n
  } = e, [o] = (0, r.useState)(new i.Xp), [s, l] = (0, r.useState)(Date.now());
  (0, r.useEffect)(() => (o.start(a.Z.Millis.HALF_SECOND, () => l(Date.now())), () => o.stop()), [o]);
  let c = (n - t) / a.Z.Millis.SECOND,
    u = Math.max(Math.min((s - t) / a.Z.Millis.SECOND, c), 0);
  return {
    elapsed: u,
    duration: c,
    percentage: Math.max(Math.min(u / c, 1), 0)
  }
}