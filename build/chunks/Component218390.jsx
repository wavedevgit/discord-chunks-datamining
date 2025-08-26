/** Chunk was on web.js **/
/** chunk id: 218390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => ef,
  Z: () => ep
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
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
  Chunk70097 = require("./70097.jsx"),
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
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk533525 = require("./533525.js"),
  Chunk232076 = require("./232076.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk117791 = require("./117791.jsx"),
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
let ei = "to_subscriptions_button",
  eo = "subscriptions settings",
  ea = "to_premium_home_button",
  es = "premium home page",
  el = "gifting_button",
  ec = "payment modal";

function eu(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: o
  } = e, a = t.hasActiveTrial, s = t.planIdFromItems === J.Xh.PREMIUM_YEAR_TIER_2, c = n || a, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, f = J.GP[t.planIdFromItems], p = M.ZP.formatPriceString(M.ZP.getDefaultPrice(f.id), f.interval), {
    enabled: h
  } = G.T.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), m = () => {
    var e, t, n;
    return h ? "" : a ? ee.intl.format(ee.t["2CGBrq"], {
      remainingTime: u,
      price: p
    }) : s ? ee.intl.format(ee.t["+qqh6u"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : J.Bo,
      regularPrice: p
    }) : ee.intl.formatToPlainString(ee.t["3Ziutb"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : J.M_,
      regularPrice: p,
      numMonths: null != (n = null == i ? true : i.duration) ? n : J.rt
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(a || !s) && (0, r.jsx)(K.Cy, {
      text: a ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
      className: et.topRimPillWithSparkles,
      colorOptions: (0, d.wj)(o) ? K.VE.PREMIUM_TIER_2_WHITE_FILL : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (a || !s) && (0, r.jsx)("div", {
      className: et.rimGlowTier2
    }), (0, r.jsx)(_.X6q, {
      variant: "heading-md/normal",
      color: "always-white",
      className: et.trialHeader,
      children: m()
    })]
  }) : h ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(q.Z, {
    variant: true,
    subscriptionTier: J.Si.TIER_2,
    interval: f.interval
  })
}

function ed() {
  let e = (0, Chunk140465.t7)(),
    t = (0, Chunk140465.lr)(),
    n = (0, Chunk410030.ZP)(),
    i = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    o = (0, Chunk975298.Z)(),
    s = (0, Chunk695349.W)(),
    l = null !== Chunk647438 && null !== Chunk647438.planIdFromItems;
  if (!l && !Chunk120356.isFractionalPremiumActive) return null;
  let u = Chunk120356.isFractionalPremiumActive,
    p = null !== Chunk647438 && Chunk647438.hasActiveTrial,
    h = module || Chunk570140,
    g = () => Chunk622535 && !Chunk913527 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk382791.mn, {
        text: Chunk388032.intl.string(Chunk388032.t.uXF4c3),
        className: Chunk458622.fractionalPremiumTopRimPill,
        colorOptions: Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk458622.fractionalPremiumSubheader,
        children: Chunk388032.intl.format(Chunk388032.t.sK7fGh, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : l ? (0, Chunk951288.jsx)(eu, {
      premiumSubscription: Chunk647438,
      isDiscountApplied: module,
      activeDiscountInfo: exports,
      theme: require
    }) : Chunk913527 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk382791.Cy, {
        text: Chunk388032.intl.string(Chunk388032.t.qYKftb),
        className: Chunk458622.topRimPillWithSparkles,
        colorOptions: (0, Chunk780384.wj)(require) ? Chunk382791.VE.PREMIUM_TIER_2_WHITE_FILL : Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk458622.trialHeader,
        children: Chunk388032.intl.format(Chunk388032.t["/SfHws"], {
          weeks: 1
        })
      })]
    }) : null,
    b = () => Chunk622535 && !l ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk767714.Z, {
        textOptions: {
          textOverride: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.YScQSE) : Chunk388032.intl.string(Chunk388032.t["0b3YRk"]),
          textClassName: Chunk458622.tierCardButtonCTA
        },
        className: Chunk458622.tierCardButton,
        color: Chunk755721.zx.Colors.WHITE,
        disableShine: true,
        showIcon: false
      }), (0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk458622.managePlanButton,
        look: Chunk755721.zx.Looks.OUTLINED,
        color: Chunk755721.zx.Colors.WHITE,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ea,
            target: es
          }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.VR2iVF) : Chunk388032.intl.string(Chunk388032.t.T1aUAQ)
        })
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk458622.tierCardButton,
        color: Chunk755721.zx.Colors.WHITE,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ea,
            target: es
          }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk458622.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: Chunk388032.intl.string(Chunk388032.t.VR2iVF)
        })
      }), (0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk458622.managePlanButton,
        look: Chunk755721.zx.Looks.OUTLINED,
        color: Chunk755721.zx.Colors.WHITE,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ei,
            target: eo
          }), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
        },
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: Chunk388032.intl.string(Chunk388032.t["9uDy6O"])
        })
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    className: a()(Chunk458622.tierCard, {
      [Chunk458622.withTier2Rim]: Chunk355467
    }),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk458622.tierInfo,
      children: [(0, Chunk951288.jsx)(Chunk483444.Z, {
        className: Chunk458622.tierTitle
      }), Chunk821849(), (0, Chunk951288.jsx)(Chunk823188.nT, {
        featureSet: Chunk622535 ? Chunk823188.uZ.FRACTIONAL_PREMIUM : Chunk823188.uZ.DEFAULT
      }), Chunk497321()]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk458622.tierImage,
      children: (0, Chunk951288.jsx)("img", {
        className: Chunk458622.tierImage,
        alt: "",
        src: Chunk881188
      })
    })]
  })
}

function ef(e) {
  var t, n;
  let {
    className: i,
    config: o
  } = e, s = (0, c.e7)([O.Z], () => O.Z.useReducedMotion) ? o.getStaticImageUrl() : o.getAnimatedImageUrl(), l = null != o.getBackgroundImageUrl ? o.getBackgroundImageUrl() : true, u = (0, Z.Tl)(null != (t = o.gradientConfig) ? t : true), d = {
    color: null != (n = o.textColor) ? n : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: a()(et.giftCardPromotion, i),
    style: null != l ? {
      backgroundImage: "url(".concat(l, ")")
    } : u,
    children: [(0, r.jsx)(N.Z, {
      className: et.videoAsset,
      src: s,
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true
    }), (0, r.jsxs)("div", {
      className: et.giftInfoPromotion,
      children: [(0, r.jsx)(_.X6q, {
        className: et.giftInfoTitlePromotion,
        style: d,
        variant: "text-lg/bold",
        children: o.title()
      }), (0, r.jsx)(_.Text, {
        className: et.giftText,
        style: d,
        variant: "text-sm/medium",
        children: o.body()
      }), null != o.additionalTerm && (0, r.jsx)(_.Text, {
        className: et.giftAdditionalTerm,
        style: d,
        variant: "text-xxs/normal",
        children: o.additionalTerm()
      }), (0, r.jsx)(Y.Z, {
        variant: "secondary",
        size: "md",
        fullWidth: true,
        onClick: () => {
          L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: el,
            target: ec
          })
        }
      })]
    })]
  })
}

function e_() {
  var e;
  let t = null == (e = (0, Chunk347896.Z)()) ? true : module.billingSettingsMarketingBanner;
  return null != exports ? (0, Chunk951288.jsx)(ef, {
    config: exports
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk458622.giftCard,
    children: [(0, Chunk951288.jsx)("img", {
      className: Chunk458622.giftImage,
      alt: "",
      src: Chunk434691
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk458622.giftInfo,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        className: Chunk458622.giftTitle,
        variant: "heading-xl/extrabold",
        children: Chunk388032.intl.string(Chunk388032.t["3KomGR"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk458622.giftText,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.yQ06u7)
      }), (0, Chunk951288.jsx)(Chunk736519.Z, {
        className: a()(Chunk458622.giftCardButton, Chunk458622.giftCardButtonColor),
        textOptions: {
          textOverride: Chunk388032.intl.string(Chunk388032.t.Ve9Ge3),
          textClassName: Chunk458622.giftButtonCTA
        },
        color: Chunk755721.zx.Colors.CUSTOM,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: el,
            target: ec
          })
        }
      })]
    })]
  })
}
let ep = function() {
  let e = "PremiumManagementSettings",
    t = (0, Chunk211242.Q)(),
    {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_SETTINGS),
    o = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    a = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    s = (0, Chunk15640.V)(Chunk474936.nS),
    [l, d] = Chunk647438.useState(true),
    f = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    m = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled),
    E = Chunk647438.useRef(null);
  (0, Chunk232076.B)(module);
  let y = (0, Chunk533525.b)(module);
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(async () => {
      Chunk37234 || exports || await Promise.all([Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY)]), Chunk780384(false)
    })
  }, [Chunk37234, exports]);
  let [O, N] = Chunk647438.useState(false);
  if (Chunk37234) return (0, Chunk951288.jsx)(Chunk497321.Z, {});
  if (exports) return (0, Chunk951288.jsx)(Chunk89057.c8, {});
  let P = a && null !== Chunk120356 && Chunk913527,
    x = Chunk755721.fetched && Chunk755721.isFractionalPremiumActive;
  if (!Chunk703656 && !Chunk483444 && !l) return (0, Chunk951288.jsx)(Chunk406128.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.dyq9TU),
    note: null
  });
  if (!Chunk703656 && !Chunk483444 || l) return (0, Chunk951288.jsx)(Chunk481060.$jN, {});
  let j = !!(null == Chunk120356 ? true : Chunk120356.hasActiveTrial);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: require,
    children: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(ed, {}), Chunk410030 && (0, Chunk951288.jsx)(Chunk386733.Z, {
          isInSettings: true
        }), (0, Chunk951288.jsx)(e_, {}), (0, Chunk951288.jsx)(Chunk179984.Z, {
          hideCTAs: true,
          headingOverride: Chunk388032.intl.string(Chunk388032.t.dnVvQU),
          hidePill: !Chunk63063,
          selectedPlanColumnClassName: Chunk458622.tier2PlanComparisonTableBackground,
          selectedPlanTier: Chunk474936.p9.TIER_2
        })]
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Chunk230711,
        onChange: e => {
          e && !O && (L.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), N(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: Chunk230711,
          className: Chunk458622.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}