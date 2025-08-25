/** Chunk was on web.js **/
/** chunk id: 804570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk339453 = require("./339453.js");

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
let _ = Chunk647438.memo(function(e) {
  let {
    emptyText: t,
    icon: n,
    absolute: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(l.emptyWidgetContainer, i && l.absolute),
    children: (0, r.jsx)(s.ua7, {
      text: t,
      children: e => (0, r.jsx)("div", f(u({}, e), {
        children: (0, r.jsx)(n, {
          size: "md",
          color: s.TVs.colors.WHITE,
          className: l.emptyWidgetIcon
        })
      }))
    })
  })
})