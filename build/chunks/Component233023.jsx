/** Chunk was on web.js **/
/** chunk id: 233023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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
  Chunk80568 = require("./80568.js");

function _(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: _,
    voiceChannel: p,
    hangStatus: h,
    textSize: m = "xs",
    animateEmoji: g = true,
    hideEmoji: E = false,
    hideTooltip: b = false
  } = e, y = (0, c.E)("ActivityStatus", p);
  if (null == t && null == h) return null;
  let O = null == t ? true : t.emoji,
    v = null == t ? true : t.state,
    I = null != v && "" !== v,
    T = null;
  null != h && y ? T = (0, r.jsx)(l.Z, {
    className: a()(i, f.hangStatusIcon),
    hangStatusActivity: h
  }) : null == O || E || (T = (0, r.jsx)(u.Z, {
    emoji: O,
    animate: g,
    className: i,
    hideTooltip: b || I
  }));
  let S = I && (null != T ? " ".concat(v) : v),
    A = () => {
      let e = null != O && !E && !I;
      return b || e ? (0, r.jsxs)(r.Fragment, {
        children: [T, S]
      }) : (0, r.jsxs)(s.Z, {
        delay: d.X,
        tooltipClassName: _,
        children: [T, S]
      })
    };
  return (0, r.jsx)(o.Text, {
    variant: "text-".concat(m, "/medium"),
    color: "none",
    className: a()(f.truncated, n),
    children: A()
  })
}