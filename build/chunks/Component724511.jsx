/** Chunk was on web.js **/
/** chunk id: 724511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk515315 = require("./515315.js");
let d = e => {
  let {
    className: t,
    guild: n,
    isSelected: a = true,
    width: d = 32,
    height: f = 32,
    shouldAnimate: p = true,
    isLocked: _ = false
  } = e, [h, m] = i.useState(false), g = (0, c.Iv)(n, 32, p && a), E = () => m(true), y = () => m(false);
  return (0, r.jsxs)("div", {
    onFocus: E,
    onBlur: y,
    onMouseOver: E,
    onMouseLeave: y,
    children: [(0, r.jsx)(l.Ay, {
      className: o()(u.dK, t),
      mask: a || h ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
      width: d,
      height: f,
      children: null == g ? (0, r.jsx)("div", {
        className: o()(u.$f, u.Gc),
        children: (0, r.jsx)("div", {
          className: u.Hj,
          children: (0, c.Rb)(n)
        })
      }) : (0, r.jsx)("img", {
        alt: n.name,
        src: g,
        className: u.$f
      })
    }), _ ? (0, r.jsx)("div", {
      className: u.bg,
      children: (0, r.jsx)(s.XAi, {
        size: "custom",
        color: "currentColor",
        width: 10,
        height: 10,
        className: u.YL
      })
    }) : null]
  })
}