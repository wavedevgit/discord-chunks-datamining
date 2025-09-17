/** Chunk was on web.js **/
/** chunk id: 227157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk512983 = require("./512983.jsx"),
  Chunk211644 = require("./211644.js"),
  Chunk98460 = require("./98460.js"),
  Chunk699867 = require("./699867.jsx"),
  Chunk10198 = require("./10198.js");

function u(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, o.ZP)(e => e.recentlyShown), [u, d] = (0, s.Z)(), f = u.filter(e => e.toLowerCase().includes(t.toLowerCase())).filter(e => !n.includes(i.z[e]));
  return 0 === f.length ? null : (0, r.jsxs)("div", {
    className: c.marginBottom8,
    children: [(0, r.jsx)(a.v, {
      tag: a.R.H2,
      children: "Recent Overrides"
    }), (0, r.jsx)(l.Z, {
      items: f
    })]
  })
}