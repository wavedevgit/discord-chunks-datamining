/** Chunk was on web.js **/
/** chunk id: 200749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  J: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk427133 = require("./427133.js");

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
    selected: h = false
  } = e;
  return (0, r.jsxs)(s.A, {
    className: f,
    justify: s.A.Justify.CENTER,
    align: s.A.Align.CENTER,
    direction: s.A.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!_ && null != p && (0, r.jsx)("div", {
      className: a()(l.art, l[d]),
      style: {
        backgroundImage: "url(".concat(p, ")")
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