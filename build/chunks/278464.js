/** Chunk was on 53494 **/
n.d(t, {
  n: () => l
});
var r = n(512969),
  i = n(905423),
  o = n(981631);

function l() {
  let e = (0, i.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, r.TH)(),
    n = t.startsWith(o.Z5c.GUILD_DISCOVERY) || t.startsWith(o.Z5c.GLOBAL_DISCOVERY),
    l = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION("")),
    a = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  return null == e && !(n || l || a)
}