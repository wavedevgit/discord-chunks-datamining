/** Chunk was on web.js **/
/** chunk id: 478758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk712655 = require("./712655.js");
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
  f = (0, Chunk730749.Z)(d),
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
      m = d - p;
    for (let e = 0; e < m && _.length < a; e++) _.push((0, r.jsx)(f, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let h = Math.max(Math.min(d - _.length, u), 0);
    if (1 === h) {
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
        children: [_, h > 1 ? (0, r.jsxs)("div", {
          className: c.partyMemberOverflow,
          children: ["+", h]
        }) : null]
      })
    })
  }