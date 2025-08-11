/** Chunk was on web.js **/
/** chunk id: 597952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk358085 = require("./358085.js");

function i() {
  let e = "";
  return (0, Chunk358085.isWindows)() ? e = "platform-win" : (0, Chunk358085.isMac)() ? e = "platform-osx" : (0, Chunk358085.isLinux)() ? e = "platform-linux" : (0, Chunk358085.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(module, " platform-overlay") : module
}