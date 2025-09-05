/** Chunk was on web.js **/
/** chunk id: 255432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk619307 = require("./619307.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk463208 = require("./463208.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk119280 = require("./119280.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    controls: t,
    props: n,
    onPropsChange: d
  } = e, _ = (e, t) => {
    d(p(f({}, n), {
      [e]: t
    }))
  }, h = Object.entries(t);
  return 0 === h.length ? null : (0, r.jsx)("div", {
    className: u.controlsSection,
    children: (0, r.jsx)(i.Kq, {
      gap: 16,
      children: h.map(e => {
        var t;
        let [i, u] = e, d = null != (t = n[i]) ? t : u.defaultValue;
        return (0, r.jsxs)(a.x, {
          title: "boolean" === u.type ? true : u.label,
          children: ["select" === u.type && null != u.options && (0, r.jsx)(o.q4, {
            value: d,
            onChange: e => _(i, e),
            options: u.options
          }), "boolean" === u.type && (0, r.jsx)(c.$q, {
            value: d,
            onChange: (e, t) => _(i, t),
            children: (0, r.jsx)(s.x, {
              variant: "text-md/medium",
              children: u.label
            })
          }), "text" === u.type && (0, r.jsx)(l.o, {
            value: d,
            onChange: e => _(i, e)
          }), "number" === u.type && (0, r.jsx)(l.o, {
            type: "number",
            value: String(d),
            min: u.minValue,
            onChange: e => _(i, Number(e))
          })]
        }, i)
      })
    })
  })
}