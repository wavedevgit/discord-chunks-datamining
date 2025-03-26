/** Chunk was on 97574 **/
r.d(t, {
  E: () => v,
  Z: () => E
});
var n, l = r(200651),
  i = r(120356),
  a = r.n(i),
  o = r(468194),
  s = r(471445),
  h = r(686546),
  c = r(677369),
  v = ((n = {}).SMALL_32 = "SMALL_32", n);
let u = {
    SMALL_32: 24
  },
  d = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  },
  E = function(e) {
    var t;
    let {
      className: r,
      iconClassName: n,
      size: i,
      channel: v,
      guild: E,
      locked: f,
      hasActiveThreads: p
    } = e;
    if (null == E) return null;
    let M = E.getIconURL(48),
      _ = d[i],
      O = u[i],
      g = (0, s.KS)(v, E, {
        locked: f,
        hasActiveThreads: p
      });
    if (null == g) return null;
    let b = (0, o.Zg)(null !== (t = null == E ? void 0 : E.toString()) && void 0 !== t ? t : null);
    return (0, l.jsxs)("div", {
      role: "img",
      className: r,
      children: [(0, l.jsx)(h.ZP, {
        mask: h.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
        children: null != M ? (0, l.jsx)("img", {
          alt: "",
          src: M,
          className: c.channelGuildIcon,
          style: {
            width: O,
            height: O
          }
        }) : (0, l.jsx)("div", {
          className: a()(c.channelGuildIcon, c.acronym),
          style: {
            fontSize: b.length - 1 > _.length ? _[_.length - 1] : _[b.length - 1],
            width: O,
            height: O
          },
          children: b
        })
      }), (0, l.jsx)(g, {
        className: a()(c.icon, c.iconWithGuildIcon, n),
        color: "currentColor"
      })]
    })
  }