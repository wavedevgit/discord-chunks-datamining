/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => w
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  l = n(230711),
  c = n(906732),
  u = n(975298),
  d = n(543241),
  f = n(963249),
  _ = n(703656),
  p = n(301766),
  h = n(594174),
  g = n(78839),
  m = n(451478),
  E = n(74538),
  v = n(639119),
  b = n(474936),
  y = n(981631),
  O = n(388032),
  S = n(144236);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function P(e) {
  let {
    isClaimed: t,
    isVerified: i,
    isGift: o,
    subscriptionTier: a,
    trialId: l,
    postSuccessGuild: c,
    onSubscribeModalClose: u,
    analyticsLocations: d,
    premiumModalAnalyticsLocation: _,
    applicationId: p,
    giftMessage: h
  } = e;
  if (!t) {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("69417").then(n.bind(n, 918995));
      return t => {
        var {
          onClose: n
        } = t, i = C(t, ["onClose"]);
        return (0, r.jsx)(e, A(T({}, i), {
          onClose: n
        }))
      }
    });
    return
  }
  if (!i) {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("20102").then(n.bind(n, 444688));
      return t => {
        var {
          onClose: n
        } = t, i = C(t, ["onClose"]);
        return (0, r.jsx)(e, A(T({}, i), {
          onClose: n
        }))
      }
    });
    return
  }
  let g = y.Qqv.BUY;
  null != l ? g = y.Qqv.TRIAL : o && (g = y.Qqv.GIFT), (0, f.Z)({
    isGift: o,
    initialPlanId: null,
    subscriptionTier: a,
    analyticsLocations: d,
    analyticsObject: T({
      object: y.qAy.BUTTON_CTA,
      objectType: g
    }, _),
    trialId: l,
    postSuccessGuild: c,
    onClose: u,
    applicationId: p,
    giftMessage: h
  })
}

function D(e) {
  let {
    ctaSubscriptionSkuId: t,
    currentPremiumType: n,
    isSwitchingDisabled: r,
    subscription: i
  } = e, o = null, a = null;
  if (null != t && t !== b.Si.LEGACY && t !== b.Si.TIER_0 && t !== b.Si.TIER_1 && t !== b.Si.TIER_2) return {
    disabledButtonText: o,
    disabledButtonTooltipText: a
  };
  let s = null != t ? b.y7[(0, E.Wz)(t)] : null,
    l = null != s ? b.$e[s] : null,
    c = null != n ? b.$e[n] : null;
  return r ? a = E.ZP.getSwitchingPlansDisabledMessage(i) : null != c && null != l && l < c ? (o = O.NW.string(O.t["2pG5GR"]), a = O.NW.string(O.t.jXaaRk)) : null != s && null != n && s === n ? (o = O.NW.string(O.t.ymSxh4), a = O.NW.string(O.t.jXaaRk)) : null == s && null != n && n === b.p9.TIER_2 && (a = O.NW.string(O.t.jXaaRk)), {
    disabledButtonText: o,
    disabledButtonTooltipText: a
  }
}
let w = function(e) {
  var {
    isGift: t,
    subscriptionTier: n,
    onClick: i,
    size: f,
    className: I,
    isTrialCTA: N,
    buttonText: R,
    buttonTextClassName: w,
    iconClassName: L,
    postSuccessGuild: x,
    onSubscribeModalClose: M,
    premiumModalAnalyticsLocation: j,
    showIcon: k = !0,
    disableShine: U,
    applicationId: G,
    giftMessage: B,
    overrideDisabledButtonText: F,
    shinyButtonClassName: V,
    showGradient: Z = !1
  } = e, H = C(e, ["isGift", "subscriptionTier", "onClick", "size", "className", "isTrialCTA", "buttonText", "buttonTextClassName", "iconClassName", "postSuccessGuild", "onSubscribeModalClose", "premiumModalAnalyticsLocation", "showIcon", "disableShine", "applicationId", "giftMessage", "overrideDisabledButtonText", "shinyButtonClassName", "showGradient"]);
  let W = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
    Y = (0, a.e7)([m.Z], () => m.Z.isFocused()),
    K = (0, a.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
    {
      fractionalState: z
    } = (0, u.Z)(),
    {
      analyticsLocations: q
    } = (0, c.ZP)(),
    Q = (0, v.N)(),
    X = !t && null != Q && null != n && b.nG[Q.trial_id].skus.includes(n),
    J = e => {
      var r;
      if (e.preventDefault(), null == W) {
        (0, _.uL)(y.Z5c.LOGIN);
        return
      }
      if (null == i || i(e), (null == K ? void 0 : K.status) === y.O0b.ACCOUNT_HOLD) {
        (0, d.A3)(), l.Z.open(y.oAB.PREMIUM), null == M || M(!1);
        return
      }
      P({
        isClaimed: W.isClaimed(),
        isVerified: W.verified,
        isGift: t,
        subscriptionTier: n,
        trialId: X ? null === (r = Q.subscription_trial) || void 0 === r ? void 0 : r.id : null,
        postSuccessGuild: x,
        onSubscribeModalClose: M,
        analyticsLocations: q,
        premiumModalAnalyticsLocation: j,
        applicationId: G,
        giftMessage: B
      })
    };
  if (N) return (0, r.jsxs)(s.zxk, A(T({
    size: f,
    className: I,
    innerClassName: S.premiumSubscribeButton,
    color: s.zxk.Colors.BRAND_INVERTED,
    onClick: J
  }, H), {
    children: [k && (0, r.jsx)(s.SrA, {
      size: "md",
      color: "currentColor",
      className: S.premiumIcon
    }), (0, r.jsx)("span", {
      className: o()(S.buttonText, w),
      children: null != R ? R : O.NW.string(O.t["Gd/XHB"])
    })]
  }));
  if (t) return (0, r.jsxs)(s.zxk, A(T({
    size: f,
    className: I,
    innerClassName: S.giftButton,
    color: s.zxk.Colors.PRIMARY,
    onClick: J
  }, H), {
    children: [(0, r.jsx)(s.OgN, {
      size: "md",
      color: "currentColor",
      className: S.giftIcon
    }), (0, r.jsx)("span", {
      className: o()(S.buttonText, w),
      children: null != R ? R : O.NW.string(O.t.PEjaCw)
    })]
  }));
  let $ = O.NW.string(O.t["2pG5GR"]),
    ee = null != K ? (0, E.Af)(K) : null,
    et = null != ee ? E.ZP.getPremiumType(ee.planId) : null == W ? void 0 : W.premiumType,
    en = n === b.Si.TIER_2 && null != et && [b.p9.TIER_0, b.p9.TIER_1].includes(et);
  en && ($ = O.NW.string(O.t.IJI7ys));
  let er = null != K && E.ZP.isSwitchingPlansDisabled(K, z),
    ei = null != K && K.status !== y.O0b.ACCOUNT_HOLD && !(0, p.Q0)(K.planId) && !en || er,
    eo = ei ? null != F ? F : D({
      ctaSubscriptionSkuId: n,
      currentPremiumType: et,
      isSwitchingDisabled: er,
      subscription: K
    }) : null;

  function ea(e) {
    var t, i;
    return (0, r.jsxs)(s.gtL, A(T({
      disabled: ei,
      onClick: J,
      innerClassName: S.premiumSubscribeButton,
      color: n === b.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
      size: f,
      className: V,
      wrapperClassName: o()({
        [S.tier2Gradient]: Z && n === b.Si.TIER_2,
        [S.tier1Gradient]: Z && n === b.Si.TIER_1
      }, I),
      pauseAnimation: !Y || U
    }, H, e), {
      children: [k && (0, r.jsx)(s.SrA, {
        size: "md",
        color: "currentColor",
        className: o()(S.premiumIcon, L)
      }), (0, r.jsx)("span", {
        className: o()(S.buttonText, w),
        children: null !== (i = null !== (t = null == eo ? void 0 : eo.disabledButtonText) && void 0 !== t ? t : R) && void 0 !== i ? i : $
      })]
    }))
  }
  return (null == eo ? void 0 : eo.disabledButtonTooltipText) != null ? (0, r.jsx)(s.ua7, {
    text: eo.disabledButtonTooltipText,
    children: ea
  }) : ea()
}