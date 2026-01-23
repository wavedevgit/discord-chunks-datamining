/** Chunk was on 88615 **/
/** chunk id: 630117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./321073.js");
var Chunk512750 = require("./512750.js"),
  Chunk6316 = require("./6316.js"),
  Chunk141406 = require("./141406.js"),
  Chunk294726 = require("./294726.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, i.A)(e),
    n = (0, l.A)(e),
    u = t.length > 0 || n.length > 0;
  if (!u) return {
    shouldShow: false,
    expiringPowerups: [],
    expiringPowerupNames: [],
    warnings: []
  };
  let d = n.length > 0 ? a.intl.string(o.default["B3OfL/"]) : true,
    c = [...t.map(e => e.title), ...null != d ? [d] : []],
    p = [];
  return t.some(e => e.skuId === r.FB) && p.push(a.intl.string(s.default.Sfr0Jw)), n.length > 0 && p.push(a.intl.string(o.default.wiungr)), {
    shouldShow: u,
    expiringPowerups: t,
    expiringPowerupNames: c,
    warnings: p
  }
}