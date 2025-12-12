/** Chunk was on web.js **/
/** chunk id: 537413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js");

function o(e, t, n) {
  let o = i.no[e];
  if (null == o) return null;
  for (let i of o)
    if ((0, r.Z)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
  return null
}