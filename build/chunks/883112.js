/** Chunk was on web.js **/
/** chunk id: 883112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk27867 = require("./27867.js"),
  Chunk927813 = require("./927813.js"),
  Chunk379418 = require("./379418.js");
let c = [
    [2 * Chunk927813.A.Seconds.MINUTE, Chunk927813.A.Seconds.SECOND],
    [5 * Chunk927813.A.Seconds.MINUTE, Chunk927813.A.Seconds.MINUTE],
    [45 * Chunk927813.A.Seconds.MINUTE, 2 * Chunk927813.A.Seconds.MINUTE],
    [21 * Chunk927813.A.Seconds.HOUR, 5 * Chunk927813.A.Seconds.MINUTE]
  ],
  u = 2 * Chunk927813.A.Seconds.HOUR;

function d(e) {
  let t = (0, o.A)();
  return (r.useEffect(() => {
    if ("R" !== e.format) return;
    let n = 1e3 * u,
      r = Math.abs(e.parsed.diff(a()()));
    for (let [e, t] of c)
      if (r < 1e3 * e) {
        n = 1e3 * t;
        break
      } let i = setInterval(() => {
      t()
    }, n);
    return () => clearInterval(i)
  }, [t, e.format, e.parsed]), "R" === e.format) ? l.kx.R(e.parsed) : e.formatted
}