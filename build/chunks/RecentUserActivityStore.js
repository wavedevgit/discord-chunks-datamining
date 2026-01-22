/** Chunk was on 21738 **/
/** chunk id: 989937, original params: e,t,n (module,exports,require) **/
require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = new Set;

function o(e) {
  let {
    userActivities: t
  } = e;
  null != t && (s = new Set(t.map(e => e.application_id)))
}
class c extends(r = Chunk311907.Ay.Store) {
  get currentUserApplicationIds() {
    return s
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "RecentUserActivityStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "RecentUserActivityStore", new c(Chunk73153.h, {
  CONNECTION_OPEN_SUPPLEMENTAL: o,
  CONNECTION_OPEN_STATE_UPDATE: o
})