/** Chunk was on 99916 (fbcc0e5b410fa29c.js) **/
r.d(t, {
  i: () => s
});
var n = r(442837),
  i = r(430824),
  o = r(944163),
  l = r(981631);

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, n.e7)([o.Z, i.Z], () => {
    var e;
    let r = o.Z.get(t),
      n = null == r ? void 0 : r.guild,
      s = i.Z.getGuild(t),
      c = null == s ? void 0 : s.verificationLevel,
      u = null == n ? void 0 : n.verification_level;
    return null !== (e = null != c ? c : u) && void 0 !== e ? e : l.sFg.NONE
  }, [t])
}