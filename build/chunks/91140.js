/** Chunk was on 62880 **/
l.d(n, {
  W: () => o,
  Z: () => u
});
var t = l(200651),
  i = l(192379),
  a = l(379357),
  s = l(442550),
  r = l(297781),
  c = l(443487),
  d = l(220359);
let o = [r.OV, r.EE, r.Af, r.U9, r.wO, r.f, r.n8, r.v1, r.pQ],
  u = i.memo(e => {
    var n;
    let {
      entry: l,
      channel: i,
      selected: u,
      hovered: x
    } = e, {
      largeImage: m
    } = (0, a.rv)({
      entry: l,
      showCoverImage: !1
    });
    return (0, t.jsxs)(c.Zb, {
      selected: u,
      children: [(0, t.jsxs)(c.e$, {
        children: [(0, t.jsx)(c.F9, {
          entry: l,
          channelId: i.id,
          guildId: i.guild_id
        }), (0, t.jsx)(c.ll, {
          children: l.extra.game_name
        }), (0, t.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, n) => (0, t.jsx)(e, {
            entry: l,
            hovered: x
          }, n))
        })]
      }), (0, t.jsx)(s.f, {
        alt: null !== (n = null == m ? void 0 : m.text) && void 0 !== n ? n : null == m ? void 0 : m.alt,
        src: null == m ? void 0 : m.src,
        size: 48,
        className: d.thumbnail,
        showTooltip: (null == m ? void 0 : m.text) != null
      })]
    })
  })