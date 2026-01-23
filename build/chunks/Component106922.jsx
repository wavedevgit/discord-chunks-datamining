/** Chunk was on web.js **/
/** chunk id: 106922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eE,
  c: () => em
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk877624 = require("./877624.js"),
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
  Chunk810498 = require("./810498.js"),
  Chunk807098 = require("./807098.js"),
  Chunk412260 = require("./412260.js"),
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
let el = "to_subscriptions_button",
  ec = "subscriptions settings",
  eu = "to_premium_home_button",
  ed = "premium home page",
  ef = "gifting_button",
  ep = "payment modal";

function e_(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: a
  } = e, s = t.hasActiveTrial, o = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2, c = n || s, u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0, d = et.hd[t.planIdFromItems], f = U.Ay.formatPriceString(U.Ay.getDefaultPrice(d.id), d.interval), {
    enabled: _
  } = F.K.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  }), m = () => {
    var e, t, n;
    return _ ? "" : s ? ei.intl.format(ei.t["2CGBri"], {
      remainingTime: u,
      price: f
    }) : o ? ei.intl.format(ei.t["+qqh6g"], {
      percent: null != (e = null == i ? true : i.percentage) ? e : et.Cq,
      regularPrice: f
    }) : ei.intl.formatToPlainString(ei.t["3ZiutU"], {
      percent: null != (t = null == i ? true : i.percentage) ? t : et._$,
      regularPrice: f,
      numMonths: null != (n = null == i ? true : i.duration) ? n : et.OJ
    })
  };
  return c ? (0, r.jsxs)(r.Fragment, {
    children: [(s || !o) && (0, r.jsx)(X.ir, {
      text: s ? ei.intl.string(ei.t.qYKftX) : ei.intl.string(ei.t.EyjDRE),
      className: ea.uS,
      colorOptions: (0, p.Mw)(a) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
    }), (s || !o) && (0, r.jsx)("div", {
      className: ea.on
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ea.KB,
      children: m()
    })]
  }) : _ ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(J.A, {
    variant: true,
    subscriptionTier: et.pe.TIER_2,
    interval: d.interval
  })
}

function eh() {
  let e = (0, G.k5)(),
    t = (0, G.nf)(),
    n = (0, b.Ay)(),
    i = (0, u.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
    a = (0, u.bG)([x.default], () => x.default.getCurrentUser()),
    o = null == a ? true : a.isPremiumWithPremiumGroup(),
    l = (0, I.A)(),
    c = (0, V.d)(),
    d = null !== i && null !== i.planIdFromItems;
  if (!d && !l.isFractionalPremiumActive && !o) return null;
  let _ = l.isFractionalPremiumActive,
    m = null !== i && i.hasActiveTrial,
    g = e || m,
    E = () => (null == a ? true : a.isPremiumGroupPrimary()) ? Q.Nz.PREMIUM_GROUP_PRIMARY : (null == a ? true : a.isPremiumGroupMember()) ? Q.Nz.PREMIUM_GROUP_MEMBER : _ ? Q.Nz.FRACTIONAL_PREMIUM : Q.Nz.DEFAULT,
    y = () => o ? (0, r.jsx)(h.Heading, {
      variant: "display-md",
      color: "always-white",
      className: ea._K,
      children: (0, en.DP)()
    }) : (0, r.jsx)(j.A, {
      className: ea.TJ
    }),
    O = () => o ? (0, r.jsx)("div", {
      style: {
        marginBottom: "18px"
      }
    }) : _ && !c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(X.R, {
        text: ei.intl.string(ei.t.uXF4c4),
        className: ea.rd,
        colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(h.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ea.sQ,
        children: ei.intl.format(ei.t.sK7fGl, {
          helpCenterLink: k.A.getArticleURL(er.MVz.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : d ? (0, r.jsx)(e_, {
      premiumSubscription: i,
      isDiscountApplied: e,
      activeDiscountInfo: t,
      theme: n
    }) : c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(X.ir, {
        text: ei.intl.string(ei.t.qYKftX),
        className: ea.uS,
        colorOptions: (0, p.Mw)(n) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (0, r.jsx)(h.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ea.KB,
        children: ei.intl.format(ei.t["/SfHwl"], {
          weeks: 1
        })
      })]
    }) : null,
    v = () => _ && !d ? (0, r.jsxs)(f.e2v, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(Z.A, {
        defaultTextOverride: c ? ei.intl.string(ei.t.YScQSF) : ei.intl.string(ei.t["0b3YRn"])
      }), (0, r.jsx)(f.$nd, {
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: eu,
            target: ed
          }), (0, R.default)(), (0, N.pX)(er.BVt.APPLICATION_STORE)
        },
        variant: "overlay-secondary",
        fullWidth: true,
        size: "md",
        text: c ? ei.intl.string(ei.t.VR2iVB) : ei.intl.string(ei.t.T1aUAX)
      })]
    }) : (0, r.jsxs)(f.e2v, {
      fullWidth: true,
      direction: "vertical",
      children: [(0, r.jsx)(f.$nd, {
        variant: "overlay-primary",
        fullWidth: true,
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: eu,
            target: ed
          }), (0, R.default)(), (0, N.pX)(er.BVt.APPLICATION_STORE)
        },
        text: ei.intl.string(ei.t.VR2iVB),
        size: "md"
      }), (0, r.jsx)(f.$nd, {
        variant: "overlay-secondary",
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: el,
            target: ec
          }), (0, P.openUserSettings)(w.X.SUBSCRIPTIONS_PANEL, {
            section: er.nc_.SUBSCRIPTIONS
          })
        },
        text: ei.intl.string(ei.t["9uDy6C"]),
        fullWidth: true,
        size: "md"
      })]
    });
  return (0, r.jsxs)("div", {
    className: s()(ea.$Y, {
      [ea.J5]: g
    }),
    children: [(0, r.jsxs)("div", {
      className: ea.jp,
      children: [y(), O(), (0, r.jsx)(Q.ZP, {
        featureSet: E()
      }), v()]
    }), (0, r.jsx)("div", {
      className: ea.ah,
      children: (0, r.jsx)("img", {
        className: ea.ah,
        alt: "",
        src: es
      })
    })]
  })
}

function em(e) {
  let {
    className: t,
    config: n
  } = e, a = (0, H.T)(n.asset), o = (0, H.T)(n.backgroundAsset), l = (0, B.gc)(null != o ? o : true), c = i.useMemo(() => {
    let e = n.gradient;
    if (null != e && null != e.colors && !(e.colors.length < 2)) return (0, B.K5)({
      gradient: e.colors,
      angle: e.angle
    }, {
      defaultAngle: 180
    })
  }, [n.gradient]), u = (0, B.x)(l, c), d = {
    color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: s()(ea.WR, t),
    style: u,
    children: [null != a && (0, r.jsx)("img", {
      alt: "",
      className: ea.TB,
      "aria-hidden": true,
      src: a
    }), (0, r.jsxs)("div", {
      className: ea.QT,
      children: [(0, r.jsx)(h.Heading, {
        className: ea.u_,
        style: d,
        variant: "heading-lg/extrabold",
        children: n.header
      }), (0, r.jsx)(h.Text, {
        className: ea.Oi,
        style: d,
        variant: "text-xs/medium",
        children: n.body
      }), null != n.additionalTerms && (0, r.jsx)(h.Text, {
        className: ea.KW,
        style: d,
        variant: "text-xxs/normal",
        children: n.additionalTerms
      }), (0, r.jsx)(q.A, {
        variant: "primary",
        size: "md",
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ef,
            target: ep
          })
        }
      })]
    })]
  })
}

function eg() {
  return (0, r.jsxs)("div", {
    className: ea.T1,
    children: [(0, r.jsx)("img", {
      className: ea.GY,
      alt: "",
      src: eo
    }), (0, r.jsxs)("div", {
      className: ea.b4,
      children: [(0, r.jsx)(h.Heading, {
        className: ea.Vz,
        variant: "heading-xl/extrabold",
        children: ei.intl.string(ei.t["3KomGa"])
      }), (0, r.jsx)(h.Text, {
        className: ea.Oi,
        variant: "text-sm/normal",
        children: ei.intl.string(ei.t.yQ06u1)
      }), (0, r.jsx)(z.A, {
        className: s()(ea.Tp, ea._c),
        textOptions: {
          textOverride: ei.intl.string(ei.t.Ve9Ge6),
          textClassName: ea.VV
        },
        color: _.$n.Colors.CUSTOM,
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ef,
            target: ep
          })
        }
      })]
    })]
  })
}
let eE = function() {
  let e = (0, A.H)(),
    {
      analyticsLocations: t
    } = (0, v.Ay)(O.A.PREMIUM_SETTINGS),
    n = (0, u.bG)([x.default], () => x.default.getCurrentUser()),
    a = (0, u.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
    s = (0, u.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
    o = (0, S.Y)(et.T7),
    [l, f] = i.useState(true),
    p = (0, I.A)({
      forceFetch: true
    }),
    _ = (0, u.bG)([Y.A], () => {
      let e = Y.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
      return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
    }),
    b = (0, u.bG)([D.A], () => D.A.enabled),
    N = i.useRef(null);
  (0, K.i)();
  let w = (0, W.m)();
  i.useEffect(() => {
    m.h.wait(async () => {
      b || e || await Promise.all([g.hP(), g.$o(), (0, E.zS)(null, null, er.tF5.DISCOVERY)]), f(false)
    })
  }, [b, e]);
  let [R, P] = i.useState(false);
  if (b) return (0, r.jsx)(y.A, {});
  if (e) return (0, r.jsx)(T.uK, {});
  let j = s && null !== a && o,
    k = p.fetched && p.isFractionalPremiumActive,
    U = null == n ? true : n.isPremiumWithPremiumGroup();
  if (!j && !k && !l && !U) return (0, r.jsx)(C.A, {
    title: ei.intl.string(ei.t.dyq9TR),
    note: null
  });
  if (!j && !k && !U || l) return (0, r.jsx)(h.y$y, {});
  let G = !!(null == a ? true : a.hasActiveTrial);
  return (0, r.jsx)(v.f5, {
    value: t,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        children: [null != _ && (0, r.jsx)(em, {
          config: _
        }), (0, r.jsx)(eh, {}), w && (0, r.jsx)(ee.A, {
          isInSettings: true
        }), null == _ && (0, r.jsx)(eg, {}), (0, r.jsx)($.A, {
          hideCTAs: true,
          headingOverride: ei.intl.string(ei.t.dnVvQS),
          hidePill: !G,
          selectedPlanColumnClassName: ea.JG,
          selectedPlanTier: et.PremiumTypes.TIER_2
        })]
      }), (0, r.jsx)(d.L, {
        innerRef: N,
        onChange: e => {
          e && !R && (M.default.track(er.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), P(true))
        },
        children: (0, r.jsx)("div", {
          ref: N,
          className: ea._Z
        })
      })]
    })
  })
}