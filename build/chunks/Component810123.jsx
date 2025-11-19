/** Chunk was on 86590 **/
/** chunk id: 810123, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E: () => d,
  Z: () => b
});
var l, Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk710231 = require("./710231.js"),
  d = ((l = {}).SMALL_32 = "SMALL_32", l);
let f = {
    SMALL_32: 24
  },
  h = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  b = function(e) {
    let {
      className: n,
      iconClassName: t,
      size: l,
      channel: i,
      guild: d,
      locked: b,
      hasActiveThreads: p
    } = e;
    if (null == d) return null;
    let j = (0, s.EB)(d, 48),
      m = h[l],
      g = f[l],
      y = (0, o.KS)(i, d, {
        locked: b,
        hasActiveThreads: p
      });
    if (null == y) return null;
    let O = null != d ? (0, s.gM)(d) : "";
    return (0, r.jsxs)("div", {
      role: "img",
      className: n,
      children: [(0, r.jsx)(a.ZP, {
        mask: a.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != j ? (0, r.jsx)("img", {
          alt: "",
          src: j,
          className: u.channelGuildIcon,
          style: {
            width: g,
            height: g
          }
        }) : (0, r.jsx)("div", {
          className: c()(u.channelGuildIcon, u.acronym),
          style: {
            fontSize: O.length - 1 > m.length ? m[m.length - 1] : m[O.length - 1],
            width: g,
            height: g
          },
          children: O
        })
      }), (0, r.jsx)(y, {
        className: c()(u.icon, u.iconWithGuildIcon, t),
        color: "currentColor"
      })]
    })
  }