/** Chunk was on 74329 **/
n.d(t, {
  W: () => u,
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  a = n(297781),
  s = n(443487),
  c = n(563504);
let u = [a.OV, a.EE, a.Af, a.U9, a.wO, a.f, a.n8, a.v1, a.pQ],
  d = i.memo(e => {
    var t;
    let {
      entry: n,
      channel: i,
      selected: d,
      hovered: _
    } = e, {
      largeImage: p
    } = (0, o.rv)({
      entry: n,
      showCoverImage: !1
    });
    return (0, r.jsxs)(s.Zb, {
      selected: d,
      children: [(0, r.jsxs)(s.e$, {
        children: [(0, r.jsx)(s.F9, {
          entry: n,
          channelId: i.id,
          guildId: i.guild_id
        }), (0, r.jsx)(s.ll, {
          children: n.extra.game_name
        }), (0, r.jsx)(a.Gk, {
          location: a.Gt.CARD,
          children: u.map((e, t) => (0, r.jsx)(e, {
            entry: n,
            hovered: _
          }, t))
        })]
      }), (0, r.jsx)(l.f, {
        alt: null !== (t = null == p ? void 0 : p.text) && void 0 !== t ? t : null == p ? void 0 : p.alt,
        src: null == p ? void 0 : p.src,
        size: 48,
        className: c.thumbnail,
        showTooltip: (null == p ? void 0 : p.text) != null
      })]
    })
  })