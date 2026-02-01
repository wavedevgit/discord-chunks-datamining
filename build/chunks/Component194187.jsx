/** Chunk was on web.js **/
/** chunk id: 194187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk10862 = require("./10862.jsx"),
  Chunk200041 = require("./200041.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123511 = require("./123511.js");

function f(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: i,
    iconClassName: f,
    hideText: p = false,
    hideTooltip: _ = false,
    canTruncate: h = true,
    showChannelName: m = false
  } = e, g = (0, o.S31)(o.clD.ONLINE), E = (0, s.Ay)(t), y = t.isDM() || t.isGroupDM(), b = y ? u.intl.string(u.t["9FaEzi"]) : t.isGuildStageVoice() ? u.intl.string(u.t.QygGCN) : u.intl.string(u.t.msxteM), O = null != E ? "".concat(b, " (").concat(E, ")") : b, v = m ? O : b;
  return (0, r.jsx)(c.A, {
    icon: (0, r.jsx)(l.A, {
      size: "custom",
      color: g,
      channel: t,
      className: a()(d.Kk, f)
    }),
    text: v,
    tooltipText: _ ? true : O,
    textVariant: n,
    textClassName: i,
    hideTooltip: _,
    canTruncate: h,
    "aria-label": O,
    hideText: p
  })
}