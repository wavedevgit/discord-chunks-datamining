/** Chunk was on 72663 **/
n.d(t, {
  Hs: () => _,
  ZP: () => f,
  qy: () => h
});
var r = n(200651),
  i = n(192379),
  o = n(317261),
  l = n(379357),
  s = n(442550),
  a = n(561308),
  c = n(297781),
  d = n(443487),
  u = n(220359);
let _ = [c.E6],
  p = [o._.WEEK];

function h(e) {
  return null != e && p.includes(e)
}
let f = i.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e, {
    largeImage: o
  } = (0, l.rv)({
    entry: t,
    showCoverImage: !1
  }), p = (0, a.Nq)(t);
  return null != p && h(p) ? (0, r.jsxs)(d.Zb, {
    selected: i,
    children: [(0, r.jsxs)(d.e$, {
      children: [(0, r.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(d.ll, {
        children: t.extra.game_name
      }), (0, r.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: _.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, r.jsx)(s.f, {
      src: null == o ? void 0 : o.src,
      size: 48,
      className: u.thumbnail,
      alt: null == o ? void 0 : o.alt
    })]
  }) : null
})