/** Chunk was on web.js **/
/** chunk id: 543651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467826 = require("./467826.js");
let g = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: o,
    guildId: g,
    className: E
  } = e, b = (0, u.q)(i), y = (0, l.Wu)([_.default], () => {
    var e;
    return null != (e = n.map(e => _.default.getUser(e)).filter(p.lm)) ? e : []
  }), O = null == b ? true : b.name, v = s()(t).fromNow();
  return null == t ? null : (0, r.jsxs)("div", {
    className: a()(E, m.container),
    children: [(0, r.jsx)(f.Z, {
      game: b
    }), (0, r.jsxs)("div", {
      className: m.textSection,
      children: [null != o && "" !== o ? (0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: o
      }) : (0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-muted",
        children: h.intl.string(h.t.Cyxddp)
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: [null != O ? "".concat(O, " • ") : null, v]
      })]
    }), null != y && y.length > 0 && (0, r.jsx)(d.Z, {
      maxUsers: 4,
      users: y,
      guildId: g,
      "aria-label": h.intl.string(h.t.WTozwe)
    })]
  })
}