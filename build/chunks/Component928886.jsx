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
  Chunk455006 = require("./455006.js");

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
    selectedPlan: C,
    purchaseState: A,
    purchaseType: N,
    selectedSku: P,
    enablePremiumBrandRefresh: R,
    isDisplayingWowMomentConfirmation: w,
    isPremiumGroupPurchase: D
  } = (0, h.JL)(), {
    isGift: x,
    selectedGiftStyle: L,
    giftRecipient: j
  } = (0, m.wD)(), M = (null == P ? true : P.productLine) === E.POd.COLLECTIBLES, k = (null == P ? true : P.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM, U = x && (0, _.pO)(j) && T === g.h8.CONFIRM && null != L && !M && !k, G = null != n && null != T, Z = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU], F = null != T && !Z.includes(T) && null != I, B = (0, u.N)(a), V = !x && null != B && null != I && b.nG[B.trial_id].skus.includes(I), H = (0, c.N)(), Y = null == H || null == (t = H.discount) ? true : t.plan_ids.some(e => b.GP[e].skuId === I), W = !x && null != H && null != I && Y;
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
    }) : G ? e = n(null != C ? C : null, S, T) : N === y.GZ.ONE_TIME ? e = (0, r.jsx)(p.t, {
      step: T,
      onClose: S
    }) : F && (o()(v(I, b.y7), "invalid sku id: ".concat(I)), e = (0, r.jsx)(f.Z, {
      currentStep: null != T ? T : true,
      purchaseState: A,
      premiumType: b.y7[I],
      onClose: S,
      showTrialBadge: V,
      showDiscountBadge: W,
      isGift: x,
      giftRecipient: j,
      isEligibleForTrial: V,
      enablePremiumBrandRefresh: R,
      isDisplayingWowMomentConfirmation: w,
      isPremiumGroupPurchase: D
    })), e
  }, [L, S, A, n, C, I, T, V, W, U, F, G, N, x, j, R, w, D])
}