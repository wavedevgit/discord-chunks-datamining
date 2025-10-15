/** Chunk was on 29497 **/
/** chunk id: 560587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {};
class o extends(i = Chunk442837.ZP.Store) {
  getBranches(e) {
    var t;
    return null != (t = a[e]) ? t : []
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "ApplicationBranchStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "ApplicationBranchStore";
let c = new o(Chunk570140.Z, {
  OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branches: n
    } = e;
    a[t] = n
  },
  LOGOUT: function() {
    a = {}
  }
})