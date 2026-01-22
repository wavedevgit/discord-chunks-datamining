/** Chunk was on web.js **/
/** chunk id: 459746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  w: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk902820 = require("./902820.js"),
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
    className: s()(c.N, d),
    children: [(0, r.jsx)("div", {
      className: c.j
    }), (0, r.jsx)(o.EYj, {
      variant: 1 === u ? "text-md/medium" : "text-xs/medium",
      color: "always-white",
      lineClamp: 1 === u ? 4 : 3,
      children: _
    }), (0, r.jsx)("div", {
      className: c.j
    }), (0, r.jsx)(o.EYj, {
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