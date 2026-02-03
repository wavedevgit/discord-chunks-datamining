/** Chunk was on web.js **/
/** chunk id: 462309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk608805 = require("./608805.js"),
  Chunk584160 = require("./584160.js"),
  Chunk169797 = require("./169797.jsx"),
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  return e in t
}

function T(e) {
  let {
    renderHeader: t,
    handleClose: n
  } = e, {
    selectedSkuId: a,
    step: A,
    selectedPlan: T,
    purchaseState: C,
    purchaseType: N,
    selectedSku: w,
    enablePremiumBrandRefresh: R,
    isDisplayingWowMomentConfirmation: P,
    isPremiumGroupPurchase: D,
    isEligibleForTrial: L,
    isEligibleForDiscount: x
  } = (0, g.P5)(), {
    isGift: M,
    selectedGiftStyle: j,
    giftRecipient: k
  } = (0, m.Pv)(), U = (null == w ? true : w.productLine) === y.EZt.COLLECTIBLES, G = (null == w ? true : w.productLine) === y.EZt.SOCIAL_LAYER_GAME_ITEM, F = M && (0, h.Ik)(k) && A === E.pn.CONFIRM && null != j && !U && !G, V = null != t && null != A, B = [E.pn.SKU_SELECT, E.pn.SELECT_FREE_SKU], H = null != A && !B.includes(A) && null != a, {
    enabled: Y
  } = (0, l.T0)({
    location: "PaymentModalHeader"
  });
  return i.useMemo(() => {
    if (null == A) return;
    if (Y && A === E.pn.REVIEW) {
      let e = (0, c.u)({
        skuId: null != a ? a : null != w ? w.id : null,
        showTrialBadge: L,
        showPromoBadge: x
      });
      return (0, r.jsx)(u.s3, I({}, e))
    }
    let e = null;
    return F ? e = (0, r.jsxs)("div", {
      className: v.kL,
      children: [(0, r.jsx)(f.A, {
        defaultAnimationState: d.oA.LOOP,
        giftStyle: j,
        className: v.qq
      }), (0, r.jsx)(s.s_y, {
        onClick: n,
        className: v.b,
        "data-migration-pending": true
      })]
    }) : V ? e = t(null != T ? T : null, n, A) : N === O.VV.ONE_TIME ? e = (0, r.jsx)(_.fs, {
      step: A,
      onClose: n
    }) : H && (o()(S(a, b.WN), "invalid sku id: ".concat(a)), e = (0, r.jsx)(p.A, {
      currentStep: null != A ? A : true,
      purchaseState: C,
      premiumType: b.WN[a],
      onClose: n,
      showTrialBadge: L,
      showDiscountBadge: x,
      isGift: M,
      giftRecipient: k,
      isEligibleForTrial: L,
      enablePremiumBrandRefresh: R,
      isDisplayingWowMomentConfirmation: P,
      isPremiumGroupPurchase: D
    })), e
  }, [Y, j, n, C, t, T, w, a, A, L, x, F, H, V, N, M, k, R, P, D])
}