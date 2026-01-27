/** Chunk was on web.js **/
/** chunk id: 626539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk157559 = require("./157559.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk325639 = require("./325639.js"),
  Chunk765682 = require("./765682.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk325639.V {
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
    let i = () => null == e ? Promise.resolve(s.F5.AUTHORIZED) : new Promise((t, n) => e(t, r));
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
      cancelText: a,
      confirmText: o
    } = e;
    r.A.show({
      title: t,
      body: n,
      onConfirm: i,
      cancelText: a,
      confirmText: o
    })
  }
  constructor(...e) {
    super(...e), l(this, "nativeUtils", a.Ay.getDiscordUtils()), l(this, "platformAlwaysPermits", (0, i.isLinux)() || (0, i.isWindows)())
  }
}
l(c, "requestTypeLookup", {
  [Chunk765682.iL.CAMERA]: Chunk837921.kw.Camera,
  [Chunk765682.iL.AUDIO]: Chunk837921.kw.Microphone,
  [Chunk765682.iL.PHOTOS]: Chunk837921.kw.Photo,
  [Chunk765682.iL.INPUT_MONITORING]: Chunk837921.kw.InputMonitoring,
  [Chunk765682.iL.SCREEN_RECORDING]: Chunk837921.kw.ScreenRecording
});
let u = new c