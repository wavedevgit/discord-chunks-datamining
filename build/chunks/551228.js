/** Chunk was on 41150 **/
n.d(l, {
  ZP: () => v,
  pi: () => x,
  te: () => m
}), n(388685);
var t = n(200651),
  i = n(192379),
  r = n(442837),
  a = n(594174),
  s = n(379357),
  d = n(719247),
  c = n(442550),
  o = n(297781),
  u = n(443487),
  h = n(522314);
let m = [o.XF];

function x(e) {
  var l, n, t, i;
  let s = (0, r.e7)([d.Z], () => d.Z.getMatchingActivity(e)),
    c = (0, r.e7)([a.default], () => a.default.getUser(e.author_id));
  if (null == s || null == c) return {};
  let o = e.extra.entries[0],
    u = null != (t = null != (n = s.state) ? n : null == (l = o.media.artists[0]) ? void 0 : l.name) ? t : o.media.title,
    h = null != (i = s.details) ? i : o.media.title;
  return {
    activity: s,
    artist: u,
    currentEntry: o,
    title: h,
    user: c
  }
}
let v = i.memo(function(e) {
  let {
    entry: l,
    channel: n,
    selected: i,
    hovered: r
  } = e, {
    activity: a,
    artist: d
  } = x(l), {
    largeImage: v
  } = (0, s.rv)({
    entry: l
  });
  return null == a ? (0, t.jsx)(u.cA, {}) : (0, t.jsxs)(u.Zb, {
    selected: i,
    children: [(0, t.jsxs)(u.e$, {
      children: [(0, t.jsx)(u.F9, {
        entry: l,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, t.jsx)(u.ll, {
        children: d
      }), (0, t.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: m.map((e, n) => (0, t.jsx)(e, {
          entry: l,
          hovered: r
        }, n))
      })]
    }), (0, t.jsx)(c.f, {
      src: null == v ? void 0 : v.src,
      size: 48,
      className: h.thumbnail
    })]
  })
})