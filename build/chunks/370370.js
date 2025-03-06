/** Chunk was on 76282 **/
n.d(t, {
  Z: () => d,
  j: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  a = n(297781),
  s = n(443487),
  c = n(563504);
let u = [a.OV, a.EE, a.Af, a.U9, a.n8, a.pQ],
  d = i.memo(e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: d
    } = e, {
      largeImage: _
    } = (0, o.rv)({
      entry: t,
      showCoverImage: !1
    });
    return (0, r.jsxs)(s.Zb, {
      selected: i,
      children: [(0, r.jsxs)(s.e$, {
        children: [(0, r.jsx)(s.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(s.ll, {
          children: t.extra.activity_name
        }), (0, r.jsx)(a.Gk, {
          location: a.Gt.CARD,
          children: u.map((e, n) => (0, r.jsx)(e, {
            entry: t,
            hovered: d
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