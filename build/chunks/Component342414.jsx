/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => es
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
  Chunk125529 = require("./125529.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk219673 = require("./219673.js"),
  Chunk504692 = require("./504692.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk8647 = require("./8647.jsx"),
  Chunk533525 = require("./533525.js"),
  Chunk647277 = require("./647277.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk648613 = require("./648613.jsx"),
  Chunk508070 = require("./508070.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk175418 = require("./175418.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk543581 = require("./543581.jsx"),
  Chunk84804 = require("./84804.jsx"),
  Chunk184176 = require("./184176.jsx"),
  Chunk386733 = require("./386733.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24202 = require("./24202.js"),
  Chunk318271 = require("./318271.js"),
  Chunk872905 = require("./872905.js"),
  Chunk578478 = require("./578478.js");

function X(e, t, n) {
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
      X(e, t, n[t])
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
    (0, l.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await n.e("26526").then(n.bind(n, 48813));
      return n => (0, r.jsx)(a, $(Q({}, n), {
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
      isEligibleForBogoPromotion: s,
      isInReverseTrial: f,
      shouldShowReferralProgressBar: p
    } = e, {
      headingText: m,
      headingTop: g,
      showPill: b,
      userDiscountOffer: y,
      discountedPrice: O,
      buttonVisibilityRef: C
    } = eo(), {
      analyticsLocations: R
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), P = I.ZP.useExperiment({
      location: "PremiumBrandRefreshHeadingBody"
    }), {
      enabled: x,
      showCountdown: j
    } = v.b.useConfig({
      location: "Hero Heading"
    }), G = null;
    s ? G = (0, r.jsx)(A.Z, {
      variant: A.C.SUBSCRIBER_HOME
    }) : f ? G = (0, r.jsx)(Z.Z, {}) : p && (G = P.cohort === I.S$.Control ? (0, r.jsx)(F.Z, {}) : (0, r.jsx)(N._, {}));
    let z = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      q = null != z && z.status === H.O0b.CANCELED && null != y && x,
      X = (0, S.N)(),
      Q = (0, T.Ng)(),
      J = (0, T.Wp)(Q, V.Si.TIER_2) ? V.Si.TIER_2 : true,
      $ = null != z && z.status !== H.O0b.ACCOUNT_HOLD && z.hasAnyPremiumNitro,
      et = (0, _.Z)().isFractionalPremiumActive && !$ && null == G && !q,
      en = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
      {
        visibilityPercentageRef: er,
        visibilityPercentage: ei
      } = (0, U.E)(!en);
    return (0, r.jsx)("div", {
      className: a()(K.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: C,
      children: (0, r.jsxs)("div", {
        className: K.content,
        ref: er,
        children: [b && g, (0, r.jsxs)("div", {
          className: K.headerContainer,
          children: [(0, r.jsx)(B.Z, {
            containerVisibilityPercentage: ei
          }), q && j && null != y.expires_at && (0, r.jsx)(L.Z, {
            expiresAt: y.expires_at
          }), (0, r.jsx)(M.Z, {
            children: q ? Y.intl.format(Y.t["3yZP0N"], {
              percent: y.discount.amount
            }) : m
          }), q && null != O && (0, r.jsx)(l.Text, {
            className: W.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-default",
            children: Y.intl.format(Y.t["3Q4wCw"], {
              discountedPrice: O,
              billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
              numMonths: y.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: et || q ? K.twoButtonContainer : true,
          children: [et && (0, r.jsx)(D.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == X || null == (t = X.subscription_trial) ? true : t.sku_id) ? n : J
          }), q && (0, r.jsx)(l.zxk, {
            variant: "expressive",
            icon: l.SrA,
            size: "md",
            text: Y.intl.string(Y.t.zrCzVF),
            onClick: () => ee(R, z, k.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(w.Z, {
            variant: et || q ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: Y.intl.string(Y.t["3KomGR"])
          })]
        }), G]
      })
    })
  },
  en = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: f,
      userDiscountOffer: p,
      discountedPrice: m,
      buttonVisibilityRef: g
    } = eo(), {
      analyticsLocations: b
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), {
      enabled: y,
      showCountdown: O
    } = v.b.useConfig({
      location: "Hero Heading"
    }), I = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), A = null != I && I.status === H.O0b.CANCELED && null != p && y, C = (0, S.N)(), N = (0, T.Ng)(), D = (0, T.Wp)(N, V.Si.TIER_2) ? V.Si.TIER_2 : true, x = null != I && I.status !== H.O0b.ACCOUNT_HOLD && I.hasAnyPremiumNitro, j = (0, _.Z)().isFractionalPremiumActive && !x && !A;
    return (0, r.jsxs)("div", {
      className: a()(W.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: z,
        alt: "",
        className: W.headerArt
      }), (0, r.jsxs)("div", {
        className: A && O ? W.churnDiscountContent : W.content,
        children: [f, A && O && null != p.expires_at && (0, r.jsx)(L.Z, {
          expiresAt: p.expires_at
        }), (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: A ? W.churnDiscountHeader : W.header,
          children: A && null != p ? Y.intl.format(Y.t["3yZP0N"], {
            percent: p.discount.amount
          }) : c
        }), A && null != m && (0, r.jsx)(l.Text, {
          className: W.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "text-default",
          children: Y.intl.format(Y.t["3Q4wCw"], {
            discountedPrice: m,
            billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
            numMonths: p.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: W.heroHeadingOriginalButtonContainer,
          children: [j && (0, r.jsx)(P.Z, {
            color: s.Tt.BRAND,
            className: a()(W.button, W.subscribeButton),
            subscriptionTier: null != (n = null == C || null == (t = C.subscription_trial) ? true : t.sku_id) ? n : D
          }), A && (0, r.jsxs)("div", {
            className: W.churnEntrypointButtons,
            children: [(0, r.jsx)(l.zxk, {
              variant: "expressive",
              icon: l.SrA,
              size: "md",
              text: Y.intl.string(Y.t.zrCzVF),
              onClick: () => ee(b, I, k.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(w.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: Y.intl.string(Y.t.Ve9Ge3),
              fullWidth: true
            })]
          }), !A && (0, r.jsx)("div", {
            className: W.premiumSubscribeButton,
            children: (0, r.jsx)(R.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: Y.intl.string(Y.t["3KomGR"])
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
    } = eo(), n = Chunk504692.ZP.useExperiment({
      location: "HeroHeadingBodyV2"
    }), i = () => require.cohort === Chunk504692.S$.Expressive ? (0, Chunk951288.jsx)(Chunk648613.Z, {
      isGift: true,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)(l.zxk, {
          variant: "expressive",
          size: "md",
          text: Y.intl.string(Y.t["3KomGR"]),
          icon: l.OgN,
          onClick: t
        })
      }
    }) : (0, Chunk951288.jsx)(Chunk736519.Z, {
      look: Chunk755721.iL.FILLED,
      color: Chunk755721.Tt.BRAND,
      textOptions: {
        textOverride: Chunk388032.intl.string(Chunk388032.t["3KomGR"])
      },
      className: Chunk24202.button
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("img", {
        src: Chunk578478,
        alt: "",
        className: Chunk24202.headerArtV2
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk24202.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk24202.contentV2,
          children: [exports, (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: Chunk24202.header,
            children: module
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk24202.premiumSubscribeButton,
            children: Chunk120356()
          }), require.cohort === Chunk504692.S$.Control ? (0, Chunk951288.jsx)(Chunk386733.Z, {}) : (0, Chunk951288.jsx)(Chunk647277._, {
            className: Chunk24202.referralBanner
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
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: W.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: W.premiumSubscribeButton,
          children: (0, r.jsx)(R.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: Y.intl.string(Y.t["3KomGR"])
            },
            className: W.button
          })
        }), !t && (0, r.jsx)(Z.Z, {}), t && (0, r.jsx)(A.Z, {
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
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), h = (0, O.W)(), m = (0, b.Vi)(), E = (0, y._O)(), v = Y.intl.string(Y.t.qYKftb), I = (0, C.b)(), T = (0, r.jsx)(en, {
      className: t
    }), S = Y.intl.string(Y.t.ifwQZW), {
      fractionalState: A,
      endsAt: N
    } = (0, _.Z)(), R = (0, f.ZP)(N, f.aj.CREDITS_ENDS_IN);
    h || m ? T = (0, r.jsx)(ei, {
      isEligibleForBogoPromotion: m
    }) : I && (v = Y.intl.string(Y.t.qYKftb), T = (0, r.jsx)(er, {}));
    let P = null;
    if (A === V.a$.NONE || h) P = n ? (0, r.jsx)(G.Z, {
      enablePremiumBrandRefresh: true,
      text: v
    }) : (0, r.jsx)(j.Cy, {
      className: a()(W.trialPill, {
        [W.hidden]: !E
      }),
      text: v,
      colorOptions: j.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      E = true;
      let e = (0, r.jsx)("div", {
          className: W.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = Y.intl.format(Y.t["yR+oDA"], {
          helpCenterLink: g.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      P = (0, r.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: W.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", $(Q({}, t), {
          className: W.pillContainer,
          children: (0, r.jsx)("div", {
            className: W.flexCentered,
            children: n ? (0, r.jsx)(G.Z, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(j.mn, {
              className: a()(W.trialPill, {
                [W.hidden]: !E
              }),
              text: R,
              colorOptions: j.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(d.Gt, {
      value: c,
      children: (0, r.jsx)(ea.Provider, {
        value: {
          headingText: S,
          headingTop: P,
          showPill: E,
          userDiscountOffer: o,
          discountedPrice: s,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(et, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: h,
          shouldShowReferralProgressBar: I
        }) : T
      })
    })
  }