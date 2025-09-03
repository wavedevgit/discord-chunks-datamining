/** Chunk was on web.js **/
/** chunk id: 218390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => ed,
  Z: () => e_
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let er = "to_subscriptions_button",
  ei = "subscriptions settings",
  ea = "to_premium_home_button",
  eo = "premium home page",
  es = "gifting_button",
  el = "payment modal";

function ec(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: a
  } = e, o = t.hasActiveTrial, s = t.planIdFromItems === Q.Xh.PREMIUM_YEAR_TIER_2, c = n || o, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, f = Q.GP[t.planIdFromItems], p = j.ZP.formatPriceString(j.ZP.getDefaultPrice(f.id), f.interval), {
    enabled: h
  } = U.T.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), m = () => {
    var e, t, n;
    return h ? "" : o ? $.intl.format($.t["2CGBrq"], {
      remainingTime: u,
      price: p
    }) : s ? $.intl.format($.t["+qqh6u"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : Q.Bo,
      regularPrice: p
    }) : $.intl.formatToPlainString($.t["3Ziutb"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : Q.M_,
      regularPrice: p,
      numMonths: null != (n = null == i ? true : i.duration) ? n : Q.rt
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(o || !s) && (0, r.jsx)(W.Cy, {
      text: o ? $.intl.string($.t.qYKftb) : $.intl.string($.t.EyjDRE),
      className: ee.topRimPillWithSparkles,
      colorOptions: (0, d.wj)(a) ? W.VE.PREMIUM_TIER_2_WHITE_FILL : W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (o || !s) && (0, r.jsx)("div", {
      className: ee.rimGlowTier2
    }), (0, r.jsx)(_.X6q, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ee.trialHeader,
      children: m()
    })]
  }) : h ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(z.Z, {
    variant: true,
    subscriptionTier: Q.Si.TIER_2,
    interval: f.interval
  })
}

function eu() {
  let e = (0, Chunk140465.t7)(),
    t = (0, Chunk140465.lr)(),
    n = (0, Chunk410030.ZP)(),
    i = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    a = (0, Chunk975298.Z)(),
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
    }) : l ? (0, Chunk951288.jsx)(ec, {
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
            target: eo
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
            target: eo
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
            cta_type: er,
            target: ei
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
    className: o()(Chunk458622.tierCard, {
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

function ed(e) {
  var t, n;
  let {
    className: i,
    config: a
  } = e, s = (0, c.e7)([O.Z], () => O.Z.useReducedMotion) ? a.getStaticImageUrl() : a.getAnimatedImageUrl(), l = null != a.getBackgroundImageUrl ? a.getBackgroundImageUrl() : true, u = (0, B.Tl)(null != (t = a.gradientConfig) ? t : true), d = {
    color: null != (n = a.textColor) ? n : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: o()(ee.giftCardPromotion, i),
    style: null != l ? {
      backgroundImage: "url(".concat(l, ")")
    } : u,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: ee.giftImagePromotion,
      "aria-hidden": true,
      src: s
    }), (0, r.jsxs)("div", {
      className: ee.giftInfoPromotion,
      children: [(0, r.jsx)(_.X6q, {
        className: ee.giftInfoTitlePromotion,
        style: d,
        variant: "text-lg/bold",
        children: a.title()
      }), (0, r.jsx)(_.Text, {
        className: ee.giftText,
        style: d,
        variant: "text-sm/medium",
        children: a.body()
      }), null != a.additionalTerm && (0, r.jsx)(_.Text, {
        className: ee.giftAdditionalTerm,
        style: d,
        variant: "text-xxs/normal",
        children: a.additionalTerm()
      }), (0, r.jsx)(H.Z, {
        variant: "overlay-secondary",
        size: "md",
        fullWidth: true,
        onClick: () => {
          x.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          })
        }
      })]
    })]
  })
}

function ef() {
  return (0, Chunk951288.jsxs)("div", {
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
        className: o()(Chunk458622.giftCardButton, Chunk458622.giftCardButtonColor),
        textOptions: {
          textOverride: Chunk388032.intl.string(Chunk388032.t.Ve9Ge3),
          textClassName: Chunk458622.giftButtonCTA
        },
        color: Chunk755721.zx.Colors.CUSTOM,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          })
        }
      })]
    })]
  })
}
let e_ = function() {
  var e;
  let t = "PremiumManagementSettings",
    n = (0, Chunk211242.Q)(),
    {
      analyticsLocations: a
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_SETTINGS),
    o = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    s = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    l = (0, Chunk15640.V)(Chunk474936.nS),
    [d, f] = Chunk647438.useState(true),
    m = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    E = null == (e = (0, Chunk347896.Z)()) ? true : module.billingSettingsMarketingBanner,
    y = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled),
    O = Chunk647438.useRef(null);
  (0, Chunk232076.B)(exports);
  let R = (0, Chunk533525.b)(exports);
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(async () => {
      Chunk410030 || require || await Promise.all([Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY)]), Chunk755721(false)
    })
  }, [Chunk410030, require]);
  let [D, L] = Chunk647438.useState(false);
  if (Chunk410030) return (0, Chunk951288.jsx)(Chunk497321.Z, {});
  if (require) return (0, Chunk951288.jsx)(Chunk89057.c8, {});
  let j = Chunk913527 && null !== o && l,
    M = Chunk37234.fetched && Chunk37234.isFractionalPremiumActive;
  if (!Chunk74538 && !Chunk140465 && !Chunk780384) return (0, Chunk951288.jsx)(Chunk406128.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.dyq9TU),
    note: null
  });
  if (!Chunk74538 && !Chunk140465 || Chunk780384) return (0, Chunk951288.jsx)(Chunk481060.$jN, {});
  let k = !!(null == o ? true : o.hasActiveTrial);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: Chunk120356,
    children: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        children: [null != Chunk230711 && (0, Chunk951288.jsx)(ed, {
          config: Chunk230711
        }), (0, Chunk951288.jsx)(eu, {}), Chunk703656 && (0, Chunk951288.jsx)(Chunk386733.Z, {
          isInSettings: true
        }), null == Chunk230711 && (0, Chunk951288.jsx)(ef, {}), (0, Chunk951288.jsx)(Chunk179984.Z, {
          hideCTAs: true,
          headingOverride: Chunk388032.intl.string(Chunk388032.t.dnVvQU),
          hidePill: !Chunk695349,
          selectedPlanColumnClassName: Chunk458622.tier2PlanComparisonTableBackground,
          selectedPlanTier: Chunk474936.p9.TIER_2
        })]
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Chunk607070,
        onChange: e => {
          e && !D && (x.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: a
          }), L(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: Chunk607070,
          className: Chunk458622.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}