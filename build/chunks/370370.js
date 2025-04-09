/** Chunk was on 41150 **/
n.d(l, {
  Z: () => u,
  j: () => o
});
var t = n(200651),
  i = n(192379),
  r = n(379357),
  a = n(442550),
  s = n(297781),
  d = n(443487),
  c = n(522314);
let o = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ],
  u = i.memo(e => {
    let {
      entry: l,
      channel: n,
      selected: i,
      hovered: u
    } = e, {
      largeImage: h
    } = (0, r.rv)({
      entry: l,
      showCoverImage: !1
    });
    return (0, t.jsxs)(d.Zb, {
      selected: i,
      children: [(0, t.jsxs)(d.e$, {
        children: [(0, t.jsx)(d.F9, {
          entry: l,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, t.jsx)(d.ll, {
          children: l.extra.activity_name
        }), (0, t.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: o.map((e, n) => (0, t.jsx)(e, {
            entry: l,
            hovered: u
          }, n))
        })]
      }), (0, t.jsx)(a.f, {
        alt: null == h ? void 0 : h.alt,
        src: null == h ? void 0 : h.src,
        size: 48,
        className: c.thumbnail
      })]
    })
  })