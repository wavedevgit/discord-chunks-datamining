/** Chunk was on 41727 **/
/** chunk id: 689906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  let n = r.useCallback(n => {
    if (n.stopPropagation(), t.type !== a.o9.LEVEL) switch ((0, i.OoC)(a.Fq), t.skuId) {
      case l.SL:
        s.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case l.aN:
        s.A.open(e, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case l.FB:
        s.A.open(e, o.BEX.BOOST_PERKS, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD, o.nd0.BOOST_PERKS_VANITY_URL);
        return;
      case l.jF:
      case l.OJ:
        (0, i.s7G)(), s.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === a.o9.PERK ? n : true
}