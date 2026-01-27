/** Chunk was on web.js **/
/** chunk id: 44724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => c,
  default: () => u
}), require("./896048.js");
var Chunk846293 = require("./846293.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk449054 = require("./449054.js"),
  Chunk733391 = require("./733391.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    guildId: t,
    invite: n,
    forceFetch: r
  } = e;
  if (null != n) {
    var i;
    t = null == (i = n.guild) ? true : i.id
  }
  null != t && (0, s.Rw)(t, {
    eager: true,
    forceFetch: r
  })
}
async function u(e) {
  let {
    guildId: t,
    invite: n,
    pageIndex: s,
    skuId: c,
    slug: u
  } = e, d = null;
  if (null != n) {
    var f, p;
    t = null == (f = n.guild) ? true : f.id, d = new Set(null == (p = n.guild) ? true : p.features)
  }
  if (null == t) return;
  let _ = a.A.getGuild(t);
  (null == _ ? true : _.joinedAt) == null && (null == d || d.has(l.GuildFeatures.PREVIEW_ENABLED) ? await (0, o.Z2)(t, {}, {
    shouldNavigate: false
  }) : null != n && await r.Ay.acceptInvite({
    inviteKey: n.code,
    context: {
      location: "game_shop"
    },
    skipOnboarding: true
  })), (0, i.pX)(l.BVt.CHANNELS_GAME_SHOP(t, s, c, u))
}