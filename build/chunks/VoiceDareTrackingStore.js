/** Chunk was on web.js **/
/** chunk id: 823854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  getProgressForUserId(e) {
    return null
  }
  getTrackingEntryForUserId(e) {
    return null
  }
  hasVoiceDareForUserId(e) {
    returnfalse
  }
  getProgressForDareId(e) {
    return null
  }
  getActiveDareForUserId(e) {
    return null
  }
}
s(l, "displayName", "VoiceDareTrackingStore");
let c = new l(Chunk73153.h, {})