/** Chunk was on web.js **/
/** chunk id: 263519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./361932.js"), require("./187205.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
    disableGuildSelector: S
  } = e, I = (0, a.e7)([_.Z], () => null != O ? _.Z.get(O) : true, [O]), T = (0, a.e7)([m.Z], () => null != O ? m.Z.getForSKU(O) : true, [O]), C = null == (t = (0, a.Wu)([p.Z], () => null != O ? p.Z.getForSKU(O) : [], [O])[0]) ? true : t.id, A = (0, a.e7)([_.Z], () => null != O ? _.Z.getParentSKU(O) : true, [O]), N = null == A ? true : A.bundledSkuIds, P = (0, a.Wu)([p.Z], () => {
    var e;
    return null != (e = null == N ? true : N.flatMap(p.Z.getForSKU)) ? e : []
  }, [N]), R = r.useMemo(() => P.map(e => e.id), [P]), w = (0, E.KK)(null != (n = null == I ? true : I.flags) ? n : 0), D = (0, a.e7)([g.Z], () => null != i && false !== w && g.Z.getEntitlementsForGuild(i, true).some(e => e.skuId === O), [w, O, i]), x = null == I ? true : I.applicationId, L = (null == T ? true : T.published) === true && (null == I ? true : I.isAvailable()) === true, {
    app: j
  } = (0, d.Rt)(x), {
    analyticsLocations: M
  } = (0, c.ZP)(), k = (0, h.Ev)(A, null != i ? i : true), U = null == k ? true : k.subscription, G = null == k ? true : k.subscriptionPlan, Z = (0, h.cr)(A, null != i ? i : true), F = null == Z ? true : Z.subscriptionPlan, {
    entitlementsLoaded: B
  } = (0, h.LM)({
    guildId: i
  });
  null == i && (B = true);
  let V = (0, f.Z)(),
    H = null != U && (0, E.Jf)(U, I),
    Y = r.useMemo(() => {
      if (!B || null == j || null == O) return u.rf.LOADING;
      if (!L) return u.rf.UNAVAILABLE;
      if (!w) {
        if ((null == G ? true : G.skuId) === O) return u.rf.SUBSCRIBED;
        if ((null == F ? true : F.skuId) === O && false === H) return u.rf.UPCOMING_PLAN
      }
      return u.rf.AVAILABLE
    }, [null == G ? true : G.skuId, L, j, B, H, w, null == F ? true : F.skuId, O]);
  return r.useEffect(() => {
    L && null != O && V && (p.Z.isFetchingForSKU(O) || p.Z.isLoadedForSKU(O) || s.Z.wait(() => {
      (0, l.GZ)(O)
    }))
  }, [L, O, V]), {
    openModal: r.useCallback(() => {
      o()(null != j, "No application"), o()(null != O, "No SKU ID"), o()(L, "Cannot purchase this unpublished plan"), (0, b.H)({
        subscriptionPlanId: C,
        sku: I,
        subscriptionGroupPlanIds: R,
        initialSubscribeForGuild: i,
        disableGuildSelector: S,
        analyticsLocations: M,
        analyticsLocation: y
      }).then(() => {
        null == v || v()
      })
    }, [j, O, L, C, I, R, i, S, M, y, v]),
    subscriptionPurchaseButtonState: Y,
    isGuildSubscribed: D
  }
}