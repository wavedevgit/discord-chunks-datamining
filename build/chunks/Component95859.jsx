/** Chunk was on web.js **/
/** chunk id: 95859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk998304 = require("./998304.js"),
  Chunk764231 = require("./764231.js"),
  Chunk112848 = require("./112848.js"),
  Chunk149757 = require("./149757.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk706627 = require("./706627.js");
let p = (e, t) => (null == e ? true : e.status) === c.Wo.EARNED ? d.intl.format(d.t.Hu4jfi, {
    date: null != t ? t : new Date
  }) : (null == e ? true : e.status) === c.Wo.UPCOMING ? d.intl.format(d.t.E85fll, {
    date: null != t ? t : new Date,
    days: e.daysLeft
  }) : null,
  _ = () => {
    var e;
    let t = (0, c.$F)(),
      n = null != (e = (0, c.Xb)()) ? e : new Date,
      i = (0, u.N)(null == t ? true : t.id);
    if (null == t || null == i) return null;
    let {
      id: _,
      nameUnformatted: h,
      tenureReqNumMonths: m,
      hasWideArt: g
    } = t, E = d.intl.string(h), y = (0, l.T)(_, m), b = {
      "--custom-badge-glow-color": (0, o.KU)(t.glowColor, .5)
    };
    return (0, r.jsxs)("div", {
      className: f.kL,
      style: b,
      children: [(0, r.jsx)("div", {}), " ", (0, r.jsx)("img", {
        src: i,
        alt: E,
        className: a()(f.pq, {
          [f.kQ]: t.status === c.Wo.UPCOMING,
          [f.U]: g
        })
      }), (0, r.jsxs)("div", {
        className: f._u,
        children: [(0, r.jsx)(s.EYj, {
          variant: "text-lg/semibold",
          className: f.Vv,
          children: E
        }), (0, r.jsx)(s.EYj, {
          variant: "text-md/normal",
          className: f.Vv,
          children: y
        }), (0, r.jsx)(s.EYj, {
          variant: "text-xs/normal",
          children: p(t, n)
        })]
      })]
    })
  }