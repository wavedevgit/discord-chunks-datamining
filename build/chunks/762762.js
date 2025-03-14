/** Chunk was on 44799 **/
t.d(n, {
  Z: () => l
}), t(47120);
var r = t(192379),
  i = t(442837),
  o = t(388032),
  s = t(905128),
  a = t(730621);

function l(e, n, t) {
  let l = (0, i.e7)([s.Z], () => s.Z.getStateForGuild(e));
  return r.useMemo(() => {
    var e, r;
    if (null == l) return {
      disabled: !0,
      reason: void 0
    };
    let {
      powerups: i,
      unlocked: s
    } = l;
    if (0 === n.dependencies.length) return {
      disabled: !1,
      reason: void 0
    };
    let c = t ? null === (e = s.values().find(e => {
      var t;
      return (null === (t = e.sku) || void 0 === t ? void 0 : t.dependent_sku_id) === n.skuId
    })) || void 0 === e ? void 0 : e.sku_id : n.dependencies.find(e => !s.has(e));
    return {
      disabled: null != c,
      reason: null != c && null != i.get(c) ? o.NW.formatToPlainString(t ? a.Z.vCEBiY : a.Z["1B8AZm"], {
        perk: null === (r = i.get(c)) || void 0 === r ? void 0 : r.title
      }) : void 0
    }
  }, [l, n.skuId, n.dependencies, t])
}