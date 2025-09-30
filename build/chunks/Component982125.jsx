/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => f
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk42650 = require("./42650.js"),
  Chunk499339 = require("./499339.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk726550 = require("./726550.js");

function f(e) {
  let {
    checked: t,
    defaultChecked: n,
    description: f,
    onChange: _,
    disabled: p = false,
    displayOnly: h,
    label: m,
    labeledBy: g,
    leadingIcon: E,
    trailingIcon: b,
    value: y,
    groupVariant: O = "single",
    labelType: v = "primary"
  } = e, I = i.useRef(null), T = i.useRef(null), S = i.useRef(null), A = null != m && "" !== m, C = null != f && "" !== f, N = null != E ? E : null, R = null != b ? b : null;
  return (0, r.jsx)(s.tE, {
    focusTarget: T,
    ringTarget: S,
    children: (0, r.jsx)(a.XZ, {
      ref: S,
      inputRef: T,
      "aria-hidden": h || true,
      "aria-labelledby": g,
      isSelected: t,
      defaultSelected: n,
      onChange: _,
      isDisabled: p,
      isReadOnly: h,
      "data-mana-component": "checkbox",
      className: d.checkboxItem,
      value: String(y),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          ref: I,
          className: d.checkboxIndicator,
          "aria-hidden": true,
          children: (0, r.jsx)(l.kSu, {
            size: "sm",
            "aria-hidden": true,
            color: "currentColor"
          })
        }), A && (0, r.jsxs)(c.K, {
          gap: 8,
          children: [(0, r.jsxs)(o._, {
            className: d.label,
            children: [(0, r.jsxs)("div", {
              className: d.labelContent,
              children: [null != N && (0, r.jsx)(N, {
                className: d.leadingIcon,
                size: "sm",
                color: "currentColor",
                "aria-hidden": true,
                focusable: false
              }), (0, r.jsx)(u.x, {
                variant: "group" === O ? "text-md/normal" : "text-md/medium",
                color: "primary" === v ? "text-primary" : "text-secondary",
                children: m
              })]
            }), null != R && (0, r.jsx)(R, {
              className: d.trailingIcon,
              size: "sm",
              color: "currentColor",
              "aria-hidden": true,
              focusable: false
            })]
          }), C && (0, r.jsx)(u.x, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: f
          })]
        })]
      })
    })
  })
}