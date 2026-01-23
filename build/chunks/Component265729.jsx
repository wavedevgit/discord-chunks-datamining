/** Chunk was on web.js **/
/** chunk id: 265729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
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

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let t, {
      outboundPromotion: n,
      code: a,
      addClaimedOutboundPromotionCode: o,
      disabled: l
    } = e,
    [c, d] = i.useState(false),
    [f, h] = i.useState(false),
    E = () => d(e => !e),
    b = (0, p.Ay)(),
    O = (0, g.WD)(n.id, b),
    v = null != a,
    A = (0, m.A)(n, v);
  v && c ? t = x.intl.format(x.t.pkxVx6, {
    endDate: A,
    onClickDetails: E
  }) : v && !c ? t = x.intl.format(x.t["4sFeob"], {
    endDate: A,
    onClickDetails: E
  }) : !v && c ? t = x.intl.format(x.t["RBnE+l"], {
    endDate: A,
    onClickDetails: E
  }) : v || c || (t = x.intl.format(x.t["57+7Qn"], {
    endDate: A,
    onClickDetails: E
  }));
  let I = v ? x.intl.string(x.t["2cHUti"]) : x.intl.string(x.t.O13yhz),
    S = i.useCallback(() => h(false), []),
    {
      outboundTitle: T,
      outboundTermsAndConditions: C
    } = n;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(L.uI, L.AX),
      children: [(0, r.jsxs)("div", {
        className: L.gE,
        children: [(0, r.jsxs)("div", {
          className: L.At,
          children: [(0, r.jsx)("div", {
            className: L.$G,
            children: (0, r.jsx)("img", {
              alt: "",
              src: O,
              className: L.IJ
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: T
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: L.__invalid_promotionText,
              children: t
            })]
          })]
        }), !l && (0, r.jsx)(u.Button, {
          text: I,
          onClick: () => h(true),
          disabled: l,
          size: "sm"
        })]
      }), c && (0, r.jsx)(u.Text, {
        className: L.GL,
        variant: "text-xs/normal",
        color: "text-default",
        children: _.A.parse(C, false, {
          allowLinks: true
        })
      })]
    }), f && (0, r.jsx)(u.aFV, {
      renderModal: e => (0, r.jsx)(y.A, U(M({}, e), {
        onClose: S,
        onClaim: o,
        code: a,
        outboundPromotion: n
      })),
      onCloseRequest: S
    })]
  })
}
let V = function(e) {
  let {
    inOldSettings: t = false
  } = e, n = (0, c.yK)([I.A], () => I.A.getGiftable()), [a, o] = l().partition(n, e => {
    let {
      giftCodeBatchId: t
    } = e;
    return null == t
  }), p = (0, c.bG)([A.default], () => T.Ay.isPremiumExactly(A.default.getCurrentUser(), D.PremiumTypes.TIER_2)), _ = l().groupBy(a, e => (0, S.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [m, g] = i.useState(false);
  i.useEffect(() => {
    d.h.wait(() => {
      (0, f.XJ)().then(() => g(true))
    })
  }, []);
  let {
    promotionsLoaded: y,
    activeOutboundPromotions: j,
    claimedEndedOutboundPromotions: M,
    claimedOutboundPromotionCodeMap: k,
    addClaimedOutboundPromotionCode: U
  } = (0, E.y7)(), V = j.length + M.length > 0, F = h.m.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: p
  }).enabled && V;

  function B() {
    (0, w.openUserSettings)(C.X.NITRO_PANEL, {
      section: P.nc_.PREMIUM
    })
  }

  function H() {
    var e;
    let n = o.find(e => e.giftCodeBatchId === D.FB && !e.consumed),
      i = null != (e = o.filter(e => e.giftCodeBatchId === D.Bu && !e.consumed)) ? e : [],
      [a, c] = l().partition(i, e => {
        let {
          subscriptionPlanId: t
        } = e;
        return t === D.gD.PREMIUM_YEAR_TIER_2
      }),
      d = (0, r.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: V ? x.intl.string(x.t.wFsj3B) : true
      }),
      f = F ? (0, r.jsxs)("div", {
        className: L.uo,
        children: [(0, r.jsx)(u.tvc, {
          size: "md",
          color: u.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
          className: L.PC
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          className: L.Qw,
          children: x.intl.format(x.t.G4fwxK, {
            onClick: () => {
              (0, R.default)(), (0, v.pX)(P.BVt.APPLICATION_STORE)
            }
          })
        }), (0, r.jsx)(b.A, {
          showGradient: true,
          className: L.aA,
          subscriptionTier: D.pe.TIER_2,
          textOptions: {
            textOverride: x.intl.string(x.t.mr4K7D)
          }
        })]
      }) : null;
    return (0, r.jsxs)("div", {
      className: t ? L.sW : true,
      children: [d, V ? (0, r.jsx)(u.cGx, {
        className: L.yF
      }) : null, (0, r.jsx)(O.A, {
        className: L.Yj,
        isShown: F,
        type: O.i.PREMIUM,
        hasBackground: true,
        children: (0, r.jsxs)("div", {
          className: s()({
            [L.sW]: !F
          }),
          children: [f, M.map(e => {
            let {
              code: t,
              promotion: n
            } = e;
            return (0, r.jsx)(G, {
              outboundPromotion: n,
              code: t,
              addClaimedOutboundPromotionCode: U,
              disabled: !p
            }, n.id)
          }), j.map(e => (0, r.jsx)(G, {
            outboundPromotion: e,
            code: k[e.id],
            addClaimedOutboundPromotionCode: U,
            disabled: !p
          }, e.id)), null != n ? (0, r.jsx)(N.A, {
            className: L.uI,
            skuId: n.skuId,
            subscriptionPlanId: n.subscriptionPlanId,
            entitlements: [n],
            giftCodeBatchId: D.FB
          }, (0, S.Kx)(n.skuId, n.subscriptionPlanId)) : null, a.length > 0 ? (0, r.jsx)(N.A, {
            className: L.uI,
            skuId: a[0].skuId,
            subscriptionPlanId: a[0].subscriptionPlanId,
            entitlements: a,
            giftCodeBatchId: D.Bu
          }, (0, S.Kx)(a[0].skuId, a[0].subscriptionPlanId)) : null, c.length > 0 ? (0, r.jsx)(N.A, {
            className: L.uI,
            skuId: c[0].skuId,
            subscriptionPlanId: c[0].subscriptionPlanId,
            entitlements: c,
            giftCodeBatchId: D.Bu
          }, (0, S.Kx)(c[0].skuId, c[0].subscriptionPlanId)) : null]
        })
      })]
    })
  }

  function Y() {
    return (0, r.jsxs)("div", {
      className: L.p$,
      children: [(0, r.jsx)("div", {
        className: L.QT
      }), (0, r.jsx)(u.H, {
        className: L.ks,
        children: x.intl.string(x.t.B1qgZn)
      }), (0, r.jsx)("p", {
        className: L.WO,
        children: x.intl.format(x.t.HezvJ8, {
          onClick: B
        })
      })]
    })
  }
  return m && y ? (0, r.jsxs)(r.Fragment, {
    children: [H(), (0, r.jsx)("div", {
      className: L.sW,
      children: (0, r.jsxs)(u.Fmo, {
        component: (0, r.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: x.intl.string(x.t["9KeUbY"])
        }),
        children: [(0, r.jsx)(u.cGx, {
          className: L.yF
        }), 0 === Object.keys(_).length ? Y() : l().keys(_).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: i
          } = (0, S.X6)(e);
          return (0, r.jsx)(N.A, {
            className: L.uI,
            skuId: t,
            subscriptionPlanId: n,
            entitlements: _[e],
            giftStyle: i
          }, e)
        })]
      })
    })]
  }) : (0, r.jsx)(u.y$y, {
    className: L.Lq
  })
}