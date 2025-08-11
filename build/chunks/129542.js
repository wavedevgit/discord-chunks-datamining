/** Chunk was on web.js **/
/** chunk id: 129542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
}), require("./415506.js");
var Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");

function o() {
  switch ((0, Chunk358085.getPlatform)()) {
    case Chunk358085.PlatformTypes.WINDOWS:
      let e = "x86";
      if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === module || "ia32" === module) return Chunk981631.QR$.WIN32;
      return Chunk981631.QR$.WIN64;
    case Chunk358085.PlatformTypes.OSX:
      return Chunk981631.QR$.MACOS;
    case Chunk358085.PlatformTypes.LINUX:
      return Chunk981631.QR$.LINUX;
    default:
      throw Error("Unsupported build type")
  }
}