/** Chunk was on web.js **/
/** chunk id: 381507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk518950 = require("./518950.js"),
  Chunk51144 = require("./51144.js"),
  Chunk105759 = require("./105759.js"),
  Chunk898969 = require("./898969.jsx"),
  Chunk703614 = require("./703614.jsx"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk953182 = require("./953182.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let g = () => {
  let e = (0, c.Z)(),
    {
      avatarSrc: t,
      eventHandlers: n
    } = (0, s.Z)({
      userId: null == e ? true : e.id,
      size: f.EF.SIZE_32,
      animateOnHover: true
    }),
    m = (0, o.Fg)(),
    g = (0, i.ap)(m),
    E = l.ZP.getName(e),
    b = g ? u.Z : d.Z;
  return null == e ? null : (0, r.jsxs)("div", {
    className: _.attributionBannerContainer,
    children: [(0, r.jsx)("div", {
      className: _.avatarContainer,
      children: (0, r.jsx)(a.qEK, h({
        src: t,
        "aria-label": e.username,
        size: f.EF.SIZE_32
      }, n))
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/bold",
      className: _.bannerHeader,
      children: p.intl.format(p.t.oxhCOl, {
        userName: E
      })
    }), (0, r.jsx)(b, {
      className: _.bannerIcon
    })]
  })
}