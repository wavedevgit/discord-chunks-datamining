/** Chunk was on 62880 **/
l.d(n, {
  Z: () => u,
  t: () => o
});
var t = l(200651),
  i = l(192379),
  a = l(379357),
  s = l(442550),
  r = l(297781),
  c = l(443487),
  d = l(220359);
let o = [r.Yl, r.Rg],
  u = i.memo(e => {
    let {
      entry: n,
      channel: l,
      selected: i
    } = e, {
      largeImage: u
    } = (0, a.rv)({
      entry: n
    });
    return (0, t.jsxs)(c.Zb, {
      selected: i,
      children: [(0, t.jsxs)(c.e$, {
        children: [(0, t.jsx)(c.F9, {
          entry: n,
          channelId: l.id,
          guildId: l.guild_id
        }), (0, t.jsx)(c.ll, {
          children: n.extra.media_title
        }), (0, t.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, l) => (0, t.jsx)(e, {
            entry: n
          }, l))
        })]
      }), (0, t.jsx)(s.f, {
        src: null == u ? void 0 : u.src,
        size: 48,
        className: d.thumbnail,
        alt: null == u ? void 0 : u.alt
      })]
    })
  })