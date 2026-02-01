/** Chunk was on 12907 **/
/** chunk id: 912996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class a extends(i = Chunk311907.Ay.PersistedStore) {
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
let c = new a(Chunk73153.h, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return s[e.key] = e.value, true
  }
})