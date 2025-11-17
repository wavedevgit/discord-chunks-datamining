/** Chunk was on web.js **/
/** chunk id: 223135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./467055.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk212605 = require("./212605.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk797156 = require("./797156.js"),
  Chunk505905 = require("./505905.js");
let u = new Set([Chunk657707.GsA.name, Chunk657707.iWm.name, Chunk657707.FLu.name, Chunk657707.Xbz.name]),
  d = Object.fromEntries(Object.entries(Chunk212605.Z).map(e => {
    let [t, n] = e;
    return [n, t]
  })),
  f = e => {
    var t, n;
    let {
      className: i,
      hangStatusActivity: a,
      size: f,
      animate: _ = true,
      fallbackVariant: p = "twemoji",
      userId: h
    } = e, m = (0, l.F)(h, null == a ? true : a.state), g = (0, s.tV)(h, a, p);
    if ((m[0] === c.tN.CUSTOM || (null == g ? true : g.emoji) != null) && null != a) {
      let e = null != (t = null == g ? true : g.emoji) ? t : a.emoji;
      return null != e ? (0, r.jsx)(o.Z, {
        emoji: e,
        className: i,
        hideTooltip: true,
        animate: _
      }) : null
    }
    let E = null == g ? true : g.icon;
    if (null == E) return null;
    if ("string" == typeof E) return null != E ? (0, r.jsx)("img", {
      src: E,
      alt: "",
      className: null != i ? i : true
    }) : null;
    let b = E;
    return u.has(E.name) ? (0, r.jsx)(b, {
      size: null != (n = d[f]) ? n : true,
      className: i
    }) : (0, r.jsx)(b, {
      size: f,
      className: i
    })
  }