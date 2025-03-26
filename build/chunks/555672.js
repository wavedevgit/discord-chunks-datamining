/** Chunk was on 62880 **/
l.d(n, {
  Hs: () => x,
  ZP: () => j,
  qy: () => h
});
var t = l(200651),
  i = l(192379),
  a = l(317261),
  s = l(379357),
  r = l(442550),
  c = l(561308),
  d = l(297781),
  o = l(443487),
  u = l(563504);
let x = [d.E6],
  m = [a._.WEEK];

function h(e) {
  return null != e && m.includes(e)
}
let j = i.memo(e => {
  let {
    entry: n,
    channel: l,
    selected: i
  } = e, {
    largeImage: a
  } = (0, s.rv)({
    entry: n,
    showCoverImage: !1
  }), m = (0, c.Nq)(n);
  return null != m && h(m) ? (0, t.jsxs)(o.Zb, {
    selected: i,
    children: [(0, t.jsxs)(o.e$, {
      children: [(0, t.jsx)(o.F9, {
        entry: n,
        channelId: l.id,
        guildId: l.guild_id
      }), (0, t.jsx)(o.ll, {
        children: n.extra.game_name
      }), (0, t.jsx)(d.Gk, {
        location: d.Gt.CARD,
        children: x.map((e, l) => (0, t.jsx)(e, {
          entry: n
        }, l))
      })]
    }), (0, t.jsx)(r.f, {
      src: null == a ? void 0 : a.src,
      size: 48,
      className: u.thumbnail,
      alt: null == a ? void 0 : a.alt
    })]
  }) : null
})