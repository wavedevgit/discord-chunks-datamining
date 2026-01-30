/** Chunk was on 78376 **/
/** chunk id: 95859, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk998304 = require("./998304.js"),
  Chunk764231 = require("./764231.js"),
  Chunk112848 = require("./112848.js"),
  Chunk149757 = require("./149757.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk706627 = require("./706627.js");
let p = () => {
  var e;
  let t = (0, c.$F)(),
    n = null != (e = (0, c.Xb)()) ? e : new Date,
    i = (0, d.N)(null == t ? true : t.id);
  if (null == t || null == i) return null;
  let {
    id: p,
    nameUnformatted: m,
    tenureReqNumMonths: g,
    hasWideArt: A
  } = t, f = u.intl.string(m), b = (0, o.T)(p, g), h = {
    "--custom-badge-glow-color": (0, a.KU)(t.glowColor, .5)
  };
  return (0, r.jsxs)("div", {
    className: _.kL,
    style: h,
    children: [(0, r.jsx)("div", {}), " ", (0, r.jsx)("img", {
      src: i,
      alt: f,
      className: l()(_.pq, {
        [_.kQ]: t.status === c.Wo.UPCOMING,
        [_.U]: A
      })
    }), (0, r.jsxs)("div", {
      className: _._u,
      children: [(0, r.jsx)(s.EYj, {
        variant: "text-lg/semibold",
        className: _.Vv,
        children: f
      }), (0, r.jsx)(s.EYj, {
        variant: "text-md/normal",
        className: _.Vv,
        children: b
      }), (0, r.jsx)(s.EYj, {
        variant: "text-xs/normal",
        children: (null == t ? true : t.status) === c.Wo.EARNED ? u.intl.format(u.t.Hu4jfi, {
          date: null != n ? n : new Date
        }) : (null == t ? true : t.status) === c.Wo.UPCOMING ? u.intl.format(u.t.E85fll, {
          date: null != n ? n : new Date,
          days: t.daysLeft
        }) : null
      })]
    })]
  })
}