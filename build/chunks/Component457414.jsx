/** Chunk was on 59275 **/
/** chunk id: 457414, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk172218 = require("./172218.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854818 = require("./854818.jsx"),
  Chunk212407 = require("./212407.js"),
  Chunk815280 = require("./815280.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk922868 = require("./922868.js");

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
  } = e, g = (0, l.K)(e => {
    null == n || n(e)
  }, .33, null != n), {
    bannerUrl: f,
    bannerAnimatedUrl: p
  } = (0, i.qY)(t), m = null != t.textColor ? {
    color: t.textColor
  } : true, _ = null != t.body && "" !== t.body, b = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, r.jsxs)("div", {
    ref: g,
    className: u.BX,
    children: [(0, r.jsx)("div", {
      className: u.vK,
      children: null != f && (0, r.jsx)(o.A, {
        bannerStatic: f,
        bannerAnimated: p
      })
    }), (0, r.jsx)("div", {
      className: u.HQ,
      children: (0, r.jsxs)("div", {
        className: u.Yn,
        children: [null != t.endTime ? (0, r.jsx)(a.e, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, r.jsx)(s.Heading, {
          variant: "heading-xxl/bold",
          className: u.DD,
          color: "text-strong",
          style: d({}, m),
          children: t.title
        }), _ || b ? (0, r.jsxs)(s.Text, {
          variant: "text-md/medium",
          style: d({}, m),
          children: [_ && t.body, _ && b && " ", b && (0, r.jsx)(s.MzZ, {
            href: t.helpCenterUrl,
            className: u.CU,
            style: d({}, m),
            children: c.intl.string(c.t.O7ADgv)
          })]
        }) : null]
      })
    })]
  })
}