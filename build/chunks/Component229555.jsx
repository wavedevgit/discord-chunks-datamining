/** Chunk was on web.js **/
/** chunk id: 229555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
  Chunk726185 = require("./726185.js");
let _ = (e, t) => (null == e ? true : e.status) === c.Vq.EARNED ? d.intl.format(d.t.Hu4jfi, {
    date: null != t ? t : new Date
  }) : (null == e ? true : e.status) === c.Vq.UPCOMING ? d.intl.format(d.t.E85fll, {
    date: null != t ? t : new Date,
    days: e.daysLeft
  }) : null,
  p = () => {
    var e;
    let t = (0, Chunk848572.Rw)(),
      n = null != (e = (0, Chunk848572.GG)()) ? module : new Date,
      i = (0, Chunk787528.u)(null == exports ? true : exports.id);
    if (null == exports || null == Chunk120356) return null;
    let {
      id: p,
      nameUnformatted: h,
      tenureReqNumMonths: m,
      hasWideArt: g
    } = exports, E = Chunk388032.intl.string(h), b = (0, Chunk553896.q)(p, m), y = {
      "--custom-badge-glow-color": (0, Chunk302221.rj)(exports.glowColor, .5)
    };
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk726185.container,
      style: y,
      children: [(0, Chunk54381.jsx)("div", {}), " ", (0, Chunk54381.jsx)("img", {
        src: Chunk120356,
        alt: E,
        className: a()(Chunk726185.badgeImage, {
          [Chunk726185.upcomingBadge]: exports.status === Chunk848572.Vq.UPCOMING,
          [Chunk726185.wide]: g
        })
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk726185.textColumn,
        children: [(0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-lg/semibold",
          className: Chunk726185.badgeText,
          children: E
        }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-md/normal",
          className: Chunk726185.badgeText,
          children: b
        }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-xs/normal",
          children: _(exports, require)
        })]
      })]
    })
  }