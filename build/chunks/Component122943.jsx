/** Chunk was on web.js **/
/** chunk id: 122943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk482798 = require("./482798.js"),
  Chunk788858 = require("./788858.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk175996 = require("./175996.js");

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
  } = e, E = (0, o.vjg)(o.Skl.ONLINE), b = (0, s.ZP)(t), y = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: O
  } = (0, l.Cq)({
    location: "VoiceActivityStatusWithCombinedTooltip"
  }), v = O && null != b ? b : y ? d.intl.string(d.t["9FaEzi"]) : t.isGuildStageVoice() ? d.intl.string(d.t.QygGCN) : d.intl.string(d.t.msxteM), S = null == b || O ? v : "".concat(v, " (").concat(b, ")"), I = g ? S : v;
  return (0, r.jsx)(u.Z, {
    icon: (0, r.jsx)(c.Z, {
      size: "custom",
      color: E,
      channel: t,
      className: a()(f.icon, p)
    }),
    text: I,
    tooltipText: h ? true : S,
    textVariant: n,
    textClassName: i,
    hideTooltip: h,
    canTruncate: m,
    "aria-label": S,
    hideText: _
  })
}