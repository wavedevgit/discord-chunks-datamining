/** Chunk was on web.js **/
/** chunk id: 716546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk668781 = require("./668781.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk58406 = require("./58406.js"),
  Chunk761274 = require("./761274.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk58406.g {
  requestPermissionCore(e, t) {
    var n;
    return this.asyncify(this.platformAlwaysPermits || null == (n = this.nativeUtils) ? true : n.nativePermssionRequestAuthorization, e, t)
  }
  hasPermissionCore(e, t) {
    var n;
    return this.asyncify(this.platformAlwaysPermits || null == (n = this.nativeUtils) ? true : n.nativePermssionHasAuthorization, e, t)
  }
  asyncify(e, t, n) {
    let r = c.requestTypeLookup[t];
    if (true === r) return Promise.resolve(true);
    let i = () => null == e ? Promise.resolve(s.NZ.AUTHORIZED) : new Promise((t, n) => e(t, r));
    return this.requestAuthorization(t, i, n)
  }
  openSettings(e) {
    var t;
    if ((null == (t = this.nativeUtils) ? true : t.nativePermissionOpenSettings) == null) return;
    let n = c.requestTypeLookup[e];
    true !== n && this.nativeUtils.nativePermissionOpenSettings(n)
  }
  didHavePermission(e) {
    return this.storage.hasPermission(e)
  }
  openAlertModal(e) {
    let {
      title: t,
      body: n,
      onConfirm: i,
      cancelText: o,
      confirmText: a
    } = e;
    r.Z.show({
      title: t,
      body: n,
      onConfirm: i,
      cancelText: o,
      confirmText: a
    })
  }
  constructor(...e) {
    super(...e), l(this, "nativeUtils", o.ZP.getDiscordUtils()), l(this, "platformAlwaysPermits", (0, i.isLinux)() || (0, i.isWindows)())
  }
}
l(c, "requestTypeLookup", {
  [Chunk761274.Eu.CAMERA]: Chunk998502.jK.Camera,
  [Chunk761274.Eu.AUDIO]: Chunk998502.jK.Microphone,
  [Chunk761274.Eu.PHOTOS]: Chunk998502.jK.Photo,
  [Chunk761274.Eu.INPUT_MONITORING]: Chunk998502.jK.InputMonitoring,
  [Chunk761274.Eu.SCREEN_RECORDING]: Chunk998502.jK.ScreenRecording
});
let u = new c