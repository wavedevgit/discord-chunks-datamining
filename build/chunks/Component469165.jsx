/** Chunk was on web.js **/
/** chunk id: 469165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Recurring3PModal: () => M,
  g: () => P,
  w: () => k
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
  Chunk180964 = require("./180964.js"),
  Chunk730440 = require("./730440.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
    let {
      recurrence: t
    } = e;
    if (null != t.code) return (0, r.jsx)("div", {
      className: y.claimedFooterContainer,
      children: (0, r.jsxs)("div", {
        className: y.claimedFooter,
        children: [(0, r.jsx)("div", {
          className: y.claimedFooterCode,
          children: (0, r.jsx)(a.xvT, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t.code
          })
        }), (0, r.jsx)(a.hU, {
          icon: a.TIy,
          size: "sm",
          variant: "secondary",
          "aria-label": "",
          onClick: () => {
            navigator.clipboard.writeText(t.code)
          }
        }), (0, r.jsx)(a.zxk, {
          variant: "overlay-primary",
          size: "sm",
          text: b.intl.formatToPlainString(b.t.DF68t7, {
            redemptionURL: t.redemptionURL
          }),
          onClick: () => {
            window.open(t.redemptionURL, "_blank"), c.default.track(E.rMx.RECURRING_PROMOTION_CLAIMED)
          }
        })]
      })
    })
  },
  N = () => Object.entries(D).map(e => {
    let [t, n] = e;
    return (0, r.jsx)("div", {
      className: y.promoCardContainer,
      children: (0, r.jsxs)("div", {
        className: y.wrap,
        children: [(0, r.jsxs)("div", {
          className: y.promoCardContent,
          children: [(0, r.jsx)("div", {
            className: y.lockIconContainer,
            children: (0, r.jsx)(a.mBM, {})
          }), (0, r.jsxs)("div", {
            className: y.promoCardContentText,
            children: [(0, r.jsx)(a.X6q, {
              variant: "heading-lg/semibold",
              color: "text-primary",
              children: n.title
            }), (0, r.jsx)(a.X6q, {
              variant: "heading-sm/medium",
              color: "text-secondary",
              children: n.body
            })]
          })]
        }), (0, r.jsx)("div", {
          className: y.promoCardAssetContainer,
          children: (0, r.jsx)(s.Eep, {
            src: n.asset,
            className: y.promoCardAsset,
            width: 100,
            height: 100,
            zoomable: false
          })
        })]
      })
    }, t)
  }),
  R = e => {
    let {
      promotionRecurrences: t
    } = e, [n, o] = i.useState(t.length > 1), [l, c] = i.useState([]);
    i.useEffect(() => {
      c([t.sort((e, t) => t.startDate > e.startDate ? 1 : false)[0]])
    }, [t]);
    let u = t[0].asset,
      d = (0, r.jsx)(s.Eep, {
        src: u,
        width: 24,
        height: 24,
        zoomable: false
      }),
      _ = (0, r.jsx)(s.Eep, {
        src: u,
        className: y.promoCardAsset,
        width: 100,
        height: 100,
        zoomable: false
      });
    return (0, r.jsxs)("div", {
      children: [l.map((e, t) => (0, r.jsxs)("div", {
        className: y.promoCardContainer,
        children: [(0, r.jsxs)("div", {
          className: y.wrap,
          children: [(0, r.jsxs)("div", {
            className: y.promoCardContent,
            children: [d, (0, r.jsxs)("div", {
              className: y.promoCardContentText,
              children: [(0, r.jsx)(a.X6q, {
                variant: "heading-lg/semibold",
                color: "text-primary",
                children: e.title
              }), (0, r.jsx)(a.X6q, {
                variant: "heading-sm/medium",
                color: "text-secondary",
                children: e.body
              })]
            }), null == e.code && (0, r.jsx)(a.zxk, {
              icon: a.mBM,
              variant: "overlay-primary",
              size: "sm",
              text: b.intl.string(b.t.vwASIl),
              onClick: () => {
                (0, p.A2)(e.id).then(n => {
                  c([...l.slice(0, t), A(T({}, e), {
                    code: n.code
                  }), ...l.slice(t + 1)])
                }).catch(e => f.Z.captureException(e))
              }
            })]
          }), (0, r.jsx)("div", {
            className: y.promoCardAssetContainer,
            children: _
          })]
        }), (0, r.jsx)(C, {
          recurrence: e
        })]
      }, e.id)), n && (0, r.jsx)(a.P3F, {
        className: y.extraCodeButton,
        onClick: () => {
          o(false), c([...l, ...t.slice(1)])
        },
        children: (0, r.jsx)(a.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: b.intl.string(b.t.rjjZxV)
        })
      })]
    })
  },
  P = e => {
    let {
      percentage: t
    } = e, n = () => {
      let e = 1.8;
      return (0, r.jsx)("div", {
        className: y.progressBarIndicator,
        style: {
          left: "".concat(t - e, "%")
        },
        children: (0, r.jsx)(m.G, {})
      })
    };
    return (0, r.jsxs)("div", {
      className: y.progressBar,
      children: [t > 0 && t < 100 && (0, r.jsx)(n, {}), (0, r.jsx)("div", {
        className: y.progressBarFill,
        style: {
          width: "".concat(t, "%")
        }
      })]
    })
  },
  w = "kontrolfreek",
  D = {
    steelseries: {
      title: Chunk388032.intl.string(Chunk388032.t.sfGgOG),
      body: Chunk388032.intl.string(Chunk388032.t.igiSKe),
      redemptionURL: "https://steelseries.com/",
      asset: Chunk730440.Z
    },
    [w]: {
      title: Chunk388032.intl.string(Chunk388032.t["9N8obd"]),
      body: Chunk388032.intl.string(Chunk388032.t["34g+Z3"]),
      redemptionURL: "https://www.kontrolfreek.com/",
      asset: Chunk180964.Z
    }
  },
  L = e => {
    var t;
    let {
      partnerID: n
    } = e;
    return null != (t = D[n.toLowerCase()]) ? t : null
  },
  x = e => {
    let {
      promotions: t,
      codesByPromotion: n
    } = e, r = {};
    return t.filter(e => null !== L({
      partnerID: e.outboundTitle
    })).map(e => {
      var t;
      let i = e.outboundTitle,
        a = L({
          partnerID: i
        });
      i in r || (r[i] = []);
      let o = T({
        id: e.id,
        startDate: e.startDate,
        endDate: e.endDate,
        code: null != (t = n[e.id]) ? t : null
      }, a);
      r[i].push(o)
    }), r
  },
  M = e => {
    let {
      onClose: t
    } = e, {
      promotionsLoaded: n,
      activeOutboundPromotions: i,
      claimedOutboundPromotionCodeMap: s
    } = (0, h.lG)(), c = false === (0, o.e7)([l.default], () => d.ZP.isPremiumExactly(l.default.getCurrentUser(), g.PremiumTypes.TIER_2));
    if (false === n) return (0, r.jsx)(a.$jN, {});
    let f = x({
        promotions: i,
        codesByPromotion: s
      }),
      p = () => {
        if (true === c) return (0, r.jsx)(_.Z, {
          subscriptionTier: g.Si.TIER_2,
          fullWidth: true
        })
      },
      m = () => {
        let e = new Date,
          t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
          n = e.getDate() / t * 100;
        return c ? (0, r.jsx)(N, {}) : (0, r.jsxs)("div", {
          className: y.container,
          children: [(0, r.jsx)("div", {
            className: y.progressHeader,
            children: (0, r.jsx)(a.xvT, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: b.intl.format(b.t["43kZKL"], {
                days: t - e.getDate()
              })
            })
          }), (0, r.jsx)(P, {
            percentage: n
          }), (0, r.jsx)("div", {
            className: y.cards,
            children: Object.entries(f).map(e => {
              let [t, n] = e;
              return (0, r.jsx)(R, {
                promotionRecurrences: n
              }, t)
            })
          })]
        })
      };
    return (0, r.jsx)(a.Modal, {
      title: b.intl.string(b.t["7ioAjs"]),
      subtitle: b.intl.format(b.t.LOYRxB, {
        helpCenterLink: u.Z.getArticleURL(E.BhN.RECURRING_PROMOTION)
      }),
      actions: [],
      preview: p(),
      transitionState: a.Dvm.ENTERED,
      onClose: t,
      children: m()
    })
  },
  k = e => {
    let {
      analyticsLocations: t
    } = e;
    c.default.track(E.rMx.RECURRING_PROMOTION_MODAL_OPENED, {
      location_stack: t
    }), (0, s.ZDy)(async () => {
      let {
        Recurring3PModal: e
      } = await Promise.resolve().then(n.bind(n, 469165));
      return t => (0, r.jsx)(e, T({}, t))
    })
  }