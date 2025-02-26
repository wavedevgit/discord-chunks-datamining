/** Chunk was on 62880 **/
t.d(n, {
  W: () => o,
  Z: () => u
});
var l = t(200651),
  i = t(192379),
  a = t(379357),
  s = t(442550),
  r = t(297781),
  c = t(443487),
  d = t(62545);
let o = [r.OV, r.EE, r.Af, r.U9, r.wO, r.f, r.n8, r.v1, r.pQ],
  u = i.memo(e => {
    var n;
    let {
      entry: t,
      channel: i,
      selected: u,
      hovered: x
    } = e, {
      largeImage: m
    } = (0, a.rv)({
      entry: t,
      showCoverImage: !1
    });
    return (0, l.jsxs)(c.Zb, {
      selected: u,
      children: [(0, l.jsxs)(c.e$, {
        children: [(0, l.jsx)(c.F9, {
          entry: t,
          channelId: i.id,
          guildId: i.guild_id
        }), (0, l.jsx)(c.ll, {
          children: t.extra.game_name
        }), (0, l.jsx)(r.Gk, {
          location: r.Gt.CARD,
          children: o.map((e, n) => (0, l.jsx)(e, {
            entry: t,
            hovered: x
          }, n))
        })]
      }), (0, l.jsx)(s.f, {
        alt: null !== (n = null == m ? void 0 : m.text) && void 0 !== n ? n : null == m ? void 0 : m.alt,
        src: null == m ? void 0 : m.src,
        size: 48,
        className: d.thumbnail,
        showTooltip: (null == m ? void 0 : m.text) != null
      })]
    })
  })