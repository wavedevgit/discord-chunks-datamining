/** Chunk was on 46653 **/
/** chunk id: 624030, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let l = {};
class a extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    Object.assign(l, e)
  }
  getState() {
    return l
  }
  shouldShowEducation(e) {
    returntrue !== l[e]
  }
}
o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
let d = new a(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return l[e.key] = e.value, true
  }
})