/** Chunk was on web.js **/
/** chunk id: 185438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./114821.js"), require("./339614.js"), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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

function b(e) {
  var t, n;
  let {
    initialSubscribeForGuild: i,
    analyticsLocation: b,
    skuId: O,
    onComplete: v,
    disableGuildSelector: A
  } = e, I = (0, s.bG)([_.A], () => null != O ? _.A.get(O) : true, [O]), S = (0, s.bG)([h.A], () => null != O ? h.A.getForSKU(O) : true, [O]), T = null == (n = (0, s.yK)([p.A], () => null != O ? p.A.getForSKU(O) : [], [O])[0]) ? true : n.id, C = (0, s.bG)([_.A], () => null != O ? _.A.getParentSKU(O) : true, [O]), N = null == C ? true : C.bundledSkuIds, R = (0, s.yK)([p.A], () => {
    var e;
    return null != (e = null == N ? true : N.flatMap(p.A.getForSKU)) ? e : []
  }, [N]), w = r.useMemo(() => R.map(e => e.id), [R]), P = (0, E.PJ)(null != (t = null == I ? true : I.flags) ? t : 0), D = (0, s.bG)([g.A], () => null != i && false !== P && g.A.getEntitlementsForGuild(i, true).some(e => e.skuId === O), [P, O, i]), x = null == I ? true : I.applicationId, L = (null == S ? true : S.published) === true && (null == I ? true : I.isAvailable()) === true, {
    app: j
  } = (0, d.NP)(x), {
    analyticsLocations: M
  } = (0, c.Ay)(), k = (0, m.GD)(C, null != i ? i : true), U = null == k ? true : k.subscription, G = null == k ? true : k.subscriptionPlan, V = (0, m.Ko)(C, null != i ? i : true), F = null == V ? true : V.subscriptionPlan, {
    entitlementsLoaded: B
  } = (0, m.CZ)({
    guildId: i
  });
  null == i && (B = true);
  let H = (0, f.A)(),
    Y = null != U && (0, E.Uo)(U, I),
    W = r.useMemo(() => {
      if (!B || null == j || null == O) return u.wF.LOADING;
      if (!L) return u.wF.UNAVAILABLE;
      if (!P) {
        if ((null == G ? true : G.skuId) === O) return u.wF.SUBSCRIBED;
        if ((null == F ? true : F.skuId) === O && false === Y) return u.wF.UPCOMING_PLAN
      }
      return u.wF.AVAILABLE
    }, [null == G ? true : G.skuId, L, j, B, Y, P, null == F ? true : F.skuId, O]);
  return r.useEffect(() => {
    L && null != O && H && (p.A.isFetchingForSKU(O) || p.A.isLoadedForSKU(O) || o.h.wait(() => {
      (0, l.ur)(O)
    }))
  }, [L, O, H]), {
    openModal: r.useCallback(() => {
      a()(null != j, "No application"), a()(null != O, "No SKU ID"), a()(L, "Cannot purchase this unpublished plan"), (0, y.w)({
        subscriptionPlanId: T,
        sku: I,
        subscriptionGroupPlanIds: w,
        initialSubscribeForGuild: i,
        disableGuildSelector: A,
        analyticsLocations: M,
        analyticsLocation: b
      }).then(() => {
        null == v || v()
      })
    }, [j, O, L, T, I, w, i, A, M, b, v]),
    subscriptionPurchaseButtonState: W,
    isGuildSubscribed: D
  }
}