/** Chunk was on web.js **/
/** chunk id: 928886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk479446 = require("./479446.js"),
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

function y(e, t) {
  return e in t
}

function O(e) {
  let {
    renderHeader: t,
    handleClose: n
  } = e, {
    selectedSkuId: a,
    step: O,
    selectedPlan: v,
    purchaseState: S,
    purchaseType: I,
    selectedSku: T,
    enablePremiumBrandRefresh: C,
    isDisplayingWowMomentConfirmation: A,
    isPremiumGroupPurchase: N,
    isEligibleForTrial: P,
    isEligibleForDiscount: w
  } = (0, _.JL)(), {
    isGift: R,
    selectedGiftStyle: D,
    giftRecipient: x
  } = (0, p.wD)(), L = (null == T ? true : T.productLine) === m.POd.COLLECTIBLES, j = (null == T ? true : T.productLine) === m.POd.SOCIAL_LAYER_GAME_ITEM, M = R && (0, f.pO)(x) && O === h.h8.CONFIRM && null != D && !L && !j, k = null != t && null != O, U = [h.h8.SKU_SELECT, h.h8.SELECT_FREE_SKU], G = null != O && !U.includes(O) && null != a;
  return i.useMemo(() => {
    if (null == O) return;
    let e = null;
    return M ? e = (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsx)(c.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: D,
        className: b.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: n,
        className: b.closeButton,
        "data-migration-pending": true
      })]
    }) : k ? e = t(null != v ? v : null, n, O) : I === E.GZ.ONE_TIME ? e = (0, r.jsx)(d.t, {
      step: O,
      onClose: n
    }) : G && (o()(y(a, g.y7), "invalid sku id: ".concat(a)), e = (0, r.jsx)(u.Z, {
      currentStep: null != O ? O : true,
      purchaseState: S,
      premiumType: g.y7[a],
      onClose: n,
      showTrialBadge: P,
      showDiscountBadge: w,
      isGift: R,
      giftRecipient: x,
      isEligibleForTrial: P,
      enablePremiumBrandRefresh: C,
      isDisplayingWowMomentConfirmation: A,
      isPremiumGroupPurchase: N
    })), e
  }, [D, n, S, t, v, a, O, P, w, M, G, k, I, R, x, C, A, N])
}