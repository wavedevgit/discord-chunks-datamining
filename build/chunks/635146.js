/** Chunk was on web.js **/
/** chunk id: 635146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Px: () => c,
  hv: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk251052 = require("./251052.js"),
  Chunk213305 = require("./213305.js"),
  Chunk219855 = require("./219855.js");
let s = {
    mass: 1,
    tension: 1e3,
    friction: 48
  },
  l = {
    mass: 1,
    tension: 1200,
    friction: 80
  },
  c = s;

function u(e, t) {
  let n = e === o.D.ENTERING || e === o.D.ENTERED,
    {
      reducedMotion: c
    } = r.useContext(a.S),
    u = n || c.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
  return (0, i.q)({
    opacity: +!!n,
    transform: u,
    config: n ? s : l,
    delay: 64 * !!n
  }, "animate-always")
}