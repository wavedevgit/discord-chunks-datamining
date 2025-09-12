/** Chunk was on web.js **/
/** chunk id: 255432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk619307 = require("./619307.jsx"),
  Chunk463208 = require("./463208.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk624315 = require("./624315.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    controls: t,
    props: n,
    onPropsChange: u
  } = e, f = (e, t) => {
    u(_(d({}, n), {
      [e]: t
    }))
  }, p = Object.entries(t);
  return 0 === p.length ? null : (0, r.jsx)("div", {
    className: c.controlsSection,
    children: (0, r.jsx)(i.Kqy, {
      gap: 16,
      children: p.map(e => {
        var t;
        let [i, c] = e, u = null != (t = n[i]) ? t : c.defaultValue;
        return (0, r.jsxs)(a.x, {
          title: "boolean" === c.type ? true : c.label,
          children: ["select" === c.type && null != c.options && (0, r.jsx)(o.q4, {
            value: u,
            onChange: e => f(i, e),
            options: c.options
          }), "boolean" === c.type && (0, r.jsx)(l.XZJ, {
            checked: u,
            onChange: e => f(i, e),
            label: c.label
          }), "text" === c.type && (0, r.jsx)(s.o, {
            value: u,
            onChange: e => f(i, e)
          }), "number" === c.type && (0, r.jsx)(s.o, {
            type: "number",
            value: String(u),
            min: c.minValue,
            onChange: e => f(i, Number(e))
          })]
        }, i)
      })
    })
  })
}