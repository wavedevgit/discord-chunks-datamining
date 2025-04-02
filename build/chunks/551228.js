/** Chunk was on 62880 **/
l.d(n, {
  ZP: () => j,
  pi: () => h,
  te: () => m
}), l(47120);
var t = l(200651),
  i = l(192379),
  a = l(442837),
  s = l(594174),
  r = l(379357),
  c = l(719247),
  d = l(442550),
  o = l(297781),
  u = l(443487),
  x = l(220359);
let m = [o.XF];

function h(e) {
  var n, l, t, i;
  let r = (0, a.e7)([c.Z], () => c.Z.getMatchingActivity(e)),
    d = (0, a.e7)([s.default], () => s.default.getUser(e.author_id));
  if (null == r || null == d) return {};
  let o = e.extra.entries[0],
    u = null !== (t = null !== (l = r.state) && void 0 !== l ? l : null === (n = o.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : o.media.title,
    x = null !== (i = r.details) && void 0 !== i ? i : o.media.title;
  return {
    activity: r,
    artist: u,
    currentEntry: o,
    title: x,
    user: d
  }
}
let j = i.memo(function(e) {
  let {
    entry: n,
    channel: l,
    selected: i,
    hovered: a
  } = e, {
    activity: s,
    artist: c
  } = h(n), {
    largeImage: j
  } = (0, r.rv)({
    entry: n
  });
  return null == s ? (0, t.jsx)(u.cA, {}) : (0, t.jsxs)(u.Zb, {
    selected: i,
    children: [(0, t.jsxs)(u.e$, {
      children: [(0, t.jsx)(u.F9, {
        entry: n,
        channelId: l.id,
        guildId: l.guild_id
      }), (0, t.jsx)(u.ll, {
        children: c
      }), (0, t.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: m.map((e, l) => (0, t.jsx)(e, {
          entry: n,
          hovered: a
        }, l))
      })]
    }), (0, t.jsx)(d.f, {
      src: null == j ? void 0 : j.src,
      size: 48,
      className: x.thumbnail
    })]
  })
})