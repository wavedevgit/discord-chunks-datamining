/** Chunk was on web.js **/
/** chunk id: 645174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk685578 = require("./685578.js"),
  Chunk887490 = require("./887490.js"),
  Chunk953782 = require("./953782.js");

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
    element: o
  } = t;
  return "gameMentionInput" === o.type ? (0, r.jsx)(m, {
    attributes: n,
    element: o,
    children: i
  }) : null
}
let m = e => {
  let {
    element: t,
    attributes: n,
    children: o
  } = e, u = (0, s.vt)(), f = (0, s.UE)(), _ = (0, s._7)(), m = a()(c.inlineElement, c.optionPill, c.gameMention, {
    [c.selectedPill]: f && u,
    [c.erroredPill]: t.error
  }), h = i.useCallback(() => {
    l.bN.isVoid(_, t)
  }, [_, t]), g = (0, r.jsx)("span", {
    className: c.optionPillValue,
    children: o
  });
  return (0, r.jsxs)("span", p(d({}, n), {
    className: m,
    children: [(0, r.jsxs)("span", {
      className: c.optionPillKey,
      contentEditable: false,
      onClick: h,
      children: ["@game", "​"]
    }), g, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}