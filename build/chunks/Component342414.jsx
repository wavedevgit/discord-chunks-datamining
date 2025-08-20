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
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk47280 = require("./47280.js"),
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
  Chunk164662 = require("./164662.js"),
  Chunk306066 = require("./306066.jsx"),
  Chunk123274 = require("./123274.jsx"),
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

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: s,
      isInReverseTrial: l,
      shouldShowReferralProgressBar: u
    } = e, {
      headingText: d,
      headingTop: f,
      showPill: p
    } = er(), m = null;
    s ? m = (0, r.jsx)(S.Z, {
      variant: S.C.SUBSCRIBER_HOME
    }) : l ? m = (0, r.jsx)(G.Z, {}) : u && (m = (0, r.jsx)(C._, {}));
    let g = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      E = (0, T.N)(),
      b = (0, I.Ng)(),
      y = (0, I.Wp)(b, Z.Si.TIER_2) ? Z.Si.TIER_2 : true,
      O = null != g && g.status !== V.O0b.ACCOUNT_HOLD && g.hasAnyPremiumNitro,
      v = (0, _.Z)().isFractionalPremiumActive && !O && null == m,
      A = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
      {
        visibilityPercentageRef: N,
        visibilityPercentage: R
      } = (0, L.E)(!A);
    return (0, r.jsxs)("div", {
      className: a()(Y.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)(j.Z, {
        className: Y.gradientBackground
      }), (0, r.jsxs)("div", {
        className: Y.content,
        ref: N,
        children: [p && f, (0, r.jsxs)("div", {
          className: Y.headerContainer,
          children: [(0, r.jsx)(U.Z, {
            containerVisibilityPercentage: R
          }), (0, r.jsx)(M.Z, {
            children: d
          })]
        }), (0, r.jsxs)("div", {
          className: v ? Y.twoButtonContainer : true,
          children: [v && (0, r.jsx)(w.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == E || null == (t = E.subscription_trial) ? true : t.sku_id) ? n : y
          }), (0, r.jsx)(P.Z, {
            variant: v ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: F.intl.string(F.t["3KomGR"])
          })]
        }), m]
      })]
    })
  },
  $ = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: u
    } = er(), d = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), f = (0, T.N)(), p = (0, I.Ng)(), m = (0, I.Wp)(p, Z.Si.TIER_2) ? Z.Si.TIER_2 : true, g = null != d && d.status !== V.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro, E = (0, _.Z)().isFractionalPremiumActive && !g;
    return (0, r.jsxs)("div", {
      className: a()(H.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)("img", {
        src: W,
        alt: "",
        className: H.headerArt
      }), (0, r.jsxs)("div", {
        className: H.content,
        children: [u, (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: H.header,
          children: c
        }), (0, r.jsxs)("div", {
          className: H.heroHeadingOriginalButtonContainer,
          children: [E && (0, r.jsx)(R.Z, {
            color: s.Tt.BRAND,
            className: a()(H.button, H.subscribeButton),
            subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? true : t.sku_id) ? n : m
          }), (0, r.jsx)("div", {
            className: H.premiumSubscribeButton,
            children: (0, r.jsx)(N.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: F.intl.string(F.t["3KomGR"])
              },
              className: H.button
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
    } = er(), n = Chunk504692.ZP.useExperiment({
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
          text: F.intl.string(F.t["3KomGR"]),
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
  et = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = er();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: K,
        alt: "",
        className: H.headerArtV2
      }), (0, r.jsxs)("div", {
        className: H.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: H.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: H.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: H.premiumSubscribeButton,
          children: (0, r.jsx)(N.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: F.intl.string(F.t["3KomGR"])
            },
            className: H.button
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
      location: n
    } = e, i = (0, O.ZP)({
      location: "HeroHeading"
    }), {
      analyticsLocations: o
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), s = (0, y.W)(), c = (0, E.Vi)(), h = (0, b._O)(), m = F.intl.string(F.t.qYKftb), v = (0, A.b)(n), I = (0, r.jsx)($, {
      className: t
    }), T = F.intl.string(F.t.ifwQZW), {
      fractionalState: S,
      endsAt: C
    } = (0, _.Z)(), N = (0, f.ZP)(C, f.aj.CREDITS_ENDS_IN);
    s || c ? I = (0, r.jsx)(et, {
      isEligibleForBogoPromotion: c
    }) : v && (m = F.intl.string(F.t.qYKftb), I = (0, r.jsx)(ee, {}));
    let R = null;
    if (S === Z.a$.NONE || s) R = i ? (0, r.jsx)(k.Z, {
      enablePremiumBrandRefresh: true,
      text: m
    }) : (0, r.jsx)(x.Cy, {
      className: a()(H.trialPill, {
        [H.hidden]: !h
      }),
      text: m,
      colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      h = true;
      let e = (0, r.jsx)("div", {
          className: H.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = F.intl.format(F.t["yR+oDA"], {
          helpCenterLink: g.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      R = (0, r.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: H.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", Q(q({}, t), {
          className: H.pillContainer,
          children: (0, r.jsx)("div", {
            className: H.flexCentered,
            children: i ? (0, r.jsx)(k.Z, {
              enablePremiumBrandRefresh: true,
              text: N
            }) : (0, r.jsx)(x.mn, {
              className: a()(H.trialPill, {
                [H.hidden]: !h
              }),
              text: N,
              colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(d.Gt, {
      value: o,
      children: (0, r.jsx)(en.Provider, {
        value: {
          headingText: T,
          headingTop: R,
          showPill: h
        },
        children: i ? (0, r.jsx)(J, {
          isEligibleForBogoPromotion: c,
          isInReverseTrial: s,
          shouldShowReferralProgressBar: v
        }) : I
      })
    })
  }