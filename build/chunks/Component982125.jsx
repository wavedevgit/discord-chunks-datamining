/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk42650 = require("./42650.js"),
  Chunk499339 = require("./499339.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk726550 = require("./726550.js");

function p(e) {
  let {
    checked: t,
    defaultChecked: n,
    description: a,
    onChange: p,
    disabled: h = false,
    displayOnly: m,
    label: g,
    labeledBy: E,
    leadingIcon: b,
    value: y,
    labelType: O = "primary"
  } = e, v = i.useRef(null), I = i.useRef(null), T = i.useRef(null), S = null != g && "" !== g, A = null != a && "" !== a, C = null != b ? b : null, [N, R] = i.useState(false), P = e => {
    e || R(true), null != p && p(e)
  };
  return (0, r.jsx)(c.tE, {
    focusTarget: I,
    ringTarget: T,
    children: (0, r.jsx)(s.XZ, {
      ref: T,
      inputRef: I,
      "aria-hidden": m || true,
      "aria-labelledby": E,
      isSelected: t,
      defaultSelected: n,
      onChange: P,
      isDisabled: h,
      isReadOnly: m,
      "data-mana-component": "checkbox",
      className: o()(_.checkboxItem, N && _.animateOut),
      value: String(y),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: _.checkboxIndicator,
          ref: v,
          "aria-hidden": true,
          children: [(0, r.jsx)("div", {
            className: _.backgroundFill,
            "aria-hidden": true
          }), (0, r.jsx)("svg", {
            className: _.checkmark,
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            "aria-hidden": true,
            children: (0, r.jsx)("circle", {
              className: _.dot,
              cx: "10",
              cy: "10",
              r: "1.1",
              fill: "currentColor"
            })
          }), (0, r.jsx)(u.kSu, {
            className: _.checkStroke,
            size: "refresh_sm",
            color: "currentColor"
          })]
        }), S && (0, r.jsxs)(d.K, {
          gap: 8,
          children: [(0, r.jsx)(l._, {
            className: _.label,
            children: (0, r.jsxs)("div", {
              className: _.labelContent,
              children: [null != C && (0, r.jsx)(C, {
                className: _.leadingIcon,
                size: "sm",
                color: "currentColor",
                "aria-hidden": true,
                focusable: false
              }), (0, r.jsx)(f.x, {
                variant: "text-md/normal",
                color: "primary" === O ? "text-primary" : "text-secondary",
                children: g
              })]
            })
          }), A && (0, r.jsx)(f.x, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: a
          })]
        })]
      })
    })
  })
}