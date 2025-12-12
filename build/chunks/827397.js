/** Chunk was on 64722 **/
/** chunk id: 827397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = r.useCallback(n => {
    if (n.stopPropagation(), t.type !== a.Us.LEVEL) switch ((0, l.Mr3)(a.H2), t.skuId) {
      case i.IN:
        o.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case i.If:
        o.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case i.A$:
        o.Z.open(e, s.pNK.BOOST_PERKS, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD, s.KsC.BOOST_PERKS_VANITY_URL);
        return;
      case i.Vk:
      case i.MB:
        (0, l.pTH)(), o.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === a.Us.PERK ? n : true
}