/** Chunk was on 77870 **/
/** chunk id: 158476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk857071 = require("./857071.js");
let o = null,
  c = null;

function u() {
  let e = a.A.mostRecentLurkedGuildId();
  null != e ? (o = e, c = null) : (c = null != o ? o : null, o = null)
}
class d extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([a.A], u)
  }
  shouldShowPopout(e) {
    return c === e
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "LurkerModePopoutStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "LurkerModePopoutStore";
let p = new d(Chunk73153.h)