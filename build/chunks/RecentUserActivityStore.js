/** Chunk was on 97162 **/
/** chunk id: 761781, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var n, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk890022 = require("./890022.js");
let s = new Set;

function l(e) {
  let {
    userActivities: t
  } = e;
  (0, o.uw)("RecentUserActivityStore") && null != t && (s = new Set(t.map(e => e.application_id)))
}
class d extends(n = Chunk442837.ZP.Store) {
  get currentUserApplicationIds() {
    return s
  }
}(i = "displayName") in d ? Object.defineProperty(d, i, {
  value: "RecentUserActivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[i] = "RecentUserActivityStore";
let p = new d(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: l,
  CONNECTION_OPEN_STATE_UPDATE: l
})