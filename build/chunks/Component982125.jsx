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
  Chunk661975 = require("./661975.js"),
  Chunk682199 = require("./682199.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk726550 = require("./726550.js");

function p(e) {
  let {
    checked: t,
    description: n,
    onChange: a,
    disabled: p = false,
    displayOnly: h,
    label: m,
    labeledBy: g,
    leadingIcon: E,
    value: b,
    labelType: y = "primary",
    usageVariant: O = "single"
  } = e, v = (0, i.useRef)(null), I = (0, i.useRef)(null), T = (0, i.useRef)(null), [S, A] = (0, i.useState)(true), C = (0, i.useRef)(false), N = null != m && "" !== m, R = null != n && "" !== n, P = null != E ? E : null;
  (0, i.useEffect)(() => {
    if (!C.current) {
      C.current = true;
      return
    }
    A(t ? "animateIn" : "animateOut")
  }, [t]);
  let D = e => {
    null != a && a(e)
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
      onChange: D,
      isDisabled: p,
      isReadOnly: h,
      "data-mana-component": "checkbox",
      className: o()(_.checkboxOption, "string" == typeof S && _[S], "indicator" !== O && _.spacing),
      value: String(b),
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: _.checkboxIndicator,
          ref: v,
          "aria-hidden": true,
          children: [(0, r.jsx)("svg", {
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
            size: "sm",
            color: "currentColor"
          })]
        }), N && (0, r.jsxs)(d.K, {
          gap: 4,
          children: [(0, r.jsxs)(l._, {
            className: _.label,
            children: [null != P && (0, r.jsx)(P, {
              className: _.leadingIcon,
              size: "sm",
              color: "currentColor",
              "aria-hidden": true,
              focusable: false
            }), (0, r.jsx)(f.x, {
              variant: "text-md/normal",
              color: "primary" === y ? "text-primary" : "text-secondary",
              children: m
            })]
          }), R && (0, r.jsx)(f.x, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: n
          })]
        })]
      })
    })
  })
}