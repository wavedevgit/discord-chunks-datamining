/** Chunk was on 55697 **/
n.d(t, {
  Z: () => a
});
var r = n(271383),
  i = n(5192),
  l = n(354459),
  o = n(388032);

function a(e, t, n) {
  var a, s;
  if (t.type === l.fO.ACTIVITY) return null !== (s = null == n ? void 0 : n.name) && void 0 !== s ? s : null;
  let c = r.ZP.isGuestOrLurker(e.guild_id, null === (a = t.user) || void 0 === a ? void 0 : a.id);
  return i.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(o.NW.string(o.t["pFO/Pj"])) : "")
}