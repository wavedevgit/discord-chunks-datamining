/** Chunk was on web.js **/
/** chunk id: 263519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./361932.js"), require("./187205.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function y(e) {
  var t, n;
  let {
    initialSubscribeForGuild: i,
    analyticsLocation: y,
    skuId: O,
    onComplete: v,
    disableGuildSelector: I
  } = e, T = (0, o.e7)([p.Z], () => null != O ? p.Z.get(O) : true, [O]), S = (0, o.e7)([h.Z], () => null != O ? h.Z.getForSKU(O) : true, [O]), A = null == (t = (0, o.Wu)([_.Z], () => null != O ? _.Z.getForSKU(O) : [], [O])[0]) ? true : t.id, C = (0, o.e7)([p.Z], () => null != O ? p.Z.getParentSKU(O) : true, [O]), N = null == C ? true : C.bundledSkuIds, R = (0, o.Wu)([_.Z], () => {
    var e;
    return null != (e = null == N ? true : N.flatMap(_.Z.getForSKU)) ? e : []
  }, [N]), P = r.useMemo(() => R.map(e => e.id), [R]), D = (0, E.KK)(null != (n = null == T ? true : T.flags) ? n : 0), w = (0, o.e7)([g.Z], () => null != i && false !== D && g.Z.getEntitlementsForGuild(i, true).some(e => e.skuId === O), [D, O, i]), x = null == T ? true : T.applicationId, L = (null == S ? true : S.published) === true && (null == T ? true : T.isAvailable()) === true, {
    app: M
  } = (0, d.Rt)(x), {
    analyticsLocations: k
  } = (0, c.ZP)(), j = (0, m.Ev)(C, null != i ? i : true), U = null == j ? true : j.subscription, G = null == j ? true : j.subscriptionPlan, B = (0, m.cr)(C, null != i ? i : true), Z = null == B ? true : B.subscriptionPlan, {
    entitlementsLoaded: F
  } = (0, m.LM)({
    guildId: i
  });
  null == i && (F = true);
  let V = (0, f.Z)(),
    H = null != U && (0, E.Jf)(U, T),
    Y = r.useMemo(() => {
      if (!F || null == M || null == O) return u.rf.LOADING;
      if (!L) return u.rf.UNAVAILABLE;
      if (!D) {
        if ((null == G ? true : G.skuId) === O) return u.rf.SUBSCRIBED;
        if ((null == Z ? true : Z.skuId) === O && false === H) return u.rf.UPCOMING_PLAN
      }
      return u.rf.AVAILABLE
    }, [null == G ? true : G.skuId, L, M, F, H, D, null == Z ? true : Z.skuId, O]);
  return r.useEffect(() => {
    L && null != O && V && (_.Z.isFetchingForSKU(O) || _.Z.isLoadedForSKU(O) || s.Z.wait(() => {
      (0, l.GZ)(O)
    }))
  }, [L, O, V]), {
    openModal: r.useCallback(() => {
      a()(null != M, "No application"), a()(null != O, "No SKU ID"), a()(L, "Cannot purchase this unpublished plan"), (0, b.H)({
        subscriptionPlanId: A,
        sku: T,
        subscriptionGroupPlanIds: P,
        initialSubscribeForGuild: i,
        disableGuildSelector: I,
        analyticsLocations: k,
        analyticsLocation: y
      }).then(() => {
        null == v || v()
      })
    }, [M, O, L, A, T, P, i, I, k, y, v]),
    subscriptionPurchaseButtonState: Y,
    isGuildSubscribed: w
  }
}