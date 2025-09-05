/** Chunk was on web.js **/
/** chunk id: 390698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105876 = require("./105876.js");

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
let _ = e => {
  let {
    className: t,
    isPartiallyPurchased: n
  } = e;
  return n ? (0, r.jsx)(o.ua7, {
    tooltipClassName: l.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: s.intl.string(s.t.y1VWkZ),
    children: e => (0, r.jsxs)("div", f(u({
      className: a()(l.partialOwnStateContainer, t)
    }, e), {
      children: [(0, r.jsx)("span", {
        className: l.iconWrapper,
        children: (0, r.jsx)(o.d3s, {
          size: "md",
          color: "currentColor",
          className: l.infoIcon
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: s.intl.string(s.t.BEjTio)
      })]
    }))
  }) : (0, r.jsx)(o.Text, {
    variant: "text-md/semibold",
    className: t,
    children: s.intl.string(s.t["6cfuDg"])
  })
}