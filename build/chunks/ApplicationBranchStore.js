/** Chunk was on 64233 **/
/** chunk id: 65204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var i, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = {};
class o extends(r = Chunk311907.Ay.Store) {
  getBranches(e) {
    var t;
    return null != (t = a[e]) ? t : []
  }
}(i = "displayName") in o ? Object.defineProperty(o, i, {
  value: "ApplicationBranchStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[i] = "ApplicationBranchStore";
let u = new o(Chunk73153.h, {
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