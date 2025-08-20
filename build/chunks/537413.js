/** Chunk was on web.js **/
/** chunk id: 537413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js");

function a(e, t, n) {
  for (let a of i.no[e])
    if ((0, r.Z)(e, a.resolution, a.fps, t, n)) return [a.resolution, a.fps];
  return null
}