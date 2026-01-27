/** Chunk was on 92917 **/
/** chunk id: 665066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => u,
  g: () => d
});
var r, Chunk612200 = require("./612200.js"),
  Chunk323073 = require("./323073.js"),
  Chunk398884 = require("./398884.js"),
  Chunk772366 = require("./772366.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  u = ((r = {}).PROCEED = "PROCEED", r.AGE_GATE_SHOWN = "AGE_GATE_SHOWN", r.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN", r);

function d(e) {
  let {
    guild: t,
    isMember: n,
    analyticsLocations: r
  } = e;
  return null != t && !n && (0, l.xq)() && (0, l.zS)(t) ? ((0, i.yO)(c.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN") : (0, a.Sn)() ? ((0, s.A)({
    analyticsSource: {
      page: o.liQ.INVITE_EMBED
    },
    analyticsLocation: {
      page: o.liQ.INVITE_EMBED,
      section: o.JJy.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: r
  }), "GUILD_CAP_SHOWN") : "PROCEED"
}