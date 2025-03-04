/** Chunk was on 44799 **/
t.d(n, {
  Z: () => c
}), t(47120);
var r = t(192379),
  i = t(442837),
  o = t(388032),
  a = t(905128),
  s = t(730621);

function c(e, n, t) {
  let c = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
  return r.useMemo(() => {
    var e, r;
    if (null == c) return {
      disabled: !0,
      reason: void 0
    };
    let {
      powerups: i,
      unlocked: a
    } = c;
    if (0 === n.dependencies.length) return {
      disabled: !1,
      reason: void 0
    };
    let l = t ? null === (e = a.values().find(e => {
      var t;
      return (null === (t = e.sku) || void 0 === t ? void 0 : t.dependent_sku_id) === n.skuId
    })) || void 0 === e ? void 0 : e.sku_id : n.dependencies.find(e => !a.has(e));
    return {
      disabled: null != l,
      reason: null != l && null != i.get(l) ? o.NW.formatToPlainString(t ? s.Z.vCEBiY : s.Z["1B8AZm"], {
        perk: null === (r = i.get(l)) || void 0 === r ? void 0 : r.title
      }) : void 0
    }
  }, [c, n.skuId, n.dependencies, t])
}