/** Chunk was on 30141 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => j,
  Xw: () => B,
  cf: () => M,
  f1: () => w,
  ys: () => N
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk642619 = require("./642619.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk456003 = require("./456003.js"),
  Chunk388032 = require("./388032.jsx");
let L = t => null != t ? C.intl.format(C.t["4kp0AA"], {
    itemName: t
  }) : null,
  B = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideTitle: i,
      isVariantsGroupEnabled: r,
      shouldShowPromotionalExperience: l,
      productName: s,
      pairedProductName: a,
      itemConsumed: u
    } = t;
    if (null != i) return i;
    if (v.Vt.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(k.default.nvaTQk);
    if (v.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (u) return C.intl.string(C.t.t0xkSE);
      else return C.intl.string(C.t.g5W1g4);
    if (null != n) return C.intl.formatToPlainString(new Date < v.a$ ? C.t.BhGU09 : C.t.Jfv5Qk, {
      purchased_item: s,
      suggested_item: a
    });
    if (r && !l) return C.intl.string(C.t.IMffmp);
    else return C.intl.formatToPlainString(C.t.YNaxMj, {
      itemName: s
    })
  },
  N = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideDescription: i,
      productName: r,
      pairedProductName: l,
      shouldShowPromotionalExperience: s,
      promotionalRewardCollectedText: o,
      itemConsumed: d,
      isFractionalPremiumActive: c,
      expiresAt: p
    } = t;
    if (null != i) return i;
    if (v.Vt.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(k.default.UnPGio);
    if (v.Vt.FRACTIONAL_PREMIUM === e.skuId) {
      let t = C.intl.formatToPlainString(C.t["Cz1G9/"], {
        days: 3
      });
      return d ? C.intl.format(C.t.bhLChI, {
        helpCenterLink: I.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: p
      }) : c ? C.intl.string(C.t.fBmhEx) : C.intl.format(C.t["1ZBX4O"], {
        helpCenterLink: I.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (null != n) return C.intl.format(new Date < v.a$ ? C.t["1jBC0t"] : C.t.qSrp39, {
      purchased_item: r,
      suggested_item: l
    });
    return (0, a.EQ)(null == e ? true : e.type).with(u.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, T.Ws)(e);
      return C.intl.format(C.t.fXw44e, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(u.Z.AVATAR_DECORATION, () => s && null != o ? o : L(r)).otherwise(() => L(r))
  },
  M = t => {
    let {
      product: e,
      pairedProduct: n,
      onClose: i,
      analyticsLocations: r,
      hasRequiredProductItems: l,
      handleUseNow: a,
      isApplying: m,
      variantsReturnStyle: I,
      openProfileSettings: P,
      itemConsumed: T
    } = t, _ = [];
    if (v.Vt.ORB_PROFILE_BADGE === e.skuId) _.push({
      text: C.intl.string(k.default.yfwZu7),
      variant: "primary",
      onClick: () => {
        i(), E.S.dispatch(R.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: C.intl.string(C.t["H57f4+"]),
      variant: "secondary",
      onClick: () => {
        i(), (0, A.Y)({
          pageType: R.ZY5.SHOP_ORBS_TAB,
          sectionType: R.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: R.qAy.CTA_TO_QUEST_HOME
        }), (0, y.navigateToQuestHome)()
      }
    });
    else if (v.Vt.FRACTIONAL_PREMIUM === e.skuId) T ? _.push({
      text: C.intl.string(C.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: C.intl.string(C.t.ERKK6u),
      variant: "primary",
      onClick: () => {
        (0, h.$)(i)
      }
    }) : _.push({
      text: C.intl.string(C.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: C.intl.string(C.t["Jr6N+v"]),
      variant: "primary",
      onClick: () => {
        (0, b.openUserSettings)(g.n.SUBSCRIPTIONS_PANEL, {
          section: R.oAB.SUBSCRIPTIONS
        }), i()
      }
    });
    else if (null != n) _.push({
      text: C.intl.string(C.t.ouo4FB),
      variant: "secondary",
      icon: o.OgN,
      onClick: t => {
        t.stopPropagation(), (0, f.Z)({
          skuId: n.skuId,
          isGift: true,
          giftingOrigin: S.Wt.SHOP_PAGE,
          analyticsLocations: r,
          variantsReturnStyle: I,
          onClose: t => {
            t && i()
          }
        })
      }
    });
    else {
      let [t] = e.items;
      _.push({
        text: C.intl.string(C.t["2p2aY2"]),
        variant: l ? "secondary" : "primary",
        onClick: () => {
          if (i(), (0, d.xf)(), null == P || P(), e.type === u.Z.AVATAR_DECORATION) {
            s()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, c.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: r
            });
            return
          }
          if (e.type === u.Z.PROFILE_EFFECT) {
            s()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, O.H)({
              initialSelectedEffectId: t.id,
              analyticsLocations: r
            });
            return
          }
          if (e.type === u.Z.NAMEPLATE) {
            s()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"), (0, p.f)({
              initialSelectedNameplate: t,
              analyticsLocations: r
            });
            return
          }
        }
      })
    }
    return l && _.push({
      text: C.intl.string(C.t.MAS7uL),
      variant: "primary",
      onClick: a,
      loading: m
    }), _
  },
  w = (t, e) => {
    let n = i.useMemo(() => (0, P.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      m.default.track(R.rMx.OPEN_MODAL, {
        type: R.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  j = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [s, a] = i.useState(null),
      u = (0, _.UY)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: l,
      confettiCanvas: s,
      setConfettiCanvas: a,
      customConfettiDisplayOptions: u
    }
  }