/** Chunk was on 1272 **/
/** chunk id: 469165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Recurring3PModal: () => j,
  w: () => P
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk518638 = require("./518638.js"),
  Chunk725727 = require("./725727.js"),
  Chunk902135 = require("./902135.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737963 = require("./737963.js"),
  Chunk295234 = require("./295234.js");

function v(e) {
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
}
let y = e => {
    let {
      recurrence: t
    } = e;
    if (null != t.code) return (0, r.jsx)("div", {
      className: O.claimedFooterContainer,
      children: (0, r.jsxs)("div", {
        className: O.claimedFooter,
        children: [(0, r.jsx)("div", {
          className: O.claimedFooterCode,
          children: (0, r.jsx)(l.xvT, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t.code
          })
        }), (0, r.jsx)(l.hU, {
          icon: l.TIy,
          size: "sm",
          variant: "secondary",
          "aria-label": "",
          onClick: () => {
            navigator.clipboard.writeText(t.code)
          }
        }), (0, r.jsx)(l.zxk, {
          variant: "overlay-primary",
          size: "sm",
          text: E.intl.formatToPlainString(E.t.DF68t7, {
            redemptionURL: t.redemptionURL
          }),
          onClick: () => {
            window.open(t.redemptionURL, "_blank"), c.default.track(b.rMx.RECURRING_PROMOTION_CLAIMED)
          }
        })]
      })
    })
  },
  C = e => {
    let {
      promotionRecurrences: t,
      isLocked: n
    } = e, [a, o] = i.useState(t.length > 1), [c, u] = i.useState([]);
    i.useEffect(() => {
      u([t.sort((e, t) => t.startDate > e.startDate ? 1 : false)[0]])
    }, [t]);
    let d = n ? (0, r.jsx)("div", {
        className: O.lockIconContainer,
        children: (0, r.jsx)(l.mBM, {})
      }) : (0, r.jsx)(s.Eep, {
        src: I.Z,
        width: 24,
        height: 24,
        zoomable: false
      }),
      f = (0, r.jsx)(s.Eep, {
        src: I.Z,
        className: O.promoCardAsset,
        width: 100,
        height: 100,
        zoomable: false
      });
    return (0, r.jsxs)("div", {
      children: [c.map((e, t) => (0, r.jsxs)("div", {
        className: O.promoCardContainer,
        children: [(0, r.jsxs)("div", {
          className: O.wrap,
          children: [(0, r.jsxs)("div", {
            className: O.promoCardContent,
            children: [d, (0, r.jsxs)("div", {
              className: O.promoCardContentText,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-lg/semibold",
                color: "text-primary",
                children: e.title
              }), (0, r.jsx)(l.X6q, {
                variant: "heading-sm/medium",
                color: "text-secondary",
                children: e.body
              })]
            }), false === n && null == e.code && (0, r.jsx)(l.zxk, {
              icon: l.mBM,
              variant: "overlay-primary",
              size: "sm",
              text: E.intl.string(E.t.vwASIl),
              onClick: () => {
                (0, m.A2)(e.id).then(n => {
                  var r, i;
                  u([...c.slice(0, t), (r = v({}, e), i = i = {
                    code: n.code
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(i)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                  }), r), ...c.slice(t + 1)])
                }).catch(e => p.Z.captureException(e))
              }
            })]
          }), (0, r.jsx)("div", {
            className: O.promoCardAssetContainer,
            children: f
          })]
        }), false === n && (0, r.jsx)(y, {
          recurrence: e
        })]
      }, e.id)), false === n && a && (0, r.jsx)(l.P3F, {
        className: O.extraCodeButton,
        onClick: () => {
          o(false), u([...c, ...t.slice(1)])
        },
        children: (0, r.jsx)(l.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E.intl.string(E.t.rjjZxV)
        })
      })]
    })
  },
  S = e => {
    let {
      percentage: t
    } = e;
    return (0, r.jsxs)("div", {
      className: O.progressBar,
      children: [t > 0 && t < 100 && (0, r.jsx)(() => (0, r.jsx)("div", {
        className: O.progressBarIndicator,
        style: {
          left: "".concat(t - 1.8, "%")
        },
        children: (0, r.jsx)(g.G, {})
      }), {}), (0, r.jsx)("div", {
        className: O.progressBarFill,
        style: {
          width: "".concat(t, "%")
        }
      })]
    })
  },
  T = {
    steelseries: {
      title: Chunk388032.intl.string(Chunk388032.t.sfGgOG),
      body: Chunk388032.intl.string(Chunk388032.t.igiSKe),
      redemptionURL: "https://steelseries.com/"
    },
    kontrolfreek: {
      title: Chunk388032.intl.string(Chunk388032.t["9N8obd"]),
      body: Chunk388032.intl.string(Chunk388032.t["34g+Z3"]),
      redemptionURL: "https://www.kontrolfreek.com/"
    }
  },
  N = e => {
    var t;
    let {
      partnerID: n
    } = e;
    return null != (t = T[n.toLowerCase()]) ? t : null
  },
  j = e => {
    let {
      onClose: t
    } = e, {
      promotionsLoaded: n,
      activeOutboundPromotions: i,
      claimedOutboundPromotionCodeMap: s
    } = (0, h.lG)(), c = (0, a.e7)([o.default], () => d.ZP.isPremiumExactly(o.default.getCurrentUser(), _.PremiumTypes.TIER_2));
    if (false === n) return (0, r.jsx)(l.$jN, {});
    let p = (e => {
      let {
        promotions: t,
        codesByPromotion: n
      } = e, r = {};
      return t.filter(e => null !== N({
        partnerID: e.outboundTitle
      })).map(e => {
        var t;
        let i = e.outboundTitle,
          l = N({
            partnerID: i
          });
        i in r || (r[i] = []);
        let a = v({
          id: e.id,
          startDate: e.startDate,
          endDate: e.endDate,
          code: null != (t = n[e.id]) ? t : null
        }, l);
        r[i].push(a)
      }), r
    })({
      promotions: i,
      codesByPromotion: s
    });
    return (0, r.jsx)(l.Modal, {
      title: E.intl.string(E.t["7ioAjs"]),
      subtitle: E.intl.format(E.t.LOYRxB, {
        helpCenterLink: u.Z.getArticleURL(b.BhN.RECURRING_PROMOTION)
      }),
      actions: [],
      preview: (() => {
        if (true !== c) return (0, r.jsx)(f.Z, {
          subscriptionTier: _.Si.TIER_2,
          fullWidth: true
        })
      })(),
      transitionState: l.Dvm.ENTERED,
      onClose: t,
      children: (() => {
        let e = new Date,
          t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
          n = e.getDate() / t * 100;
        return (0, r.jsxs)("div", {
          className: O.container,
          children: [(0, r.jsx)("div", {
            className: O.progressHeader,
            children: (0, r.jsx)(l.xvT, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: E.intl.format(E.t["43kZKL"], {
                days: t - e.getDate()
              })
            })
          }), (0, r.jsx)(S, {
            percentage: n
          }), (0, r.jsx)("div", {
            className: O.cards,
            children: Object.entries(p).map(e => {
              let [t, n] = e;
              return (0, r.jsx)(C, {
                promotionRecurrences: n,
                isLocked: false === c
              }, t)
            })
          })]
        })
      })()
    })
  },
  P = e => {
    let {
      analyticsLocations: t
    } = e;
    c.default.track(b.rMx.RECURRING_PROMOTION_MODAL_OPENED, {
      location_stack: t
    }), (0, s.ZDy)(async () => {
      let {
        Recurring3PModal: e
      } = await Promise.resolve().then(n.bind(n, 469165));
      return t => (0, r.jsx)(e, v({}, t))
    })
  }