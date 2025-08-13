/** Chunk was on web.js **/
/** chunk id: 928886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk479446 = require("./479446.js"),
  Chunk646476 = require("./646476.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk798769 = require("./798769.jsx"),
  Chunk689011 = require("./689011.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk19549 = require("./19549.js");

function I(e, t) {
  return e in t
}

function T(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: o,
    handleClose: T
  } = e, {
    selectedSkuId: S,
    step: A,
    selectedPlan: N,
    purchaseState: C,
    purchaseType: R,
    selectedSku: P,
    enablePremiumBrandRefresh: w,
    isDisplayingWowMomentConfirmation: D
  } = (0, g.JL)(), {
    isGift: L,
    selectedGiftStyle: x,
    giftRecipient: M
  } = (0, m.wD)(), j = L && (0, h.pO)(M) && A === E.h8.CONFIRM && null != x && (null == P ? true : P.productLine) !== b.POd.COLLECTIBLES, k = null != n && null != A, U = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU], G = null != A && !U.includes(A) && null != S, B = (0, d.N)(o), Z = !L && null != B && null != S && y.nG[B.trial_id].skus.includes(S), F = (0, u.Ng)(), V = null == F || null == (t = F.discount) ? true : t.plan_ids.some(e => y.GP[e].skuId === S), H = !L && null != F && null != S && V, {
    enabled: Y
  } = c.ZP.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: false
  }), W = (0, c.rK)(), K = Y && W;
  return i.useMemo(() => {
    if (null == A) return;
    let e = null;
    return j ? e = (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsx)(f.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: x,
        className: v.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: T,
        className: v.closeButton,
        "data-migration-pending": true
      })]
    }) : k ? e = n(null != N ? N : null, T, A) : R === O.GZ.ONE_TIME ? e = (0, r.jsx)(p.t, {
      step: A,
      onClose: T
    }) : G && (a()(I(S, y.y7), "invalid sku id: ".concat(S)), e = (0, r.jsx)(_.Z, {
      currentStep: null != A ? A : true,
      purchaseState: C,
      premiumType: y.y7[S],
      onClose: T,
      showTrialBadge: Z,
      showDiscountBadge: H,
      isGift: L,
      giftRecipient: M,
      useWinterTheme: K,
      isEligibleForTrial: Z,
      enablePremiumBrandRefresh: w,
      isDisplayingWowMomentConfirmation: D
    })), e
  }, [x, T, C, n, N, S, A, Z, H, j, G, k, R, L, M, K, w, D])
}