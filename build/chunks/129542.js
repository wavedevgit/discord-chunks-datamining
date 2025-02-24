/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  D: () => o
}), n(411104);
var r = n(358085),
  i = n(981631);

function o() {
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