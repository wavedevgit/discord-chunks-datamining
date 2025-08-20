/** Chunk was on web.js **/
/** chunk id: 342414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk306066 = require("./306066.jsx"),
  Chunk123274 = require("./123274.jsx"),
  Chunk543581 = require("./543581.jsx"),
  Chunk184176 = require("./184176.jsx"),
  Chunk386733 = require("./386733.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk644219 = require("./644219.js"),
  Chunk526980 = require("./526980.js"),
  Chunk872905 = require("./872905.js"),
  Chunk578478 = require("./578478.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = e => {
    var t, n;
    let {
      className: i,
      isEligibleForBogoPromotion: s,
      isInReverseTrial: l,
      shouldShowReferralProgressBar: c
    } = e, {
      headingText: u,
      headingTop: d,
      showPill: _
    } = ee(), h = null;
    s ? h = (0, r.jsx)(T.Z, {
      variant: T.C.SUBSCRIBER_HOME
    }) : l ? h = (0, r.jsx)(M.Z, {}) : c && (h = (0, r.jsx)(A._, {}));
    let m = (0, o.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
      g = (0, I.N)(),
      E = (0, v.Ng)(),
      b = (0, v.Wp)(E, U.Si.TIER_2) ? U.Si.TIER_2 : true,
      y = null != m && m.status !== G.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
      O = (0, f.Z)().isFractionalPremiumActive && !y && null == h;
    return (0, r.jsxs)("div", {
      className: a()(V.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)(x.Z, {
        className: V.gradientBackground
      }), (0, r.jsxs)("div", {
        className: V.content,
        children: [_ && d, (0, r.jsx)("div", {
          className: V.headerContainer,
          children: (0, r.jsx)(L.Z, {
            children: u
          })
        }), (0, r.jsxs)("div", {
          className: O ? V.twoButtonContainer : true,
          children: [O && (0, r.jsx)(P.Z, {
            size: "md",
            hasActivePromotion: !!s,
            subscriptionTier: null != (n = null == g || null == (t = g.subscription_trial) ? true : t.sku_id) ? n : b
          }), (0, r.jsx)(R.Z, {
            variant: O ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: B.intl.string(B.t["3KomGR"])
          })]
        }), h]
      })]
    })
  },
  X = e => {
    var t, n;
    let {
      className: i
    } = e, {
      headingText: c,
      headingTop: u
    } = ee(), d = (0, o.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()), _ = (0, I.N)(), h = (0, v.Ng)(), m = (0, v.Wp)(h, U.Si.TIER_2) ? U.Si.TIER_2 : true, g = null != d && d.status !== G.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro, E = (0, f.Z)().isFractionalPremiumActive && !g;
    return (0, r.jsxs)("div", {
      className: a()(Z.container, i),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, r.jsx)("img", {
        src: F,
        alt: "",
        className: Z.headerArt
      }), (0, r.jsxs)("div", {
        className: Z.content,
        children: [u, (0, r.jsx)(l.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: Z.header,
          children: c
        }), (0, r.jsxs)("div", {
          className: Z.heroHeadingOriginalButtonContainer,
          children: [E && (0, r.jsx)(N.Z, {
            color: s.Tt.BRAND,
            className: a()(Z.button, Z.subscribeButton),
            subscriptionTier: null != (n = null == _ || null == (t = _.subscription_trial) ? true : t.sku_id) ? n : m
          }), (0, r.jsx)("div", {
            className: Z.premiumSubscribeButton,
            children: (0, r.jsx)(C.Z, {
              look: s.iL.FILLED,
              color: s.Tt.BRAND,
              textOptions: {
                textOverride: B.intl.string(B.t["3KomGR"])
              },
              className: Z.button
            })
          })]
        })]
      })]
    })
  },
  Q = () => {
    let {
      headingText: e,
      headingTop: t
    } = ee(), n = Chunk504692.ZP.useExperiment({
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
          text: B.intl.string(B.t["3KomGR"]),
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
  J = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: i
    } = ee();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        src: H,
        alt: "",
        className: Z.headerArtV2
      }), (0, r.jsxs)("div", {
        className: Z.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, r.jsxs)("div", {
          className: Z.reverseTrialHomeHeader,
          children: [i, (0, r.jsx)(l.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: Z.header,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: Z.premiumSubscribeButton,
          children: (0, r.jsx)(C.Z, {
            look: s.iL.FILLED,
            color: s.Tt.BRAND,
            textOptions: {
              textOverride: B.intl.string(B.t["3KomGR"])
            },
            className: Z.button
          })
        }), !t && (0, r.jsx)(M.Z, {}), t && (0, r.jsx)(T.Z, {
          variant: T.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [$, ee] = (0, Chunk975104.Z)(),
  et = e => {
    let {
      className: t,
      location: n
    } = e, i = (0, y.ZP)({
      location: "HeroHeading"
    }), {
      analyticsLocations: o
    } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA), s = (0, b.W)(), p = (0, g.Vi)(), h = (0, E._O)(), O = B.intl.string(B.t.qYKftb), v = (0, S.b)(n), I = (0, r.jsx)(X, {
      className: t
    }), T = B.intl.string(B.t.ifwQZW), {
      fractionalState: A,
      endsAt: C
    } = (0, f.Z)(), N = (0, d.ZP)(C, d.aj.CREDITS_ENDS_IN);
    s || p ? I = (0, r.jsx)(J, {
      isEligibleForBogoPromotion: p
    }) : v && (O = B.intl.string(B.t.qYKftb), I = (0, r.jsx)(Q, {}));
    let R = null;
    if (A === U.a$.NONE || s) R = i ? (0, r.jsx)(j.Z, {
      enablePremiumBrandRefresh: true,
      text: O
    }) : (0, r.jsx)(D.Cy, {
      className: a()(Z.trialPill, {
        [Z.hidden]: !h
      }),
      text: O,
      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      h = true;
      let e = (0, r.jsx)("div", {
          className: Z.pillIcon,
          children: (0, r.jsx)(l.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = B.intl.format(B.t["yR+oDA"], {
          helpCenterLink: m.Z.getArticleURL(G.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      R = (0, r.jsx)(_.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: Z.tooltip,
        position: "right",
        children: t => (0, r.jsx)("div", z(W({}, t), {
          className: Z.pillContainer,
          children: (0, r.jsx)("div", {
            className: Z.flexCentered,
            children: i ? (0, r.jsx)(j.Z, {
              enablePremiumBrandRefresh: true,
              text: N
            }) : (0, r.jsx)(D.mn, {
              className: a()(Z.trialPill, {
                [Z.hidden]: !h
              }),
              text: N,
              colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
              icon: e,
              gap: false
            })
          })
        }))
      })
    }
    return (0, r.jsx)(u.Gt, {
      value: o,
      children: (0, r.jsx)($.Provider, {
        value: {
          headingText: T,
          headingTop: R,
          showPill: h
        },
        children: i ? (0, r.jsx)(q, {
          isEligibleForBogoPromotion: p,
          isInReverseTrial: s,
          shouldShowReferralProgressBar: v
        }) : I
      })
    })
  }