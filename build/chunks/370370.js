/** Chunk was on 62880 **/
l.d(n, {
  Z: () => u,
  j: () => o
});
var t = l(200651),
  i = l(192379),
  a = l(379357),
  s = l(442550),
  r = l(297781),
  c = l(443487),
  d = l(563504);
let o = [r.OV, r.EE, r.Af, r.U9, r.n8, r.pQ],
  u = i.memo(e => {
    let {
      entry: n,
      channel: l,
      selected: i,
      hovered: u
    } = e, {
      largeImage: x
    } = (0, a.rv)({
      entry: n,
      showCoverImage: !1
    });
    return (0, t.jsxs)(c.Zb, {
      selected: i,
      children: [(0, t.jsxs)(c.e$, {
        children: [(0, t.jsx)(c.F9, {
          entry: n,
          channelId: l.id,
          guildId: l.guild_id
        }), (0, t.jsx)(c.ll, {
          children: n.extra.activity_name
        }), (0, t.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, l) => (0, t.jsx)(e, {
            entry: n,
            hovered: u
          }, l))
        })]
      }), (0, t.jsx)(s.f, {
        alt: null == x ? void 0 : x.alt,
        src: null == x ? void 0 : x.src,
        size: 48,
        className: d.thumbnail
      })]
    })
  })