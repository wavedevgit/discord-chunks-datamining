/** Chunk was on web.js **/
/** chunk id: 834129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk686487 = require("./686487.js");

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    timestampFormat: o,
    className: c,
    children: u,
    contentClassName: d,
    iconClassName: f,
    iconContainerClassName: _,
    timestampClassName: p,
    compact: h = false,
    additionalContent: m
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c, {
      [l.container]: true,
      [l.compact]: h,
      [l.cozy]: !h
    }),
    children: [null != n && (0, r.jsx)("div", {
      className: a()(l.iconContainer, _),
      children: n
    }), null != t && (0, r.jsx)("div", {
      className: l.iconContainer,
      children: (0, r.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a()(l.icon, l.iconSize, f),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, r.jsxs)("div", {
      className: a()(d, l.content),
      children: [(0, r.jsxs)("div", {
        children: [u, null != i && (0, r.jsx)(s.Z, {
          timestamp: i,
          timestampFormat: o,
          className: p
        })]
      }), m]
    })]
  })
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, r.jsxs)("span", {
    className: l.action,
    children: ["—", (0, r.jsx)(o.Anchor, {
      onClick: t,
      className: l.actionAnchor,
      children: n
    })]
  })
};
let u = c