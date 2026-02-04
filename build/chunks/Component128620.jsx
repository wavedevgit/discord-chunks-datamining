/** Chunk was on 9207 **/
/** chunk id: 128620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk892227 = require("./892227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk462887 = require("./462887.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk736653 = require("./736653.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk308541 = require("./308541.jsx"),
  Chunk94264 = require("./94264.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk901123 = require("./901123.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk970466 = require("./970466.js"),
  Chunk909340 = require("./909340.js"),
  Chunk455482 = require("./455482.js");
let R = Chunk975571.A.getArticleURL(Chunk652215.MVz.ORBS_REWARDS_FAQ),
  D = e => {
    var t, n;
    let {
      className: l
    } = e, {
      passesGeneralUIInvariant: O,
      programReward: D
    } = (0, o.cf)([g.A], () => ({
      passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(A.W.NITRO),
      programReward: g.A.getRewardForProgram(A.W.NITRO)
    })), L = (0, _.A)("(min-width: ".concat(720, "px)")), w = (0, p.DP)(), M = i.useMemo(() => ({
      hueRotate: 25,
      glowAmount: (0, d.M)(w) ? 2 : 8,
      blurAmount: 20
    }), [w]);
    if (!O || null == D) return null;
    let G = function(e, t) {
      let n = e.program_current_state,
        i = null != e.next_reward_date && "" !== e.next_reward_date ? (0, a.default)(new Date(e.next_reward_date), new Date) : null,
        l = null == e ? true : e.total_rewarded_from_program;
      switch (n) {
        case A.L.ACTIVE:
          if (null == i || i < 0) return null;
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: true, actionButton: (0, r.jsx)(c.$nd, {
              text: y.intl.string(N.default.BxjHiu),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => {
                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                  cta_type: "shop_orbs",
                  program_state: n
                }), (0, f.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS))
              }
            }), headerText: y.intl.format(N.default.BxLJQL, {
              days: Math.max(1, i),
              orbsCount: e.reward_amount
            }), subheaderText: y.intl.format(N.default.tUV1vV, {
              helpdeskArticle: R
            })
          };
        case A.L.PAYMENT_PROCESSING:
          return {
            displayTotalLifetimeRewards: false, displayProgressBar: false, actionButton: (0, r.jsx)(c.$nd, {
              text: y.intl.string(N.default.KVCfnE),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => {
                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                  cta_type: "view_billing",
                  program_state: n
                }), (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                  section: S.nc_.BILLING
                })
              }
            }), headerText: y.intl.string(N.default.uuZJXR), subheaderText: y.intl.format(N.default.dkeEV7, {
              helpdeskArticle: R
            })
          };
        case A.L.PAYMENT_ERROR:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: false, actionButton: (0, r.jsx)("span", {
              className: t ? "theme-dark" : true,
              children: (0, r.jsx)(c.$nd, {
                text: y.intl.string(N.default.KVCfnE),
                variant: "critical-secondary",
                onClick: () => {
                  E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                    cta_type: "update_billing",
                    program_state: n
                  }), (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                    section: S.nc_.BILLING
                  })
                }
              })
            }), headerText: y.intl.string(N.default["+O9Asn"]), subheaderText: y.intl.format(N.default.nWKEBZ, {
              helpdeskArticle: R
            })
          };
        case A.L.PROGRAM_ROLLBACK:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
              text: y.intl.string(N.default["wLAd/+"]),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => {
                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                  cta_type: "shop_orbs",
                  program_state: n
                }), (0, f.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS))
              }
            }), headerText: y.intl.string(N.default.zF0HnJ), subheaderText: y.intl.format(N.default["5tzNTa"], {
              helpdeskArticle: R
            })
          };
        case A.L.PREMIUM_CHURNING:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
              text: y.intl.string(N.default.FToh6D),
              variant: t ? "overlay-primary" : "secondary",
              icon: c.tvc,
              onClick: () => {
                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                  cta_type: "resubscribe",
                  program_state: n
                }), (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                  section: S.nc_.BILLING
                })
              }
            }), headerText: y.intl.string(N.default.ISnOet), subheaderText: y.intl.format(N.default["vjaRZ/"], {
              helpdeskArticle: R
            })
          };
        default:
          return null
      }
    }(D, L);
    if (null == G) return null;
    let {
      displayTotalLifetimeRewards: U,
      displayProgressBar: k,
      actionButton: B,
      headerText: H,
      subheaderText: V
    } = G;
    return (0, r.jsx)("div", {
      className: s()(j.Hc, l),
      children: (0, r.jsxs)(x.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        cardType: u.sl2.CUSTOM,
        cardClassName: j.Nr
      }, M), n = n = {
        children: [(0, r.jsx)(m.A, {
          muted: true,
          autoPlay: true,
          playsInline: true,
          loop: true,
          className: j.Ki,
          src: v.A
        }), (0, r.jsxs)("div", {
          className: j.zK,
          children: [(0, r.jsx)("img", {
            src: P.A,
            className: j._e,
            alt: "",
            "aria-hidden": true
          }), (0, r.jsx)("div", {
            className: j.mR
          })]
        }), (0, r.jsxs)("div", {
          className: j.FS,
          children: [(0, r.jsx)("div", {
            className: j.aZ,
            children: (0, r.jsx)(c.Exy, {
              type: "beta",
              variant: "expressive"
            })
          }), (0, r.jsx)(c.DZT, {
            variant: "heading-xl/bold",
            className: j.R_,
            children: H
          }), (0, r.jsx)(c.EYj, {
            variant: "text-md/medium",
            className: j.G3,
            children: V
          }), k && (0, r.jsx)(C.A, {
            className: j.L$
          }), U && D.total_rewarded_from_program > 0 && (0, r.jsxs)("div", {
            className: j.fB,
            children: [(0, r.jsx)(c.EYj, {
              variant: "text-md/medium",
              className: j.G3,
              children: y.intl.string(N.default["/1mWUn"])
            }), (0, r.jsx)(c.Cp8, {
              size: "sm",
              color: "currentColor"
            }), (0, r.jsx)(c.EYj, {
              variant: "text-md/medium",
              className: j.G3,
              children: D.total_rewarded_from_program
            })]
          }), (0, r.jsx)("div", {
            className: j.WT,
            children: (0, r.jsx)(c.e2v, {
              children: B
            })
          })]
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  }