/** Chunk was on web.js **/
/** chunk id: 29599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk410030 = require("./410030.js"),
  Chunk454585 = require("./454585.js"),
  Chunk163684 = require("./163684.js"),
  Chunk178100 = require("./178100.js"),
  Chunk518638 = require("./518638.js"),
  Chunk725727 = require("./725727.js"),
  Chunk454982 = require("./454982.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk313789 = require("./313789.js"),
  Chunk317941 = require("./317941.jsx"),
  Chunk342386 = require("./342386.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666707 = require("./666707.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
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
      addClaimedOutboundPromotionCode: s,
      disabled: l
    } = e,
    [c, d] = i.useState(false),
    [f, h] = i.useState(false),
    E = () => d(e => !e),
    y = (0, _.ZP)(),
    O = (0, g.Pz)(n.id, y),
    v = null != a,
    I = (0, m.Z)(n, v);
  v && c ? t = x.intl.format(x.t.pkxVx6, {
    endDate: I,
    onClickDetails: E
  }) : v && !c ? t = x.intl.format(x.t["4sFeob"], {
    endDate: I,
    onClickDetails: E
  }) : !v && c ? t = x.intl.format(x.t["RBnE+l"], {
    endDate: I,
    onClickDetails: E
  }) : v || c || (t = x.intl.format(x.t["57+7Qn"], {
    endDate: I,
    onClickDetails: E
  }));
  let T = v ? x.intl.string(x.t["2cHUti"]) : x.intl.string(x.t.O13yhz),
    S = i.useCallback(() => h(false), []),
    {
      outboundTitle: A,
      outboundTermsAndConditions: C
    } = n;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(L.skuCard, L.promotionCard),
      children: [(0, r.jsxs)("div", {
        className: L.mainPromotionCardContainer,
        children: [(0, r.jsxs)("div", {
          className: L.promotionCardLeftContainer,
          children: [(0, r.jsx)("div", {
            className: L.promotionIcon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: O,
              className: L.promotionIconImage
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: A
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: L.__invalid_promotionText,
              children: t
            })]
          })]
        }), !l && (0, r.jsx)(u.Button, {
          text: T,
          onClick: () => h(true),
          disabled: l,
          size: "sm"
        })]
      }), c && (0, r.jsx)(u.Text, {
        className: L.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: p.Z.parse(C, false, {
          allowLinks: true
        })
      })]
    }), f && (0, r.jsx)(u.u_l, {
      renderModal: e => (0, r.jsx)(b.Z, U(j({}, e), {
        onClose: S,
        onClaim: s,
        code: a,
        outboundPromotion: n
      })),
      onCloseRequest: S
    })]
  })
}
let B = function() {
  let e = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getGiftable()),
    [t, n] = l().partition(module, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.isPremiumExactly(Chunk594174.default.getCurrentUser(), Chunk474936.PremiumTypes.TIER_2)),
    s = l().groupBy(exports, e => (0, S.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [_, p] = Chunk647438.useState(false);
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk496929.Qv)().then(() => Chunk454585(true))
    })
  }, []);
  let {
    promotionsLoaded: m,
    activeOutboundPromotions: g,
    claimedEndedOutboundPromotions: b,
    claimedOutboundPromotionCodeMap: M,
    addClaimedOutboundPromotionCode: j
  } = (0, Chunk725727.lG)(), k = Chunk518638.length + Chunk454982.length > 0, U = Chunk163684.g.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: Chunk120356
  }).enabled && k;

  function B() {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.NITRO_PANEL, {
      section: Chunk981631.oAB.PREMIUM
    })
  }

  function Z() {
    var e;
    let t = require.find(e => e.giftCodeBatchId === D.m8 && !e.consumed),
      i = null != (e = require.filter(e => e.giftCodeBatchId === D.rX && !e.consumed)) ? module : [],
      [s, c] = l().partition(Chunk647438, e => {
        let {
          subscriptionPlanId: t
        } = e;
        return t === D.Xh.PREMIUM_YEAR_TIER_2
      }),
      d = (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: k ? Chunk388032.intl.string(Chunk388032.t.wFsj3B) : true
      }),
      f = U ? (0, Chunk951288.jsxs)("div", {
        className: Chunk666707.promoHeaderContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: Chunk481060.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
          className: Chunk666707.premiumIcon
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk666707.promoDescription,
          children: Chunk388032.intl.format(Chunk388032.t.G4fwxK, {
            onClick: () => {
              (0, Chunk342386.default)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
            }
          })
        }), (0, Chunk951288.jsx)(Chunk767714.Z, {
          showGradient: true,
          className: Chunk666707.promoNitroButton,
          subscriptionTier: Chunk474936.Si.TIER_2,
          textOptions: {
            textOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7D)
          }
        })]
      }) : null;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk666707.marginContainer,
      children: [Chunk570140, k ? (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk666707.divider
      }) : null, (0, Chunk951288.jsx)(Chunk504983.Z, {
        className: Chunk666707.gradientContainer,
        isShown: U,
        type: Chunk504983.Y.PREMIUM,
        hasBackground: true,
        children: (0, Chunk951288.jsxs)("div", {
          className: o()({
            [Chunk666707.marginContainer]: !U
          }),
          children: [Chunk496929, Chunk454982.map(e => {
            let {
              code: t,
              promotion: n
            } = e;
            return (0, r.jsx)(G, {
              outboundPromotion: n,
              code: t,
              addClaimedOutboundPromotionCode: j,
              disabled: !a
            }, n.id)
          }), Chunk518638.map(e => (0, r.jsx)(G, {
            outboundPromotion: e,
            code: M[e.id],
            addClaimedOutboundPromotionCode: j,
            disabled: !a
          }, e.id)), null != exports ? (0, Chunk951288.jsx)(Chunk317941.Z, {
            className: Chunk666707.skuCard,
            skuId: exports.skuId,
            subscriptionPlanId: exports.subscriptionPlanId,
            entitlements: [exports],
            giftCodeBatchId: Chunk474936.m8
          }, (0, Chunk669079.Bg)(exports.skuId, exports.subscriptionPlanId)) : null, Chunk392711.length > 0 ? (0, Chunk951288.jsx)(Chunk317941.Z, {
            className: Chunk666707.skuCard,
            skuId: Chunk392711[0].skuId,
            subscriptionPlanId: Chunk392711[0].subscriptionPlanId,
            entitlements: Chunk392711,
            giftCodeBatchId: Chunk474936.rX
          }, (0, Chunk669079.Bg)(Chunk392711[0].skuId, Chunk392711[0].subscriptionPlanId)) : null, Chunk442837.length > 0 ? (0, Chunk951288.jsx)(Chunk317941.Z, {
            className: Chunk666707.skuCard,
            skuId: Chunk442837[0].skuId,
            subscriptionPlanId: Chunk442837[0].subscriptionPlanId,
            entitlements: Chunk442837,
            giftCodeBatchId: Chunk474936.rX
          }, (0, Chunk669079.Bg)(Chunk442837[0].skuId, Chunk442837[0].subscriptionPlanId)) : null]
        })
      })]
    })
  }

  function F() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk666707.emptyState,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk666707.emptyStateImage
      }), (0, Chunk951288.jsx)(Chunk481060.H, {
        className: Chunk666707.emptyStateHeader,
        children: Chunk388032.intl.string(Chunk388032.t.B1qgZn)
      }), (0, Chunk951288.jsx)("p", {
        className: Chunk666707.emptyStateSubtext,
        children: Chunk388032.intl.format(Chunk388032.t.HezvJ8, {
          onClick: B
        })
      })]
    })
  }
  return Chunk410030 && Chunk178100 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [Z(), (0, Chunk951288.jsx)("div", {
      className: Chunk666707.marginContainer,
      children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["9KeUbY"])
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk666707.divider
        }), 0 === Object.keys(Chunk392711).length ? F() : l().keys(Chunk392711).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: i
          } = (0, S.Z0)(e);
          return (0, r.jsx)(N.Z, {
            className: L.skuCard,
            skuId: t,
            subscriptionPlanId: n,
            entitlements: s[e],
            giftStyle: i
          }, e)
        })]
      })
    })]
  }) : (0, Chunk951288.jsx)(Chunk481060.$jN, {
    className: Chunk666707.loading
  })
}