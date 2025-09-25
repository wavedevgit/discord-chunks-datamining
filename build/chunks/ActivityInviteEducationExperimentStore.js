/** Chunk was on 95546 **/
/** chunk id: 624030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class c extends(r = Chunk442837.ZP.PersistedStore) {
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
l(c, "displayName", "ActivityInviteEducationStore"), l(c, "persistKey", "ActivityInviteEducationExperimentStore");
let a = new c(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return s[e.key] = e.value, true
  }
})