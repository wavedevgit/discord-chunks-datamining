/** Chunk was on 45620 **/
/** chunk id: 92589, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk859788 = require("./859788.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71300 = require("./71300.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let d = e => {
  let {
    immersiveBannerBlock: t,
    onVisibilityChange: r
  } = e, d = (0, a.O)(e => {
    null == r || r(e)
  }, .33, null != r), p = null != t.textColor ? {
    color: t.textColor
  } : true, g = null != t.body && "" !== t.body, f = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, n.jsxs)("div", {
    ref: d,
    className: c.immersiveBannerBlock,
    children: [(0, n.jsx)("div", {
      className: c.banner,
      children: (0, n.jsx)(o.Z, {
        bannerStatic: t.bannerAsset.static,
        bannerAnimated: t.bannerAsset.animated
      })
    }), (0, n.jsx)("div", {
      className: c.immersiveBannerContent,
      children: (0, n.jsxs)("div", {
        className: c.immersiveBannerTextContainer,
        children: [null != t.endTime ? (0, n.jsx)(i.R, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, n.jsx)(l.X6q, {
          variant: "heading-xxl/bold",
          className: c.title,
          color: "header-primary",
          style: u({}, p),
          children: t.title
        }), g || f ? (0, n.jsxs)(l.Text, {
          variant: "text-md/medium",
          style: u({}, p),
          children: [g && t.body, g && f && " ", f && (0, n.jsx)(l.eee, {
            href: t.helpCenterUrl,
            className: c.learnMoreLink,
            style: u({}, p),
            children: s.intl.string(s.t.O7ADgo)
          })]
        }) : null]
      })
    })]
  })
}