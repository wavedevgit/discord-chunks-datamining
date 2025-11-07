/** Chunk was on 13140 **/
/** chunk id: 652730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk41776 = require("./41776.js");
let s = null,
  c = null;

function u() {
  let e = Chunk41776.Z.mostRecentLurkedGuildId();
  null != module ? (s = module, c = null) : (c = null != s ? s : null, s = null)
}
class d extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk41776.Z], u)
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
let p = new d(Chunk570140.Z)