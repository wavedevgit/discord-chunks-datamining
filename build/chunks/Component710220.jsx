/** Chunk was on web.js **/
/** chunk id: 710220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk390434 = require("./390434.js");

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
  } = (0, a.Z)({
    userId: null == t ? true : t.id,
    size: n ? o.EF.SIZE_24 : o.EF.SIZE_32,
    animateOnHover: true
  });
  return (0, r.jsx)("div", {
    className: l.attributionBannerContainerRebranded,
    children: (0, r.jsxs)("div", {
      className: l.attributionBannerContentApplicationHomeRebranded,
      children: [(0, r.jsx)("div", {
        className: l.iconContainerApplicationHome,
        children: (0, r.jsx)(i.qEK, u({
          className: l.icon,
          src: c,
          "aria-label": t.username,
          size: o.EF.SIZE_32
        }, f))
      }), (0, r.jsx)(i.Heading, {
        variant: "heading-sm/normal",
        className: l.textContainerRebranded,
        color: "header-primary",
        children: s.intl.format(s.t.IqxblS, {
          username: d(t)
        })
      })]
    })
  })
}