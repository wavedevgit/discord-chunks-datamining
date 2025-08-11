/** Chunk was on 75708 **/
/** chunk id: 29599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk454982 = require("./454982.js"),
  Chunk767714 = require("./767714.js"),
  Chunk504983 = require("./504983.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk317941 = require("./317941.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk923756 = require("./923756.js");

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
      outboundTitle: I,
      outboundTermsAndConditions: N
    } = n;
  return <i.Fragment>{<div className={a()(Z.skuCard, Z.promotionCard)}>{<div className={Z.mainPromotionCardContainer}>{<div className={Z.promotionCardLeftContainer}>{<div className={Z.promotionIcon}><img alt={""} src={E} className={Z.promotionIconImage} /></div>}{<div>{<u.X6q variant={"heading-md/semibold"}>{I}</u.X6q>}{<u.Text variant={"text-sm/normal"} color={"text-default"} className={Z.__invalid_promotionText}>{t}</u.Text>}</div>}</div>}{!o && <d.zx className={Z.promotionCardButton} color={d.zx.Colors.BRAND} size={d.zx.Sizes.SMALL} onClick={() => g(true)} disabled={o}>{S}</d.zx>}</div>}{c && <u.Text className={Z.promotionLegalese} variant={"text-xs/normal"} color={"header-secondary"}>{b.Z.parse(N, false, {
          allowLinks: true
        })}</u.Text>}</div>}{p && <u.u_l renderModal={e => {
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
      }} onCloseRequest={T} />}</i.Fragment>
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
    l = o().groupBy(exports, e => (0, N.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [d, f] = Chunk73800.useState(false);
  Chunk73800.useEffect(() => {
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
  } = (0, Chunk725727.lG)(), L = Chunk178100.length + Chunk518638.length > 0, M = Chunk163684.g.useExperiment({
    location: "EntitlementGifts"
  }, {
    autoTrackExposure: false,
    disable: Chunk120356
  }).enabled && L;
  return Chunk755721 && Chunk454585 ? <Chunk255367.Fragment>{function() {
      var e;
      let t = require.find(e => e.giftCodeBatchId === R.m8 && !e.consumed),
        r = null != (e = require.filter(e => e.giftCodeBatchId === R.rX && !e.consumed)) ? module : [],
        [l, c] = o().partition(Chunk73800, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === R.Xh.PREMIUM_YEAR_TIER_2
        }),
        d = (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: L ? Chunk388032.intl.string(Chunk388032.t.wFsj3N) : true
        }),
        m = M ? (0, Chunk255367.jsxs)("div", {
          className: Chunk923756.promoHeaderContainer,
          children: [(0, Chunk255367.jsx)(Chunk481060.SrA, {
            size: "md",
            color: Chunk481060.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
            className: Chunk923756.premiumIcon
          }), (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            className: Chunk923756.promoDescription,
            children: Chunk388032.intl.format(Chunk388032.t.G4fwxM, {
              onClick: () => {
                (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
              }
            })
          }), (0, Chunk255367.jsx)(Chunk767714.Z, {
            showGradient: true,
            className: Chunk923756.promoNitroButton,
            subscriptionTier: Chunk474936.Si.TIER_2,
            textOptions: {
              textOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7O)
            }
          })]
        }) : null;
      return (0, Chunk255367.jsxs)("div", {
        className: Chunk923756.marginContainer,
        children: [Chunk755721, L ? (0, Chunk255367.jsx)(Chunk481060.$i$, {
          className: Chunk923756.divider
        }) : null, (0, Chunk255367.jsx)(Chunk504983.Z, {
          className: Chunk923756.gradientContainer,
          isShown: M,
          type: Chunk504983.Y.PREMIUM,
          hasBackground: true,
          children: (0, Chunk255367.jsxs)(Chunk481060.hjN, {
            className: a()({
              [Chunk923756.marginContainer]: !M
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
            }, e.id)), null != exports ? (0, Chunk255367.jsx)(Chunk317941.Z, {
              className: Chunk923756.skuCard,
              skuId: exports.skuId,
              subscriptionPlanId: exports.subscriptionPlanId,
              entitlements: [exports],
              giftCodeBatchId: Chunk474936.m8
            }, (0, Chunk669079.Bg)(exports.skuId, exports.subscriptionPlanId)) : null, Chunk392711.length > 0 ? (0, Chunk255367.jsx)(Chunk317941.Z, {
              className: Chunk923756.skuCard,
              skuId: Chunk392711[0].skuId,
              subscriptionPlanId: Chunk392711[0].subscriptionPlanId,
              entitlements: Chunk392711,
              giftCodeBatchId: Chunk474936.rX
            }, (0, Chunk669079.Bg)(Chunk392711[0].skuId, Chunk392711[0].subscriptionPlanId)) : null, Chunk442837.length > 0 ? (0, Chunk255367.jsx)(Chunk317941.Z, {
              className: Chunk923756.skuCard,
              skuId: Chunk442837[0].skuId,
              subscriptionPlanId: Chunk442837[0].subscriptionPlanId,
              entitlements: Chunk442837,
              giftCodeBatchId: Chunk474936.rX
            }, (0, Chunk669079.Bg)(Chunk442837[0].skuId, Chunk442837[0].subscriptionPlanId)) : null]
          })
        })]
      })
    }()}{<Chunk481060.hjN className={Chunk923756.marginContainer}><Chunk481060.y5t component={(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["9KeUbW"])
        })}>{<Chunk481060.$i$ className={Chunk923756.divider} />}{0 === Object.keys(Chunk392711).length ? <div className={Chunk923756.emptyState}>{<div className={Chunk923756.emptyStateImage} />}{<Chunk481060.H className={Chunk923756.emptyStateHeader}>{Chunk388032.intl.string(Chunk388032.t.B1qgZm)}</Chunk481060.H>}{<p className={Chunk923756.emptyStateSubtext}>{Chunk388032.intl.format(Chunk388032.t.HezvJy, {
              onClick: function() {
                Chunk230711.Z.open(Chunk981631.oAB.PREMIUM)
              }
            })}</p>}</div> : o().keys(Chunk392711).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: r
          } = (0, N.Z0)(e);
          return <A.Z className={Z.skuCard} skuId={t} subscriptionPlanId={n} entitlements={l[e]} giftStyle={r} />
        })}</Chunk481060.y5t></Chunk481060.hjN>}</Chunk255367.Fragment> : <Chunk481060.$jN className={Chunk923756.loading} />
}