/** Chunk was on 87646 **/
/** chunk id: 624030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};
class o extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    Object.assign(a, e)
  }
  getState() {
    return a
  }
  shouldShowEducation(e) {
    returntrue !== a[e]
  }
}
l(o, "displayName", "ActivityInviteEducationStore"), l(o, "persistKey", "ActivityInviteEducationExperimentStore");
let c = new o(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return a[e.key] = e.value, true
  }
})