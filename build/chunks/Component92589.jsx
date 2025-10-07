/** Chunk was on 45620 **/
/** chunk id: 92589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
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
  } = e, g = (0, s.O)(e => {
    null == n || n(e)
  }, .33, null != n), {
    bannerUrl: p,
    bannerAnimatedUrl: f
  } = (0, i._M)(t), C = null != t.textColor ? {
    color: t.textColor
  } : true, h = null != t.body && "" !== t.body, _ = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, r.jsxs)("div", {
    ref: g,
    className: u.immersiveBannerBlock,
    children: [(0, r.jsx)("div", {
      className: u.banner,
      children: null != p && (0, r.jsx)(o.Z, {
        bannerStatic: p,
        bannerAnimated: f
      })
    }), (0, r.jsx)("div", {
      className: u.immersiveBannerContent,
      children: (0, r.jsxs)("div", {
        className: u.immersiveBannerTextContainer,
        children: [null != t.endTime ? (0, r.jsx)(a.R, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, r.jsx)(l.X6q, {
          variant: "heading-xxl/bold",
          className: u.title,
          color: "header-primary",
          style: d({}, C),
          children: t.title
        }), h || _ ? (0, r.jsxs)(l.Text, {
          variant: "text-md/medium",
          style: d({}, C),
          children: [h && t.body, h && _ && " ", _ && (0, r.jsx)(l.eee, {
            href: t.helpCenterUrl,
            className: u.learnMoreLink,
            style: d({}, C),
            children: c.intl.string(c.t.O7ADgo)
          })]
        }) : null]
      })
    })]
  })
}