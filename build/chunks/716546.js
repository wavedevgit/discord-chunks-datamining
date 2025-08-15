/** Chunk was on web.js **/
/** chunk id: 716546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk668781 = require("./668781.js"),
  Chunk998502 = require("./998502.js"),
  Chunk58406 = require("./58406.js"),
  Chunk761274 = require("./761274.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk58406.g {
  requestPermissionCore(e, t) {
    var n;
    return this.asyncify(null == (n = this.nativeUtils) ? true : n.nativePermssionRequestAuthorization, e, t)
  }
  hasPermissionCore(e, t) {
    var n;
    return this.asyncify(null == (n = this.nativeUtils) ? true : n.nativePermssionHasAuthorization, e, t)
  }
  asyncify(e, t, n) {
    let r = l.requestTypeLookup[t];
    if (true === r) return Promise.resolve(true);
    let i = () => null == e ? Promise.resolve(o.NZ.AUTHORIZED) : new Promise((t, n) => e(t, r));
    return this.requestAuthorization(t, i, n)
  }
  openSettings(e) {
    var t;
    if ((null == (t = this.nativeUtils) ? true : t.nativePermissionOpenSettings) == null) return;
    let n = l.requestTypeLookup[e];
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
      cancelText: a,
      confirmText: o
    } = e;
    r.Z.show({
      title: t,
      body: n,
      onConfirm: i,
      cancelText: a,
      confirmText: o
    })
  }
  constructor(...e) {
    super(...e), s(this, "nativeUtils", i.ZP.getDiscordUtils())
  }
}
s(l, "requestTypeLookup", {
  [Chunk761274.Eu.CAMERA]: Chunk998502.jK.Camera,
  [Chunk761274.Eu.AUDIO]: Chunk998502.jK.Microphone,
  [Chunk761274.Eu.PHOTOS]: Chunk998502.jK.Photo,
  [Chunk761274.Eu.INPUT_MONITORING]: Chunk998502.jK.InputMonitoring,
  [Chunk761274.Eu.SCREEN_RECORDING]: Chunk998502.jK.ScreenRecording
});
let c = new l