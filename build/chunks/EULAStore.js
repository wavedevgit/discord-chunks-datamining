/** Chunk was on 78662 **/
/** chunk id: 807693, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let l = {};
class o extends(i = Chunk442837.ZP.Store) {
  getEULA(e) {
    return l[e]
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "EULAStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "EULAStore";
let c = new o(Chunk570140.Z, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: n
    } = e;
    l[n.id] = n
  }
})