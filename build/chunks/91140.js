/** Chunk was on 41150 **/
n.d(l, {
  W: () => o,
  Z: () => u
});
var t = n(200651),
  i = n(192379),
  r = n(379357),
  a = n(442550),
  s = n(297781),
  d = n(443487),
  c = n(522314);
let o = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
  u = i.memo(e => {
    var l;
    let {
      entry: n,
      channel: i,
      selected: u,
      hovered: h
    } = e, {
      largeImage: m
    } = (0, r.rv)({
      entry: n,
      showCoverImage: !1
    });
    return (0, t.jsxs)(d.Zb, {
      selected: u,
      children: [(0, t.jsxs)(d.e$, {
        children: [(0, t.jsx)(d.F9, {
          entry: n,
          channelId: i.id,
          guildId: i.guild_id
        }), (0, t.jsx)(d.ll, {
          children: n.extra.game_name
        }), (0, t.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: o.map((e, l) => (0, t.jsx)(e, {
            entry: n,
            hovered: h
          }, l))
        })]
      }), (0, t.jsx)(a.f, {
        alt: null != (l = null == m ? void 0 : m.text) ? l : null == m ? void 0 : m.alt,
        src: null == m ? void 0 : m.src,
        size: 48,
        className: c.thumbnail,
        showTooltip: (null == m ? void 0 : m.text) != null
      })]
    })
  })