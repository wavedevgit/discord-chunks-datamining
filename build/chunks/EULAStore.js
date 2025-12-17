/** Chunk was on 78662 **/
/** chunk id: 807693, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var a, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let d = {};
class l extends(i = Chunk442837.ZP.Store) {
  getEULA(n) {
    return d[n]
  }
}(a = "displayName") in l ? Object.defineProperty(l, a, {
  value: "EULAStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : l[a] = "EULAStore";
let o = new l(Chunk570140.Z, {
  EULA_FETCH_SUCCESS: function(n) {
    let {
      eula: e
    } = n;
    d[e.id] = e
  }
})