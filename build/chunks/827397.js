/** Chunk was on 59256 **/
n.d(t, {
  Z: () => c
});
var r = n(73800),
  o = n(494497),
  l = n(481060),
  a = n(434404),
  s = n(535396),
  i = n(981631);

function c(e, t) {
  let n = r.useCallback(n => {
    if (n.stopPropagation(), t.type !== s.Us.LEVEL) switch ((0, l.Mr3)(s.H2), t.skuId) {
      case s.IN:
        a.Z.open(e, i.pNK.TAG, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case s.If:
        a.Z.open(e, i.pNK.ROLES, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.A$:
        a.Z.open(e, i.pNK.BOOST_PERKS, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD, i.KsC.BOOST_PERKS_VANITY_URL);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === s.Us.PERK ? n : void 0
}