/** Chunk was on 76607 **/
r.d(t, {
  I: () => o,
  Z: () => a
});
var n = r(442837),
  h = r(430824),
  v = r(50101),
  i = r(317169),
  l = r(981631);

function o(e) {
  var t, r;
  let n = (0, v.gV)(e, "useGuildPowerupsBoostCount"),
    o = (0, i.I)(e),
    a = null !== (r = null === (t = h.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumTier) && void 0 !== r ? r : l.Eu4.NONE;
  return n ? l.oCV[a] + o.available : o.total
}

function a(e) {
  let t = (0, v.Ek)(e, "useGuildPowerupsBoostCount"),
    r = (0, i.Z)(e),
    o = (0, n.e7)([h.Z], () => {
      var t, r;
      return null !== (r = null === (t = h.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumTier) && void 0 !== r ? r : l.Eu4.NONE
    });
  return t ? l.oCV[o] + r.available : r.total
}