/** Chunk was on web.js **/
/** chunk id: 638395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk288219 = require("./288219.js");

function s(e, t, n) {
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
class u extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: l
    }
  }
  initialize(e) {
    for (var t in a.Z) {
      var n, r;
      l[t] = null != (r = null == e || null == (n = e.toggleStates) ? true : n[t]) && r
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
s(u, "displayName", "LabFeatureStore"), s(u, "persistKey", "LabFeatureStore");
let d = new u(Chunk570140.Z, {
  LAB_FEATURE_TOGGLE: c
})