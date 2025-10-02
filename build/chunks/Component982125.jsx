/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => _
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk42650 = require("./42650.js"),
  Chunk499339 = require("./499339.js"),
  Chunk155127 = require("./155127.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk997562 = require("./997562.js");

function _(e) {
  let {
    checked: t,
    defaultChecked: n,
    description: a,
    onChange: _,
    disabled: p = false,
    displayOnly: h,
    label: m,
    labeledBy: g,
    leadingIcon: E,
    value: b,
    groupVariant: y = "single",
    labelType: O = "primary"
  } = e, v = i.useRef(null), I = i.useRef(null), T = i.useRef(null), S = null != m && "" !== m, A = null != a && "" !== a, C = null != E ? E : null, [N, R] = i.useState(false), P = e => {
    e || R(true), null != _ && _(e)
  };
  return (0, r.jsx)(c.tE, {
    focusTarget: I,
    ringTarget: T,
    children: (0, r.jsx)(s.XZ, {
      ref: T,
      inputRef: I,
      "aria-hidden": h || true,
      "aria-labelledby": g,
      isSelected: t,
      defaultSelected: n,
      onChange: P,
      isDisabled: p,
      isReadOnly: h,
      "data-mana-component": "checkbox",
      className: o()(f.checkboxItem, N && f.animateOut),
      value: String(b),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: f.checkboxIndicator,
          ref: v,
          "aria-hidden": true,
          children: [(0, r.jsx)("div", {
            className: f.backgroundFill,
            "aria-hidden": true
          }), (0, r.jsxs)("svg", {
            className: f.checkmark,
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            "aria-hidden": true,
            children: [(0, r.jsx)("circle", {
              className: f.dot,
              cx: "10",
              cy: "10",
              r: "1.1",
              fill: "currentColor"
            }), (0, r.jsx)("path", {
              className: f.checkStroke,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.8839 5.78286C16.372 6.27102 16.372 7.06248 15.8839 7.55063L9.21722 14.2173C8.72906 14.7055 7.9376 14.7055 7.44945 14.2173L4.11612 10.884C3.62796 10.3958 3.62796 9.60435 4.11612 9.1162C4.60427 8.62804 5.39573 8.62804 5.88388 9.1162L8.33333 11.5656L14.1161 5.78286C14.6043 5.29471 15.3957 5.29471 15.8839 5.78286Z",
              fill: "currentColor"
            })]
          })]
        }), S && (0, r.jsxs)(u.K, {
          gap: 8,
          children: [(0, r.jsx)(l._, {
            className: f.label,
            children: (0, r.jsxs)("div", {
              className: f.labelContent,
              children: [null != C && (0, r.jsx)(C, {
                className: f.leadingIcon,
                size: "sm",
                color: "currentColor",
                "aria-hidden": true,
                focusable: false
              }), (0, r.jsx)(d.x, {
                variant: "group" === y ? "text-md/normal" : "text-md/medium",
                color: "primary" === O ? "text-primary" : "text-secondary",
                children: m
              })]
            })
          }), A && (0, r.jsx)(d.x, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: a
          })]
        })]
      })
    })
  })
}