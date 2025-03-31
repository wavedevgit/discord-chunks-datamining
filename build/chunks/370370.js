/** Chunk was on 72663 **/
n.d(t, {
  Z: () => u,
  j: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  s = n(297781),
  a = n(443487),
  c = n(220359);
let d = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ],
  u = i.memo(e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: u
    } = e, {
      largeImage: _
    } = (0, o.rv)({
      entry: t,
      showCoverImage: !1
    });
    return (0, r.jsxs)(a.Zb, {
      selected: i,
      children: [(0, r.jsxs)(a.e$, {
        children: [(0, r.jsx)(a.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(a.ll, {
          children: t.extra.activity_name
        }), (0, r.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: d.map((e, n) => (0, r.jsx)(e, {
            entry: t,
            hovered: u
          }, n))
        })]
      }), (0, r.jsx)(l.f, {
        alt: null == _ ? void 0 : _.alt,
        src: null == _ ? void 0 : _.src,
        size: 48,
        className: c.thumbnail
      })]
    })
  })