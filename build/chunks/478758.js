/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
}), n(653041);
var r = n(200651);
n(192379);
var i = n(392711),
  o = n.n(i),
  a = n(481060),
  s = n(730749),
  l = n(823379),
  c = n(52801);
let u = 99,
  d = e => {
    let {
      member: t,
      empty: n,
      guildId: i
    } = e;
    return n || null == t ? (0, r.jsx)("div", {
      className: c.partyMember
    }) : (0, r.jsx)("div", {
      className: c.partyMember,
      children: (0, r.jsx)(a.qEK, {
        src: t.getAvatarURL(i, 16),
        "aria-label": t.username,
        size: a.EFr.SIZE_16,
        className: c.partyMember
      })
    })
  },
  f = (0, s.Z)(d),
  p = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: a = 2,
      guildId: s
    } = e, {
      totalSize: d,
      knownSize: p
    } = t;
    if (d < i) return null;
    let _ = o()(n).filter(l.lm).take(a).map(e => (0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id)).value(),
      h = d - p;
    for (let e = 0; e < h && _.length < a; e++) _.push((0, r.jsx)(f, {
      empty: !0,
      guildId: s
    }, "empty-member-".concat(e)));
    let m = Math.max(Math.min(d - _.length, u), 0);
    if (1 === m) {
      let e = n[a];
      _.push((0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: c.wrapper,
      children: (0, r.jsxs)("div", {
        className: c.partyMembers,
        children: [_, m > 1 ? (0, r.jsxs)("div", {
          className: c.partyMemberOverflow,
          children: ["+", m]
        }) : null]
      })
    })
  }