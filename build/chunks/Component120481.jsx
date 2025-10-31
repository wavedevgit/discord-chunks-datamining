/** Chunk was on web.js **/
/** chunk id: 120481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755712 = require("./755712.js"),
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
    element: a
  } = t;
  return "timestampMentionInput" === a.type ? (0, r.jsx)(_, {
    attributes: n,
    element: a,
    children: i
  }) : null
}
let _ = e => {
  let {
    element: t,
    attributes: n,
    children: i
  } = e, l = (0, o.vt)(), u = (0, o.UE)(), f = a()(s.inlineElement, s.optionPill, s.timestampMention, {
    [s.selectedPill]: u && l,
    [s.erroredPill]: t.error
  }), _ = (0, r.jsx)("span", {
    className: s.optionPillValue,
    children: i
  });
  return (0, r.jsxs)("span", d(c({}, n), {
    className: f,
    children: [(0, r.jsxs)("span", {
      className: s.optionPillKey,
      contentEditable: false,
      children: ["@time", "​"]
    }), _, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}