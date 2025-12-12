/** Chunk was on web.js **/
/** chunk id: 916752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk110660 = require("./110660.js"),
  Chunk70956 = require("./70956.js"),
  Chunk660199 = require("./660199.js");
let c = [
    [2 * Chunk70956.Z.Seconds.MINUTE, Chunk70956.Z.Seconds.SECOND],
    [5 * Chunk70956.Z.Seconds.MINUTE, Chunk70956.Z.Seconds.MINUTE],
    [45 * Chunk70956.Z.Seconds.MINUTE, 2 * Chunk70956.Z.Seconds.MINUTE],
    [21 * Chunk70956.Z.Seconds.HOUR, 5 * Chunk70956.Z.Seconds.MINUTE]
  ],
  u = 2 * Chunk70956.Z.Seconds.HOUR;

function d(e) {
  let t = (0, a.Z)();
  return (r.useEffect(() => {
    if ("R" !== e.format) return;
    let n = 1e3 * u,
      r = Math.abs(e.parsed.diff(o()()));
    for (let [e, t] of c)
      if (r < 1e3 * e) {
        n = 1e3 * t;
        break
      } let i = setInterval(() => {
      t()
    }, n);
    return () => clearInterval(i)
  }, [t, e.format, e.parsed]), "R" === e.format) ? l.Qh.R(e.parsed) : e.formatted
}