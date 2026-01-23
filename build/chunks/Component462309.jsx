/** Chunk was on web.js **/
/** chunk id: 462309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk242874 = require("./242874.js"),
  Chunk75825 = require("./75825.jsx"),
  Chunk499369 = require("./499369.jsx"),
  Chunk490744 = require("./490744.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk629865 = require("./629865.js");

function b(e, t) {
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
    purchaseState: A,
    purchaseType: I,
    selectedSku: S,
    enablePremiumBrandRefresh: T,
    isDisplayingWowMomentConfirmation: C,
    isPremiumGroupPurchase: N,
    isEligibleForTrial: R,
    isEligibleForDiscount: w
  } = (0, _.P5)(), {
    isGift: P,
    selectedGiftStyle: D,
    giftRecipient: x
  } = (0, p.Pv)(), L = (null == S ? true : S.productLine) === m.EZt.COLLECTIBLES, j = (null == S ? true : S.productLine) === m.EZt.SOCIAL_LAYER_GAME_ITEM, M = P && (0, f.Ik)(x) && O === h.pn.CONFIRM && null != D && !L && !j, k = null != t && null != O, U = [h.pn.SKU_SELECT, h.pn.SELECT_FREE_SKU], G = null != O && !U.includes(O) && null != a;
  return i.useMemo(() => {
    if (null == O) return;
    let e = null;
    return M ? e = (0, r.jsxs)("div", {
      className: y.kL,
      children: [(0, r.jsx)(c.A, {
        defaultAnimationState: l.oA.LOOP,
        giftStyle: D,
        className: y.qq
      }), (0, r.jsx)(o.s_y, {
        onClick: n,
        className: y.b,
        "data-migration-pending": true
      })]
    }) : k ? e = t(null != v ? v : null, n, O) : I === E.VV.ONE_TIME ? e = (0, r.jsx)(d.fs, {
      step: O,
      onClose: n
    }) : G && (s()(b(a, g.WN), "invalid sku id: ".concat(a)), e = (0, r.jsx)(u.A, {
      currentStep: null != O ? O : true,
      purchaseState: A,
      premiumType: g.WN[a],
      onClose: n,
      showTrialBadge: R,
      showDiscountBadge: w,
      isGift: P,
      giftRecipient: x,
      isEligibleForTrial: R,
      enablePremiumBrandRefresh: T,
      isDisplayingWowMomentConfirmation: C,
      isPremiumGroupPurchase: N
    })), e
  }, [D, n, A, t, v, a, O, R, w, M, G, k, I, P, x, T, C, N])
}