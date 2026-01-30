/** Chunk was on 2827 **/
/** chunk id: 106922, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ef,
  c: () => eg
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk607399 = require("./607399.js"),
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
let ec = "to_premium_home_button",
  ed = "premium home page",
  eu = "gifting_button",
  e_ = "payment modal";

function ep(e) {
  let {
    premiumSubscription: t,
    isDiscountApplied: n,
    activeDiscountInfo: i,
    theme: l
  } = e, s = t.hasActiveTrial, a = t.planIdFromItems === en.gD.PREMIUM_YEAR_TIER_2, c = n || s, d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0, u = en.hd[t.planIdFromItems], _ = k.Ay.formatPriceString(k.Ay.getDefaultPrice(u.id), u.interval), {
    enabled: p
  } = V.K.getCurrentConfig({
    location: "SubscriptionUserHeroSubheader"
  });
  if (c) {
    var g, f, b;
    return (0, r.jsxs)(r.Fragment, {
      children: [(s || !a) && (0, r.jsx)(J.ir, {
        text: s ? el.intl.string(el.t.qYKftX) : el.intl.string(el.t.EyjDRE),
        className: es.uS,
        colorOptions: (0, m.Mw)(l) ? J.at.PREMIUM_TIER_2_WHITE_FILL : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
      }), (s || !a) && (0, r.jsx)("div", {
        className: es.on
      }), (0, r.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: es.KB,
        children: p ? "" : s ? el.intl.format(el.t["2CGBri"], {
          remainingTime: d,
          price: _
        }) : a ? el.intl.format(el.t["+qqh6g"], {
          percent: null != (g = null == i ? true : i.percentage) ? g : en.Cq,
          regularPrice: _
        }) : el.intl.formatToPlainString(el.t["3ZiutU"], {
          percent: null != (f = null == i ? true : i.percentage) ? f : en._$,
          regularPrice: _,
          numMonths: null != (b = null == i ? true : i.duration) ? b : en.OJ
        })
      })]
    })
  }
  return p ? (0, r.jsx)("div", {
    style: {
      marginBottom: "18px"
    }
  }) : (0, r.jsx)($.A, {
    variant: true,
    subscriptionTier: en.pe.TIER_2,
    interval: u.interval
  })
}

function em() {
  let e = (0, B.k5)(),
    t = (0, B.nf)(),
    n = (0, O.Ay)(),
    i = (0, u.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
    l = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
    a = null == l ? true : l.isPremiumWithPremiumGroup(),
    o = (0, T.A)(),
    c = (0, H.d)(),
    d = null !== i && null !== i.planIdFromItems;
  if (!d && !o.isFractionalPremiumActive && !a) return null;
  let _ = o.isFractionalPremiumActive,
    g = null !== i && i.hasActiveTrial;
  return (0, r.jsxs)("div", {
    className: s()(es.$Y, {
      [es.J5]: e || g
    }),
    children: [(0, r.jsxs)("div", {
      className: es.jp,
      children: [a ? (0, r.jsx)(A.Heading, {
        variant: "display-md",
        color: "always-white",
        className: es._K,
        children: (0, er.DP)()
      }) : (0, r.jsx)(M.A, {
        className: es.TJ
      }), a ? (0, r.jsx)("div", {
        style: {
          marginBottom: "18px"
        }
      }) : _ && !c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(J.R, {
          text: el.intl.string(el.t.uXF4c4),
          className: es.rd,
          colorOptions: J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, r.jsx)(A.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: es.sQ,
          children: el.intl.format(el.t.sK7fGl, {
            helpCenterLink: U.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT)
          })
        })]
      }) : d ? (0, r.jsx)(ep, {
        premiumSubscription: i,
        isDiscountApplied: e,
        activeDiscountInfo: t,
        theme: n
      }) : c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(J.ir, {
          text: el.intl.string(el.t.qYKftX),
          className: es.uS,
          colorOptions: (0, m.Mw)(n) ? J.at.PREMIUM_TIER_2_WHITE_FILL : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, r.jsx)(A.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: es.KB,
          children: el.intl.format(el.t["/SfHwl"], {
            weeks: 1
          })
        })]
      }) : null, (0, r.jsx)(Q.ZP, {
        featureSet: (null == l ? true : l.isPremiumGroupPrimary()) ? Q.Nz.PREMIUM_GROUP_PRIMARY : (null == l ? true : l.isPremiumGroupMember()) ? Q.Nz.PREMIUM_GROUP_MEMBER : _ ? Q.Nz.FRACTIONAL_PREMIUM : Q.Nz.DEFAULT
      }), _ && !d ? (0, r.jsxs)(p.e2v, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(q.A, {
          defaultTextOverride: c ? el.intl.string(el.t.YScQSF) : el.intl.string(el.t["0b3YRn"])
        }), (0, r.jsx)(p.$nd, {
          onClick: () => {
            G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: ec,
              target: ed
            }), (0, P.default)(), (0, j.pX)(ei.BVt.APPLICATION_STORE)
          },
          variant: "overlay-secondary",
          fullWidth: true,
          size: "md",
          text: c ? el.intl.string(el.t.VR2iVB) : el.intl.string(el.t.T1aUAX)
        })]
      }) : (0, r.jsxs)(p.e2v, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, r.jsx)(p.$nd, {
          variant: "overlay-primary",
          fullWidth: true,
          onClick: () => {
            G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: ec,
              target: ed
            }), (0, P.default)(), (0, j.pX)(ei.BVt.APPLICATION_STORE)
          },
          text: el.intl.string(el.t.VR2iVB),
          size: "md"
        }), (0, r.jsx)(p.$nd, {
          variant: "overlay-secondary",
          onClick: () => {
            G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
              cta_type: "to_subscriptions_button",
              target: "subscriptions settings"
            }), (0, R.openUserSettings)(v.X.SUBSCRIPTIONS_PANEL, {
              section: ei.nc_.SUBSCRIPTIONS
            })
          },
          text: el.intl.string(el.t["9uDy6C"]),
          fullWidth: true,
          size: "md"
        })]
      })]
    }), (0, r.jsx)("div", {
      className: es.ah,
      children: (0, r.jsx)("img", {
        className: es.ah,
        alt: "",
        src: ea
      })
    })]
  })
}

function eg(e) {
  let {
    className: t,
    config: n
  } = e, l = (0, Y.T)(n.asset), a = (0, Y.T)(n.backgroundAsset), o = (0, F.gc)(null != a ? a : true), c = i.useMemo(() => {
    let e = n.gradient;
    if (null != e && null != e.colors && !(e.colors.length < 2)) return (0, F.K5)({
      gradient: e.colors,
      angle: e.angle
    }, {
      defaultAngle: 180
    })
  }, [n.gradient]), d = (0, F.x)(o, c), u = {
    color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)"
  };
  return (0, r.jsxs)("div", {
    className: s()(es.WR, t),
    style: d,
    children: [null != l && (0, r.jsx)("img", {
      alt: "",
      className: es.TB,
      "aria-hidden": true,
      src: l
    }), (0, r.jsxs)("div", {
      className: es.QT,
      children: [(0, r.jsx)(A.Heading, {
        className: es.u_,
        style: u,
        variant: "heading-lg/extrabold",
        children: n.header
      }), (0, r.jsx)(A.Text, {
        className: es.Oi,
        style: u,
        variant: "text-xs/medium",
        children: n.body
      }), null != n.additionalTerms && (0, r.jsx)(A.Text, {
        className: es.KW,
        style: u,
        variant: "text-xxs/normal",
        children: n.additionalTerms
      }), (0, r.jsx)(X.A, {
        variant: "primary",
        size: "md",
        onClick: () => {
          G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: eu,
            target: e_
          })
        }
      })]
    })]
  })
}

function eA() {
  return (0, r.jsxs)("div", {
    className: es.T1,
    children: [(0, r.jsx)("img", {
      className: es.GY,
      alt: "",
      src: eo
    }), (0, r.jsxs)("div", {
      className: es.b4,
      children: [(0, r.jsx)(A.Heading, {
        className: es.Vz,
        variant: "heading-xl/extrabold",
        children: el.intl.string(el.t["3KomGa"])
      }), (0, r.jsx)(A.Text, {
        className: es.Oi,
        variant: "text-sm/normal",
        children: el.intl.string(el.t.yQ06u1)
      }), (0, r.jsx)(Z.A, {
        className: s()(es.Tp, es._c),
        textOptions: {
          textOverride: el.intl.string(el.t.Ve9Ge6),
          textClassName: es.VV
        },
        color: g.$n.Colors.CUSTOM,
        onClick: () => {
          G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: eu,
            target: e_
          })
        }
      })]
    })]
  })
}
let ef = function() {
  let e = (0, S.H)(),
    {
      analyticsLocations: t
    } = (0, x.Ay)(C.A.PREMIUM_SETTINGS),
    n = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
    l = (0, u.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
    s = (0, u.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
    a = (0, I.Y)(en.T7),
    [o, p] = i.useState(true),
    m = (0, T.A)({
      forceFetch: true
    }),
    g = (0, u.bG)([W.A], () => {
      let e = W.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
      return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
    }),
    O = !(c.Fr || c.v1) && null != g,
    j = (0, u.bG)([D.A], () => D.A.enabled),
    v = i.useRef(null);
  (0, z.i)();
  let P = (0, K.m)();
  i.useEffect(() => {
    f.h.wait(async () => {
      j || e || await Promise.all([b.hP(), b.$o(), (0, h.zS)(null, null, ei.tF5.DISCOVERY)]), p(false)
    })
  }, [j, e]);
  let [R, M] = i.useState(false);
  if (j) return (0, r.jsx)(E.A, {});
  if (e) return (0, r.jsx)(y.uK, {});
  let U = s && null !== l && a,
    k = m.fetched && m.isFractionalPremiumActive,
    B = null == n ? true : n.isPremiumWithPremiumGroup();
  if (!U && !k && !o && !B) return (0, r.jsx)(N.A, {
    title: el.intl.string(el.t.dyq9TR),
    note: null
  });
  if (!U && !k && !B || o) return (0, r.jsx)(A.y$y, {});
  let H = !!(null == l ? true : l.hasActiveTrial);
  return (0, r.jsx)(x.f5, {
    value: t,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        children: [O && (0, r.jsx)(eg, {
          config: g
        }), (0, r.jsx)(em, {}), P && (0, r.jsx)(et.A, {
          isInSettings: true
        }), !O && (0, r.jsx)(eA, {}), (0, r.jsx)(ee.A, {
          hideCTAs: true,
          headingOverride: el.intl.string(el.t.dnVvQS),
          hidePill: !H,
          selectedPlanColumnClassName: es.JG,
          selectedPlanTier: en.PremiumTypes.TIER_2
        })]
      }), (0, r.jsx)(_.L, {
        innerRef: v,
        onChange: e => {
          e && !R && (G.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), M(true))
        },
        children: (0, r.jsx)("div", {
          ref: v,
          className: es._Z
        })
      })]
    })
  })
}