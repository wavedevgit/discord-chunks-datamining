/** Chunk was on web.js **/
/** chunk id: 192796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk253018 = require("./253018.js"),
  Chunk711371 = require("./711371.js"),
  Chunk562650 = require("./562650.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  let {
    attributes: n,
    children: i,
    element: a
  } = t;
  return "gameMentionInput" === a.type ? (0, r.jsx)(h, {
    attributes: n,
    element: a,
    children: i
  }) : null
}
let h = e => {
  let {
    element: t,
    attributes: n,
    children: a
  } = e, u = (0, o.f7)(), f = (0, o.zL)(), _ = (0, o.RV)(), h = s()(c.S0, c.xP, c.lB, {
    [c.t$]: f && u,
    [c.$2]: t.error
  }), m = i.useCallback(() => {
    l.VW.isVoid(_, t)
  }, [_, t]), g = (0, r.jsx)("span", {
    className: c._K,
    children: a
  });
  return (0, r.jsxs)("span", p(d({}, n), {
    className: h,
    children: [(0, r.jsxs)("span", {
      className: c.gA,
      contentEditable: false,
      onClick: m,
      children: ["@game", "​"]
    }), g, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}