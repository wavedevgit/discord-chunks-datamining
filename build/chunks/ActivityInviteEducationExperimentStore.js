/** Chunk was on web.js **/
/** chunk id: 624030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};

function l(e) {
  return s[e.key] = e.value, true
}
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
a(c, "displayName", "ActivityInviteEducationStore"), a(c, "persistKey", "ActivityInviteEducationExperimentStore");
let u = new c(Chunk570140.Z, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: l
})