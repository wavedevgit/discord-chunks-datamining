/** Chunk was on 60667 **/
/** chunk id: 265729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk339048 = require("./339048.js"),
  Chunk736653 = require("./736653.js"),
  Chunk46054 = require("./46054.js"),
  Chunk728364 = require("./728364.js"),
  Chunk807055 = require("./807055.js"),
  Chunk264779 = require("./264779.js"),
  Chunk35587 = require("./35587.js"),
  Chunk982311 = require("./982311.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk469778 = require("./469778.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk780964 = require("./780964.js"),
  Chunk411121 = require("./411121.jsx"),
  Chunk12901 = require("./12901.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk492489 = require("./492489.js");

function L(e) {
  let t, {
      outboundPromotion: n,
      code: l,
      addClaimedOutboundPromotionCode: a,
      disabled: o
    } = e,
    [c, u] = i.useState(false),
    [_, g] = i.useState(false),
    h = () => u(e => !e),
    E = (0, p.Ay)(),
    x = (0, f.WD)(n.id, E),
    O = null != l,
    C = (0, A.A)(n, O);
  O && c ? t = D.intl.format(D.t.pkxVx6, {
    endDate: C,
    onClickDetails: h
  }) : O && !c ? t = D.intl.format(D.t["4sFeob"], {
    endDate: C,
    onClickDetails: h
  }) : !O && c ? t = D.intl.format(D.t["RBnE+l"], {
    endDate: C,
    onClickDetails: h
  }) : O || c || (t = D.intl.format(D.t["57+7Qn"], {
    endDate: C,
    onClickDetails: h
  }));
  let T = O ? D.intl.string(D.t["2cHUti"]) : D.intl.string(D.t.O13yhz),
    I = i.useCallback(() => g(false), []),
    {
      outboundTitle: S,
      outboundTermsAndConditions: j
    } = n;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(w.uI, w.AX),
      children: [(0, r.jsxs)("div", {
        className: w.gE,
        children: [(0, r.jsxs)("div", {
          className: w.At,
          children: [(0, r.jsx)("div", {
            className: w.$G,
            children: (0, r.jsx)("img", {
              alt: "",
              src: x,
              className: w.IJ
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              children: S
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: w.__invalid_promotionText,
              children: t
            })]
          })]
        }), !o && (0, r.jsx)(d.Button, {
          text: T,
          onClick: () => g(true),
          disabled: o,
          size: "sm"
        })]
      }), c && (0, r.jsx)(d.Text, {
        className: w.GL,
        variant: "text-xs/normal",
        color: "text-default",
        children: m.A.parse(j, false, {
          allowLinks: true
        })
      })]
    }), _ && (0, r.jsx)(d.aFV, {
      renderModal: e => {
        var t, i;
        return (0, r.jsx)(b.A, (t = function(e) {
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
        }({}, e), i = i = {
          onClose: I,
          onClaim: a,
          code: l,
          outboundPromotion: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      },
      onCloseRequest: I
    })]
  })
}
let M = function(e) {
  let {
    inOldSettings: t = false
  } = e, n = (0, c.yK)([T.A], () => T.A.getGiftable()), [l, a] = o().partition(n, e => {
    let {
      giftCodeBatchId: t
    } = e;
    return null == t
  }), p = (0, c.bG)([C.default], () => S.Ay.isPremiumExactly(C.default.getCurrentUser(), R.PremiumTypes.TIER_2)), m = o().groupBy(l, e => (0, I.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [A, f] = i.useState(false);
  i.useEffect(() => {
    u.h.wait(() => {
      (0, _.XJ)().then(() => f(true))
    })
  }, []);
  let {
    promotionsLoaded: b,
    activeOutboundPromotions: M,
    claimedEndedOutboundPromotions: U,
    claimedOutboundPromotionCodeMap: G,
    addClaimedOutboundPromotionCode: k
  } = (0, h.y7)(), V = M.length + U.length > 0, H = g.m.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: p
  }).enabled && V;
  return A && b ? (0, r.jsxs)(r.Fragment, {
    children: [function() {
      var e;
      let n = a.find(e => e.giftCodeBatchId === R.FB && !e.consumed),
        i = null != (e = a.filter(e => e.giftCodeBatchId === R.Bu && !e.consumed)) ? e : [],
        [l, c] = o().partition(i, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === R.gD.PREMIUM_YEAR_TIER_2
        }),
        u = (0, r.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: V ? D.intl.string(D.t.wFsj3B) : true
        }),
        _ = H ? (0, r.jsxs)("div", {
          className: w.uo,
          children: [(0, r.jsx)(d.tvc, {
            size: "md",
            color: d.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
            className: w.PC
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            className: w.Qw,
            children: D.intl.format(D.t.G4fwxK, {
              onClick: () => {
                (0, N.default)(), (0, O.pX)(P.BVt.APPLICATION_STORE)
              }
            })
          }), (0, r.jsx)(E.A, {
            showGradient: true,
            className: w.aA,
            subscriptionTier: R.pe.TIER_2,
            textOptions: {
              textOverride: D.intl.string(D.t.mr4K7D)
            }
          })]
        }) : null;
      return (0, r.jsxs)("div", {
        className: t ? w.sW : true,
        children: [u, V ? (0, r.jsx)(d.cGx, {
          className: w.yF
        }) : null, (0, r.jsx)(x.A, {
          className: w.Yj,
          isShown: H,
          type: x.i.PREMIUM,
          hasBackground: true,
          children: (0, r.jsxs)("div", {
            className: s()({
              [w.sW]: !H
            }),
            children: [_, U.map(e => {
              let {
                code: t,
                promotion: n
              } = e;
              return (0, r.jsx)(L, {
                outboundPromotion: n,
                code: t,
                addClaimedOutboundPromotionCode: k,
                disabled: !p
              }, n.id)
            }), M.map(e => (0, r.jsx)(L, {
              outboundPromotion: e,
              code: G[e.id],
              addClaimedOutboundPromotionCode: k,
              disabled: !p
            }, e.id)), null != n ? (0, r.jsx)(v.A, {
              className: w.uI,
              skuId: n.skuId,
              subscriptionPlanId: n.subscriptionPlanId,
              entitlements: [n],
              giftCodeBatchId: R.FB
            }, (0, I.Kx)(n.skuId, n.subscriptionPlanId)) : null, l.length > 0 ? (0, r.jsx)(v.A, {
              className: w.uI,
              skuId: l[0].skuId,
              subscriptionPlanId: l[0].subscriptionPlanId,
              entitlements: l,
              giftCodeBatchId: R.Bu
            }, (0, I.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null, c.length > 0 ? (0, r.jsx)(v.A, {
              className: w.uI,
              skuId: c[0].skuId,
              subscriptionPlanId: c[0].subscriptionPlanId,
              entitlements: c,
              giftCodeBatchId: R.Bu
            }, (0, I.Kx)(c[0].skuId, c[0].subscriptionPlanId)) : null]
          })
        })]
      })
    }(), (0, r.jsx)("div", {
      className: w.sW,
      children: (0, r.jsxs)(d.Fmo, {
        component: (0, r.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: D.intl.string(D.t["9KeUbY"])
        }),
        children: [(0, r.jsx)(d.cGx, {
          className: w.yF
        }), 0 === Object.keys(m).length ? (0, r.jsxs)("div", {
          className: w.p$,
          children: [(0, r.jsx)("div", {
            className: w.QT
          }), (0, r.jsx)(d.H, {
            className: w.ks,
            children: D.intl.string(D.t.B1qgZn)
          }), (0, r.jsx)("p", {
            className: w.WO,
            children: D.intl.format(D.t.HezvJ8, {
              onClick: function() {
                (0, y.openUserSettings)(j.X.NITRO_PANEL, {
                  section: P.nc_.PREMIUM
                })
              }
            })
          })]
        }) : o().keys(m).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: i
          } = (0, I.X6)(e);
          return (0, r.jsx)(v.A, {
            className: w.uI,
            skuId: t,
            subscriptionPlanId: n,
            entitlements: m[e],
            giftStyle: i
          }, e)
        })]
      })
    })]
  }) : (0, r.jsx)(d.y$y, {
    className: w.Lq
  })
}