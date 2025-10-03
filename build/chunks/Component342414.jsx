/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
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
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk8647 = require("./8647.jsx"),
  Chunk533525 = require("./533525.js"),
  Chunk647277 = require("./647277.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk508070 = require("./508070.jsx"),
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

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = (e, t, i) => {
    (0, l.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await Promise.all([n.e("17938"), n.e("69432"), n.e("26526"), n.e("46573")]).then(n.bind(n, 48813));
      return n => (0, r.jsx)(a, X(z({}, n), {
        analyticsLocations: e,
        initialStep: i,
        premiumSubscription: t
      }))
    })
  },
  J = e => {
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
      buttonVisibilityRef: A
    } = er(), {
      analyticsLocations: N
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), {
      enabled: R,
      showCountdown: L
    } = v.b.useConfig({
      location: "Hero Heading"
    }), k = null;
    s ? k = (0, r.jsx)(S.Z, {
      variant: S.C.SUBSCRIBER_HOME
    }) : f ? k = (0, r.jsx)(G.Z, {}) : p && (k = (0, r.jsx)(C._, {}));
    let Y = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      W = null != Y && Y.status === Z.O0b.CANCELED && null != y && R,
      K = (0, T.N)(),
      z = (0, I.Ng)(),
      q = (0, I.Wp)(z, B.Si.TIER_2) ? B.Si.TIER_2 : true,
      X = null != Y && Y.status !== Z.O0b.ACCOUNT_HOLD && Y.hasAnyPremiumNitro,
      J = (0, _.Z)().isFractionalPremiumActive && !X && null == k && !W,
      $ = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
      {
        visibilityPercentageRef: ee,
        visibilityPercentage: et
      } = (0, j.E)(!$);
    return (0, r.jsx)("div", {
      className: a()(H.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: A,
      children: (0, r.jsxs)("div", {
        className: H.content,
        ref: ee,
        children: [b && g, (0, r.jsxs)("div", {
          className: H.headerContainer,
          children: [(0, r.jsx)(U.Z, {
            containerVisibilityPercentage: et
          }), W && L && null != y.expires_at && (0, r.jsx)(D.Z, {
            expiresAt: y.expires_at
          }), (0, r.jsx)(M.Z, {
            children: W ? F.intl.format(F.t["3yZP0N"], {
              percent: y.discount.amount
            }) : m
          }), W && null != O && (0, r.jsx)(l.Text, {
            className: V.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-primary",
            children: F.intl.format(F.t["3Q4wCw"], {
              discountedPrice: O,
              billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
              numMonths: y.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: J || W ? H.twoButtonContainer : true,
          children: [J && (0, r.jsx)(w.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == K || null == (t = K.subscription_trial) ? true : t.sku_id) ? n : q
          }), W && (0, r.jsx)(l.zxk, {
            variant: "expressive",
            icon: l.SrA,
            size: "md",
            text: F.intl.string(F.t.zrCzVF),
            onClick: () => Q(N, Y, x.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(P.Z, {
            variant: J || W ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: F.intl.string(F.t["3KomGR"])
          })]
        }), k]
      })
    })
  },
  $ = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: f,
      userDiscountOffer: p,
      discountedPrice: m,
      buttonVisibilityRef: g
    } = er(), {
      analyticsLocations: b
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), {
      enabled: y,
      showCountdown: O
    } = v.b.useConfig({
      location: "Hero Heading"
    }), S = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), A = null != S && S.status === Z.O0b.CANCELED && null != p && y, C = (0, T.N)(), w = (0, I.Ng)(), L = (0, I.Wp)(w, B.Si.TIER_2) ? B.Si.TIER_2 : true, M = null != S && S.status !== Z.O0b.ACCOUNT_HOLD && S.hasAnyPremiumNitro, j = (0, _.Z)().isFractionalPremiumActive && !M && !A;
    return (0, r.jsxs)("div", {
      className: a()(V.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: Y,
        alt: "",
        className: V.headerArt
      }), (0, r.jsxs)("div", {
        className: A && O ? V.churnDiscountContent : V.content,
        children: [f, A && O && null != p.expires_at && (0, r.jsx)(D.Z, {
          expiresAt: p.expires_at
        }), (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: A ? V.churnDiscountHeader : V.header,
          children: A && null != p ? F.intl.format(F.t["3yZP0N"], {
            percent: p.discount.amount
          }) : c
        }), A && null != m && (0, r.jsx)(l.Text, {
          className: V.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "always-white",
          children: F.intl.format(F.t["3Q4wCw"], {
            discountedPrice: m,
            billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
            numMonths: p.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: V.heroHeadingOriginalButtonContainer,
          children: [j && (0, r.jsx)(R.Z, {
            color: s.Tt.BRAND,
            className: a()(V.button, V.subscribeButton),
            subscriptionTier: null != (n = null == C || null == (t = C.subscription_trial) ? true : t.sku_id) ? n : L
          }), A && (0, r.jsxs)("div", {
            className: V.churnEntrypointButtons,
            children: [(0, r.jsx)(l.zxk, {
              variant: "expressive",
              icon: l.SrA,
              size: "md",
              text: F.intl.string(F.t.zrCzVF),
              onClick: () => Q(b, S, x.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(P.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: F.intl.string(F.t.Ve9Ge3),
              fullWidth: true
            })]
          }), !A && (0, r.jsx)("div", {
            className: V.premiumSubscribeButton,
            children: (0, r.jsx)(N.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: F.intl.string(F.t["3KomGR"])
              },
              className: V.button
            })
          })]
        })]
      })]
    })
  },
  ee = () => {
    let {
      headingText: e,
      headingTop: t
    } = er();
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
          children: [exports, (0, Chunk951288.jsx)(Chunk481060.X6q, {
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
                textOverride: Chunk388032.intl.string(Chunk388032.t["3KomGR"])
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
  et = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = er();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: W,
        alt: "",
        className: V.headerArtV2
      }), (0, r.jsxs)("div", {
        className: V.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: V.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: V.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: V.premiumSubscribeButton,
          children: (0, r.jsx)(N.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: F.intl.string(F.t["3KomGR"])
            },
            className: V.button
          })
        }), !t && (0, r.jsx)(G.Z, {}), t && (0, r.jsx)(S.Z, {
          variant: S.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [en, er] = (0, Chunk975104.Z)(),
  ei = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: o,
      discountedPrice: s
    } = e, {
      analyticsLocations: c
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), h = (0, O.W)(), m = (0, b.Vi)(), E = (0, y._O)(), v = F.intl.string(F.t.qYKftb), I = (0, A.b)(), T = (0, r.jsx)($, {
      className: t
    }), S = F.intl.string(F.t.ifwQZW), {
      fractionalState: C,
      endsAt: N
    } = (0, _.Z)(), R = (0, f.ZP)(N, f.aj.CREDITS_ENDS_IN);
    h || m ? T = (0, r.jsx)(et, {
      isEligibleForBogoPromotion: m
    }) : I && (v = F.intl.string(F.t.qYKftb), T = (0, r.jsx)(ee, {}));
    let P = null;
    if (C === B.a$.NONE || h) P = n ? (0, r.jsx)(k.Z, {
      enablePremiumBrandRefresh: true,
      text: v
    }) : (0, r.jsx)(L.Cy, {
      className: a()(V.trialPill, {
        [V.hidden]: !E
      }),
      text: v,
      colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      E = true;
      let e = (0, r.jsx)("div", {
          className: V.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = F.intl.format(F.t["yR+oDA"], {
          helpCenterLink: g.Z.getArticleURL(Z.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      P = (0, r.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: V.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", X(z({}, t), {
          className: V.pillContainer,
          children: (0, r.jsx)("div", {
            className: V.flexCentered,
            children: n ? (0, r.jsx)(k.Z, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(L.mn, {
              className: a()(V.trialPill, {
                [V.hidden]: !E
              }),
              text: R,
              colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(d.Gt, {
      value: c,
      children: (0, r.jsx)(en.Provider, {
        value: {
          headingText: S,
          headingTop: P,
          showPill: E,
          userDiscountOffer: o,
          discountedPrice: s,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(J, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: h,
          shouldShowReferralProgressBar: I
        }) : T
      })
    })
  }