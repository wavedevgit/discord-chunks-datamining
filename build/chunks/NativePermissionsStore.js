/** Chunk was on web.js **/
/** chunk id: 281058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk761274 = require("./761274.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {
  permissionStates: {}
};
class d extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = null != e ? e : u
  }
  getUserAgnosticState() {
    return u
  }
  hasPermission(e) {
    let t = u.permissionStates[e];
    return null != t && t === s.PQ.ACCEPTED
  }
  handleSetNativePermission(e) {
    let {
      state: t,
      permissionType: n
    } = e, r = u.permissionStates, i = r[n];
    r[n] = t, i !== t && o.default.track(l.rMx.PERMISSIONS_ACKED, {
      type: n,
      action: t,
      previous_action: null != i ? i : s.PQ.NONE
    })
  }
  constructor() {
    super(Chunk570140.Z, {
      SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
    })
  }
}
c(d, "displayName", "NativePermissionStore"), c(d, "persistKey", "NativePermissionsStore");
let f = d