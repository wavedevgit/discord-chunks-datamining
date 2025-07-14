/** Chunk was on 99014 **/
n.d(t, {
  Z: () => a
});
var r = n(442837),
  o = n(905128),
  i = n(690786),
  l = n(535396);

function a(e, t) {
  var n, a;
  let s = (0, r.e7)([o.Z], () => o.Z.getStateForGuild(e)),
    c = (0, i.Z)(e, t);
  if (null == s || null == t) return {
    activatedEntitlement: void 0,
    activatedLevelPowerup: void 0
  };
  let u = l.Rx[t.skuId],
    d = null != u ? l.Cp[u] : void 0,
    p = null != d ? null == (n = s.unlockedPowerups) ? void 0 : n[d] : void 0,
    f = null != p ? null == (a = s.allPowerups) ? void 0 : a[p.sku_id] : void 0;
  return {
    activatedEntitlement: null != p ? p : c,
    activatedLevelPowerup: null != p ? f : void 0
  }
}