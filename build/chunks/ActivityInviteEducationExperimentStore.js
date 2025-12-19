/** Chunk was on 95546 **/
/** chunk id: 624030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class a extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    Object.assign(s, e)
  }
  getState() {
    return s
  }
  shouldShowEducation(e) {
    returntrue !== s[e]
  }
}
o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
let c = new a(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return s[e.key] = e.value, true
  }
})