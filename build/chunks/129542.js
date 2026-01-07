/** Chunk was on web.js **/
/** chunk id: 129542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => a
}), require("./415506.js");
var Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");

function a() {
  switch ((0, r.getPlatform)()) {
    case r.PlatformTypes.WINDOWS:
      let e = "x86";
      if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return i.QR$.WIN32;
      return i.QR$.WIN64;
    case r.PlatformTypes.OSX:
      return i.QR$.MACOS;
    case r.PlatformTypes.LINUX:
      return i.QR$.LINUX;
    default:
      throw Error("Unsupported build type")
  }
}