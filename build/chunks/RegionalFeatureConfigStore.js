/** Chunk was on web.js **/
/** chunk id: 81428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk653741 = require("./653741.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null;

function c(e) {
  l = null != e.regionalFeatureConfig ? s.wN.fromConnectionOpen(e.regionalFeatureConfig) : null
}
class u extends(r = Chunk311907.Ay.Store) {
  getRegionalFeatureConfig() {
    return l
  }
  isFeatureAgeGated(e) {
    var t;
    return null != (t = null == l ? true : l.isFeatureAgeGated(e)) && t
  }
  isSettingTeenByDefault(e) {
    var t;
    return null != (t = null == l ? true : l.isFeatureTeenByDefault(e)) && t
  }
  hasAgeGatedFeatures() {
    var e;
    return null != (e = null == l ? true : l.hasAgeGatedFeatures()) && e
  }
  hasTeenDefaults() {
    var e;
    return null != (e = null == l ? true : l.hasTeenDefaults()) && e
  }
}
o(u, "displayName", "RegionalFeatureConfigStore");
let d = new u(Chunk73153.h, {
  CONNECTION_OPEN: c
})