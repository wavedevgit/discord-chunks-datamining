/** Chunk was on web.js **/
/** chunk id: 194082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OH: () => d,
  ZP: () => p,
  eE: () => f,
  jZ: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk525734 = require("./525734.js"),
  u = function(e) {
    return e.RED = "RED", e.GRAY = "GRAY", e
  }({});
let d = {
    LARGE: Chunk525734.liveLarge,
    SMALL: Chunk525734.liveSmall
  },
  f = {
    [Chunk481060.Dv2.ROUND]: Chunk525734.liveShapeRound,
    [Chunk481060.Dv2.ROUND_LEFT]: Chunk525734.liveShapeRoundLeft,
    [Chunk481060.Dv2.ROUND_RIGHT]: Chunk525734.liveShapeRoundRight,
    [Chunk481060.Dv2.SQUARE]: ""
  };

function _(e) {
  let {
    className: t,
    style: n,
    shape: i = s.Dv2.ROUND,
    look: u = "RED",
    size: _ = d.LARGE
  } = e;
  return "RED" === u ? (0, r.jsx)(s.IGR, {
    text: l.intl.string(l.t.dI3q4h),
    className: a()(t, c.live, _),
    color: o.Z.unsafe_rawColors.RED_400.css,
    shape: f[i],
    style: n
  }) : (0, r.jsx)(s.IGR, {
    text: l.intl.string(l.t.dI3q4h),
    className: a()(t, c.live, _, c.grey),
    disableColor: true,
    shape: f[i],
    style: n
  })
}
_.Looks = u, _.Sizes = d;
let p = _