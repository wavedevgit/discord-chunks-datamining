/** Chunk was on 48898 **/
/** chunk id: 912996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};
class o extends(i = Chunk311907.Ay.PersistedStore) {
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
let c = new o(Chunk73153.h, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return a[e.key] = e.value, true
  }
})