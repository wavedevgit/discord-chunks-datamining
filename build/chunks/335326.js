/** Chunk was on 41150 **/
n.d(l, {
  Z: () => u,
  t: () => o
});
var t = n(200651),
  i = n(192379),
  r = n(379357),
  a = n(442550),
  s = n(297781),
  d = n(443487),
  c = n(522314);
let o = [s.Yl, s.Rg],
  u = i.memo(e => {
    let {
      entry: l,
      channel: n,
      selected: i
    } = e, {
      largeImage: u
    } = (0, r.rv)({
      entry: l
    });
    return (0, t.jsxs)(d.Zb, {
      selected: i,
      children: [(0, t.jsxs)(d.e$, {
        children: [(0, t.jsx)(d.F9, {
          entry: l,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, t.jsx)(d.ll, {
          children: l.extra.media_title
        }), (0, t.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: o.map((e, n) => (0, t.jsx)(e, {
            entry: l
          }, n))
        })]
      }), (0, t.jsx)(a.f, {
        src: null == u ? void 0 : u.src,
        size: 48,
        className: c.thumbnail,
        alt: null == u ? void 0 : u.alt
      })]
    })
  })