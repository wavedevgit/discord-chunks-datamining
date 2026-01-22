/** Chunk was on web.js **/
/** chunk id: 277682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk765682 = require("./765682.js"),
  Chunk652215 = require("./652215.js");

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
class d extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    u = null != e ? e : u
  }
  getUserAgnosticState() {
    return u
  }
  hasPermission(e) {
    let t = u.permissionStates[e];
    return null != t && t === o.hL.ACCEPTED
  }
  handleSetNativePermission(e) {
    let {
      state: t,
      permissionType: n
    } = e, r = u.permissionStates, i = r[n];
    r[n] = t, i !== t && s.default.track(l.HAw.PERMISSIONS_ACKED, {
      type: n,
      action: t,
      previous_action: null != i ? i : o.hL.NONE
    })
  }
  constructor() {
    super(a.h, {
      SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
    })
  }
}
c(d, "displayName", "NativePermissionStore"), c(d, "persistKey", "NativePermissionsStore");
let f = d