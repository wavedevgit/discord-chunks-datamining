/** Chunk was on web.js **/
/** chunk id: 874124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk258585 = require("./258585.js"),
  Chunk787931 = require("./787931.js"),
  Chunk753070 = require("./753070.js");

function o(e, t, n, o, s, l) {
  if (e === a.jQ.PRESET_AUTO) return (0, r.eO)({
    location: "canStreamWithSettings"
  }).allowAutoQuality;
  for (let r of a.ZV)
    if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.A)(r, o, s, l)) returntrue;
  returnfalse
}