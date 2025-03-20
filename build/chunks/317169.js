/** Chunk was on 44799 **/
t.d(n, {
  Z: () => o
});
var i = t(442837),
  r = t(430824),
  s = t(905128);
let o = function(e) {
  var n;
  let t = null !== (n = (0, i.e7)([r.Z], () => {
      var n;
      return null === (n = r.Z.getGuild(e)) || void 0 === n ? void 0 : n.premiumSubscriberCount
    })) && void 0 !== n ? n : 0,
    o = (0, i.e7)([s.Z], () => {
      var n, t;
      return null !== (t = null === (n = s.Z.getStateForGuild(e)) || void 0 === n ? void 0 : n.appliedBoosts) && void 0 !== t ? t : 0
    });
  return {
    available: Math.max(0, t - o),
    spent: o,
    total: t
  }
}