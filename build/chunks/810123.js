/** Chunk was on 86590 **/
n.d(t, {
  E: () => d,
  Z: () => b
});
var i, r = n(255367),
  a = n(120356),
  l = n.n(a),
  s = n(471445),
  c = n(686546),
  o = n(601964),
  u = n(292895),
  d = ((i = {}).SMALL_32 = "SMALL_32", i);
let f = {
    SMALL_32: 24
  },
  p = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  b = function(e) {
    let {
      className: t,
      iconClassName: n,
      size: i,
      channel: a,
      guild: d,
      locked: b,
      hasActiveThreads: E
    } = e;
    if (null == d) return null;
    let I = (0, o.EB)(d, 48),
      _ = p[i],
      g = f[i],
      y = (0, s.KS)(a, d, {
        locked: b,
        hasActiveThreads: E
      });
    if (null == y) return null;
    let A = null != d ? (0, o.gM)(d) : "";
    return (0, r.jsxs)("div", {
      role: "img",
      className: t,
      children: [(0, r.jsx)(c.ZP, {
        mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != I ? (0, r.jsx)("img", {
          alt: "",
          src: I,
          className: u.channelGuildIcon,
          style: {
            width: g,
            height: g
          }
        }) : (0, r.jsx)("div", {
          className: l()(u.channelGuildIcon, u.acronym),
          style: {
            fontSize: A.length - 1 > _.length ? _[_.length - 1] : _[A.length - 1],
            width: g,
            height: g
          },
          children: A
        })
      }), (0, r.jsx)(y, {
        className: l()(u.icon, u.iconWithGuildIcon, n),
        color: "currentColor"
      })]
    })
  }