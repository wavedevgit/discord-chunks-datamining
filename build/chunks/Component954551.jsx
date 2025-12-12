/** Chunk was on web.js **/
/** chunk id: 954551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388035 = require("./388035.jsx"),
  Chunk453473 = require("./453473.jsx"),
  Chunk388032 = require("./388032.jsx");

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

function p(e) {
  let {
    onOpen: t,
    onClose: n,
    className: c
  } = e;
  return (0, r.jsx)(s.P, {
    onOpen: t,
    onClose: n,
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n, s, d) => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.JO, f(u({}, n), {
        ref: d,
        className: c,
        onClick: e,
        icon: i.plf,
        "aria-label": l.intl.string(l.t["2pAkDA"]),
        tooltip: t ? null : l.intl.string(l.t["2pAkDA"]),
        selected: t,
        showBadge: s
      })), (0, r.jsx)(a.U, {
        location: "bookmarks-button",
        targetElementRef: d
      })]
    })
  })
}