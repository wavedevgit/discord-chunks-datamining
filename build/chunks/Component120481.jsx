/** Chunk was on web.js **/
/** chunk id: 120481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk685578 = require("./685578.js"),
  Chunk953782 = require("./953782.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  let {
    attributes: n,
    children: i,
    element: o
  } = t;
  return "timestampMentionInput" === o.type ? (0, r.jsx)(p, {
    attributes: n,
    element: o,
    children: i
  }) : null
}
let p = e => {
  let {
    element: t,
    attributes: n,
    children: i
  } = e, l = (0, a.vt)(), u = (0, a.UE)(), f = o()(s.inlineElement, s.optionPill, s.timestampMention, {
    [s.selectedPill]: u && l,
    [s.erroredPill]: t.error
  }), p = (0, r.jsx)("span", {
    className: s.optionPillValue,
    children: i
  });
  return (0, r.jsxs)("span", d(c({}, n), {
    className: f,
    children: [(0, r.jsxs)("span", {
      className: s.optionPillKey,
      contentEditable: false,
      children: ["@time", "​"]
    }), p, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}