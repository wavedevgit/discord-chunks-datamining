/** Chunk was on web.js **/
/** chunk id: 988306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u,
  u: () => d
}), require("./704826.js"), require("./35282.js"), require("./415506.js");
var Chunk209739 = require("./209739.js"),
  i = require.n(Chunk209739),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js");
let s = ">=10.0.22000",
  l = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
  c = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function u() {
  return !!(0, o.isWindows)() && !!o.isPlatformEmbedded && i().satisfies(a.Z.os.release, s)
}

function d(e) {
  return (0, o.getPlatform)() === o.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(l, c))) : "") : ""
}