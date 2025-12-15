/** Chunk was on web.js **/
/** chunk id: 218390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => em,
  Z: () => eg
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk594174 = require("./594174.js"),
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
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk434113 = require("./434113.js"),
  Chunk881188 = require("./881188.js"),
  Chunk434691 = require("./434691.js");
let es = "to_subscriptions_button",
  el = "subscriptions settings",
  ec = "to_premium_home_button",
  eu = "premium home page",
  ed = "gifting_button",
  ef = "payment modal";

function ep(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: a
  } = e, o = t.hasActiveTrial, s = t.planIdFromItems === ee.Xh.PREMIUM_YEAR_TIER_2, c = n || o, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, d = ee.GP[t.planIdFromItems], p = U.ZP.formatPriceString(U.ZP.getDefaultPrice(d.id), d.interval), {
    enabled: m
  } = F.T.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), h = () => {
    var e, t, n;
    return m ? "" : o ? er.intl.format(er.t["2CGBri"], {
      remainingTime: u,
      price: p
    }) : s ? er.intl.format(er.t["+qqh6g"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : ee.Bo,
      regularPrice: p
    }) : er.intl.formatToPlainString(er.t["3ZiutU"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : ee.M_,
      regularPrice: p,
      numMonths: null != (n = null == i ? true : i.duration) ? n : ee.rt
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(o || !s) && (0, r.jsx)(q.Cy, {
      text: o ? er.intl.string(er.t.qYKftX) : er.intl.string(er.t.EyjDRE),
      className: ei.topRimPillWithSparkles,
      colorOptions: (0, f.wj)(a) ? q.VE.PREMIUM_TIER_2_WHITE_FILL : q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (o || !s) && (0, r.jsx)("div", {
      className: ei.rimGlowTier2
    }), (0, r.jsx)(_.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ei.trialHeader,
      children: h()
    })]
  }) : m ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(X.Z, {
    variant: true,
    subscriptionTier: ee.Si.TIER_2,
    interval: d.interval
  })
}

function e_() {
  let e = (0, Chunk140465.t7)(),
    t = (0, Chunk140465.lr)(),
    n = (0, Chunk410030.ZP)(),
    i = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    s = null == Chunk120356 ? true : Chunk120356.isPremiumWithPremiumGroup(),
    l = (0, Chunk975298.Z)(),
    u = (0, Chunk695349.W)(),
    p = null !== Chunk473749 && null !== Chunk473749.planIdFromItems;
  if (!Chunk755721 && !l.isFractionalPremiumActive && !Chunk913527) return null;
  let m = l.isFractionalPremiumActive,
    h = null !== Chunk473749 && Chunk473749.hasActiveTrial,
    g = module || Chunk355467,
    E = () => (null == Chunk120356 ? true : Chunk120356.isPremiumGroupPrimary()) ? Chunk823188.uZ.PREMIUM_GROUP_PRIMARY : (null == Chunk120356 ? true : Chunk120356.isPremiumGroupMember()) ? Chunk823188.uZ.PREMIUM_GROUP_MEMBER : Chunk570140 ? Chunk823188.uZ.FRACTIONAL_PREMIUM : Chunk823188.uZ.DEFAULT,
    y = () => Chunk913527 ? (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "display-md",
      color: "always-white",
      className: Chunk434113.premiumGroupHeader,
      children: (0, Chunk282793.sO)()
    }) : (0, Chunk54381.jsx)(Chunk483444.Z, {
      className: Chunk434113.tierTitle
    }),
    O = () => Chunk913527 ? (0, Chunk54381.jsx)("div", {
      style: {
        marginBottom: "18px"
      }
    }) : Chunk570140 && !Chunk622535 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk382791.mn, {
        text: Chunk388032.intl.string(Chunk388032.t.uXF4c4),
        className: Chunk434113.fractionalPremiumTopRimPill,
        colorOptions: Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk434113.fractionalPremiumSubheader,
        children: Chunk388032.intl.format(Chunk388032.t.sK7fGl, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : Chunk755721 ? (0, Chunk54381.jsx)(ep, {
      premiumSubscription: Chunk473749,
      isDiscountApplied: module,
      activeDiscountInfo: exports,
      theme: require
    }) : Chunk622535 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk382791.Cy, {
        text: Chunk388032.intl.string(Chunk388032.t.qYKftX),
        className: Chunk434113.topRimPillWithSparkles,
        colorOptions: (0, Chunk780384.wj)(require) ? Chunk382791.VE.PREMIUM_TIER_2_WHITE_FILL : Chunk382791.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Chunk434113.trialHeader,
        children: Chunk388032.intl.format(Chunk388032.t["/SfHwl"], {
          weeks: 1
        })
      })]
    }) : null,
    v = () => Chunk570140 && !Chunk755721 ? (0, Chunk54381.jsxs)(Chunk159691.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, Chunk54381.jsx)(Chunk740594.Z, {
        defaultTextOverride: Chunk622535 ? Chunk388032.intl.string(Chunk388032.t.YScQSF) : Chunk388032.intl.string(Chunk388032.t["0b3YRn"])
      }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, Chunk342386.default)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        variant: "overlay-secondary",
        fullWidth: true,
        size: "md",
        text: Chunk622535 ? Chunk388032.intl.string(Chunk388032.t.VR2iVB) : Chunk388032.intl.string(Chunk388032.t.T1aUAX)
      })]
    }) : (0, Chunk54381.jsxs)(Chunk159691.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "overlay-primary",
        fullWidth: true,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, Chunk342386.default)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        },
        text: Chunk388032.intl.string(Chunk388032.t.VR2iVB),
        size: "md"
      }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "overlay-secondary",
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          }), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
            section: Chunk981631.oAB.SUBSCRIPTIONS
          })
        },
        text: Chunk388032.intl.string(Chunk388032.t["9uDy6C"]),
        fullWidth: true,
        size: "md"
      })]
    });
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk434113.tierCard, {
      [Chunk434113.withTier2Rim]: Chunk821849
    }),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk434113.tierInfo,
      children: [Chunk607070(), Chunk100527(), (0, Chunk54381.jsx)(Chunk823188.nT, {
        featureSet: Chunk497321()
      }), Chunk906732()]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk434113.tierImage,
      children: (0, Chunk54381.jsx)("img", {
        className: Chunk434113.tierImage,
        alt: "",
        src: Chunk881188
      })
    })]
  })
}

function em(e) {
  var t, n;
  let {
    className: i,
    config: a
  } = e, s = (0, c.e7)([y.Z], () => y.Z.useReducedMotion), l = a.getImageUrl(s), u = null == (t = a.getBackgroundImageUrl) ? true : t.call(a), d = (0, V.Yr)(u), f = (0, V.Tl)(a.gradientConfig), p = (0, V.$q)(d, f), m = {
    color: null != (n = a.textColor) ? n : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: o()(ei.giftCardPromotion, i),
    style: p,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: ei.giftImagePromotion,
      "aria-hidden": true,
      src: l
    }), (0, r.jsxs)("div", {
      className: ei.giftInfoPromotion,
      children: [(0, r.jsx)(_.Heading, {
        className: ei.giftInfoTitlePromotion,
        style: m,
        variant: "heading-lg/extrabold",
        children: a.title()
      }), (0, r.jsx)(_.Text, {
        className: ei.giftText,
        style: m,
        variant: "text-xs/medium",
        children: a.body()
      }), null != a.additionalTerm && (0, r.jsx)(_.Text, {
        className: ei.giftAdditionalTerm,
        style: m,
        variant: "text-xxs/normal",
        children: a.additionalTerm()
      }), (0, r.jsx)(K.Z, {
        variant: "primary",
        size: "md",
        onClick: () => {
          M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ed,
            target: ef
          })
        }
      })]
    })]
  })
}

function eh() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk434113.giftCard,
    children: [(0, Chunk54381.jsx)("img", {
      className: Chunk434113.giftImage,
      alt: "",
      src: Chunk434691
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk434113.giftInfo,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk434113.giftTitle,
        variant: "heading-xl/extrabold",
        children: Chunk388032.intl.string(Chunk388032.t["3KomGa"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk434113.giftText,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.yQ06u1)
      }), (0, Chunk54381.jsx)(Chunk736519.Z, {
        className: o()(Chunk434113.giftCardButton, Chunk434113.giftCardButtonColor),
        textOptions: {
          textOverride: Chunk388032.intl.string(Chunk388032.t.Ve9Ge6),
          textClassName: Chunk434113.giftButtonCTA
        },
        color: Chunk755721.zx.Colors.CUSTOM,
        onClick: () => {
          Chunk626135.default.track(Chunk981631.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ed,
            target: ef
          })
        }
      })]
    })]
  })
}
let eg = function() {
  var e;
  let t = (0, Chunk211242.Q)(),
    {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_SETTINGS),
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    o = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    s = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    l = (0, Chunk15640.V)(Chunk474936.nS),
    [d, f] = Chunk473749.useState(true),
    p = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    b = null == (e = (0, Chunk347896.Z)()) ? true : module.billingSettingsMarketingBanner,
    y = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled),
    N = Chunk473749.useRef(null);
  (0, Chunk232076.B)();
  let P = (0, Chunk533525.b)();
  Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(async () => {
      Chunk607070 || exports || await Promise.all([Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY)]), Chunk780384(false)
    })
  }, [Chunk607070, exports]);
  let [R, w] = Chunk473749.useState(false);
  if (Chunk607070) return (0, Chunk54381.jsx)(Chunk497321.Z, {});
  if (exports) return (0, Chunk54381.jsx)(Chunk89057.c8, {});
  let j = Chunk913527 && null !== o && l,
    k = Chunk755721.fetched && Chunk755721.isFractionalPremiumActive,
    U = null == Chunk120356 ? true : Chunk120356.isPremiumWithPremiumGroup();
  if (!Chunk483444 && !Chunk63063 && !Chunk159691 && !Chunk74538) return (0, Chunk54381.jsx)(Chunk406128.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.dyq9TR),
    note: null
  });
  if (!Chunk483444 && !Chunk63063 && !Chunk74538 || Chunk159691) return (0, Chunk54381.jsx)(Chunk481060.$jN, {});
  let G = !!(null == o ? true : o.hasActiveTrial);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: require,
    children: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        children: [null != Chunk410030 && (0, Chunk54381.jsx)(em, {
          config: Chunk410030
        }), (0, Chunk54381.jsx)(e_, {}), Chunk313789 && (0, Chunk54381.jsx)(Chunk386733.Z, {
          isInSettings: true
        }), null == Chunk410030 && (0, Chunk54381.jsx)(eh, {}), (0, Chunk54381.jsx)(Chunk179984.Z, {
          hideCTAs: true,
          headingOverride: Chunk388032.intl.string(Chunk388032.t.dnVvQS),
          hidePill: !Chunk140465,
          selectedPlanColumnClassName: Chunk434113.tier2PlanComparisonTableBackground,
          selectedPlanTier: Chunk474936.PremiumTypes.TIER_2
        })]
      }), (0, Chunk54381.jsx)(Chunk622535.$, {
        innerRef: Chunk703656,
        onChange: e => {
          e && !R && (M.default.track(en.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), w(true))
        },
        children: (0, Chunk54381.jsx)("div", {
          ref: Chunk703656,
          className: Chunk434113.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}