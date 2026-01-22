/** Chunk was on web.js **/
/** chunk id: 665066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  g: () => u
});
var Chunk612200 = require("./612200.js"),
  Chunk323073 = require("./323073.js"),
  Chunk398884 = require("./398884.js"),
  Chunk772366 = require("./772366.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  c = function(e) {
    return e.PROCEED = "PROCEED", e.AGE_GATE_SHOWN = "AGE_GATE_SHOWN", e.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN", e
  }({});

function u(e) {
  let {
    guild: t,
    isMember: n,
    analyticsLocations: c
  } = e;
  return null != t && !n && (0, i.xq)() && (0, i.zS)(t) ? ((0, r.yO)(l.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN") : (0, a.Sn)() ? ((0, s.A)({
    analyticsSource: {
      page: o.liQ.INVITE_EMBED
    },
    analyticsLocation: {
      page: o.liQ.INVITE_EMBED,
      section: o.JJy.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: c
  }), "GUILD_CAP_SHOWN") : "PROCEED"
}