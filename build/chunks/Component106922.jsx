/** Chunk was on web.js **/
/** chunk id: 106922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eg,
  c: () => eh
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk732955 = require("./732955.js"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk86379 = require("./86379.js"),
  Chunk531260 = require("./531260.js"),
  Chunk160946 = require("./160946.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk721668 = require("./721668.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk12901 = require("./12901.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk224016 = require("./224016.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk526292 = require("./526292.js"),
  Chunk637073 = require("./637073.js"),
  Chunk411268 = require("./411268.js"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk103411 = require("./103411.js"),
  Chunk190187 = require("./190187.js"),
  Chunk194509 = require("./194509.jsx"),
  Chunk65470 = require("./65470.jsx"),
  Chunk857586 = require("./857586.jsx"),
  Chunk795269 = require("./795269.jsx"),
  Chunk501007 = require("./501007.jsx"),
  Chunk156601 = require("./156601.jsx"),
  Chunk244778 = require("./244778.jsx"),
  Chunk659533 = require("./659533.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk95252 = require("./95252.js"),
  Chunk396785 = require("./396785.js"),
  Chunk956537 = require("./956537.js");
let eo = "to_subscriptions_button",
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
  } = e, s = t.hasActiveTrial, o = t.planIdFromItems === ee.gD.PREMIUM_YEAR_TIER_2, c = n || s, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, d = ee.hd[t.planIdFromItems], p = U.Ay.formatPriceString(U.Ay.getDefaultPrice(d.id), d.interval), {
    enabled: h
  } = F.K.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), m = () => {
    var e, t, n;
    return h ? "" : s ? er.intl.format(er.t["2CGBri"], {
      remainingTime: u,
      price: p
    }) : o ? er.intl.format(er.t["+qqh6g"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : ee.Cq,
      regularPrice: p
    }) : er.intl.formatToPlainString(er.t["3ZiutU"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : ee._$,
      regularPrice: p,
      numMonths: null != (n = null == i ? true : i.duration) ? n : ee.OJ
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(s || !o) && (0, r.jsx)(X.ir, {
      text: s ? er.intl.string(er.t.qYKftX) : er.intl.string(er.t.EyjDRE),
      className: ei.uS,
      colorOptions: (0, f.Mw)(a) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (s || !o) && (0, r.jsx)("div", {
      className: ei.on
    }), (0, r.jsx)(_.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ei.KB,
      children: m()
    })]
  }) : h ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(Q.A, {
    variant: true,
    subscriptionTier: ee.pe.TIER_2,
    interval: d.interval
  })
}

function e_() {
  let e = (0, G.k5)(),
    t = (0, G.nf)(),
    n = (0, b.Ay)(),
    i = (0, c.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
    a = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
    o = null == a ? true : a.isPremiumWithPremiumGroup(),
    l = (0, S.A)(),
    u = (0, V.d)(),
    p = null !== i && null !== i.planIdFromItems;
  if (!p && !l.isFractionalPremiumActive && !o) return null;
  let h = l.isFractionalPremiumActive,
    m = null !== i && i.hasActiveTrial,
    g = e || m,
    E = () => (null == a ? true : a.isPremiumGroupPrimary()) ? Z.Nz.PREMIUM_GROUP_PRIMARY : (null == a ? true : a.isPremiumGroupMember()) ? Z.Nz.PREMIUM_GROUP_MEMBER : h ? Z.Nz.FRACTIONAL_PREMIUM : Z.Nz.DEFAULT,
    y = () => o ? (0, r.jsx)(_.Heading, {
      variant: "display-md",
      color: "always-white",
      className: ei._K,
      children: (0, et.DP)()
    }) : (0, r.jsx)(j.A, {
      className: ei.TJ
    }),
    O = () => o ? (0, r.jsx)("div", {
      style: {
        marginBottom: "18px"
      }
    }) : h && !u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(X.R, {
        text: er.intl.string(er.t.uXF4c4),
        className: ei.rd,
        colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ei.sQ,
        children: er.intl.format(er.t.sK7fGl, {
          helpCenterLink: k.A.getArticleURL(en.MVz.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : p ? (0, r.jsx)(ep, {
      premiumSubscription: i,
      isDiscountApplied: e,
      activeDiscountInfo: t,
      theme: n
    }) : u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(X.ir, {
        text: er.intl.string(er.t.qYKftX),
        className: ei.uS,
        colorOptions: (0, f.Mw)(n) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ei.KB,
        children: er.intl.format(er.t["/SfHwl"], {
          weeks: 1
        })
      })]
    }) : null,
    A = () => h && !p ? (0, r.jsxs)(d.e2v, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(q.A, {
        defaultTextOverride: u ? er.intl.string(er.t.YScQSF) : er.intl.string(er.t["0b3YRn"])
      }), (0, r.jsx)(d.$nd, {
        onClick: () => {
          M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, w.default)(), (0, N.pX)(en.BVt.APPLICATION_STORE)
        },
        variant: "overlay-secondary",
        fullWidth: true,
        size: "md",
        text: u ? er.intl.string(er.t.VR2iVB) : er.intl.string(er.t.T1aUAX)
      })]
    }) : (0, r.jsxs)(d.e2v, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(d.$nd, {
        variant: "overlay-primary",
        fullWidth: true,
        onClick: () => {
          M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ec,
            target: eu
          }), (0, w.default)(), (0, N.pX)(en.BVt.APPLICATION_STORE)
        },
        text: er.intl.string(er.t.VR2iVB),
        size: "md"
      }), (0, r.jsx)(d.$nd, {
        variant: "overlay-secondary",
        onClick: () => {
          M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: eo,
            target: el
          }), (0, P.openUserSettings)(R.X.SUBSCRIPTIONS_PANEL, {
            section: en.nc_.SUBSCRIPTIONS
          })
        },
        text: er.intl.string(er.t["9uDy6C"]),
        fullWidth: true,
        size: "md"
      })]
    });
  return (0, r.jsxs)("div", {
    className: s()(ei.$Y, {
      [ei.J5]: g
    }),
    children: [(0, r.jsxs)("div", {
      className: ei.jp,
      children: [y(), O(), (0, r.jsx)(Z.ZP, {
        featureSet: E()
      }), A()]
    }), (0, r.jsx)("div", {
      className: ei.ah,
      children: (0, r.jsx)("img", {
        className: ei.ah,
        alt: "",
        src: ea
      })
    })]
  })
}

function eh(e) {
  var t, n;
  let {
    className: i,
    config: a
  } = e, o = (0, c.bG)([y.A], () => y.A.useReducedMotion), l = a.getImageUrl(o), u = null == (n = a.getBackgroundImageUrl) ? true : n.call(a), d = (0, H.gc)(u), f = (0, H.K5)(a.gradientConfig), p = (0, H.x)(d, f), h = {
    color: null != (t = a.textColor) ? t : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: s()(ei.WR, i),
    style: p,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: ei.TB,
      "aria-hidden": true,
      src: l
    }), (0, r.jsxs)("div", {
      className: ei.QT,
      children: [(0, r.jsx)(_.Heading, {
        className: ei.u_,
        style: h,
        variant: "heading-lg/extrabold",
        children: a.title()
      }), (0, r.jsx)(_.Text, {
        className: ei.Oi,
        style: h,
        variant: "text-xs/medium",
        children: a.body()
      }), null != a.additionalTerm && (0, r.jsx)(_.Text, {
        className: ei.KW,
        style: h,
        variant: "text-xxs/normal",
        children: a.additionalTerm()
      }), (0, r.jsx)(z.A, {
        variant: "primary",
        size: "md",
        onClick: () => {
          M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ed,
            target: ef
          })
        }
      })]
    })]
  })
}

function em() {
  return (0, r.jsxs)("div", {
    className: ei.T1,
    children: [(0, r.jsx)("img", {
      className: ei.GY,
      alt: "",
      src: es
    }), (0, r.jsxs)("div", {
      className: ei.b4,
      children: [(0, r.jsx)(_.Heading, {
        className: ei.Vz,
        variant: "heading-xl/extrabold",
        children: er.intl.string(er.t["3KomGa"])
      }), (0, r.jsx)(_.Text, {
        className: ei.Oi,
        variant: "text-sm/normal",
        children: er.intl.string(er.t.yQ06u1)
      }), (0, r.jsx)(K.A, {
        className: s()(ei.Tp, ei._c),
        textOptions: {
          textOverride: er.intl.string(er.t.Ve9Ge6),
          textClassName: ei.VV
        },
        color: p.$n.Colors.CUSTOM,
        onClick: () => {
          M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
  let t = (0, v.H)(),
    {
      analyticsLocations: n
    } = (0, A.Ay)(O.A.PREMIUM_SETTINGS),
    a = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
    s = (0, c.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
    o = (0, c.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
    l = (0, I.Y)(ee.T7),
    [d, f] = i.useState(true),
    p = (0, S.A)({
      forceFetch: true
    }),
    b = null == (e = (0, B.A)()) ? true : e.billingSettingsMarketingBanner,
    y = (0, c.bG)([D.A], () => D.A.enabled),
    N = i.useRef(null);
  (0, W.i)();
  let R = (0, Y.m)();
  i.useEffect(() => {
    h.h.wait(async () => {
      y || t || await Promise.all([m.hP(), m.$o(), (0, g.zS)(null, null, en.tF5.DISCOVERY)]), f(false)
    })
  }, [y, t]);
  let [w, P] = i.useState(false);
  if (y) return (0, r.jsx)(E.A, {});
  if (t) return (0, r.jsx)(T.uK, {});
  let j = o && null !== s && l,
    k = p.fetched && p.isFractionalPremiumActive,
    U = null == a ? true : a.isPremiumWithPremiumGroup();
  if (!j && !k && !d && !U) return (0, r.jsx)(C.A, {
    title: er.intl.string(er.t.dyq9TR),
    note: null
  });
  if (!j && !k && !U || d) return (0, r.jsx)(_.y$y, {});
  let G = !!(null == s ? true : s.hasActiveTrial);
  return (0, r.jsx)(A.f5, {
    value: n,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        children: [null != b && (0, r.jsx)(eh, {
          config: b
        }), (0, r.jsx)(e_, {}), R && (0, r.jsx)(J.A, {
          isInSettings: true
        }), null == b && (0, r.jsx)(em, {}), (0, r.jsx)($.A, {
          hideCTAs: true,
          headingOverride: er.intl.string(er.t.dnVvQS),
          hidePill: !G,
          selectedPlanColumnClassName: ei.JG,
          selectedPlanTier: ee.PremiumTypes.TIER_2
        })]
      }), (0, r.jsx)(u.L, {
        innerRef: N,
        onChange: e => {
          e && !w && (M.default.track(en.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: n
          }), P(true))
        },
        children: (0, r.jsx)("div", {
          ref: N,
          className: ei._Z
        })
      })]
    })
  })
}