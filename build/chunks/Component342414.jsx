/** Chunk was on 30202 **/
/** chunk id: 342414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk8647 = require("./8647.jsx"),
  Chunk533525 = require("./533525.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk184176 = require("./184176.jsx"),
  Chunk386733 = require("./386733.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk644219 = require("./644219.js"),
  Chunk872905 = require("./872905.js"),
  Chunk578478 = require("./578478.js");
let w = e => {
    var t, n;
    let {
      className: r
    } = e, {
      headingText: c,
      headingTop: d
    } = M(), u = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), p = (0, E.N)(), h = (0, j.Ng)(), f = (0, j.Wp)(h, y.Si.TIER_2) ? y.Si.TIER_2 : true, b = null != u && u.status !== A.O0b.ACCOUNT_HOLD && u.hasAnyPremiumNitro, x = (0, m.Z)().isFractionalPremiumActive && !b;
    return (0, i.jsxs)("div", {
      className: s()(R.container, r),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, i.jsx)("img", {
        src: D,
        alt: "",
        className: R.headerArt
      }), (0, i.jsxs)("div", {
        className: R.content,
        children: [d, (0, i.jsx)(o.X6q, {
          variant: "display-lg",
          color: "always-white",
          className: R.header,
          children: c
        }), (0, i.jsxs)("div", {
          className: R.heroHeadingOriginalButtonContainer,
          children: [x && (0, i.jsx)(S.Z, {
            color: l.Tt.BRAND,
            className: s()(R.button, R.subscribeButton),
            subscriptionTier: null != (n = null == p || null == (t = p.subscription_trial) ? true : t.sku_id) ? n : f
          }), (0, i.jsx)("div", {
            className: R.premiumSubscribeButton,
            children: (0, i.jsx)(v.Z, {
              look: l.iL.FILLED,
              color: l.Tt.BRAND,
              textOptions: {
                textOverride: P.intl.string(P.t["3KomGR"])
              },
              className: R.button
            })
          })]
        })]
      })]
    })
  },
  k = () => {
    let {
      headingText: e,
      headingTop: t
    } = M();
    return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)("img", {
        src: Chunk578478,
        alt: "",
        className: Chunk644219.headerArtV2
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk644219.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, Chunk255367.jsxs)("div", {
          className: Chunk644219.contentV2,
          children: [exports, (0, Chunk255367.jsx)(Chunk481060.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: Chunk644219.header,
            children: module
          }), (0, Chunk255367.jsx)("div", {
            className: Chunk644219.premiumSubscribeButton,
            children: (0, Chunk255367.jsx)(Chunk736519.Z, {
              look: Chunk755721.iL.FILLED,
              color: Chunk755721.Tt.BRAND,
              textOptions: {
                textOverride: Chunk388032.intl.string(Chunk388032.t["3KomGR"])
              },
              className: Chunk644219.button
            })
          }), (0, Chunk255367.jsx)(Chunk386733.Z, {})]
        })
      })]
    })
  },
  L = e => {
    let {
      isEligibleForBogoPromotion: t
    } = e, {
      headingText: n,
      headingTop: r
    } = M();
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: Z,
        alt: "",
        className: R.headerArtV2
      }), (0, i.jsxs)("div", {
        className: R.reverseContainer,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, i.jsxs)("div", {
          className: R.reverseTrialHomeHeader,
          children: [r, (0, i.jsx)(o.X6q, {
            variant: "display-lg",
            color: "always-white",
            className: R.header,
            children: n
          })]
        }), (0, i.jsx)("div", {
          className: R.premiumSubscribeButton,
          children: (0, i.jsx)(v.Z, {
            look: l.iL.FILLED,
            color: l.Tt.BRAND,
            textOptions: {
              textOverride: P.intl.string(P.t["3KomGR"])
            },
            className: R.button
          })
        }), !t && (0, i.jsx)(N.Z, {}), t && (0, i.jsx)(C.Z, {
          variant: C.C.SUBSCRIBER_HOME
        })]
      })]
    })
  },
  [B, M] = (0, Chunk975104.Z)(),
  U = e => {
    let {
      className: t,
      location: n
    } = e, {
      analyticsLocations: r
    } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA), a = (0, _.W)(), l = (0, b.Vi)(), g = (0, x._O)(), h = P.intl.string(P.t.qYKftb), j = (0, O.b)(n), E = (0, i.jsx)(w, {
      className: t
    }), C = P.intl.string(P.t.ifwQZW), {
      fractionalState: v,
      endsAt: S
    } = (0, m.Z)(), N = (0, u.ZP)(S, u.aj.CREDITS_ENDS_IN);
    a || l ? (C = P.intl.string(P.t.ifwQZW), E = (0, i.jsx)(L, {
      isEligibleForBogoPromotion: l
    })) : j && (h = P.intl.string(P.t.qYKftb), C = P.intl.string(P.t.ifwQZW), E = (0, i.jsx)(k, {}));
    let I = null;
    if (v === y.a$.NONE || a) I = (0, i.jsx)(T.Cy, {
      className: s()(R.trialPill, {
        [R.hidden]: !g
      }),
      text: h,
      colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
    });
    else {
      g = true;
      let e = (0, i.jsx)("div", {
          className: R.pillIcon,
          children: (0, i.jsx)(o.d3s, {
            size: "xxs",
            color: "var(--premium-tier-2-purple-for-gradients)"
          })
        }),
        t = P.intl.format(P.t["yR+oDA"], {
          helpCenterLink: f.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT)
        });
      I = (0, i.jsx)(p.Z, {
        text: t,
        "aria-label": t.toString(),
        tooltipClassName: R.tooltip,
        position: "right",
        children: t => {
          var n, r;
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
          }({}, t), r = r = {
            className: R.pillContainer,
            children: (0, i.jsx)("div", {
              className: R.flexCentered,
              children: (0, i.jsx)(T.mn, {
                className: s()(R.trialPill, {
                  [R.hidden]: !g
                }),
                text: N,
                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL,
                icon: e,
                gap: false
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      })
    }
    return (0, i.jsx)(d.Gt, {
      value: r,
      children: (0, i.jsx)(B.Provider, {
        value: {
          headingText: C,
          headingTop: I
        },
        children: E
      })
    })
  }