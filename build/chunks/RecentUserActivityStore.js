/** Chunk was on 1272 **/
/** chunk id: 761781, original params: e,t,n (module,exports,require) **/
require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = new Set;

function s(e) {
  let {
    userActivities: t
  } = e;
  null != t && (o = new Set(t.map(e => e.application_id)))
}
class c extends(r = Chunk442837.ZP.Store) {
  get currentUserApplicationIds() {
    return o
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "RecentUserActivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "RecentUserActivityStore", new c(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: s,
  CONNECTION_OPEN_STATE_UPDATE: s
})