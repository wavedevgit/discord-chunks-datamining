/** Chunk was on web.js **/
/** chunk id: 128363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xG: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk710845 = require("./710845.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js");

function c() {
  return (0, Chunk442837.e7)([Chunk371651.default, Chunk808506.default, Chunk237997.default], () => {
    if (__OVERLAY__) return Chunk237997.default.isInstanceLocked();
    let e = Chunk371651.default.getOverlayRenderingTrackedGames();
    return 0 !== module.length && module.some(e => e.overlayMethod !== s.gl.Disabled && a.default.isInputLocked(e.pid))
  })
}
new Chunk710845.Z("OverlayUtils")