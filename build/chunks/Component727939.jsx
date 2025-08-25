/** Chunk was on web.js **/
/** chunk id: 727939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js");
let c = 48,
  u = 32,
  d = 32,
  f = 32,
  _ = function(e) {
    let {
      className: t,
      defaultPosition: n = l.VD2.BOTTOM_RIGHT,
      children: _,
      topOffset: p
    } = e, [h, m] = i.useState(n), g = (0, o.e7)([s.Z], () => s.Z.windowSize());
    return (0, r.jsx)(a._, {
      className: t,
      position: h,
      id: 0,
      onMove: (e, t) => m(t),
      maxX: g.width,
      maxY: g.height,
      edgeOffsetTop: null != p ? p : c,
      edgeOffsetBottom: u,
      edgeOffsetLeft: d,
      edgeOffsetRight: f,
      children: _
    })
  }