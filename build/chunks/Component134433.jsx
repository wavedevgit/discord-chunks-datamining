/** Chunk was on web.js **/
/** chunk id: 134433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk393951 = require("./393951.js"),
  Chunk319796 = require("./319796.js");
let p = Chunk692547.Z.unsafe_rawColors.PRIMARY_300,
  _ = Chunk692547.Z.unsafe_rawColors.WHITE,
  m = Chunk692547.Z.unsafe_rawColors.PRIMARY_630;

function h(e) {
  let {
    color: t,
    size: n,
    forcedIconColor: i,
    className: l,
    iconClassName: h
  } = e, [g, E] = (0, s.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.saturation]), b = (0, c.dQu)(p).hex(), y = null != t ? t : b, O = (0, o.ho)((0, o._i)(y), false, g ? E : null), v = (0, c.dQu)(_).hex(), S = (0, c.dQu)(m).hex(), I = null != i ? i : (0, d.B)({
    backgroundColor: y,
    colors: [v, S]
  }), T = n / 8;
  return (0, r.jsx)("div", {
    style: {
      background: O,
      width: n,
      height: n,
      borderRadius: n,
      lineHeight: "".concat(n, "px")
    },
    className: l,
    children: (0, r.jsx)(c.xPt, {
      size: "custom",
      color: I,
      className: a()(f.linkIcon, h),
      width: n - 2 * T,
      height: n - 2 * T,
      style: {
        margin: T
      }
    })
  })
}