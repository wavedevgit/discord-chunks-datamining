/** Chunk was on 98953 **/
/** chunk id: 810123, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E: () => b,
  Z: () => g
});
var o, Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk710231 = require("./710231.js"),
  b = ((o = {}).SMALL_32 = "SMALL_32", o);
let s = {
    SMALL_32: 24
  },
  u = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  g = function(e) {
    let {
      className: n,
      iconClassName: t,
      size: o,
      channel: _,
      guild: b,
      locked: g,
      hasActiveThreads: p
    } = e;
    if (null == b) return null;
    let h = (0, d.EB)(b, 48),
      v = u[o],
      m = s[o],
      w = (0, r.KS)(_, b, {
        locked: g,
        hasActiveThreads: p
      });
    if (null == w) return null;
    let I = null != b ? (0, d.gM)(b) : "";
    return (0, i.jsxs)("div", {
      role: "img",
      className: n,
      children: [(0, i.jsx)(c.ZP, {
        mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != h ? (0, i.jsx)("img", {
          alt: "",
          src: h,
          className: l.channelGuildIcon,
          style: {
            width: m,
            height: m
          }
        }) : (0, i.jsx)("div", {
          className: a()(l.channelGuildIcon, l.acronym),
          style: {
            fontSize: I.length - 1 > v.length ? v[v.length - 1] : v[I.length - 1],
            width: m,
            height: m
          },
          children: I
        })
      }), (0, i.jsx)(w, {
        className: a()(l.icon, l.iconWithGuildIcon, t),
        color: "currentColor"
      })]
    })
  }