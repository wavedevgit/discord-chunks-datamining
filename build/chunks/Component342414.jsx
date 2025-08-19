/** Chunk was on 66181 **/
/** chunk id: 342414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let z = e => {
    var t, n;
    let {
      className: r,
      isEligibleForBogoPromotion: l,
      isInReverseTrial: o,
      shouldShowReferralProgressBar: c
    } = e, {
      headingText: d,
      headingTop: u,
      showPill: p
    } = X(), h = null;
    l ? h = (0, i.jsx)(v.Z, {
      variant: v.C.SUBSCRIBER_HOME
    }) : o ? h = (0, i.jsx)(k.Z, {}) : c && (h = (0, i.jsx)(L.Z, {}));
    let f = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
      b = (0, O.N)(),
      x = (0, C.Ng)(),
      _ = (0, C.Wp)(x, B.Si.TIER_2) ? B.Si.TIER_2 : true,
      j = null != f && f.status !== M.O0b.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
      E = (0, m.Z)().isFractionalPremiumActive && !j && null == h;
    return (0, i.jsxs)("div", {
      className: s()(G.container, r),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, i.jsx)(D.Z, {
        className: G.gradientBackground
      }), (0, i.jsxs)("div", {
        className: G.content,
        children: [p && u, (0, i.jsx)("div", {
          className: G.headerContainer,
          children: (0, i.jsx)(Z.Z, {
            children: d
          })
        }), (0, i.jsxs)("div", {
          className: E ? G.twoButtonContainer : true,
          children: [E && (0, i.jsx)(A.Z, {
            size: "md",
            hasActivePromotion: !!l,
            subscriptionTier: null != (n = null == b || null == (t = b.subscription_trial) ? true : t.sku_id) ? n : _
          }), (0, i.jsx)(y.Z, {
            variant: E ? "secondary" : "expressive",
            size: "md",
            buttonTextOverride: U.intl.string(U.t["3KomGR"])
          })]
        }), h]
      })]
    })
  },
  W = e => {
    var t, n;
    let {
      className: r
    } = e, {
      headingText: c,
      headingTop: d
    } = X(), u = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), p = (0, O.N)(), h = (0, C.Ng)(), f = (0, C.Wp)(h, B.Si.TIER_2) ? B.Si.TIER_2 : true, b = null != u && u.status !== M.O0b.ACCOUNT_HOLD && u.hasAnyPremiumNitro, x = (0, m.Z)().isFractionalPremiumActive && !b;
    return (0, i.jsxs)("div", {
      className: s()(V.container, r),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, i.jsx)("img", {
        src: F,
        alt: "",
        className: V.headerArt
      }), (0, i.jsxs)("div", {
        className: V.content,
        children: [d, (0, i.jsx)(o.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: V.header,
          children: c
        }), (0, i.jsxs)("div", {
          className: V.heroHeadingOriginalButtonContainer,
          children: [x && (0, i.jsx)(I.Z, {
            color: l.Tt.BRAND,
            className: s()(V.button, V.subscribeButton),
            subscriptionTier: null != (n = null == p || null == (t = p.subscription_trial) ? true : t.sku_id) ? n : f
          }), (0, i.jsx)("div", {
            className: V.premiumSubscribeButton,
            children: (0, i.jsx)(N.Z, {
              look: l.iL.FILLED,
              color: l.Tt.BRAND,
              textOptions: {
                textOverride: U.intl.string(U.t["3KomGR"])
              },
              className: V.button
            })
          })]
        })]
      })]
    })
  },
  Y = () => {
    let {
      headingText: e,
      headingTop: t
    } = X(), n = Chunk504692.ZP.useExperiment({
      location: "HeroHeadingBodyV2"
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
            children: require.cohort === Chunk504692.S$.Expressive ? (0, Chunk951288.jsx)(Chunk648613.Z, {
              isGift: true,
              children: e => {
                let {
                  onClick: t
                } = e;
                return (0, i.jsx)(o.zxk, {
                  variant: "expressive",
                  size: "md",
                  text: U.intl.string(U.t["3KomGR"]),
                  icon: o.OgN,
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
            })
          }), require.cohort === Chunk504692.S$.Control ? (0, Chunk951288.jsx)(Chunk386733.Z, {}) : (0, Chunk951288.jsx)(Chunk647277._, {})]
        })
      })]
    })
  },
  K = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: r
    } = X();
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: H,
        alt: "",
        className: V.headerArtV2
      }), (0, i.jsxs)("div", {
        className: V.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, i.jsxs)("div", {
          className: V.reverseTrialHomeHeader,
          children: [r, (0, i.jsx)(o.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: V.header,
            children: n
          })]
        }), (0, i.jsx)("div", {
          className: V.premiumSubscribeButton,
          children: (0, i.jsx)(N.Z, {
            look: l.iL.FILLED,
            color: l.Tt.BRAND,
            textOptions: {
              textOverride: U.intl.string(U.t["3KomGR"])
            },
            className: V.button
          })
        }), !t && (0, i.jsx)(k.Z, {}), t && (0, i.jsx)(v.Z, {
          variant: v.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [q, X] = (0, Chunk975104.Z)(),
  J = e => {
    let {
      className: t,
      location: n
    } = e, r = (0, j.ZP)({
      location: "HeroHeading"
    }), {
      analyticsLocations: a
    } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA), l = (0, _.W)(), g = (0, b.Vi)(), h = (0, x._O)(), E = U.intl.string(U.t.qYKftb), C = (0, S.b)(n), O = (0, i.jsx)(W, {
      className: t
    }), v = U.intl.string(U.t.ifwQZW), {
      fractionalState: T,
      endsAt: N
    } = (0, m.Z)(), I = (0, u.ZP)(N, u.aj.CREDITS_ENDS_IN);
    l || g ? O = (0, i.jsx)(K, {
      isEligibleForBogoPromotion: g
    }) : C && (E = U.intl.string(U.t.qYKftb), O = (0, i.jsx)(Y, {}));
    let y = null;
    if (T === B.a$.NONE || l) y = r ? (0, i.jsx)(w.Z, {
      enablePremiumBrandRefresh: true,
      text: E
    }) : (0, i.jsx)(R.Cy, {
      className: s()(V.trialPill, {
        [V.hidden]: !h
      }),
      text: E,
      colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      h = true;
      let e = (0, i.jsx)("div", {
          className: V.pillIcon,
          children: (0, i.jsx)(o.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = U.intl.format(U.t["yR+oDA"], {
          helpCenterLink: f.Z.getArticleURL(M.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      y = (0, i.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: V.tooltip,
        position: "right",
        children: t => {
          var n, a;
          return (0, i.jsx)("div", (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), a = a = {
            className: V.pillContainer,
            children: (0, i.jsx)("div", {
              className: V.flexCentered,
              children: r ? (0, i.jsx)(w.Z, {
                enablePremiumBrandRefresh: true,
                text: I
              }) : (0, i.jsx)(R.mn, {
                className: s()(V.trialPill, {
                  [V.hidden]: !h
                }),
                text: I,
                colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
                icon: e,
                gap: false
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      })
    }
    return (0, i.jsx)(d.Gt, {
      value: a,
      children: (0, i.jsx)(q.Provider, {
        value: {
          headingText: v,
          headingTop: y,
          showPill: h
        },
        children: r ? (0, i.jsx)(z, {
          isEligibleForBogoPromotion: g,
          isInReverseTrial: l,
          shouldShowReferralProgressBar: C
        }) : O
      })
    })
  }