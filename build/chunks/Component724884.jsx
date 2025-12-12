/** Chunk was on web.js **/
/** chunk id: 724884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk60252 = require("./60252.js"),
  Chunk247844 = require("./247844.js");

function u(e) {
  let {
    className: t,
    icon: n,
    children: i
  } = e;
  return (0, r.jsxs)("li", {
    className: a()(l.card, t),
    children: [(0, r.jsx)(n, {
      className: l.icon
    }), (0, r.jsx)(o.Text, {
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
      children: [(0, r.jsx)(o.Heading, {
        className: l.heading,
        color: "always-white",
        variant: "heading-xxl/bold",
        children: s.intl.string(s.t.IzKs3o)
      }), (0, r.jsxs)("ul", {
        className: l.cards,
        children: [(0, r.jsx)(u, {
          className: t,
          icon: o.$zw,
          children: s.intl.string(s.t.TZigSO)
        }), (0, r.jsx)(u, {
          className: t,
          icon: e => (0, r.jsx)("img", {
            className: a()(e.className, l.iconImage),
            src: c,
            alt: ""
          }),
          children: s.intl.string(s.t.hjQuV2)
        }), (0, r.jsx)(u, {
          className: t,
          icon: o.lZ8,
          children: s.intl.string(s.t["2RUcaM"])
        }), (0, r.jsx)(u, {
          className: t,
          icon: o.h_8,
          children: s.intl.string(s.t.bJoZKV)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: l.backgroundImages
    })]
  })
}