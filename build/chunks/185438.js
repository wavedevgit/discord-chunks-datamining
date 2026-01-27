/** Chunk was on 13088 **/
/** chunk id: 185438, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./114821.js"), require("./339614.js"), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk73825 = require("./73825.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk376374 = require("./376374.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk897100 = require("./897100.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk915043 = require("./915043.js"),
  Chunk607940 = require("./607940.js"),
  Chunk163437 = require("./163437.js"),
  Chunk638643 = require("./638643.jsx");

function m(t) {
  var e, n;
  let {
    initialSubscribeForGuild: r,
    analyticsLocation: m,
    skuId: v,
    onComplete: E,
    disableGuildSelector: P
  } = t, h = (0, u.bG)([S.A], () => null != v ? S.A.get(v) : true, [v]), T = (0, u.bG)([A.A], () => null != v ? A.A.getForSKU(v) : true, [v]), y = null == (n = (0, u.yK)([f.A], () => null != v ? f.A.getForSKU(v) : [], [v])[0]) ? true : n.id, _ = (0, u.bG)([S.A], () => null != v ? S.A.getParentSKU(v) : true, [v]), N = null == _ ? true : _.bundledSkuIds, j = (0, u.yK)([f.A], () => {
    var t;
    return null != (t = null == N ? true : N.flatMap(f.A.getForSKU)) ? t : []
  }, [N]), L = l.useMemo(() => j.map(t => t.id), [j]), C = (0, g.PJ)(null != (e = null == h ? true : h.flags) ? e : 0), F = (0, u.bG)([O.A], () => null != r && false !== C && O.A.getEntitlementsForGuild(r, true).some(t => t.skuId === v), [C, v, r]), w = null == h ? true : h.applicationId, x = (null == T ? true : T.published) === true && (null == h ? true : h.isAvailable()) === true, {
    app: R
  } = (0, d.NP)(w), {
    analyticsLocations: D
  } = (0, a.Ay)(), G = (0, b.GD)(_, null != r ? r : true), k = null == G ? true : G.subscription, U = null == G ? true : G.subscriptionPlan, B = (0, b.Ko)(_, null != r ? r : true), K = null == B ? true : B.subscriptionPlan, {
    entitlementsLoaded: M
  } = (0, b.CZ)({
    guildId: r
  });
  null == r && (M = true);
  let H = (0, p.A)(),
    Y = null != k && (0, g.Uo)(k, h),
    V = l.useMemo(() => {
      if (!M || null == R || null == v) return c.wF.LOADING;
      if (!x) return c.wF.UNAVAILABLE;
      if (!C) {
        if ((null == U ? true : U.skuId) === v) return c.wF.SUBSCRIBED;
        if ((null == K ? true : K.skuId) === v && false === Y) return c.wF.UPCOMING_PLAN
      }
      return c.wF.AVAILABLE
    }, [null == U ? true : U.skuId, x, R, M, Y, C, null == K ? true : K.skuId, v]);
  return l.useEffect(() => {
    x && null != v && H && (f.A.isFetchingForSKU(v) || f.A.isLoadedForSKU(v) || o.h.wait(() => {
      (0, s.ur)(v)
    }))
  }, [x, v, H]), {
    openModal: l.useCallback(() => {
      i()(null != R, "No application"), i()(null != v, "No SKU ID"), i()(x, "Cannot purchase this unpublished plan"), (0, I.w)({
        subscriptionPlanId: y,
        sku: h,
        subscriptionGroupPlanIds: L,
        initialSubscribeForGuild: r,
        disableGuildSelector: P,
        analyticsLocations: D,
        analyticsLocation: m
      }).then(() => {
        null == E || E()
      })
    }, [R, v, x, y, h, L, r, P, D, m, E]),
    subscriptionPurchaseButtonState: V,
    isGuildSubscribed: F
  }
}