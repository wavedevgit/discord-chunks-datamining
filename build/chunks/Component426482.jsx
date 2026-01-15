/** Chunk was on web.js **/
/** chunk id: 426482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d,
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457858 = require("./457858.js"),
  u = function(e) {
    return e[e.SMALL = 0] = "SMALL", e[e.LARGE = 1] = "LARGE", e
  }({});

function d(e) {
  var t;
  let {
    game: n,
    application: a,
    size: u,
    className: d
  } = e, [f, p] = i.useState(false), _ = null != (t = null == a ? true : a.name) ? t : n.name, h = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null, m = () => {
    p(true)
  }, g = () => {
    p(false)
  };
  return null == n.coverImageUrl || f ? (0, r.jsxs)("div", {
    className: o()(c.fallback, d),
    children: [(0, r.jsx)("div", {
      className: c.spacer
    }), (0, r.jsx)(s.xvT, {
      variant: 1 === u ? "text-md/medium" : "text-xs/medium",
      color: "always-white",
      lineClamp: 1 === u ? 4 : 3,
      children: _
    }), (0, r.jsx)("div", {
      className: c.spacer
    }), (0, r.jsx)(s.xvT, {
      variant: 1 === u ? "text-sm/normal" : "text-xxs/normal",
      color: "always-white",
      children: null != h ? "(".concat(null == h ? true : h.getFullYear(), ")") : null
    })]
  }) : (0, r.jsx)("img", {
    className: d,
    src: n.coverImageUrl,
    alt: l.intl.formatToPlainString(l.t["3ev90U"], {
      game: _
    }),
    onError: m,
    onLoad: g
  })
}