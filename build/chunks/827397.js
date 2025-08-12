/** Chunk was on 59256 **/
/** chunk id: 827397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = r.useCallback(n => {
    if (n.stopPropagation(), t.type !== s.Us.LEVEL) switch ((0, l.Mr3)(s.H2), t.skuId) {
      case o.IN:
        a.Z.open(e, i.pNK.TAG, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.If:
        a.Z.open(e, i.pNK.ROLES, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.A$:
        a.Z.open(e, i.pNK.BOOST_PERKS, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD, i.KsC.BOOST_PERKS_VANITY_URL);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === s.Us.PERK ? n : true
}