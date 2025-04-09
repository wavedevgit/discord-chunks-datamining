/** Chunk was on 41150 **/
n.d(l, {
  Hs: () => h,
  ZP: () => v,
  qy: () => x
});
var t = n(200651),
  i = n(192379),
  r = n(317261),
  a = n(379357),
  s = n(442550),
  d = n(561308),
  c = n(297781),
  o = n(443487),
  u = n(522314);
let h = [c.E6],
  m = [r._.WEEK];

function x(e) {
  return null != e && m.includes(e)
}
let v = i.memo(e => {
  let {
    entry: l,
    channel: n,
    selected: i
  } = e, {
    largeImage: r
  } = (0, a.rv)({
    entry: l,
    showCoverImage: !1
  }), m = (0, d.Nq)(l);
  return null != m && x(m) ? (0, t.jsxs)(o.Zb, {
    selected: i,
    children: [(0, t.jsxs)(o.e$, {
      children: [(0, t.jsx)(o.F9, {
        entry: l,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, t.jsx)(o.ll, {
        children: l.extra.game_name
      }), (0, t.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: h.map((e, n) => (0, t.jsx)(e, {
          entry: l
        }, n))
      })]
    }), (0, t.jsx)(s.f, {
      src: null == r ? void 0 : r.src,
      size: 48,
      className: u.thumbnail,
      alt: null == r ? void 0 : r.alt
    })]
  }) : null
})