/** Chunk was on web.js **/
/** chunk id: 399307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk869146 = require("./869146.js"),
  Chunk531685 = require("./531685.js"),
  Chunk652215 = require("./652215.js"),
  Chunk392164 = require("./392164.js");

function s() {
  for (let e of r.A.getWindowKeys())
    if (e.startsWith(a.MLl.CALL_TILE_POPOUT) && r.A.getWindowVisible(e)) returntrue;
  returnfalse
}

function l() {
  return i.A.isVisible() || r.A.getWindowVisible(a.MLl.CHANNEL_CALL_POPOUT) || r.A.getWindowVisible(a.MLl.ACTIVITY_POPOUT) || r.A.getWindowVisible(o.f) || s()
}