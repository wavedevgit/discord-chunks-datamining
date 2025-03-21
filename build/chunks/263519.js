/** Chunk was on 74891 **/
n.d(t, {
  Z: () => h
}), n(13667), n(390547), n(789020);
var r = n(192379),
  l = n(512722),
  i = n.n(l),
  o = n(442837),
  a = n(570140),
  u = n(821849),
  s = n(906732),
  c = n(680005),
  d = n(728345),
  p = n(349167),
  f = n(509545),
  b = n(55563),
  O = n(551428),
  v = n(270144),
  m = n(488915),
  y = n(171246),
  g = n(929011);

function h(e) {
  var t, n;
  let {
    initialSubscribeForGuild: l,
    analyticsLocation: h,
    skuId: j,
    onComplete: S,
    disableGuildSelector: P
  } = e, I = (0, o.e7)([b.Z], () => null != j ? b.Z.get(j) : void 0, [j]), E = (0, o.e7)([O.Z], () => null != j ? O.Z.getForSKU(j) : void 0, [j]), x = null === (t = (0, o.Wu)([f.Z], () => null != j ? f.Z.getForSKU(j) : [], [j])[0]) || void 0 === t ? void 0 : t.id, Z = (0, o.e7)([b.Z], () => null != j ? b.Z.getParentSKU(j) : void 0, [j]), N = null == Z ? void 0 : Z.bundledSkuIds, w = (0, o.Wu)([f.Z], () => {
    var e;
    return null !== (e = null == N ? void 0 : N.flatMap(f.Z.getForSKU)) && void 0 !== e ? e : []
  }, [N]), A = r.useMemo(() => w.map(e => e.id), [w]), k = (0, y.KK)(null !== (n = null == I ? void 0 : I.flags) && void 0 !== n ? n : 0), _ = (0, o.e7)([m.Z], () => null != l && !1 !== k && m.Z.getEntitlementsForGuild(l, !0).some(e => e.skuId === j), [k, j, l]), C = null == I ? void 0 : I.applicationId, D = (null == E ? void 0 : E.published) === !0 && (null == I ? void 0 : I.isAvailable()) === !0, {
    app: L
  } = (0, d.Rt)(C), {
    analyticsLocations: T
  } = (0, s.ZP)(), R = (0, v.Ev)(Z, null != l ? l : void 0), F = null == R ? void 0 : R.subscription, M = null == R ? void 0 : R.subscriptionPlan, U = (0, v.cr)(Z, null != l ? l : void 0), G = null == U ? void 0 : U.subscriptionPlan, {
    entitlementsLoaded: B
  } = (0, v.LM)({
    guildId: l
  });
  null == l && (B = !0);
  let K = (0, p.Z)(),
    W = null != F && (0, y.Jf)(F, I),
    H = r.useMemo(() => {
      if (!B || null == L || null == j) return c.rf.LOADING;
      if (!D) return c.rf.UNAVAILABLE;
      if (!k) {
        if ((null == M ? void 0 : M.skuId) === j) return c.rf.SUBSCRIBED;
        if ((null == G ? void 0 : G.skuId) === j && !1 === W) return c.rf.UPCOMING_PLAN
      }
      return c.rf.AVAILABLE
    }, [null == M ? void 0 : M.skuId, D, L, B, W, k, null == G ? void 0 : G.skuId, j]);
  return r.useEffect(() => {
    D && null != j && K && !(f.Z.isFetchingForSKU(j) || f.Z.isLoadedForSKU(j)) && a.Z.wait(() => {
      (0, u.GZ)(j)
    })
  }, [D, j, K]), {
    openModal: r.useCallback(() => {
      i()(null != L, "No application"), i()(null != j, "No SKU ID"), i()(D, "Cannot purchase this unpublished plan"), (0, g.H)({
        subscriptionPlanId: x,
        sku: I,
        subscriptionGroupPlanIds: A,
        initialSubscribeForGuild: l,
        disableGuildSelector: P,
        analyticsLocations: T,
        analyticsLocation: h
      }).then(() => {
        null == S || S()
      })
    }, [L, j, D, x, I, A, l, P, T, h, S]),
    subscriptionPurchaseButtonState: H,
    isGuildSubscribed: _
  }
}