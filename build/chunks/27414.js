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
  for (let e of Chunk928518.Z.getWindowKeys())
    if (module.startsWith(Chunk981631.KJ3.CALL_TILE_POPOUT) && Chunk928518.Z.getWindowVisible(module)) returntrue;
  returnfalse
}

function l() {
  return Chunk451478.Z.isVisible() || Chunk928518.Z.getWindowVisible(Chunk981631.KJ3.CHANNEL_CALL_POPOUT) || Chunk928518.Z.getWindowVisible(Chunk981631.KJ3.ACTIVITY_POPOUT) || Chunk928518.Z.getWindowVisible(Chunk501787.$J) || s()
}