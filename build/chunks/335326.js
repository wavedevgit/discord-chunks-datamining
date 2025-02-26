/** Chunk was on 62880 **/
t.d(n, {
  Z: () => u,
  t: () => o
});
var l = t(200651),
  i = t(192379),
  a = t(379357),
  s = t(442550),
  r = t(297781),
  c = t(443487),
  d = t(62545);
let o = [r.Yl, r.Rg],
  u = i.memo(e => {
    let {
      entry: n,
      channel: t,
      selected: i
    } = e, {
      largeImage: u
    } = (0, a.rv)({
      entry: n
    });
    return (0, l.jsxs)(c.Zb, {
      selected: i,
      children: [(0, l.jsxs)(c.e$, {
        children: [(0, l.jsx)(c.F9, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id
        }), (0, l.jsx)(c.ll, {
          children: n.extra.media_title
        }), (0, l.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, t) => (0, l.jsx)(e, {
            entry: n
          }, t))
        })]
      }), (0, l.jsx)(s.f, {
        src: null == u ? void 0 : u.src,
        size: 48,
        className: d.thumbnail,
        alt: null == u ? void 0 : u.alt
      })]
    })
  })