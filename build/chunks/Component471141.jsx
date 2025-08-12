/** Chunk was on web.js **/
/** chunk id: 471141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk437337 = require("./437337.jsx"),
  Chunk981729 = require("./981729.jsx"),
  Chunk770102 = require("./770102.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk548794 = require("./548794.js");

function _(e) {
  let {
    value: t,
    disabled: n = false,
    hideBorder: o = false,
    tooltipNote: _,
    onChange: p,
    className: h,
    style: m,
    note: g,
    children: E,
    disabledText: b,
    containerRef: y
  } = e, O = i.useRef(null), v = i.useRef(null), I = i.useId(), T = (0, r.jsx)(l.r, {
    id: I,
    checked: t,
    onChange: p,
    disabled: n,
    focusProps: {
      enabled: false
    },
    innerRef: O
  });
  return (0, r.jsxs)("div", {
    ref: y,
    style: m,
    className: a()(f.container, h, {
      [f.disabled]: n
    }),
    children: [(0, r.jsx)(s.t, {
      within: true,
      offset: false,
      focusTarget: O,
      ringTarget: v,
      children: (0, r.jsxs)("div", {
        className: f.labelRow,
        ref: v,
        children: [(0, r.jsx)("label", {
          htmlFor: I,
          className: f.title,
          children: E
        }), (0, r.jsx)("div", {
          className: f.control,
          children: null != _ ? (0, r.jsx)(c.DY, {
            text: _,
            children: T
          }) : T
        })]
      })
    }), null != g && (0, r.jsx)("div", {
      className: f.note,
      children: (0, r.jsx)(d.R, {
        disabled: n,
        type: d.g.DESCRIPTION,
        children: g
      })
    }), n && null != b && (0, r.jsx)("div", {
      className: f.disabledText,
      children: (0, r.jsx)(d.R, {
        type: d.g.ERROR,
        children: b
      })
    }), !o && (0, r.jsx)(u.$, {
      className: f.dividerDefault
    })]
  })
}