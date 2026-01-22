/** Chunk was on web.js **/
/** chunk id: 303622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk616093 = require("./616093.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {};

function c(e) {
  let {
    labFeature: t,
    enabled: n
  } = e;
  l[t] = n
}
class u extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: l
    }
  }
  initialize(e) {
    for (var t in s.A) {
      var n, r;
      l[t] = null != (n = null == e || null == (r = e.toggleStates) ? true : r[t]) && n
    }
  }
  get(e) {
    var t;
    return null != (t = l[e]) && t
  }
  set(e, t) {
    return l[e] = t, t
  }
}
o(u, "displayName", "LabFeatureStore"), o(u, "persistKey", "LabFeatureStore");
let d = new u(Chunk73153.h, {
  LAB_FEATURE_TOGGLE: c
})