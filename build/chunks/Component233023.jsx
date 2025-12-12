/** Chunk was on web.js **/
/** chunk id: 233023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk175996 = require("./175996.js");
let m = 14;

function h(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: h,
    voiceChannel: g,
    hangStatus: E,
    userId: b,
    textSize: y = "xs",
    animateEmoji: O = true,
    hideEmoji: v = false,
    hideTooltip: S = false
  } = e, I = (0, d.E)("ActivityStatus", g), {
    defaultStatusVariant: T
  } = (0, l.bN)({
    guildId: null == g ? true : g.guild_id,
    location: "CustomStatusActivityStatus"
  });
  if (null == t && null == E) return null;
  let C = null != E && I,
    A = C && null != b ? (0, c.O8)(b, E, T) : null,
    N = null == t ? true : t.emoji,
    P = null != A ? A : null == t ? true : t.state,
    R = null != P && "" !== P,
    w = null;
  C && null != b ? w = (0, r.jsx)(u.Z, {
    userId: b,
    size: m,
    className: a()(i, _.hangStatusIcon),
    hangStatusActivity: E
  }) : null == N || v || (w = (0, r.jsx)(f.Z, {
    emoji: N,
    animate: O,
    className: i,
    hideTooltip: S || R
  }));
  let D = R && (null != w ? " ".concat(P) : P),
    x = () => {
      let e = null != N && !v && !R;
      return S || e ? (0, r.jsxs)(r.Fragment, {
        children: [w, D]
      }) : (0, r.jsxs)(o.Z, {
        delay: p.X,
        tooltipClassName: h,
        children: [w, D]
      })
    };
  return (0, r.jsx)(s.Text, {
    variant: "text-".concat(y, "/medium"),
    color: "none",
    className: a()(_.truncated, n),
    children: x()
  })
}