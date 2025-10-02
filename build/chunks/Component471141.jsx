/** Chunk was on web.js **/
/** chunk id: 471141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk534542 = require("./534542.jsx"),
  Chunk873686 = require("./873686.js");

function f(e) {
  let {
    value: t,
    disabled: n = false,
    hideBorder: a = false,
    tooltipNote: f,
    onChange: _,
    className: p,
    style: h,
    note: m,
    children: g,
    disabledText: E,
    containerRef: b
  } = e, y = i.useRef(null), O = i.useRef(null), v = i.useId(), I = (0, r.jsx)(c.rsf, {
    id: v,
    checked: t,
    onChange: _,
    disabled: n,
    focusProps: {
      enabled: false
    },
    innerRef: y
  });
  return (0, r.jsxs)("div", {
    ref: b,
    style: h,
    className: o()(d.container, p, {
      [d.disabled]: n
    }),
    children: [(0, r.jsx)(s.tEY, {
      within: true,
      offset: false,
      focusTarget: y,
      ringTarget: O,
      children: (0, r.jsxs)("div", {
        className: d.labelRow,
        ref: O,
        children: [(0, r.jsx)("label", {
          htmlFor: v,
          className: d.title,
          children: g
        }), (0, r.jsx)("div", {
          className: d.control,
          children: null != f ? (0, r.jsx)(l.u, {
            asContainer: true,
            text: f,
            children: I
          }) : I
        })]
      })
    }), null != m && (0, r.jsx)("div", {
      className: d.note,
      children: (0, r.jsx)(u.R, {
        disabled: n,
        type: u.g.DESCRIPTION,
        children: m
      })
    }), n && null != E && (0, r.jsx)("div", {
      className: d.disabledText,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: E
      })
    }), !a && (0, r.jsx)(s.izJ, {
      className: d.dividerDefault
    })]
  })
}