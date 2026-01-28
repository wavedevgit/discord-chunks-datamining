/** Chunk was on 5606 **/
/** chunk id: 161319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PR: () => D,
  Recurring3PModal: () => L,
  uE: () => M
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

function S(e) {
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
let I = {
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
  N = e => {
    let {
      recurrence: t
    } = e, n = (0, r.jsx)(l.rOg, {
      color: a.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
    }), s = (0, r.jsx)(l.K0, {
      icon: l.TdU,
      size: "sm",
      variant: "secondary",
      "aria-label": "",
      color: "icon-feedback-positive",
      onClick: () => {
        navigator.clipboard.writeText(t.code), c(n)
      }
    }), [o, c] = i.useState(() => s);
    if (null != t.code) return (0, r.jsx)("div", {
      className: j.oP,
      children: (0, r.jsxs)("div", {
        className: j.t0,
        children: [(0, r.jsx)("div", {
          className: j.cD,
          children: (0, r.jsx)(l.EYj, {
            variant: "text-md/medium",
            color: "text-strong",
            children: t.code
          })
        }), o, (0, r.jsx)(l.$nd, {
          variant: "overlay-primary",
          size: "sm",
          text: y.intl.formatToPlainString(y.t.DF68t7, {
            redemptionURL: t.redemptionURL
          }),
          onClick: () => {
            window.open(t.redemptionURL, "_blank"), d.default.track(C.HAw.RECURRING_PROMOTION_CLAIMED)
          }
        })]
      })
    })
  },
  P = () => Object.entries(I).map(e => {
    let [t, n] = e;
    return (0, r.jsx)("div", {
      className: j.lA,
      children: (0, r.jsxs)("div", {
        className: j.LV,
        children: [(0, r.jsxs)("div", {
          className: j.JN,
          children: [(0, r.jsx)("div", {
            className: j.MC,
            children: (0, r.jsx)(l.XAi, {
              size: "refresh_sm"
            })
          }), (0, r.jsxs)("div", {
            className: j.yO,
            children: [(0, r.jsx)(l.DZT, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: y.intl.string(n.title)
            }), (0, r.jsx)(l.DZT, {
              variant: "heading-sm/medium",
              color: "text-subtle",
              children: y.intl.string(n.body)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: j.R4,
          children: (0, r.jsx)(a._V3, {
            src: n.asset,
            className: j.Ys,
            width: 100,
            height: 100,
            zoomable: false
          })
        })]
      })
    }, t)
  }),
  R = e => {
    var t;
    let n, c, {
        promotionRecurrences: d
      } = e,
      [p, m] = i.useState(d.length > 1),
      [f, b] = i.useState([]),
      [h, A] = i.useState(new Set);
    i.useEffect(() => {
      b([d.sort((e, t) => t.startDate > e.startDate ? 1 : false)[0]])
    }, [d]);
    let E = (t = d[0].partnerId, n = (0, s.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (c = I[t]) ? null : n ? c.logos.dark : c.logos.light),
      x = (0, r.jsx)(a._V3, {
        src: d[0].asset,
        className: j.Ys,
        width: 100,
        height: 100,
        zoomable: false
      });
    return (0, r.jsxs)("div", {
      children: [f.map((e, t) => {
        let n = h.has(e.id),
          i = null == e.code;
        return (0, r.jsxs)("div", {
          className: j.lA,
          children: [(0, r.jsxs)("div", {
            className: j.LV,
            children: [(0, r.jsxs)("div", {
              className: j.JN,
              children: [E, (0, r.jsxs)("div", {
                className: j.yO,
                children: [(0, r.jsx)(l.DZT, {
                  variant: "heading-lg/semibold",
                  color: "text-strong",
                  children: y.intl.string(e.title)
                }), (0, r.jsx)(l.DZT, {
                  variant: "heading-sm/medium",
                  color: "text-subtle",
                  children: n ? y.intl.format(y.t.i2EuFO, {
                    helpdeskArticle: u.A.getArticleURL(C.MVz.RECURRING_PROMOTION)
                  }) : i ? y.intl.string(e.body) : y.intl.format(e.bodyWithExpiration, {
                    date: e.endDate
                  })
                })]
              }), i && (n ? (0, r.jsx)(l.$nd, {
                icon: l.EpV,
                variant: "critical-secondary",
                size: "sm",
                disabled: true,
                text: y.intl.string(y.t["8LKchl"])
              }) : (0, r.jsx)(l.$nd, {
                icon: l.XAi,
                variant: "overlay-primary",
                size: "sm",
                text: y.intl.string(y.t.vwASIl),
                onClick: () => {
                  (0, g.kd)({
                    promotionId: e.id,
                    analyticsLocations: []
                  }).then(n => {
                    var r, i;
                    b([...f.slice(0, t), (r = S({}, e), i = i = {
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
                    }), r), ...f.slice(t + 1)])
                  }).catch(t => {
                    A(t => new Set([...t, e.id])), _.A.captureException(t)
                  })
                }
              }))]
            }), (0, r.jsx)("div", {
              className: j.R4,
              children: x
            })]
          }), null != e.code && (0, r.jsx)(N, {
            recurrence: e
          })]
        }, e.id)
      }), p && (0, r.jsx)(l.DUT, {
        className: j.K8,
        onClick: () => {
          m(false), b([...f, ...d.slice(1)])
        },
        children: (0, r.jsx)(l.EYj, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: y.intl.string(y.t.rjjZxV)
        })
      })]
    })
  },
  D = e => {
    let {
      percentage: t
    } = e;
    return (0, r.jsxs)("div", {
      className: j.hr,
      children: [t > 0 && t < 100 && (0, r.jsx)(() => (0, r.jsx)("div", {
        className: j.ML,
        style: {
          left: "calc(".concat(t, "% - ").concat(5, "px)")
        },
        children: (0, r.jsx)(x.z, {})
      }), {}), (0, r.jsx)("div", {
        className: j.SX,
        style: {
          width: "".concat(t, "%")
        }
      })]
    })
  },
  w = e => {
    if (e.promotionType === A.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
      var t, n;
      return null != (t = null == (n = e.partnerId) ? true : n.toLowerCase()) ? t : null
    }
    return e.outboundTitle.toLowerCase()
  },
  L = e => {
    let t, n, i, {
        onClose: a
      } = e,
      {
        promotionsLoaded: o,
        claimedOutboundPromotionCodeMap: d
      } = (0, b.y7)(),
      _ = (0, s.yK)([h.A], () => h.A.outboundRecurringPromotions),
      A = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
      E = false === p.Ay.isPremiumExactly(A, O.PremiumTypes.TIER_2),
      x = null == A ? true : A.isFractionalPremiumWithNoStandardSub(),
      T = null == A || E || x;
    if (false === o) return (0, r.jsx)(l.y$y, {});
    let v = (e => {
      let {
        promotions: t,
        codesByPromotion: n
      } = e, r = {};
      return t.filter(e => true === (0, g.HB)({
        promotionPartner: e.outboundTitle,
        promotionType: e.promotionType
      })).forEach(e => {
        var t;
        let i = w(e),
          l = (e => {
            var t;
            let {
              promotion: n
            } = e, r = w(n);
            return null == r ? null : null != (t = I[r]) ? t : null
          })({
            promotion: e
          });
        if (null == i || null == l) return;
        i in r || (r[i] = []);
        let s = S({
          id: e.id,
          partnerId: i,
          startDate: e.startDate,
          endDate: e.endDate,
          code: null != (t = n[e.id]) ? t : null
        }, l);
        r[i].push(s)
      }), r
    })({
      promotions: _,
      codesByPromotion: d
    });
    return (0, r.jsx)(l.Modal, {
      title: y.intl.string(y.t["7ioAjs"]),
      subtitle: y.intl.format(y.t.LOYRxB, {
        helpCenterLink: u.A.getArticleURL(C.MVz.RECURRING_PROMOTION)
      }),
      actions: [],
      preview: (() => {
        if (true === T) return (0, r.jsx)(m.A, {
          subscriptionTier: O.pe.TIER_2,
          fullWidth: true,
          onClick: () => {
            a()
          },
          onSubscribeModalClose: e => {
            if (e) return f.Ay.fetchActivePromotions()
          }
        })
      })(),
      transitionState: l.ip4.ENTERED,
      onClose: a,
      children: (n = new Date((t = new Date(new Date().toLocaleString("en-US", {
        timeZone: "America/New_York"
      }))).getFullYear(), t.getMonth() + 1, 0).getDate(), i = t.getDate() / n * 100, T ? (0, r.jsx)(P, {}) : (0, r.jsxs)("div", {
        className: j.kL,
        children: [(0, r.jsx)("div", {
          className: j.Ps,
          children: (0, r.jsx)(l.EYj, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: y.intl.format(y.t["43kZKL"], {
              days: n - t.getDate()
            })
          })
        }), (0, r.jsx)(D, {
          percentage: i
        }), (0, r.jsx)("div", {
          className: j.kR,
          children: Object.entries(v).sort((e, t) => {
            let [n] = e, [r] = t;
            return r.localeCompare(n)
          }).map(e => {
            let [t, n] = e;
            return (0, r.jsx)(R, {
              promotionRecurrences: n
            }, t)
          })
        })]
      }))
    })
  },
  M = e => {
    let {
      analyticsLocations: t
    } = e;
    d.default.track(C.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
      location_stack: t
    }), f.Ay.fetchActivePromotions(), (0, a.mMO)(async () => {
      let {
        Recurring3PModal: e
      } = await Promise.resolve().then(n.bind(n, 161319));
      return t => (0, r.jsx)(e, S({}, t))
    })
  }