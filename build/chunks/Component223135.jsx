/** Chunk was on web.js **/
/** chunk id: 223135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./467055.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk657707 = require("./657707.js"),
  Chunk212605 = require("./212605.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk505905 = require("./505905.js");
let c = new Set([Chunk657707.GsA.name, Chunk657707.iWm.name, Chunk657707.FLu.name, Chunk657707.Xbz.name]),
  u = Object.fromEntries(Object.entries(Chunk212605.Z).map(e => {
    let [t, n] = e;
    return [n, t]
  })),
  d = e => {
    var t, n;
    let {
      className: i,
      hangStatusActivity: a,
      size: d,
      animate: f = true,
      fallbackVariant: _ = "original"
    } = e, p = (0, s.Fe)(null == a ? true : a.state), h = (0, s.tV)(a, _);
    if ((p[0] === l.tN.CUSTOM || (null == h ? true : h.emoji) != null) && null != a) {
      let e = null != (t = null == h ? true : h.emoji) ? t : a.emoji;
      return null != e ? (0, r.jsx)(o.Z, {
        emoji: e,
        className: i,
        hideTooltip: true,
        animate: f
      }) : null
    }
    let m = null == h ? true : h.icon;
    if (null == m) return null;
    if ("string" == typeof m) return null != m ? (0, r.jsx)("img", {
      src: m,
      alt: "",
      className: null != i ? i : true
    }) : null;
    let g = m;
    return c.has(m.name) ? (0, r.jsx)(g, {
      size: null != (n = u[d]) ? n : true,
      className: i
    }) : (0, r.jsx)(g, {
      size: d,
      className: i
    })
  }