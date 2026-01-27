/** Chunk was on web.js **/
/** chunk id: 361670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G7: () => d,
  Ux: () => c,
  W$: () => u
});
var Chunk696451 = require("./696451.js"),
  Chunk488926 = require("./488926.js"),
  Chunk927578 = require("./927578.js"),
  Chunk514983 = require("./514983.js"),
  Chunk378058 = require("./378058.js"),
  Chunk652215 = require("./652215.js"),
  c = function(e) {
    return e[e.SENDABLE = 0] = "SENDABLE", e[e.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", e[e.NONSENDABLE = 2] = "NONSENDABLE", e[e.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD", e
  }({});
let u = (e, t, n) => {
    if (null == t) return 2;
    let c = a.Ay.canUseCustomStickersEverywhere(t);
    return (0, s.FD)(e) ? 2 * (null == o.A.getStickerPack(e.pack_id)) : (0, s.Xw)(e) && null != n ? null == r.Ay.getSelfMember(e.guild_id) ? 2 : e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.$3({
      permission: l.xBc.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? +!c : 2 : 3 : 2
  },
  d = (e, t, n) => 0 === u(e, t, n)