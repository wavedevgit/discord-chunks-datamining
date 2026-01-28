/** Chunk was on 5606 **/
/** chunk id: 343547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
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
  Chunk975571 = require("./975571.js"),
  Chunk749082 = require("./749082.jsx"),
  Chunk385243 = require("./385243.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk901123 = require("./901123.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk785619 = require("./785619.js"),
  Chunk909340 = require("./909340.js"),
  Chunk455482 = require("./455482.js");
let P = Chunk975571.A.getArticleURL(Chunk652215.MVz.ORBS_REWARDS_FAQ),
  R = e => {
    var t, n;
    let {
      className: l
    } = e, {
      passesGeneralUIInvariant: E,
      programReward: R
    } = (0, o.cf)([g.A], () => ({
      passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(f.W.NITRO),
      programReward: g.A.getRewardForProgram(f.W.NITRO)
    })), D = (0, p.A)("(min-width: ".concat(720, "px)")), w = (0, _.DP)(), L = i.useMemo(() => ({
      hueRotate: 25,
      glowAmount: (0, d.M)(w) ? 2 : 8,
      blurAmount: 20
    }), [w]);
    if (!E || null == R) return null;
    let M = function(e, t) {
      let n = e.program_current_state,
        i = null != e.next_reward_date && "" !== e.next_reward_date ? (0, a.default)(new Date(e.next_reward_date), new Date) : null,
        l = null == e ? true : e.total_rewarded_from_program;
      switch (n) {
        case f.L.ACTIVE:
          if (null == i || i < 0) return null;
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: true, actionButton: (0, r.jsx)(c.$nd, {
              text: v.intl.string(T.default.BxjHiu),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => (0, b.pX)(j.BV.COLLECTIBLES_SHOP_WITH_TAB(y.G2.ORBS))
            }), headerText: v.intl.format(T.default.cfE8Oh, {
              days: Math.max(1, i)
            }), subheaderText: v.intl.format(T.default["53tWRt"], {
              helpdeskArticle: P
            })
          };
        case f.L.PAYMENT_PROCESSING:
          return {
            displayTotalLifetimeRewards: false, displayProgressBar: false, actionButton: (0, r.jsx)(c.$nd, {
              text: v.intl.string(T.default.KVCfnE),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => (0, A.openUserSettings)(h.X.BILLING_PANEL, {
                section: C.nc_.BILLING
              })
            }), headerText: v.intl.string(T.default.uuZJXR), subheaderText: v.intl.format(T.default.dkeEV7, {
              helpdeskArticle: P
            })
          };
        case f.L.PAYMENT_ERROR:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: false, actionButton: (0, r.jsx)("span", {
              className: t ? "theme-dark" : true,
              children: (0, r.jsx)(c.$nd, {
                text: v.intl.string(T.default.KVCfnE),
                variant: "critical-secondary",
                onClick: () => (0, A.openUserSettings)(h.X.BILLING_PANEL, {
                  section: C.nc_.BILLING
                })
              })
            }), headerText: v.intl.string(T.default["+O9Asn"]), subheaderText: v.intl.format(T.default.nWKEBZ, {
              helpdeskArticle: P
            })
          };
        case f.L.PROGRAM_ROLLBACK:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
              text: v.intl.string(T.default["wLAd/+"]),
              variant: t ? "overlay-primary" : "secondary",
              onClick: () => (0, b.pX)(j.BV.COLLECTIBLES_SHOP_WITH_TAB(y.G2.ORBS))
            }), headerText: v.intl.string(T.default.zF0HnJ), subheaderText: v.intl.format(T.default["5tzNTa"], {
              helpdeskArticle: P
            })
          };
        case f.L.PREMIUM_CHURNING:
          return {
            displayTotalLifetimeRewards: null != l, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
              text: v.intl.string(T.default.FToh6D),
              variant: t ? "overlay-primary" : "secondary",
              icon: c.tvc,
              onClick: () => (0, A.openUserSettings)(h.X.BILLING_PANEL, {
                section: C.nc_.BILLING
              })
            }), headerText: v.intl.string(T.default.ISnOet), subheaderText: v.intl.format(T.default["vjaRZ/"], {
              helpdeskArticle: P
            })
          };
        default:
          return null
      }
    }(R, D);
    if (null == M) return null;
    let {
      displayTotalLifetimeRewards: G,
      displayProgressBar: U,
      actionButton: k,
      headerText: H,
      subheaderText: B
    } = M;
    return (0, r.jsx)("div", {
      className: s()(S.Hc, l),
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
        cardClassName: S.Nr
      }, L), n = n = {
        children: [(0, r.jsx)(m.A, {
          muted: true,
          autoPlay: true,
          playsInline: true,
          loop: true,
          className: S.Ki,
          src: I.A
        }), (0, r.jsxs)("div", {
          className: S.zK,
          children: [(0, r.jsx)("img", {
            src: N.A,
            className: S._e,
            alt: "",
            "aria-hidden": true
          }), (0, r.jsx)("div", {
            className: S.mR
          })]
        }), (0, r.jsxs)("div", {
          className: S.FS,
          children: [(0, r.jsx)("div", {
            className: S.aZ,
            children: (0, r.jsx)(c.Exy, {
              type: "beta",
              variant: "expressive"
            })
          }), (0, r.jsx)(c.DZT, {
            variant: "heading-xl/bold",
            className: S.R_,
            children: H
          }), (0, r.jsx)(c.EYj, {
            variant: "text-md/medium",
            className: S.G3,
            children: B
          }), U && (0, r.jsx)(O.A, {
            className: S.L$
          }), G && (0, r.jsxs)("div", {
            className: S.fB,
            children: [(0, r.jsx)(c.EYj, {
              variant: "text-md/medium",
              className: S.G3,
              children: v.intl.string(T.default["/1mWUn"])
            }), (0, r.jsx)(c.Cp8, {
              size: "sm",
              color: "currentColor"
            }), (0, r.jsx)(c.EYj, {
              variant: "text-md/medium",
              className: S.G3,
              children: R.total_rewarded_from_program
            })]
          }), (0, r.jsx)("div", {
            className: S.WT,
            children: (0, r.jsx)(c.e2v, {
              children: k
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