/** Chunk was on 20447 **/
n.d(t, {
  w: () => o
});
var r = n(442837),
  i = n(271383),
  s = n(430824),
  a = n(353093);

function o() {
  return (0, r.Wu)([s.Z, i.ZP], () => Object.values(s.Z.getGuilds()).filter(e => {
    var t;
    return (0, a.up)(e) && (null === (t = i.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null
  }))
}