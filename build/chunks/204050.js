/** Chunk was on web.js **/
/** chunk id: 204050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d,
  p: () => u
}), require("./747238.js"), require("./812715.js"), require("./65821.js");
var Chunk299855 = require("./299855.js"),
  i = require.n(Chunk299855),
  Chunk77729 = require("./77729.js"),
  Chunk723702 = require("./723702.js");
let o = ">=10.0.22000",
  l = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
  c = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function u() {
  return !!(0, s.isWindows)() && !!s.isPlatformEmbedded && i().satisfies(a.A.os.release, o)
}

function d(e) {
  return (0, s.getPlatform)() === s.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(l, c))) : "") : ""
}