/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
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
let X = e => {
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
    } = et(), m = O.ZP.useExperiment({
      location: "PremiumBrandRefreshHeadingBody"
    }), g = null;
    s ? g = (0, r.jsx)(T.Z, {
      variant: T.C.SUBSCRIBER_HOME
    }) : l ? g = (0, r.jsx)(M.Z, {}) : u && (g = m.cohort === O.S$.Control ? (0, r.jsx)(U.Z, {}) : (0, r.jsx)(A._, {}));
    let E = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
      b = (0, I.N)(),
      y = (0, v.Ng)(),
      S = (0, v.Wp)(y, G.Si.TIER_2) ? G.Si.TIER_2 : true,
      C = null != E && E.status !== B.O0b.ACCOUNT_HOLD && E.hasAnyPremiumNitro,
      N = (0, _.Z)().isFractionalPremiumActive && !C && null == g,
      w = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
      {
        visibilityPercentageRef: D,
        visibilityPercentage: j
      } = (0, L.E)(!w);
    return (0, r.jsx)("div", {
      className: a()(V.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: (0, r.jsxs)("div", {
        className: V.content,
        ref: D,
        children: [p && f, (0, r.jsxs)("div", {
          className: V.headerContainer,
          children: [(0, r.jsx)(k.Z, {
            containerVisibilityPercentage: j
          }), (0, r.jsx)(x.Z, {
            children: d
          })]
        }), (0, r.jsxs)("div", {
          className: N ? V.twoButtonContainer : true,
          children: [N && (0, r.jsx)(P.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == b || null == (t = b.subscription_trial) ? true : t.sku_id) ? n : S
          }), (0, r.jsx)(R.Z, {
            variant: N ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: Z.intl.string(Z.t["3KomGR"])
          })]
        }), g]
      })
    })
  },
  Q = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: u
    } = et(), d = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), f = (0, I.N)(), p = (0, v.Ng)(), m = (0, v.Wp)(p, G.Si.TIER_2) ? G.Si.TIER_2 : true, g = null != d && d.status !== B.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro, E = (0, _.Z)().isFractionalPremiumActive && !g;
    return (0, r.jsxs)("div", {
      className: a()(F.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)("img", {
        src: H,
        alt: "",
        className: F.headerArt
      }), (0, r.jsxs)("div", {
        className: F.content,
        children: [u, (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: F.header,
          children: c
        }), (0, r.jsxs)("div", {
          className: F.heroHeadingOriginalButtonContainer,
          children: [E && (0, r.jsx)(N.Z, {
            color: s.Tt.BRAND,
            className: a()(F.button, F.subscribeButton),
            subscriptionTier: null != (n = null == f || null == (t = f.subscription_trial) ? true : t.sku_id) ? n : m
          }), (0, r.jsx)("div", {
            className: F.premiumSubscribeButton,
            children: (0, r.jsx)(C.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: Z.intl.string(Z.t["3KomGR"])
              },
              className: F.button
            })
          })]
        })]
      })]
    })
  },
  J = () => {
    let {
      headingText: e,
      headingTop: t
    } = et(), n = Chunk504692.ZP.useExperiment({
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
          text: Z.intl.string(Z.t["3KomGR"]),
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
  $ = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = et();
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
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: F.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: F.premiumSubscribeButton,
          children: (0, r.jsx)(C.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: Z.intl.string(Z.t["3KomGR"])
            },
            className: F.button
          })
        }), !t && (0, r.jsx)(M.Z, {}), t && (0, r.jsx)(T.Z, {
          variant: T.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [ee, et] = (0, Chunk975104.Z)(),
  en = e => {
    let {
      className: t,
      location: n,
      enablePremiumBrandRefresh: i
    } = e, {
      analyticsLocations: o
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), s = (0, y.W)(), c = (0, E.Vi)(), h = (0, b._O)(), m = Z.intl.string(Z.t.qYKftb), O = (0, S.b)(n), v = (0, r.jsx)(Q, {
      className: t
    }), I = Z.intl.string(Z.t.ifwQZW), {
      fractionalState: T,
      endsAt: A
    } = (0, _.Z)(), C = (0, f.ZP)(A, f.aj.CREDITS_ENDS_IN);
    s || c ? v = (0, r.jsx)($, {
      isEligibleForBogoPromotion: c
    }) : O && (m = Z.intl.string(Z.t.qYKftb), v = (0, r.jsx)(J, {}));
    let N = null;
    if (T === G.a$.NONE || s) N = i ? (0, r.jsx)(j.Z, {
      enablePremiumBrandRefresh: true,
      text: m
    }) : (0, r.jsx)(D.Cy, {
      className: a()(F.trialPill, {
        [F.hidden]: !h
      }),
      text: m,
      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      h = true;
      let e = (0, r.jsx)("div", {
          className: F.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = Z.intl.format(Z.t["yR+oDA"], {
          helpCenterLink: g.Z.getArticleURL(B.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      N = (0, r.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: F.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", q(K({}, t), {
          className: F.pillContainer,
          children: (0, r.jsx)("div", {
            className: F.flexCentered,
            children: i ? (0, r.jsx)(j.Z, {
              enablePremiumBrandRefresh: true,
              text: C
            }) : (0, r.jsx)(D.mn, {
              className: a()(F.trialPill, {
                [F.hidden]: !h
              }),
              text: C,
              colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(d.Gt, {
      value: o,
      children: (0, r.jsx)(ee.Provider, {
        value: {
          headingText: I,
          headingTop: N,
          showPill: h
        },
        children: i ? (0, r.jsx)(X, {
          isEligibleForBogoPromotion: c,
          isInReverseTrial: s,
          shouldShowReferralProgressBar: O
        }) : v
      })
    })
  }