/** Chunk was on 97844 **/
/** chunk id: 827397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let r = n.useCallback(r => {
    if (r.stopPropagation(), t.type !== u.Us.LEVEL) switch ((0, i.Mr3)(u.H2), t.skuId) {
      case o.IN:
        l.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.If:
        l.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.A$:
        l.Z.open(e, s.pNK.BOOST_PERKS, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD, s.KsC.BOOST_PERKS_VANITY_URL);
        return;
      case o.Vk:
      case o.MB:
        (0, i.pTH)(), l.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === u.Us.PERK ? r : true
}