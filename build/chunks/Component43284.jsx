/** Chunk was on web.js **/
/** chunk id: 43284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk51183 = require("./51183.jsx"),
  Chunk140547 = require("./140547.js"),
  Chunk886019 = require("./886019.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk890330 = require("./890330.js"),
  Chunk613125 = require("./613125.js");
require("./851883.js");
var Chunk123511 = require("./123511.js");
let h = 14;

function m(e) {
  var t;
  let {
    customStatusActivity: n,
    iconClassName: i,
    textClassName: m,
    voiceChannel: g,
    hangStatus: E,
    userId: y,
    textSize: b = "xs",
    animateEmoji: O = true,
    hideEmoji: v = false,
    hideTooltip: A = false
  } = e, I = (0, f.v)("ActivityStatus", g), {
    defaultStatusVariant: S
  } = (0, c.$j)({
    guildId: null == g ? true : g.guild_id,
    location: "CustomStatusVoiceDare"
  }), T = null != E && I, C = T && null != y ? (0, u.Au)(y, E, S) : null, N = null == n ? true : n.emoji, w = (0, p.Z)({
    customStatusActivity: n,
    statusOwnerId: y,
    location: "CustomStatusVoiceDare"
  }), R = null != (t = null != C ? C : w.statusTextOverride) ? t : null == n ? true : n.state, P = null != R && "" !== R, D = null;
  T && null != y ? D = (0, r.jsx)(d.A, {
    userId: y,
    size: h,
    className: a()(i, _.W9),
    hangStatusActivity: E
  }) : null == N || v || (D = (0, r.jsx)(l.A, {
    emoji: N,
    animate: O,
    className: i,
    hideTooltip: A || P
  }));
  let L = P ? null != D ? " ".concat(R) : R : null,
    x = () => {
      let e = null != N && !v && !P;
      return A || e ? (0, r.jsxs)(r.Fragment, {
        children: [D, L]
      }) : null != w.presence ? (0, r.jsx)(o.m, {
        delay: 150,
        children: (0, r.jsxs)("span", {
          children: [D, L]
        })
      }) : (0, r.jsxs)("span", {
        children: [D, L]
      })
    };
  return null == n && null == E ? null : (0, r.jsx)(s.Text, {
    variant: "text-".concat(b, "/medium"),
    color: "none",
    className: a()(_.ps, m),
    children: x()
  })
}