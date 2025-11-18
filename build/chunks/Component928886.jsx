/** Chunk was on web.js **/
/** chunk id: 928886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => I
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
  Chunk864976 = require("./864976.js");

function v(e, t) {
  return e in t
}

function I(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: a,
    handleClose: I
  } = e, {
    selectedSkuId: T,
    step: S,
    selectedPlan: A,
    purchaseState: C,
    purchaseType: N,
    selectedSku: R,
    enablePremiumBrandRefresh: P,
    isDisplayingWowMomentConfirmation: D
  } = (0, m.JL)(), {
    isGift: w,
    selectedGiftStyle: L,
    giftRecipient: x
  } = (0, h.wD)(), M = (null == R ? true : R.productLine) === E.POd.COLLECTIBLES, k = (null == R ? true : R.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM, j = w && (0, p.pO)(x) && S === g.h8.CONFIRM && null != L && !M && !k, U = null != n && null != S, G = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU], B = null != S && !G.includes(S) && null != T, Z = (0, u.N)(a), F = !w && null != Z && null != T && b.nG[Z.trial_id].skus.includes(T), V = (0, c.N)(), H = null == V || null == (t = V.discount) ? true : t.plan_ids.some(e => b.GP[e].skuId === T), Y = !w && null != V && null != T && H;
  return i.useMemo(() => {
    if (null == S) return;
    let e = null;
    return j ? e = (0, r.jsxs)("div", {
      className: O.container,
      children: [(0, r.jsx)(d.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: L,
        className: O.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: I,
        className: O.closeButton,
        "data-migration-pending": true
      })]
    }) : U ? e = n(null != A ? A : null, I, S) : N === y.GZ.ONE_TIME ? e = (0, r.jsx)(_.t, {
      step: S,
      onClose: I
    }) : B && (o()(v(T, b.y7), "invalid sku id: ".concat(T)), e = (0, r.jsx)(f.Z, {
      currentStep: null != S ? S : true,
      purchaseState: C,
      premiumType: b.y7[T],
      onClose: I,
      showTrialBadge: F,
      showDiscountBadge: Y,
      isGift: w,
      giftRecipient: x,
      isEligibleForTrial: F,
      enablePremiumBrandRefresh: P,
      isDisplayingWowMomentConfirmation: D
    })), e
  }, [L, I, C, n, A, T, S, F, Y, j, B, U, N, w, x, P, D])
}