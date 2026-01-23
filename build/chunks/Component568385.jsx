/** Chunk was on web.js **/
/** chunk id: 568385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => _
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk129844 = require("./129844.js"),
  Chunk974213 = require("./974213.js"),
  Chunk426333 = require("./426333.js"),
  Chunk934551 = require("./934551.js"),
  Chunk331322 = require("./331322.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk264005 = require("./264005.js");

function _(e) {
  let {
    checked: t,
    description: n,
    onChange: a,
    disabled: _ = false,
    displayOnly: h,
    label: m,
    labeledBy: g,
    leadingIcon: E,
    value: y,
    labelType: b = "primary",
    usageVariant: O = "single"
  } = e, v = (0, i.useRef)(null), A = (0, i.useRef)(null), I = (0, i.useRef)(null), [S, T] = (0, i.useState)(true), C = (0, i.useRef)(false), N = null != m && "" !== m, R = null != n && "" !== n, w = null != E ? E : null;
  (0, i.useEffect)(() => {
    if (!C.current) {
      C.current = true;
      return
    }
    T(t ? "animateIn" : "animateOut")
  }, [t]);
  let P = e => {
      null != a && a(e)
    },
    D = s()(p.checkboxOption, "string" == typeof S && p[S], "indicator" !== O && p.spacing),
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
        }), (0, r.jsx)(u.CheckmarkSmallBoldIcon, {
          className: p.checkStroke,
          size: "sm",
          color: "currentColor"
        })]
      }), N && (0, r.jsxs)(d.B, {
        gap: 4,
        children: [(0, r.jsxs)(o.J, {
          className: p.label,
          children: [null != w && (0, r.jsx)(w, {
            className: p.leadingIcon,
            size: "sm",
            color: "currentColor",
            "aria-hidden": true,
            focusable: false
          }), (0, r.jsx)(f.E, {
            variant: "text-md/normal",
            color: "primary" === b ? "text-strong" : "text-subtle",
            children: m
          })]
        }), R && (0, r.jsx)(f.E, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: n
        })]
      })]
    });
  return h ? (0, r.jsx)("div", {
    className: D,
    "data-selected": t || true,
    "data-disabled": _ || true,
    children: x
  }) : (0, r.jsx)(c.vN, {
    focusTarget: A,
    ringTarget: I,
    children: (0, r.jsx)(l.Sc, {
      ref: I,
      inputRef: A,
      "aria-labelledby": g,
      isSelected: t,
      onChange: P,
      isDisabled: _,
      isReadOnly: h,
      "data-mana-component": "checkbox",
      className: D,
      value: String(y),
      children: x
    })
  })
}