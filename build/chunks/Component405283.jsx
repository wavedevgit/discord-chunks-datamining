/** Chunk was on web.js **/
/** chunk id: 405283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk619307 = require("./619307.jsx"),
  Chunk463208 = require("./463208.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk894793 = require("./894793.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    controls: t,
    props: n,
    onPropsChange: c
  } = e, d = (e, t) => {
    c(f(u({}, n), {
      [e]: t
    }))
  }, _ = Object.entries(t);
  return 0 === _.length ? null : (0, r.jsx)("div", {
    className: l.controlsSection,
    children: (0, r.jsx)(i.Kqy, {
      gap: 16,
      children: _.map(e => {
        var t;
        let [l, c] = e, u = null != (t = n[l]) ? t : c.defaultValue;
        return (0, r.jsxs)(i.gNt, {
          label: "boolean" === c.type ? true : c.label,
          children: ["select" === c.type && null != c.options && (0, r.jsx)(a.q4, {
            value: u,
            onChange: e => d(l, e),
            options: c.options
          }), "boolean" === c.type && (0, r.jsx)(s.Checkbox, {
            checked: u,
            onChange: e => d(l, e),
            label: c.label
          }), "text" === c.type && (0, r.jsx)(o.o, {
            value: u,
            onChange: e => d(l, e)
          }), "number" === c.type && (0, r.jsx)(o.o, {
            type: "number",
            value: String(u),
            min: c.minValue,
            onChange: e => d(l, Number(e))
          })]
        }, l)
      })
    })
  })
}