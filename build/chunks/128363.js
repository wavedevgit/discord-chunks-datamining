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
  return (0, r.e7)([l.default, a.default, o.default], () => {
    if (__OVERLAY__) return o.default.isInstanceLocked();
    let e = l.default.getOverlayRenderingTrackedGames();
    return 0 !== e.length && e.some(e => e.overlayMethod !== s.gl.Disabled && a.default.isInputLocked(e.pid))
  })
}
new Chunk710845.Z("OverlayUtils")