/** Chunk was on web.js **/
/** chunk id: 112560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c,
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk841671 = require("./841671.js");

function c(e) {
  return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
}

function u(e) {
  let {
    onCTAClick: t,
    callToAction: n,
    header: i,
    description: c,
    errorCodeMessage: u,
    size: d,
    className: f,
    artURL: _,
    noArt: p = false,
    selected: h = false
  } = e;
  return (0, r.jsxs)(s.Z, {
    className: f,
    justify: s.Z.Justify.CENTER,
    align: s.Z.Align.CENTER,
    direction: s.Z.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!p && null != _ && (0, r.jsx)("div", {
      className: a()(l.art, l[d]),
      style: {
        backgroundImage: "url(".concat(_, ")")
      }
    }), null != i ? (0, r.jsx)(o.Text, {
      color: "none",
      variant: "text-md/semibold",
      className: l.header,
      children: i
    }) : null, null != u ? (0, r.jsx)(o.Text, {
      className: l.errorCodeMessage,
      variant: "text-sm/semibold",
      color: "text-muted",
      selectable: true,
      children: u
    }) : null, null != c && (null == u || "small" !== d) ? (0, r.jsx)(o.Text, {
      color: "none",
      className: l.description,
      variant: "text-sm/medium",
      children: c
    }) : null, h || null == n ? null : (0, r.jsx)("div", {
      className: l.outerButton,
      children: (0, r.jsx)(o.Button, {
        size: "small" === d ? "sm" : "md",
        variant: "secondary",
        onClick: e => {
          e.stopPropagation(), null == t || t(e)
        },
        text: n
      })
    })]
  })
}