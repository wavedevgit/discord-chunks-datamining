/** Chunk was on web.js **/
/** chunk id: 697037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => c,
  o: () => u
});
var Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  c = function(e) {
    return e.PROCEED = "PROCEED", e.AGE_GATE_SHOWN = "AGE_GATE_SHOWN", e.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN", e
  }({});

function u(e) {
  let {
    guild: t,
    isMember: n,
    analyticsLocations: c
  } = e;
  return null != t && !n && (0, i.bN)() && (0, i.Yt)(t) ? ((0, r.mN)(l.L0.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN") : (0, o.yU)() ? ((0, a.Z)({
    analyticsSource: {
      page: s.ZY5.INVITE_EMBED
    },
    analyticsLocation: {
      page: s.ZY5.INVITE_EMBED,
      section: s.jXE.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: c
  }), "GUILD_CAP_SHOWN") : "PROCEED"
}