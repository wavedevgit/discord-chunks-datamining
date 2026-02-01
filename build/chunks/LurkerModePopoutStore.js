/** Chunk was on 61344 **/
/** chunk id: 158476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk857071 = require("./857071.js");
let o = null,
  c = null;

function u() {
  let e = s.A.mostRecentLurkedGuildId();
  null != e ? (o = e, c = null) : (c = null != o ? o : null, o = null)
}
class d extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([s.A], u)
  }
  shouldShowPopout(e) {
    return c === e
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "LurkerModePopoutStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "LurkerModePopoutStore";
let h = new d(Chunk73153.h)