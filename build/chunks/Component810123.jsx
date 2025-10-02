/** Chunk was on 91294 **/
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
  Chunk102396 = require("./102396.js"),
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
      hasActiveThreads: h
    } = e;
    if (null == b) return null;
    let p = (0, d.EB)(b, 48),
      m = u[o],
      w = s[o],
      v = (0, r.KS)(_, b, {
        locked: g,
        hasActiveThreads: h
      });
    if (null == v) return null;
    let I = null != b ? (0, d.gM)(b) : "";
    return (0, i.jsxs)("div", {
      role: "img",
      className: n,
      children: [(0, i.jsx)(c.ZP, {
        mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != p ? (0, i.jsx)("img", {
          alt: "",
          src: p,
          className: l.channelGuildIcon,
          style: {
            width: w,
            height: w
          }
        }) : (0, i.jsx)("div", {
          className: a()(l.channelGuildIcon, l.acronym),
          style: {
            fontSize: I.length - 1 > m.length ? m[m.length - 1] : m[I.length - 1],
            width: w,
            height: w
          },
          children: I
        })
      }), (0, i.jsx)(v, {
        className: a()(l.icon, l.iconWithGuildIcon, t),
        color: "currentColor"
      })]
    })
  }