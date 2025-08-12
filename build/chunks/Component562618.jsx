/** Chunk was on web.js **/
/** chunk id: 562618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk756715 = require("./756715.jsx"),
  Chunk446673 = require("./446673.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk748491 = require("./748491.js");

function u(e) {
  var t;
  let {
    title: n,
    body: i,
    badge: u,
    className: d,
    textLink: f,
    hasBottomMargin: _ = false
  } = e, p = null == (t = null == f ? true : f.external) || t;
  return (0, r.jsxs)("div", {
    className: o()(c.header, d, {
      [c.hasActions]: _
    }),
    children: [(0, r.jsxs)("div", {
      children: [null != u && (0, r.jsx)("div", {
        className: c.badgeContainer,
        children: (0, r.jsx)(s.C, {
          badge: u
        })
      }), (0, r.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        className: c.title,
        children: n
      })]
    }), null != i && "" !== i && (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      className: c.headerBody,
      children: i
    }), null != f && (0, r.jsx)(a.Anchor, {
      href: f.link,
      target: p ? "_blank" : true,
      rel: p ? "noopener noreferrer" : true,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: c.footerLink,
        children: f.text
      })
    })]
  })
}