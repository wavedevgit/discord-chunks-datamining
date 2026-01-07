/** Chunk was on web.js **/
/** chunk id: 12647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk998502 = require("./998502.js");
let i = {
  flushDNSCache() {
    r.ZP.flushDNSCache()
  },
  flushCookies: () => r.ZP.flushCookies(),
  setApplicationBackgroundColor(e) {
    r.ZP.setApplicationBackgroundColor(e)
  },
  setZoomFactor: e => r.ZP.setZoomFactor(e),
  focus(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    r.ZP.focus(e, t)
  },
  submitLiveCrashReport: e => r.ZP.submitLiveCrashReport(e),
  getPidFromDesktopSource: e => r.ZP.getPidFromDesktopSource(e),
  getAudioPid: e => r.ZP.getAudioPid(e),
  generateSessionFromPid: e => r.ZP.generateSessionFromPid(e),
  getAppHardwareAccelerationEnabled: () => r.ZP.getEnableHardwareAcceleration()
}