/** Chunk was on web.js **/
/** chunk id: 353835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk837921 = require("./837921.js");
let i = {
  flushDNSCache() {
    r.Ay.flushDNSCache()
  },
  flushCookies: () => r.Ay.flushCookies(),
  setApplicationBackgroundColor(e) {
    r.Ay.setApplicationBackgroundColor(e)
  },
  setZoomFactor: e => r.Ay.setZoomFactor(e),
  focus(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    r.Ay.focus(e, t)
  },
  submitLiveCrashReport: e => r.Ay.submitLiveCrashReport(e),
  getPidFromDesktopSource: e => r.Ay.getPidFromDesktopSource(e),
  getAudioPid: e => r.Ay.getAudioPid(e),
  generateSessionFromPid: e => r.Ay.generateSessionFromPid(e),
  getAppHardwareAccelerationEnabled: () => r.Ay.getEnableHardwareAcceleration()
}