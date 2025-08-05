/** Chunk was on 54433 **/
n.d(t, {
  b: () => E
});
var i = n(255367),
  l = n(73800),
  r = n(512722),
  s = n.n(r),
  a = n(704215),
  o = n(605236),
  C = n(717401),
  d = n(286961),
  c = n(317269),
  u = n(669079),
  p = n(296848),
  x = n(987209),
  f = n(563132),
  h = n(107998),
  j = n(27034),
  m = n(400981),
  _ = n(435020),
  L = n(698708),
  y = n(921944);

function E(e) {
  let t, {
      handleClose: n,
      planGroup: r,
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: g,
      postSuccessGuild: S,
      followupSKUInfo: b,
      continueSessionToInitialStep: v
    } = e,
    {
      activeSubscription: O,
      paymentSources: w,
      paymentSourceId: I,
      selectedPlan: Z,
      selectedSkuId: P,
      step: M,
      updatedSubscription: T,
      startingPremiumSubscriptionPlanIdRef: N,
      startingFractionalPremiumEndsAtRef: R
    } = (0, f.JL)(),
    {
      isGift: A,
      giftRecipient: U,
      giftCode: k,
      hasSentMessage: G,
      isSendingMessage: B,
      sendGiftMessage: H,
      claimableRewards: F,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: W
    } = (0, h.zb)(),
    z = null != W,
    Y = (0, C.id)(Z, A, F),
    K = (0, d.Z)(),
    V = (0, C.a5)(Z),
    q = (0, C.tK)(null == D ? void 0 : D.skuId),
    J = (0, _.$)(w, I),
    Q = A && null != D && V;
  s()(null != Z, "Expected plan to selected"), s()(null != P, "Expected selectedSkuId"), s()(null != M, "Step should be set");
  let X = l.useCallback(() => {
    n(), null == E || E()
  }, [n, E]);
  return l.useEffect(() => {
    !A || null == U || null == k || G || B || (0, u.pO)(U) || H({
      onSubscriptionConfirmation: E
    })
  }, [H, A, U, k, G, B, E]), l.useEffect(() => {
    null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
      dismissAction: y.L.INDIRECT_ACTION
    })
  }, [K, Y]), t = null != g ? g(Z, X, T) : null != v ? (0, i.jsx)(c.VY, {}) : A ? (0, i.jsx)(c.TB, {
    planId: Z.id,
    onClose: X
  }) : N.current === Z.id ? (0, i.jsx)(c.ZP, {
    planId: Z.id,
    postSuccessGuild: S,
    onClose: X,
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: R.current
  }) : (0, i.jsx)(c.ZP, {
    followupSKUInfo: b,
    startingPremiumSubscriptionPlanId: N.current,
    planId: Z.id,
    onClose: X,
    isDowngrade: null != O && (0, p.GY)(O, Z.id, r),
    paymentSourceType: J,
    hideClose: z,
    startingFractionalPremiumEndsAt: R.current
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(j.C3, {
      children: [(0, i.jsx)(L.Z, {}), t]
    }), null != W && W, Q && null != q && (0, i.jsx)(m.Z, {
      onClose: X,
      selectedPromotionalDecoPurchaseRecord: q,
      selectedGiftingPromotionReward: D
    })]
  })
}