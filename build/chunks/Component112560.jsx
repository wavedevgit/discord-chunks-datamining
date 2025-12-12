/** Chunk was on web.js **/
/** chunk id: 112560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c,
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388354 = require("./388354.js");

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
    artURL: p,
    noArt: _ = false,
    selected: m = false
  } = e;
  return (0, r.jsxs)(s.Z, {
    className: f,
    justify: s.Z.Justify.CENTER,
    align: s.Z.Align.CENTER,
    direction: s.Z.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!_ && null != p && (0, r.jsx)("div", {
      className: o()(l.art, l[d]),
      style: {
        backgroundImage: "url(".concat(p, ")")
      }
    }), null != i ? (0, r.jsx)(a.Text, {
      color: "none",
      variant: "text-md/semibold",
      className: l.header,
      children: i
    }) : null, null != u ? (0, r.jsx)(a.Text, {
      className: l.errorCodeMessage,
      variant: "text-sm/semibold",
      color: "text-muted",
      selectable: true,
      children: u
    }) : null, null != c && (null == u || "small" !== d) ? (0, r.jsx)(a.Text, {
      color: "none",
      className: l.description,
      variant: "text-sm/medium",
      children: c
    }) : null, m || null == n ? null : (0, r.jsx)("div", {
      className: l.outerButton,
      children: (0, r.jsx)(a.Button, {
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