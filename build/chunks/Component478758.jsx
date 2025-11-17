/** Chunk was on web.js **/
/** chunk id: 478758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
      children: (0, r.jsx)(o.qEK, {
        src: t.getAvatarURL(i, 16),
        "aria-label": t.username,
        size: o.EFr.SIZE_16,
        className: c.partyMember
      })
    })
  },
  f = (0, Chunk730749.Z)(d),
  _ = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: o = 2,
      guildId: s
    } = e, {
      totalSize: d,
      knownSize: _
    } = t;
    if (d < i) return null;
    let p = a()(n).filter(l.lm).take(o).map(e => (0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id)).value(),
      h = d - _;
    for (let e = 0; e < h && p.length < o; e++) p.push((0, r.jsx)(f, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let m = Math.max(Math.min(d - p.length, u), 0);
    if (1 === m) {
      let e = n[o];
      p.push((0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: c.wrapper,
      children: (0, r.jsxs)("div", {
        className: c.partyMembers,
        children: [p, m > 1 ? (0, r.jsxs)("div", {
          className: c.partyMemberOverflow,
          children: ["+", m]
        }) : null]
      })
    })
  }