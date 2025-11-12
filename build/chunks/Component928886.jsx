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

function I(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: a,
    handleClose: I
  } = e, {
    selectedSkuId: S,
    step: T,
    selectedPlan: A,
    purchaseState: C,
    purchaseType: N,
    selectedSku: R,
    enablePremiumBrandRefresh: P,
    isDisplayingWowMomentConfirmation: w
  } = (0, m.JL)(), {
    isGift: D,
    selectedGiftStyle: x,
    giftRecipient: L
  } = (0, h.wD)(), M = (null == R ? true : R.productLine) === E.POd.COLLECTIBLES, j = (null == R ? true : R.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM, k = D && (0, p.pO)(L) && T === g.h8.CONFIRM && null != x && !M && !j, U = null != n && null != T, G = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU], B = null != T && !G.includes(T) && null != S, Z = (0, u.N)(a), F = !D && null != Z && null != S && b.nG[Z.trial_id].skus.includes(S), V = (0, c.N)(), H = null == V || null == (t = V.discount) ? true : t.plan_ids.some(e => b.GP[e].skuId === S), Y = !D && null != V && null != S && H;
  return i.useMemo(() => {
    if (null == T) return;
    let e = null;
    return k ? e = (0, r.jsxs)("div", {
      className: O.container,
      children: [(0, r.jsx)(d.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: x,
        className: O.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: I,
        className: O.closeButton,
        "data-migration-pending": true
      })]
    }) : U ? e = n(null != A ? A : null, I, T) : N === y.GZ.ONE_TIME ? e = (0, r.jsx)(_.t, {
      step: T,
      onClose: I
    }) : B && (o()(v(S, b.y7), "invalid sku id: ".concat(S)), e = (0, r.jsx)(f.Z, {
      currentStep: null != T ? T : true,
      purchaseState: C,
      premiumType: b.y7[S],
      onClose: I,
      showTrialBadge: F,
      showDiscountBadge: Y,
      isGift: D,
      giftRecipient: L,
      isEligibleForTrial: F,
      enablePremiumBrandRefresh: P,
      isDisplayingWowMomentConfirmation: w
    })), e
  }, [x, I, C, n, A, S, T, F, Y, k, B, U, N, D, L, P, w])
}