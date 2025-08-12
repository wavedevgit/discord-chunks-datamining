/** Chunk was on web.js **/
/** chunk id: 688641, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk294390 = require("./294390.js");
let c = "•";

function u(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: i,
    title: u,
    description: d,
    userCount: f,
    onClick: _,
    highlight: p
  } = e;
  return (0, r.jsxs)(a.P3F, {
    className: o()(l.container, t, null != p && {
      [l.pulse]: p
    }),
    onClick: _,
    children: [(0, r.jsx)("div", {
      className: o()(l.icon, n),
      children: i
    }), (0, r.jsxs)("div", {
      className: l.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        color: "text-primary",
        children: u
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-primary",
        className: l.inline,
        children: d
      }), null != f && f > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: l.dot,
          children: c
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: l.inline,
          children: s.intl.format(s.t.NywdIi, {
            count: f
          })
        })]
      }) : null]
    }), (0, r.jsx)(a.Fbu, {
      size: "xs",
      color: "currentColor",
      className: l.caret
    })]
  })
}