/** Chunk was on 45094 **/
/** chunk id: 560587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var i, s, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {};
class d extends(r = Chunk442837.ZP.Store) {
  getBranches(e) {
    var t;
    return null != (t = o[e]) ? t : []
  }
}
s = "ApplicationBranchStore", (i = "displayName") in d ? Object.defineProperty(d, i, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[i] = s;
let c = new d(Chunk570140.Z, {
  OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branches: n
    } = e;
    o[t] = n
  },
  LOGOUT: function() {
    o = {}
  }
})