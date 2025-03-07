/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Cy: () => W,
  Gq: () => X,
  NN: () => er,
  VE: () => Z,
  ZP: () => ei,
  lq: () => J,
  mn: () => H,
  nT: () => ee,
  uZ: () => $,
  wp: () => en
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(913527),
  s = n.n(a),
  l = n(442837),
  c = n(692547),
  u = n(780384),
  d = n(481060),
  f = n(410030),
  _ = n(100527),
  p = n(906732),
  h = n(535322),
  m = n(706454),
  g = n(594174),
  E = n(78839),
  v = n(709586),
  b = n(483444),
  y = n(599250),
  O = n(942659),
  I = n(930153),
  S = n(74538),
  T = n(357355),
  N = n(140465),
  A = n(286961),
  C = n(33052),
  R = n(104494),
  P = n(639119),
  w = n(230916),
  D = n(346497),
  L = n(504865),
  x = n(63802),
  M = n(318990),
  k = n(474936),
  j = n(217702),
  U = n(388032),
  G = n(843142),
  B = n(499317),
  V = n(476945),
  F = n(945182),
  Z = function(e) {
    return e[e.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", e[e.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", e[e.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", e[e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", e[e.PREMIUM_TIER_2_GREY_FILL = 6] = "PREMIUM_TIER_2_GREY_FILL", e
  }({});

function H(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, r.jsx)("div", {
    className: o()(n, G.freeTrialPill, {
      [G.freeTrialPillTier0GradientFill]: 1 === i,
      [G.freeTrialPillTier2GradientFill]: 3 === i,
      [G.freeTrialPillTier2OldGradientFill]: 4 === i,
      [G.lightBackgroundPill]: 5 === i,
      [G.greyBackgroundPill]: 6 === i
    }),
    children: (0, r.jsx)(d.Text, {
      variant: "text-xs/bold",
      className: o()(G.freeTrialPillText, {
        [G.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [G.freeTrialPillTextTier0]: 0 === i,
        [G.freeTrialPillTextTier2]: 2 === i || 6 === i
      }),
      children: t
    })
  })
}

function W(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: a = 2,
    isPillOnBorder: s = !0
  } = e;
  switch (a) {
    case 1:
      t = c.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(x.l_, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(x.Qi, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, r.jsxs)("div", {
    className: o()(i, G.freeTrialPillWithSparkles),
    children: [(0, r.jsx)(x.R9, {
      foreground: G.sparkleStar1,
      color: t
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar2,
      color: t
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar3,
      color: t
    }), (0, r.jsx)(H, {
      text: n,
      colorOptions: a
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar4,
      color: t
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar5,
      color: t
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(i, G.freeTrialPillWithSparkles),
    children: [(0, r.jsx)(H, {
      text: n,
      colorOptions: a
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, r.jsx)(x.R9, {
      foreground: G.sparkleStar2,
      color: t
    })]
  })
}

function Y(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: o,
    textVariant: a,
    isMarketingPageV2: s
  } = e;
  return (0, r.jsxs)("div", {
    className: null != o ? o : G.itemWithWumpus,
    children: [(0, r.jsx)(t, {
      className: G.icon,
      color: "currentColor"
    }), (0, r.jsx)(d.Text, {
      variant: null != a ? a : "text-md/normal",
      color: s ? "currentColor" : "always-white",
      children: n
    }), i ? (0, r.jsx)(h.Z, {
      className: G.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function K(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: o
  } = e, a = (0, w.A)(i);
  return (0, r.jsx)(r.Fragment, {
    children: U.NW.format(U.t.sJTwHR, {
      numMonths: null !== (t = o.discount.user_usage_limit) && void 0 !== t ? t : k.rt,
      discountedPrice: a,
      regularPrice: n
    })
  })
}

function z(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: o,
    showYearlyPrice: a,
    priceOptions: c,
    textVariant: u,
    className: f,
    isMarketingPageV2: _
  } = e, p = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), h = (0, l.e7)([g.default], () => g.default.getCurrentUser()), m = (0, N.t7)(), v = (0, N.lr)(), b = n === k.p9.TIER_0 ? k.Si.TIER_0 : k.Si.TIER_2, y = (null == p ? void 0 : p.trialId) != null ? null == h ? void 0 : h.premiumType : m ? k.p9.TIER_2 : null, O = (0, P.N)(), I = (0, R.Ng)(), T = null == O ? void 0 : O.subscription_trial;
  if (!_ && !t && null != y && n === y && null != p && null != p.planIdFromItems) {
    let e = null != p.trialEndsAt ? s()(null == p ? void 0 : p.trialEndsAt).diff(s()(), "d") : 0,
      t = k.GP[p.planIdFromItems],
      n = S.ZP.formatPriceString(S.ZP.getDefaultPrice(t.id), t.interval),
      i = () => {
        var t, r, i;
        return 0 === o ? U.NW.format(U.t["2CGBrq"], {
          remainingTime: e,
          price: n
        }) : p.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2 ? U.NW.format(U.t["+qqh6u"], {
          percent: null !== (t = null == v ? void 0 : v.percentage) && void 0 !== t ? t : k.Bo,
          regularPrice: n
        }) : U.NW.formatToPlainString(U.t["3Ziutb"], {
          percent: null !== (r = null == v ? void 0 : v.percentage) && void 0 !== r ? r : k.M_,
          regularPrice: n,
          numMonths: null !== (i = null == v ? void 0 : v.duration) && void 0 !== i ? i : k.rt
        })
      };
    return (0, r.jsx)(d.X6q, {
      variant: "heading-md/normal",
      color: "always-white",
      className: G.trialHeader,
      children: i()
    })
  }
  if (!_ && !t && i) {
    let e = S.ZP.formatPriceString(S.ZP.getDefaultPrice(n === k.p9.TIER_0 ? k.Xh.PREMIUM_MONTH_TIER_0 : k.Xh.PREMIUM_MONTH_TIER_2), k.rV.MONTH);
    if (0 === o) {
      var A, C, w, D;
      return (0, r.jsx)(d.X6q, {
        variant: "heading-md/normal",
        color: "always-white",
        className: G.trialHeader,
        children: U.NW.format(U.t["9vyovr"], {
          planName: (0, S.aq)(null !== (C = k.IW[null !== (A = null == T ? void 0 : T.sku_id) && void 0 !== A ? A : k.Si.NONE]) && void 0 !== C ? C : k.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, S.if)({
            intervalType: null !== (w = null == T ? void 0 : T.interval) && void 0 !== w ? w : k.rV.DAY,
            intervalCount: null !== (D = null == T ? void 0 : T.interval_count) && void 0 !== D ? D : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != I) return (0, r.jsx)(d.X6q, {
      variant: "heading-md/normal",
      color: "always-white",
      className: G.trialHeader,
      children: (0, r.jsx)(K, {
        defaultPriceString: e,
        subscriptionPlan: k.Xh.PREMIUM_MONTH_TIER_2,
        discountOffer: I
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(L.Z, {
      subscriptionTier: b,
      isGift: t,
      className: null != f ? f : G.price,
      priceOptions: c,
      variant: u,
      isMarketingPageV2: _
    }), a && (0, r.jsx)(L.Z, {
      subscriptionTier: b,
      interval: k.rV.YEAR,
      className: null != f ? f : G.price,
      isGift: t,
      priceOptions: c,
      variant: u,
      isMarketingPageV2: _
    })]
  })
}

function q(e) {
  let {
    isMarketingPageV2: t
  } = e;
  return t ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y, {
      Icon: d.dz2,
      text: U.NW.string(U.t.KjrZ8f),
      className: G.itemV2,
      textVariant: "text-sm/normal",
      isMarketingPageV2: !0
    }), (0, r.jsx)(Y, {
      Icon: d.dz2,
      text: U.NW.formatToPlainString(U.t.p8QVLS, {
        maxUploadPremium: (0, S.v9)(k.p9.TIER_0, {
          useSpace: !1
        })
      }),
      className: G.itemV2,
      textVariant: "text-sm/normal",
      isMarketingPageV2: !0
    }), (0, r.jsx)(Y, {
      Icon: d.dz2,
      text: U.NW.string(U.t.Uukj4u),
      className: G.itemV2,
      textVariant: "text-sm/normal",
      isMarketingPageV2: !0
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y, {
      Icon: d.rG2,
      text: U.NW.formatToPlainString(U.t.p8QVLS, {
        maxUploadPremium: (0, S.v9)(k.p9.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, r.jsx)(Y, {
      Icon: d.EO4,
      text: U.NW.string(U.t.KjrZ8f)
    }), (0, r.jsx)(Y, {
      Icon: d.Pt5,
      text: U.NW.string(U.t.taMwg4)
    }), (0, r.jsx)(Y, {
      Icon: d.SrA,
      text: U.NW.string(U.t["8ukxAQ"])
    })]
  })
}

function Q(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: a,
    isGift: s = !1,
    priceOptions: c
  } = e, u = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), d = (0, P.N)(), f = null == d ? void 0 : null === (t = d.subscription_trial) || void 0 === t ? void 0 : t.sku_id, _ = (null == u ? void 0 : u.trialId) != null, p = null != f || _;
  return (0, r.jsxs)("div", {
    className: o()(G.tier0, G.card, G.tier0V2Background, a, {
      [G.withTier0Rim]: !s && p,
      [G.withCardHover]: !s && p
    }),
    children: [(0, r.jsx)("img", {
      src: B,
      className: G.v2starBackground,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(O.Z, {
          className: o()(G.title, G.tier0V2Title)
        }), (0, r.jsx)(z, {
          isGift: s,
          premiumTier: k.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: f === k.Si.TIER_0,
          showYearlyPrice: i,
          priceOptions: c,
          textVariant: "heading-xl/normal",
          isMarketingPageV2: !0
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(q, {
          isMarketingPageV2: !0
        })
      })]
    }), n]
  })
}

function X(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: a,
    className: s,
    isGift: c = !1,
    priceOptions: u
  } = e, f = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), _ = (0, l.e7)([g.default], () => g.default.getCurrentUser()), p = (0, P.N)(), h = null == p ? void 0 : null === (t = p.subscription_trial) || void 0 === t ? void 0 : t.sku_id, m = (null == f ? void 0 : f.trialId) != null, v = (null == f ? void 0 : f.trialId) != null ? null == _ ? void 0 : _.premiumType : null, b = null != h || m;
  return (0, r.jsxs)("div", {
    className: o()(G.tier0, G.card, s, {
      [G.withTier0Rim]: !c && b,
      [G.withCardHover]: !c && b
    }),
    children: [h === k.Si.TIER_0 ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: U.NW.string(U.t.IBYG5e),
        className: G.topRimPill,
        colorOptions: 0
      }), (0, r.jsx)("div", {
        className: G.rimGlowTier0
      })]
    }) : null, n ? (0, r.jsx)("div", {
      className: G.wumpusImageContainer,
      children: (0, r.jsx)(d.Eep, {
        src: V,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1,
        imageClassName: G.wumpusImage
      })
    }) : null, c || h !== k.Si.TIER_0 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: U.NW.string(U.t.IBYG5e),
        className: G.topRimPill,
        colorOptions: 0
      }), (0, r.jsx)("div", {
        className: G.rimGlowTier0
      })]
    }), c || v !== k.p9.TIER_0 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: U.NW.string(U.t.qYKftb),
        className: G.topRimPill,
        colorOptions: 0
      }), (0, r.jsx)("div", {
        className: G.rimGlowTier0
      })]
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(y.Z, {
          className: o()(G.title, G.tier0Title)
        }), (0, r.jsx)(z, {
          isGift: c,
          premiumTier: k.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: h === k.Si.TIER_0,
          showYearlyPrice: a,
          priceOptions: u
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(q, {})
      })]
    }), c || h !== k.Si.TIER_0 ? null : (0, r.jsx)(x.t, {
      tier: k.p9.TIER_0
    }), i]
  })
}

function J(e) {
  var t;
  let {
    showWumpus: n,
    showYearlyPrice: i,
    className: a,
    isGift: s = !1,
    priceOptions: l
  } = e, c = (0, P.N)(), u = null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.sku_id;
  return (0, r.jsxs)("div", {
    className: o()(G.tier0, G.card, a),
    children: [n ? (0, r.jsx)("div", {
      className: G.wumpusImageContainer,
      children: (0, r.jsx)(d.Eep, {
        src: V,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1,
        imageClassName: G.wumpusImage
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(y.Z, {
          className: o()(G.title, G.tier0Title)
        }), (0, r.jsx)(z, {
          isGift: s,
          premiumTier: k.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: u === k.Si.TIER_0,
          showYearlyPrice: i,
          priceOptions: l
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(Y, {
          Icon: d.rG2,
          text: U.NW.formatToPlainString(U.t.p8QVLS, {
            maxUploadPremium: (0, S.v9)(k.p9.TIER_0, {
              useSpace: !1
            })
          })
        }), (0, r.jsx)(Y, {
          Icon: d.EO4,
          text: U.NW.string(U.t.KjrZ8f)
        }), (0, r.jsx)(Y, {
          Icon: d.V3v,
          text: U.NW.string(U.t.OuItFh)
        }), (0, r.jsx)(Y, {
          Icon: d.SrA,
          text: U.NW.string(U.t["8ukxAQ"])
        })]
      })]
    })]
  })
}
var $ = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.BOOSTING = 1] = "BOOSTING", e[e.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", e[e.V2 = 3] = "V2", e
}({});

function ee(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, o = (0, l.e7)([m.default], () => m.default.locale), a = (0, l.e7)([T.Z], () => T.Z.affinities), s = n && !i && a.length > 0;
  switch (t) {
    case 3:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/bold",
          className: G.tier2V2Subheader,
          children: U.NW.string(U.t.AozD3d)
        }), (0, r.jsx)(Y, {
          Icon: d.dz2,
          text: U.NW.string(U.t.kpMomJ),
          className: G.itemV2,
          textVariant: "text-sm/normal",
          isMarketingPageV2: !0
        }), (0, r.jsx)(Y, {
          Icon: d.dz2,
          text: U.NW.formatToPlainString(U.t.p8QVLS, {
            maxUploadPremium: (0, S.v9)(k.p9.TIER_2, {
              useSpace: !1
            })
          }),
          className: G.itemV2,
          textVariant: "text-sm/normal",
          isMarketingPageV2: !0
        }), (0, r.jsx)(Y, {
          Icon: d.dz2,
          text: U.NW.string(U.t.W180bW),
          className: G.itemV2,
          textVariant: "text-sm/normal",
          isMarketingPageV2: !0
        }), (0, r.jsx)(Y, {
          Icon: d.dz2,
          text: U.NW.string(U.t.zTk8Ul),
          className: G.itemV2,
          textVariant: "text-sm/normal",
          isMarketingPageV2: !0
        }), s && (0, r.jsx)(M.Z, {})]
      });
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y, {
          Icon: (0, d.GSL)(v.Z),
          text: U.NW.formatToPlainString(U.t.T9RTr6, {
            numBoosts: k.cb,
            percentageOff: (0, I.T3)(o, k.Rr / 100)
          })
        }), (0, r.jsx)(Y, {
          Icon: d.rG2,
          text: U.NW.formatToPlainString(U.t.p8QVLS, {
            maxUploadPremium: (0, S.v9)(k.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, r.jsx)(Y, {
          Icon: d.EO4,
          text: U.NW.string(U.t.KjrZ8f)
        }), (0, r.jsx)(Y, {
          Icon: d.hGI,
          text: U.NW.string(U.t.W180bW)
        }), (0, r.jsx)(Y, {
          Icon: d.kYE,
          text: U.NW.string(U.t.CNIZf3)
        })]
      });
    case 2:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y, {
          Icon: d.rG2,
          text: U.NW.formatToPlainString(U.t.p8QVLS, {
            maxUploadPremium: (0, S.v9)(k.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, r.jsx)(Y, {
          Icon: d.EO4,
          text: U.NW.string(U.t.KjrZ8f)
        }), (0, r.jsx)(Y, {
          Icon: d.Pt5,
          text: U.NW.string(U.t.taMwg4)
        }), (0, r.jsx)(Y, {
          Icon: d.hGI,
          text: U.NW.string(U.t.W180bW)
        }), (0, r.jsx)(Y, {
          Icon: d.kYE,
          text: U.NW.string(U.t.CNIZf3)
        })]
      });
    default:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y, {
          Icon: d.rG2,
          text: U.NW.formatToPlainString(U.t.p8QVLS, {
            maxUploadPremium: (0, S.v9)(k.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, r.jsx)(Y, {
          Icon: d.EO4,
          text: U.NW.string(U.t.KjrZ8f)
        }), (0, r.jsx)(Y, {
          Icon: d.Pt5,
          text: U.NW.string(U.t.taMwg4)
        }), (0, r.jsx)(Y, {
          Icon: d.hGI,
          text: U.NW.string(U.t.W180bW)
        }), (0, r.jsx)(Y, {
          Icon: (0, d.GSL)(v.Z),
          text: U.NW.string(U.t.cdfuUV)
        }), (0, r.jsx)(Y, {
          Icon: d.kYE,
          text: U.NW.string(U.t.CNIZf3)
        }), s && (0, r.jsx)(M.Z, {})]
      })
  }
}

function et(e) {
  var t, n, i;
  let {
    ctaButton: a,
    showYearlyPrice: s,
    featureSet: l = 0,
    className: c,
    isGift: u = !1,
    isModal: f = !1,
    priceOptions: _,
    showPromotionalGiftBanner: p = !1
  } = e, h = (0, P.N)(), m = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id, g = (0, N.Nx)(), E = (0, R.Ng)(), v = null != h ? 0 : null != E ? 1 : null, y = (0, D.Vi)(), O = !u && g, I = null === (n = (0, A.Z)()) || void 0 === n ? void 0 : n.planSelection, S = null == I ? void 0 : null === (i = I.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(I), T = (0, D.W1)();
  return (0, r.jsxs)("div", {
    className: o()(G.card, G.tier2, G.tier2V2Background, c, {
      [G.withTier2Rim]: O,
      [G.withCardHover]: O,
      [G.withPromotionalGradientBanner]: p
    }),
    children: [p && null != S && (0, r.jsx)("img", {
      className: G.promotionalBackgroundImage,
      alt: "",
      src: S
    }), (0, r.jsx)("div", {
      className: G.tier2SideGradient
    }), (0, r.jsx)("img", {
      src: B,
      className: G.v2starBackground,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(b.Z, {
          className: o()(G.title, G.tier2V2Title)
        }), !u && m !== k.Si.TIER_2 && y && (0, r.jsx)("div", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-xs/bold",
            className: G.freeTrialPillInline,
            children: T
          })
        }), (0, r.jsx)(z, {
          isGift: u,
          premiumTier: k.p9.TIER_2,
          offerType: v,
          offerTierMatchesCard: m === k.Si.TIER_2 || (0, R.Wp)(E, k.Si.TIER_2),
          showYearlyPrice: s,
          priceOptions: _,
          textVariant: "heading-xl/normal",
          isMarketingPageV2: !0
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(ee, {
          featureSet: l,
          isModal: f,
          isGift: u
        })
      })]
    }), a, p && (0, r.jsx)(C.K, {})]
  })
}

function en(e) {
  var t, n, i;
  let {
    showWumpus: a,
    ctaButton: s,
    showYearlyPrice: c,
    featureSet: _ = 0,
    className: p,
    isGift: h = !1,
    isModal: m = !1,
    priceOptions: v,
    showPromotionalGiftBanner: y = !1
  } = e, O = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), I = (0, l.e7)([g.default], () => g.default.getCurrentUser()), S = (0, P.N)(), T = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, w = (null == O ? void 0 : O.trialId) != null ? null == I ? void 0 : I.premiumType : null, L = (0, N.Nx)(), M = (0, R.Ng)(), B = (0, N.t7)(), V = null != T || null != w ? 0 : null != M || B ? 1 : null, Z = (0, D.Vi)(), H = !h && L, Y = null === (n = (0, A.Z)()) || void 0 === n ? void 0 : n.planSelection, K = null == Y ? void 0 : null === (i = Y.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(Y), q = (0, D.W1)(), Q = (0, u.ap)((0, f.ZP)()), X = Q ? 5 : 2, J = U.NW.string(U.t.IBYG5e);
  (null == S ? void 0 : S.trial_id) === k.a7 && (J = U.NW.string(U.t.gtNqJS));
  let $ = H && !Q ? G.rimGlowTier2 : void 0;
  return (0, r.jsxs)("div", {
    className: o()(G.card, G.tier2, p, {
      [G.withTier2Rim]: H,
      [G.withCardHover]: H,
      [G.withPromotionalGradientBanner]: y
    }),
    children: [y && null !== K && (0, r.jsx)("img", {
      className: G.promotionalBackgroundImage,
      alt: "",
      src: K
    }), !h && null != M && (0, R.Wp)(M, k.Si.TIER_2) && void 0 !== M.discount.amount ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: B ? U.NW.string(U.t.EyjDRE) : U.NW.formatToPlainString(U.t.iiLbvr, {
          percent: M.discount.amount
        }),
        className: G.topRimPill,
        colorOptions: X
      }), (0, r.jsx)("div", {
        className: $
      })]
    }) : null, h || T !== k.Si.TIER_2 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: J,
        className: G.topRimPill,
        colorOptions: X
      }), (0, r.jsx)("div", {
        className: $
      })]
    }), h || w !== k.p9.TIER_2 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: U.NW.string(U.t.qYKftb),
        className: G.topRimPill,
        colorOptions: X
      }), (0, r.jsx)("div", {
        className: $
      })]
    }), !h && B && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {
        text: U.NW.string(U.t.EyjDRE),
        className: G.topRimPill,
        colorOptions: X
      }), (0, r.jsx)("div", {
        className: $
      })]
    }), a ? (0, r.jsx)("div", {
      className: G.wumpusImageContainer,
      children: (0, r.jsx)(d.Eep, {
        src: F,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1,
        imageClassName: G.wumpusImage
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(b.Z, {
          className: o()(G.title, G.tier2Title)
        }), !h && T !== k.Si.TIER_2 && Z && (0, r.jsx)("div", {
          children: (0, r.jsx)(d.Text, {
            variant: "text-xs/bold",
            className: G.freeTrialPillInline,
            children: q
          })
        }), (0, r.jsx)(z, {
          isGift: h,
          premiumTier: k.p9.TIER_2,
          offerType: V,
          offerTierMatchesCard: T === k.Si.TIER_2 || (0, R.Wp)(M, k.Si.TIER_2),
          showYearlyPrice: c,
          priceOptions: v
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(ee, {
          featureSet: _,
          isModal: m,
          isGift: h
        })
      })]
    }), h || T !== k.Si.TIER_2 && null == M ? null : (0, r.jsx)(x.t, {
      tier: k.p9.TIER_2
    }), s, y && (0, r.jsx)(C.K, {})]
  })
}
var er = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.MARKETING_PAGE_V2 = 1] = "MARKETING_PAGE_V2", e
}({});

function ei(e) {
  let {
    variant: t,
    showWumpus: n,
    tier0CTAButton: i,
    tier2CTAButton: a,
    className: s
  } = e, {
    analyticsLocations: l
  } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD), c = 1 === t;
  return (0, r.jsxs)(p.Gt, {
    value: l,
    children: [c && (0, r.jsx)(d.X6q, {
      className: G.v2TierCardSectionHeader,
      variant: "display-md",
      color: "header-primary",
      children: U.NW.string(U.t.vLz3Zm)
    }), (0, r.jsxs)("div", {
      className: o()(G.premiumCards, s),
      children: [c ? (0, r.jsx)(Q, {
        ctaButton: i
      }) : (0, r.jsx)(X, {
        showWumpus: n,
        ctaButton: i
      }), c ? (0, r.jsx)(et, {
        ctaButton: a,
        featureSet: 3
      }) : (0, r.jsx)(en, {
        showWumpus: n,
        ctaButton: a
      })]
    })]
  })
}