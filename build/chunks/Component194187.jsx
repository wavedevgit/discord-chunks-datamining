/** Chunk was on web.js **/
/** chunk id: 194187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk126904 = require("./126904.js"),
  Chunk10862 = require("./10862.jsx"),
  Chunk200041 = require("./200041.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123511 = require("./123511.js");

function p(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: i,
    iconClassName: p,
    hideText: _ = false,
    hideTooltip: h = false,
    canTruncate: m = true,
    showChannelName: g = false
  } = e, E = (0, o.S31)(o.clD.ONLINE), y = (0, s.Ay)(t), b = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: O
  } = (0, l.tR)({
    location: "VoiceActivityStatusWithCombinedTooltip"
  }), v = O && null != y ? y : b ? d.intl.string(d.t["9FaEzi"]) : t.isGuildStageVoice() ? d.intl.string(d.t.QygGCN) : d.intl.string(d.t.msxteM), A = null == y || O ? v : "".concat(v, " (").concat(y, ")"), I = g ? A : v;
  return (0, r.jsx)(u.A, {
    icon: (0, r.jsx)(c.A, {
      size: "custom",
      color: E,
      channel: t,
      className: a()(f.Kk, p)
    }),
    text: I,
    tooltipText: h ? true : A,
    textVariant: n,
    textClassName: i,
    hideTooltip: h,
    canTruncate: m,
    "aria-label": A,
    hideText: _
  })
}