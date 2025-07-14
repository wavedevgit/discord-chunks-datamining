/** Chunk was on 99014 **/
n.d(t, {
  Z: () => c
});
var r = n(73800),
  o = n(494497),
  i = n(481060),
  l = n(434404),
  a = n(535396),
  s = n(981631);

function c(e, t) {
  let n = r.useCallback(n => {
    if (n.stopPropagation(), t.type !== a.Us.LEVEL) switch ((0, i.Mr3)(a.H2), t.skuId) {
      case a.IN:
        l.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case a.If:
        l.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      case o.A:
        l.Z.open(e, s.pNK.BOOST_PERKS, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
        return;
      default:
        return
    }
  }, [e, t]);
  return t.type === a.Us.PERK ? n : void 0
}