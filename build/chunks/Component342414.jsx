/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => er
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = (e, t, i) => {
    (0, c.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: a
      } = await n.e("26526").then(n.bind(n, 48813));
      return n => (0, r.jsx)(a, q(K({}, n), {
        analyticsLocations: e,
        initialStep: i,
        premiumSubscription: t
      }))
    })
  },
  Q = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: s,
      isInReverseTrial: l,
      shouldShowReferralProgressBar: _
    } = e, {
      headingText: m,
      headingTop: g,
      showPill: b,
      userDiscountOffer: y,
      discountedPrice: O,
      buttonVisibilityRef: S
    } = en(), {
      analyticsLocations: C
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), N = null;
    s ? N = (0, r.jsx)(T.Z, {
      variant: T.C.SUBSCRIBER_HOME
    }) : l ? N = (0, r.jsx)(U.Z, {}) : _ && (N = (0, r.jsx)(A._, {}));
    let D = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      j = null != D && D.status === B.O0b.CANCELED && null != y,
      H = (0, I.N)(),
      Y = (0, v.Ng)(),
      W = (0, v.Wp)(Y, G.Si.TIER_2) ? G.Si.TIER_2 : true,
      K = null != D && D.status !== B.O0b.ACCOUNT_HOLD && D.hasAnyPremiumNitro,
      z = (0, p.Z)().isFractionalPremiumActive && !K && null == N && !j,
      q = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
      {
        visibilityPercentageRef: Q,
        visibilityPercentage: J
      } = (0, M.E)(!q);
    return (0, r.jsx)("div", {
      className: a()(V.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: S,
      children: (0, r.jsxs)("div", {
        className: V.content,
        ref: Q,
        children: [b && g, (0, r.jsxs)("div", {
          className: V.headerContainer,
          children: [(0, r.jsx)(k.Z, {
            containerVisibilityPercentage: J
          }), j && null != y.expires_at && (0, r.jsx)(w.Z, {
            expiresAt: y.expires_at,
            className: F.heroOfferCountdown
          }), (0, r.jsx)(L.Z, {
            children: j ? Z.intl.format(Z.t["3yZP0G"], {
              percent: y.discount.amount
            }) : m
          }), j && null != O && (0, r.jsx)(c.Text, {
            className: F.churnEntrypointDescriptionBrandRefresh,
            variant: "text-sm/medium",
            color: "text-primary",
            children: Z.intl.format(Z.t["3Q4wCy"], {
              discountedPrice: O,
              billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
              numMonths: y.discount.user_usage_limit
            })
          })]
        }), (0, r.jsxs)("div", {
          className: z || j ? V.twoButtonContainer : true,
          children: [z && (0, r.jsx)(P.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == H || null == (t = H.subscription_trial) ? true : t.sku_id) ? n : W
          }), j && (0, r.jsx)(c.Button, {
            variant: "expressive",
            icon: c.SrA,
            size: "md",
            text: Z.intl.string(Z.t.zrCzVB),
            onClick: () => X(C, D, x.R.CONFIRM_DISCOUNT)
          }), (0, r.jsx)(R.Z, {
            variant: z || j ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: Z.intl.string(Z.t["3KomGa"])
          })]
        }), N]
      })
    })
  },
  J = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: s,
      headingTop: u,
      userDiscountOffer: _,
      discountedPrice: m,
      buttonVisibilityRef: g
    } = en(), {
      analyticsLocations: b
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), y = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), O = null != y && y.status === B.O0b.CANCELED && null != _, T = (0, I.N)(), S = (0, v.Ng)(), A = (0, v.Wp)(S, G.Si.TIER_2) ? G.Si.TIER_2 : true, P = null != y && y.status !== B.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro, D = (0, p.Z)().isFractionalPremiumActive && !P && !O;
    return (0, r.jsxs)("div", {
      className: a()(F.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      ref: g,
      children: [(0, r.jsx)("img", {
        src: H,
        alt: "",
        className: F.headerArt
      }), (0, r.jsxs)("div", {
        className: O ? F.churnDiscountContent : F.content,
        children: [u, O && null != _.expires_at && (0, r.jsx)(w.Z, {
          expiresAt: _.expires_at,
          className: F.heroOfferCountdown
        }), (0, r.jsx)(c.Heading, {
          variant: "display-lg",
          color: "always-white",
          className: O ? F.churnDiscountHeader : F.header,
          children: O && null != _ ? Z.intl.format(Z.t["3yZP0G"], {
            percent: _.discount.amount
          }) : s
        }), O && null != m && (0, r.jsx)(c.Text, {
          className: F.churnEntrypointDescription,
          variant: "text-sm/medium",
          color: "always-white",
          children: Z.intl.format(Z.t["3Q4wCy"], {
            discountedPrice: m,
            billingPeriod: (0, E.JP)(_.discount.user_usage_limit_interval),
            numMonths: _.discount.user_usage_limit
          })
        }), (0, r.jsxs)("div", {
          className: F.heroHeadingOriginalButtonContainer,
          children: [D && (0, r.jsx)(N.Z, {
            color: l.Tt.BRAND,
            className: a()(F.button, F.subscribeButton),
            subscriptionTier: null != (n = null == T || null == (t = T.subscription_trial) ? true : t.sku_id) ? n : A
          }), O && (0, r.jsxs)("div", {
            className: F.churnEntrypointButtons,
            children: [(0, r.jsx)(c.Button, {
              variant: "expressive",
              icon: c.SrA,
              size: "md",
              text: Z.intl.string(Z.t.zrCzVB),
              onClick: () => X(b, y, x.R.CONFIRM_DISCOUNT),
              fullWidth: true
            }), (0, r.jsx)(R.Z, {
              variant: "overlay-secondary",
              size: "md",
              buttonTextOverride: Z.intl.string(Z.t.Ve9Ge6),
              fullWidth: true
            })]
          }), !O && (0, r.jsx)("div", {
            className: F.premiumSubscribeButton,
            children: (0, r.jsx)(C.Z, {
              look: l.iL.FILLED,
              color: l.Tt.BRAND,
              textOptions: {
                textOverride: Z.intl.string(Z.t["3KomGa"])
              },
              className: F.button
            })
          })]
        })]
      })]
    })
  },
  $ = () => {
    let {
      headingText: e,
      headingTop: t
    } = en();
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
  ee = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = en();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: Y,
        alt: "",
        className: F.headerArtV2
      }), (0, r.jsxs)("div", {
        className: F.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: F.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(c.Heading, {
            variant: "display-lg",
            color: "always-white",
            className: F.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: F.premiumSubscribeButton,
          children: (0, r.jsx)(C.Z, {
            look: l.iL.FILLED,
            color: l.Tt.BRAND,
            textOptions: {
              textOverride: Z.intl.string(Z.t["3KomGa"])
            },
            className: F.button
          })
        }), !t && (0, r.jsx)(U.Z, {}), t && (0, r.jsx)(T.Z, {
          variant: T.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [et, en] = (0, Chunk975104.Z)(),
  er = e => {
    let {
      className: t,
      enablePremiumBrandRefresh: n,
      buttonVisibilityRef: i,
      userDiscountOffer: o,
      discountedPrice: l
    } = e, {
      analyticsLocations: u
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), h = (0, O.W)(), m = (0, b.Vi)(), E = (0, y._O)(), v = Z.intl.string(Z.t.qYKftX), I = (0, S.b)(), T = (0, r.jsx)(J, {
      className: t
    }), A = Z.intl.string(Z.t.ifwQZb), {
      fractionalState: C,
      endsAt: N
    } = (0, p.Z)(), R = (0, _.ZP)(N, _.aj.CREDITS_ENDS_IN);
    h || m ? T = (0, r.jsx)(ee, {
      isEligibleForBogoPromotion: m
    }) : I && (v = Z.intl.string(Z.t.qYKftX), T = (0, r.jsx)($, {}));
    let P = null;
    if (C === G.a$.NONE || h) P = n ? (0, r.jsx)(j.Z, {
      enablePremiumBrandRefresh: true,
      text: v
    }) : (0, r.jsx)(D.Cy, {
      className: a()(F.trialPill, {
        [F.hidden]: !E
      }),
      text: v,
      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      E = true;
      let e = (0, r.jsx)("div", {
          className: F.pillIcon,
          children: (0, r.jsx)(c.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = Z.intl.format(Z.t["yR+oDD"], {
          helpCenterLink: g.Z.getArticleURL(B.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      P = (0, r.jsx)(s.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: F.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", q(K({}, t), {
          className: F.pillContainer,
          children: (0, r.jsx)("div", {
            className: F.flexCentered,
            children: n ? (0, r.jsx)(j.Z, {
              enablePremiumBrandRefresh: true,
              text: R
            }) : (0, r.jsx)(D.mn, {
              className: a()(F.trialPill, {
                [F.hidden]: !E
              }),
              text: R,
              colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(f.Gt, {
      value: u,
      children: (0, r.jsx)(et.Provider, {
        value: {
          headingText: A,
          headingTop: P,
          showPill: E,
          userDiscountOffer: o,
          discountedPrice: l,
          buttonVisibilityRef: i
        },
        children: n ? (0, r.jsx)(Q, {
          className: t,
          isEligibleForBogoPromotion: m,
          isInReverseTrial: h,
          shouldShowReferralProgressBar: I
        }) : T
      })
    })
  }