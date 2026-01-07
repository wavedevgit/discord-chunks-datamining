/** Chunk was on web.js **/
/** chunk id: 27414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk928518 = require("./928518.js"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js"),
  Chunk501787 = require("./501787.js");

function s() {
  for (let e of r.Z.getWindowKeys())
    if (e.startsWith(a.KJ3.CALL_TILE_POPOUT) && r.Z.getWindowVisible(e)) returntrue;
  returnfalse
}

function l() {
  return i.Z.isVisible() || r.Z.getWindowVisible(a.KJ3.CHANNEL_CALL_POPOUT) || r.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT) || r.Z.getWindowVisible(o.$J) || s()
}