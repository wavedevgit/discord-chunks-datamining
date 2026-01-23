/** Chunk was on web.js **/
/** chunk id: 161319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PR: () => k,
  Recurring3PModal: () => F,
  uE: () => B
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk728458 = require("./728458.js"),
  Chunk792656 = require("./792656.jsx"),
  Chunk264779 = require("./264779.js"),
  Chunk597758 = require("./597758.js"),
  Chunk35587 = require("./35587.js"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js"),
  Chunk699443 = require("./699443.jsx"),
  Chunk934204 = require("./934204.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk342087 = require("./342087.js"),
  Chunk870378 = require("./870378.js"),
  Chunk8496 = require("./8496.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = {
    [Chunk852218.KS]: {
      title: Chunk985018.t.sfGgOG,
      body: Chunk985018.t.igiSKe,
      bodyWithExpiration: Chunk985018.t.w8CXUl,
      redemptionURL: "https://steelseries.com/",
      logos: {
        dark: (0, Chunk627968.jsx)(Chunk699443.a1, {}),
        light: (0, Chunk627968.jsx)(Chunk699443.Gn, {})
      },
      asset: Chunk8496.A
    },
    [Chunk852218.Cs]: {
      title: Chunk985018.t["9N8obd"],
      body: Chunk985018.t["34g+Z3"],
      bodyWithExpiration: Chunk985018.t.rqmpXc,
      redemptionURL: "https://www.kontrolfreek.com/",
      logos: {
        dark: (0, Chunk627968.jsx)(Chunk699443.WF, {}),
        light: (0, Chunk627968.jsx)(Chunk699443.s, {})
      },
      asset: Chunk870378.A
    }
  },
  x = e => {
    let t = (0, s.bG)([l.A], () => (0, a.Mwr)(l.A.theme)),
      n = D[e];
    return null == n ? null : t ? n.logos.dark : n.logos.light
  },
  L = e => {
    let {
      recurrence: t
    } = e, n = (0, r.jsx)(a.rOg, {
      color: o.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
    }), s = (0, r.jsx)(a.K0, {
      icon: a.TdU,
      size: "sm",
      variant: "secondary",
      "aria-label": "",
      color: "icon-feedback-positive",
      onClick: () => {
        navigator.clipboard.writeText(t.code), c(n)
      }
    }), [l, c] = i.useState(() => s);
    if (null != t.code) return (0, r.jsx)("div", {
      className: S.oP,
      children: (0, r.jsxs)("div", {
        className: S.t0,
        children: [(0, r.jsx)("div", {
          className: S.cD,
          children: (0, r.jsx)(a.EYj, {
            variant: "text-md/medium",
            color: "text-strong",
            children: t.code
          })
        }), l, (0, r.jsx)(a.$nd, {
          variant: "overlay-primary",
          size: "sm",
          text: I.intl.formatToPlainString(I.t.DF68t7, {
            redemptionURL: t.redemptionURL
          }),
          onClick: () => {
            window.open(t.redemptionURL, "_blank"), u.default.track(A.HAw.RECURRING_PROMOTION_CLAIMED)
          }
        })]
      })
    })
  },
  j = () => Object.entries(D).map(e => {
    let [t, n] = e;
    return (0, r.jsx)("div", {
      className: S.lA,
      children: (0, r.jsxs)("div", {
        className: S.LV,
        children: [(0, r.jsxs)("div", {
          className: S.JN,
          children: [(0, r.jsx)("div", {
            className: S.MC,
            children: (0, r.jsx)(a.XAi, {
              size: "refresh_sm"
            })
          }), (0, r.jsxs)("div", {
            className: S.yO,
            children: [(0, r.jsx)(a.DZT, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: I.intl.string(n.title)
            }), (0, r.jsx)(a.DZT, {
              variant: "heading-sm/medium",
              color: "text-subtle",
              children: I.intl.string(n.body)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: S.R4,
          children: (0, r.jsx)(o._V3, {
            src: n.asset,
            className: S.Ys,
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
    } = e, [n, s] = i.useState(t.length > 1), [l, c] = i.useState([]), [u, f] = i.useState(new Set);
    i.useEffect(() => {
      c([t.sort((e, t) => t.startDate > e.startDate ? 1 : false)[0]])
    }, [t]);
    let _ = x(t[0].partnerId),
      m = (0, r.jsx)(o._V3, {
        src: t[0].asset,
        className: S.Ys,
        width: 100,
        height: 100,
        zoomable: false
      });
    return (0, r.jsxs)("div", {
      children: [l.map((e, t) => {
        let n = u.has(e.id),
          i = null == e.code;
        return (0, r.jsxs)("div", {
          className: S.lA,
          children: [(0, r.jsxs)("div", {
            className: S.LV,
            children: [(0, r.jsxs)("div", {
              className: S.JN,
              children: [_, (0, r.jsxs)("div", {
                className: S.yO,
                children: [(0, r.jsx)(a.DZT, {
                  variant: "heading-lg/semibold",
                  color: "text-strong",
                  children: I.intl.string(e.title)
                }), (0, r.jsx)(a.DZT, {
                  variant: "heading-sm/medium",
                  color: "text-subtle",
                  children: n ? I.intl.format(I.t.i2EuFO, {
                    helpdeskArticle: d.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
                  }) : i ? I.intl.string(e.body) : I.intl.format(e.bodyWithExpiration, {
                    date: e.endDate
                  })
                })]
              }), i && (n ? (0, r.jsx)(a.$nd, {
                icon: a.EpV,
                variant: "critical-secondary",
                size: "sm",
                disabled: true,
                text: I.intl.string(I.t["8LKchl"])
              }) : (0, r.jsx)(a.$nd, {
                icon: a.XAi,
                variant: "overlay-primary",
                size: "sm",
                text: I.intl.string(I.t.vwASIl),
                onClick: () => {
                  (0, h.kd)({
                    promotionId: e.id,
                    analyticsLocations: []
                  }).then(n => {
                    c([...l.slice(0, t), P(w({}, e), {
                      code: n.code
                    }), ...l.slice(t + 1)])
                  }).catch(t => {
                    f(t => new Set([...t, e.id])), p.A.captureException(t)
                  })
                }
              }))]
            }), (0, r.jsx)("div", {
              className: S.R4,
              children: m
            })]
          }), null != e.code && (0, r.jsx)(L, {
            recurrence: e
          })]
        }, e.id)
      }), n && (0, r.jsx)(a.DUT, {
        className: S.K8,
        onClick: () => {
          s(false), c([...l, ...t.slice(1)])
        },
        children: (0, r.jsx)(a.EYj, {
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
        className: S.ML,
        style: {
          left: "".concat(t - e, "%")
        },
        children: (0, r.jsx)(O.z, {})
      })
    };
    return (0, r.jsxs)("div", {
      className: S.hr,
      children: [t > 0 && t < 100 && (0, r.jsx)(n, {}), (0, r.jsx)("div", {
        className: S.SX,
        style: {
          width: "".concat(t, "%")
        }
      })]
    })
  },
  U = e => {
    if (e.promotionType === y.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
      var t, n;
      return null != (t = null == (n = e.partnerId) ? true : n.toLowerCase()) ? t : null
    }
    return e.outboundTitle.toLowerCase()
  },
  G = e => {
    var t;
    let {
      promotion: n
    } = e, r = U(n);
    return null == r ? null : null != (t = D[r]) ? t : null
  },
  V = e => {
    let {
      promotions: t,
      codesByPromotion: n
    } = e, r = {};
    return t.filter(e => true === (0, h.HB)({
      promotionPartner: e.outboundTitle,
      promotionType: e.promotionType
    })).forEach(e => {
      var t;
      let i = U(e),
        a = G({
          promotion: e
        });
      if (null == i || null == a) return;
      i in r || (r[i] = []);
      let s = w({
        id: e.id,
        partnerId: i,
        startDate: e.startDate,
        endDate: e.endDate,
        code: null != (t = n[e.id]) ? t : null
      }, a);
      r[i].push(s)
    }), r
  },
  F = e => {
    let {
      onClose: t
    } = e, {
      promotionsLoaded: n,
      claimedOutboundPromotionCodeMap: i
    } = (0, g.y7)(), o = (0, s.yK)([E.A], () => E.A.outboundRecurringPromotions), l = (0, s.bG)([c.default], () => c.default.getCurrentUser()), u = false === f.Ay.isPremiumExactly(l, v.PremiumTypes.TIER_2), p = null == l ? true : l.isFractionalPremiumWithNoStandardSub(), h = null == l || u || p;
    if (false === n) return (0, r.jsx)(a.y$y, {});
    let y = V({
        promotions: o,
        codesByPromotion: i
      }),
      b = () => {
        if (true === h) return (0, r.jsx)(_.A, {
          subscriptionTier: v.pe.TIER_2,
          fullWidth: true,
          onClick: () => {
            t()
          },
          onSubscribeModalClose: e => {
            if (e) return m.Ay.fetchActivePromotions()
          }
        })
      },
      O = () => {
        let e = new Date(new Date().toLocaleString("en-US", {
            timeZone: "America/New_York"
          })),
          t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
          n = e.getDate() / t * 100;
        return h ? (0, r.jsx)(j, {}) : (0, r.jsxs)("div", {
          className: S.kL,
          children: [(0, r.jsx)("div", {
            className: S.Ps,
            children: (0, r.jsx)(a.EYj, {
              variant: "text-md/medium",
              color: "text-subtle",
              children: I.intl.format(I.t["43kZKL"], {
                days: t - e.getDate()
              })
            })
          }), (0, r.jsx)(k, {
            percentage: n
          }), (0, r.jsx)("div", {
            className: S.kR,
            children: Object.entries(y).sort((e, t) => {
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
        helpCenterLink: d.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
      }),
      actions: [],
      preview: b(),
      transitionState: a.ip4.ENTERED,
      onClose: t,
      children: O()
    })
  },
  B = e => {
    let {
      analyticsLocations: t
    } = e;
    u.default.track(A.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
      location_stack: t
    }), m.Ay.fetchActivePromotions(), (0, o.mMO)(async () => {
      let {
        Recurring3PModal: e
      } = await Promise.resolve().then(n.bind(n, 161319));
      return t => (0, r.jsx)(e, w({}, t))
    })
  }