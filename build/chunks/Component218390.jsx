/** Chunk was on web.js **/
/** chunk id: 218390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => e_,
  Z: () => eh
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk159691 = require("./159691.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
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
  Chunk313789 = require("./313789.js"),
  Chunk342386 = require("./342386.js"),
  Chunk518596 = require("./518596.jsx"),
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
  Chunk740594 = require("./740594.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk504865 = require("./504865.jsx"),
  Chunk179984 = require("./179984.jsx"),
  Chunk386733 = require("./386733.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820258 = require("./820258.js"),
  Chunk881188 = require("./881188.js"),
  Chunk434691 = require("./434691.js");
let ea = "to_subscriptions_button",
  eo = "subscriptions settings",
  es = "to_premium_home_button",
  el = "premium home page",
  ec = "gifting_button",
  eu = "payment modal";

function ed(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: a
  } = e, o = t.hasActiveTrial, s = t.planIdFromItems === $.Xh.PREMIUM_YEAR_TIER_2, c = n || o, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, d = $.GP[t.planIdFromItems], _ = j.ZP.formatPriceString(j.ZP.getDefaultPrice(d.id), d.interval), {
    enabled: h
  } = B.T.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), m = () => {
    var e, t, n;
    return h ? "" : o ? et.intl.format(et.t["2CGBri"], {
      remainingTime: u,
      price: _
    }) : s ? et.intl.format(et.t["+qqh6g"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : $.Bo,
      regularPrice: _
    }) : et.intl.formatToPlainString(et.t["3ZiutU"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : $.M_,
      regularPrice: _,
      numMonths: null != (n = null == i ? true : i.duration) ? n : $.rt
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(o || !s) && (0, r.jsx)(z.Cy, {
      text: o ? et.intl.string(et.t.qYKftX) : et.intl.string(et.t.EyjDRE),
      className: en.topRimPillWithSparkles,
      colorOptions: (0, f.wj)(a) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (o || !s) && (0, r.jsx)("div", {
      className: en.rimGlowTier2
    }), (0, r.jsx)(p.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: en.trialHeader,
      children: m()
    })]
  }) : h ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(X.Z, {
    variant: true,
    subscriptionTier: $.Si.TIER_2,
    interval: d.interval
  })
}

function ef() {
  let e = (0, Chunk140465.t7)(),
    t = (0, Chunk140465.lr)(),
    n = (0, Chunk410030.ZP)(),
    i = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    a = (0, Chunk975298.Z)(),
    s = (0, Chunk695349.W)(),
    l = null !== Chunk647438 && null !== Chunk647438.planIdFromItems;
  if (!l && !Chunk120356.isFractionalPremiumActive) return null;
  let u = Chunk120356.isFractionalPremiumActive,
    _ = null !== Chunk647438 && Chunk647438.hasActiveTrial,
    h = module || Chunk755721,
    m = () => Chunk622535 && !Chunk913527 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk382791.mn, {
        text: Chunk388032.intl.string(Chunk388032.t.uXF4c4),
        className: Chunk820258.fractionalPremiumTopRimPill,
        colorOptions: Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk820258.fractionalPremiumSubheader,
        children: Chunk388032.intl.format(Chunk388032.t.sK7fGl, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : l ? (0, Chunk951288.jsx)(ed, {
      premiumSubscription: Chunk647438,
      isDiscountApplied: module,
      activeDiscountInfo: exports,
      theme: require
    }) : Chunk913527 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk382791.Cy, {
        text: Chunk388032.intl.string(Chunk388032.t.qYKftX),
        className: Chunk820258.topRimPillWithSparkles,
        colorOptions: (0, Chunk780384.wj)(require) ? Chunk382791.VE.PREMIUM_TIER_2_WHITE_FILL : Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk820258.trialHeader,
        children: Chunk388032.intl.format(Chunk388032.t["/SfHwl"], {
          weeks: 1
        })
      })]
    }) : null,
    g = () => Chunk622535 && !l ? (0, Chunk951288.jsxs)(Chunk159691.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk740594.Z, {
        defaultTextOverride: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.YScQSF) : Chunk388032.intl.string(Chunk388032.t["0b3YRn"])
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          }), (0, Chunk342386.default)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        variant: "overlay-secondary",
        fullWidth: true,
        size: "md",
        text: Chunk913527 ? Chunk388032.intl.string(Chunk388032.t.VR2iVB) : Chunk388032.intl.string(Chunk388032.t.T1aUAX)
      })]
    }) : (0, Chunk951288.jsxs)(Chunk159691.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk159691.zxk, {
        variant: "overlay-primary",
        fullWidth: true,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          }), (0, Chunk342386.default)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        text: Chunk388032.intl.string(Chunk388032.t.VR2iVB),
        size: "md"
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        variant: "overlay-secondary",
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ea,
            target: eo
          }), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
            section: Chunk981631.oAB.SUBSCRIPTIONS
          })
        },
        text: Chunk388032.intl.string(Chunk388032.t["9uDy6C"]),
        fullWidth: true,
        size: "md"
      })]
    });
  return (0, Chunk951288.jsxs)("div", {
    className: o()(Chunk820258.tierCard, {
      [Chunk820258.withTier2Rim]: Chunk570140
    }),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk820258.tierInfo,
      children: [(0, Chunk951288.jsx)(Chunk483444.Z, {
        className: Chunk820258.tierTitle
      }), Chunk355467(), (0, Chunk951288.jsx)(Chunk823188.nT, {
        featureSet: Chunk622535 ? Chunk823188.uZ.FRACTIONAL_PREMIUM : Chunk823188.uZ.DEFAULT
      }), Chunk821849()]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk820258.tierImage,
      children: (0, Chunk951288.jsx)("img", {
        className: Chunk820258.tierImage,
        alt: "",
        src: Chunk881188
      })
    })]
  })
}

function e_(e) {
  var t, n, i;
  let {
    className: a,
    config: s
  } = e, l = (0, c.e7)([y.Z], () => y.Z.useReducedMotion), u = s.getImageUrl(l), d = (0, F.Yr)(null == (t = s.getBackgroundImageUrl) ? true : t.call(s)), f = (0, F.Tl)(null != (n = s.gradientConfig) ? n : true), _ = {
    color: null != (i = s.textColor) ? i : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: o()(en.giftCardPromotion, a),
    style: null != d ? d : f,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: en.giftImagePromotion,
      "aria-hidden": true,
      src: u
    }), (0, r.jsxs)("div", {
      className: en.giftInfoPromotion,
      children: [(0, r.jsx)(p.Heading, {
        className: en.giftInfoTitlePromotion,
        style: _,
        variant: "text-lg/bold",
        children: s.title()
      }), (0, r.jsx)(p.Text, {
        className: en.giftText,
        style: _,
        variant: "text-sm/medium",
        children: s.body()
      }), null != s.additionalTerm && (0, r.jsx)(p.Text, {
        className: en.giftAdditionalTerm,
        style: _,
        variant: "text-xxs/normal",
        children: s.additionalTerm()
      }), (0, r.jsx)(W.Z, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: () => {
          M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          })
        }
      })]
    })]
  })
}

function ep() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk820258.giftCard,
    children: [(0, Chunk951288.jsx)("img", {
      className: Chunk820258.giftImage,
      alt: "",
      src: Chunk434691
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk820258.giftInfo,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        className: Chunk820258.giftTitle,
        variant: "heading-xl/extrabold",
        children: Chunk388032.intl.string(Chunk388032.t["3KomGa"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk820258.giftText,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.yQ06u1)
      }), (0, Chunk951288.jsx)(Chunk736519.Z, {
        className: o()(Chunk820258.giftCardButton, Chunk820258.giftCardButtonColor),
        textOptions: {
          textOverride: Chunk388032.intl.string(Chunk388032.t.Ve9Ge6),
          textClassName: Chunk820258.giftButtonCTA
        },
        color: Chunk755721.zx.Colors.CUSTOM,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          })
        }
      })]
    })]
  })
}
let eh = function() {
  var e;
  let t = (0, Chunk211242.Q)(),
    {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_SETTINGS),
    a = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    o = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    s = (0, Chunk15640.V)(Chunk474936.nS),
    [l, d] = Chunk647438.useState(true),
    f = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    _ = null == (e = (0, Chunk347896.Z)()) ? true : module.billingSettingsMarketingBanner,
    b = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled),
    y = Chunk647438.useRef(null);
  (0, Chunk232076.B)();
  let N = (0, Chunk533525.b)();
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(async () => {
      Chunk410030 || exports || await Promise.all([Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY)]), Chunk159691(false)
    })
  }, [Chunk410030, exports]);
  let [R, P] = Chunk647438.useState(false);
  if (Chunk410030) return (0, Chunk951288.jsx)(Chunk497321.Z, {});
  if (exports) return (0, Chunk951288.jsx)(Chunk89057.c8, {});
  let w = o && null !== Chunk120356 && Chunk913527,
    L = Chunk780384.fetched && Chunk780384.isFractionalPremiumActive;
  if (!Chunk518596 && !Chunk483444 && !l) return (0, Chunk951288.jsx)(Chunk406128.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.dyq9TR),
    note: null
  });
  if (!Chunk518596 && !Chunk483444 || l) return (0, Chunk951288.jsx)(Chunk481060.$jN, {});
  let k = !!(null == Chunk120356 ? true : Chunk120356.hasActiveTrial);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: require,
    children: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        children: [null != Chunk755721 && (0, Chunk951288.jsx)(e_, {
          config: Chunk755721
        }), (0, Chunk951288.jsx)(ef, {}), Chunk703656 && (0, Chunk951288.jsx)(Chunk386733.Z, {
          isInSettings: true
        }), null == Chunk755721 && (0, Chunk951288.jsx)(ep, {}), (0, Chunk951288.jsx)(Chunk179984.Z, {
          hideCTAs: true,
          headingOverride: Chunk388032.intl.string(Chunk388032.t.dnVvQS),
          hidePill: !Chunk63063,
          selectedPlanColumnClassName: Chunk820258.tier2PlanComparisonTableBackground,
          selectedPlanTier: Chunk474936.PremiumTypes.TIER_2
        })]
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Chunk607070,
        onChange: e => {
          e && !R && (M.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), P(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: Chunk607070,
          className: Chunk820258.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}