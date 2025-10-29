/** Chunk was on web.js **/
/** chunk id: 233023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk574176 = require("./574176.js"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk741570 = require("./741570.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk80568 = require("./80568.js");
let h = 14;

function m(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: m,
    voiceChannel: g,
    hangStatus: E,
    userId: b,
    textSize: y = "xs",
    animateEmoji: O = true,
    hideEmoji: v = false,
    hideTooltip: I = false
  } = e, T = (0, d.E)("ActivityStatus", g), {
    defaultStatusVariant: S
  } = (0, l.bN)({
    guildId: null == g ? true : g.guild_id,
    location: "CustomStatusActivityStatus"
  });
  if (null == t && null == E) return null;
  let A = null != E && T,
    C = A && null != b ? (0, c.O8)(b, E, S) : null,
    N = null == t ? true : t.emoji,
    R = null != C ? C : null == t ? true : t.state,
    P = null != R && "" !== R,
    D = null;
  A && null != b ? D = (0, r.jsx)(u.Z, {
    userId: b,
    size: h,
    className: a()(i, p.hangStatusIcon),
    hangStatusActivity: E
  }) : null == N || v || (D = (0, r.jsx)(f.Z, {
    emoji: N,
    animate: O,
    className: i,
    hideTooltip: I || P
  }));
  let w = P && (null != D ? " ".concat(R) : R),
    L = () => {
      let e = null != N && !v && !P;
      return I || e ? (0, r.jsxs)(r.Fragment, {
        children: [D, w]
      }) : (0, r.jsxs)(o.Z, {
        delay: _.X,
        tooltipClassName: m,
        children: [D, w]
      })
    };
  return (0, r.jsx)(s.Text, {
    variant: "text-".concat(y, "/medium"),
    color: "none",
    className: a()(p.truncated, n),
    children: L()
  })
}