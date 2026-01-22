/** Chunk was on 96758 **/
/** chunk id: 255266, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => h,
  q: () => d
});
var n, Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk713654 = require("./713654.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk129216 = require("./129216.js"),
  d = ((n = {}).SMALL_32 = "SMALL_32", n);
let b = {
    SMALL_32: 24
  },
  f = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  h = function(e) {
    let {
      className: t,
      iconClassName: r,
      size: n,
      channel: s,
      guild: d,
      locked: h,
      hasActiveThreads: m
    } = e;
    if (null == d) return null;
    let p = (0, c.Iv)(d, 48),
      y = f[n],
      g = b[n],
      j = (0, u.gU)(s, d, {
        locked: h,
        hasActiveThreads: m
      });
    if (null == j) return null;
    let x = null != d ? (0, c.Rb)(d) : "";
    return (0, l.jsxs)("div", {
      role: "img",
      className: t,
      children: [(0, l.jsx)(a.Ay, {
        mask: a.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != p ? (0, l.jsx)("img", {
          alt: "",
          src: p,
          className: o.Aq,
          style: {
            width: g,
            height: g
          }
        }) : (0, l.jsx)("div", {
          className: i()(o.Aq, o.q9),
          style: {
            fontSize: x.length - 1 > y.length ? y[y.length - 1] : y[x.length - 1],
            width: g,
            height: g
          },
          children: x
        })
      }), (0, l.jsx)(j, {
        className: i()(o.Kk, o.Is, r),
        color: "currentColor"
      })]
    })
  }