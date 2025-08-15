/** Chunk was on 30202 **/
/** chunk id: 29599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk37234 = require("./37234.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666707 = require("./666707.js");

function w(e) {
  let t, {
      outboundPromotion: n,
      code: s,
      addClaimedOutboundPromotionCode: l,
      disabled: o
    } = e,
    [c, m] = r.useState(false),
    [p, g] = r.useState(false),
    h = () => m(e => !e),
    x = (0, f.ZP)(),
    E = (0, j.Pz)(n.id, x),
    O = null != s,
    v = (0, _.Z)(n, O);
  O && c ? t = D.intl.format(D.t.pkxVx8, {
    endDate: v,
    onClickDetails: h
  }) : O && !c ? t = D.intl.format(D.t["4sFeoa"], {
    endDate: v,
    onClickDetails: h
  }) : !O && c ? t = D.intl.format(D.t["RBnE+v"], {
    endDate: v,
    onClickDetails: h
  }) : O || c || (t = D.intl.format(D.t["57+7Qk"], {
    endDate: v,
    onClickDetails: h
  }));
  let S = O ? D.intl.string(D.t["2cHUtr"]) : D.intl.string(D.t.O13yh4),
    T = r.useCallback(() => g(false), []),
    {
      outboundTitle: N,
      outboundTermsAndConditions: I
    } = n;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(Z.skuCard, Z.promotionCard),
      children: [(0, i.jsxs)("div", {
        className: Z.mainPromotionCardContainer,
        children: [(0, i.jsxs)("div", {
          className: Z.promotionCardLeftContainer,
          children: [(0, i.jsx)("div", {
            className: Z.promotionIcon,
            children: (0, i.jsx)("img", {
              alt: "",
              src: E,
              className: Z.promotionIconImage
            })
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.X6q, {
              variant: "heading-md/semibold",
              children: N
            }), (0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: Z.__invalid_promotionText,
              children: t
            })]
          })]
        }), !o && (0, i.jsx)(d.zx, {
          className: Z.promotionCardButton,
          color: d.zx.Colors.BRAND,
          size: d.zx.Sizes.SMALL,
          onClick: () => g(true),
          disabled: o,
          children: S
        })]
      }), c && (0, i.jsx)(u.Text, {
        className: Z.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: b.Z.parse(I, false, {
          allowLinks: true
        })
      })]
    }), p && (0, i.jsx)(u.u_l, {
      renderModal: e => {
        var t, r;
        return (0, i.jsx)(C.Z, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, e), r = r = {
          onClose: T,
          onClaim: l,
          code: s,
          outboundPromotion: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      },
      onCloseRequest: T
    })]
  })
}
let k = function() {
  let e = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getGiftable()),
    [t, n] = o().partition(module, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    s = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.isPremiumExactly(Chunk594174.default.getCurrentUser(), Chunk474936.p9.TIER_2)),
    l = o().groupBy(exports, e => (0, I.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [d, f] = Chunk647438.useState(false);
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk496929.Qv)().then(() => Chunk410030(true))
    })
  }, []);
  let {
    promotionsLoaded: b,
    activeOutboundPromotions: _,
    claimedEndedOutboundPromotions: j,
    claimedOutboundPromotionCodeMap: C,
    addClaimedOutboundPromotionCode: k
  } = (0, Chunk725727.lG)(), L = Chunk178100.length + Chunk518638.length > 0, B = Chunk163684.g.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: Chunk120356
  }).enabled && L;
  return Chunk755721 && Chunk454585 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [function() {
      var e;
      let t = require.find(e => e.giftCodeBatchId === R.m8 && !e.consumed),
        r = null != (e = require.filter(e => e.giftCodeBatchId === R.rX && !e.consumed)) ? module : [],
        [l, c] = o().partition(Chunk647438, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === R.Xh.PREMIUM_YEAR_TIER_2
        }),
        d = (0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: L ? Chunk388032.intl.string(Chunk388032.t.wFsj3N) : true
        }),
        m = B ? (0, Chunk951288.jsxs)("div", {
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
                (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
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
        children: [Chunk755721, L ? (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk666707.divider
        }) : null, (0, Chunk951288.jsx)(Chunk504983.Z, {
          className: Chunk666707.gradientContainer,
          isShown: B,
          type: Chunk504983.Y.PREMIUM,
          hasBackground: true,
          children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
            className: a()({
              [Chunk666707.marginContainer]: !B
            }),
            children: [Chunk570140, Chunk518638.map(e => {
              let {
                code: t,
                promotion: n
              } = e;
              return (0, i.jsx)(w, {
                outboundPromotion: n,
                code: t,
                addClaimedOutboundPromotionCode: k,
                disabled: !s
              }, n.id)
            }), Chunk178100.map(e => (0, i.jsx)(w, {
              outboundPromotion: e,
              code: C[e.id],
              addClaimedOutboundPromotionCode: k,
              disabled: !s
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
    }(), (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: Chunk666707.marginContainer,
      children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["9KeUbW"])
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk666707.divider
        }), 0 === Object.keys(Chunk392711).length ? (0, Chunk951288.jsxs)("div", {
          className: Chunk666707.emptyState,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk666707.emptyStateImage
          }), (0, Chunk951288.jsx)(Chunk481060.H, {
            className: Chunk666707.emptyStateHeader,
            children: Chunk388032.intl.string(Chunk388032.t.B1qgZm)
          }), (0, Chunk951288.jsx)("p", {
            className: Chunk666707.emptyStateSubtext,
            children: Chunk388032.intl.format(Chunk388032.t.HezvJy, {
              onClick: function() {
                Chunk230711.Z.open(Chunk981631.oAB.PREMIUM)
              }
            })
          })]
        }) : o().keys(Chunk392711).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: r
          } = (0, I.Z0)(e);
          return (0, i.jsx)(A.Z, {
            className: Z.skuCard,
            skuId: t,
            subscriptionPlanId: n,
            entitlements: l[e],
            giftStyle: r
          }, e)
        })]
      })
    })]
  }) : (0, Chunk951288.jsx)(Chunk481060.$jN, {
    className: Chunk666707.loading
  })
}