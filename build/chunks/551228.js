/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  ZP: () => m,
  pi: () => _,
  te: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(594174),
  s = n(379357),
  l = n(719247),
  c = n(442550),
  u = n(297781),
  d = n(443487),
  f = n(62545);
let p = [u.XF];

function _(e) {
  var t, n, r, i;
  let s = (0, o.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
    c = (0, o.e7)([a.default], () => a.default.getUser(e.author_id));
  if (null == s || null == c) return {};
  let u = e.extra.entries[0],
    d = null !== (r = null !== (n = s.state) && void 0 !== n ? n : null === (t = u.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : u.media.title,
    f = null !== (i = s.details) && void 0 !== i ? i : u.media.title;
  return {
    activity: s,
    artist: d,
    currentEntry: u,
    title: f,
    user: c
  }
}

function h(e) {
  let {
    entry: t,
    channel: n,
    selected: i,
    hovered: o
  } = e, {
    activity: a,
    artist: l
  } = _(t), {
    largeImage: h
  } = (0, s.rv)({
    entry: t
  });
  return null == a ? (0, r.jsx)(d.cA, {}) : (0, r.jsxs)(d.Zb, {
    selected: i,
    children: [(0, r.jsxs)(d.e$, {
      children: [(0, r.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(d.ll, {
        children: l
      }), (0, r.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: p.map((e, n) => (0, r.jsx)(e, {
          entry: t,
          hovered: o
        }, n))
      })]
    }), (0, r.jsx)(c.f, {
      src: null == h ? void 0 : h.src,
      size: 48,
      className: f.thumbnail
    })]
  })
}
let m = i.memo(h)