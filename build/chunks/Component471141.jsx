/** Chunk was on web.js **/
/** chunk id: 471141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk497039 = require("./497039.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk171931 = require("./171931.js");

function p(e) {
  let {
    value: t,
    disabled: n = false,
    hideBorder: a = false,
    tooltipNote: p,
    onChange: h,
    className: m,
    style: g,
    note: E,
    children: b,
    disabledText: y,
    containerRef: O
  } = e, v = i.useRef(null), I = i.useRef(null), T = i.useId(), S = (0, r.jsx)(l.T, {
    id: T,
    checked: t,
    onChange: h,
    disabled: n,
    focusProps: {
      enabled: false
    },
    innerRef: v
  });
  return (0, r.jsxs)("div", {
    ref: O,
    style: g,
    className: o()(_.container, m, {
      [_.disabled]: n
    }),
    children: [(0, r.jsx)(s.t, {
      within: true,
      offset: false,
      focusTarget: v,
      ringTarget: I,
      children: (0, r.jsxs)("div", {
        className: _.labelRow,
        ref: I,
        children: [(0, r.jsx)("label", {
          htmlFor: T,
          className: _.title,
          children: b
        }), (0, r.jsx)("div", {
          className: _.control,
          children: null != p ? (0, r.jsx)(c.u, {
            asContainer: true,
            text: p,
            children: S
          }) : S
        })]
      })
    }), null != E && (0, r.jsx)("div", {
      className: _.note,
      children: (0, r.jsx)(f.R, {
        disabled: n,
        type: f.g.DESCRIPTION,
        children: E
      })
    }), n && null != y && (0, r.jsx)("div", {
      className: _.disabledText,
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: y
      })
    }), !a && (0, r.jsx)(d.$, {
      className: _.dividerDefault
    })]
  })
}