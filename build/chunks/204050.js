/** Chunk was on 95782 **/
/** chunk id: 204050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => c,
  p: () => a
}), require("./747238.js"), require("./812715.js"), require("./65821.js");
var Chunk299855 = require("./299855.js"),
  r = require.n(Chunk299855),
  Chunk77729 = require("./77729.js"),
  Chunk723702 = require("./723702.js");
let o = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;

function a() {
  return !!(0, i.isWindows)() && !!i.isPlatformEmbedded && r().satisfies(l.A.os.release, ">=10.0.22000")
}

function c(e) {
  return (0, i.getPlatform)() === i.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(o, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))) : "") : ""
}