/** Chunk was on web.js **/
/** chunk id: 684448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk140547 = require("./140547.js"),
  Chunk886019 = require("./886019.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk890330 = require("./890330.js"),
  Chunk51183 = require("./51183.jsx");
require("./851883.js");
var Chunk123511 = require("./123511.js");
let _ = 14;

function h(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: h,
    voiceChannel: m,
    hangStatus: g,
    userId: E,
    textSize: y = "xs",
    animateEmoji: b = true,
    hideEmoji: O = false,
    hideTooltip: v = false
  } = e, A = (0, d.v)("ActivityStatus", m), {
    defaultStatusVariant: I
  } = (0, l.$j)({
    guildId: null == m ? true : m.guild_id,
    location: "CustomStatusActivityStatus"
  });
  if (null == t && null == g) return null;
  let S = null != g && A,
    T = S && null != E ? (0, c.Au)(E, g, I) : null,
    C = null == t ? true : t.emoji,
    N = null != T ? T : null == t ? true : t.state,
    w = null != N && "" !== N,
    R = null;
  S && null != E ? R = (0, r.jsx)(u.A, {
    userId: E,
    size: _,
    className: a()(i, p.W9),
    hangStatusActivity: g
  }) : null == C || O || (R = (0, r.jsx)(f.A, {
    emoji: C,
    animate: b,
    className: i,
    hideTooltip: v || w
  }));
  let P = w && (null != R ? " ".concat(N) : N),
    D = () => {
      let e = null != C && !O && !w;
      return v || e ? (0, r.jsxs)(r.Fragment, {
        children: [R, P]
      }) : (0, r.jsxs)(o.A, {
        delay: 150,
        tooltipClassName: h,
        children: [R, P]
      })
    };
  return (0, r.jsx)(s.Text, {
    variant: "text-".concat(y, "/medium"),
    color: "none",
    className: a()(p.ps, n),
    children: D()
  })
}