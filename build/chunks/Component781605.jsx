/** Chunk was on web.js **/
/** chunk id: 781605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk88445 = require("./88445.js");
let u = 99,
  d = e => {
    let {
      member: t,
      empty: n,
      guildId: i
    } = e;
    return n || null == t ? (0, r.jsx)("div", {
      className: c.pO
    }) : (0, r.jsx)("div", {
      className: c.pO,
      children: (0, r.jsx)(o.euF, {
        src: t.getAvatarURL(i, 16),
        "aria-label": t.username,
        size: o._3J.SIZE_16,
        className: c.pO
      })
    })
  },
  f = (0, Chunk707606.A)(d),
  p = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: o = 2,
      guildId: s
    } = e, {
      totalSize: d,
      knownSize: p
    } = t;
    if (d < i) return null;
    let _ = a()(n).filter(l.Vq).take(o).map(e => (0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id)).value(),
      h = d - p;
    for (let e = 0; e < h && _.length < o; e++) _.push((0, r.jsx)(f, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let m = Math.max(Math.min(d - _.length, u), 0);
    if (1 === m) {
      let e = n[o];
      _.push((0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: c.iE,
      children: (0, r.jsxs)("div", {
        className: c.S3,
        children: [_, m > 1 ? (0, r.jsxs)("div", {
          className: c.Hi,
          children: ["+", m]
        }) : null]
      })
    })
  }