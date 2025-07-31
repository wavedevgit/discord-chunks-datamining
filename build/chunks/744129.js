/** Chunk was on 54433 **/
t.d(n, {
  IL: () => k,
  UQ: () => U,
  rz: () => H
});
var i = t(255367);
t(73800);
var r = t(120356),
  l = t.n(r),
  s = t(409794),
  a = t(442837),
  o = t(680018),
  C = t(304789),
  d = t(780384),
  c = t(481060),
  u = t(410030),
  p = t(607070),
  x = t(100527),
  h = t(906732),
  j = t(594174),
  f = t(78839),
  m = t(756896),
  _ = t(589072),
  L = t(140465),
  g = t(474706),
  y = t(104494),
  E = t(639119),
  S = t(648613),
  v = t(38273),
  b = t(947390),
  P = t(382791),
  O = t(823188),
  Z = t(52741),
  I = t(474936),
  M = t(388032),
  T = t(767594),
  w = t(895601),
  A = t(381126),
  R = t(234286);

function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = i
    })
  }
  return e
}

function U(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: r,
    className: s,
    isGift: o = !1,
    priceOptions: C,
    isApplicationHome: c = !1
  } = e, p = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()), x = (0, a.e7)([j.default], () => j.default.getCurrentUser()), h = (0, E.N)(), _ = null == h || null == (n = h.subscription_trial) ? void 0 : n.sku_id, L = (null == p ? void 0 : p.hasActiveTrial) ? null == x ? void 0 : x.premiumType : null, g = (0, P.y_)(L, _), y = null != g, S = (0, d.ap)((0, u.ZP)());
  return (0, i.jsxs)("div", {
    className: l()(T.card, T.tier0, s, {
      [T.pillMargin]: !c && y
    }),
    children: [y && (0, i.jsx)(b.E, {
      text: g,
      className: T.pill
    }), (0, i.jsx)(m.Z, {
      className: T.wordmark,
      color: S ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: o,
      premiumTier: I.p9.TIER_0,
      offerType: I.C.PREMIUM_TRIAL,
      offerTierMatchesCard: _ === I.Si.TIER_0,
      showYearlyPrice: r,
      priceOptions: C,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(O.ql, {
      enablePremiumBrandRefresh: !0,
      isApplicationHome: c
    }), t]
  })
}

function k(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: r,
    featureSet: s = O.uZ.DEFAULT,
    className: o,
    isGift: c = !1,
    isModal: p = !1,
    priceOptions: x,
    showPromotionalGiftBanner: h = !1,
    wumpusPosition: m = "inCard",
    isApplicationHome: S = !1
  } = e, v = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()), N = (0, a.e7)([j.default], () => j.default.getCurrentUser()), U = (0, E.N)(), k = null == U || null == (n = U.subscription_trial) ? void 0 : n.sku_id, B = (null == v ? void 0 : v.hasActiveTrial) ? null == N ? void 0 : N.premiumType : null, H = (0, y.Ng)(), F = (0, L.t7)(), G = null != k || null != B ? I.C.PREMIUM_TRIAL : null != H || F ? I.C.PREMIUM_DISCOUNT : null, D = (0, d.ap)((0, u.ZP)()), z = (0, P.A1)(F, B, H, U, k);
  return (0, i.jsxs)(C.$, {
    color: "nitro-pink",
    className: l()(T.card, o),
    children: [(0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: A,
        alt: "",
        className: l()(T.bigCloud, T[m])
      }), (0, i.jsx)("img", {
        src: w,
        alt: "",
        className: l()(T.smallCloud, T[m])
      }), (0, i.jsx)("img", {
        src: R,
        alt: "",
        className: l()(T.wumpus, T[m])
      })]
    }), {}), (0, i.jsx)(b.E, {
      text: null != z ? z : M.intl.string(M.t["6bEcYm"]),
      className: T.pill
    }), (0, i.jsx)(_.Z, {
      className: T.wordmark,
      color: D ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: c,
      premiumTier: I.p9.TIER_2,
      offerType: G,
      offerTierMatchesCard: k === I.Si.TIER_2 || (0, y.Wp)(H, I.Si.TIER_2),
      showYearlyPrice: r,
      priceOptions: x,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(O.nT, {
      featureSet: s,
      isModal: p,
      isGift: c,
      enablePremiumBrandRefresh: !0,
      isApplicationHome: S
    }), t, h && (0, i.jsx)(g.f, {})]
  })
}
let B = e => {
  var n, t;
  let {
    subscriptionTier: r,
    isReducedMotion: s,
    tierCardProps: a,
    className: C
  } = e, d = r === I.Si.TIER_2, {
    subscribeButtonProps: u,
    subscriptionTier: p
  } = (0, v.G)({
    subscriptionTier: r,
    variantOverride: d ? "expressive" : "secondary"
  }), {
    disabled: x
  } = u, h = (0, i.jsx)("div", {
    className: T.CTAButton,
    children: (0, i.jsx)(o.z, (n = N({
      size: "md",
      fullWidth: !0
    }, u), t = t = {
      disabled: x
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t.push.apply(t, i)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  }), j = (0, i.jsx)("div", {
    className: l()({
      [T.premiumCardHover]: !s
    }),
    children: (0, i.jsx)(d ? k : U, N({
      className: T.applicationHomeCard,
      ctaButton: h,
      showYearlyPrice: !0,
      isApplicationHome: !0
    }, a))
  });
  return (0, i.jsx)("div", {
    className: C,
    children: x ? j : (0, i.jsx)(S.Z, {
      subscriptionTier: p,
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, i.jsx)(c.P3F, {
          onClick: n,
          style: {
            cursor: "pointer"
          },
          children: j
        })
      }
    })
  })
};

function H(e) {
  let {
    innerRef: n,
    className: t
  } = e, {
    analyticsLocations: r
  } = (0, h.ZP)(x.Z.PREMIUM_MARKETING_TIER_CARD), o = (0, O.rS)(n), C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsx)(h.Gt, {
    value: r,
    children: (0, i.jsxs)("div", {
      className: l()(T.premiumCardsContainer, t),
      children: [(0, i.jsx)(s.X, {
        variant: "display-md",
        color: "header-primary",
        className: T.premiumCardsHeader,
        children: M.intl.string(M.t.vLz3Zm)
      }), (0, i.jsxs)("div", {
        ref: o,
        className: T.premiumCards,
        children: [(0, i.jsx)(B, {
          subscriptionTier: I.Si.TIER_0,
          isReducedMotion: C,
          className: T.tier0CardOrder
        }), (0, i.jsx)(B, {
          subscriptionTier: I.Si.TIER_2,
          isReducedMotion: C,
          className: T.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}