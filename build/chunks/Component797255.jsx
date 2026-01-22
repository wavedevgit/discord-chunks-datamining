/** Chunk was on web.js **/
/** chunk id: 797255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk431543 = require("./431543.js");

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
let d = e => null != e.globalName ? e.globalName : e.username;

function f(e) {
  let {
    referrer: t,
    enablePremiumBrandRefresh: n
  } = e, {
    avatarSrc: c,
    eventHandlers: f
  } = (0, a.A)({
    userId: null == t ? true : t.id,
    size: n ? s._3.SIZE_24 : s._3.SIZE_32,
    animateOnHover: true
  });
  return (0, r.jsx)("div", {
    className: l.E2,
    children: (0, r.jsxs)("div", {
      className: l.hA,
      children: [(0, r.jsx)("div", {
        className: l.kR,
        children: (0, r.jsx)(i.euF, u({
          className: l.Kk,
          src: c,
          "aria-label": t.username,
          size: s._3.SIZE_32
        }, f))
      }), (0, r.jsx)(i.Heading, {
        variant: "heading-sm/normal",
        className: l.Mn,
        color: "text-strong",
        children: o.intl.format(o.t.IqxblS, {
          username: d(t)
        })
      })]
    })
  })
}