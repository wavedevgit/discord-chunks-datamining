/** Chunk was on 40184 **/
/** chunk id: 652730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk41776 = require("./41776.js");
let s = null,
  c = null;

function u() {
  let e = o.Z.mostRecentLurkedGuildId();
  null != e ? (s = e, c = null) : (c = null != s ? s : null, s = null)
}
class d extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([o.Z], u)
  }
  shouldShowPopout(e) {
    return c === e
  }
}(i = "displayName") in d ? Object.defineProperty(d, i, {
  value: "LurkerModePopoutStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[i] = "LurkerModePopoutStore";
let p = new d(Chunk570140.Z)