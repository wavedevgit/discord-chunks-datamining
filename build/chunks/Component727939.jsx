/** Chunk was on web.js **/
/** chunk id: 727939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js");
let c = {
    top: 48,
    bottom: 32,
    left: 32,
    right: 32
  },
  u = function(e) {
    let {
      className: t,
      defaultPosition: n = l.VD2.BOTTOM_RIGHT,
      children: u,
      topOffset: d
    } = e, [f, _] = i.useState(n), p = (0, o.e7)([s.Z], () => s.Z.windowSize());
    return (0, r.jsx)(a._, {
      className: t,
      position: f,
      id: 0,
      onMove: (e, t) => _(t),
      maxX: p.width,
      maxY: p.height,
      edgeOffsetTop: null != d ? d : c.top,
      edgeOffsetBottom: c.bottom,
      edgeOffsetLeft: c.left,
      edgeOffsetRight: c.right,
      children: u
    })
  }