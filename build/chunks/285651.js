/** Chunk was on web.js **/
/** chunk id: 285651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cO: () => u,
  eb: () => c,
  kl: () => d
});
var Chunk271383 = require("./271383.js"),
  Chunk700785 = require("./700785.js"),
  Chunk74538 = require("./74538.js"),
  Chunk737406 = require("./737406.js"),
  Chunk378233 = require("./378233.js"),
  Chunk981631 = require("./981631.js"),
  c = function(e) {
    return e[e.SENDABLE = 0] = "SENDABLE", e[e.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", e[e.NONSENDABLE = 2] = "NONSENDABLE", e[e.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD", e
  }({});
let u = (e, t, n) => {
    if (null == t) return 2;
    let c = o.ZP.canUseCustomStickersEverywhere(t);
    return (0, s.jl)(e) ? 2 * (null == a.Z.getStickerPack(e.pack_id)) : (0, s.J8)(e) && null != n ? null == r.ZP.getSelfMember(e.guild_id) ? 2 : e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.BT({
      permission: l.Plq.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? +!c : 2 : 3 : 2
  },
  d = (e, t, n) => 0 === u(e, t, n)