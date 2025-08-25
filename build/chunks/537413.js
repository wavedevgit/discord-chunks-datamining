/** Chunk was on web.js **/
/** chunk id: 537413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js");

function o(e, t, n) {
  for (let o of i.no[e])
    if ((0, r.Z)(e, o.resolution, o.fps, t, n)) return [o.resolution, o.fps];
  return null
}