/** Chunk was on web.js **/
/** chunk id: 160116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = (e, t, i) => {
    (0, u.mMO)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await n.e("72820").then(n.bind(n, 281439));
      return n => (0, r.jsx)(a, J(Q({}, n), {
        analyticsLocations: e,
        initialStep: i,
        premiumSubscription: t
      }))
    })
  },
  et = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: l,
      isInReverseTrial: c,
      shouldShowReferralProgressBar: _
    } = e, {
      headingText: g,
      headingTop: E,
      showPill: b,
      userDiscountOffer: O,
      discountedPrice: v,
      buttonVisibilityRef: N
    } = es(), {
      analyticsLocations: w
    } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA), P = (0, S.c)(s.C.MARKETING_PAGE_BANNER), M = null;
    null != P && "marketingPageBanner" === P.properties.properties.oneofKind ? M = (0, r.jsx)(T.x, {
      componentId: P.id,
      promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner
    }) : l ? M = (0, r.jsx)(C.A, {
      variant: C.c.SUBSCRIBER_HOME
    }) : c ? M = (0, r.jsx)(B.A, {}) : _ && (M = (0, r.jsx)(R.S, {}));
    let V = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
      q = null != V && V.status === Y.Dmq.CANCELED && null != O,
      X = (0, I.V)(),
      Z = (0, A.O)(),
      Q = (0, L.U9)(Z, H.pe.TIER_2) ? H.pe.TIER_2 : true,
      $ = null != V && V.status !== Y.Dmq.ACCOUNT_HOLD && V.hasAnyPremiumNitro,
      J = (0, h.A)().isFractionalPremiumActive && !$ && null == M && !q,
      et = (0, o.bG)([d.A], () => d.A.useReducedMotion),
      {
        visibilityPercentageRef: en,
        visibilityPercentage: er
      } = (0, G.U)(!et);
    return (0, r.jsx)("div", {
      className: a()(z.kL, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: N,
      children: (0, r.jsxs)("div", {
        className: z.Qs,
        ref: en,
        children: [b && E, (0, r.jsxs)("div", {
          className: z.N1,
          children: [(0, r.jsx)(F.A, {
            containerVisibilityPercentage: er
          }), q && null != O.expires_at && (0, r.jsx)(j.A, {
            expiresAt: O.expires_at,
            className: K.IZ
          }), (0, r.jsx)(U.A, {
            children: q ? W.intl.format(W.t["3yZP0G"], {
              percent: O.discount.amount
            }) : g
          }), q && null != v && (0, r.jsx)(u.Text, {
            className: K.jG,
            variant: "text-sm/medium",
            color: "text-strong",
            children: W.intl.format(W.t["3Q4wCy"], {
              discountedPrice: v,
              billingPeriod: (0, y.Ke)(O.discount.user_usage_limit_interval),
              numMonths: O.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: J || q ? z.UJ : true,
          children: [J && (0, r.jsx)(x.A, {
            size: "md",
            hasActivePromotion: !!l,
            subscriptionTier: null != (t = null == X || null == (n = X.subscription_trial) ? true : n.sku_id) ? t : Q
          }), q && (0, r.jsx)(u.Button, {
            variant: "expressive",
            icon: u.tvc,
            size: "md",
            text: W.intl.string(W.t.zrCzVB),
            onClick: () => ee(w, V, k.g.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(D.A, {
            variant: J || q ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: W.intl.string(W.t["3KomGa"])
          })]
        }), M]
      })
    })
  },
  en = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: s,
      headingTop: l,
      userDiscountOffer: d,
      discountedPrice: _,
      buttonVisibilityRef: g
    } = es(), {
      analyticsLocations: E
    } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA), b = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()), O = null != b && b.status === Y.Dmq.CANCELED && null != d, v = (0, I.V)(), S = (0, A.O)(), T = (0, L.U9)(S, H.pe.TIER_2) ? H.pe.TIER_2 : true, C = null != b && b.status !== Y.Dmq.ACCOUNT_HOLD && b.hasAnyPremiumNitro, N = (0, h.A)().isFractionalPremiumActive && !C && !O;
    return (0, r.jsxs)("div", {
      className: a()(K.kL, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: q,
        alt: "",
        className: K.NC
      }), (0, r.jsxs)("div", {
        className: O ? K.Nr : K.Qs,
        children: [l, O && null != d.expires_at && (0, r.jsx)(j.A, {
          expiresAt: d.expires_at,
          className: K.IZ
        }), (0, r.jsx)(u.Heading, {
          variant: "display-lg",
          color: "always-white",
          className: O ? K.bc : K.wx,
          children: O && null != d ? W.intl.format(W.t["3yZP0G"], {
            percent: d.discount.amount
          }) : s
        }), O && null != _ && (0, r.jsx)(u.Text, {
          className: K.RB,
          variant: "text-sm/medium",
          color: "always-white",
          children: W.intl.format(W.t["3Q4wCy"], {
            discountedPrice: _,
            billingPeriod: (0, y.Ke)(d.discount.user_usage_limit_interval),
            numMonths: d.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: K.$J,
          children: [N && (0, r.jsx)(P.A, {
            color: c.XD.BRAND,
            className: a()(K.x6, K.xF),
            subscriptionTier: null != (t = null == v || null == (n = v.subscription_trial) ? true : n.sku_id) ? t : T
          }), O && (0, r.jsxs)("div", {
            className: K.Cg,
            children: [(0, r.jsx)(u.Button, {
              variant: "expressive",
              icon: u.tvc,
              size: "md",
              text: W.intl.string(W.t.zrCzVB),
              onClick: () => ee(E, b, k.g.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(D.A, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
              fullWidth: true
            })]
          }), !O && (0, r.jsx)("div", {
            className: K.UO,
            children: (0, r.jsx)(w.A, {
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
  er = () => {
    let {
      headingText: e,
      headingTop: t
    } = es();
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
          children: [t, (0, r.jsx)(u.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: K.wx,
            children: e
          }), (0, r.jsx)("div", {
            className: K.UO,
            children: (0, r.jsx)(w.A, {
              look: c.pR.FILLED,
              color: c.XD.BRAND,
              textOptions: {
                textOverride: W.intl.string(W.t["3KomGa"])
              },
              className: K.x6
            })
          }), (0, r.jsx)(R.S, {
            className: K.Qq
          })]
        })
      })]
    })
  },
  ei = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = es();
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
          children: [i, (0, r.jsx)(u.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: K.wx,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: K.UO,
          children: (0, r.jsx)(w.A, {
            look: c.pR.FILLED,
            color: c.XD.BRAND,
            textOptions: {
              textOverride: W.intl.string(W.t["3KomGa"])
            },
            className: K.x6
          })
        }), !t && (0, r.jsx)(B.A, {}), t && (0, r.jsx)(C.A, {
          variant: C.c.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [ea, es] = (0, Chunk786300.A)(),
  eo = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: s,
      discountedPrice: o
    } = e, {
      analyticsLocations: c
    } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA), d = (0, v.d)(), m = (0, b.cg)(), g = (0, O.QQ)(), y = W.intl.string(W.t.qYKftX), A = (0, N.m)(), I = (0, r.jsx)(en, {
      className: t
    }), S = W.intl.string(W.t.ifwQZb), {
      fractionalState: T,
      endsAt: C
    } = (0, h.A)(), R = (0, _.Ay)(C, _.yE.CREDITS_ENDS_IN);
    d || m ? I = (0, r.jsx)(ei, {
      isEligibleForBogoPromotion: m
    }) : A && (y = W.intl.string(W.t.qYKftX), I = (0, r.jsx)(er, {}));
    let w = null;
    if (T === H.xc.NONE || d) w = n ? (0, r.jsx)(V.A, {
      enablePremiumBrandRefresh: true,
      text: y
    }) : (0, r.jsx)(M.ir, {
      className: a()(K.Av, {
        [K.R]: !g
      }),
      text: y,
      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      g = true;
      let e = (0, r.jsx)("div", {
          className: K.nW,
          children: (0, r.jsx)(u.mir, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = W.intl.format(W.t["yR+oDD"], {
          helpCenterLink: E.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
        });
      w = (0, r.jsx)(l.A, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: K.YL,
        position: "right",
        children: t => (0, r.jsx)("div", J(Q({}, t), {
          className: K.V_,
          children: (0, r.jsx)("div", {
            className: K.eL,
            children: n ? (0, r.jsx)(V.A, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(M.R, {
              className: a()(K.Av, {
                [K.R]: !g
              }),
              text: R,
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
      children: (0, r.jsx)(ea.Provider, {
        value: {
          headingText: S,
          headingTop: w,
          showPill: g,
          userDiscountOffer: s,
          discountedPrice: o,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(et, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: d,
          shouldShowReferralProgressBar: A
        }) : I
      })
    })
  }