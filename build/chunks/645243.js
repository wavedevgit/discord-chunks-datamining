/** Chunk was on web.js **/
/** chunk id: 645243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => a
}), require("./65821.js");
var Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");

function a() {
  switch ((0, r.getPlatform)()) {
    case r.PlatformTypes.WINDOWS:
      let e = "x86";
      if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return i.lM6.WIN32;
      return i.lM6.WIN64;
    case r.PlatformTypes.OSX:
      return i.lM6.MACOS;
    case r.PlatformTypes.LINUX:
      return i.lM6.LINUX;
    default:
      throw Error("Unsupported build type")
  }
}