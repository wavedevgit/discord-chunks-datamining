/** Chunk was on web.js **/
/** chunk id: 476697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk874124 = require("./874124.js"),
  Chunk753070 = require("./753070.js");

function a(e, t, n) {
  let a = i.yw[e];
  if (null == a) return null;
  for (let i of a)
    if ((0, r.A)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
  return null
}