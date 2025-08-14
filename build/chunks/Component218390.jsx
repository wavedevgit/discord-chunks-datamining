/** Chunk was on 7384 **/
/** chunk id: 218390, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => eo,
  Z: () => ed
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk37234 = require("./37234.js"),
  Chunk821849 = require("./821849.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk975298 = require("./975298.js"),
  Chunk15640 = require("./15640.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk406128 = require("./406128.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk246946 = require("./246946.js"),
  Chunk78839 = require("./78839.js"),
  Chunk483444 = require("./483444.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk695349 = require("./695349.js"),
  Chunk46062 = require("./46062.js"),
  Chunk717401 = require("./717401.js"),
  Chunk286961 = require("./286961.js"),
  Chunk533525 = require("./533525.js"),
  Chunk232076 = require("./232076.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk504865 = require("./504865.jsx"),
  Chunk179984 = require("./179984.jsx"),
  Chunk386733 = require("./386733.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk458622 = require("./458622.js"),
  Chunk881188 = require("./881188.js"),
  Chunk434691 = require("./434691.js");
let en = "to_premium_home_button",
  ei = "premium home page",
  er = "gifting_button",
  es = "payment modal";

function ea(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: r,
    theme: s
  } = e, a = t.hasActiveTrial, l = t.planIdFromItems === X.Xh.PREMIUM_YEAR_TIER_2, c = n || a, d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0, m = X.GP[t.planIdFromItems], g = w.ZP.formatPriceString(w.ZP.getDefaultPrice(m.id), m.interval), {
    enabled: h
  } = B.T.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  });
  if (c) {
    var f, b, x;
    return (0, i.jsxs)(i.Fragment, {
      children: [(a || !l) && (0, i.jsx)(z.Cy, {
        text: a ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
        className: $.topRimPillWithSparkles,
        colorOptions: (0, u.wj)(s) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (a || !l) && (0, i.jsx)("div", {
        className: $.rimGlowTier2
      }), (0, i.jsx)(p.X6q, {
        variant: "heading-md/normal",
        color: "always-white",
        className: $.trialHeader,
        children: h ? "" : a ? Q.intl.format(Q.t["2CGBrq"], {
          remainingTime: d,
          price: g
        }) : l ? Q.intl.format(Q.t["+qqh6u"], {
          percent: null != (f = null == r ? true : r.percentage) ? f : X.Bo,
          regularPrice: g
        }) : Q.intl.formatToPlainString(Q.t["3Ziutb"], {
          percent: null != (b = null == r ? true : r.percentage) ? b : X.M_,
          regularPrice: g,
          numMonths: null != (x = null == r ? true : r.duration) ? x : X.rt
        })
      })]
    })
  }
  return h ? (0, i.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, i.jsx)(Y.Z, {
    variant: true,
    subscriptionTier: X.Si.TIER_2,
    interval: m.interval
  })
}

function el() {
  let e = (0, Chunk140465.t7)(),
    t = (0, Chunk140465.lr)(),
    n = (0, Chunk410030.ZP)(),
    r = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    s = (0, Chunk975298.Z)(),
    l = (0, Chunk695349.W)(),
    o = null !== Chunk73800 && null !== Chunk73800.planIdFromItems;
  if (!o && !Chunk120356.isFractionalPremiumActive) return null;
  let d = Chunk120356.isFractionalPremiumActive,
    g = null !== Chunk73800 && Chunk73800.hasActiveTrial;
  return (0, Chunk255367.jsxs)("div", {
    className: a()(Chunk458622.tierCard, {
      [Chunk458622.withTier2Rim]: module || Chunk570140
    }),
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk458622.tierInfo,
      children: [(0, Chunk255367.jsx)(Chunk483444.Z, {
        className: Chunk458622.tierTitle
      }), Chunk622535 && !Chunk913527 ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk382791.mn, {
          text: Chunk388032.intl.string(Chunk388032.t.uXF4c3),
          className: Chunk458622.fractionalPremiumTopRimPill,
          colorOptions: Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/normal",
          color: "always-white",
          className: Chunk458622.fractionalPremiumSubheader,
          children: Chunk388032.intl.format(Chunk388032.t.sK7fGh, {
            helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FRACTIONAL_PREMIUM_ABOUT)
          })
        })]
      }) : o ? (0, Chunk255367.jsx)(ea, {
        premiumSubscription: Chunk73800,
        isDiscountApplied: module,
        activeDiscountInfo: exports,
        theme: require
      }) : Chunk913527 ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk382791.Cy, {
          text: Chunk388032.intl.string(Chunk388032.t.qYKftb),
          className: Chunk458622.topRimPillWithSparkles,
          colorOptions: (0, Chunk780384.wj)(require) ? Chunk382791.VE.PREMIUM_TIER_2_WHITE_FILL : Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/normal",
          color: "always-white",
          className: Chunk458622.trialHeader,
          children: Chunk388032.intl.format(Chunk388032.t["/SfHws"], {
            weeks: 1
          })
        })]
      }) : null, (0, Chunk255367.jsx)(Chunk823188.nT, {
        featureSet: Chunk622535 ? Chunk823188.uZ.FRACTIONAL_PREMIUM : Chunk823188.uZ.DEFAULT
      }), Chunk622535 && !o ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk767714.Z, {
          textOptions: {
            textOverride: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.YScQSE) : Chunk388032.intl.string(Chunk388032.t["0b3YRk"]),
            textClassName: Chunk458622.tierCardButtonCTA
          },
          className: Chunk458622.tierCardButton,
          color: Chunk755721.zx.Colors.WHITE,
          disableShine: true,
          showIcon: false
        }), (0, Chunk255367.jsx)(Chunk755721.zx, {
          className: Chunk458622.managePlanButton,
          look: Chunk755721.zx.Looks.OUTLINED,
          color: Chunk755721.zx.Colors.WHITE,
          onClick: () => {
            Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: en,
              target: ei
            }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
          },
          children: (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.VR2iVF) : Chunk388032.intl.string(Chunk388032.t.T1aUAQ)
          })
        })]
      }) : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
          className: Chunk458622.tierCardButton,
          color: Chunk755721.zx.Colors.WHITE,
          onClick: () => {
            Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: en,
              target: ei
            }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
          },
          children: (0, Chunk255367.jsx)(Chunk481060.Text, {
            className: Chunk458622.tierCardButtonCTA,
            variant: "text-sm/medium",
            children: Chunk388032.intl.string(Chunk388032.t.VR2iVF)
          })
        }), (0, Chunk255367.jsx)(Chunk755721.zx, {
          className: Chunk458622.managePlanButton,
          look: Chunk755721.zx.Looks.OUTLINED,
          color: Chunk755721.zx.Colors.WHITE,
          onClick: () => {
            Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: "to_subscriptions_button",
              target: "subscriptions settings"
            }), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
          },
          children: (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: Chunk388032.intl.string(Chunk388032.t["9uDy6O"])
          })
        })]
      })]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk458622.tierImage,
      children: (0, Chunk255367.jsx)("img", {
        className: Chunk458622.tierImage,
        alt: "",
        src: Chunk881188
      })
    })]
  })
}

function eo(e) {
  var t, n;
  let {
    className: r,
    config: s
  } = e, l = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(), o = (0, M.Tl)(null != (t = s.gradientConfig) ? t : true), d = {
    color: null != (n = s.textColor) ? n : "var(--always-white)"
  };
  return (0, i.jsxs)("div", {
    className: a()($.giftCardPromotion, r),
    style: o,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: $.giftImagePromotion,
      "aria-hidden": true,
      src: l
    }), (0, i.jsxs)("div", {
      className: $.giftInfoPromotion,
      children: [null != s.getBackgroundImageUrl && (0, i.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        className: $.giftCardPromotionBannerImage,
        src: s.getBackgroundImageUrl()
      }), (0, i.jsx)(p.X6q, {
        className: $.giftInfoTitlePromotion,
        style: d,
        variant: "text-lg/bold",
        children: s.title()
      }), (0, i.jsx)(p.Text, {
        className: $.giftText,
        style: d,
        variant: "text-sm/medium",
        children: s.body()
      }), null != s.additionalTerm && (0, i.jsx)(p.Text, {
        className: $.giftAdditionalTerm,
        style: d,
        variant: "text-xxs/normal",
        children: s.additionalTerm()
      }), (0, i.jsx)(F.Z, {
        className: $.giftCardButton,
        textOptions: {
          textOverride: Q.intl.string(Q.t.Ve9Ge3),
          textClassName: $.giftButtonCTA
        },
        color: m.zx.Colors.BRAND,
        onClick: () => {
          D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: er,
            target: es
          })
        }
      })]
    })]
  })
}

function ec() {
  var e;
  let t = null == (e = (0, Chunk286961.Z)()) ? true : module.billingSettingsMarketingBanner;
  return null != exports ? (0, Chunk255367.jsx)(eo, {
    config: exports
  }) : (0, Chunk255367.jsxs)("div", {
    className: Chunk458622.giftCard,
    children: [(0, Chunk255367.jsx)("img", {
      className: Chunk458622.giftImage,
      alt: "",
      src: Chunk434691
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk458622.giftInfo,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        className: Chunk458622.giftTitle,
        variant: "heading-xl/extrabold",
        children: Chunk388032.intl.string(Chunk388032.t["3KomGR"])
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk458622.giftText,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.yQ06u7)
      }), (0, Chunk255367.jsx)(Chunk736519.Z, {
        className: a()(Chunk458622.giftCardButton, Chunk458622.giftCardButtonColor),
        textOptions: {
          textOverride: Chunk388032.intl.string(Chunk388032.t.Ve9Ge3),
          textClassName: Chunk458622.giftButtonCTA
        },
        color: Chunk755721.zx.Colors.CUSTOM,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: er,
            target: es
          })
        }
      })]
    })]
  })
}
let ed = function() {
  let e = "PremiumManagementSettings",
    t = (0, Chunk211242.Q)(),
    {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_SETTINGS),
    s = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    a = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    l = (0, Chunk15640.V)(Chunk474936.nS),
    [o, u] = Chunk73800.useState(true),
    m = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    f = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled),
    x = Chunk73800.useRef(null);
  (0, Chunk232076.B)(module);
  let j = (0, Chunk533525.b)(module);
  Chunk73800.useEffect(() => {
    Chunk570140.Z.wait(async () => {
      Chunk37234 || exports || await Promise.all([Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY)]), Chunk780384(false)
    })
  }, [Chunk37234, exports]);
  let [E, y] = Chunk73800.useState(false);
  if (Chunk37234) return (0, Chunk255367.jsx)(Chunk497321.Z, {});
  if (exports) return (0, Chunk255367.jsx)(Chunk89057.c8, {});
  let R = a && null !== Chunk120356 && Chunk913527,
    Z = Chunk755721.fetched && Chunk755721.isFractionalPremiumActive;
  if (!Chunk483444 && !Chunk63063 && !o) return (0, Chunk255367.jsx)(Chunk406128.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.dyq9TU),
    note: null
  });
  if (!Chunk483444 && !Chunk63063 || o) return (0, Chunk255367.jsx)(Chunk481060.$jN, {});
  let w = !!(null == Chunk120356 ? true : Chunk120356.hasActiveTrial);
  return (0, Chunk255367.jsx)(Chunk906732.Gt, {
    value: require,
    children: (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(el, {}), Chunk410030 && (0, Chunk255367.jsx)(Chunk386733.Z, {
          isInSettings: true
        }), (0, Chunk255367.jsx)(ec, {}), (0, Chunk255367.jsx)(Chunk179984.Z, {
          hideCTAs: true,
          headingOverride: Chunk388032.intl.string(Chunk388032.t.dnVvQU),
          hidePill: !Chunk74538,
          selectedPlanColumnClassName: Chunk458622.tier2PlanComparisonTableBackground,
          selectedPlanTier: Chunk474936.p9.TIER_2
        })]
      }), (0, Chunk255367.jsx)(Chunk622535.$, {
        innerRef: Chunk230711,
        onChange: e => {
          e && !E && (D.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), y(true))
        },
        children: (0, Chunk255367.jsx)("div", {
          ref: Chunk230711,
          className: Chunk458622.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}