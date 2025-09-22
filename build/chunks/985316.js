/** Chunk was on web.js **/
/** chunk id: 985316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Px: () => l,
  hv: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk663893 = require("./663893.js");
let o = {
    mass: 1,
    tension: 1e3,
    friction: 48
  },
  s = {
    mass: 1,
    tension: 1200,
    friction: 80
  },
  l = o;

function c(e, t) {
  let n = e === a.D.ENTERING || e === a.D.ENTERED,
    {
      reducedMotion: l
    } = r.useContext(i.Sfi),
    c = n || l.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
  return (0, i.q_F)({
    opacity: +!!n,
    transform: c,
    config: n ? o : s,
    delay: 64 * !!n
  }, "animate-always")
}