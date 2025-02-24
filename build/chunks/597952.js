/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(358085);

function i() {
  let e = "";
  return (0, r.isWindows)() ? e = "platform-win" : (0, r.isMac)() ? e = "platform-osx" : (0, r.isLinux)() ? e = "platform-linux" : (0, r.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
}