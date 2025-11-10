/** Chunk was on web.js **/
/** chunk id: 646116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => I,
  M: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk767623 = require("./767623.js"),
  Chunk682199 = require("./682199.js"),
  Chunk155127 = require("./155127.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk884259 = require("./884259.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  let {
    disabled: t,
    isSelected: n
  } = e, [a, s] = (0, i.useState)(true), l = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    if (!l.current) {
      l.current = true;
      return
    }
    s(n ? "animateIn" : "animateOut")
  }, [n]), (0, r.jsx)("div", {
    className: o()([_.standaloneRadioIndicator, "string" == typeof a && _[a]]),
    "data-selected": n,
    "data-disabled": t,
    children: (0, r.jsx)(O, {})
  })
}

function O() {
  return (0, Chunk951288.jsxs)("svg", {
    className: Chunk884259.radioIndicator,
    width: 20,
    height: 20,
    viewBox: "0 0 40 40",
    fill: "none",
    shapeRendering: "geometricPrecision",
    children: [(0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 20,
      className: Chunk884259.outerRadioBase
    }), (0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 20,
      className: Chunk884259.outerRadioFill
    }), (0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 8,
      className: Chunk884259.innerDotRadio
    })]
  })
}

function v(e) {
  let {
    desc: t,
    disabled: n,
    leadingIcon: a,
    name: u,
    value: p,
    isSelected: h
  } = e, m = (0, i.useRef)(null), g = (0, i.useRef)(null), [E, b] = (0, i.useState)(true), y = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    if (!y.current) {
      y.current = true;
      return
    }
    b(h ? "animateIn" : "animateOut")
  }, [h]), (0, r.jsx)(c.tE, {
    focusTarget: m,
    ringTarget: m,
    within: true,
    children: (0, r.jsxs)(s.Y8, {
      className: o()([_.radioGroupOption, "string" == typeof E && _[E]]),
      value: p,
      isDisabled: n,
      inputRef: g,
      ref: m,
      children: [(0, r.jsx)(O, {}), (0, r.jsxs)(d.K, {
        gap: 4,
        children: [(0, r.jsxs)(l._, {
          className: _.label,
          children: [null != a && (0, r.jsx)(a, {
            className: _.radioItemIcon,
            size: "sm",
            color: "currentColor",
            "aria-hidden": true,
            focusable: false
          }), (0, r.jsx)(f.x, {
            variant: "text-md/normal",
            children: u
          })]
        }), null != t && "" !== t ? (0, r.jsx)(f.x, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: t
        }) : null]
      })]
    })
  })
}

function I(e) {
  var {
    onChange: t,
    options: n,
    value: i,
    disabled: a = false,
    "aria-labelledby": o
  } = e, l = E(e, ["onChange", "options", "value", "disabled", "aria-labelledby"]);
  let c = null != t ? e => {
    let r = n.find(t => String(t.value) === e);
    null != r && t(r.value)
  } : true;
  return (0, r.jsx)(u.g, g(h({}, l), {
    children: e => (0, r.jsx)(s.Ee, {
      id: e.controlId,
      className: _.group,
      isDisabled: a,
      onChange: c,
      "aria-labelledby": null != o ? o : e.labelId,
      "aria-describedby": e.describedById,
      "aria-errormessage": e.errorMessageId,
      "data-mana-component": "BaseRadioGroup",
      value: null != i ? String(i) : true,
      children: n.map((e, t) => (0, r.jsx)(v, g(h({
        index: t
      }, e), {
        value: String(e.value),
        isSelected: i === e.value
      }), String(e.value)))
    })
  }))
}