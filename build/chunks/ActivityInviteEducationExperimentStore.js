/** Chunk was on 46653 **/
/** chunk id: 624030, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let l = {};
class a extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(t) {
    Object.assign(l, t)
  }
  getState() {
    return l
  }
  shouldShowEducation(t) {
    returntrue !== l[t]
  }
}
o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
let d = new a(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(t) {
    return l[t.key] = t.value, true
  }
})