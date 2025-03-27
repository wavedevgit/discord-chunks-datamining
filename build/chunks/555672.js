/** Chunk was on 87791 **/
n.d(t, {
  Hs: () => p,
  ZP: () => m,
  qy: () => h
});
var r = n(200651),
  i = n(192379),
  o = n(317261),
  l = n(379357),
  a = n(442550),
  s = n(561308),
  c = n(297781),
  u = n(443487),
  d = n(563504);
let p = [c.E6],
  f = [o._.WEEK];

function h(e) {
  return null != e && f.includes(e)
}
let m = i.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e, {
    largeImage: o
  } = (0, l.rv)({
    entry: t,
    showCoverImage: !1
  }), f = (0, s.Nq)(t);
  return null != f && h(f) ? (0, r.jsxs)(u.Zb, {
    selected: i,
    children: [(0, r.jsxs)(u.e$, {
      children: [(0, r.jsx)(u.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(u.ll, {
        children: t.extra.game_name
      }), (0, r.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: p.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, r.jsx)(a.f, {
      src: null == o ? void 0 : o.src,
      size: 48,
      className: d.thumbnail,
      alt: null == o ? void 0 : o.alt
    })]
  }) : null
})