/** Chunk was on 9207 **/
/** chunk id: 160116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => el
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk502572 = require("./502572.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk366999 = require("./366999.js"),
  Chunk531260 = require("./531260.js"),
  Chunk166403 = require("./166403.js"),
  Chunk786300 = require("./786300.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk40185 = require("./40185.js"),
  Chunk89366 = require("./89366.js"),
  Chunk637073 = require("./637073.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk549996 = require("./549996.js"),
  Chunk371764 = require("./371764.jsx"),
  Chunk130946 = require("./130946.jsx"),
  Chunk103411 = require("./103411.js"),
  Chunk534217 = require("./534217.jsx"),
  Chunk194509 = require("./194509.jsx"),
  Chunk396375 = require("./396375.jsx"),
  Chunk65470 = require("./65470.jsx"),
  Chunk792656 = require("./792656.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk939724 = require("./939724.jsx"),
  Chunk795269 = require("./795269.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk371476 = require("./371476.jsx"),
  Chunk103733 = require("./103733.js"),
  Chunk505559 = require("./505559.jsx"),
  Chunk633451 = require("./633451.jsx"),
  Chunk722274 = require("./722274.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk150522 = require("./150522.js"),
  Chunk596711 = require("./596711.js"),
  Chunk461971 = require("./461971.js"),
  Chunk828694 = require("./828694.js");

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = (e, t, i) => {
    (0, d.mMO)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: l
      } = await n.e("72820").then(n.bind(n, 281439));
      return n => (0, r.jsx)(l, J(q({}, n), {
        analyticsLocations: e,
        initialStep: i,
        premiumSubscription: t
      }))
    })
  },
  $ = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: o,
      isInReverseTrial: c,
      shouldShowReferralProgressBar: m
    } = e, {
      headingText: f,
      headingTop: b,
      showPill: E,
      userDiscountOffer: O,
      discountedPrice: x,
      buttonVisibilityRef: y
    } = ei(), {
      analyticsLocations: v
    } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), P = (0, T.c)(s.C.MARKETING_PAGE_BANNER), M = null;
    null != P && "marketingPageBanner" === P.properties.properties.oneofKind ? M = (0, r.jsx)(I.x, {
      componentId: P.id,
      promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner
    }) : o ? M = (0, r.jsx)(N.A, {
      variant: N.c.SUBSCRIBER_HOME
    }) : c ? M = (0, r.jsx)(V.A, {}) : m && (M = (0, r.jsx)(j.S, {}));
    let B = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
      Z = null != B && B.status === Y.Dmq.CANCELED && null != O,
      X = (0, S.V)(),
      q = (0, C.O)(),
      J = (0, L.U9)(q, F.pe.TIER_2) ? F.pe.TIER_2 : true,
      $ = null != B && B.status !== Y.Dmq.ACCOUNT_HOLD && B.hasAnyPremiumNitro,
      ee = (0, g.A)().isFractionalPremiumActive && !$ && null == M && !Z,
      et = (0, a.bG)([u.A], () => u.A.useReducedMotion),
      {
        visibilityPercentageRef: en,
        visibilityPercentage: er
      } = (0, k.U)(!et);
    return (0, r.jsx)("div", {
      className: l()(z.kL, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: y,
      children: (0, r.jsxs)("div", {
        className: z.Qs,
        ref: en,
        children: [E && b, (0, r.jsxs)("div", {
          className: z.N1,
          children: [(0, r.jsx)(H.A, {
            containerVisibilityPercentage: er
          }), Z && null != O.expires_at && (0, r.jsx)(w.A, {
            expiresAt: O.expires_at,
            className: K.IZ
          }), (0, r.jsx)(U.A, {
            children: Z ? W.intl.format(W.t["3yZP0G"], {
              percent: O.discount.amount
            }) : f
          }), Z && null != x && (0, r.jsx)(d.Text, {
            className: K.jG,
            variant: "text-sm/medium",
            color: "text-strong",
            children: W.intl.format(W.t["3Q4wCy"], {
              discountedPrice: x,
              billingPeriod: (0, h.Ke)(O.discount.user_usage_limit_interval),
              numMonths: O.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: ee || Z ? z.UJ : true,
          children: [ee && (0, r.jsx)(D.A, {
            size: "md",
            hasActivePromotion: !!o,
            subscriptionTier: null != (t = null == X || null == (n = X.subscription_trial) ? true : n.sku_id) ? t : J
          }), Z && (0, r.jsx)(d.Button, {
            variant: "expressive",
            icon: d.tvc,
            size: "md",
            text: W.intl.string(W.t.zrCzVB),
            onClick: () => Q(v, B, G.g.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(R.A, {
            variant: ee || Z ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: W.intl.string(W.t["3KomGa"])
          })]
        }), M]
      })
    })
  },
  ee = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: s,
      headingTop: o,
      userDiscountOffer: u,
      discountedPrice: m,
      buttonVisibilityRef: f
    } = ei(), {
      analyticsLocations: b
    } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), E = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()), O = null != E && E.status === Y.Dmq.CANCELED && null != u, x = (0, S.V)(), T = (0, C.O)(), I = (0, L.U9)(T, F.pe.TIER_2) ? F.pe.TIER_2 : true, N = null != E && E.status !== Y.Dmq.ACCOUNT_HOLD && E.hasAnyPremiumNitro, y = (0, g.A)().isFractionalPremiumActive && !N && !O;
    return (0, r.jsxs)("div", {
      className: l()(K.kL, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: f,
      children: [(0, r.jsx)("img", {
        src: Z,
        alt: "",
        className: K.NC
      }), (0, r.jsxs)("div", {
        className: O ? K.Nr : K.Qs,
        children: [o, O && null != u.expires_at && (0, r.jsx)(w.A, {
          expiresAt: u.expires_at,
          className: K.IZ
        }), (0, r.jsx)(d.Heading, {
          variant: "display-lg",
          color: "always-white",
          className: O ? K.bc : K.wx,
          children: O && null != u ? W.intl.format(W.t["3yZP0G"], {
            percent: u.discount.amount
          }) : s
        }), O && null != m && (0, r.jsx)(d.Text, {
          className: K.RB,
          variant: "text-sm/medium",
          color: "always-white",
          children: W.intl.format(W.t["3Q4wCy"], {
            discountedPrice: m,
            billingPeriod: (0, h.Ke)(u.discount.user_usage_limit_interval),
            numMonths: u.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: K.$J,
          children: [y && (0, r.jsx)(P.A, {
            color: c.XD.BRAND,
            className: l()(K.x6, K.xF),
            subscriptionTier: null != (t = null == x || null == (n = x.subscription_trial) ? true : n.sku_id) ? t : I
          }), O && (0, r.jsxs)("div", {
            className: K.Cg,
            children: [(0, r.jsx)(d.Button, {
              variant: "expressive",
              icon: d.tvc,
              size: "md",
              text: W.intl.string(W.t.zrCzVB),
              onClick: () => Q(b, E, G.g.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(R.A, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
              fullWidth: true
            })]
          }), !O && (0, r.jsx)("div", {
            className: K.UO,
            children: (0, r.jsx)(v.A, {
              look: c.pR.FILLED,
              color: c.XD.BRAND,
              textOptions: {
                textOverride: W.intl.string(W.t["3KomGa"])
              },
              className: K.x6
            })
          })]
        })]
      })]
    })
  },
  et = () => {
    let {
      headingText: e,
      headingTop: t
    } = ei();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: X,
        alt: "",
        className: K.HJ
      }), (0, r.jsx)("div", {
        className: K.iW,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, r.jsxs)("div", {
          className: K.eF,
          children: [t, (0, r.jsx)(d.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: K.wx,
            children: e
          }), (0, r.jsx)("div", {
            className: K.UO,
            children: (0, r.jsx)(v.A, {
              look: c.pR.FILLED,
              color: c.XD.BRAND,
              textOptions: {
                textOverride: W.intl.string(W.t["3KomGa"])
              },
              className: K.x6
            })
          }), (0, r.jsx)(j.S, {
            className: K.Qq
          })]
        })
      })]
    })
  },
  en = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = ei();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: X,
        alt: "",
        className: K.HJ
      }), (0, r.jsxs)("div", {
        className: K.k1,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: K.nl,
          children: [i, (0, r.jsx)(d.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: K.wx,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: K.UO,
          children: (0, r.jsx)(v.A, {
            look: c.pR.FILLED,
            color: c.XD.BRAND,
            textOptions: {
              textOverride: W.intl.string(W.t["3KomGa"])
            },
            className: K.x6
          })
        }), !t && (0, r.jsx)(V.A, {}), t && (0, r.jsx)(N.A, {
          variant: N.c.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [er, ei] = (0, Chunk786300.A)(),
  el = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: s,
      discountedPrice: a
    } = e, {
      analyticsLocations: c
    } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), u = (0, x.d)(), A = (0, E.cg)(), f = (0, O.QQ)(), h = W.intl.string(W.t.qYKftX), C = (0, y.m)(), S = (0, r.jsx)(ee, {
      className: t
    }), T = W.intl.string(W.t.ifwQZb), {
      fractionalState: I,
      endsAt: N
    } = (0, g.A)(), j = (0, m.Ay)(N, m.yE.CREDITS_ENDS_IN);
    u || A ? S = (0, r.jsx)(en, {
      isEligibleForBogoPromotion: A
    }) : C && (h = W.intl.string(W.t.qYKftX), S = (0, r.jsx)(et, {}));
    let v = null;
    if (I === F.xc.NONE || u) v = n ? (0, r.jsx)(B.A, {
      enablePremiumBrandRefresh: true,
      text: h
    }) : (0, r.jsx)(M.ir, {
      className: l()(K.Av, {
        [K.R]: !f
      }),
      text: h,
      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      f = true;
      let e = (0, r.jsx)("div", {
          className: K.nW,
          children: (0, r.jsx)(d.mir, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = W.intl.format(W.t["yR+oDD"], {
          helpCenterLink: b.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
        });
      v = (0, r.jsx)(o.A, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: K.YL,
        position: "right",
        children: t => (0, r.jsx)("div", J(q({}, t), {
          className: K.V_,
          children: (0, r.jsx)("div", {
            className: K.eL,
            children: n ? (0, r.jsx)(B.A, {
              enablePremiumBrandRefresh: true,
              text: j
            }) : (0, r.jsx)(M.R, {
              className: l()(K.Av, {
                [K.R]: !f
              }),
              text: j,
              colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(p.f5, {
      value: c,
      children: (0, r.jsx)(er.Provider, {
        value: {
          headingText: T,
          headingTop: v,
          showPill: f,
          userDiscountOffer: s,
          discountedPrice: a,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)($, {
          className: t,
          isEligibleForBogoPromotion: A,
          isInReverseTrial: u,
          shouldShowReferralProgressBar: C
        }) : S
      })
    })
  }