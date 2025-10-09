/** Chunk was on web.js **/
/** chunk id: 928886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk479446 = require("./479446.js"),
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
  Chunk315 = require("./315.js");

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
    isDisplayingWowMomentConfirmation: w
  } = (0, m.JL)(), {
    isGift: D,
    selectedGiftStyle: L,
    giftRecipient: x
  } = (0, h.wD)(), M = D && (0, p.pO)(x) && S === g.h8.CONFIRM && null != L && (null == R ? true : R.productLine) !== E.POd.COLLECTIBLES, k = null != n && null != S, j = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU], U = null != S && !j.includes(S) && null != T, G = (0, u.N)(a), B = !D && null != G && null != T && b.nG[G.trial_id].skus.includes(T), Z = (0, c.Ng)(), F = null == Z || null == (t = Z.discount) ? true : t.plan_ids.some(e => b.GP[e].skuId === T), V = !D && null != Z && null != T && F;
  return i.useMemo(() => {
    if (null == S) return;
    let e = null;
    return M ? e = (0, r.jsxs)("div", {
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
    }) : k ? e = n(null != A ? A : null, I, S) : N === y.GZ.ONE_TIME ? e = (0, r.jsx)(_.t, {
      step: S,
      onClose: I
    }) : U && (o()(v(T, b.y7), "invalid sku id: ".concat(T)), e = (0, r.jsx)(f.Z, {
      currentStep: null != S ? S : true,
      purchaseState: C,
      premiumType: b.y7[T],
      onClose: I,
      showTrialBadge: B,
      showDiscountBadge: V,
      isGift: D,
      giftRecipient: x,
      isEligibleForTrial: B,
      enablePremiumBrandRefresh: P,
      isDisplayingWowMomentConfirmation: w
    })), e
  }, [L, I, C, n, A, T, S, B, V, M, U, k, N, D, x, P, w])
}