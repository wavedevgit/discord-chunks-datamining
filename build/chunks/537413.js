/** Chunk was on web.js **/
/** chunk id: 537413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js");

function a(e, t, n) {
  let a = i.no[e];
  if (null == a) return null;
  for (let i of a)
    if ((0, r.Z)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
  return null
}