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
    (0, l.ZDy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("58067"), n.e("81709"), n.e("70349")]).then(n.bind(n, 833569));
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
    } = ea(), {
      analyticsLocations: R
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), P = I.ZP.useExperiment({
      location: "PremiumBrandRefreshHeadingBody"
    }), {
      enabled: x
    } = v.b.useConfig({
      location: "Hero Heading"
    }), L = null;
    s ? L = (0, r.jsx)(A.Z, {
      variant: A.C.SUBSCRIBER_HOME
    }) : f ? L = (0, r.jsx)(B.Z, {}) : p && (L = P.cohort === I.S$.Control ? (0, r.jsx)(Z.Z, {}) : (0, r.jsx)(N._, {}));
    let U = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      K = null != U && U.status === V.O0b.CANCELED && null != y && x,
      z = (0, T.N)(),
      q = (0, S.Ng)(),
      X = (0, S.Wp)(q, F.Si.TIER_2) ? F.Si.TIER_2 : true,
      Q = null != U && U.status !== V.O0b.ACCOUNT_HOLD && U.hasAnyPremiumNitro,
      J = (0, _.Z)().isFractionalPremiumActive && !Q && null == L && !K,
      ee = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
      {
        visibilityPercentageRef: et,
        visibilityPercentage: en
      } = (0, k.E)(!ee);
    return (0, r.jsx)("div", {
      className: a()(W.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: C,
      children: (0, r.jsxs)("div", {
        className: W.content,
        ref: et,
        children: [b && g, (0, r.jsxs)("div", {
          className: W.headerContainer,
          children: [(0, r.jsx)(G.Z, {
            containerVisibilityPercentage: en
          }), (0, r.jsx)(M.Z, {
            children: K ? H.intl.format(H.t["3yZP0N"], {
              percent: y.discount.amount
            }) : m
          }), K && null != O && (0, r.jsx)(l.Text, {
            className: Y.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-default",
            children: H.intl.format(H.t["3Q4wCw"], {
              discountedPrice: O,
              billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
              numMonths: y.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: J || K ? W.twoButtonContainer : true,
          children: [J && (0, r.jsx)(D.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == z || null == (t = z.subscription_trial) ? true : t.sku_id) ? n : X
          }), K && (0, r.jsx)(l.zxk, {
            variant: "expressive",
            icon: l.SrA,
            size: "md",
            text: H.intl.string(H.t.zrCzVF),
            onClick: () => $(R, U, j.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(w.Z, {
            variant: J || K ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: H.intl.string(H.t["3KomGR"])
          })]
        }), L]
      })
    })
  },
  et = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: f,
      userDiscountOffer: p,
      discountedPrice: m,
      buttonVisibilityRef: g
    } = ea(), {
      analyticsLocations: b
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), {
      enabled: y
    } = v.b.useConfig({
      location: "Hero Heading"
    }), O = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), I = null != O && O.status === V.O0b.CANCELED && null != p && y, A = (0, T.N)(), C = (0, S.Ng)(), N = (0, S.Wp)(C, F.Si.TIER_2) ? F.Si.TIER_2 : true, D = null != O && O.status !== V.O0b.ACCOUNT_HOLD && O.hasAnyPremiumNitro, x = (0, _.Z)().isFractionalPremiumActive && !D && !I;
    return (0, r.jsxs)("div", {
      className: a()(Y.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: K,
        alt: "",
        className: Y.headerArt
      }), (0, r.jsxs)("div", {
        className: Y.content,
        children: [f, (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: Y.header,
          children: I && null != p ? H.intl.format(H.t["3yZP0N"], {
            percent: p.discount.amount
          }) : c
        }), I && null != m && (0, r.jsx)(l.Text, {
          className: Y.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "text-default",
          children: H.intl.format(H.t["3Q4wCw"], {
            discountedPrice: m,
            billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
            numMonths: p.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: Y.heroHeadingOriginalButtonContainer,
          children: [x && (0, r.jsx)(P.Z, {
            color: s.Tt.BRAND,
            className: a()(Y.button, Y.subscribeButton),
            subscriptionTier: null != (n = null == A || null == (t = A.subscription_trial) ? true : t.sku_id) ? n : N
          }), I && (0, r.jsxs)("div", {
            className: Y.churnEntrypointButtons,
            children: [(0, r.jsx)(l.zxk, {
              variant: "expressive",
              icon: l.SrA,
              size: "md",
              text: H.intl.string(H.t.zrCzVF),
              onClick: () => $(b, O, j.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(w.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: H.intl.string(H.t.Ve9Ge3),
              fullWidth: true
            })]
          }), !I && (0, r.jsx)("div", {
            className: Y.premiumSubscribeButton,
            children: (0, r.jsx)(R.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: H.intl.string(H.t["3KomGR"])
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
    } = ea(), n = Chunk504692.ZP.useExperiment({
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
          text: H.intl.string(H.t["3KomGR"]),
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
      className: Chunk644219.button
    });
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
            children: Chunk120356()
          }), require.cohort === Chunk504692.S$.Control ? (0, Chunk951288.jsx)(Chunk386733.Z, {}) : (0, Chunk951288.jsx)(Chunk647277._, {
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
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: Y.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: Y.premiumSubscribeButton,
          children: (0, r.jsx)(R.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: H.intl.string(H.t["3KomGR"])
            },
            className: Y.button
          })
        }), !t && (0, r.jsx)(B.Z, {}), t && (0, r.jsx)(A.Z, {
          variant: A.C.SUBSCRIBER_HOME
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
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), h = (0, O.W)(), m = (0, b.Vi)(), E = (0, y._O)(), v = H.intl.string(H.t.qYKftb), I = (0, C.b)(), S = (0, r.jsx)(et, {
      className: t
    }), T = H.intl.string(H.t.ifwQZW), {
      fractionalState: A,
      endsAt: N
    } = (0, _.Z)(), R = (0, f.ZP)(N, f.aj.CREDITS_ENDS_IN);
    h || m ? S = (0, r.jsx)(er, {
      isEligibleForBogoPromotion: m
    }) : I && (v = H.intl.string(H.t.qYKftb), S = (0, r.jsx)(en, {}));
    let P = null;
    if (A === F.a$.NONE || h) P = n ? (0, r.jsx)(U.Z, {
      enablePremiumBrandRefresh: true,
      text: v
    }) : (0, r.jsx)(L.Cy, {
      className: a()(Y.trialPill, {
        [Y.hidden]: !E
      }),
      text: v,
      colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      E = true;
      let e = (0, r.jsx)("div", {
          className: Y.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = H.intl.format(H.t["yR+oDA"], {
          helpCenterLink: g.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      P = (0, r.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: Y.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", J(X({}, t), {
          className: Y.pillContainer,
          children: (0, r.jsx)("div", {
            className: Y.flexCentered,
            children: n ? (0, r.jsx)(U.Z, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(L.mn, {
              className: a()(Y.trialPill, {
                [Y.hidden]: !E
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
      children: (0, r.jsx)(ei.Provider, {
        value: {
          headingText: T,
          headingTop: P,
          showPill: E,
          userDiscountOffer: o,
          discountedPrice: s,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(ee, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: h,
          shouldShowReferralProgressBar: I
        }) : S
      })
    })
  }