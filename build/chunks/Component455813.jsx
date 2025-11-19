/** Chunk was on web.js **/
/** chunk id: 455813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk249458 = require("./249458.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk700977 = require("./700977.js");

function d(e) {
  let {
    onPlay: t,
    className: n,
    inactive: a
  } = e, d = i.useRef(null), f = (0, r.jsx)("div", {
    className: u.iconWrapper,
    ref: d,
    children: (0, r.jsx)(s.o1U, {
      size: "xs",
      color: "currentColor",
      className: u.icon
    })
  });
  return (0, r.jsx)(l.G.Consumer, {
    children: e => a || null == t ? (0, r.jsx)("div", {
      className: u.cover,
      children: f
    }) : (0, r.jsx)(s.P3F, {
      className: o()(n, u.cover, {
        [u.active]: !e.disableInteractions
      }),
      onClick: t,
      tabIndex: 0,
      "aria-label": c.intl.string(c.t.RscU7I),
      focusProps: {
        ringTarget: d
      },
      children: f
    })
  })
}