/** Chunk was on web.js **/
/** chunk id: 705338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk447543 = require("./447543.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js");
async function l(e) {
  let {
    guildId: t,
    invite: n,
    pageIndex: l,
    skuId: c,
    slug: u
  } = e, d = null;
  if (null != n) {
    var f, _;
    t = null == (f = n.guild) ? true : f.id, d = new Set(null == (_ = n.guild) ? true : _.features)
  }
  if (null == t) return;
  let p = a.Z.getGuild(t);
  (null == p ? true : p.joinedAt) == null && (null == d || d.has(s.GuildFeatures.PREVIEW_ENABLED) ? await (0, o.Ub)(t, {}, {
    shouldNavigate: false
  }) : null != n && await r.ZP.acceptInvite({
    inviteKey: n.code,
    context: {
      location: "game_shop"
    },
    skipOnboarding: true
  })), (0, i.uL)(s.Z5c.CHANNELS_GAME_SHOP(t, l, c, u))
}