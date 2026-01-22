/** Chunk was on web.js **/
/** chunk id: 797632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
  surveys: new Map
};

function l(e) {
  o.surveys.set(e.surveyId, e.surveyDetails)
}
class c extends(r = Chunk311907.Ay.Store) {
  getSurvey(e) {
    var t;
    return null != (t = o.surveys.get(e)) ? t : null
  }
}
s(c, "displayName", "QualtricsStore");
let u = new c(Chunk73153.h, {
  QUALTRICS_SURVEY_FETCH_SUCCESS: l
})