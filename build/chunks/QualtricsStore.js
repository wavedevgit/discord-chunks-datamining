/** Chunk was on web.js **/
/** chunk id: 841110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
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
let s = {
  surveys: new Map
};

function l(e) {
  s.surveys.set(e.surveyId, e.surveyDetails)
}
class c extends(r = Chunk442837.ZP.Store) {
  getSurvey(e) {
    var t;
    return null != (t = s.surveys.get(e)) ? t : null
  }
}
a(c, "displayName", "QualtricsStore");
let u = new c(Chunk570140.Z, {
  QUALTRICS_SURVEY_FETCH_SUCCESS: l
})