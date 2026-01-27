/** Chunk was on 96758 **/
/** chunk id: 255266, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d,
  q: () => A
});
var n, Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk713654 = require("./713654.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk129216 = require("./129216.js"),
  A = ((n = {}).SMALL_32 = "SMALL_32", n);
let f = {
    SMALL_32: 24
  },
  h = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  d = function(e) {
    let {
      className: t,
      iconClassName: r,
      size: n,
      channel: s,
      guild: A,
      locked: d,
      hasActiveThreads: b
    } = e;
    if (null == A) return null;
    let _ = (0, o.Iv)(A, 48),
      p = h[n],
      y = f[n],
      O = (0, a.gU)(s, A, {
        locked: d,
        hasActiveThreads: b
      });
    if (null == O) return null;
    let E = null != A ? (0, o.Rb)(A) : "";
    return (0, l.jsxs)("div", {
      role: "img",
      className: t,
      children: [(0, l.jsx)(u.Ay, {
        mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != _ ? (0, l.jsx)("img", {
          alt: "",
          src: _,
          className: c.Aq,
          style: {
            width: y,
            height: y
          }
        }) : (0, l.jsx)("div", {
          className: i()(c.Aq, c.q9),
          style: {
            fontSize: E.length - 1 > p.length ? p[p.length - 1] : p[E.length - 1],
            width: y,
            height: y
          },
          children: E
        })
      }), (0, l.jsx)(O, {
        className: i()(c.Kk, c.Is, r),
        color: "currentColor"
      })]
    })
  }