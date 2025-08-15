/** Chunk was on 74891 **/
/** chunk id: 263519, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./361932.js"), require("./187205.js"), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk680005 = require("./680005.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk349167 = require("./349167.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk270144 = require("./270144.js"),
  Chunk488915 = require("./488915.js"),
  Chunk171246 = require("./171246.js"),
  Chunk929011 = require("./929011.jsx");

function y(t) {
  var e, n;
  let {
    initialSubscribeForGuild: r,
    analyticsLocation: y,
    skuId: P,
    onComplete: v,
    disableGuildSelector: E
  } = t, m = (0, o.e7)([S.Z], () => null != P ? S.Z.get(P) : true, [P]), T = (0, o.e7)([O.Z], () => null != P ? O.Z.getForSKU(P) : true, [P]), h = null == (e = (0, o.Wu)([f.Z], () => null != P ? f.Z.getForSKU(P) : [], [P])[0]) ? true : e.id, C = (0, o.e7)([S.Z], () => null != P ? S.Z.getParentSKU(P) : true, [P]), N = null == C ? true : C.bundledSkuIds, j = (0, o.Wu)([f.Z], () => {
    var t;
    return null != (t = null == N ? true : N.flatMap(f.Z.getForSKU)) ? t : []
  }, [N]), A = i.useMemo(() => j.map(t => t.id), [j]), L = (0, g.KK)(null != (n = null == m ? true : m.flags) ? n : 0), Z = (0, o.e7)([b.Z], () => null != r && false !== L && b.Z.getEntitlementsForGuild(r, true).some(t => t.skuId === P), [L, P, r]), F = null == m ? true : m.applicationId, w = (null == T ? true : T.published) === true && (null == m ? true : m.isAvailable()) === true, {
    app: x
  } = (0, d.Rt)(F), {
    analyticsLocations: R
  } = (0, s.ZP)(), k = (0, I.Ev)(C, null != r ? r : true), U = null == k ? true : k.subscription, D = null == k ? true : k.subscriptionPlan, G = (0, I.cr)(C, null != r ? r : true), B = null == G ? true : G.subscriptionPlan, {
    entitlementsLoaded: M
  } = (0, I.LM)({
    guildId: r
  });
  null == r && (M = true);
  let H = (0, p.Z)(),
    K = null != U && (0, g.Jf)(U, m),
    V = i.useMemo(() => {
      if (!M || null == x || null == P) return c.rf.LOADING;
      if (!w) return c.rf.UNAVAILABLE;
      if (!L) {
        if ((null == D ? true : D.skuId) === P) return c.rf.SUBSCRIBED;
        if ((null == B ? true : B.skuId) === P && false === K) return c.rf.UPCOMING_PLAN
      }
      return c.rf.AVAILABLE
    }, [null == D ? true : D.skuId, w, x, M, K, L, null == B ? true : B.skuId, P]);
  return i.useEffect(() => {
    w && null != P && H && (f.Z.isFetchingForSKU(P) || f.Z.isLoadedForSKU(P) || a.Z.wait(() => {
      (0, u.GZ)(P)
    }))
  }, [w, P, H]), {
    openModal: i.useCallback(() => {
      l()(null != x, "No application"), l()(null != P, "No SKU ID"), l()(w, "Cannot purchase this unpublished plan"), (0, _.H)({
        subscriptionPlanId: h,
        sku: m,
        subscriptionGroupPlanIds: A,
        initialSubscribeForGuild: r,
        disableGuildSelector: E,
        analyticsLocations: R,
        analyticsLocation: y
      }).then(() => {
        null == v || v()
      })
    }, [x, P, w, h, m, A, r, E, R, y, v]),
    subscriptionPurchaseButtonState: V,
    isGuildSubscribed: Z
  }
}