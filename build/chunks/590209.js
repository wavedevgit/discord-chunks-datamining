/** Chunk was on web.js **/
/** chunk id: 590209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  yq: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk626584 = require("./626584.js"),
  Chunk242286 = require("./242286.js"),
  Chunk256415 = require("./256415.js"),
  Chunk41984 = require("./41984.js"),
  Chunk833551 = require("./833551.js");

function c() {
  return (0, r.bG)([l.default, a.default, s.default], () => {
    if (__OVERLAY__) return s.default.isInstanceLocked();
    let e = l.default.getOverlayRenderingTrackedGames();
    return 0 !== e.length && e.some(e => e.overlayMethod !== o.Ue.Disabled && a.default.isInputLocked(e.pid))
  })
}
new Chunk626584.A("OverlayUtils")