/** Chunk was on 72663 **/
n.d(t, {
  W: () => d,
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(379357),
  l = n(442550),
  s = n(297781),
  a = n(443487),
  c = n(220359);
let d = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
  u = i.memo(e => {
    var t;
    let {
      entry: n,
      channel: i,
      selected: u,
      hovered: _
    } = e, {
      largeImage: p
    } = (0, o.rv)({
      entry: n,
      showCoverImage: !1
    });
    return (0, r.jsxs)(a.Zb, {
      selected: u,
      children: [(0, r.jsxs)(a.e$, {
        children: [(0, r.jsx)(a.F9, {
          entry: n,
          channelId: i.id,
          guildId: i.guild_id
        }), (0, r.jsx)(a.ll, {
          children: n.extra.game_name
        }), (0, r.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: d.map((e, t) => (0, r.jsx)(e, {
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