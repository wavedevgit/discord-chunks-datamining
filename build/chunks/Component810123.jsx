/** Chunk was on 86590 **/
/** chunk id: 810123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d,
  Z: () => I
});
var i, Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk710231 = require("./710231.js"),
  d = ((i = {}).SMALL_32 = "SMALL_32", i);
let f = {
    SMALL_32: 24
  },
  E = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  I = function(e) {
    let {
      className: t,
      iconClassName: n,
      size: i,
      channel: a,
      guild: d,
      locked: I,
      hasActiveThreads: p
    } = e;
    if (null == d) return null;
    let _ = (0, o.EB)(d, 48),
      b = E[i],
      A = f[i],
      g = (0, s.KS)(a, d, {
        locked: I,
        hasActiveThreads: p
      });
    if (null == g) return null;
    let y = null != d ? (0, o.gM)(d) : "";
    return (0, r.jsxs)("div", {
      role: "img",
      className: t,
      children: [(0, r.jsx)(c.ZP, {
        mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != _ ? (0, r.jsx)("img", {
          alt: "",
          src: _,
          className: u.channelGuildIcon,
          style: {
            width: A,
            height: A
          }
        }) : (0, r.jsx)("div", {
          className: l()(u.channelGuildIcon, u.acronym),
          style: {
            fontSize: y.length - 1 > b.length ? b[b.length - 1] : b[y.length - 1],
            width: A,
            height: A
          },
          children: y
        })
      }), (0, r.jsx)(g, {
        className: l()(u.icon, u.iconWithGuildIcon, n),
        color: "currentColor"
      })]
    })
  }