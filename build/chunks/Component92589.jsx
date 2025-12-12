/** Chunk was on 45620 **/
/** chunk id: 92589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449177 = require("./449177.js");

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
let g = e => {
  let {
    immersiveBannerBlock: t,
    onVisibilityChange: n
  } = e, g = (0, l.O)(e => {
    null == n || n(e)
  }, .33, null != n), {
    bannerUrl: f,
    bannerAnimatedUrl: p
  } = (0, s._M)(t), m = null != t.textColor ? {
    color: t.textColor
  } : true, C = null != t.body && "" !== t.body, h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, r.jsxs)("div", {
    ref: g,
    className: u.immersiveBannerBlock,
    children: [(0, r.jsx)("div", {
      className: u.banner,
      children: null != f && (0, r.jsx)(a.Z, {
        bannerStatic: f,
        bannerAnimated: p
      })
    }), (0, r.jsx)("div", {
      className: u.immersiveBannerContent,
      children: (0, r.jsxs)("div", {
        className: u.immersiveBannerTextContainer,
        children: [null != t.endTime ? (0, r.jsx)(i.R, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, r.jsx)(o.Heading, {
          variant: "heading-xxl/bold",
          className: u.title,
          color: "text-strong",
          style: d({}, m),
          children: t.title
        }), C || h ? (0, r.jsxs)(o.Text, {
          variant: "text-md/medium",
          style: d({}, m),
          children: [C && t.body, C && h && " ", h && (0, r.jsx)(o.Anchor, {
            href: t.helpCenterUrl,
            className: u.learnMoreLink,
            style: d({}, m),
            children: c.intl.string(c.t.O7ADgv)
          })]
        }) : null]
      })
    })]
  })
}