/** Chunk was on web.js **/
/** chunk id: 233023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk359588 = require("./359588.js"),
  Chunk74340 = require("./74340.js"),
  Chunk19391 = require("./19391.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk741570 = require("./741570.js"),
  Chunk584973 = require("./584973.js"),
  Chunk556638 = require("./556638.js"),
  Chunk843280 = require("./843280.js");

function m(e) {
  let {
    customStatusActivity: t,
    textClassName: n,
    iconClassName: i,
    tooltipClassName: m,
    voiceChannel: g,
    hangStatus: E,
    textSize: b = "xs",
    animateEmoji: y = true,
    hideEmoji: O = false,
    hideTooltip: v = false
  } = e, I = (0, l.Z)({
    location: "CustomStatusActivityStatus"
  }), T = (0, f.E)("ActivityStatus", g);
  if (null == t && null == E) return null;
  let S = null == t ? true : t.emoji,
    A = null == t ? true : t.state,
    N = I ? (0, c.Z)(t) : null,
    C = null != N ? "".concat((0, u.Z)(N), ": ") : null,
    R = null != A && "" !== A,
    P = R || null != N,
    w = null;
  null != E && T ? w = <d.Z className={o()(i, h.hangStatusIcon)} hangStatusActivity={E} /> : null == S || O || (w = <_.Z emoji={S} animate={y} className={i} hideTooltip={v || P} />);
  let D = R && (null != w ? " ".concat(A) : A),
    L = () => {
      let e = null != S && !O && !R && null == N;
      return v || e ? <r.Fragment>{C}{w}{D}</r.Fragment> : <s.Z delay={p.X} tooltipClassName={m}>{C}{w}{D}</s.Z>
    };
  return <a.Text variant={"text-".concat(b, "/medium")} color={"none"} className={o()(h.truncated, n)}>{L()}</a.Text>
}