/** Chunk was on 93886 **/
/** chunk id: 761781, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var n, r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk890022 = require("./890022.js");
let c = new Set;

function d(e) {
  let {
    userActivities: t
  } = e;
  (0, o.uw)("RecentUserActivityStore") && null != t && (c = new Set(t.map(e => e.application_id)))
}
class u extends(n = Chunk442837.ZP.Store) {
  get currentUserApplicationIds() {
    return c
  }
}
l = "RecentUserActivityStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = l;
let m = new u(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: d,
  CONNECTION_OPEN_STATE_UPDATE: d
})