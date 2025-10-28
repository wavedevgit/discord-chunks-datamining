/** Chunk was on 78662 **/
/** chunk id: 807693, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = {};
class i extends(l = Chunk442837.ZP.Store) {
  getEULA(e) {
    return c[e]
  }
}(n = "displayName") in i ? Object.defineProperty(i, n, {
  value: "EULAStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : i[n] = "EULAStore";
let s = new i(Chunk570140.Z, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    c[t.id] = t
  }
})