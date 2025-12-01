/** Chunk was on web.js **/
/** chunk id: 359255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk996014 = require("./996014.js");

function u(e) {
  return "" === e || "-" === e
}
let d = e => {
  let {
    value: t,
    onChange: n,
    className: a,
    minValue: d,
    maxValue: f
  } = e, [p, _] = i.useState(t), m = u(p) || null != d && p <= d, h = u(p) || null != f && p >= f, g = e => {
    n(u(e) ? null != d ? d : 0 : e), _(e)
  }, E = e => {
    e.stopPropagation(), m || g(p - 1)
  }, b = e => {
    e.stopPropagation(), h || g(p + 1)
  }, y = e => {
    if (u(e)) return g(e);
    let t = parseInt(e);
    if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t)
  };
  return (0, r.jsxs)("div", {
    className: o()(c.actions, a),
    children: [(0, r.jsx)(s.hU, {
      variant: "icon-only",
      size: "sm",
      icon: s.V_R,
      onClick: E,
      "aria-label": l.intl.string(l.t["k+ohJm"]),
      disabled: m
    }), (0, r.jsx)("div", {
      className: c.value,
      children: (0, r.jsx)(s.oil, {
        value: "".concat(p),
        onChange: y
      })
    }), (0, r.jsx)(s.hU, {
      size: "sm",
      variant: "icon-only",
      icon: s.qJs,
      onClick: b,
      "aria-label": l.intl.string(l.t.w8Sc4B),
      disabled: h
    })]
  })
}