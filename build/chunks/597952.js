/** Chunk was on web.js **/
/** chunk id: 597952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk358085 = require("./358085.js");

function i() {
  let e = "";
  return (0, r.isWindows)() ? e = "platform-win" : (0, r.isMac)() ? e = "platform-osx" : (0, r.isLinux)() ? e = "platform-linux" : (0, r.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
}