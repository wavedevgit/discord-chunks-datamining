/** Chunk was on web.js **/
/** chunk id: 229555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk302221 = require("./302221.js"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70815 = require("./70815.js");
let p = (e, t) => (null == e ? true : e.status) === c.Vq.EARNED ? d.intl.format(d.t.Hu4jfi, {
    date: null != t ? t : new Date
  }) : (null == e ? true : e.status) === c.Vq.UPCOMING ? d.intl.format(d.t.E85fll, {
    date: null != t ? t : new Date,
    days: e.daysLeft
  }) : null,
  _ = () => {
    var e;
    let t = (0, c.Rw)(),
      n = null != (e = (0, c.GG)()) ? e : new Date,
      i = (0, u.u)(null == t ? true : t.id);
    if (null == t || null == i) return null;
    let {
      id: _,
      nameUnformatted: m,
      tenureReqNumMonths: h,
      hasWideArt: g
    } = t, E = d.intl.string(m), b = (0, l.q)(_, h), y = {
      "--custom-badge-glow-color": (0, s.rj)(t.glowColor, .5)
    };
    return (0, r.jsxs)("div", {
      className: f.container,
      style: y,
      children: [(0, r.jsx)("div", {}), " ", (0, r.jsx)("img", {
        src: i,
        alt: E,
        className: a()(f.badgeImage, {
          [f.upcomingBadge]: t.status === c.Vq.UPCOMING,
          [f.wide]: g
        })
      }), (0, r.jsxs)("div", {
        className: f.textColumn,
        children: [(0, r.jsx)(o.xvT, {
          variant: "text-lg/semibold",
          className: f.badgeText,
          children: E
        }), (0, r.jsx)(o.xvT, {
          variant: "text-md/normal",
          className: f.badgeText,
          children: b
        }), (0, r.jsx)(o.xvT, {
          variant: "text-xs/normal",
          children: p(t, n)
        })]
      })]
    })
  }