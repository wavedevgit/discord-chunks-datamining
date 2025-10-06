/** Chunk was on web.js **/
/** chunk id: 645174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755712 = require("./755712.js"),
  Chunk887490 = require("./887490.js"),
  Chunk53457 = require("./53457.js");

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

function p(e, t) {
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
  } = e, u = (0, s.vt)(), f = (0, s.UE)(), p = (0, s._7)(), h = o()(c.inlineElement, c.optionPill, c.gameMention, {
    [c.selectedPill]: f && u,
    [c.erroredPill]: t.error
  }), m = i.useCallback(() => {
    l.bN.isVoid(p, t)
  }, [p, t]), g = (0, r.jsx)("span", {
    className: c.optionPillValue,
    children: a
  });
  return (0, r.jsxs)("span", _(d({}, n), {
    className: h,
    children: [(0, r.jsxs)("span", {
      className: c.optionPillKey,
      contentEditable: false,
      onClick: m,
      children: ["@game", "​"]
    }), g, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}