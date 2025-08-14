/** Chunk was on 93886 **/
/** chunk id: 761781, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var n, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk890022 = require("./890022.js");
let o = new Set;

function c(e) {
  let {
    userActivities: t
  } = e;
  (0, s.uw)("RecentUserActivityStore") && null != t && (o = new Set(t.map(e => e.application_id)))
}
class d extends(n = Chunk442837.ZP.Store) {
  get currentUserApplicationIds() {
    return o
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "RecentUserActivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "RecentUserActivityStore";
let u = new d(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: c,
  CONNECTION_OPEN_STATE_UPDATE: c
})