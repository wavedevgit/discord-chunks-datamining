/** Chunk was on web.js **/
/** chunk id: 469165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Recurring3PModal: () => Z,
  gu: () => k,
  wQ: () => F
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk518638 = require("./518638.js"),
  Chunk748770 = require("./748770.js"),
  Chunk725727 = require("./725727.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js"),
  Chunk823581 = require("./823581.jsx"),
  Chunk902135 = require("./902135.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk533084 = require("./533084.js"),
  Chunk408778 = require("./408778.js"),
  Chunk923224 = require("./923224.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = {
    [Chunk397047.fA]: {
      title: Chunk388032.t.sfGgOG,
      body: Chunk388032.t.igiSKe,
      bodyWithExpiration: Chunk388032.t.w8CXUl,
      redemptionURL: "https://steelseries.com/",
      logos: {
        dark: (0, Chunk54381.jsx)(Chunk823581.U3, {}),
        light: (0, Chunk54381.jsx)(Chunk823581.gf, {})
      },
      asset: Chunk923224.Z
    },
    [Chunk397047.dh]: {
      title: Chunk388032.t["9N8obd"],
      body: Chunk388032.t["34g+Z3"],
      bodyWithExpiration: Chunk388032.t.rqmpXc,
      redemptionURL: "https://www.kontrolfreek.com/",
      logos: {
        dark: (0, Chunk54381.jsx)(Chunk823581.dt, {}),
        light: (0, Chunk54381.jsx)(Chunk823581.QD, {})
      },
      asset: Chunk408778.Z
    }
  },
  x = e => (0, o.e7)([l.Z], () => (0, a.wjy)(l.Z.theme)) ? D[e].logos.dark : D[e].logos.light,
  L = e => {
    let {
      recurrence: t
    } = e, n = (0, r.jsx)(a.sV5, {
      color: s.TVs.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
    }), o = (0, r.jsx)(a.hU, {
      icon: a.TIy,
      size: "sm",
      variant: "secondary",
      "aria-label": "",
      color: "icon-feedback-positive",
      onClick: () => {
        navigator.clipboard.writeText(t.code), c(n)
      }
    }), [l, c] = i.useState(() => o);
    if (null != t.code) return (0, r.jsx)("div", {
      className: T.claimedFooterContainer,
      children: (0, r.jsxs)("div", {
        className: T.claimedFooter,
        children: [(0, r.jsx)("div", {
          className: T.claimedFooterCode,
          children: (0, r.jsx)(a.xvT, {
            variant: "text-md/medium",
            color: "text-strong",
            children: t.code
          })
        }), l, (0, r.jsx)(a.zxk, {
          variant: "overlay-primary",
          size: "sm",
          text: I.intl.formatToPlainString(I.t.DF68t7, {
            redemptionURL: t.redemptionURL
          }),
          onClick: () => {
            window.open(t.redemptionURL, "_blank"), u.default.track(S.rMx.RECURRING_PROMOTION_CLAIMED)
          }
        })]
      })
    })
  },
  j = () => Object.entries(D).map(e => {
    let [t, n] = e;
    return (0, r.jsx)("div", {
      className: T.promoCardContainer,
      children: (0, r.jsxs)("div", {
        className: T.wrap,
        children: [(0, r.jsxs)("div", {
          className: T.promoCardContent,
          children: [(0, r.jsx)("div", {
            className: T.lockIconContainer,
            children: (0, r.jsx)(a.mBM, {
              size: "refresh_sm"
            })
          }), (0, r.jsxs)("div", {
            className: T.promoCardContentText,
            children: [(0, r.jsx)(a.X6q, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: I.intl.string(n.title)
            }), (0, r.jsx)(a.X6q, {
              variant: "heading-sm/medium",
              color: "text-subtle",
              children: I.intl.string(n.body)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: T.promoCardAssetContainer,
          children: (0, r.jsx)(s.Eep, {
            src: n.asset,
            className: T.promoCardAsset,
            width: 100,
            height: 100,
            zoomable: false
          })
        })]
      })
    }, t)
  }),
  M = e => {
    let {
      promotionRecurrences: t
    } = e, [n, o] = i.useState(t.length > 1), [l, c] = i.useState([]), [u, f] = i.useState(new Set);
    i.useEffect(() => {
      c([t.sort((e, t) => t.startDate > e.startDate ? 1 : false)[0]])
    }, [t]);
    let _ = x(t[0].partnerId),
      h = (0, r.jsx)(s.Eep, {
        src: t[0].asset,
        className: T.promoCardAsset,
        width: 100,
        height: 100,
        zoomable: false
      });
    return (0, r.jsxs)("div", {
      children: [l.map((e, t) => {
        let n = u.has(e.id),
          i = null == e.code;
        return (0, r.jsxs)("div", {
          className: T.promoCardContainer,
          children: [(0, r.jsxs)("div", {
            className: T.wrap,
            children: [(0, r.jsxs)("div", {
              className: T.promoCardContent,
              children: [_, (0, r.jsxs)("div", {
                className: T.promoCardContentText,
                children: [(0, r.jsx)(a.X6q, {
                  variant: "heading-lg/semibold",
                  color: "text-strong",
                  children: I.intl.string(e.title)
                }), (0, r.jsx)(a.X6q, {
                  variant: "heading-sm/medium",
                  color: "text-subtle",
                  children: n ? I.intl.format(I.t.i2EuFO, {
                    helpdeskArticle: d.Z.getArticleURL(S.BhN.RECURRING_PROMOTION)
                  }) : i ? I.intl.string(e.body) : I.intl.format(e.bodyWithExpiration, {
                    date: e.endDate
                  })
                })]
              }), i && (n ? (0, r.jsx)(a.zxk, {
                icon: a.Mgn,
                variant: "critical-secondary",
                size: "sm",
                disabled: true,
                text: I.intl.string(I.t["8LKchl"])
              }) : (0, r.jsx)(a.zxk, {
                icon: a.mBM,
                variant: "overlay-primary",
                size: "sm",
                text: I.intl.string(I.t.vwASIl),
                onClick: () => {
                  (0, m.A2)({
                    promotionId: e.id,
                    analyticsLocations: []
                  }).then(n => {
                    c([...l.slice(0, t), w(P({}, e), {
                      code: n.code
                    }), ...l.slice(t + 1)])
                  }).catch(t => {
                    f(t => new Set([...t, e.id])), p.Z.captureException(t)
                  })
                }
              }))]
            }), (0, r.jsx)("div", {
              className: T.promoCardAssetContainer,
              children: h
            })]
          }), null != e.code && (0, r.jsx)(L, {
            recurrence: e
          })]
        }, e.id)
      }), n && (0, r.jsx)(a.P3F, {
        className: T.extraCodeButton,
        onClick: () => {
          o(false), c([...l, ...t.slice(1)])
        },
        children: (0, r.jsx)(a.xvT, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: I.intl.string(I.t.rjjZxV)
        })
      })]
    })
  },
  k = e => {
    let {
      percentage: t
    } = e, n = () => {
      let e = 1.8;
      return (0, r.jsx)("div", {
        className: T.progressBarIndicator,
        style: {
          left: "".concat(t - e, "%")
        },
        children: (0, r.jsx)(O.G, {})
      })
    };
    return (0, r.jsxs)("div", {
      className: T.progressBar,
      children: [t > 0 && t < 100 && (0, r.jsx)(n, {}), (0, r.jsx)("div", {
        className: T.progressBarFill,
        style: {
          width: "".concat(t, "%")
        }
      })]
    })
  },
  U = e => {
    var t;
    let {
      promotion: n
    } = e;
    return null != (t = D[n.outboundTitle.toLowerCase()]) ? t : null
  },
  G = e => {
    let {
      promotions: t,
      codesByPromotion: n
    } = e, r = {};
    return t.filter(e => true === (0, m.pD)({
      promotionPartner: e.outboundTitle
    })).map(e => {
      var t;
      let i = e.outboundTitle.toLowerCase(),
        a = U({
          promotion: e
        });
      i in r || (r[i] = []);
      let o = P({
        id: e.id,
        partnerId: i,
        startDate: e.startDate,
        endDate: e.endDate,
        code: null != (t = n[e.id]) ? t : null
      }, a);
      r[i].push(o)
    }), r
  },
  Z = e => {
    let {
      onClose: t
    } = e, {
      promotionsLoaded: n,
      claimedOutboundPromotionCodeMap: i
    } = (0, g.lG)(), s = (0, o.Wu)([E.Z], () => E.Z.outboundRecurringPromotions), l = (0, o.e7)([c.default], () => c.default.getCurrentUser()), u = false === f.ZP.isPremiumExactly(l, v.PremiumTypes.TIER_2), p = null == l ? true : l.isFractionalPremiumWithNoSubscription(), m = null == l || u || p;
    if (false === n) return (0, r.jsx)(a.$jN, {});
    let b = G({
        promotions: s,
        codesByPromotion: i
      }),
      y = () => {
        if (true === m) return (0, r.jsx)(_.Z, {
          subscriptionTier: v.Si.TIER_2,
          fullWidth: true,
          onClick: () => {
            t()
          },
          onSubscribeModalClose: e => {
            if (e) return h.ZP.fetchActivePromotions()
          }
        })
      },
      O = () => {
        let e = new Date(new Date().toLocaleString("en-US", {
            timeZone: "America/New_York"
          })),
          t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
          n = e.getDate() / t * 100;
        return m ? (0, r.jsx)(j, {}) : (0, r.jsxs)("div", {
          className: T.container,
          children: [(0, r.jsx)("div", {
            className: T.progressHeader,
            children: (0, r.jsx)(a.xvT, {
              variant: "text-md/medium",
              color: "text-subtle",
              children: I.intl.format(I.t["43kZKL"], {
                days: t - e.getDate()
              })
            })
          }), (0, r.jsx)(k, {
            percentage: n
          }), (0, r.jsx)("div", {
            className: T.cards,
            children: Object.entries(b).sort((e, t) => {
              let [n] = e, [r] = t;
              return r.localeCompare(n)
            }).map(e => {
              let [t, n] = e;
              return (0, r.jsx)(M, {
                promotionRecurrences: n
              }, t)
            })
          })]
        })
      };
    return (0, r.jsx)(a.Modal, {
      title: I.intl.string(I.t["7ioAjs"]),
      subtitle: I.intl.format(I.t.LOYRxB, {
        helpCenterLink: d.Z.getArticleURL(S.BhN.RECURRING_PROMOTION)
      }),
      actions: [],
      preview: y(),
      transitionState: a.Dvm.ENTERED,
      onClose: t,
      children: O()
    })
  },
  F = e => {
    let {
      analyticsLocations: t
    } = e;
    u.default.track(S.rMx.RECURRING_PROMOTION_MODAL_OPENED, {
      location_stack: t
    }), h.ZP.fetchActivePromotions(), (0, s.ZDy)(async () => {
      let {
        Recurring3PModal: e
      } = await Promise.resolve().then(n.bind(n, 469165));
      return t => (0, r.jsx)(e, P({}, t))
    })
  }