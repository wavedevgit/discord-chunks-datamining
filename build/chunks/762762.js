/** Chunk was on 99014 **/
n.d(t, {
  Z: () => c
});
var r = n(73800),
  o = n(442837),
  i = n(388032),
  l = n(905128),
  a = n(717259),
  s = n(93841);

function c(e, t, n) {
  let c = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e)),
    u = (0, a.Z)(e, t);
  return r.useMemo(() => {
    var e, r;
    if (null == c || u) return {
      disabled: !0,
      reason: void 0
    };
    let {
      allPowerups: o,
      unlockedPowerups: l
    } = c, a = n ? null == (e = Object.values(l).find(e => {
      var n;
      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId
    })) ? void 0 : e.sku_id : t.dependencies.find(e => null == l[e]);
    return {
      disabled: null != a,
      reason: null != a && null != o[a] ? i.intl.formatToPlainString(n ? s.default.vCEBiY : s.default["1B8AZm"], {
        perk: null == (r = o[a]) ? void 0 : r.title
      }) : void 0
    }
  }, [c, t.skuId, t.dependencies, n, u])
}