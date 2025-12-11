/** Chunk was on web.js **/
/** chunk id: 754376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk835473 = require("./835473.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.jsx"),
  Chunk611500 = require("./611500.jsx"),
  Chunk322785 = require("./322785.js"),
  Chunk290953 = require("./290953.js");

function d(e) {
  var t;
  let {
    applicationId: n,
    onMouseDown: d,
    onMouseMove: f,
    onMouseLeave: p,
    onFocus: _,
    idle: m
  } = e, h = (0, i.q)(n);
  return (0, r.jsxs)("div", {
    className: u.videoControls,
    onMouseMove: f,
    onMouseDown: d,
    onMouseLeave: p,
    children: [(0, r.jsx)("div", {
      className: u.topControls,
      children: (0, r.jsx)(s.r, {
        idle: m,
        title: null != (t = null == h ? true : h.name) ? t : "",
        onJumpToChannel: _,
        preventIdleComponent: o.Z
      })
    }), (0, r.jsx)("div", {
      className: u.bottomControls,
      children: (0, r.jsx)(a.Z, {
        grow: 1,
        shrink: 1,
        justify: a.Z.Justify.END,
        align: a.Z.Align.CENTER,
        children: (0, r.jsx)(l.Z, {
          applicationId: n,
          className: c.rightPipIcon
        })
      })
    })]
  })
}