/** Chunk was on 59275 **/
/** chunk id: 457414, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
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
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let f = e => {
  let {
    immersiveBannerBlock: t,
    onVisibilityChange: l
  } = e, f = (0, r.K)(e => {
    null == l || l(e)
  }, .33, null != l), {
    bannerUrl: b,
    bannerAnimatedUrl: g
  } = (0, i.qY)(t), m = null != t.textColor ? {
    color: t.textColor
  } : true, p = null != t.body && "" !== t.body, h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
  return (0, n.jsxs)("div", {
    ref: f,
    className: u.BX,
    children: [(0, n.jsx)("div", {
      className: u.vK,
      children: null != b && (0, n.jsx)(o.A, {
        bannerStatic: b,
        bannerAnimated: g
      })
    }), (0, n.jsx)("div", {
      className: u.HQ,
      children: (0, n.jsxs)("div", {
        className: u.Yn,
        children: [null != t.endTime ? (0, n.jsx)(a.e, {
          endDate: t.endTime,
          size: "lg"
        }) : null, (0, n.jsx)(s.Heading, {
          variant: "heading-xxl/bold",
          className: u.DD,
          color: "text-strong",
          style: d({}, m),
          children: t.title
        }), p || h ? (0, n.jsxs)(s.Text, {
          variant: "text-md/medium",
          style: d({}, m),
          children: [p && t.body, p && h && " ", h && (0, n.jsx)(s.MzZ, {
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