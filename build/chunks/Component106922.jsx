/** Chunk was on 60667 **/
/** chunk id: 106922, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eA,
  c: () => em
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
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
let eo = "to_premium_home_button",
  ec = "premium home page",
  ed = "gifting_button",
  eu = "payment modal";

function e_(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: l
  } = e, s = t.hasActiveTrial, a = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2, c = n || s, d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0, u = et.hd[t.planIdFromItems], _ = G.Ay.formatPriceString(G.Ay.getDefaultPrice(u.id), u.interval), {
    enabled: m
  } = H.K.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  });
  if (c) {
    var A, f, h;
    return (0, r.jsxs)(r.Fragment, {
      children: [(s || !a) && (0, r.jsx)(q.ir, {
        text: s ? ei.intl.string(ei.t.qYKftX) : ei.intl.string(ei.t.EyjDRE),
        className: el.uS,
        colorOptions: (0, p.Mw)(l) ? q.at.PREMIUM_TIER_2_WHITE_FILL : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (s || !a) && (0, r.jsx)("div", {
        className: el.on
      }), (0, r.jsx)(g.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: el.KB,
        children: m ? "" : s ? ei.intl.format(ei.t["2CGBri"], {
          remainingTime: d,
          price: _
        }) : a ? ei.intl.format(ei.t["+qqh6g"], {
          percent: null != (A = null == i ? true : i.percentage) ? A : et.Cq,
          regularPrice: _
        }) : ei.intl.formatToPlainString(ei.t["3ZiutU"], {
          percent: null != (f = null == i ? true : i.percentage) ? f : et._$,
          regularPrice: _,
          numMonths: null != (h = null == i ? true : i.duration) ? h : et.OJ
        })
      })]
    })
  }
  return m ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)(Q.A, {
    variant: true,
    subscriptionTier: et.pe.TIER_2,
    interval: u.interval
  })
}

function ep() {
  let e = (0, k.k5)(),
    t = (0, k.nf)(),
    n = (0, E.Ay)(),
    i = (0, d.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
    l = (0, d.bG)([D.default], () => D.default.getCurrentUser()),
    a = null == l ? true : l.isPremiumWithPremiumGroup(),
    o = (0, I.A)(),
    c = (0, V.d)(),
    u = null !== i && null !== i.planIdFromItems;
  if (!u && !o.isFractionalPremiumActive && !a) return null;
  let m = o.isFractionalPremiumActive,
    A = null !== i && i.hasActiveTrial;
  return (0, r.jsxs)("div", {
    className: s()(el.$Y, {
      [el.J5]: e || A
    }),
    children: [(0, r.jsxs)("div", {
      className: el.jp,
      children: [a ? (0, r.jsx)(g.Heading, {
        variant: "display-md",
        color: "always-white",
        className: el._K,
        children: (0, en.DP)()
      }) : (0, r.jsx)(L.A, {
        className: el.TJ
      }), a ? (0, r.jsx)("div", {
        style: {
          marginBottom: "18px"
        }
      }) : m && !c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(q.R, {
          text: ei.intl.string(ei.t.uXF4c4),
          className: el.rd,
          colorOptions: q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, r.jsx)(g.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: el.sQ,
          children: ei.intl.format(ei.t.sK7fGl, {
            helpCenterLink: U.A.getArticleURL(er.MVz.FRACTIONAL_PREMIUM_ABOUT)
          })
        })]
      }) : u ? (0, r.jsx)(e_, {
        premiumSubscription: i,
        isDiscountApplied: e,
        activeDiscountInfo: t,
        theme: n
      }) : c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(q.ir, {
          text: ei.intl.string(ei.t.qYKftX),
          className: el.uS,
          colorOptions: (0, p.Mw)(n) ? q.at.PREMIUM_TIER_2_WHITE_FILL : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, r.jsx)(g.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: el.KB,
          children: ei.intl.format(ei.t["/SfHwl"], {
            weeks: 1
          })
        })]
      }) : null, (0, r.jsx)(J.ZP, {
        featureSet: (null == l ? true : l.isPremiumGroupPrimary()) ? J.Nz.PREMIUM_GROUP_PRIMARY : (null == l ? true : l.isPremiumGroupMember()) ? J.Nz.PREMIUM_GROUP_MEMBER : m ? J.Nz.FRACTIONAL_PREMIUM : J.Nz.DEFAULT
      }), m && !u ? (0, r.jsxs)(_.e2v, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(X.A, {
          defaultTextOverride: c ? ei.intl.string(ei.t.YScQSF) : ei.intl.string(ei.t["0b3YRn"])
        }), (0, r.jsx)(_.$nd, {
          onClick: () => {
            M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: eo,
              target: ec
            }), (0, y.default)(), (0, v.pX)(er.BVt.APPLICATION_STORE)
          },
          variant: "overlay-secondary",
          fullWidth: true,
          size: "md",
          text: c ? ei.intl.string(ei.t.VR2iVB) : ei.intl.string(ei.t.T1aUAX)
        })]
      }) : (0, r.jsxs)(_.e2v, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(_.$nd, {
          variant: "overlay-primary",
          fullWidth: true,
          onClick: () => {
            M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: eo,
              target: ec
            }), (0, y.default)(), (0, v.pX)(er.BVt.APPLICATION_STORE)
          },
          text: ei.intl.string(ei.t.VR2iVB),
          size: "md"
        }), (0, r.jsx)(_.$nd, {
          variant: "overlay-secondary",
          onClick: () => {
            M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: "to_subscriptions_button",
              target: "subscriptions settings"
            }), (0, P.openUserSettings)(N.X.SUBSCRIPTIONS_PANEL, {
              section: er.nc_.SUBSCRIPTIONS
            })
          },
          text: ei.intl.string(ei.t["9uDy6C"]),
          fullWidth: true,
          size: "md"
        })]
      })]
    }), (0, r.jsx)("div", {
      className: el.ah,
      children: (0, r.jsx)("img", {
        className: el.ah,
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
  } = e, l = (0, F.T)(n.asset), a = (0, F.T)(n.backgroundAsset), o = (0, B.gc)(null != a ? a : true), c = i.useMemo(() => {
    let e = n.gradient;
    if (null != e && null != e.colors && !(e.colors.length < 2)) return (0, B.K5)({
      gradient: e.colors,
      angle: e.angle
    }, {
      defaultAngle: 180
    })
  }, [n.gradient]), d = (0, B.x)(o, c), u = {
    color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: s()(el.WR, t),
    style: d,
    children: [null != l && (0, r.jsx)("img", {
      alt: "",
      className: el.TB,
      "aria-hidden": true,
      src: l
    }), (0, r.jsxs)("div", {
      className: el.QT,
      children: [(0, r.jsx)(g.Heading, {
        className: el.u_,
        style: u,
        variant: "heading-lg/extrabold",
        children: n.header
      }), (0, r.jsx)(g.Text, {
        className: el.Oi,
        style: u,
        variant: "text-xs/medium",
        children: n.body
      }), null != n.additionalTerms && (0, r.jsx)(g.Text, {
        className: el.KW,
        style: u,
        variant: "text-xxs/normal",
        children: n.additionalTerms
      }), (0, r.jsx)(Z.A, {
        variant: "primary",
        size: "md",
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ed,
            target: eu
          })
        }
      })]
    })]
  })
}

function eg() {
  return (0, r.jsxs)("div", {
    className: el.T1,
    children: [(0, r.jsx)("img", {
      className: el.GY,
      alt: "",
      src: ea
    }), (0, r.jsxs)("div", {
      className: el.b4,
      children: [(0, r.jsx)(g.Heading, {
        className: el.Vz,
        variant: "heading-xl/extrabold",
        children: ei.intl.string(ei.t["3KomGa"])
      }), (0, r.jsx)(g.Text, {
        className: el.Oi,
        variant: "text-sm/normal",
        children: ei.intl.string(ei.t.yQ06u1)
      }), (0, r.jsx)(K.A, {
        className: s()(el.Tp, el._c),
        textOptions: {
          textOverride: ei.intl.string(ei.t.Ve9Ge6),
          textClassName: el.VV
        },
        color: m.$n.Colors.CUSTOM,
        onClick: () => {
          M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: ed,
            target: eu
          })
        }
      })]
    })]
  })
}
let eA = function() {
  let e = (0, C.H)(),
    {
      analyticsLocations: t
    } = (0, O.Ay)(x.A.PREMIUM_SETTINGS),
    n = (0, d.bG)([D.default], () => D.default.getCurrentUser()),
    l = (0, d.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
    s = (0, d.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
    a = (0, T.Y)(et.T7),
    [o, _] = i.useState(true),
    p = (0, I.A)({
      forceFetch: true
    }),
    m = (0, d.bG)([Y.A], () => {
      let e = Y.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
      return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
    }),
    E = (0, d.bG)([R.A], () => R.A.enabled),
    v = i.useRef(null);
  (0, z.i)();
  let N = (0, W.m)();
  i.useEffect(() => {
    A.h.wait(async () => {
      E || e || await Promise.all([f.hP(), f.$o(), (0, h.zS)(null, null, er.tF5.DISCOVERY)]), _(false)
    })
  }, [E, e]);
  let [y, P] = i.useState(false);
  if (E) return (0, r.jsx)(b.A, {});
  if (e) return (0, r.jsx)(S.uK, {});
  let L = s && null !== l && a,
    U = p.fetched && p.isFractionalPremiumActive,
    G = null == n ? true : n.isPremiumWithPremiumGroup();
  if (!L && !U && !o && !G) return (0, r.jsx)(j.A, {
    title: ei.intl.string(ei.t.dyq9TR),
    note: null
  });
  if (!L && !U && !G || o) return (0, r.jsx)(g.y$y, {});
  let k = !!(null == l ? true : l.hasActiveTrial);
  return (0, r.jsx)(O.f5, {
    value: t,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        children: [null != m && (0, r.jsx)(em, {
          config: m
        }), (0, r.jsx)(ep, {}), N && (0, r.jsx)(ee.A, {
          isInSettings: true
        }), null == m && (0, r.jsx)(eg, {}), (0, r.jsx)($.A, {
          hideCTAs: true,
          headingOverride: ei.intl.string(ei.t.dnVvQS),
          hidePill: !k,
          selectedPlanColumnClassName: el.JG,
          selectedPlanTier: et.PremiumTypes.TIER_2
        })]
      }), (0, r.jsx)(u.L, {
        innerRef: v,
        onChange: e => {
          e && !y && (M.default.track(er.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), P(true))
        },
        children: (0, r.jsx)("div", {
          ref: v,
          className: el._Z
        })
      })]
    })
  })
}