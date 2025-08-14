/** Chunk was on 7384 **/
/** chunk id: 229555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk302221 = require("./302221.js"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk726185 = require("./726185.js");
let p = () => {
  var e;
  let t = (0, Chunk848572.Rw)(),
    n = null != (e = (0, Chunk848572.GG)()) ? module : new Date,
    r = (0, Chunk787528.u)(null == exports ? true : exports.id);
  if (null == exports || null == Chunk120356) return null;
  let {
    id: p,
    nameUnformatted: g,
    tenureReqNumMonths: h,
    hasWideArt: f
  } = exports, b = Chunk388032.intl.string(g), x = (0, Chunk553896.q)(p, h), _ = {
    "--custom-badge-glow-color": (0, Chunk302221.rj)(exports.glowColor, .5)
  };
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726185.container,
    style: _,
    children: [(0, Chunk255367.jsx)("div", {}), " ", (0, Chunk255367.jsx)("img", {
      src: Chunk120356,
      alt: b,
      className: s()(Chunk726185.badgeImage, {
        [Chunk726185.upcomingBadge]: exports.status === Chunk848572.Vq.UPCOMING,
        [Chunk726185.wide]: f
      })
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk726185.textColumn,
      children: [(0, Chunk255367.jsx)(Chunk793030.xv, {
        variant: "text-lg/semibold",
        className: Chunk726185.badgeText,
        children: b
      }), (0, Chunk255367.jsx)(Chunk793030.xv, {
        variant: "text-md/normal",
        className: Chunk726185.badgeText,
        children: x
      }), (0, Chunk255367.jsx)(Chunk793030.xv, {
        variant: "text-xs/normal",
        children: (null == exports ? true : exports.status) === Chunk848572.Vq.EARNED ? Chunk388032.intl.format(Chunk388032.t.Hu4jfn, {
          date: null != require ? require : new Date
        }) : (null == exports ? true : exports.status) === Chunk848572.Vq.UPCOMING ? Chunk388032.intl.format(Chunk388032.t.E85flp, {
          date: null != require ? require : new Date,
          days: exports.daysLeft
        }) : null
      })]
    })]
  })
}