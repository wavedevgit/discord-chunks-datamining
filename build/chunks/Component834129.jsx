/** Chunk was on web.js **/
/** chunk id: 834129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk686487 = require("./686487.js");

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    timestampFormat: a,
    className: c,
    children: u,
    contentClassName: d,
    iconClassName: f,
    iconContainerClassName: p,
    timestampClassName: _,
    compact: m = false,
    additionalContent: h
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(c, {
      [l.container]: true,
      [l.compact]: m,
      [l.cozy]: !m
    }),
    children: [null != n && (0, r.jsx)("div", {
      className: o()(l.iconContainer, p),
      children: n
    }), null != t && (0, r.jsx)("div", {
      className: l.iconContainer,
      children: (0, r.jsx)("div", {
        "data-accessibility": "desaturate",
        className: o()(l.icon, l.iconSize, f),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, r.jsxs)("div", {
      className: o()(d, l.content),
      children: [(0, r.jsxs)("div", {
        children: [u, null != i && (0, r.jsx)(s.Z, {
          timestamp: i,
          timestampFormat: a,
          className: _
        })]
      }), h]
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
    children: ["—", (0, r.jsx)(a.Anchor, {
      onClick: t,
      className: l.actionAnchor,
      children: n
    })]
  })
};
let u = c