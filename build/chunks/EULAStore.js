/** Chunk was on 51868 **/
/** chunk id: 807693, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var n, l, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let i = {};
class s extends(a = Chunk442837.ZP.Store) {
  getEULA(e) {
    return i[e]
  }
}
l = "EULAStore", (n = "displayName") in s ? Object.defineProperty(s, n, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : s[n] = l;
let u = new s(Chunk570140.Z, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    i[t.id] = t
  }
})