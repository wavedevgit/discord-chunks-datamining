/** Chunk was on 74329 **/
n.d(t, {
  Z: () => d,
  t: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  a = n(297781),
  s = n(443487),
  c = n(563504);
let u = [a.Yl, a.Rg],
  d = i.memo(e => {
    let {
      entry: t,
      channel: n,
      selected: i
    } = e, {
      largeImage: d
    } = (0, o.rv)({
      entry: t
    });
    return (0, r.jsxs)(s.Zb, {
      selected: i,
      children: [(0, r.jsxs)(s.e$, {
        children: [(0, r.jsx)(s.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(s.ll, {
          children: t.extra.media_title
        }), (0, r.jsx)(a.Gk, {
          location: a.Gt.CARD,
          children: u.map((e, n) => (0, r.jsx)(e, {
            entry: t
          }, n))
        })]
      }), (0, r.jsx)(l.f, {
        src: null == d ? void 0 : d.src,
        size: 48,
        className: c.thumbnail,
        alt: null == d ? void 0 : d.alt
      })]
    })
  })