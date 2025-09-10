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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk230711 = require("./230711.js"),
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
  Chunk317941 = require("./317941.jsx"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666707 = require("./666707.js");

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
      addClaimedOutboundPromotionCode: s,
      disabled: l
    } = e,
    [c, f] = i.useState(false),
    [_, p] = i.useState(false),
    g = () => f(e => !e),
    y = (0, h.ZP)(),
    v = (0, b.Pz)(n.id, y),
    I = null != a,
    T = (0, E.Z)(n, I);
  I && c ? t = x.intl.format(x.t.pkxVx8, {
    endDate: T,
    onClickDetails: g
  }) : I && !c ? t = x.intl.format(x.t["4sFeoa"], {
    endDate: T,
    onClickDetails: g
  }) : !I && c ? t = x.intl.format(x.t["RBnE+v"], {
    endDate: T,
    onClickDetails: g
  }) : I || c || (t = x.intl.format(x.t["57+7Qk"], {
    endDate: T,
    onClickDetails: g
  }));
  let S = I ? x.intl.string(x.t["2cHUtr"]) : x.intl.string(x.t.O13yh4),
    A = i.useCallback(() => p(false), []),
    {
      outboundTitle: C,
      outboundTermsAndConditions: N
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
              src: v,
              className: L.promotionIconImage
            })
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d.X6q, {
              variant: "heading-md/semibold",
              children: C
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: L.__invalid_promotionText,
              children: t
            })]
          })]
        }), !l && (0, r.jsx)(u.zx, {
          className: L.promotionCardButton,
          color: u.zx.Colors.BRAND,
          size: u.zx.Sizes.SMALL,
          onClick: () => p(true),
          disabled: l,
          children: S
        })]
      }), c && (0, r.jsx)(d.Text, {
        className: L.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: m.Z.parse(N, false, {
          allowLinks: true
        })
      })]
    }), _ && (0, r.jsx)(d.u_l, {
      renderModal: e => (0, r.jsx)(O.Z, U(M({}, e), {
        onClose: A,
        onClaim: s,
        code: a,
        outboundPromotion: n
      })),
      onCloseRequest: A
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
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.isPremiumExactly(Chunk594174.default.getCurrentUser(), Chunk474936.p9.TIER_2)),
    s = l().groupBy(exports, e => (0, C.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [u, h] = Chunk647438.useState(false);
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk496929.Qv)().then(() => Chunk410030(true))
    })
  }, []);
  let {
    promotionsLoaded: m,
    activeOutboundPromotions: E,
    claimedEndedOutboundPromotions: b,
    claimedOutboundPromotionCodeMap: O,
    addClaimedOutboundPromotionCode: j
  } = (0, Chunk725727.lG)(), M = Chunk178100.length + Chunk518638.length > 0, k = Chunk163684.g.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: Chunk120356
  }).enabled && M;

  function U() {
    Chunk230711.Z.open(Chunk981631.oAB.PREMIUM)
  }

  function B() {
    var e;
    let t = require.find(e => e.giftCodeBatchId === D.m8 && !e.consumed),
      i = null != (e = require.filter(e => e.giftCodeBatchId === D.rX && !e.consumed)) ? module : [],
      [s, c] = l().partition(Chunk647438, e => {
        let {
          subscriptionPlanId: t
        } = e;
        return t === D.Xh.PREMIUM_YEAR_TIER_2
      }),
      u = (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: M ? Chunk388032.intl.string(Chunk388032.t.wFsj3N) : true
      }),
      f = k ? (0, Chunk951288.jsxs)("div", {
        className: Chunk666707.promoHeaderContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: Chunk481060.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
          className: Chunk666707.premiumIcon
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk666707.promoDescription,
          children: Chunk388032.intl.format(Chunk388032.t.G4fwxM, {
            onClick: () => {
              (0, Chunk342386.Z)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
            }
          })
        }), (0, Chunk951288.jsx)(Chunk767714.Z, {
          showGradient: true,
          className: Chunk666707.promoNitroButton,
          subscriptionTier: Chunk474936.Si.TIER_2,
          textOptions: {
            textOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7O)
          }
        })]
      }) : null;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk666707.marginContainer,
      children: [Chunk755721, M ? (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk666707.divider
      }) : null, (0, Chunk951288.jsx)(Chunk504983.Z, {
        className: Chunk666707.gradientContainer,
        isShown: k,
        type: Chunk504983.Y.PREMIUM,
        hasBackground: true,
        children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          className: o()({
            [Chunk666707.marginContainer]: !k
          }),
          children: [Chunk570140, Chunk518638.map(e => {
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
          }), Chunk178100.map(e => (0, r.jsx)(G, {
            outboundPromotion: e,
            code: O[e.id],
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

  function Z() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk666707.emptyState,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk666707.emptyStateImage
      }), (0, Chunk951288.jsx)(Chunk481060.H, {
        className: Chunk666707.emptyStateHeader,
        children: Chunk388032.intl.string(Chunk388032.t.B1qgZm)
      }), (0, Chunk951288.jsx)("p", {
        className: Chunk666707.emptyStateSubtext,
        children: Chunk388032.intl.format(Chunk388032.t.HezvJy, {
          onClick: U
        })
      })]
    })
  }
  return Chunk755721 && Chunk454585 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [B(), (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk666707.marginContainer,
      children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["9KeUbW"])
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk666707.divider
        }), 0 === Object.keys(Chunk392711).length ? Z() : l().keys(Chunk392711).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: i
          } = (0, C.Z0)(e);
          return (0, r.jsx)(R.Z, {
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