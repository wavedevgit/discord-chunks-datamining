/** Chunk was on 54433 **/
n.d(t, {
  IL: () => k,
  UQ: () => U,
  rz: () => B
});
var i = n(255367);
n(73800);
var r = n(120356),
  l = n.n(r),
  s = n(409794),
  a = n(442837),
  o = n(680018),
  C = n(304789),
  d = n(780384),
  c = n(481060),
  u = n(410030),
  p = n(607070),
  x = n(100527),
  h = n(906732),
  f = n(594174),
  j = n(78839),
  m = n(756896),
  _ = n(589072),
  L = n(140465),
  y = n(474706),
  E = n(104494),
  g = n(639119),
  b = n(648613),
  S = n(38273),
  v = n(947390),
  O = n(382791),
  w = n(823188),
  Z = n(52741),
  P = n(474936),
  I = n(388032),
  M = n(767594),
  R = n(895601),
  T = n(381126),
  A = n(234286);

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function U(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: r,
    className: s,
    isGift: o = !1,
    priceOptions: C,
    isApplicationHome: c = !1
  } = e, p = (0, a.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()), x = (0, a.e7)([f.default], () => f.default.getCurrentUser()), h = (0, g.N)(), _ = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id, L = (null == p ? void 0 : p.hasActiveTrial) ? null == x ? void 0 : x.premiumType : null, y = (0, O.y_)(L, _), E = null != y, b = (0, d.ap)((0, u.ZP)());
  return (0, i.jsxs)("div", {
    className: l()(M.card, M.tier0, s, {
      [M.pillMargin]: !c && E
    }),
    children: [E && (0, i.jsx)(v.E, {
      text: y,
      className: M.pill
    }), (0, i.jsx)(m.Z, {
      className: M.wordmark,
      color: b ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: o,
      premiumTier: P.p9.TIER_0,
      offerType: P.C.PREMIUM_TRIAL,
      offerTierMatchesCard: _ === P.Si.TIER_0,
      showYearlyPrice: r,
      priceOptions: C,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: M.priceHeader
    }), (0, i.jsx)("hr", {
      className: M.divider
    }), (0, i.jsx)(w.ql, {
      enablePremiumBrandRefresh: !0,
      isApplicationHome: c
    }), n]
  })
}

function k(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: r,
    featureSet: s = w.uZ.DEFAULT,
    className: o,
    isGift: c = !1,
    isModal: p = !1,
    priceOptions: x,
    showPromotionalGiftBanner: h = !1,
    wumpusPosition: m = "inCard",
    isApplicationHome: b = !1
  } = e, S = (0, a.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()), N = (0, a.e7)([f.default], () => f.default.getCurrentUser()), U = (0, g.N)(), k = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id, G = (null == S ? void 0 : S.hasActiveTrial) ? null == N ? void 0 : N.premiumType : null, B = (0, E.Ng)(), H = (0, L.t7)(), F = null != k || null != G ? P.C.PREMIUM_TRIAL : null != B || H ? P.C.PREMIUM_DISCOUNT : null, D = (0, d.ap)((0, u.ZP)()), W = (0, O.A1)(H, G, B, U, k);
  return (0, i.jsxs)(C.$, {
    color: "nitro-pink",
    className: l()(M.card, o),
    children: [(0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: T,
        alt: "",
        className: l()(M.bigCloud, M[m])
      }), (0, i.jsx)("img", {
        src: R,
        alt: "",
        className: l()(M.smallCloud, M[m])
      }), (0, i.jsx)("img", {
        src: A,
        alt: "",
        className: l()(M.wumpus, M[m])
      })]
    }), {}), (0, i.jsx)(v.E, {
      text: null != W ? W : I.intl.string(I.t["6bEcYm"]),
      className: M.pill
    }), (0, i.jsx)(_.Z, {
      className: M.wordmark,
      color: D ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: c,
      premiumTier: P.p9.TIER_2,
      offerType: F,
      offerTierMatchesCard: k === P.Si.TIER_2 || (0, E.Wp)(B, P.Si.TIER_2),
      showYearlyPrice: r,
      priceOptions: x,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: M.priceHeader
    }), (0, i.jsx)("hr", {
      className: M.divider
    }), (0, i.jsx)(w.nT, {
      featureSet: s,
      isModal: p,
      isGift: c,
      enablePremiumBrandRefresh: !0,
      isApplicationHome: b
    }), n, h && (0, i.jsx)(y.f, {})]
  })
}
let G = e => {
  var t, n;
  let {
    subscriptionTier: r,
    isReducedMotion: s,
    tierCardProps: a,
    className: C
  } = e, d = r === P.Si.TIER_2, {
    subscribeButtonProps: u,
    subscriptionTier: p
  } = (0, S.G)({
    subscriptionTier: r,
    variantOverride: d ? "expressive" : "secondary"
  }), {
    disabled: x
  } = u, h = (0, i.jsx)("div", {
    className: M.CTAButton,
    children: (0, i.jsx)(o.z, (t = N({
      size: "md",
      fullWidth: !0
    }, u), n = n = {
      disabled: x
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }), f = (0, i.jsx)("div", {
    className: l()({
      [M.premiumCardHover]: !s
    }),
    children: (0, i.jsx)(d ? k : U, N({
      className: M.applicationHomeCard,
      ctaButton: h,
      showYearlyPrice: !0,
      isApplicationHome: !0
    }, a))
  });
  return (0, i.jsx)("div", {
    className: C,
    children: x ? f : (0, i.jsx)(b.Z, {
      subscriptionTier: p,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, i.jsx)(c.P3F, {
          onClick: t,
          style: {
            cursor: "pointer"
          },
          children: f
        })
      }
    })
  })
};

function B(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: r
  } = (0, h.ZP)(x.Z.PREMIUM_MARKETING_TIER_CARD), o = (0, w.rS)(t), C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsx)(h.Gt, {
    value: r,
    children: (0, i.jsxs)("div", {
      className: l()(M.premiumCardsContainer, n),
      children: [(0, i.jsx)(s.X, {
        variant: "display-md",
        color: "header-primary",
        className: M.premiumCardsHeader,
        children: I.intl.string(I.t.vLz3Zm)
      }), (0, i.jsxs)("div", {
        ref: o,
        className: M.premiumCards,
        children: [(0, i.jsx)(G, {
          subscriptionTier: P.Si.TIER_0,
          isReducedMotion: C,
          className: M.tier0CardOrder
        }), (0, i.jsx)(G, {
          subscriptionTier: P.Si.TIER_2,
          isReducedMotion: C,
          className: M.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}