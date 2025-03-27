/** Chunk was on 87791 **/
n.d(t, {
  ZP: () => m,
  pi: () => h,
  te: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(594174),
  a = n(379357),
  s = n(719247),
  c = n(442550),
  u = n(297781),
  d = n(443487),
  p = n(563504);
let f = [u.XF];

function h(e) {
  var t, n, r, i;
  let a = (0, o.e7)([s.Z], () => s.Z.getMatchingActivity(e)),
    c = (0, o.e7)([l.default], () => l.default.getUser(e.author_id));
  if (null == a || null == c) return {};
  let u = e.extra.entries[0],
    d = null !== (r = null !== (n = a.state) && void 0 !== n ? n : null === (t = u.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : u.media.title,
    p = null !== (i = a.details) && void 0 !== i ? i : u.media.title;
  return {
    activity: a,
    artist: d,
    currentEntry: u,
    title: p,
    user: c
  }
}
let m = i.memo(function(e) {
  let {
    entry: t,
    channel: n,
    selected: i,
    hovered: o
  } = e, {
    activity: l,
    artist: s
  } = h(t), {
    largeImage: m
  } = (0, a.rv)({
    entry: t
  });
  return null == l ? (0, r.jsx)(d.cA, {}) : (0, r.jsxs)(d.Zb, {
    selected: i,
    children: [(0, r.jsxs)(d.e$, {
      children: [(0, r.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(d.ll, {
        children: s
      }), (0, r.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: f.map((e, n) => (0, r.jsx)(e, {
          entry: t,
          hovered: o
        }, n))
      })]
    }), (0, r.jsx)(c.f, {
      src: null == m ? void 0 : m.src,
      size: 48,
      className: p.thumbnail
    })]
  })
})