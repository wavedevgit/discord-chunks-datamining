/** Chunk was on web.js **/
/** chunk id: 880949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk741470 = require("./741470.js");
let d = e => {
  let {
    className: t,
    guild: n,
    isSelected: a = true,
    width: d = 32,
    height: f = 32,
    shouldAnimate: p = true,
    isLocked: _ = false
  } = e, [m, h] = i.useState(false), g = (0, c.EB)(n, 32, p && a), E = () => h(true), b = () => h(false);
  return (0, r.jsxs)("div", {
    onFocus: E,
    onBlur: b,
    onMouseOver: E,
    onMouseLeave: b,
    children: [(0, r.jsx)(l.ZP, {
      className: o()(u.mask, t),
      mask: a || m ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: d,
      height: f,
      children: null == g ? (0, r.jsx)("div", {
        className: o()(u.guildIcon, u.guildIconWithoutImage),
        children: (0, r.jsx)("div", {
          className: u.guildAcronym,
          children: (0, c.gM)(n)
        })
      }) : (0, r.jsx)("img", {
        alt: n.name,
        src: g,
        className: u.guildIcon
      })
    }), _ ? (0, r.jsx)("div", {
      className: u.categoryItemLockIconContainer,
      children: (0, r.jsx)(s.mBM, {
        size: "custom",
        color: "currentColor",
        width: 10,
        height: 10,
        className: u.categoryItemLockIcon
      })
    }) : null]
  })
}