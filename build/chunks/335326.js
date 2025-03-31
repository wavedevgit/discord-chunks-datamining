/** Chunk was on 72663 **/
n.d(t, {
  Z: () => u,
  t: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  s = n(297781),
  a = n(443487),
  c = n(220359);
let d = [s.Yl, s.Rg],
  u = i.memo(e => {
    let {
      entry: t,
      channel: n,
      selected: i
    } = e, {
      largeImage: u
    } = (0, o.rv)({
      entry: t
    });
    return (0, r.jsxs)(a.Zb, {
      selected: i,
      children: [(0, r.jsxs)(a.e$, {
        children: [(0, r.jsx)(a.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(a.ll, {
          children: t.extra.media_title
        }), (0, r.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: d.map((e, n) => (0, r.jsx)(e, {
            entry: t
          }, n))
        })]
      }), (0, r.jsx)(l.f, {
        src: null == u ? void 0 : u.src,
        size: 48,
        className: c.thumbnail,
        alt: null == u ? void 0 : u.alt
      })]
    })
  })