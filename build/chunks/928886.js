/** Chunk was on web.js **/
"use strict";
n.d(t, {
  U: () => I
});
var r = n(200651),
  i = n(192379),
  o = n(512722),
  a = n.n(o),
  s = n(481060),
  l = n(479446),
  c = n(646476),
  u = n(104494),
  d = n(639119),
  f = n(981632),
  p = n(798769),
  _ = n(689011),
  h = n(669079),
  m = n(987209),
  g = n(563132),
  E = n(409813),
  v = n(981631),
  b = n(474936),
  y = n(231338),
  O = n(70709);

function S(e, t) {
  return e in t
}

function I(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: o,
    handleClose: I
  } = e, {
    selectedSkuId: T,
    step: N,
    selectedPlan: A,
    purchaseState: C,
    purchaseType: R,
    selectedSku: P
  } = (0, g.JL)(), {
    isGift: D,
    selectedGiftStyle: w,
    giftRecipient: L
  } = (0, m.wD)(), x = D && (0, h.pO)(L) && N === E.h8.CONFIRM && null != w && (null == P ? void 0 : P.productLine) !== v.POd.COLLECTIBLES, M = null != n && null != N, j = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU], k = null != N && !j.includes(N) && null != T, U = (0, d.N)(o), G = !D && null != U && null != T && b.nG[U.trial_id].skus.includes(T), B = (0, u.Ng)(), F = null == B ? void 0 : null === (t = B.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.GP[e].skuId === T), V = !D && null != B && null != T && F, {
    enabled: Z
  } = c.ZP.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: !1
  }), H = (0, c.rK)(), W = Z && H;
  return i.useMemo(() => {
    if (null == N) return;
    let e = null;
    return x ? e = (0, r.jsxs)("div", {
      className: O.container,
      children: [(0, r.jsx)(f.Z, {
        defaultAnimationState: l.SR.LOOP,
        giftStyle: w,
        className: O.seasonalGiftBoxHeaderIcon
      }), (0, r.jsx)(s.olH, {
        onClick: I,
        className: O.closeButton
      })]
    }) : M ? e = n(null != A ? A : null, I, N) : R === y.GZ.ONE_TIME ? e = (0, r.jsx)(_.t, {
      step: N,
      onClose: I
    }) : k && (a()(S(T, b.y7), "invalid sku id: ".concat(T)), e = (0, r.jsx)(p.Z, {
      currentStep: null != N ? N : void 0,
      purchaseState: C,
      premiumType: b.y7[T],
      onClose: I,
      showTrialBadge: G,
      showDiscountBadge: V,
      isGift: D,
      giftRecipient: L,
      useWinterTheme: W
    })), e
  }, [w, I, C, n, A, T, N, G, V, x, k, M, R, D, L, W])
}