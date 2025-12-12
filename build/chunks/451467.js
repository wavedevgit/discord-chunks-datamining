/** Chunk was on web.js **/
/** chunk id: 451467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk580991 = require("./580991.js"),
  Chunk280098 = require("./280098.js"),
  Chunk37113 = require("./37113.js");

function a(e, t, n, a, s, l) {
  if (e === o.ApplicationStreamPresets.PRESET_AUTO) return (0, r.IK)({
    location: "canStreamWithSettings"
  }).allowAutoQuality;
  for (let r of o.ND)
    if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.Z)(r, a, s, l)) returntrue;
  returnfalse
}