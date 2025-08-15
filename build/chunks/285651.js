/** Chunk was on web.js **/
/** chunk id: 285651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cO: () => l,
  eb: () => s,
  kl: () => c
});
var Chunk700785 = require("./700785.js"),
  Chunk74538 = require("./74538.js"),
  Chunk378233 = require("./378233.js"),
  Chunk981631 = require("./981631.js"),
  s = function(e) {
    return e[e.SENDABLE = 0] = "SENDABLE", e[e.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", e[e.NONSENDABLE = 2] = "NONSENDABLE", e[e.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD", e
  }({});
let l = (e, t, n) => {
    if (null == t) return 2;
    let s = i.ZP.canUseCustomStickersEverywhere(t);
    return (0, a.jl)(e) ? 0 : (0, a.J8)(e) && null != n ? e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.BT({
      permission: o.Plq.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? +!s : 2 : 3 : 2
  },
  c = (e, t, n) => 0 === l(e, t, n)