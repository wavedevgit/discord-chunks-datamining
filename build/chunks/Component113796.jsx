/** Chunk was on web.js **/
/** chunk id: 113796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk253018 = require("./253018.js"),
  Chunk562650 = require("./562650.js");

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
  return "timestampMentionInput" === a.type ? (0, r.jsx)(p, {
    attributes: n,
    element: a,
    children: i
  }) : null
}
let p = e => {
  let {
    element: t,
    attributes: n,
    children: i
  } = e, l = (0, o.f7)(), u = (0, o.zL)(), f = a()(s.S0, s.xP, s.FF, {
    [s.t$]: u && l,
    [s.$2]: t.error
  }), p = (0, r.jsx)("span", {
    className: s._K,
    children: i
  });
  return (0, r.jsxs)("span", d(c({}, n), {
    className: f,
    children: [(0, r.jsxs)("span", {
      className: s.gA,
      contentEditable: false,
      children: ["@time", "​"]
    }), p, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}