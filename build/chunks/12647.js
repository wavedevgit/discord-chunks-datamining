/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(998502);
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
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.ZP.focus(e, t)
  },
  submitLiveCrashReport: e => r.ZP.submitLiveCrashReport(e),
  getPidFromDesktopSource: e => r.ZP.getPidFromDesktopSource(e),
  getAudioPid: e => r.ZP.getAudioPid(e),
  generateSessionFromPid: e => r.ZP.generateSessionFromPid(e)
}