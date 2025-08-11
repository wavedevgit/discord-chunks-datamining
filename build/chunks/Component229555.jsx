/** Chunk was on 75708 **/
/** chunk id: 229555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk536564 = require("./536564.js");
let p = (e, t) => (null == e ? true : e.status) === c.Vq.EARNED ? u.intl.format(u.t.Hu4jfn, {
    date: null != t ? t : new Date
  }) : (null == e ? true : e.status) === c.Vq.UPCOMING ? u.intl.format(u.t.E85flp, {
    date: null != t ? t : new Date,
    days: e.daysLeft
  }) : null,
  g = () => {
    var e;
    let t = (0, Chunk848572.Rw)(),
      n = null != (e = (0, Chunk848572.GG)()) ? module : new Date,
      r = (0, Chunk787528.u)(null == exports ? true : exports.id);
    if (null == exports || null == Chunk120356) return null;
    let {
      id: g,
      nameUnformatted: h,
      tenureReqNumMonths: f,
      hasWideArt: b
    } = exports, x = Chunk388032.intl.string(h), _ = (0, Chunk553896.q)(g, f), j = {
      "--custom-badge-glow-color": (0, Chunk302221.rj)(exports.glowColor, .5)
    };
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk536564.container,
      style: j,
      children: [(0, Chunk255367.jsx)("div", {}), " ", (0, Chunk255367.jsx)("img", {
        src: Chunk120356,
        alt: x,
        className: s()(Chunk536564.badgeImage, {
          [Chunk536564.upcomingBadge]: exports.status === Chunk848572.Vq.UPCOMING,
          [Chunk536564.wide]: b
        })
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk536564.textColumn,
        children: [(0, Chunk255367.jsx)(Chunk793030.xv, {
          variant: "text-lg/semibold",
          className: Chunk536564.badgeText,
          children: x
        }), (0, Chunk255367.jsx)(Chunk793030.xv, {
          variant: "text-md/normal",
          className: Chunk536564.badgeText,
          children: _
        }), (0, Chunk255367.jsx)(Chunk793030.xv, {
          variant: "text-xs/normal",
          children: p(exports, require)
        })]
      })]
    })
  }