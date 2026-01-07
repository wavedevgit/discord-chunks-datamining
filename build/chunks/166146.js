/** Chunk was on 44799 **/
/** chunk id: 166146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk494497 = require("./494497.js"),
  Chunk447941 = require("./447941.js"),
  Chunk618460 = require("./618460.js"),
  Chunk914820 = require("./914820.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, o.Z)(e),
    n = (0, i.Z)(e),
    u = t.length > 0 || n.length > 0;
  if (!u) return {
    shouldShow: false,
    expiringPowerups: [],
    expiringPowerupNames: [],
    warnings: []
  };
  let c = n.length > 0 ? s.intl.string(l.default["B3OfL/"]) : true,
    d = [...t.map(e => e.title), ...null != c ? [c] : []],
    f = [];
  return t.some(e => e.skuId === r.A$) && f.push(s.intl.string(a.default.Sfr0Jw)), n.length > 0 && f.push(s.intl.string(l.default.wiungr)), {
    shouldShow: u,
    expiringPowerups: t,
    expiringPowerupNames: d,
    warnings: f
  }
}