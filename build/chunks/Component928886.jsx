/** Chunk was on web.js **/
/** chunk id: 928886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk479446 = require("./479446.js"),
  Chunk622909 = require("./622909.js"),
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
  Chunk315 = require("./315.js");

function v(e, t) {
  return e in t
}

function S(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: a,
    handleClose: S
  } = e, {
    selectedSkuId: I,
    step: T,
    selectedPlan: A,
    purchaseState: C,
    purchaseType: N,
    selectedSku: P,
    enablePremiumBrandRefresh: R,
    isDisplayingWowMomentConfirmation: D,
    isPremiumGroupPurchase: w
  } = (0, h.JL)(), {
    isGift: x,
    selectedGiftStyle: L,
    giftRecipient: j
  } = (0, m.wD)(), M = (null == P ? true : P.productLine) === E.POd.COLLECTIBLES, k = (null == P ? true : P.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM, U = x && (0, _.pO)(j) && T === g.h8.CONFIRM && null != L && !M && !k, G = null != n && null != T, Z = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU], B = null != T && !Z.includes(T) && null != I, F = (0, u.N)(a), V = !x && null != F && null != I && b.nG[F.trial_id].skus.includes(I), H = (0, c.N)(), Y = null == H || null == (t = H.discount) ? true : t.plan_ids.some(e => b.GP[e].skuId === I), W = !x && null != H && null != I && Y;
  return i.useMemo(() => {
    if (null == T) return;
    let e = null;
    return U ? e = (0, r.jsxs)("div", {
      className: O.container,
      children: [(0, r.jsx)(d.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: L,
        className: O.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: S,
        className: O.closeButton,
        "data-migration-pending": true
      })]
    }) : G ? e = n(null != A ? A : null, S, T) : N === y.GZ.ONE_TIME ? e = (0, r.jsx)(p.t, {
      step: T,
      onClose: S
    }) : B && (o()(v(I, b.y7), "invalid sku id: ".concat(I)), e = (0, r.jsx)(f.Z, {
      currentStep: null != T ? T : true,
      purchaseState: C,
      premiumType: b.y7[I],
      onClose: S,
      showTrialBadge: V,
      showDiscountBadge: W,
      isGift: x,
      giftRecipient: j,
      isEligibleForTrial: V,
      enablePremiumBrandRefresh: R,
      isDisplayingWowMomentConfirmation: D,
      isPremiumGroupPurchase: w
    })), e
  }, [L, S, C, n, A, I, T, V, W, U, B, G, N, x, j, R, D, w])
}