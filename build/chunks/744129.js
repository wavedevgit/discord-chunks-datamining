/** Chunk was on 54433 **/
t.d(n, {
  IL: () => U,
  UQ: () => N,
  rz: () => B
});
var i = t(255367);
t(73800);
var l = t(120356),
  r = t.n(l),
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
  f = t(594174),
  j = t(78839),
  m = t(756896),
  _ = t(589072),
  L = t(140465),
  g = t(474706),
  y = t(104494),
  E = t(639119),
  S = t(648613),
  v = t(433390),
  Z = t(947390),
  P = t(382791),
  b = t(823188),
  I = t(52741),
  O = t(474936),
  M = t(388032),
  T = t(767594),
  w = t(895601),
  A = t(381126),
  R = t(234286);

function N(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: l,
    className: s,
    isGift: o = !1,
    priceOptions: C
  } = e, c = (0, a.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()), p = (0, a.e7)([f.default], () => f.default.getCurrentUser()), x = (0, E.N)(), h = null == x || null == (n = x.subscription_trial) ? void 0 : n.sku_id, _ = (null == c ? void 0 : c.hasActiveTrial) ? null == p ? void 0 : p.premiumType : null, L = (0, P.y_)(_, h), g = null != L, y = (0, d.ap)((0, u.ZP)());
  return (0, i.jsxs)("div", {
    className: r()(T.card, T.tier0, s, {
      [T.pillMargin]: g
    }),
    children: [g && (0, i.jsx)(Z.E, {
      text: L,
      className: T.pill
    }), (0, i.jsx)(m.Z, {
      className: T.wordmark,
      color: y ? "black" : "white"
    }), (0, i.jsx)(I.Z, {
      isGift: o,
      premiumTier: O.p9.TIER_0,
      offerType: O.C.PREMIUM_TRIAL,
      offerTierMatchesCard: h === O.Si.TIER_0,
      showYearlyPrice: l,
      priceOptions: C,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(b.ql, {
      enablePremiumBrandRefresh: !0
    }), t]
  })
}

function U(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: l,
    featureSet: s = b.uZ.DEFAULT,
    className: o,
    isGift: c = !1,
    isModal: p = !1,
    priceOptions: x,
    showPromotionalGiftBanner: h = !1
  } = e, m = (0, a.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()), S = (0, a.e7)([f.default], () => f.default.getCurrentUser()), v = (0, E.N)(), N = null == v || null == (n = v.subscription_trial) ? void 0 : n.sku_id, U = (null == m ? void 0 : m.hasActiveTrial) ? null == S ? void 0 : S.premiumType : null, k = (0, y.Ng)(), B = (0, L.t7)(), H = null != N || null != U ? O.C.PREMIUM_TRIAL : null != k || B ? O.C.PREMIUM_DISCOUNT : null, F = (0, d.ap)((0, u.ZP)()), G = (0, P.A1)(B, U, k, v, N);
  return (0, i.jsxs)(C.$, {
    color: "nitro-pink",
    className: r()(T.card, o),
    children: [(0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: A,
        alt: "",
        className: T.bigCloud
      }), (0, i.jsx)("img", {
        src: w,
        alt: "",
        className: T.smallCloud
      }), (0, i.jsx)("img", {
        src: R,
        alt: "",
        className: T.wumpus
      })]
    }), {}), (0, i.jsx)(Z.E, {
      text: null != G ? G : M.intl.string(M.t["6bEcYm"]),
      className: T.pill
    }), (0, i.jsx)(_.Z, {
      className: T.wordmark,
      color: F ? "black" : "white"
    }), (0, i.jsx)(I.Z, {
      isGift: c,
      premiumTier: O.p9.TIER_2,
      offerType: H,
      offerTierMatchesCard: N === O.Si.TIER_2 || (0, y.Wp)(k, O.Si.TIER_2),
      showYearlyPrice: l,
      priceOptions: x,
      enablePremiumBrandRefresh: !0,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(b.nT, {
      featureSet: s,
      isModal: p,
      isGift: c,
      enablePremiumBrandRefresh: !0
    }), t, h && (0, i.jsx)(g.f, {})]
  })
}
let k = e => {
  let {
    subscriptionTier: n,
    isReducedMotion: t
  } = e, l = n === O.Si.TIER_2, {
    buttonText: s,
    disabled: a
  } = (0, v.Z)({
    subscriptionTier: n
  }), C = (0, i.jsx)("div", {
    className: T.CTAButton,
    children: (0, i.jsx)(o.z, {
      variant: l ? "expressive" : "secondary",
      size: "md",
      fullWidth: !0,
      text: s,
      disabled: a,
      icon: c.SrA
    })
  }), d = (0, i.jsx)("div", {
    className: r()({
      [T.premiumCardHover]: !t
    }),
    children: (0, i.jsx)(l ? U : N, {
      className: T.applicationHomeCard,
      ctaButton: C
    })
  });
  return a ? d : (0, i.jsx)(S.Z, {
    subscriptionTier: n,
    children: e => {
      let {
        onClick: n
      } = e;
      return (0, i.jsx)(c.P3F, {
        onClick: n,
        style: {
          cursor: "pointer"
        },
        children: d
      })
    }
  })
};

function B(e) {
  let {
    innerRef: n,
    className: t
  } = e, {
    analyticsLocations: l
  } = (0, h.ZP)(x.Z.PREMIUM_MARKETING_TIER_CARD), o = (0, b.rS)(n), C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsx)(h.Gt, {
    value: l,
    children: (0, i.jsxs)("div", {
      className: r()(T.premiumCardsContainer, t),
      children: [(0, i.jsx)(s.X, {
        variant: "display-md",
        color: "header-primary",
        className: T.premiumCardsHeader,
        children: M.intl.string(M.t.vLz3Zm)
      }), (0, i.jsxs)("div", {
        ref: o,
        className: T.premiumCards,
        children: [(0, i.jsx)(k, {
          subscriptionTier: O.Si.TIER_0,
          isReducedMotion: C
        }), (0, i.jsx)(k, {
          subscriptionTier: O.Si.TIER_2,
          isReducedMotion: C
        })]
      })]
    })
  })
}