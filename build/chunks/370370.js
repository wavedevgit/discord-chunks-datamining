/** Chunk was on 62880 **/
t.d(n, {
  Z: () => u,
  j: () => o
});
var l = t(200651),
  i = t(192379),
  a = t(379357),
  s = t(442550),
  r = t(297781),
  c = t(443487),
  d = t(62545);
let o = [r.OV, r.EE, r.Af, r.U9, r.n8, r.pQ],
  u = i.memo(e => {
    let {
      entry: n,
      channel: t,
      selected: i,
      hovered: u
    } = e, {
      largeImage: x
    } = (0, a.rv)({
      entry: n,
      showCoverImage: !1
    });
    return (0, l.jsxs)(c.Zb, {
      selected: i,
      children: [(0, l.jsxs)(c.e$, {
        children: [(0, l.jsx)(c.F9, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id
        }), (0, l.jsx)(c.ll, {
          children: n.extra.activity_name
        }), (0, l.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, t) => (0, l.jsx)(e, {
            entry: n,
            hovered: u
          }, t))
        })]
      }), (0, l.jsx)(s.f, {
        alt: null == x ? void 0 : x.alt,
        src: null == x ? void 0 : x.src,
        size: 48,
        className: d.thumbnail
      })]
    })
  })