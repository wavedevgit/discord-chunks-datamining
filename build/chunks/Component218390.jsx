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
  let e = (0, G.t7)(),
    t = (0, G.lr)(),
    n = (0, b.ZP)(),
    i = (0, c.e7)([L.Z], () => L.Z.getPremiumTypeSubscription()),
    a = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
    s = null == a ? true : a.isPremiumWithPremiumGroup(),
    l = (0, I.Z)(),
    u = (0, Z.W)(),
    p = null !== i && null !== i.planIdFromItems;
  if (!p && !l.isFractionalPremiumActive && !s) return null;
  let m = l.isFractionalPremiumActive,
    h = null !== i && i.hasActiveTrial,
    g = e || h,
    E = () => (null == a ? true : a.isPremiumGroupPrimary()) ? Q.uZ.PREMIUM_GROUP_PRIMARY : (null == a ? true : a.isPremiumGroupMember()) ? Q.uZ.PREMIUM_GROUP_MEMBER : m ? Q.uZ.FRACTIONAL_PREMIUM : Q.uZ.DEFAULT,
    y = () => s ? (0, r.jsx)(_.Heading, {
      variant: "display-md",
      color: "always-white",
      className: ei.premiumGroupHeader,
      children: (0, et.sO)()
    }) : (0, r.jsx)(j.Z, {
      className: ei.tierTitle
    }),
    O = () => s ? (0, r.jsx)("div", {
      style: {
        marginBottom: "18px"
      }
    }) : m && !u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(q.mn, {
        text: er.intl.string(er.t.uXF4c4),
        className: ei.fractionalPremiumTopRimPill,
        colorOptions: q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ei.fractionalPremiumSubheader,
        children: er.intl.format(er.t.sK7fGl, {
          helpCenterLink: k.Z.getArticleURL(en.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : p ? (0, r.jsx)(ep, {
      premiumSubscription: i,
      isDiscountApplied: e,
      activeDiscountInfo: t,
      theme: n
    }) : u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(q.Cy, {
        text: er.intl.string(er.t.qYKftX),
        className: ei.topRimPillWithSparkles,
        colorOptions: (0, f.wj)(n) ? q.VE.PREMIUM_TIER_2_WHITE_FILL : q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ei.trialHeader,
        children: er.intl.format(er.t["/SfHwl"], {
          weeks: 1
        })
      })]
    }) : null,
    v = () => m && !p ? (0, r.jsxs)(d.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(z.Z, {
        defaultTextOverride: u ? er.intl.string(er.t.YScQSF) : er.intl.string(er.t["0b3YRn"])
      }), (0, r.jsx)(d.zxk, {
        onClick: () => {
          M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, R.default)(), (0, N.uL)(en.Z5c.APPLICATION_STORE)
        },
        variant: "overlay-secondary",
        fullWidth: true,
        size: "md",
        text: u ? er.intl.string(er.t.VR2iVB) : er.intl.string(er.t.T1aUAX)
      })]
    }) : (0, r.jsxs)(d.hE2, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(d.zxk, {
        variant: "overlay-primary",
        fullWidth: true,
        onClick: () => {
          M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, R.default)(), (0, N.uL)(en.Z5c.APPLICATION_STORE)
        },
        text: er.intl.string(er.t.VR2iVB),
        size: "md"
      }), (0, r.jsx)(d.zxk, {
        variant: "overlay-secondary",
        onClick: () => {
          M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: es,
            target: el
          }), (0, w.openUserSettings)(P.n.SUBSCRIPTIONS_PANEL, {
            section: en.oAB.SUBSCRIPTIONS
          })
        },
        text: er.intl.string(er.t["9uDy6C"]),
        fullWidth: true,
        size: "md"
      })]
    });
  return (0, r.jsxs)("div", {
    className: o()(ei.tierCard, {
      [ei.withTier2Rim]: g
    }),
    children: [(0, r.jsxs)("div", {
      className: ei.tierInfo,
      children: [y(), O(), (0, r.jsx)(Q.nT, {
        featureSet: E()
      }), v()]
    }), (0, r.jsx)("div", {
      className: ei.tierImage,
      children: (0, r.jsx)("img", {
        className: ei.tierImage,
        alt: "",
        src: ea
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
  return (0, r.jsxs)("div", {
    className: ei.giftCard,
    children: [(0, r.jsx)("img", {
      className: ei.giftImage,
      alt: "",
      src: eo
    }), (0, r.jsxs)("div", {
      className: ei.giftInfo,
      children: [(0, r.jsx)(_.Heading, {
        className: ei.giftTitle,
        variant: "heading-xl/extrabold",
        children: er.intl.string(er.t["3KomGa"])
      }), (0, r.jsx)(_.Text, {
        className: ei.giftText,
        variant: "text-sm/normal",
        children: er.intl.string(er.t.yQ06u1)
      }), (0, r.jsx)(W.Z, {
        className: o()(ei.giftCardButton, ei.giftCardButtonColor),
        textOptions: {
          textOverride: er.intl.string(er.t.Ve9Ge6),
          textClassName: ei.giftButtonCTA
        },
        color: p.zx.Colors.CUSTOM,
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
let eg = function() {
  var e;
  let t = (0, S.Q)(),
    {
      analyticsLocations: n
    } = (0, v.ZP)(O.Z.PREMIUM_SETTINGS),
    a = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
    o = (0, c.e7)([L.Z], () => L.Z.getPremiumTypeSubscription()),
    s = (0, c.e7)([L.Z], () => L.Z.hasFetchedSubscriptions()),
    l = (0, T.V)(ee.nS),
    [d, f] = i.useState(true),
    p = (0, I.Z)({
      forceFetch: true
    }),
    b = null == (e = (0, B.Z)()) ? true : e.billingSettingsMarketingBanner,
    y = (0, c.e7)([D.Z], () => D.Z.enabled),
    N = i.useRef(null);
  (0, Y.B)();
  let P = (0, H.b)();
  i.useEffect(() => {
    m.Z.wait(async () => {
      y || t || await Promise.all([h.jg(), h.tZ(), (0, g.Y2)(null, null, en.JjL.DISCOVERY)]), f(false)
    })
  }, [y, t]);
  let [R, w] = i.useState(false);
  if (y) return (0, r.jsx)(E.Z, {});
  if (t) return (0, r.jsx)(C.c8, {});
  let j = s && null !== o && l,
    k = p.fetched && p.isFractionalPremiumActive,
    U = null == a ? true : a.isPremiumWithPremiumGroup();
  if (!j && !k && !d && !U) return (0, r.jsx)(A.Z, {
    title: er.intl.string(er.t.dyq9TR),
    note: null
  });
  if (!j && !k && !U || d) return (0, r.jsx)(_.$jN, {});
  let G = !!(null == o ? true : o.hasActiveTrial);
  return (0, r.jsx)(v.Gt, {
    value: n,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        children: [null != b && (0, r.jsx)(em, {
          config: b
        }), (0, r.jsx)(e_, {}), P && (0, r.jsx)($.Z, {
          isInSettings: true
        }), null == b && (0, r.jsx)(eh, {}), (0, r.jsx)(J.Z, {
          hideCTAs: true,
          headingOverride: er.intl.string(er.t.dnVvQS),
          hidePill: !G,
          selectedPlanColumnClassName: ei.tier2PlanComparisonTableBackground,
          selectedPlanTier: ee.PremiumTypes.TIER_2
        })]
      }), (0, r.jsx)(u.$, {
        innerRef: N,
        onChange: e => {
          e && !R && (M.default.track(en.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), w(true))
        },
        children: (0, r.jsx)("div", {
          ref: N,
          className: ei.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}