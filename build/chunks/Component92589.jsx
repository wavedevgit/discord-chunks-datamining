/** Chunk was on 45620 **/
/** chunk id: 92589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk984623 = require("./984623.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let f = e => {
  let {
    immersiveBannerBlock: t,
    onVisibilityChange: n
  } = e, f = (0, l.O)(e => {
    null == n || n(e)
  }, .33, null != n), {
    bannerUrl: g,
    bannerAnimatedUrl: p
  } = (0, o._M)(t), b = null != t.textColor ? {
    color: t.textColor
  } : true, m = null != t.body && "" !== t.body, h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, r.jsxs)("div", {
    ref: f,
    className: u.immersiveBannerBlock,
    children: [(0, r.jsx)("div", {
      className: u.banner,
      children: null != g && (0, r.jsx)(s.Z, {
        bannerStatic: g,
        bannerAnimated: p
      })
    }), (0, r.jsx)("div", {
      className: u.immersiveBannerContent,
      children: (0, r.jsxs)("div", {
        className: u.immersiveBannerTextContainer,
        children: [null != t.endTime ? (0, r.jsx)(i.R, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, r.jsx)(a.Heading, {
          variant: "heading-xxl/bold",
          className: u.title,
          color: "header-primary",
          style: d({}, b),
          children: t.title
        }), m || h ? (0, r.jsxs)(a.Text, {
          variant: "text-md/medium",
          style: d({}, b),
          children: [m && t.body, m && h && " ", h && (0, r.jsx)(a.Anchor, {
            href: t.helpCenterUrl,
            className: u.learnMoreLink,
            style: d({}, b),
            children: c.intl.string(c.t.O7ADgv)
          })]
        }) : null]
      })
    })]
  })
}