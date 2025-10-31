/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk79766 = require("./79766.js"),
  Chunk442837 = require("./442837.js"),
  Chunk589358 = require("./589358.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
  Chunk78839 = require("./78839.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk715130 = require("./715130.js"),
  Chunk179918 = require("./179918.jsx"),
  Chunk8647 = require("./8647.jsx"),
  Chunk533525 = require("./533525.js"),
  Chunk647277 = require("./647277.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk403503 = require("./403503.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk175418 = require("./175418.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk543581 = require("./543581.jsx"),
  Chunk84804 = require("./84804.jsx"),
  Chunk184176 = require("./184176.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk644219 = require("./644219.js"),
  Chunk526980 = require("./526980.js"),
  Chunk872905 = require("./872905.js"),
  Chunk578478 = require("./578478.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let $ = (e, t, i) => {
    (0, u.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await n.e("26526").then(n.bind(n, 48813));
      return n => (0, r.jsx)(a, J(X({}, n), {
        analyticsLocations: e,
        initialStep: i,
        premiumSubscription: t
      }))
    })
  },
  ee = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: l,
      isInReverseTrial: c,
      shouldShowReferralProgressBar: p
    } = e, {
      headingText: g,
      headingTop: E,
      showPill: y,
      userDiscountOffer: O,
      discountedPrice: v,
      buttonVisibilityRef: N
    } = ea(), {
      analyticsLocations: P
    } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), w = (0, S.H)(o.I.MARKETING_PAGE_BANNER), M = null;
    null != w && "marketingPageBanner" === w.properties.properties.oneofKind ? M = (0, r.jsx)(A.u, {
      componentId: w.id,
      promotionBannerMarketingComponentFields: w.properties.properties.marketingPageBanner
    }) : l ? M = (0, r.jsx)(C.Z, {
      variant: C.C.SUBSCRIBER_HOME
    }) : c ? M = (0, r.jsx)(Z.Z, {}) : p && (M = (0, r.jsx)(R._, {}));
    let G = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
      K = null != G && G.status === V.O0b.CANCELED && null != O,
      z = (0, T.N)(),
      q = (0, I.Ng)(),
      X = (0, I.Wp)(q, F.Si.TIER_2) ? F.Si.TIER_2 : true,
      Q = null != G && G.status !== V.O0b.ACCOUNT_HOLD && G.hasAnyPremiumNitro,
      J = (0, h.Z)().isFractionalPremiumActive && !Q && null == M && !K,
      ee = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
      {
        visibilityPercentageRef: et,
        visibilityPercentage: en
      } = (0, U.E)(!ee);
    return (0, r.jsx)("div", {
      className: a()(W.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: N,
      children: (0, r.jsxs)("div", {
        className: W.content,
        ref: et,
        children: [y && E, (0, r.jsxs)("div", {
          className: W.headerContainer,
          children: [(0, r.jsx)(B.Z, {
            containerVisibilityPercentage: en
          }), K && null != O.expires_at && (0, r.jsx)(L.Z, {
            expiresAt: O.expires_at,
            className: Y.heroOfferCountdown
          }), (0, r.jsx)(k.Z, {
            children: K ? H.intl.format(H.t["3yZP0G"], {
              percent: O.discount.amount
            }) : g
          }), K && null != v && (0, r.jsx)(u.Text, {
            className: Y.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-primary",
            children: H.intl.format(H.t["3Q4wCy"], {
              discountedPrice: v,
              billingPeriod: (0, b.JP)(O.discount.user_usage_limit_interval),
              numMonths: O.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: J || K ? W.twoButtonContainer : true,
          children: [J && (0, r.jsx)(x.Z, {
            size: "md",
            hasActivePromotion: !!l,
            subscriptionTier: null != (n = null == z || null == (t = z.subscription_trial) ? true : t.sku_id) ? n : X
          }), K && (0, r.jsx)(u.Button, {
            variant: "expressive",
            icon: u.SrA,
            size: "md",
            text: H.intl.string(H.t.zrCzVB),
            onClick: () => $(P, G, j.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(D.Z, {
            variant: J || K ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: H.intl.string(H.t["3KomGa"])
          })]
        }), M]
      })
    })
  },
  et = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: o,
      headingTop: l,
      userDiscountOffer: d,
      discountedPrice: p,
      buttonVisibilityRef: g
    } = ea(), {
      analyticsLocations: E
    } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), y = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), O = null != y && y.status === V.O0b.CANCELED && null != d, v = (0, T.N)(), S = (0, I.Ng)(), A = (0, I.Wp)(S, F.Si.TIER_2) ? F.Si.TIER_2 : true, C = null != y && y.status !== V.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro, N = (0, h.Z)().isFractionalPremiumActive && !C && !O;
    return (0, r.jsxs)("div", {
      className: a()(Y.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: K,
        alt: "",
        className: Y.headerArt
      }), (0, r.jsxs)("div", {
        className: O ? Y.churnDiscountContent : Y.content,
        children: [l, O && null != d.expires_at && (0, r.jsx)(L.Z, {
          expiresAt: d.expires_at,
          className: Y.heroOfferCountdown
        }), (0, r.jsx)(u.Heading, {
          variant: "display-lg",
          color: "always-white",
          className: O ? Y.churnDiscountHeader : Y.header,
          children: O && null != d ? H.intl.format(H.t["3yZP0G"], {
            percent: d.discount.amount
          }) : o
        }), O && null != p && (0, r.jsx)(u.Text, {
          className: Y.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "always-white",
          children: H.intl.format(H.t["3Q4wCy"], {
            discountedPrice: p,
            billingPeriod: (0, b.JP)(d.discount.user_usage_limit_interval),
            numMonths: d.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: Y.heroHeadingOriginalButtonContainer,
          children: [N && (0, r.jsx)(w.Z, {
            color: c.Tt.BRAND,
            className: a()(Y.button, Y.subscribeButton),
            subscriptionTier: null != (n = null == v || null == (t = v.subscription_trial) ? true : t.sku_id) ? n : A
          }), O && (0, r.jsxs)("div", {
            className: Y.churnEntrypointButtons,
            children: [(0, r.jsx)(u.Button, {
              variant: "expressive",
              icon: u.SrA,
              size: "md",
              text: H.intl.string(H.t.zrCzVB),
              onClick: () => $(E, y, j.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(D.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: H.intl.string(H.t.Ve9Ge6),
              fullWidth: true
            })]
          }), !O && (0, r.jsx)("div", {
            className: Y.premiumSubscribeButton,
            children: (0, r.jsx)(P.Z, {
              look: c.iL.FILLED,
              color: c.Tt.BRAND,
              textOptions: {
                textOverride: H.intl.string(H.t["3KomGa"])
              },
              className: Y.button
            })
          })]
        })]
      })]
    })
  },
  en = () => {
    let {
      headingText: e,
      headingTop: t
    } = ea();
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("img", {
        src: Chunk578478,
        alt: "",
        className: Chunk644219.headerArtV2
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk644219.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk644219.contentV2,
          children: [exports, (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: Chunk644219.header,
            children: module
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk644219.premiumSubscribeButton,
            children: (0, Chunk951288.jsx)(Chunk736519.Z, {
              look: Chunk755721.iL.FILLED,
              color: Chunk755721.Tt.BRAND,
              textOptions: {
                textOverride: Chunk388032.intl.string(Chunk388032.t["3KomGa"])
              },
              className: Chunk644219.button
            })
          }), (0, Chunk951288.jsx)(Chunk647277._, {
            className: Chunk644219.referralBanner
          })]
        })
      })]
    })
  },
  er = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = ea();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: z,
        alt: "",
        className: Y.headerArtV2
      }), (0, r.jsxs)("div", {
        className: Y.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: Y.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(u.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: Y.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: Y.premiumSubscribeButton,
          children: (0, r.jsx)(P.Z, {
            look: c.iL.FILLED,
            color: c.Tt.BRAND,
            textOptions: {
              textOverride: H.intl.string(H.t["3KomGa"])
            },
            className: Y.button
          })
        }), !t && (0, r.jsx)(Z.Z, {}), t && (0, r.jsx)(C.Z, {
          variant: C.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [ei, ea] = (0, Chunk975104.Z)(),
  eo = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: o,
      discountedPrice: s
    } = e, {
      analyticsLocations: c
    } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), d = (0, v.W)(), m = (0, y.Vi)(), g = (0, O._O)(), b = H.intl.string(H.t.qYKftX), I = (0, N.b)(), T = (0, r.jsx)(et, {
      className: t
    }), S = H.intl.string(H.t.ifwQZb), {
      fractionalState: A,
      endsAt: C
    } = (0, h.Z)(), R = (0, p.ZP)(C, p.aj.CREDITS_ENDS_IN);
    d || m ? T = (0, r.jsx)(er, {
      isEligibleForBogoPromotion: m
    }) : I && (b = H.intl.string(H.t.qYKftX), T = (0, r.jsx)(en, {}));
    let P = null;
    if (A === F.a$.NONE || d) P = n ? (0, r.jsx)(G.Z, {
      enablePremiumBrandRefresh: true,
      text: b
    }) : (0, r.jsx)(M.Cy, {
      className: a()(Y.trialPill, {
        [Y.hidden]: !g
      }),
      text: b,
      colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      g = true;
      let e = (0, r.jsx)("div", {
          className: Y.pillIcon,
          children: (0, r.jsx)(u.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = H.intl.format(H.t["yR+oDD"], {
          helpCenterLink: E.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      P = (0, r.jsx)(l.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: Y.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", J(X({}, t), {
          className: Y.pillContainer,
          children: (0, r.jsx)("div", {
            className: Y.flexCentered,
            children: n ? (0, r.jsx)(G.Z, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(M.mn, {
              className: a()(Y.trialPill, {
                [Y.hidden]: !g
              }),
              text: R,
              colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(_.Gt, {
      value: c,
      children: (0, r.jsx)(ei.Provider, {
        value: {
          headingText: S,
          headingTop: P,
          showPill: g,
          userDiscountOffer: o,
          discountedPrice: s,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(ee, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: d,
          shouldShowReferralProgressBar: I
        }) : T
      })
    })
  }