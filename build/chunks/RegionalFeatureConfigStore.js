/** Chunk was on web.js **/
/** chunk id: 123937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk622026 = require("./622026.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null;

function c(e) {
  l = null != e.regionalFeatureConfig ? o.IC.fromConnectionOpen(e.regionalFeatureConfig) : null
}
class u extends(r = Chunk442837.ZP.Store) {
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
}
s(u, "displayName", "RegionalFeatureConfigStore");
let d = new u(Chunk570140.Z, {
  CONNECTION_OPEN: c
})