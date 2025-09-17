/** Chunk was on web.js **/
/** chunk id: 233023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk741570 = require("./741570.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk666998 = require("./666998.js");
let _ = 14;

function p(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: p,
    voiceChannel: h,
    hangStatus: m,
    textSize: g = "xs",
    animateEmoji: E = true,
    hideEmoji: b = false,
    hideTooltip: y = false
  } = e, O = (0, c.E)("ActivityStatus", h);
  if (null == t && null == m) return null;
  let v = null == t ? true : t.emoji,
    I = null == t ? true : t.state,
    T = null != I && "" !== I,
    S = null;
  null != m && O ? S = (0, r.jsx)(l.Z, {
    size: _,
    className: a()(i, f.hangStatusIcon),
    hangStatusActivity: m
  }) : null == v || b || (S = (0, r.jsx)(u.Z, {
    emoji: v,
    animate: E,
    className: i,
    hideTooltip: y || T
  }));
  let A = T && (null != S ? " ".concat(I) : I),
    C = () => {
      let e = null != v && !b && !T;
      return y || e ? (0, r.jsxs)(r.Fragment, {
        children: [S, A]
      }) : (0, r.jsxs)(s.Z, {
        delay: d.X,
        tooltipClassName: p,
        children: [S, A]
      })
    };
  return (0, r.jsx)(o.Text, {
    variant: "text-".concat(g, "/medium"),
    color: "none",
    className: a()(f.truncated, n),
    children: C()
  })
}