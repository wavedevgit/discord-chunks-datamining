/** Chunk was on web.js **/
/** chunk id: 194082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OH: () => d,
  ZP: () => _,
  eE: () => f,
  jZ: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435215 = require("./435215.js"),
  u = function(e) {
    return e.RED = "RED", e.GRAY = "GRAY", e
  }({});
let d = {
    LARGE: Chunk435215.liveLarge,
    SMALL: Chunk435215.liveSmall
  },
  f = {
    [Chunk481060.Dv2.ROUND]: Chunk435215.liveShapeRound,
    [Chunk481060.Dv2.ROUND_LEFT]: Chunk435215.liveShapeRoundLeft,
    [Chunk481060.Dv2.ROUND_RIGHT]: Chunk435215.liveShapeRoundRight,
    [Chunk481060.Dv2.SQUARE]: ""
  };

function p(e) {
  let {
    className: t,
    style: n,
    shape: i = s.Dv2.ROUND,
    look: u = "RED",
    size: p = d.LARGE
  } = e;
  return "RED" === u ? (0, r.jsx)(s.IGR, {
    text: l.intl.string(l.t.dI3q4h),
    className: o()(t, c.live, p),
    color: a.Z.unsafe_rawColors.RED_400.css,
    shape: f[i],
    style: n
  }) : (0, r.jsx)(s.IGR, {
    text: l.intl.string(l.t.dI3q4h),
    className: o()(t, c.live, p, c.grey),
    disableColor: true,
    shape: f[i],
    style: n
  })
}
p.Looks = u, p.Sizes = d;
let _ = p