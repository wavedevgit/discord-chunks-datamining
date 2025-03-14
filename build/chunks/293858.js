/** Chunk was on 3743 **/
n.d(t, {
  b: () => S
});
var r = n(200651),
  i = n(192379),
  l = n(512722),
  s = n.n(l),
  o = n(704215),
  a = n(605236),
  C = n(881602),
  d = n(717401),
  c = n(286961),
  u = n(317269),
  p = n(669079),
  _ = n(296848),
  x = n(987209),
  f = n(563132),
  h = n(107998),
  j = n(614277),
  m = n(400981),
  L = n(698708),
  g = n(921944);

function S(e) {
  var t, n;
  let l, {
      handleClose: S,
      planGroup: y,
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: b,
      postSuccessGuild: N,
      followupSKUInfo: I,
      continueSessionToInitialStep: v
    } = e,
    {
      activeSubscription: P,
      paymentSources: M,
      paymentSourceId: T,
      selectedPlan: Z,
      selectedSkuId: O,
      step: w,
      updatedSubscription: k,
      startingPremiumSubscriptionPlanIdRef: U
    } = (0, f.JL)(),
    {
      isGift: A,
      giftRecipient: R,
      giftCode: F,
      hasSentMessage: B,
      isSendingMessage: H,
      sendGiftMessage: W,
      claimableRewards: G,
      selectedGiftingPromotionReward: D
    } = (0, x.wD)(),
    {
      confirmationFooter: Y
    } = (0, h.zb)(),
    z = null != Y,
    K = (0, d.id)(Z, A, G),
    X = (0, c.Z)(),
    V = (0, d.a5)(Z),
    Q = (0, d.tK)(null == D ? void 0 : D.skuId),
    q = A && null != D && V;
  s()(null != Z, "Expected plan to selected"), s()(null != O, "Expected selectedSkuId"), s()(null != w, "Step should be set");
  let J = i.useCallback(() => {
    S(), null == E || E()
  }, [S, E]);
  return i.useEffect(() => {
    !(!A || null == R || null == F || B || H || (0, p.pO)(R)) && C.F.getCurrentConfig({
      location: "36b986_1"
    }).enabled && W({
      onSubscriptionConfirmation: E
    })
  }, [W, A, R, F, B, H, E]), i.useEffect(() => {
    null != X && null != X.reminderNotice && K && (0, a.wH)(o.z.GIFTING_PROMOTION_REMINDER, X.dismissibleContentVersion, {
      dismissAction: g.L.INDIRECT_ACTION
    })
  }, [X, K]), l = null != b ? b(Z, J, k) : null != v ? (0, r.jsx)(u.VY, {}) : A ? (0, r.jsx)(u.TB, {
    planId: Z.id,
    onClose: J
  }) : U.current === Z.id ? (0, r.jsx)(u.ZP, {
    planId: Z.id,
    postSuccessGuild: N,
    onClose: J,
    paymentSourceType: null === (t = M[null != T ? T : ""]) || void 0 === t ? void 0 : t.type,
    hideClose: z
  }) : (0, r.jsx)(u.ZP, {
    followupSKUInfo: I,
    startingPremiumSubscriptionPlanId: U.current,
    planId: Z.id,
    onClose: J,
    isDowngrade: null != P && (0, _.GY)(P, Z.id, y),
    paymentSourceType: null === (n = M[null != T ? T : ""]) || void 0 === n ? void 0 : n.type,
    hideClose: z
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(j.C3, {
      children: [(0, r.jsx)(L.Z, {}), l]
    }), null != Y && Y, q && null != Q && (0, r.jsx)(m.Z, {
      onClose: J,
      selectedPromotionalDecoPurchaseRecord: Q,
      selectedGiftingPromotionReward: D
    })]
  })
}