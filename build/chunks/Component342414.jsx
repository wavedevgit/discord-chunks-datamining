/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => es
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk622909 = require("./622909.js"),
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
  Chunk230916 = require("./230916.js"),
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
  Chunk521020 = require("./521020.js"),
  Chunk907613 = require("./907613.js"),
  Chunk872905 = require("./872905.js"),
  Chunk578478 = require("./578478.js");

function Q(e, t, n) {
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
      Q(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = (e, t, i) => {
    (0, u.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await n.e("26526").then(n.bind(n, 48813));
      return n => (0, r.jsx)(a, $(X({}, n), {
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
      showPill: y,
      userDiscountOffer: O,
      discountedPrice: v,
      buttonVisibilityRef: N
    } = eo(), {
      analyticsLocations: R
    } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), w = (0, T.H)(o.I.MARKETING_PAGE_BANNER), M = null;
    null != w && "marketingPageBanner" === w.properties.properties.oneofKind ? M = (0, r.jsx)(C.u, {
      componentId: w.id,
      promotionBannerMarketingComponentFields: w.properties.properties.marketingPageBanner
    }) : l ? M = (0, r.jsx)(A.Z, {
      variant: A.C.SUBSCRIBER_HOME
    }) : c ? M = (0, r.jsx)(B.Z, {}) : _ && (M = (0, r.jsx)(P._, {}));
    let Z = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      z = null != Z && Z.status === H.O0b.CANCELED && null != O,
      q = (0, I.N)(),
      Q = (0, S.N)(),
      X = (0, L.Wp)(Q, V.Si.TIER_2) ? V.Si.TIER_2 : true,
      J = null != Z && Z.status !== H.O0b.ACCOUNT_HOLD && Z.hasAnyPremiumNitro,
      $ = (0, m.Z)().isFractionalPremiumActive && !J && null == M && !z,
      et = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
      {
        visibilityPercentageRef: en,
        visibilityPercentage: er
      } = (0, G.E)(!et);
    return (0, r.jsx)("div", {
      className: a()(K.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: N,
      children: (0, r.jsxs)("div", {
        className: K.content,
        ref: en,
        children: [y && E, (0, r.jsxs)("div", {
          className: K.headerContainer,
          children: [(0, r.jsx)(F.Z, {
            containerVisibilityPercentage: er
          }), z && null != O.expires_at && (0, r.jsx)(j.Z, {
            expiresAt: O.expires_at,
            className: W.heroOfferCountdown
          }), (0, r.jsx)(U.Z, {
            children: z ? Y.intl.format(Y.t["3yZP0G"], {
              percent: O.discount.amount
            }) : g
          }), z && null != v && (0, r.jsx)(u.Text, {
            className: W.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-strong",
            children: Y.intl.format(Y.t["3Q4wCy"], {
              discountedPrice: v,
              billingPeriod: (0, b.JP)(O.discount.user_usage_limit_interval),
              numMonths: O.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: $ || z ? K.twoButtonContainer : true,
          children: [$ && (0, r.jsx)(x.Z, {
            size: "md",
            hasActivePromotion: !!l,
            subscriptionTier: null != (n = null == q || null == (t = q.subscription_trial) ? true : t.sku_id) ? n : X
          }), z && (0, r.jsx)(u.Button, {
            variant: "expressive",
            icon: u.SrA,
            size: "md",
            text: Y.intl.string(Y.t.zrCzVB),
            onClick: () => ee(R, Z, k.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(D.Z, {
            variant: $ || z ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: Y.intl.string(Y.t["3KomGa"])
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
      headingText: o,
      headingTop: l,
      userDiscountOffer: d,
      discountedPrice: _,
      buttonVisibilityRef: g
    } = eo(), {
      analyticsLocations: E
    } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), y = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), O = null != y && y.status === H.O0b.CANCELED && null != d, v = (0, I.N)(), T = (0, S.N)(), C = (0, L.Wp)(T, V.Si.TIER_2) ? V.Si.TIER_2 : true, A = null != y && y.status !== H.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro, N = (0, m.Z)().isFractionalPremiumActive && !A && !O;
    return (0, r.jsxs)("div", {
      className: a()(W.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: z,
        alt: "",
        className: W.headerArt
      }), (0, r.jsxs)("div", {
        className: O ? W.churnDiscountContent : W.content,
        children: [l, O && null != d.expires_at && (0, r.jsx)(j.Z, {
          expiresAt: d.expires_at,
          className: W.heroOfferCountdown
        }), (0, r.jsx)(u.Heading, {
          variant: "display-lg",
          color: "always-white",
          className: O ? W.churnDiscountHeader : W.header,
          children: O && null != d ? Y.intl.format(Y.t["3yZP0G"], {
            percent: d.discount.amount
          }) : o
        }), O && null != _ && (0, r.jsx)(u.Text, {
          className: W.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "always-white",
          children: Y.intl.format(Y.t["3Q4wCy"], {
            discountedPrice: _,
            billingPeriod: (0, b.JP)(d.discount.user_usage_limit_interval),
            numMonths: d.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: W.heroHeadingOriginalButtonContainer,
          children: [N && (0, r.jsx)(w.Z, {
            color: c.Tt.BRAND,
            className: a()(W.button, W.subscribeButton),
            subscriptionTier: null != (n = null == v || null == (t = v.subscription_trial) ? true : t.sku_id) ? n : C
          }), O && (0, r.jsxs)("div", {
            className: W.churnEntrypointButtons,
            children: [(0, r.jsx)(u.Button, {
              variant: "expressive",
              icon: u.SrA,
              size: "md",
              text: Y.intl.string(Y.t.zrCzVB),
              onClick: () => ee(E, y, k.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(D.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: Y.intl.string(Y.t.Ve9Ge6),
              fullWidth: true
            })]
          }), !O && (0, r.jsx)("div", {
            className: W.premiumSubscribeButton,
            children: (0, r.jsx)(R.Z, {
              look: c.iL.FILLED,
              color: c.Tt.BRAND,
              textOptions: {
                textOverride: Y.intl.string(Y.t["3KomGa"])
              },
              className: W.button
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
    } = eo();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: q,
        alt: "",
        className: W.headerArtV2
      }), (0, r.jsx)("div", {
        className: W.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, r.jsxs)("div", {
          className: W.contentV2,
          children: [t, (0, r.jsx)(u.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: W.header,
            children: e
          }), (0, r.jsx)("div", {
            className: W.premiumSubscribeButton,
            children: (0, r.jsx)(R.Z, {
              look: c.iL.FILLED,
              color: c.Tt.BRAND,
              textOptions: {
                textOverride: Y.intl.string(Y.t["3KomGa"])
              },
              className: W.button
            })
          }), (0, r.jsx)(P._, {
            className: W.referralBanner
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
    } = eo();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: q,
        alt: "",
        className: W.headerArtV2
      }), (0, r.jsxs)("div", {
        className: W.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: W.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(u.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: W.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: W.premiumSubscribeButton,
          children: (0, r.jsx)(R.Z, {
            look: c.iL.FILLED,
            color: c.Tt.BRAND,
            textOptions: {
              textOverride: Y.intl.string(Y.t["3KomGa"])
            },
            className: W.button
          })
        }), !t && (0, r.jsx)(B.Z, {}), t && (0, r.jsx)(A.Z, {
          variant: A.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [ea, eo] = (0, Chunk975104.Z)(),
  es = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: o,
      discountedPrice: s
    } = e, {
      analyticsLocations: c
    } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA), d = (0, v.W)(), h = (0, y.Vi)(), g = (0, O._O)(), b = Y.intl.string(Y.t.qYKftX), S = (0, N.b)(), I = (0, r.jsx)(en, {
      className: t
    }), T = Y.intl.string(Y.t.ifwQZb), {
      fractionalState: C,
      endsAt: A
    } = (0, m.Z)(), P = (0, _.ZP)(A, _.aj.CREDITS_ENDS_IN);
    d || h ? I = (0, r.jsx)(ei, {
      isEligibleForBogoPromotion: h
    }) : S && (b = Y.intl.string(Y.t.qYKftX), I = (0, r.jsx)(er, {}));
    let R = null;
    if (C === V.a$.NONE || d) R = n ? (0, r.jsx)(Z.Z, {
      enablePremiumBrandRefresh: true,
      text: b
    }) : (0, r.jsx)(M.Cy, {
      className: a()(W.trialPill, {
        [W.hidden]: !g
      }),
      text: b,
      colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      g = true;
      let e = (0, r.jsx)("div", {
          className: W.pillIcon,
          children: (0, r.jsx)(u.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = Y.intl.format(Y.t["yR+oDD"], {
          helpCenterLink: E.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      R = (0, r.jsx)(l.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: W.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", $(X({}, t), {
          className: W.pillContainer,
          children: (0, r.jsx)("div", {
            className: W.flexCentered,
            children: n ? (0, r.jsx)(Z.Z, {
              enablePremiumBrandRefresh: true,
              text: P
            }) : (0, r.jsx)(M.mn, {
              className: a()(W.trialPill, {
                [W.hidden]: !g
              }),
              text: P,
              colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(p.Gt, {
      value: c,
      children: (0, r.jsx)(ea.Provider, {
        value: {
          headingText: T,
          headingTop: R,
          showPill: g,
          userDiscountOffer: o,
          discountedPrice: s,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(et, {
          className: t,
          isEligibleForBogoPromotion: h,
          isInReverseTrial: d,
          shouldShowReferralProgressBar: S
        }) : I
      })
    })
  }