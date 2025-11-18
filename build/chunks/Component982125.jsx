/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk937397 = require("./937397.js"),
  Chunk735048 = require("./735048.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk997562 = require("./997562.js");

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
    },
    w = o()(_.checkboxOption, "string" == typeof S && _[S], "indicator" !== O && _.spacing),
    L = (0, r.jsxs)(r.Fragment, {
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
        children: [(0, r.jsxs)(s._, {
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
    });
  return h ? (0, r.jsx)("div", {
    className: w,
    "data-selected": t || true,
    "data-disabled": p || true,
    children: L
  }) : (0, r.jsx)(c.tE, {
    focusTarget: I,
    ringTarget: T,
    children: (0, r.jsx)(l.XZ, {
      ref: T,
      inputRef: I,
      "aria-labelledby": g,
      isSelected: t,
      onChange: D,
      isDisabled: p,
      isReadOnly: h,
      "data-mana-component": "checkbox",
      className: w,
      value: String(b),
      children: L
    })
  })
}