/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => _
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk937397 = require("./937397.js"),
  Chunk735048 = require("./735048.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk726550 = require("./726550.js");

function _(e) {
  let {
    checked: t,
    description: n,
    onChange: o,
    disabled: _ = false,
    displayOnly: m,
    label: h,
    labeledBy: g,
    leadingIcon: E,
    value: b,
    labelType: y = "primary",
    usageVariant: O = "single"
  } = e, v = (0, i.useRef)(null), S = (0, i.useRef)(null), I = (0, i.useRef)(null), [T, C] = (0, i.useState)(true), A = (0, i.useRef)(false), N = null != h && "" !== h, P = null != n && "" !== n, R = null != E ? E : null;
  (0, i.useEffect)(() => {
    if (!A.current) {
      A.current = true;
      return
    }
    C(t ? "animateIn" : "animateOut")
  }, [t]);
  let w = e => {
      null != o && o(e)
    },
    D = a()(p.checkboxOption, "string" == typeof T && p[T], "indicator" !== O && p.spacing),
    x = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: p.checkboxIndicator,
        ref: v,
        "aria-hidden": true,
        children: [(0, r.jsx)("svg", {
          className: p.checkmark,
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          "aria-hidden": true,
          children: (0, r.jsx)("circle", {
            className: p.dot,
            cx: "10",
            cy: "10",
            r: "1.1",
            fill: "currentColor"
          })
        }), (0, r.jsx)(u.kSu, {
          className: p.checkStroke,
          size: "sm",
          color: "currentColor"
        })]
      }), N && (0, r.jsxs)(d.K, {
        gap: 4,
        children: [(0, r.jsxs)(s._, {
          className: p.label,
          children: [null != R && (0, r.jsx)(R, {
            className: p.leadingIcon,
            size: "sm",
            color: "currentColor",
            "aria-hidden": true,
            focusable: false
          }), (0, r.jsx)(f.x, {
            variant: "text-md/normal",
            color: "primary" === y ? "text-strong" : "text-subtle",
            children: h
          })]
        }), P && (0, r.jsx)(f.x, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: n
        })]
      })]
    });
  return m ? (0, r.jsx)("div", {
    className: D,
    "data-selected": t || true,
    "data-disabled": _ || true,
    children: x
  }) : (0, r.jsx)(c.tE, {
    focusTarget: S,
    ringTarget: I,
    children: (0, r.jsx)(l.XZ, {
      ref: I,
      inputRef: S,
      "aria-labelledby": g,
      isSelected: t,
      onChange: w,
      isDisabled: _,
      isReadOnly: m,
      "data-mana-component": "checkbox",
      className: D,
      value: String(b),
      children: x
    })
  })
}