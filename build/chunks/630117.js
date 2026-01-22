/** Chunk was on 88615 **/
/** chunk id: 630117, original params: e,t,l (module,exports,require) **/
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
    l = (0, n.A)(e),
    u = t.length > 0 || l.length > 0;
  if (!u) return {
    shouldShow: false,
    expiringPowerups: [],
    expiringPowerupNames: [],
    warnings: []
  };
  let d = l.length > 0 ? a.intl.string(s.default["B3OfL/"]) : true,
    c = [...t.map(e => e.title), ...null != d ? [d] : []],
    f = [];
  return t.some(e => e.skuId === r.FB) && f.push(a.intl.string(o.default.Sfr0Jw)), l.length > 0 && f.push(a.intl.string(s.default.wiungr)), {
    shouldShow: u,
    expiringPowerups: t,
    expiringPowerupNames: c,
    warnings: f
  }
}