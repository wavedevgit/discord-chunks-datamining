/** Chunk was on web.js **/
/** chunk id: 724884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825460 = require("./825460.js"),
  Chunk247844 = require("./247844.js");

function u(e) {
  let {
    className: t,
    icon: n,
    children: i
  } = e;
  return (0, r.jsxs)("li", {
    className: o()(l.card, t),
    children: [(0, r.jsx)(n, {
      className: l.icon
    }), (0, r.jsx)(a.Text, {
      className: l.__invalid_description,
      variant: "text-sm/medium",
      children: i
    })]
  })
}
let d = function(e) {
  let {
    cardClassName: t
  } = e;
  return (0, r.jsxs)("div", {
    className: l.wrapper,
    children: [(0, r.jsxs)("div", {
      className: l.content,
      children: [(0, r.jsx)(a.Heading, {
        className: l.heading,
        color: "always-white",
        variant: "heading-xxl/bold",
        children: s.intl.string(s.t.IzKs3o)
      }), (0, r.jsxs)("ul", {
        className: l.cards,
        children: [(0, r.jsx)(u, {
          className: t,
          icon: a.$zw,
          children: s.intl.string(s.t.TZigSO)
        }), (0, r.jsx)(u, {
          className: t,
          icon: e => (0, r.jsx)("img", {
            className: o()(e.className, l.iconImage),
            src: c,
            alt: ""
          }),
          children: s.intl.string(s.t.hjQuV2)
        }), (0, r.jsx)(u, {
          className: t,
          icon: a.lZ8,
          children: s.intl.string(s.t["2RUcaM"])
        }), (0, r.jsx)(u, {
          className: t,
          icon: a.h_8,
          children: s.intl.string(s.t.bJoZKV)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: l.backgroundImages
    })]
  })
}