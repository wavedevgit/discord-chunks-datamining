/** Chunk was on 62880 **/
t.d(n, {
  ZP: () => j,
  pi: () => h,
  te: () => m
}), t(47120);
var l = t(200651),
  i = t(192379),
  a = t(442837),
  s = t(594174),
  r = t(379357),
  c = t(719247),
  d = t(442550),
  o = t(297781),
  u = t(443487),
  x = t(563504);
let m = [o.XF];

function h(e) {
  var n, t, l, i;
  let r = (0, a.e7)([c.Z], () => c.Z.getMatchingActivity(e)),
    d = (0, a.e7)([s.default], () => s.default.getUser(e.author_id));
  if (null == r || null == d) return {};
  let o = e.extra.entries[0],
    u = null !== (l = null !== (t = r.state) && void 0 !== t ? t : null === (n = o.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : o.media.title,
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
    channel: t,
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
  return null == s ? (0, l.jsx)(u.cA, {}) : (0, l.jsxs)(u.Zb, {
    selected: i,
    children: [(0, l.jsxs)(u.e$, {
      children: [(0, l.jsx)(u.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }), (0, l.jsx)(u.ll, {
        children: c
      }), (0, l.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: m.map((e, t) => (0, l.jsx)(e, {
          entry: n,
          hovered: a
        }, t))
      })]
    }), (0, l.jsx)(d.f, {
      src: null == j ? void 0 : j.src,
      size: 48,
      className: x.thumbnail
    })]
  })
})