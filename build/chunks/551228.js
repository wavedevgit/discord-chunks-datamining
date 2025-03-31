/** Chunk was on 72663 **/
n.d(t, {
  ZP: () => f,
  pi: () => h,
  te: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(594174),
  s = n(379357),
  a = n(719247),
  c = n(442550),
  d = n(297781),
  u = n(443487),
  _ = n(220359);
let p = [d.XF];

function h(e) {
  var t, n, r, i;
  let s = (0, o.e7)([a.Z], () => a.Z.getMatchingActivity(e)),
    c = (0, o.e7)([l.default], () => l.default.getUser(e.author_id));
  if (null == s || null == c) return {};
  let d = e.extra.entries[0],
    u = null !== (r = null !== (n = s.state) && void 0 !== n ? n : null === (t = d.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : d.media.title,
    _ = null !== (i = s.details) && void 0 !== i ? i : d.media.title;
  return {
    activity: s,
    artist: u,
    currentEntry: d,
    title: _,
    user: c
  }
}
let f = i.memo(function(e) {
  let {
    entry: t,
    channel: n,
    selected: i,
    hovered: o
  } = e, {
    activity: l,
    artist: a
  } = h(t), {
    largeImage: f
  } = (0, s.rv)({
    entry: t
  });
  return null == l ? (0, r.jsx)(u.cA, {}) : (0, r.jsxs)(u.Zb, {
    selected: i,
    children: [(0, r.jsxs)(u.e$, {
      children: [(0, r.jsx)(u.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(u.ll, {
        children: a
      }), (0, r.jsx)(d.Gk, {
        location: d.Gt.CARD,
        children: p.map((e, n) => (0, r.jsx)(e, {
          entry: t,
          hovered: o
        }, n))
      })]
    }), (0, r.jsx)(c.f, {
      src: null == f ? void 0 : f.src,
      size: 48,
      className: _.thumbnail
    })]
  })
})